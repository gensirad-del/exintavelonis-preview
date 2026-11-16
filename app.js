'use strict';
const previewBase = new URL('.', document.currentScript.src).pathname;

const translations = {
  el: {
    skip:'Μετάβαση στο περιεχόμενο',utility:'Επεξεργασία & εμπορία κρεάτων · Από το 1961',navHome:'Αρχική',navStory:'Η εταιρεία',navProducts:'Προϊόντα',navQuality:'Ποιότητα',navContact:'Επικοινωνία',collaborate:'Συνεργαστείτε μαζί μας',
    heroEyebrow:'ΟΙΚΟΓΕΝΕΙΑΚΗ ΠΑΡΑΔΟΣΗ ΑΠΟ ΤΟ 1961',heroTitle:'Η ποιότητα',heroAccent:'έχει παράδοση.',heroCopy:'Η γνώση περνά από γενιά σε γενιά. Η φροντίδα φτάνει σε κάθε κοπή. Κρέας με την υπογραφή Εξηνταβελόνης.',exploreProducts:'Ανακαλύψτε τα προϊόντα',ourStory:'Η ιστορία μας',heroOrigin:'ΛΑΚΚΩΜΑ ΧΑΛΚΙΔΙΚΗΣ<br>Σύγχρονη παραγωγή. Σταθερές αξίες.',scroll:'ΓΝΩΡΙΣΤΕ ΤΗ ΔΙΑΦΟΡΑ',heroCaption:'Η πρώτη ύλη στο επίκεντρο',
    fact1:'Η αρχή της οικογενειακής μας παράδοσης',fact2:'Η μονάδα μας στο Λάκκωμα Χαλκιδικής',fact3:'Κατηγορίες για κάθε επαγγελματική ανάγκη',productsEyebrow:'Ο ΚΑΤΑΛΟΓΟΣ ΜΑΣ',productsTitle:'Καλή πρώτη ύλη.<br>Καλύτερο αποτέλεσμα.',productsIntro:'Από τον παραδοσιακό γύρο μέχρι τις premium κοπές, επιλέξτε τα προϊόντα που ταιριάζουν στη δική σας κουζίνα.',allCategories:'Όλες οι κατηγορίες',loading:'Φόρτωση καταλόγου…',catalogueNote:'Η σωστή επιλογή ξεκινά από τις ανάγκες σας. Μιλήστε με την ομάδα μας για διαθεσιμότητα, συσκευασίες και προσφορά.',talkToUs:'Ας μιλήσουμε',
    since:'ΜΙΑ ΙΣΤΟΡΙΑ ΑΠΟ ΤΟ',continues:'ΠΟΥ ΣΥΝΕΧΙΖΕΤΑΙ ΚΑΘΕ ΜΕΡΑ',storyEyebrow:'ΟΙ ΑΝΘΡΩΠΟΙ ΠΙΣΩ ΑΠΟ ΤΗΝ ΠΟΙΟΤΗΤΑ',storyTitle:'Οι εποχές αλλάζουν.<br>Οι αξίες μας μένουν.',storyLead:'Για εμάς, το καλό κρέας είναι οικογενειακή υπόθεση.',storyText:'Η παράδοσή μας ξεκίνησε το 1961. Από το 1994, στη σύγχρονη μονάδα μας στο Λάκκωμα Χαλκιδικής, συνδυάζουμε την εμπειρία με την τεχνογνωσία και τον σεβασμό στην πρώτη ύλη.',storyText2:'Σήμερα συνεχίζουμε με την ίδια φροντίδα: οργανωμένη παραγωγή, προσεκτική επεξεργασία και προσωπική σχέση με κάθε συνεργάτη.',familyName:'Οικογένεια Εξηνταβελόνη',signature:'Η εμπειρία μας, στη δική σας κουζίνα.',meetUs:'Γνωρίστε μας από κοντά',
    qualityEyebrow:'ΣΕ ΚΑΘΕ ΣΤΑΔΙΟ, Η ΙΔΙΑ ΦΡΟΝΤΙΔΑ',qualityTitle:'Η συνέπεια είναι<br>η δική μας υπογραφή.',qualityIntro:'Από την επιλογή της πρώτης ύλης μέχρι την παράδοση, η ποιότητα είναι μια καθημερινή διαδικασία.',quality1Title:'Επιλεγμένη πρώτη ύλη',quality1Text:'Προσεκτική επιλογή και επεξεργασία, με σεβασμό στα χαρακτηριστικά κάθε κοπής.',quality2Title:'Ελεγχόμενη παραγωγή',quality2Text:'Οργανωμένες διαδικασίες και παρακολούθηση σε όλα τα στάδια της παραγωγής.',quality3Title:'Υπεύθυνη διανομή',quality3Text:'Σωστή ψυκτική αλυσίδα και συντονισμός για τη σταθερή τροφοδοσία της επιχείρησής σας.',
    partnerEyebrow:'ΓΙΑ ΤΟΥΣ ΕΠΑΓΓΕΛΜΑΤΙΕΣ ΤΗΣ ΓΕΥΣΗΣ',partnerTitle:'Εσείς δημιουργείτε.<br>Εμείς είμαστε δίπλα σας.',partnerText:'Ψητοπωλείο, εστιατόριο ή κατάστημα λιανικής; Ας βρούμε μαζί τις επιλογές που χρειάζεται η επιχείρησή σας.',requestQuote:'Ζητήστε προσφορά',contactEyebrow:'ΑΣ ΞΕΚΙΝΗΣΟΥΜΕ ΜΙΑ ΣΥΝΕΡΓΑΣΙΑ',contactTitle:'Η επόμενη καλή<br>συνεργασία ξεκινά<br>με μια συζήτηση.',address:'Λάκκωμα, 63080<br>Νέα Καλλικράτεια, Χαλκιδική',
    formTitle:'Πείτε μας τι χρειάζεστε.',nameLabel:'Ονοματεπώνυμο *',companyLabel:'Επιχείρηση',emailLabel:'Email *',phoneLabel:'Τηλέφωνο',messageLabel:'Το μήνυμά σας *',formNote:'Ετοιμάστε το αίτημά σας και ανοίξτε το στο πρόγραμμα email σας για έλεγχο και αποστολή.',prepareEmail:'Ετοιμασία αιτήματος',privacyNote:'Τα στοιχεία δεν αποθηκεύονται στην ιστοσελίδα.',legalName:'Δ. ΕΞΗΝΤΑΒΕΛΟΝΗΣ<br>ΕΠΕΞΕΡΓΑΣΙΑ ΚΡΕΑΤΩΝ Ι.Κ.Ε.',backTop:'Στην κορυφή',rights:'Με επιφύλαξη παντός δικαιώματος.',proposal:'Σχεδιαστική πρόταση · Περιεχόμενο από την υπάρχουσα ιστοσελίδα',yourRequest:'Το αίτημά σας',draftEyebrow:'ΤΟ ΑΙΤΗΜΑ ΣΑΣ',draftTitle:'Έτοιμο για αποστολή.',draftNote:'Ελέγξτε το κείμενο και ανοίξτε το στο email σας. Η αποστολή γίνεται από εσάς.',openEmail:'Άνοιγμα email',copyText:'Αντιγραφή κειμένου',all:'Όλα',search:'Αναζήτηση προϊόντος',messagePlaceholder:'Προϊόντα, ποσότητες ή ερωτήσεις για τη συνεργασία μας…',noResults:'Δεν βρέθηκαν προϊόντα. Δοκιμάστε μια άλλη αναζήτηση.',resetSearch:'Καθαρισμός αναζήτησης',catalogueError:'Ο κατάλογος δεν φορτώθηκε. Δοκιμάστε ξανά ή καλέστε μας στο 23990 51507.',retry:'Νέα προσπάθεια',viewProducts:'Δείτε τα προϊόντα',addToRequest:'Προσθήκη στο αίτημα',added:'Προστέθηκε στο αίτημά σας',alreadyAdded:'Έχει προστεθεί στο αίτημα',availability:'Επικοινωνήστε μαζί μας για διαθεσιμότητα, συσκευασίες, ποσότητες και τιμή.',sourceProduct:'Πλήρη στοιχεία στην υπάρχουσα ιστοσελίδα',photoUnavailable:'Χωρίς διαθέσιμη φωτογραφία',close:'Κλείσιμο',menuOpen:'Άνοιγμα μενού',menuClose:'Κλείσιμο μενού',remove:'Αφαίρεση',copied:'Το κείμενο αντιγράφηκε.',copyFailed:'Δεν ήταν δυνατή η αντιγραφή. Επιλέξτε και αντιγράψτε το παραπάνω κείμενο.',subject:'Αίτημα συνεργασίας — Εξηνταβελόνης',productsLabel:'Προϊόντα ενδιαφέροντος',categoryCount:'κατηγορίες προϊόντων',productsCount:'προϊόντα',productSingular:'προϊόν',options:'επιλογές',results:'αποτελέσματα',
  },
  en: {
    skip:'Skip to content',utility:'Meat processing & trade · Since 1961',navHome:'Home',navStory:'Our story',navProducts:'Products',navQuality:'Quality',navContact:'Contact',collaborate:'Become a partner',
    heroEyebrow:'A FAMILY TRADITION SINCE 1961',heroTitle:'Quality rooted',heroAccent:'in tradition.',heroCopy:'Knowledge passed from one generation to the next. Care in every cut. Meat with the Exintavelonis signature.',exploreProducts:'Explore our products',ourStory:'Our story',heroOrigin:'LAKKOMA, CHALKIDIKI<br>Modern production. Lasting values.',scroll:'DISCOVER THE DIFFERENCE',heroCaption:'It all starts with the meat',fact1:'The beginning of our family tradition',fact2:'Our facility in Lakkoma, Chalkidiki',fact3:'Categories for your professional kitchen',
    productsEyebrow:'OUR COLLECTION',productsTitle:'Great ingredients.<br>Even better results.',productsIntro:'From traditional gyros to premium cuts, find the products that belong in your kitchen.',allCategories:'All categories',loading:'Loading products…',catalogueNote:'The right choice starts with your needs. Talk to our team about availability, packaging and a quote.',talkToUs:'Let’s talk',
    since:'OUR STORY BEGAN IN',continues:'AND CONTINUES EVERY DAY',storyEyebrow:'THE PEOPLE BEHIND THE QUALITY',storyTitle:'Times change.<br>Our values remain.',storyLead:'For us, great meat is a family affair.',storyText:'Our family tradition began in 1961. Since 1994, our modern facility in Lakkoma, Chalkidiki, has brought together experience, expertise and respect for the raw material.',storyText2:'Today, we continue with the same care: organised production, thoughtful processing and a personal relationship with every partner.',familyName:'The Exintavelonis family',signature:'Our experience. In your kitchen.',meetUs:'Come and meet us',
    qualityEyebrow:'THE SAME CARE, AT EVERY STAGE',qualityTitle:'Consistency is<br>our signature.',qualityIntro:'From choosing the meat to its delivery, quality is a daily commitment.',quality1Title:'Selected ingredients',quality1Text:'Careful selection and processing, respecting the character of every cut.',quality2Title:'Controlled production',quality2Text:'Organised processes and monitoring at every stage of production.',quality3Title:'Responsible delivery',quality3Text:'A maintained cold chain and coordinated supply for your business.',
    partnerEyebrow:'FOR PEOPLE WHO CREATE GREAT FOOD',partnerTitle:'You create.<br>We stand beside you.',partnerText:'A grill house, restaurant or retail shop? Let’s find the products your business needs.',requestQuote:'Request a quote',contactEyebrow:'LET’S BUILD A PARTNERSHIP',contactTitle:'Every great<br>partnership starts<br>with a conversation.',address:'Lakkoma, 63080<br>Nea Kallikrateia, Chalkidiki',
    formTitle:'Tell us what you need.',nameLabel:'Full name *',companyLabel:'Business',emailLabel:'Email *',phoneLabel:'Phone',messageLabel:'Your message *',formNote:'Prepare your request, then open it in your email app to review and send.',prepareEmail:'Prepare your request',privacyNote:'Your details are not stored on this website.',legalName:'D. EXINTAVELONIS<br>MEAT PROCESSING P.C.',backTop:'Back to top',rights:'All rights reserved.',proposal:'Design proposal · Content from the existing website',yourRequest:'Your request',draftEyebrow:'YOUR REQUEST',draftTitle:'Ready to send.',draftNote:'Review the draft and open it in your email app. You send the message yourself.',openEmail:'Open email app',copyText:'Copy message',all:'All',search:'Search products',messagePlaceholder:'Products, quantities or questions about working together…',noResults:'No products found. Try a different search.',resetSearch:'Clear search',catalogueError:'The catalogue could not load. Please try again or call +30 23990 51507.',retry:'Try again',viewProducts:'View products',addToRequest:'Add to your request',added:'Added to your request',alreadyAdded:'Already in your request',availability:'Contact our team for availability, packaging, quantities and pricing.',sourceProduct:'Full details on the existing website',photoUnavailable:'Photo not available',close:'Close',menuOpen:'Open menu',menuClose:'Close menu',remove:'Remove',copied:'Message copied.',copyFailed:'Copy was unavailable. Please select and copy the draft above.',subject:'Partnership enquiry — Exintavelonis',productsLabel:'Products of interest',categoryCount:'product categories',productsCount:'products',productSingular:'product',options:'options',results:'results',
  }
};

