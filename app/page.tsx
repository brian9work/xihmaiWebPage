import Image from "next/image";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.xanthe.xihmaimobileapp&hl=es_MX";

const categories = [
  "Restaurantes",
  "Hoteles",
  "Experiencias",
  "Avistamientos",
  "Museos",
  "Artesanías",
  "Magueyeras",
  "Ferias",
  "Cabañas",
  "Eventos",
  "Pulquerías",
  "Iglesias",
  "Haciendas",
  "Y más",
];

const features = [
  {
    icon: "📅",
    title: "¿Qué hacer hoy?",
    text: "Mira qué hacer hoy o en los próximos días y encuentra los eventos más importantes.",
    tint: "bg-brand/15",
  },
  {
    icon: "🍽️",
    title: "Menús, cuartos y fotos",
    text: "Revisa menús, habitaciones y fotos de cada lugar antes de salir.",
    tint: "bg-olive/15",
  },
  {
    icon: "🗺️",
    title: "Rutas con Google Maps",
    text: "Traza tu ruta al instante hacia restaurantes, museos, haciendas y más.",
    tint: "bg-teal/15",
  },
  {
    icon: "💬",
    title: "Contacto directo",
    text: "Cada lugar incluye contacto por redes sociales, teléfono o WhatsApp.",
    tint: "bg-brand/15",
  },
  {
    icon: "🌿",
    title: "Turismo local",
    text: "Visibilidad para sitios populares y nuevos proyectos turísticos de cada municipio.",
    tint: "bg-olive/15",
  },
  {
    icon: "⛪",
    title: "Cultura y naturaleza",
    text: "Atractivos culturales, naturales y gastronómicos: de tesoros coloniales a paisajes ocultos.",
    tint: "bg-teal/15",
  },
];

const info = [
  ["Desarrollador", "xihmai"],
  ["Categoría", "Viajes y guías locales"],
  ["Clasificación", "Apto para todo público"],
  ["Precio", "Gratis"],
  ["Disponible en", "Android"],
];

function PlayButton({ light = false }: { light?: boolean }) {
  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full px-6 py-3.5 transition active:scale-95 ${
        light
          ? "bg-background text-foreground hover:bg-white"
          : "bg-foreground text-background hover:bg-black"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path fill="#34a853" d="M3.6 2.2c-.3.3-.5.8-.5 1.4v16.8c0 .6.2 1.1.5 1.4l9.4-9.8z" />
        <path fill="#fbbc04" d="m16.1 15.1-3.1-3.1 3.1-3.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2z" />
        <path fill="#ea4335" d="m16.1 15.1-3.1-3.1-9.4 9.8c.4.4 1 .4 1.7 0z" />
        <path fill="#4285f4" d="M5.3 2.2c-.7-.4-1.3-.4-1.7 0L13 12l3.1-3.1z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[11px] uppercase tracking-wide opacity-70">
          Disponible en
        </span>
        <span className="block text-base font-semibold">Google Play</span>
      </span>
    </a>
  );
}

