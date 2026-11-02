(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // Spanish translations. English lives in the HTML so the page works without JavaScript.
  var ES = {
    "skip": "Saltar al contenido",
    "nav.about": "Sobre mí",
    "nav.services": "Cómo ayudo",
    "nav.experience": "Experiencia",
    "nav.resume": "Currículum",
    "nav.contact": "Contacto",
    "hero.eyebrow": "100 % remoto · Tiempo parcial · Florida, EE. UU.",
    "hero.headline": "Atención al cliente, intake legal y apoyo administrativo en español",
    "hero.lede": "Hablante nativa de español y abogada formada en Venezuela, con más de ocho años de experiencia en atención al cliente. Ayudo a que los clientes hispanohablantes se sientan escuchados, comprendidos y bien atendidos.",
    "hero.cta1": "Escríbame",
    "hero.cta2": "Ver currículum",
    "facts.l1": "Español",
    "facts.v1": "Nativo",
    "facts.l2": "Inglés",
    "facts.v2": "Básico conversacional",
    "facts.l3": "Trabajo",
    "facts.v3": "Autorizada para trabajar en EE. UU.",
    "about.kicker": "Sobre mí",
    "about.title": "Cuidadosa con los detalles. Cálida con las personas.",
    "st1": "años en atención al cliente",
    "st2": "llamadas atendidas al día",
    "st3": "de satisfacción del cliente, 12 % sobre el promedio de la empresa",
    "about.p1": "Obtuve mi título de abogada en la Universidad de Falcón, en Venezuela, en 2012 y ejercí de forma independiente en derecho civil y mercantil, redactando contratos y documentos legales como contratos de compraventa, traspasos de propiedad y autorizaciones de viaje.",
    "about.p2": "Además, tengo más de ocho años de experiencia en atención al cliente en Costa Rica, en Sealed B J LLC y Claro Telecomunicaciones, gestionando solicitudes, quejas y consultas técnicas. Mi trabajo más reciente fue como maestra principal de niños pequeños en RCMA, en Florida.",
    "about.p3": "Hoy busco un trabajo 100 % remoto a tiempo parcial, apoyando a firmas de abogados, equipos de intake legal y clientes hispanohablantes.",
    "about.note": "Autorizada para ejercer la abogacía en Venezuela. No tengo licencia para ejercer la abogacía en Estados Unidos y no ofrezco asesoría legal.",
    "services.kicker": "Cómo puedo ayudar",
    "services.title": "Dónde aporto valor",
    "s1.t": "Atención a clientes hispanohablantes",
    "s1.d": "Gestión de solicitudes, preguntas y quejas por teléfono, incluida la atención de alto volumen de más de 90 llamadas diarias con una satisfacción del 92 %.",
    "s2.t": "Apoyo en intake legal",
    "s2.d": "Ayudar a firmas de abogados y equipos de intake a comunicarse con clientes hispanohablantes, registrar su información con precisión y aplicar la terminología jurídica de mi formación en derecho civil y mercantil.",
    "s3.t": "Preparación de contratos y documentos",
    "s3.d": "Preparación cuidadosa de contratos y documentos legales en español, basada en mi experiencia redactando contratos de compraventa, traspasos de propiedad y autorizaciones de viaje.",
    "s4.t": "Registro de datos y apoyo administrativo",
    "s4.d": "Registro de nuevos clientes, ingreso y recuperación de datos de clientes, y manejo de Microsoft Office, Google Workspace y software de CRM.",
    "exp.kicker": "Experiencia y formación",
    "exp.title": "Trayectoria",
    "e1.w": "Abr 2023 – May 2025",
    "e1.t": "Teacher 1 — Maestra de niños pequeños (estacional)",
    "e1.d": "Maestra principal de un aula de guardería de hasta 15 niños de 1 a 4 años. Planifiqué actividades de aprendizaje y desarrollo y mantuve comunicación constante con padres y administración.",
    "e2.t": "Ventas de telefonía móvil y cuidado infantil",
    "e2.d": "Dos puestos consecutivos: vendí teléfonos móviles y líneas de servicio telefónico y, posteriormente, trabajé en una guardería.",
    "e3.t": "Atención al cliente",
    "e3.d": "Gestioné solicitudes, preguntas, quejas y sugerencias; informé sobre productos y servicios de telecomunicaciones; y brindé asistencia técnica para resolver problemas.",
    "e4.t": "Servicio al cliente",
    "e4.d": "Atendí más de 90 llamadas diarias: registro de nuevos clientes, recuperación de datos, información de productos y cancelación de servicios. Obtuve una satisfacción promedio del 92 %, un 12 % sobre el promedio de la empresa, y propuse tácticas de retención que redujeron las cancelaciones en un 5 %.",
    "e5.t": "Abogada — Ejercicio libre de la profesión",
    "e5.d": "Ejercí de forma independiente en derecho civil y mercantil, redactando contratos y documentos legales como contratos de compraventa, traspasos de propiedad y autorizaciones de viaje, y utilicé software legal en mi trabajo jurídico en Venezuela.",
    "e6.t": "Título de Abogada",
    "e6.d": "Autorizada para ejercer la abogacía en Venezuela. No tiene licencia para ejercer la abogacía en Estados Unidos.",
    "e7.w": "Capacitación",
    "e7.t": "Capacitación en Cuidado Infantil del DCF",
    "e7.d": "Florida · 45 horas",
    "res.kicker": "Currículum",
    "res.title": "Descargue mi currículum",
    "res.sub": "Disponible en inglés y en español, en PDF con texto seleccionable.",
    "r1.t": "Apoyo legal e intake de clientes",
    "r1.d": "Para firmas de abogados, incluidas firmas de inmigración, que atienden a clientes hispanohablantes.",
    "r2.t": "Atención al cliente y apoyo administrativo",
    "r2.d": "Para puestos remotos de atención al cliente, registro de datos y apoyo administrativo en español.",
    "c.kicker": "Contacto",
    "c.title": "Conversemos",
    "c.d": "Estoy disponible para puestos 100 % remotos a tiempo parcial. Respondo más rápido por correo electrónico y con gusto me comunico en español.",
    "f.loc": "Florida, EE. UU.",
    "f.top": "Volver arriba ↑",
    "req": "Solicitar por correo"
  };

  var META = {
    en: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
    es: {
      title: "Zuhail Daley — Atención al cliente, intake legal y apoyo administrativo en español",
      desc: "Zuhail Daley es hablante nativa de español en Florida, abogada formada en Venezuela con más de ocho años de experiencia en atención al cliente, disponible para trabajo 100 % remoto a tiempo parcial."
    }
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var EN = {};
  nodes.forEach(function (n) { EN[n.getAttribute("data-i18n")] = n.innerHTML; });
  EN.req = "Request by email";
  var current = "en";

  function setLang(lang) {
    current = lang === "es" ? "es" : "en";
    var dict = current === "es" ? ES : EN;
    nodes.forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      if (dict[k] != null) n.innerHTML = dict[k];
    });
    document.querySelectorAll(".btn-request").forEach(function (b) {
      var l = b.getAttribute("data-label");
      b.textContent = dict.req + (l ? " · " + l : "");
    });
    document.documentElement.lang = current;
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
  try {
    var q = new URLSearchParams(location.search).get("lang");
    initial = q || localStorage.getItem("lang") || "en";
  } catch (e) {}
  if (initial === "es") setLang("es");

  // Résumé links: if a PDF has not been uploaded yet, offer an email request instead of a broken link.
  document.querySelectorAll("a[data-resume]").forEach(function (a) {
    fetch(a.getAttribute("href"), { method: "HEAD" }).then(function (r) {
      if (!r.ok) throw new Error();
    }).catch(function () {
      var label = a.textContent.split("·")[1] || "";
      a.removeAttribute("download");
      a.href = "mailto:zuhail@zuhaildaley.com?subject=" + encodeURIComponent("Résumé request" + (label ? " (" + label.trim() + ")" : ""));
      a.classList.add("btn-request");
      a.setAttribute("data-label", label.trim());
      a.textContent = (current === "es" ? ES.req : EN.req) + (label ? " · " + label.trim() : "");
    });
  });

  // Header border on scroll
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
