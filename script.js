(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     Spanish text. English lives in index.html, so the page
     works without JavaScript. To edit copy: change the English
     in index.html and the matching key below.
     --------------------------------------------------------- */
  var ES = {
    "skip": "Saltar al contenido",
    "nav.menu": "Menú",
    "nav.about": "Sobre mí",
    "nav.help": "Cómo ayudo",
    "nav.experience": "Experiencia",
    "nav.resumes": "Currículums",
    "nav.contact": "Contacto",
    "hero.greeting": "Hola, soy Zuhail.",
    "hero.role": "Intake legal, atención al cliente y apoyo administrativo en español",
    "hero.lede": "Abogada formada en Venezuela y hablante nativa de español, con más de ocho años de experiencia en atención al cliente. Ayudo a los equipos a atender a sus clientes hispanohablantes con paciencia, precisión y confidencialidad.",
    "hero.cta1": "Escríbame",
    "hero.cta2": "Descargar currículum",
    "hero.photo": "Fotografía profesional próximamente",
    "chip1": "Español nativo",
    "chip2": "Inglés básico conversacional",
    "chip3": "100 % remoto · Tiempo parcial",
    "chip4": "Autorizada para trabajar en EE. UU.",
    "st1": "años de experiencia en atención al cliente",
    "st2": "llamadas atendidas al día",
    "st3": "de satisfacción del cliente, 12 % sobre el promedio de la empresa",
    "about.kicker": "Sobre mí",
    "about.title": "Cuidadosa con los detalles.<br>Cálida con las personas.",
    "about.p1": "Obtuve mi título de abogada en la Universidad de Falcón, en Venezuela, en 2012 y ejercí de forma independiente en derecho civil y mercantil, redactando contratos y documentos legales y utilizando software legal.",
    "about.p2": "Durante más de ocho años atendí a clientes en Costa Rica, en Sealed B J LLC y Claro Telecomunicaciones, gestionando solicitudes, quejas y consultas técnicas. Mi trabajo más reciente fue como maestra principal de niños pequeños en RCMA, en Florida.",
    "about.p3": "Ahora busco un trabajo 100 % remoto a tiempo parcial, donde pueda ayudar a firmas de abogados, equipos de intake y equipos de servicio a atender a sus clientes hispanohablantes.",
    "about.note": "Autorizada para ejercer la abogacía en Venezuela. No tengo licencia para ejercer la abogacía en Estados Unidos y no ofrezco asesoría legal.",
    "help.kicker": "Cómo puedo ayudar",
    "help.title": "Lo que aporto a su equipo",
    "s1.t": "Apoyo en intake legal",
    "s1.d": "Ayudar a firmas de abogados y equipos de intake a comunicarse con clientes hispanohablantes, registrar su información con precisión y aplicar la terminología jurídica de mi formación en derecho civil y mercantil.",
    "s2.t": "Atención a clientes hispanohablantes",
    "s2.d": "Gestión de solicitudes, preguntas y quejas por teléfono, incluida la atención de alto volumen de más de 90 llamadas diarias con una satisfacción del 92 %.",
    "s3.t": "Preparación de contratos y documentos",
    "s3.d": "Preparación cuidadosa de contratos y documentos legales en español, basada en mi experiencia redactando contratos de compraventa, traspasos de propiedad y autorizaciones de viaje.",
    "s4.t": "Registro de datos y apoyo administrativo",
    "s4.d": "Registro de nuevos clientes, ingreso y recuperación de datos de clientes, y manejo de Microsoft Office, Google Workspace y software de CRM.",
    "exp.kicker": "Experiencia y formación",
    "exp.title": "Derecho, servicio y cuidado",
    "legal.tag": "Formación jurídica · Venezuela",
    "legal.h": "Formada y con ejercicio como abogada",
    "e6.t": "Título de Abogada",
    "e5.t": "Abogada — Ejercicio libre de la profesión",
    "e5.b1": "Derecho civil y mercantil",
    "e5.b2": "Redacté contratos y documentos legales: contratos de compraventa, traspasos de propiedad y autorizaciones de viaje",
    "e5.b3": "Utilicé software legal en mi trabajo jurídico en Venezuela",
    "e6.d": "Autorizada para ejercer la abogacía en Venezuela. No tiene licencia para ejercer la abogacía en Estados Unidos.",
    "e1.w": "Abr 2023 – May 2025",
    "e1.t": "Teacher 1 — Maestra de niños pequeños (estacional)",
    "e1.d": "Maestra principal de un aula de guardería de hasta 15 niños de 1 a 4 años. Planifiqué actividades de aprendizaje y desarrollo y mantuve comunicación constante con padres y administración.",
    "e2.t": "Ventas de telefonía móvil y cuidado infantil",
    "e2.w": "Dos puestos consecutivos",
    "e2.d": "Vendí teléfonos móviles y líneas de servicio telefónico y, posteriormente, trabajé en una guardería.",
    "e3.t": "Atención al cliente",
    "e3.d": "Gestioné solicitudes, preguntas, quejas y sugerencias; informé sobre productos y servicios de telecomunicaciones; y brindé asistencia técnica para resolver problemas.",
    "e4.t": "Servicio al cliente",
    "e4.d": "Atendí más de 90 llamadas diarias: registro de nuevos clientes, recuperación de datos, información de productos y cancelación de servicios. Obtuve una satisfacción promedio del 92 %, un 12 % sobre el promedio de la empresa, y propuse tácticas de retención que redujeron las cancelaciones en un 5 %.",
    "e7.w": "Capacitación",
    "e7.t": "Capacitación en Cuidado Infantil del DCF",
    "e7.d": "Florida · 45 horas",
    "res.kicker": "Currículums",
    "res.title": "Elija la versión que mejor se adapte al puesto",
    "res.sub": "Cada currículum está disponible en inglés y en español, en PDF con texto seleccionable.",
    "r1.k": "Para firmas de abogados",
    "r1.t": "Apoyo legal e intake de clientes",
    "r1.d": "Para firmas de abogados, incluidas firmas de inmigración, que atienden a clientes hispanohablantes.",
    "r2.k": "Para equipos de servicio y administración",
    "r2.t": "Atención al cliente y apoyo administrativo",
    "r2.d": "Para puestos de atención al cliente, registro de datos y apoyo administrativo en español.",
    "pdf.en": "Descargar · 2 páginas",
    "pdf.es": "Descargar · 2 páginas",
    "pdf.en2": "Descargar · 2 páginas",
    "pdf.es2": "Descargar · 2 páginas",
    "c.kicker": "Contacto",
    "c.title": "¿Hablamos?",
    "c.d": "Estoy disponible para puestos 100 % remotos a tiempo parcial. Respondo más rápido por correo electrónico y siempre con gusto me comunico en español.",
    "c.copy": "Copiar correo",
    "c.copied": "¡Copiado!",
    "c.meta": "Español nativo · Inglés básico conversacional · Florida, EE. UU.",
    "f.top": "Volver arriba ↑",
    "req": "Solicitar por correo"
  };

  var META = {
    en: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
    es: {
      title: "Zuhail Daley — Intake legal, atención al cliente y apoyo administrativo en español",
      desc: "Zuhail Daley es hablante nativa de español en Florida, abogada formada en Venezuela con más de ocho años de experiencia en atención al cliente, disponible para trabajo 100 % remoto a tiempo parcial."
    }
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var EN = { "c.copied": "Copied!", "req": "Request by email" };
  nodes.forEach(function (n) { EN[n.getAttribute("data-i18n")] = n.innerHTML; });
  var current = "en";
  function t(key) { return (current === "es" ? ES : EN)[key]; }

  function setLang(lang) {
    current = lang === "es" ? "es" : "en";
    var dict = current === "es" ? ES : EN;
    nodes.forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      if (dict[k] != null) n.innerHTML = dict[k];
    });
    document.querySelectorAll(".file.request small").forEach(function (s) { s.textContent = t("req"); });
    root.lang = current;
    document.title = META[current].title;
    document.querySelector('meta[name="description"]').content = META[current].desc;
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === current));
    });
    try { localStorage.setItem("lang", current); } catch (e) {}
  }
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  var initial = "en";
  try { initial = new URLSearchParams(location.search).get("lang") || localStorage.getItem("lang") || "en"; } catch (e) {}
  if (initial === "es") setLang("es");

  /* Mobile menu */
  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  function closeMenu() { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", function () {
    var open = !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("open")) { closeMenu(); menuBtn.focus(); } });

  /* Résumé links: if a PDF is missing, offer an email request instead of a broken link */
  document.querySelectorAll("a[data-resume]").forEach(function (a) {
    fetch(a.getAttribute("href"), { method: "HEAD" }).then(function (r) {
      if (!r.ok) throw new Error("missing");
    }).catch(function () {
      a.removeAttribute("download");
      a.href = "mailto:zuhail@zuhaildaley.com?subject=" + encodeURIComponent("Résumé request (" + a.getAttribute("data-label") + ")");
      a.classList.add("request");
      var s = a.querySelector("small"); if (s) { s.removeAttribute("data-i18n"); s.textContent = t("req"); }
    });
  });

  /* Copy email */
  var copyBtn = document.querySelector(".copy");
  if (copyBtn) copyBtn.addEventListener("click", function () {
    var email = copyBtn.getAttribute("data-email");
    var done = function () {
      copyBtn.textContent = t("c.copied");
      setTimeout(function () { copyBtn.textContent = t("c.copy"); }, 1800);
    };
    try {
      navigator.clipboard.writeText(email).then(done, function () { location.href = "mailto:" + email; });
    } catch (e) { location.href = "mailto:" + email; }
  });

  /* Header shadow on scroll */
  var header = document.querySelector(".header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* Count-up for the statistics */
  function countUp(el) {
    var to = parseInt(el.getAttribute("data-to"), 10), start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = "0"; requestAnimationFrame(step);
  }

  /* Reveal on scroll */
  var items = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        if (e.target.classList.contains("stats")) e.target.querySelectorAll(".count").forEach(countUp);
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