Object.assign(translations.el,{heroTitle:'Επεξεργασία κρεάτων στο Λάκκωμα',heroCopy:'Επεξεργασία κρεάτων, εμπορία κρεάτων, κρέατα και γύρος — Χαλκιδική, Θεσσαλονίκη. Παραδοσιακή ποιότητα. Σύγχρονη παραγωγή.',exploreProducts:'Δείτε τα προϊόντα',scroll:'ΚΥΛΙΣΗ',pauseMotion:'Παύση κίνησης',resumeMotion:'Συνέχιση κίνησης'});
Object.assign(translations.en,{heroTitle:'Meat processing in Lakkoma',heroCopy:'Meat processing, meat trade, meat and gyros — Chalkidiki, Thessaloniki. Traditional quality. Modern production.',exploreProducts:'View our products',scroll:'SCROLL',pauseMotion:'Pause animation',resumeMotion:'Resume animation'});
Object.assign(translations.el,{navStory:'Σχετικά με εμάς',readOurStory:'Διαβάστε την ιστορία μας',address:'ΑΓΡΟΤΕΜΑΧΙΟ 1282<br>Λάκκωμα 63080, Χαλκιδική, Ελλάδα'});
Object.assign(translations.en,{navStory:'About us',readOurStory:'Read our full story',address:'PLOT 1282<br>Lakkoma 63080, Chalkidiki, Greece'});
Object.assign(translations.el,{contactPageLink:'Στοιχεία επικοινωνίας & χάρτης ↗'});
Object.assign(translations.en,{contactPageLink:'Contact information & map ↗'});
Object.assign(translations.el,{footerLegal:'Δ. ΕΞΗΝΤΑΒΕΛΟΝΗΣ ΕΠΕΞΕΡΓΑΣΙΑ ΚΡΕΑΤΩΝ Ι.Κ.Ε',footerAddress:'ΑΓΡΟΤΕΜΑΧΙΟ 1282, Λάκκωμα 63080, Χαλκιδική, Ελλάδα',footerQuickLinks:'Γρήγοροι Σύνδεσμοι',footerContactTitle:'Στοιχεία Επικοινωνίας',footerContactLink:'Επικοινωνία &amp; Τοποθεσία'});
Object.assign(translations.en,{footerLegal:'D. EXINTAVELONIS MEAT PROCESSING I.K.E',footerAddress:'Plot 1282, Lakkoma 63080, Halkidiki, Greece',footerQuickLinks:'Quick Links',footerContactTitle:'Contact Information',footerContactLink:'Contact &amp; Location'});
Object.assign(translations.el,{heroTitle:'Εξηνταβελόνης Ι.Κ.Ε.',heroCopy:'Επεξεργασία και εμπορία κρεάτων στο Λάκκωμα Χαλκιδικής. Κρέατα, γύρος και σουβλάκια χονδρικής για επαγγελματίες, με παραδόσεις στην Κεντρική Μακεδονία.',productsTitle:'Τα προϊόντα<br>Εξηνταβελόνης.',productsIntro:'Γύροι, σουβλάκια, κρέατα και επιλεγμένες κοπές. Γνωρίστε τον κατάλογό μας και ζητήστε προσφορά για όσα χρειάζεται η κουζίνα σας.',fullCatalogue:'Όλα τα προϊόντα & οι πληροφορίες τους',familyName:'Οικογένεια Εξηνταβελόνη',fact2:'Επεξεργασία κρεάτων στο Λάκκωμα Χαλκιδικής',storyText:'Η οικογενειακή μας παράδοση ξεκίνησε το 1961, με το πρώτο κρεοπωλείο του παππού. Σήμερα, η Δ. ΕΞΗΝΤΑΒΕΛΟΝΗΣ ΕΠΕΞΕΡΓΑΣΙΑ ΚΡΕΑΤΩΝ Ι.Κ.Ε. συνεχίζει τη διαδρομή με τη δική της εταιρική ταυτότητα και βάση το Λάκκωμα Χαλκιδικής.'});
Object.assign(translations.en,{heroTitle:'Exintavelonis I.K.E.',heroCopy:'Meat processing and trade in Lakkoma, Chalkidiki. Wholesale meat, gyros and souvlaki for professionals, with deliveries in Central Macedonia.',productsTitle:'The Exintavelonis<br>collection.',productsIntro:'Gyros, souvlaki, meat and selected cuts. Explore the catalogue and request a quote for your kitchen.',fullCatalogue:'All products & their details',fact2:'Meat processing in Lakkoma, Chalkidiki',storyText:'Our family tradition began in 1961 with our grandfather’s first butcher shop. Today, D. EXINTAVELONIS MEAT PROCESSING I.K.E. continues that journey with its own corporate identity, based in Lakkoma, Chalkidiki.'});

