const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [
  ...parent.querySelectorAll(selector),
];

const icon = (name, weight = "") =>
  `<i class="ph ${weight ? `ph-${weight}` : ""} ph-${name}" aria-hidden="true"></i>`;

const whatsappUrl = () => {
  const { number, message } = SITE_DATA.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

const resolveHref = (href) => (href === "whatsapp" ? whatsappUrl() : href);

const renderLogo = (target) => {
  const { logo } = SITE_DATA;
  target.setAttribute("aria-label", logo.alt);
  target.innerHTML = logo.image
    ? `<img src="${logo.image}" alt="${logo.alt}" />`
    : `<span class="logo-main">${logo.text}<span class="logo-mark"></span></span><span class="logo-sub">${logo.subtext}</span>`;
};

const setImageBackground = (element, url, fallbackClass) => {
  if (url) {
    element.style.backgroundImage = `url("${url}")`;
    element.classList.remove(fallbackClass);
  } else {
    element.classList.add(fallbackClass);
  }
};

const renderButton = (button, extraClass = "") => {
  const href = resolveHref(button.href);
  const target = href.startsWith("http")
    ? ' target="_blank" rel="noopener"'
    : "";
  return `<a class="btn ${extraClass}" href="${href}"${target}><span>${button.label}</span>${icon(button.icon)}</a>`;
};

const renderHeader = () => {
  document.title = SITE_DATA.siteTitle;
  renderLogo($("[data-logo]"));
  const links = $("[data-nav-links]");
  links.innerHTML = SITE_DATA.nav
    .map(
      (item, index) =>
        `<li><a class="${index === 0 ? "is-active" : ""}" href="${item.href}">${item.label}</a></li>`,
    )
    .join("");

  const headerCta = $("[data-header-cta]");
  headerCta.href = whatsappUrl();
  headerCta.target = "_blank";
  headerCta.rel = "noopener";
  $("[data-header-cta-label]").textContent = SITE_DATA.ctas.primary.label;
};

const renderHero = () => {
  const hero = $("[data-hero]");
  setImageBackground(hero, SITE_DATA.hero.backgroundImage, "hero-placeholder");
  $("[data-hero-kicker]").textContent = SITE_DATA.hero.kicker;

  const highlighted = SITE_DATA.hero.title.replace(
    SITE_DATA.hero.highlight,
    `<span>${SITE_DATA.hero.highlight}</span>`,
  );
  $("[data-hero-title]").innerHTML = highlighted;
  $("[data-hero-subtitle]").textContent = SITE_DATA.hero.subtitle;
  $("[data-hero-actions]").innerHTML =
    renderButton(SITE_DATA.ctas.secondary, "btn-primary") +
    renderButton(SITE_DATA.ctas.primary, "btn-light");

  const drone = $("[data-hero-drone]");
  if (SITE_DATA.hero.droneImage) {
    drone.innerHTML = `<img src="${SITE_DATA.hero.droneImage}" alt="${SITE_DATA.hero.droneAlt}" />`;
  } else {
    drone.innerHTML = `<div class="drone-placeholder">${icon("drone")}<span>${SITE_DATA.hero.dronePlaceholder}</span></div>`;
  }
};

const renderBenefits = () => {
  $("[data-benefits]").innerHTML = SITE_DATA.benefits
    .map(
      (item) => `
        <article class="benefit-item">
          ${icon(item.icon)}
          <div><strong>${item.title}</strong><span>${item.text}</span></div>
        </article>`,
    )
    .join("");
};

const renderServices = () => {
  const section = SITE_DATA.sections.services;
  $("[data-services-kicker]").textContent = section.kicker;
  $("[data-services-title]").textContent = section.title;
  $("[data-services-text]").textContent = section.text;

  $("[data-services]").innerHTML = SITE_DATA.services
    .map(
      (service) => `
        <article class="service-card">
          <div class="service-media ${service.image ? "" : "media-placeholder"}" ${
            service.image
              ? `style="background-image:url('${service.image}')"`
              : ""
          }>
            <span class="service-icon">${icon(service.icon)}</span>
          </div>
          <div class="service-body">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </div>
        </article>`,
    )
    .join("");
};

let currentSlide = 0;

const visibleSlides = () => {
  if (window.innerWidth < 680) return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
};

const updateCarousel = () => {
  const track = $("[data-portfolio-track]");
  const maxSlide = Math.max(0, SITE_DATA.portfolio.length - visibleSlides());
  currentSlide = Math.min(currentSlide, maxSlide);
  const dots = $("[data-carousel-dots]");
  const dotCount = maxSlide + 1;
  if (dots.children.length !== dotCount) {
    dots.innerHTML = Array.from(
      { length: dotCount },
      (_, index) =>
        `<button type="button" aria-label="Ir al grupo de trabajos ${index + 1}"></button>`,
    ).join("");
    $$("button", dots).forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index;
        updateCarousel();
      });
    });
  }
  const card = $(".portfolio-card", track);
  if (!card) return;
  const gap = parseFloat(getComputedStyle(track).gap) || 24;
  const offset = currentSlide * (card.getBoundingClientRect().width + gap);
  track.style.transform = `translateX(-${offset}px)`;

  $$("button", dots).forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentSlide);
  });
};

