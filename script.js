/* =========================================================
   script.js – language switcher, navbar, FAQ, review form
   ========================================================= */

/* ---------- EDITABLE CONFIGURATION ----------
   Add the real links here when you have them. */
const CONFIG = {
  whatsapp: "212667806157",              // shared WhatsApp number (international format, no +)
  maps: {                                // Google Maps links ("Voir l'adresse")
    elhammoumi: "",                      // e.g. "https://maps.app.goo.gl/XXXX"
    goud: ""                             // e.g. "https://maps.app.goo.gl/YYYY"
  },
  facebook: {                            // Facebook page links
    "fb-elhammoumi": "",
    "fb-goud": ""
  },
  // Used ONLY while a Google Maps link above is empty: opens a Google Maps search for the address text.
  mapSearchFallback: {
    elhammoumi: "Résidence Riad Sofia, Hay Lissasfa, Route El Jadida, Casablanca, Morocco",
    goud: "Hay Al Masjid, Rue H, près du Lycée Al Ghazali, Casablanca 20520, Morocco"
  }
};

/* ---------- TRANSLATIONS ---------- */
const I18N = {
  fr: {
    title: "Auto-École El Hammoumi & Goud Academie – Casablanca",
    top1: "Deux auto-écoles à Casablanca", top2: "Permis A, B et C", top3: "WhatsApp / Téléphone :",
    nav_home: "Accueil", nav_courses: "Formations", nav_agencies: "Nos agences", nav_about: "À propos",
    nav_reviews: "Avis clients", nav_faq: "FAQ", nav_contact: "Contact", nav_enroll: "S'inscrire",
    hero_kicker: "AUTO-ÉCOLES À CASABLANCA",
    hero_h1a: "Apprenez à conduire.", hero_h1b: "Conduisez en toute confiance.",
    hero_p: "Découvrez nos formations théoriques et pratiques pour préparer votre permis de conduire avec nos deux agences à Casablanca.",
    hero_btn1: "Découvrir nos formations", hero_btn2: "Choisir une agence",
    hb1: "Permis A, B et C", hb2: "Théorie et pratique", hb3: "2 agences",
    f1: "Formation théorique", f2: "Formation pratique", f3: "Permis A, B et C",
    f4: "Deux agences à Casablanca", f5: "Motos disponibles : 300 cc et 350 cc",
    c_kicker: "NOS FORMATIONS", c_title: "Nos formations pour chaque catégorie",
    c1_t: "PERMIS B – VOITURE", c1_d: "Préparez votre permis de conduire voiture avec une formation théorique et pratique.",
    c2_t: "PERMIS A – MOTO", c2_d: "Découvrez la formation à la conduite moto et préparez votre permis.",
    c3_t: "PERMIS C – CAMION", c3_d: "Préparez votre permis camion grâce à une formation adaptée.",
    c4_t: "CODE DE LA ROUTE", c4_d: "Apprenez les règles de circulation et préparez votre examen théorique.",
    learn_more: "En savoir plus",
    s1: "agences à Casablanca", s2: "catégories de permis : A, B et C", s3v: "Voitures et motos", s3: "Faciles à apprendre et à conduire",
    s4v: "300 / 350 cc", s4: "Motos",
    ab_kicker: "À PROPOS", ab_title: "Deux agences, un accompagnement pour votre permis",
    ab_p: "Auto-École El Hammoumi et Goud Academie vous proposent des formations théoriques et pratiques pour les permis A, B et C à Casablanca.",
    ab_l1: "Formation théorique et pratique.", ab_l2: "Plusieurs catégories de permis.",
    ab_l3: "Deux agences à Casablanca.", ab_l4: "Contact direct avec l'agence de votre choix.",
    ab_btn: "Choisir une agence", ap_title: "Nos deux agences",
    ap_el: "Lissasfa – Route El Jadida, Casablanca.", ap_g: "Hay Al Masjid, Casablanca.",
    ag_kicker: "NOS AGENCES", ag_title: "Choisissez votre agence à Casablanca",
    ag_p: "Retrouvez les informations de nos deux agences et contactez directement celle de votre choix.",
    l_addr: "Adresse", l_land: "Téléphone fixe", l_mob: "Mobile / WhatsApp", l_mail: "E-mail", l_serv: "Services", l_hours: "Horaires",
    el_addr: "Résidence Riad Sofia, Groupe 2, Immeuble 5, Appartement 76, RDC, Hay Lissasfa – Route El Jadida, Casablanca, Morocco.",
    g_addr: "N° 10, Hay Al Masjid, Rue H, près du Lycée Al Ghazali, Casablanca 20520, Morocco.",
    serv: "Permis A, B, C, Code de la route, formation théorique et pratique.",
    el_hours: "Contactez l'agence pour connaître les horaires.",
    g_h1: "Lundi au vendredi : 07:00 – 21:00", g_h2: "Samedi et dimanche : 07:00 – 18:00",
    b_call: "Appeler", b_map: "Voir l'adresse",
    rv_kicker: "AVIS DE NOS CLIENTS", rv_title: "Les avis de nos clients", rv_sum: "7 avis Google – 5/5",
    rv1: "Un grand merci à toute l’équipe de l’auto-école Goud académie, en particulier à Mounia et Elaf pour leur soutien et leur professionnalisme. Grâce à vous, j’ai obtenu 39/40 au code ! Je recommande vivement cette auto-école ❤️❤️❤️",
    rv2: "Très satisfaite des services de Goud Academie pour l'obtention du permis B, merci à Simohamed et à toute son équipe pour leur sérieux et leur professionnalisme, je recommande à 100% !",
    rv3: "Equipe formidable toujours a l’écoute, merci pour votre soutien 🙏🙏🙏🙏🙏",
    fm_title: "Partagez votre expérience",
    fm_desc: "Votre avis compte ! Racontez-nous votre expérience et aidez les futurs élèves.",
    fm_name: "Nom (facultatif)", fm_name_ph: "Votre nom", fm_rating: "Note", fm_text: "Votre avis",
    fm_text_ph: "Écrivez votre avis ici...", fm_submit: "Envoyer mon avis",
    fm_note: "Votre avis sera envoyé pour validation avant sa publication.",
    err_rating: "Veuillez choisir une note de 1 à 5 étoiles.", err_text: "Veuillez écrire votre avis.",
    wa_head: "Nouvel avis client", wa_name: "Nom", wa_none: "(non précisé)", wa_rating: "Note", wa_review: "Avis",
    fq_kicker: "FAQ", fq_title: "Questions fréquentes",
    q1: "Quelles catégories de permis sont disponibles ?", a1: "Les deux agences proposent les formations pour les permis A, B et C.",
    q2: "Quels types de formations proposez-vous ?", a2: "Les deux agences proposent une formation théorique et une formation pratique, ainsi qu'une préparation au Code de la route.",
    q3: "Quelles sont les cylindrées des motos disponibles ?", a3: "Les motos disponibles comprennent des modèles de 300 cc et de 350 cc.",
    q4: "Quelle est la différence entre El Hammoumi et Goud Academie ?", a4: "Ce sont deux agences distinctes, situées à des adresses différentes à Casablanca. Elles proposent les mêmes catégories de formation. Vous pouvez choisir l'agence qui vous convient.",
    q5: "Où se trouve Auto-École El Hammoumi ?", a5: "À la Résidence Riad Sofia, Groupe 2, Immeuble 5, Appartement 76, RDC, Hay Lissasfa – Route El Jadida, Casablanca.",
    q6: "Où se trouve Goud Academie ?", a6: "Au N° 10, Hay Al Masjid, Rue H, près du Lycée Al Ghazali, Casablanca 20520.",
    q7: "Quels sont les horaires de Goud Academie ?", a7: "Du lundi au vendredi de 07:00 à 21:00 et le samedi et dimanche de 07:00 à 18:00.",
    q8: "Quels sont les horaires d'Auto-École El Hammoumi ?", a8: "Veuillez contacter directement l'agence pour connaître ses horaires.",
    q9: "Comment puis-je m'inscrire ?", a9: "Vous pouvez contacter directement l'agence de votre choix par téléphone ou WhatsApp.",
    q10: "Comment connaître les tarifs ?", a10: "Contactez directement l'agence concernée pour obtenir les informations sur les tarifs.",
    q11: "Les deux agences proposent-elles les mêmes formations ?", a11: "Oui, les deux agences proposent les permis A, B et C, ainsi que la formation théorique et pratique.",
    cta_title: "Prêt à commencer votre formation ?",
    cta_p: "Choisissez votre agence et contactez-nous pour obtenir plus d'informations.",
    cta_btn: "Choisir mon agence",
    ft_desc: "Deux auto-écoles à Casablanca : permis A, B et C.",
    ft_links: "LIENS RAPIDES", ft_courses: "FORMATIONS", ft_rights: "Tous droits réservés.",
    toast_link: "Le lien sera ajouté prochainement."
  },
  ar: {
    title: "مدرسة السياقة الحمومي و Goud Academie – الدار البيضاء",
    top1: "مدرستان لتعليم السياقة بالدار البيضاء", top2: "رخص السياقة A و B و C", top3: "واتساب / هاتف :",
    nav_home: "الرئيسية", nav_courses: "التكوينات", nav_agencies: "وكالاتنا", nav_about: "من نحن",
    nav_reviews: "آراء الزبناء", nav_faq: "الأسئلة الشائعة", nav_contact: "اتصل بنا", nav_enroll: "سجّل الآن",
    hero_kicker: "مدارس تعليم السياقة بالدار البيضاء",
    hero_h1a: "تعلّم السياقة.", hero_h1b: "سُق بكل ثقة.",
    hero_p: "اكتشف تكويناتنا النظرية والتطبيقية للتحضير لرخصة السياقة مع وكالتينا بالدار البيضاء.",
    hero_btn1: "اكتشف تكويناتنا", hero_btn2: "اختر وكالة",
    hb1: "رخص A و B و C", hb2: "نظري وتطبيقي", hb3: "وكالتان",
    f1: "تكوين نظري", f2: "تكوين تطبيقي", f3: "رخص A و B و C",
    f4: "وكالتان بالدار البيضاء", f5: "دراجات نارية متوفرة: 300 سم³ و 350 سم³",
    c_kicker: "تكويناتنا", c_title: "تكويناتنا لكل فئة",
    c1_t: "رخصة B – سيارة", c1_d: "حضّر رخصة سياقة السيارات بتكوين نظري وتطبيقي.",
    c2_t: "رخصة A – دراجة نارية", c2_d: "اكتشف التكوين على سياقة الدراجة النارية وحضّر رخصتك.",
    c3_t: "رخصة C – شاحنة", c3_d: "حضّر رخصة الشاحنات بفضل تكوين مناسب.",
    c4_t: "قانون السير", c4_d: "تعلّم قواعد السير وحضّر امتحانك النظري.",
    learn_more: "اعرف المزيد",
    s1: "وكالتان بالدار البيضاء", s2: "فئات الرخص: A و B و C", s3v: "سيارات ودراجات", s3: "سهلة التعلم والسياقة",
    s4v: "300 / 350 سم³", s4: "دراجات نارية",
    ab_kicker: "من نحن", ab_title: "وكالتان، ومواكبة للحصول على رخصة السياقة",
    ab_p: "تقترح عليكم مدرسة السياقة الحمومي و Goud Academie تكوينات نظرية وتطبيقية لرخص السياقة A و B و C بالدار البيضاء.",
    ab_l1: "تكوين نظري وتطبيقي.", ab_l2: "عدة فئات من رخص السياقة.",
    ab_l3: "وكالتان بالدار البيضاء.", ab_l4: "تواصل مباشر مع الوكالة التي تختارها.",
    ab_btn: "اختر وكالة", ap_title: "وكالتانا",
    ap_el: "ليساسفة – طريق الجديدة، الدار البيضاء.", ap_g: "حي المسجد، الدار البيضاء.",
    ag_kicker: "وكالاتنا", ag_title: "اختر وكالتك بالدار البيضاء",
    ag_p: "تعرّف على معلومات وكالتينا وتواصل مباشرة مع الوكالة التي تختارها.",
    l_addr: "العنوان", l_land: "الهاتف الثابت", l_mob: "الهاتف المحمول / واتساب", l_mail: "البريد الإلكتروني", l_serv: "الخدمات", l_hours: "ساعات العمل",
    el_addr: "إقامة رياض صوفيا، المجموعة 2، العمارة 5، الشقة 76، الطابق الأرضي، حي ليساسفة – طريق الجديدة، الدار البيضاء، المغرب.",
    g_addr: "رقم 10، حي المسجد، زنقة H، بالقرب من ثانوية الغزالي، الدار البيضاء 20520، المغرب.",
    serv: "رخص A و B و C، قانون السير، تكوين نظري وتطبيقي.",
    el_hours: "تواصلوا مع الوكالة لمعرفة ساعات العمل.",
    g_h1: "من الاثنين إلى الجمعة: 07:00 – 21:00", g_h2: "السبت والأحد: 07:00 – 18:00",
    b_call: "اتصل", b_map: "عرض العنوان",
    rv_kicker: "آراء زبنائنا", rv_title: "آراء زبنائنا", rv_sum: "7 تقييمات على Google – 5/5",
    rv1: "شكرًا جزيلًا لكل فريق مدرسة السياقة Goud Académie، خصوصًا منية وإلاف على دعمهما واحترافيتهما. بفضلكم حصلت على 39/40 في امتحان القانون! أنصح بهذه المدرسة بشدة ❤️❤️❤️",
    rv2: "راضية جدًا عن خدمات Goud Academie للحصول على رخصة السياقة B، شكرًا لسيمحمد ولكل فريقه على جديتهم واحترافيتهم، أنصح بها بنسبة 100%!",
    rv3: "فريق رائع ودائمًا في الإنصات، شكرًا على دعمكم 🙏🙏🙏🙏🙏",
    fm_title: "شاركنا تجربتك",
    fm_desc: "رأيك يهمنا! احكِ لنا عن تجربتك وساعد التلاميذ المستقبليين.",
    fm_name: "الاسم (اختياري)", fm_name_ph: "اسمك", fm_rating: "التقييم", fm_text: "رأيك",
    fm_text_ph: "اكتب رأيك هنا...", fm_submit: "إرسال رأيي",
    fm_note: "سيتم إرسال رأيك للمراجعة قبل نشره.",
    err_rating: "المرجو اختيار تقييم من نجمة إلى خمس نجوم.", err_text: "المرجو كتابة رأيك.",
    wa_head: "رأي جديد من زبون", wa_name: "الاسم", wa_none: "(غير محدد)", wa_rating: "التقييم", wa_review: "الرأي",
    fq_kicker: "الأسئلة الشائعة", fq_title: "الأسئلة المتكررة",
    q1: "ما هي فئات رخص السياقة المتوفرة؟", a1: "تقترح الوكالتان تكوينات لرخص السياقة A و B و C.",
    q2: "ما أنواع التكوينات التي تقترحونها؟", a2: "تقترح الوكالتان تكوينًا نظريًا وتكوينًا تطبيقيًا، إضافة إلى التحضير لقانون السير.",
    q3: "ما هي سعات الدراجات النارية المتوفرة؟", a3: "تشمل الدراجات النارية المتوفرة طرازات بسعة 300 سم³ و 350 سم³.",
    q4: "ما الفرق بين الحمومي و Goud Academie؟", a4: "هما وكالتان مستقلتان، توجدان في عنوانين مختلفين بالدار البيضاء. تقترحان نفس فئات التكوين. يمكنك اختيار الوكالة التي تناسبك.",
    q5: "أين توجد مدرسة السياقة الحمومي؟", a5: "إقامة رياض صوفيا، المجموعة 2، العمارة 5، الشقة 76، الطابق الأرضي، حي ليساسفة – طريق الجديدة، الدار البيضاء.",
    q6: "أين توجد Goud Academie؟", a6: "رقم 10، حي المسجد، زنقة H، بالقرب من ثانوية الغزالي، الدار البيضاء 20520.",
    q7: "ما هي ساعات عمل Goud Academie؟", a7: "من الاثنين إلى الجمعة من 07:00 إلى 21:00، والسبت والأحد من 07:00 إلى 18:00.",
    q8: "ما هي ساعات عمل مدرسة السياقة الحمومي؟", a8: "المرجو الاتصال مباشرة بالوكالة لمعرفة ساعات عملها.",
    q9: "كيف يمكنني التسجيل؟", a9: "يمكنك الاتصال مباشرة بالوكالة التي تختارها عبر الهاتف أو واتساب.",
    q10: "كيف أعرف الأثمنة؟", a10: "تواصل مباشرة مع الوكالة المعنية للحصول على معلومات حول الأثمنة.",
    q11: "هل تقترح الوكالتان نفس التكوينات؟", a11: "نعم، تقترح الوكالتان رخص A و B و C، إضافة إلى التكوين النظري والتطبيقي.",
    cta_title: "هل أنت مستعد لبدء تكوينك؟",
    cta_p: "اختر وكالتك وتواصل معنا للحصول على مزيد من المعلومات.",
    cta_btn: "اختر وكالتي",
    ft_desc: "مدرستان لتعليم السياقة بالدار البيضاء: رخص A و B و C.",
    ft_links: "روابط سريعة", ft_courses: "التكوينات", ft_rights: "جميع الحقوق محفوظة.",
    toast_link: "سيتم إضافة الرابط قريبًا."
  }
};