Object.assign(translations.el,{metaTitle:'Εξηνταβελόνης ΙΚΕ | Κρέατα & γύρος χονδρικής',metaDescription:'Εξηνταβελόνης ΙΚΕ: κρέατα, γύρος και σουβλάκια χονδρικής από το Λάκκωμα Χαλκιδικής. Παραδόσεις σε Θεσσαλονίκη και Κεντρική Μακεδονία. Ζητήστε προσφορά.',storyTitle:'Η Εξηνταβελόνης Ι.Κ.Ε.<br>σήμερα.',storyLead:'Επεξεργασία και εμπορία κρεάτων για επαγγελματίες της εστίασης.',readOurStory:'Η εταιρεία και η ιστορία μας'});
Object.assign(translations.en,{metaTitle:'Exintavelonis I.K.E. | Wholesale meat & gyros',metaDescription:'Exintavelonis I.K.E.: wholesale meat, gyros and souvlaki from Lakkoma, Chalkidiki. Deliveries in Thessaloniki and Central Macedonia. Request a quote.',storyTitle:'Exintavelonis I.K.E.<br>today.',storyLead:'Meat processing and trade for food service professionals.',readOurStory:'Our company and family history'});
Object.assign(translations.el,{formNote:'Στείλτε το αίτημά σας απευθείας στην ομάδα μας. Δεν χρειάζεται να ανοίξετε εφαρμογή email.',privacyNote:'Τα στοιχεία του αιτήματος προωθούνται στην ομάδα μας μέσω Telegram για να επικοινωνήσουμε μαζί σας.'});
Object.assign(translations.en,{formNote:'Send your enquiry directly to our team. No email app is needed.',privacyNote:'Your enquiry details are forwarded to our team via Telegram so we can contact you.'});

