/* ===========================
   MG Studio — script.js
   =========================== */

const content = {
  nav: {
    en: { services: "Services", portfolio: "Portfolio", about: "About", contact: "Contact", cta: "Start Project" },
    ar: { services: "خدماتنا", portfolio: "أعمالنا", about: "من نحن", contact: "تواصل معنا", cta: "ابدأ مشروعك" }
  },
  hero: {
    en: {
      badge: "Professional Web Design Agency",
      title: "We design modern websites that grow your business",
      subtitle: "Professional website design for companies, restaurants, and clinics",
      cta: "Contact on WhatsApp",
      secondary: "View Our Work"
    },
    ar: {
      badge: "وكالة تصميم ويب احترافية",
      title: "نصمم مواقع احترافية تساعدك تنمو",
      subtitle: "تصميم مواقع للشركات والمطاعم والعيادات",
      cta: "تواصل عبر واتساب",
      secondary: "شاهد أعمالنا"
    }
  },
  about: {
    en: {
      title: "Crafting Digital Excellence",
      desc: "At MG Studio, we specialize in delivering high-end, extremely fast, and meticulously crafted web experiences. We don't just build websites; we engineer digital assets that command trust and drive growth. With a focus on unparalleled quality and direct communication, your business gets the premium presence it deserves."
    },
    ar: {
      title: "نصنع التميز الرقمي",
      desc: "في استوديو إم جي، نتخصص في تقديم تجارب ويب راقية وسريعة ومصممة بعناية فائقة. نحن لا نبني مواقع الويب فحسب؛ بل نصمم أصولاً رقمية تفرض الثقة وتحفز النمو. مع التركيز على الجودة التي لا تضاهى والتواصل المباشر، ستحصل شركتك على الحضور المتميز الذي تستحقه."
    }
  },
  services: {
    en: {
      title: "Our Services",
      items: [
        { title: "Website Design", desc: "Custom-tailored modern web design that aligns with your brand identity." },
        { title: "UI/UX Design", desc: "Intuitive user interfaces that provide seamless and engaging user experiences." },
        { title: "Website Redesign", desc: "Modernize and upgrade your existing website for better performance and conversions." },
        { title: "Speed Optimization", desc: "Lightning-fast load times to retain visitors and improve search rankings." }
      ]
    },
    ar: {
      title: "خدماتنا",
      items: [
        { title: "تصميم المواقع", desc: "تصميم مواقع حديثة ومخصصة تتوافق مع هوية علامتك التجارية." },
        { title: "تصميم تجربة المستخدم", desc: "واجهات مستخدم بديهية توفر تجارب مستخدم سلسة وجذابة." },
        { title: "إعادة تصميم المواقع", desc: "تحديث وتطوير موقعك الحالي لتحسين الأداء وزيادة التحويلات." },
        { title: "تحسين سرعة الموقع", desc: "أوقات تحميل فائقة السرعة للاحتفاظ بالزوار وتحسين تصنيفات البحث." }
      ]
    }
  },
  whyus: {
    en: {
      title: "Why Choose MG Studio",
      items: ["Fast Delivery", "Professional Design", "Mobile Responsive", "Direct Communication"]
    },
    ar: {
      title: "لماذا تختار إم جي ستوديو",
      items: ["تسليم سريع", "تصميم احترافي", "متوافق مع الجوال", "تواصل مباشر"]
    }
  },
  portfolio: {
    en: {
      tag: "Portfolio",
      title: "Our Previous Work",
      subtitle: "Real websites we designed and delivered for our clients",
      items: [
        { cat: "Corporate Website", title: "Engineering Consultancy", desc: "A premium dark-themed website for an engineering consultancy firm." },
        { cat: "Food & Beverage", title: "Restaurant Website", desc: "A visual-first website showcasing authentic food experiences." },
        { cat: "Healthcare", title: "Medical Clinic", desc: "A clean, trustworthy website for a full-service medical clinic." }
      ]
    },
    ar: {
      tag: "معرض الأعمال",
      title: "أعمالنا السابقة",
      subtitle: "مواقع حقيقية صممناها وسلّمناها لعملائنا",
      items: [
        { cat: "موقع شركة", title: "استشارات هندسية", desc: "موقع احترافي بتصميم داكن لشركة استشارات هندسية متخصصة." },
        { cat: "مطاعم وكافيهات", title: "موقع مطعم", desc: "موقع بصري جذاب يعرض تجربة طعام أصيلة لا تُنسى." },
        { cat: "رعاية صحية", title: "عيادة طبية", desc: "موقع نظيف وموثوق لعيادة طبية متكاملة الخدمات." }
      ]
    }
  },
  contact: {
    en: {
      title: "Start Your Project Today",
      subtitle: "Fill in your details and we'll reply on WhatsApp within minutes.",
      formTitle: "Send Us a Message",
      infoTitle: "Contact Information",
      fields: {
        name: "Full Name", namePh: "Your name",
        phone: "Phone Number", phonePh: "e.g. 0512345678",
        service: "Service Needed", servicePh: "Select a service",
        services: ["Website Design", "UI/UX Design", "Website Redesign", "Speed Optimization", "Other"],
        message: "Tell us about your project", messagePh: "Brief description of what you need...",
        submit: "Send via WhatsApp", sending: "Opening WhatsApp..."
      },
      info: {
        wa: "Chat on WhatsApp", email: "Send an Email", response: "We reply within minutes"
      }
    },
    ar: {
      title: "ابدأ مشروعك اليوم",
      subtitle: "أدخل بياناتك وسنرد عليك عبر واتساب خلال دقائق.",
      formTitle: "أرسل لنا رسالة",
      infoTitle: "معلومات التواصل",
      fields: {
        name: "الاسم الكامل", namePh: "اكتب اسمك",
        phone: "رقم الجوال", phonePh: "مثال: 0512345678",
        service: "الخدمة المطلوبة", servicePh: "اختر خدمة",
        services: ["تصميم موقع", "تصميم UI/UX", "إعادة تصميم الموقع", "تحسين السرعة", "أخرى"],
        message: "أخبرنا عن مشروعك", messagePh: "وصف مختصر لما تحتاجه...",
        submit: "إرسال عبر واتساب", sending: "جارٍ فتح واتساب..."
      },
      info: {
        wa: "تحدث عبر واتساب", email: "أرسل بريداً إلكترونياً", response: "نرد خلال دقائق"
      }
    }
  },
  footer: {
    en: "Design • Develop • Grow",
    ar: "صمم • طور • انمو"
  }
};