let currentLang = "fr";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const t = key => (I18N[currentLang] && I18N[currentLang][key]) || I18N.fr[key] || "";

/* ---------- LANGUAGE ---------- */
function setLanguage(lang) {
  if (!I18N[lang]) lang = "fr";
  currentLang = lang;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach(el => { const v = I18N[lang][el.dataset.i18n]; if (v !== undefined) el.textContent = v; });
  $$("[data-i18n-placeholder]").forEach(el => { const v = I18N[lang][el.dataset.i18nPlaceholder]; if (v !== undefined) el.placeholder = v; });
  document.title = I18N[lang].title;

  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }
}

/* ---------- TOAST ---------- */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  /* language switch */
  $$(".lang button").forEach(b => b.addEventListener("click", () => setLanguage(b.dataset.lang)));
  let saved = "fr";
  try { saved = localStorage.getItem("lang") || "fr"; } catch (e) {}
  setLanguage(saved);

  /* mobile menu */
  const burger = $("#burger"), links = $("#navLinks");
  const closeMenu = () => { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("a", links).forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("click", e => { if (!e.target.closest("#navbar")) closeMenu(); });
  window.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 960) closeMenu(); });

  /* active nav link on scroll */
  const navAnchors = $$(".nav-links a:not(.btn)");
  const sections = navAnchors.map(a => $(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(s => io.observe(s));
  }

  /* map buttons ("Voir l'adresse") */
  $$("[data-map]").forEach(a => {
    const key = a.dataset.map;
    const link = CONFIG.maps[key];
    a.href = link || ("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.mapSearchFallback[key]));
  });

  /* social links placeholders */
  $$("[data-link]").forEach(a => {
    const url = CONFIG.facebook[a.dataset.link];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    else a.addEventListener("click", e => { e.preventDefault(); toast(t("toast_link")); });
  });

  /* FAQ accordion */
  $$(".faq-item").forEach(item => {
    const btn = $(".faq-q", item);
    btn.addEventListener("click", () => {
      const willOpen = !item.classList.contains("open");
      $$(".faq-item.open").forEach(o => { o.classList.remove("open"); $(".faq-q", o).setAttribute("aria-expanded", "false"); });
      if (willOpen) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
    });
  });

  /* star rating */
  const starBtns = $$("#starInput button");
  let rating = 0;
  const paint = n => starBtns.forEach(b => {
    const on = Number(b.dataset.value) <= n;
    b.classList.toggle("on", on);
  });
  starBtns.forEach(b => {
    b.addEventListener("click", () => {
      rating = Number(b.dataset.value);
      starBtns.forEach(x => x.setAttribute("aria-checked", String(x === b)));
      paint(rating);
      $("#ratingError").hidden = true;
    });
    b.addEventListener("mouseenter", () => paint(Number(b.dataset.value)));
    b.addEventListener("focus", () => paint(Number(b.dataset.value)));
  });
  $("#starInput").addEventListener("mouseleave", () => paint(rating));
  $("#starInput").addEventListener("focusout", () => paint(rating));

  /* review form -> WhatsApp */
  const form = $("#reviewForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#rName").value.trim();
    const text = $("#rText").value.trim();
    const noRating = rating < 1;
    const noText = text.length === 0;
    $("#ratingError").hidden = !noRating;
    $("#textError").hidden = !noText;
    if (noRating) { $("#starInput button").focus(); return; }
    if (noText) { $("#rText").focus(); return; }

    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    const msg =
      t("wa_head") + "\n" +
      t("wa_name") + " : " + (name || t("wa_none")) + "\n" +
      t("wa_rating") + " : " + stars + " (" + rating + "/5)\n" +
      t("wa_review") + " : " + text;
    const url = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg);
    window.open(url, "_blank", "noopener");
  });
  $("#rText").addEventListener("input", () => { if ($("#rText").value.trim()) $("#textError").hidden = true; });
});