Object.assign(translations.el,{motionEyebrow:'ΕΞΗΝΤΑΒΕΛΟΝΗΣ Ι.Κ.Ε. · MEAT THE PREMIUM',motionTitle:'Η πρώτη ύλη.<span>Σε πρώτο πλάνο.</span>',motionCopy:'Επιλεγμένες κοπές, γύρος και σουβλάκια για τη δική σας κουζίνα. Με την εμπειρία και τη φροντίδα της οικογένειας Εξηνταβελόνη.',motionStory:'Η ιστορία μας',motionSince:'Η αρχή της οικογενειακής μας παράδοσης.',motionCollection:'ΜΙΑ ΜΑΤΙΑ ΣΤΟΝ ΚΑΤΑΛΟΓΟ',motionSelected:'Η ΕΠΙΛΟΓΗ ΜΑΣ',motionView:'Το προϊόν',motionChoose:'Επιλεγμένα προϊόντα',motionScroll:'ΑΝΑΚΑΛΥΨΤΕ ΤΗ ΣΥΛΛΟΓΗ',motionPlace:'ΛΑΚΚΩΜΑ ΧΑΛΚΙΔΙΚΗΣ · ΕΛΛΑΔΑ'});
Object.assign(translations.en,{motionEyebrow:'EXINTAVELONIS I.K.E. · MEAT THE PREMIUM',motionTitle:'Great meat.<span>Centre stage.</span>',motionCopy:'Selected cuts, gyros and souvlaki for your professional kitchen. With the experience and care of the Exintavelonis family.',motionStory:'Our story',motionSince:'The beginning of our family tradition.',motionCollection:'A GLIMPSE OF THE COLLECTION',motionSelected:'OUR SELECTION',motionView:'View product',motionChoose:'Featured products',motionScroll:'EXPLORE THE COLLECTION',motionPlace:'LAKKOMA, CHALKIDIKI · GREECE'});