const renderPortfolio = () => {
  const section = SITE_DATA.sections.portfolio;
  $("[data-portfolio-kicker]").textContent = section.kicker;
  $("[data-portfolio-title]").textContent = section.title;
  const allLink = $("[data-portfolio-all]");
  allLink.href = section.allHref;
  $("span", allLink).textContent = section.allLabel;

  $("[data-portfolio-track]").innerHTML = SITE_DATA.portfolio
    .map(
      (item) => `
        <a class="portfolio-card" href="${item.videoUrl}" target="_blank" rel="noopener">
          <div class="portfolio-thumb ${item.thumbnail ? "" : "portfolio-placeholder"}" ${
            item.thumbnail
              ? `style="background-image:url('${item.thumbnail}')"`
              : ""
          }>
            <span class="play-button">${icon("play-circle", "fill")}</span>
            <div class="portfolio-title"><small>${item.category}</small><strong>${item.title}</strong></div>
          </div>
        </a>`,
    )
    .join("");

  updateCarousel();
};

const renderAbout = () => {
  const about = SITE_DATA.sections.about;
  $("[data-about-kicker]").textContent = about.kicker;

  const title = about.title.replace(
    about.highlight,
    `<span>${about.highlight}</span>`,
  );
  $("[data-about-title]").innerHTML = title.replace(/\n/g, "<br />");

  $("[data-about-text]").innerHTML = about.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  $("[data-about-actions]").innerHTML = renderButton(
    about.cta,
    "btn-primary",
  );

  const image = $("[data-about-image]");
  if (ABOUT_IMAGE_URL) {
    image.innerHTML = `<img src="${ABOUT_IMAGE_URL}" alt="${about.imageAlt}" />`;
    image.classList.remove("about-image-placeholder");
  } else {
    image.innerHTML = `<div>${icon("drone")}<span>${about.imagePlaceholder}</span></div>`;
    image.classList.add("about-image-placeholder");
  }

  $("[data-about-info]").innerHTML = about.infoItems
    .map(
      (item) => `
        <article class="about-info-item">
          ${icon(item.icon)}
          <div>
            ${item.title ? `<strong>${item.title}</strong>` : ""}
            <span>${item.text}</span>
          </div>
        </article>`,
    )
    .join("");
};

const renderTestimonials = () => {
  const section = SITE_DATA.sections.testimonials;
  $("[data-testimonials-kicker]").textContent = section.kicker;
  $("[data-testimonials-title]").textContent = section.title;
  $("[data-testimonials]").innerHTML = SITE_DATA.testimonials
    .map(
      (item) => `
        <article class="testimonial-card">
          ${icon("quotes", "fill")}
          <p>${item.quote}</p>
          <div class="testimonial-author">
            ${
              item.avatar
                ? `<img src="${item.avatar}" alt="${item.name}" />`
                : `<span class="avatar-placeholder">${item.name.charAt(0)}</span>`
            }
            <div><strong>${item.name}</strong><span>${item.role}</span></div>
          </div>
        </article>`,
    )
    .join("");
};

const renderFooter = () => {
  renderLogo($("[data-footer-logo]"));
  setImageBackground(
    $("[data-footer]"),
    SITE_DATA.footer.backgroundImage,
    "footer-placeholder",
  );
  $("[data-footer-text]").textContent = SITE_DATA.footer.text;
  $("[data-footer-links-title]").textContent = SITE_DATA.footer.linksTitle;
  $("[data-footer-services-title]").textContent =
    SITE_DATA.footer.servicesTitle;
  $("[data-footer-contact-title]").textContent = SITE_DATA.footer.contactTitle;
  $("[data-footer-contact-text]").textContent = SITE_DATA.footer.contactText;
  $("[data-footer-copy]").textContent = SITE_DATA.footer.copyright;
  $("[data-footer-credit]").textContent = SITE_DATA.footer.credit;

  $("[data-socials]").innerHTML = SITE_DATA.socials
    .map(
      (item) =>
        `<a href="${resolveHref(item.href)}" aria-label="${item.label}" target="_blank" rel="noopener">${icon(item.icon)}</a>`,
    )
    .join("");

  $("[data-footer-links]").innerHTML = SITE_DATA.nav
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  $("[data-footer-services]").innerHTML = SITE_DATA.services
    .slice(0, 6)
    .map((item) => `<li><a href="#servicios">${item.title}</a></li>`)
    .join("");

  $("[data-footer-actions]").innerHTML =
    renderButton(
      { ...SITE_DATA.ctas.primary, label: SITE_DATA.footer.whatsappButton },
      "btn-primary",
    ) + renderButton(SITE_DATA.ctas.email, "btn-light");
};

const renderFloatingWhatsapp = () => {
  const button = $("[data-floating-whatsapp]");
  button.href = whatsappUrl();
  button.target = "_blank";
  button.rel = "noopener";
};

const bindInteractions = () => {
  $("[data-nav-toggle]").addEventListener("click", () => {
    $("[data-nav-panel]").classList.toggle("is-open");
  });

  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = $(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      $("[data-nav-panel]").classList.remove("is-open");
    });
  });

  $("[data-carousel-prev]").addEventListener("click", () => {
    currentSlide = Math.max(0, currentSlide - 1);
    updateCarousel();
  });

  $("[data-carousel-next]").addEventListener("click", () => {
    const maxSlide = Math.max(0, SITE_DATA.portfolio.length - visibleSlides());
    currentSlide = Math.min(maxSlide, currentSlide + 1);
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
};

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderHero();
  renderBenefits();
  renderServices();
  renderPortfolio();
  renderAbout();
  renderTestimonials();
  renderFooter();
  renderFloatingWhatsapp();
  bindInteractions();
});
