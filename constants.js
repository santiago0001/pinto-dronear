const ABOUT_IMAGE_URL = "./imagenes/sobre_mi.png";

const SITE_DATA = {
  siteTitle: "Pinto Dronear",
  logo: {
    text: "PINTO",
    subtext: "DRONEARS",
    image: "./imagenes/logo.png",
    alt: "Pinto Dronear",
  },
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Sobre mi", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
  whatsapp: {
    number: "5491132595957",
    message:
      "Hola, quiero solicitar un presupuesto para una filmacion con drone.",
  },
  ctas: {
    primary: {
      label: "Solicitar presupuesto",
      href: "whatsapp",
      icon: "whatsapp-logo",
    },
    secondary: {
      label: "Ver trabajos",
      href: "#portfolio",
      icon: "play-circle",
    },
    email: {
      label: "Solicitar presupuesto",
      href: "mailto:hola@pintodronear.com",
      icon: "envelope-simple",
    },
  },
  hero: {
    kicker: "",
    title: "MOSTRA TU MUNDO DESDE OTRO PUNTO DE VISTA",
    highlight: "OTRO PUNTO DE VISTA",
    subtitle:
      "Filmaciones aereas en 4K para eventos, turismo, comercios y experiencias unicas. Contenido profesional que genera impacto.",
    backgroundImage: "./imagenes/fondo_portada.webp",
    droneImage: "./imagenes/drone_portada.png",
    droneAlt: "Drone profesional",
    dronePlaceholder: "Imagen de drone",
  },
  benefits: [
    { icon: "video-camera", title: "Grabacion en", text: "4K Ultra HD" },
    { icon: "drone", title: "Tomas aereas", text: "cinematograficas" },
    { icon: "film-slate", title: "Edicion", text: "profesional" },
    { icon: "clock", title: "Entrega rapida", text: "y optimizada" },
  ],
  sections: {
    services: {
      kicker: "Servicios",
      title: "Soluciones audiovisuales para cada proyecto",
      text: "Creamos contenido visual de alta calidad adaptado a cada necesidad. Conta tu historia, nosotros la elevamos.",
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Algunos de nuestros trabajos",
      allLabel: "Ver todos los trabajos",
      allHref: "#portfolio",
    },
    differentials: {
      kicker: "Por que elegirnos?",
      title: "Calidad, experiencia y compromiso",
    },
    about: {
      kicker: "SOBRE MÍ",
      title: "DE LA PLAYA NACIÓ\nMI MIRADA DESDE EL AIRE",
      highlight: "DESDE EL AIRE",
      paragraphs: [
        "Soy Santiago, creador de Pinto Dronear. Hace más de 5 años, durante la pandemia, me fui a vivir a la playa y ahí descubrí mi pasión por los drones. Desde ese momento entendí que quería mostrar los lugares desde una perspectiva diferente.",
        "Me apasiona capturar naturaleza, paisajes y hoteles con una mirada cinematográfica, buscando que cada toma transmita la emoción y la inmensidad del momento.",
        "En Pinto Dronear no se trata solo de volar un drone, sino de crear imágenes profesionales que hagan que las personas vean el mundo desde otro ángulo.",
      ],
      cta: {
        label: "VER TRABAJOS",
        href: "#portfolio",
        icon: "play-circle",
      },
      imageAlt: "Santiago usando el control del drone",
      imagePlaceholder: "Foto de Santiago usando el control del drone",
      infoItems: [
        {
          icon: "quotes",
          text: "Cada vuelo es una nueva forma de contar una historia.",
        },
        {
          icon: "calendar",
          title: "+5",
          text: "años de experiencia",
        },

        {
          icon: "camera",
          text: "Edición premium en 4K",
        },
        {
          icon: "map-pin",
          text: "Entrega rápida y confiable",
        },
      ],
    },
    testimonials: {
      kicker: "Testimonios",
      title: "Lo que dicen nuestros clientes",
    },
  },
  services: [
    {
      icon: "video-camera",
      title: "Cobertura de eventos",
      description: "Capturamos cada momento importante desde el aire.",
      image: "./imagenes/servicios/eventos.webp",
    },
    {
      icon: "airplane-tilt",
      title: "Turismo y hoteleria",
      description: "Mostra destinos, hoteles y experiencias unicas.",
      image: "./imagenes/servicios/turismo.webp",
    },
    {
      icon: "storefront",
      title: "Locales comerciales",
      description: "Destaca tu negocio con videos que atraen mas clientes.",
      image: "./imagenes/servicios/locales.jpg",
    },
    {
      icon: "farm",
      title: "Emprendimientos",
      description: "Mostra tu proyecto, tu campo o tu emprendimiento.",
      image: "./imagenes/servicios/emprendimientos.webp",
    },
    {
      icon: "camera",
      title: "Deportes y aventura",
      description: "Accion, adrenalina y naturaleza en tomas impactantes.",
      image: "./imagenes/servicios/deportes.jpg",
    },
    {
      icon: "share-network",
      title: "Videos para redes sociales",
      description: "Contenido dinamico optimizado para IG, TikTok y Reels.",
      image: "./imagenes/servicios/redes_sociales.avif",
    },
    {
      icon: "scissors",
      title: "Edicion profesional en 4K",
      description: "Edicion cinematografica con ritmo, color y calidad.",
      image: "./imagenes/servicios/4k.webp",
    },
    {
      icon: "grid-four",
      title: "Formatos optimizados",
      description: "Entregamos en el formato ideal para cada plataforma.",
      image: "./imagenes/servicios/formatos.jpg",
    },
  ],
  portfolio: [
    {
      title: "Playa libre",
      category: "Lifestyle",
      thumbnail: "./imagenes/trabajos/playa.webp",
      videoUrl: "https://www.instagram.com/reel/DYyHh3ttlup/",
    },
    {
      title: "Bariloche desde el agua",
      category: "Turismo",
      thumbnail: "./imagenes/trabajos/bariloche.webp",
      videoUrl: "https://www.instagram.com/reel/DY20AqouGUd/",
    },
    {
      title: "Punta Rasa en cuatriciclo",
      category: "Aventura",
      thumbnail: "./imagenes/trabajos/cuatri.webp",
      videoUrl: "https://www.instagram.com/reel/DYzl7iMte_U/",
    },
    {
      title: "Capilla del Senor desde el aire",
      category: "Ciudad",
      thumbnail: "./imagenes/trabajos/capilla.webp",
      videoUrl: "https://www.instagram.com/reel/DYxxeqlBt8x/",
    },
  ],
  differentials: [
    {
      icon: "device-mobile-camera",
      title: "Equipamiento profesional",
      text: "Drones y camaras de ultima generacion.",
    },
    {
      icon: "aperture",
      title: "Tomas unicas y creativas",
      text: "Perspectivas que hacen la diferencia.",
    },
    {
      icon: "monitor-play",
      title: "Edicion premium en 4K",
      text: "Videos con calidad cinematografica.",
    },
    {
      icon: "timer",
      title: "Entrega rapida y confiable",
      text: "Cumplimos tiempos y superamos expectativas.",
    },
    {
      icon: "user",
      title: "Atencion personalizada",
      text: "Te asesoramos en cada parte del proceso.",
    },
  ],
  testimonials: [
    {
      quote:
        "El video supero nuestras expectativas. Mostraron nuestro hotel de una manera increible. Mas consultas y mas reservas desde que lo publicamos.",
      name: "Maria Lopez",
      role: "Hotel Patagonia",
      avatar: "",
    },
    {
      quote:
        "Excelente trabajo y profesionalismo. Entendieron perfecto lo que necesitabamos para nuestro evento. Muy recomendables.",
      name: "Juan Pablo Gomez",
      role: "Organizador de Eventos",
      avatar: "",
    },
    {
      quote:
        "Las tomas con drone le dieron otro nivel a nuestras redes. El contenido que entregan realmente genera impacto.",
      name: "Carolina Martinez",
      role: "Emprendedora",
      avatar: "",
    },
  ],
  socials: [
    {
      label: "Instagram",
      icon: "instagram-logo",
      href: "https://www.instagram.com/pintodronear",
    },
    {
      label: "TikTok",
      icon: "tiktok-logo",
      href: "https://www.tiktok.com/@pinto.dronear",
    },
    {
      label: "YouTube",
      icon: "youtube-logo",
      href: "https://www.youtube.com/@PintoDronear",
    },
    { label: "WhatsApp", icon: "whatsapp-logo", href: "whatsapp" },
  ],
  footer: {
    backgroundImage: "",
    text: "Filmaciones aereas en 4K para mostrar tu mundo desde otro punto de vista.",
    linksTitle: "Enlaces",
    servicesTitle: "Servicios",
    contactTitle: "Hablemos de tu proyecto",
    contactText: "Contanos tu idea y recibi una propuesta a medida.",
    copyright: "© 2026 Pinto Dronear. Todos los derechos reservados.",
    credit: "Disenado para contar historias desde el aire.",
    whatsappButton: "Escribinos por WhatsApp",
  },
};