Object.assign(translations.el,{privacyLink:'Πολιτική απορρήτου',cookiesLink:'Cookies & χάρτης',privacyNote:'Χρησιμοποιούμε τα στοιχεία σας για να απαντήσουμε στο αίτημά σας. Το περιεχόμενο και τα στοιχεία επικοινωνίας προωθούνται στην ομάδα της εταιρείας μέσω Telegram.',privacySensitive:'Μην συμπεριλάβετε ευαίσθητα προσωπικά δεδομένα ή στοιχεία πληρωμών.'});
Object.assign(translations.en,{privacyLink:'Privacy policy',cookiesLink:'Cookies & map',privacyNote:'We use your details to respond to your enquiry. Its content and your contact details are forwarded to the company team through Telegram.',privacySensitive:'Please do not include sensitive personal data or payment details.'});

const $ = selector => document.querySelector(selector);
let language = new URLSearchParams(location.search).get('lang') || ('el');
if(!['el','en'].includes(language))language='el';
let catalogue = [];
let selectedCategory = 'all';
let activeProduct = null;
const requestedProducts = new Map();
const categoryOrder = ['gyros','souvlaki','premium','beef','pork','chicken','lamb','minced'];
const previews = {gyros:'d0cf747c7fdf',souvlaki:'f56652253d29',premium:'d715a4e001e6',beef:'e8d0dd1fde81',pork:'7151e676b926',chicken:'8c789009ff42',lamb:'8d6297100b85',minced:'cd8e1c02c30e'};
const categoryTaglines = {
  gyros:['Η γεύση που ξεχωρίζει','A distinctive flavour'],souvlaki:['Παράδοση σε κάθε μπουκιά','Tradition in every bite'],premium:['Κοπές με χαρακτήρα','Cuts with character'],beef:['Για τη δική σας κουζίνα','Made for your kitchen'],pork:['Επιλογές για κάθε συνταγή','A cut for every recipe'],chicken:['Καθημερινή ευελιξία','Everyday versatility'],lamb:['Αυθεντική, πλούσια γεύση','An authentic, rich flavour'],minced:['Δημιουργίες με φροντίδα','Crafted with care']
};