const PHONE = "966538207366";
const EMAIL = "mgarib.008@gmail.com";

let lang = "ar";

/* ---- helpers ---- */
function t(section) { return content[section][lang]; }

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
function setAttr(id, attr, val) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, val);
}
function setHtml(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = val;
}

/* ---- update all content ---- */
function updateContent() {
  const isAr = lang === "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  document.getElementById("btn-lang-label").textContent = isAr ? "EN" : "AR";

  const nav = t("nav");
  setText("nav-services", nav.services);
  setText("nav-portfolio", nav.portfolio);
  setText("nav-about", nav.about);
  setText("nav-contact", nav.contact);
  setText("nav-cta", nav.cta);

  const hero = t("hero");
  setText("hero-badge-text", hero.badge);
  setText("hero-title", hero.title);
  setText("hero-subtitle", hero.subtitle);
  setText("hero-cta", hero.cta);
  setText("hero-secondary", hero.secondary);

  const about = t("about");
  setText("about-title", about.title);
  setText("about-desc", about.desc);

  const services = t("services");
  setText("services-title", services.title);
  services.items.forEach((item, i) => {
    setText(`srv-title-${i}`, item.title);
    setText(`srv-desc-${i}`, item.desc);
  });

  const whyus = t("whyus");
  setText("whyus-title", whyus.title);
  whyus.items.forEach((item, i) => setText(`why-item-${i}`, item));

  const portfolio = t("portfolio");
  setText("portfolio-tag", portfolio.tag);
  setText("portfolio-title", portfolio.title);
  setText("portfolio-subtitle", portfolio.subtitle);
  portfolio.items.forEach((item, i) => {
    setText(`port-cat-${i}`, item.cat);
    setText(`port-title-${i}`, item.title);
    setText(`port-desc-${i}`, item.desc);
  });

  const contact = t("contact");
  setText("contact-title", contact.title);
  setText("contact-subtitle", contact.subtitle);
  setText("contact-form-title", contact.formTitle);
  setText("contact-info-title", contact.infoTitle);

  const f = contact.fields;
  setText("lbl-name", f.name);     setAttr("inp-name", "placeholder", f.namePh);
  setText("lbl-phone", f.phone);   setAttr("inp-phone", "placeholder", f.phonePh);
  setText("lbl-service", f.service);
  setText("lbl-message", f.message); setAttr("inp-message", "placeholder", f.messagePh);
  setText("btn-submit", f.submit);

  const sel = document.getElementById("inp-service");
  if (sel) {
    const curVal = sel.value;
    sel.innerHTML = `<option value="" disabled selected>${f.servicePh}</option>` +
      f.services.map(s => `<option value="${s}">${s}</option>`).join("");
    sel.value = curVal || "";
  }

  const info = contact.info;
  setText("info-wa-label", info.wa);
  setText("info-email-label", info.email);
  setText("info-response", info.response);

  setText("footer-tagline", t("footer"));
}

/* ---- language toggle ---- */
document.getElementById("btn-lang").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  updateContent();
});

/* ---- WhatsApp form ---- */
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name    = document.getElementById("inp-name").value.trim();
  const phone   = document.getElementById("inp-phone").value.trim();
  const service = document.getElementById("inp-service").value.trim();
  const message = document.getElementById("inp-message").value.trim();

  const btn = document.getElementById("btn-submit");
  const originalText = btn.textContent;
  btn.textContent = t("contact").fields.sending;
  btn.disabled = true;

  const text = lang === "ar"
    ? `مرحباً MG Studio،\n\nالاسم: ${name}\nالجوال: ${phone}\nالخدمة: ${service}\nالمشروع: ${message}`
    : `Hello MG Studio,\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nProject: ${message}`;

  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");

  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
  }, 2000);
});

/* ---- Fade-in on scroll ---- */
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* ---- Init ---- */
updateContent();
