'use strict';
(() => {
  const hero = document.querySelector('.motion-home');
  if (!hero) return;
  const panels = [...hero.querySelectorAll('[data-motion-panel]')];
  const buttons = [...hero.querySelectorAll('[data-motion-select]')];
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  let active = 0;
  let frame = 0;
  let x = 0;
  let y = 0;

  function localiseShowcase() {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'el';
    hero.querySelectorAll('[data-motion-language]').forEach(node => {
      node.hidden = node.dataset.motionLanguage !== lang;
    });
    hero.querySelectorAll('[data-name-el]').forEach(node => {
      const target = node.querySelector('[data-motion-name]') || node;
      target.textContent = node.dataset[lang === 'en' ? 'nameEn' : 'nameEl'];
    });
    hero.querySelectorAll('[data-motion-link]').forEach(link => {
      link.href = 'https://www.exintavelonispc.gr/' + lang + '/products/' + link.dataset.motionLink + '/';
    });
    hero.querySelector('[data-motion-selector]').setAttribute('aria-label',
      lang === 'en' ? 'Featured products' : 'Επιλεγμένα προϊόντα');
  }

  function select(index) {
    if (index === active) return;
    active = index;
    panels.forEach((panel, i) => { panel.hidden = i !== index; });
    buttons.forEach((button, i) => { button.setAttribute('aria-pressed', String(i === index)); });
    x = 0; y = 0; requestUpdate();
  }
  buttons.forEach((button, index) => button.addEventListener('click', () => select(index)));

  function update() {
    frame = 0;
    const stopped = preference.matches || hero.classList.contains('motion-paused') || document.hidden;
    const bounds = hero.getBoundingClientRect();
    const visible = bounds.bottom > 0 && bounds.top < innerHeight;
    const progress = stopped || !visible ? 0 : Math.min(1, Math.max(0, -bounds.top / bounds.height));
    hero.style.setProperty('--motion-scroll', progress.toFixed(3));
    hero.style.setProperty('--pointer-x', stopped ? '0px' : (x * 9).toFixed(2) + 'px');
    hero.style.setProperty('--pointer-y', stopped ? '0px' : (y * 7).toFixed(2) + 'px');
    hero.style.setProperty('--pointer-r', stopped ? '0deg' : (x * 1.3).toFixed(2) + 'deg');
  }
  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  hero.querySelector('.motion-showcase').addEventListener('pointermove', event => {
    if (!pointer.matches || preference.matches || hero.classList.contains('motion-paused')) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
    y = (event.clientY - bounds.top) / bounds.height * 2 - 1;
    requestUpdate();
  }, {passive: true});
  hero.querySelector('.motion-showcase').addEventListener('pointerleave', () => { x = 0; y = 0; requestUpdate(); });
  addEventListener('scroll', requestUpdate, {passive: true});
  addEventListener('resize', requestUpdate, {passive: true});
  preference.addEventListener('change', requestUpdate);
  document.addEventListener('visibilitychange', () => {
    hero.classList.toggle('motion-document-hidden', document.hidden);
    requestUpdate();
  });
  hero.querySelector('#motion-toggle').addEventListener('click', requestUpdate);
  document.addEventListener('site:language', localiseShowcase);
  localiseShowcase();
  requestUpdate();
})();