const t = key => translations[language][key] || key;
const normalise = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('el');
const productName = p => language === 'en' ? p.nameEn : p.name;
const categoryName = c => language === 'en' ? c.titleEn : c.title;
function element(tag, className, text) {const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;}
function arrow(){const a=element('span','card-arrow','↗');a.setAttribute('aria-hidden','true');return a;}

function localise() {
  document.documentElement.lang = language;
  document.title = t('metaTitle');
  document.querySelectorAll('[data-i18n]').forEach(el => {el.innerHTML=t(el.dataset.i18n);});
  document.querySelectorAll('[data-home-link]').forEach(link=>{link.href=previewBase+(language==='en'?'?lang=en':'');});
  document.querySelectorAll('[data-products-link]').forEach(link=>{link.href='https://www.exintavelonispc.gr/'+language+'/products/';});
  document.querySelectorAll('[data-about-link]').forEach(link=>{link.href='https://www.exintavelonispc.gr/'+language+'/about/';});
  document.querySelectorAll('[data-contact-link]').forEach(link=>{link.href='https://www.exintavelonispc.gr/'+language+'/contact/';});
  document.querySelectorAll('[data-privacy-link]').forEach(link=>{link.href='https://www.exintavelonispc.gr/'+language+'/privacy/';});
  document.querySelectorAll('[data-cookies-link]').forEach(link=>{link.href='https://www.exintavelonispc.gr/'+language+'/privacy/#cookies';});
  document.querySelectorAll('[data-footer-language]').forEach(link=>{link.href=previewBase+(link.dataset.footerLanguage==='en'?'?lang=en':'');});
  document.querySelector('link[rel=canonical]').href='https://www.exintavelonispc.gr/'+language+'/home/';
  document.querySelector('meta[name=description]').content=t('metaDescription');
  document.querySelector('meta[property="og:title"]').content=document.title;
  document.querySelector('meta[property="og:description"]').content=t('metaDescription');
  document.querySelector('meta[property="og:url"]').content=document.querySelector('link[rel=canonical]').href;
  document.querySelector('meta[property="og:locale"]').content=language==='el'?'el_GR':'en_GB';
  const schemaElement=document.querySelector('script[type="application/ld+json"]');
  const schemaData=JSON.parse(schemaElement.textContent);
  const webpage=schemaData['@graph'].find(entity=>entity['@type']==='WebPage');
  Object.assign(webpage,{'@id':document.querySelector('link[rel=canonical]').href+'#webpage',url:document.querySelector('link[rel=canonical]').href,name:document.title,description:t('metaDescription'),inLanguage:language});
  schemaElement.textContent=JSON.stringify(schemaData);
  $('#language').textContent=language==='el'?'EN':'EL';
  $('#language-current').textContent=language==='el'?'EL':'EN';
  $('#language').setAttribute('aria-label',language==='el'?'Switch to English':'Αλλαγή στα ελληνικά');
  document.querySelectorAll('[data-footer-language]').forEach(link=>{if(link.dataset.footerLanguage===language)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');});
  $('.footer-brand').setAttribute('aria-label',language==='el'?'Εξηνταβελόνης — Αρχική':'Exintavelonis — Home');
  $('#product-search').placeholder=t('search');$('#product-search').setAttribute('aria-label',t('search'));
  $('#quote-form textarea').placeholder=t('messagePlaceholder');
  $('#navigation').setAttribute('aria-label',language==='el'?'Κύρια πλοήγηση':'Main navigation');
  $('#filters').setAttribute('aria-label',language==='el'?'Κατηγορίες προϊόντων':'Product categories');
  $('#menu-toggle').setAttribute('aria-label',t($('#menu-toggle').getAttribute('aria-expanded')==='true'?'menuClose':'menuOpen'));
  document.querySelectorAll('.dialog-close').forEach(b=>b.setAttribute('aria-label',t('close')));
  if($('.hero-logo'))$('.hero-logo').alt=language==='el'?'Εξηνταβελόνης — Meat the Premium, οικογενειακή παράδοση από το 1961':'Exintavelonis — Meat the Premium, family tradition since 1961';
  $('#motion-toggle').textContent=t($('#motion-toggle').getAttribute('aria-pressed')==='true'?'resumeMotion':'pauseMotion');
  $('.story-visual>img').alt=language==='el'?'Οι σημαίες στην εγκατάσταση Εξηνταβελόνης στο Λάκκωμα Χαλκιδικής':'Flags at the Exintavelonis facility in Lakkoma, Chalkidiki';
  if(catalogue.length){renderFilters();renderCatalogue();}
  renderBasket();
  if(activeProduct && $('#product-dialog').open)renderDetail(activeProduct);
  document.dispatchEvent(new CustomEvent('site:language'));
}

function renderFilters(){
  const filters=$('#filters');filters.replaceChildren();
  [{id:'all',title:t('all')},...categoryOrder.map(id=>{const c=catalogue.find(c=>c.id===id);return{id,title:categoryName(c)};})].forEach(c=>{
    const btn=element('button','filter'+(selectedCategory===c.id?' selected':''),c.title);btn.type='button';btn.dataset.category=c.id;btn.setAttribute('aria-pressed',String(selectedCategory===c.id));btn.addEventListener('click',()=>selectCategory(c.id));filters.append(btn);
  });
}

function selectCategory(id){selectedCategory=id;$('#product-search').value='';renderFilters();renderCatalogue();}

function placeholder(){
  const box=element('div','card-placeholder');box.innerHTML='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M13 35c-7 1-10-6-4-11 4-3 3-12 10-16 11-6 25 7 17 17-5 7-16 10-23 10Z"/><ellipse cx="25" cy="17" rx="6" ry="5"/><path d="m7 31 4 10c12 3 26-5 29-12l-4-11"/></svg>';
  box.append(element('span',null,t('photoUnavailable')));return box;
}

function categoryCard(category,index){
  const btn=element('a','category-card');btn.href='https://www.exintavelonispc.gr/'+language+'/products/'+category.id+'/';btn.setAttribute('aria-label',categoryName(category)+' — '+t('viewProducts'));
  const visual=element('div','card-image');const img=element('img');img.src=previewBase+'assets/'+previews[category.id]+'.webp';img.alt=categoryName(category);img.loading='lazy';img.width=828;img.height=600;visual.append(img,element('span','card-number',String(index+1).padStart(2,'0')));
  const body=element('span','card-body');const row=element('span','card-title-row');row.append(element('span','card-title',categoryName(category)),arrow());body.append(row,element('span','card-caption',category.products.length+' '+t('options')+' · '+categoryTaglines[category.id][language==='el'?0:1]));btn.append(visual,body);
  return btn;
}

function productCard(product,index){
  const btn=element('button','product-card');btn.type='button';btn.setAttribute('aria-label',productName(product));
  const visual=element('div','card-image');
  if(product.image){const img=element('img');img.src='https://www.exintavelonispc.gr/'+product.image;img.alt=productName(product);img.loading='lazy';img.width=828;img.height=600;visual.append(img);}else visual.append(placeholder());
  visual.append(element('span','card-number',String(index+1).padStart(2,'0')));
  const body=element('span','card-body');const row=element('span','card-title-row');row.append(element('span','card-title',productName(product)),arrow());
  body.append(row,element('span','card-caption',language==='el'?product.description:product.descriptionEn));btn.append(visual,body);btn.addEventListener('click',()=>openProduct(product));return btn;
}

function renderCatalogue(){
  const grid=$('#product-grid');grid.replaceChildren();grid.setAttribute('aria-busy','false');
  const query=normalise($('#product-search').value.trim());
  $('#reset-catalogue').hidden=selectedCategory==='all'&&!query;
  if(selectedCategory==='all'&&!query){
    categoryOrder.forEach((id,i)=>grid.append(categoryCard(catalogue.find(c=>c.id===id),i)));
    $('#results-count').textContent=catalogue.length+' '+t('categoryCount');return;
  }
  const items=catalogue.filter(c=>selectedCategory==='all'||c.id===selectedCategory).flatMap(c=>c.products);
  const results=query?items.filter(p=>normalise([p.name,p.nameEn,p.description,p.descriptionEn,p.categoryTitle,p.categoryTitleEn].join(' ')).includes(query)):items;
  const cat=catalogue.find(c=>c.id===selectedCategory);
  $('#results-count').textContent=(cat?categoryName(cat)+' · ':'')+results.length+' '+(results.length===1?t('productSingular'):t('productsCount'));
  if(!results.length){const empty=element('div','empty-state');empty.append(element('p',null,t('noResults')));const reset=element('button','text-link',t('resetSearch'));reset.type='button';reset.addEventListener('click',()=>selectCategory('all'));empty.append(reset);grid.append(empty);return;}
  results.forEach((p,i)=>grid.append(productCard(p,i)));
}

function openProduct(product){activeProduct=product;renderDetail(product);$('#product-dialog').showModal();document.body.style.overflow='hidden';}
function renderDetail(product){
  const layout=element('div','detail-layout');
  if(product.image){const img=element('img','detail-photo');img.src='https://www.exintavelonispc.gr/'+product.image;img.alt=productName(product);layout.append(img);}else layout.append(placeholder());
  const copy=element('div','detail-copy');const title=element('h2',null,productName(product));title.id='detail-title';$('#product-dialog').setAttribute('aria-labelledby','detail-title');
  copy.append(element('p','eyebrow',language==='el'?product.categoryTitle:product.categoryTitleEn),title,element('p','detail-description',language==='el'?product.description:product.descriptionEn),element('p','detail-note',t('availability')));
  const add=element('button','button dark',requestedProducts.has(product.id)?t('alreadyAdded'):t('addToRequest'));add.type='button';add.disabled=requestedProducts.has(product.id);add.addEventListener('click',()=>{requestedProducts.set(product.id,product);renderBasket();add.textContent=t('alreadyAdded');add.disabled=true;status.textContent=t('added');});
  const status=element('p','detail-status');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const source=element('a','text-link',(language==='el'?'Σελίδα προϊόντος':'Product page')+' ↗');source.href='https://www.exintavelonispc.gr'+new URL(product.source).pathname.replace('/el/','/'+language+'/')+'/';
  copy.append(add,status,source);layout.append(copy);$('#product-detail').replaceChildren(layout);
}

function renderBasket(){
  $('#quote-basket').hidden=requestedProducts.size===0;$('#basket-count').textContent=String(requestedProducts.size);
  const items=$('#quote-items');items.replaceChildren();
  requestedProducts.forEach((p,id)=>{const chip=element('span','quote-chip');chip.append(element('span',null,productName(p)));const remove=element('button',null,'×');remove.type='button';remove.setAttribute('aria-label',t('remove')+' '+productName(p));remove.addEventListener('click',()=>{requestedProducts.delete(id);renderBasket();if(activeProduct?.id===id)renderDetail(activeProduct);});chip.append(remove);items.append(chip);});
}

async function loadCatalogue(){
  $('#product-grid').setAttribute('aria-busy','true');
  try{
    const response=await fetch(previewBase+'catalogue.json');if(!response.ok)throw new Error('Catalogue unavailable');catalogue=await response.json();
    catalogue.forEach(c=>c.products.forEach((p,i)=>Object.assign(p,{id:c.id+'-'+i,category:c.id,categoryTitle:c.title,categoryTitleEn:c.titleEn})));
    renderFilters();renderCatalogue();
  }catch{
    const grid=$('#product-grid');grid.replaceChildren(element('p','loading',t('catalogueError')));grid.setAttribute('aria-busy','false');const retry=element('button','button outline',t('retry'));retry.type='button';retry.addEventListener('click',loadCatalogue);grid.append(retry);
  }
}

$('#product-search').addEventListener('input',renderCatalogue);
$('#reset-catalogue').addEventListener('click',()=>selectCategory('all'));
function changeLanguage(next){language=next;const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);localise();}
$('#language').addEventListener('click',()=>changeLanguage(language==='el'?'en':'el'));
document.querySelectorAll('[data-footer-language]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();changeLanguage(link.dataset.footerLanguage);}));
$('#motion-toggle').addEventListener('click',()=>{const paused=$('#motion-toggle').getAttribute('aria-pressed')!=='true';$('#motion-toggle').setAttribute('aria-pressed',String(paused));$('#motion-toggle').textContent=t(paused?'resumeMotion':'pauseMotion');$('#home').classList.toggle('motion-paused',paused);});
const motionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>entry.target.classList.toggle('is-offscreen',!entry.isIntersecting));},{threshold:0});
motionObserver.observe($('#home'));
$('#menu-toggle').addEventListener('click',()=>{const open=$('#menu-toggle').getAttribute('aria-expanded')!=='true';$('#menu-toggle').setAttribute('aria-expanded',String(open));$('#menu-toggle').setAttribute('aria-label',t(open?'menuClose':'menuOpen'));$('#navigation').classList.toggle('open',open);});
$('#navigation').addEventListener('click',event=>{if(event.target.closest('a')){$('#navigation').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');$('#menu-toggle').setAttribute('aria-label',t('menuOpen'));}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('#navigation').classList.contains('open')){$('#navigation').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');$('#menu-toggle').setAttribute('aria-label',t('menuOpen'));$('#menu-toggle').focus();}});
$('#quote-basket').addEventListener('click',()=>{$('#contact').scrollIntoView({behavior:'smooth'});$('#quote-form input').focus({preventScroll:true});});
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.style.overflow='';});dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});});
const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('#navigation a').forEach(link=>link.classList.toggle('active',link.hash==='#'+entry.target.id));}});},{rootMargin:'-15% 0px -65% 0px',threshold:0});
document.querySelectorAll('main>section[id]').forEach(section=>navObserver.observe(section));
localise();loadCatalogue();