function PhoneMock() {
  return (
    <div className="iphone float mx-auto" aria-hidden="true">
      <div className="iphone-screen flex flex-col">
        <div className="dynamic-island" />

        {/* status bar */}
        <div className="flex items-center justify-between px-7 pt-[14px] text-[13px] font-semibold">
          <span>9:41</span>
          <span className="flex items-center gap-1 text-[11px]">
            <svg viewBox="0 0 18 12" className="h-2.5 w-3.5" fill="currentColor">
              <rect x="0" y="8" width="3" height="4" rx="1" />
              <rect x="5" y="5" width="3" height="7" rx="1" />
              <rect x="10" y="2.5" width="3" height="9.5" rx="1" />
              <rect x="15" y="0" width="3" height="12" rx="1" />
            </svg>
            <span className="relative inline-block h-2.5 w-5 rounded-[3px] border border-current">
              <span className="absolute inset-[1.5px] rounded-[1.5px] bg-current" />
            </span>
          </span>
        </div>

        {/* app content */}
        <div className="flex flex-1 flex-col items-center px-5 pt-8 text-center">
          <p className="text-[11px] font-medium text-muted">¡Bienvenido a</p>
          <p className="font-display text-lg font-bold">Xihmai</p>

          <div className="mt-3 overflow-hidden rounded-[22px] shadow-lg shadow-black/15">
            <Image
              src="/xihmai-icon.png"
              alt=""
              width={92}
              height={92}
              priority
            />
          </div>

          <p className="mt-4 font-display text-[15px] font-bold leading-tight text-brand">
            Descubre lugares increíbles
          </p>
          <p className="mt-1 text-[10.5px] leading-snug text-muted">
            Restaurantes, hoteles, museos, eventos y experiencias únicas.
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {["Restaurantes", "Hoteles", "Experiencias", "Museos", "Eventos", "Ferias"].map(
              (c) => (
                <span
                  key={c}
                  className="rounded-full bg-card px-2.5 py-1 text-[9.5px] font-semibold shadow-sm ring-1 ring-black/5"
                >
                  {c}
                </span>
              ),
            )}
          </div>

          <div className="mt-5 w-full rounded-2xl bg-gradient-to-br from-teal to-olive p-3.5 text-left text-white shadow-md shadow-teal/30">
            <p className="text-[9px] font-semibold uppercase tracking-wider opacity-80">
              Eventos destacados
            </p>
            <p className="mt-0.5 font-display text-[13px] font-bold leading-tight">
              Descubre qué hacer hoy en Tlaxcala
            </p>
            <p className="mt-1 text-[9.5px] opacity-90">Ver más →</p>
          </div>

          <div className="mt-auto w-full pb-6">
            <div className="rounded-full bg-brand py-2.5 text-[13px] font-semibold text-white shadow-md shadow-brand/40">
              Iniciar Aventura
            </div>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-foreground/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* iOS-style translucent nav */}
      <header className="glass sticky top-0 z-20 border-b border-black/5">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
          <a href="#inicio" className="flex items-center gap-2.5">
            <Image
              src="/xihmai-icon.png"
              alt=""
              width={32}
              height={32}
              className="rounded-[9px]"
            />
            <span className="font-display text-base font-bold">Xihmai</span>
          </a>
          <div className="flex items-center gap-5 text-sm font-medium">
            <a href="#categorias" className="hidden text-muted hover:text-foreground sm:block">
              Categorías
            </a>
            <a href="#funciones" className="hidden text-muted hover:text-foreground sm:block">
              Funciones
            </a>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-4 py-1.5 font-semibold text-white transition active:scale-95"
            >
              Obtener
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* hero */}
        <section id="inicio" className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:pt-20">
          <div className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr]">
            <div className="text-center md:text-left">
              <Image
                src="/xihmai-icon.png"
                alt="Ícono de Xihmai"
                width={88}
                height={88}
                priority
                className="mx-auto rounded-[22px] shadow-xl shadow-black/15 md:mx-0"
              />
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-olive">
                Viaja por Tlaxcala
              </p>
              <h1 className="mt-2 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                Tu guía turística local en el bolsillo.
              </h1>
              <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted md:mx-0">
                Conoce Tlaxcala desde tesoros coloniales hasta paisajes naturales
                más ocultos. Descubre lo mejor de cada municipio desde tu celular.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <PlayButton />
              </div>
            </div>

            <PhoneMock />
          </div>
        </section>

        {/* categories */}
        <section id="categorias" className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Encuentra la magia en cada lugar que visites
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <li
                key={c}
                className="rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/5"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* features: iOS grouped cards */}
        <section id="funciones" className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Todo para planear tu aventura
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-[28px] bg-card p-6 shadow-sm ring-1 ring-black/5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-[14px] text-2xl ${f.tint}`}
                  aria-hidden="true"
                >
                  {f.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* app info: iOS inset grouped list */}
        <section className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Información</h2>
          <dl className="mt-6 max-w-xl overflow-hidden rounded-[22px] bg-card shadow-sm ring-1 ring-black/5">
            {info.map(([k, v], i) => (
              <div
                key={k}
                className={`flex items-center justify-between gap-4 px-5 py-3.5 ${
                  i > 0 ? "border-t border-black/[.07]" : ""
                }`}
              >
                <dt className="text-[15px]">{k}</dt>
                <dd className="text-[15px] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* final CTA */}
        <section className="mx-auto max-w-5xl px-5 pb-20 pt-8">
          <div className="rounded-[36px] bg-foreground px-6 py-14 text-center text-background">
            <h2 className="mx-auto max-w-lg font-display text-3xl font-bold leading-tight">
              Descarga Xihmai y déjate sorprender por los tesoros que te rodean.
            </h2>
            <div className="mt-8 flex justify-center">
              <PlayButton light />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 px-5 py-8 text-center text-sm text-muted">
        Xihmai · Viaja por Tlaxcala
      </footer>
    </>
  );
}
