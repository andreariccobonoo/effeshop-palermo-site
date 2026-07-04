import { business, hours, services, strengths, whatsappUrl } from '@/lib/site';

type IconName = 'key' | 'car' | 'remote' | 'lock' | 'battery' | 'tools' | 'phone' | 'map' | 'star' | 'clock' | 'shield';

function Icon({ name, className = 'h-6 w-6' }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true
  };

  const paths: Record<IconName, React.ReactNode> = {
    key: (
      <>
        <circle cx="7.5" cy="14.5" r="3.5" />
        <path d="M10.2 12 21 1.2" />
        <path d="m16.5 5.7 2.2 2.2" />
        <path d="m13.8 8.4 2.1 2.1" />
      </>
    ),
    car: (
      <>
        <path d="M4 13.5 5.7 8.8A3 3 0 0 1 8.5 7h7a3 3 0 0 1 2.8 1.8l1.7 4.7" />
        <path d="M3.5 14h17v4.2A1.8 1.8 0 0 1 18.7 20H17a1.8 1.8 0 0 1-1.8-1.8v-.2H8.8v.2A1.8 1.8 0 0 1 7 20H5.3a1.8 1.8 0 0 1-1.8-1.8V14Z" />
        <path d="M6.5 16.5h1.8" />
        <path d="M15.7 16.5h1.8" />
      </>
    ),
    remote: (
      <>
        <rect x="8" y="2.5" width="8" height="19" rx="3" />
        <circle cx="12" cy="8" r="1.4" />
        <path d="M10.4 12h3.2" />
        <path d="M10.4 15.5h3.2" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M12 14v2" />
      </>
    ),
    battery: (
      <>
        <rect x="3" y="7" width="16" height="10" rx="2" />
        <path d="M21 10v4" />
        <path d="M7 12h8" />
      </>
    ),
    tools: (
      <>
        <path d="m14.7 6.3 3-3a4 4 0 0 1 2.4 5.1l-2.4.7-.7 2.4a4 4 0 0 1-5.1-2.4l3-3Z" />
        <path d="M11 13 4.5 19.5a2.1 2.1 0 0 1-3-3L8 10" />
        <path d="m6 4 4 4" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z" />
      </>
    ),
    map: (
      <>
        <path d="M12 21s7-4.6 7-11a7 7 0 0 0-14 0c0 6.4 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),
    star: (
      <path d="m12 2.7 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.6 3 1-6.2L3 9.3l6.2-.9L12 2.7Z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.2 2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s7-3.5 7-10V5.5L12 3 5 5.5V12c0 6.5 7 10 7 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    )
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function CtaLink({
  href,
  children,
  variant = 'primary',
  className = ''
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'dark' | 'light' | 'outline';
  className?: string;
}) {
  const variants = {
    primary:
      'bg-brass text-black shadow-glow hover:-translate-y-0.5 hover:bg-amberline focus-ring',
    dark: 'bg-graphite text-white hover:-translate-y-0.5 hover:bg-black focus-ring',
    light: 'bg-white text-graphite hover:-translate-y-0.5 focus-ring',
    outline:
      'border border-white/18 text-white hover:-translate-y-0.5 hover:bg-white/10 focus-ring'
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold tracking-tight transition ${variants[variant]} ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}

function Header() {
  const nav = [
    ['Home', '#home'],
    ['Servizi', '#servizi'],
    ['Recensioni', '#recensioni'],
    ['Dove siamo', '#dove-siamo'],
    ['Contatti', '#contatti']
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-graphite/92 backdrop-blur-xl">
      <div className="container-xl flex h-[var(--header-height)] items-center justify-between gap-4">
        <a href="#home" className="focus-ring inline-flex items-center rounded-full" aria-label="Effeshop home">
          <img src="/effeshop-logo.svg" alt="Effeshop Palermo" className="h-12 w-auto max-w-[188px]" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principale">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-white/76 transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phoneHref}`}
            className="focus-ring hidden rounded-full border border-white/12 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-white/10 sm:inline-flex"
          >
            Chiama ora
          </a>
          <a
            href={whatsappUrl()}
            className="focus-ring inline-flex rounded-full bg-brass px-4 py-3 text-sm font-extrabold text-black transition hover:bg-amberline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="noise-bg relative overflow-hidden bg-graphite pt-[calc(var(--header-height)+64px)] text-white md:pt-[calc(var(--header-height)+92px)]">
      <div className="absolute inset-0 opacity-45 [background:radial-gradient(circle_at_75%_28%,rgba(242,180,49,.22),transparent_34%),radial-gradient(circle_at_18%_72%,rgba(255,157,46,.14),transparent_30%)]" />
      <div className="container-xl relative grid gap-12 pb-24 md:grid-cols-[1.04fr_.96fr] md:items-center md:pb-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-bold text-white/76">
            <span className="h-2 w-2 rounded-full bg-brass" />
            Ferramenta specializzata in Piazza Rossi, 11
          </div>
          <h1 className="text-balance max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Ferramenta e assistenza tecnica a Palermo
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
            Duplicazione chiavi, telecomandi auto, serrature, batterie e articoli di ferramenta. Effeshop è il punto di riferimento in Piazza Rossi, 11 a Palermo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href={`tel:${business.phoneHref}`}>Chiama ora</CtaLink>
            <CtaLink href={business.mapsUrl} variant="light">Ottieni indicazioni</CtaLink>
            <CtaLink href={whatsappUrl()} variant="outline">Contattaci su WhatsApp</CtaLink>
          </div>
          <div className="mt-9 grid gap-3 text-sm font-bold text-white/72 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/6 p-4">Chiavi casa, auto e moto</div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-4">Telecomandi e cover</div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-4">Serrature e batterie</div>
          </div>
        </div>

        <div className="metal-card relative rounded-[2rem] border border-white/12 p-4 shadow-premium md:p-6">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brass/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/30 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 text-graphite shadow-premium">
                <Icon name="key" className="h-10 w-10 text-brass" />
                <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-zinc-400">Servizio rapido</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">Duplicazione chiavi</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">Casa, auto, moto, blindate e cilindri europei.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/9 p-5 text-white">
                <Icon name="remote" className="h-10 w-10 text-brass" />
                <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-white/40">Assistenza tecnica</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">Telecomandi auto</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">Riparazioni, cover, batterie e nuove chiavi.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/9 p-5 text-white sm:col-span-2">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-brass">★★★★★ 5.0 su Google</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight">Recensioni eccellenti dei clienti</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/64">Una presenza locale affidabile per chi cerca soluzioni concrete a Palermo.</p>
                  </div>
                  <Icon name="shield" className="h-16 w-16 shrink-0 text-brass" />
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-3xl bg-brass p-5 text-black">
              <p className="text-sm font-black uppercase tracking-[0.18em] opacity-70">Micro-copy</p>
              <p className="mt-2 text-2xl font-black tracking-tight">Hai perso le chiavi? Passa da Effeshop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servizi" className="section-pad bg-ash">
      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brass">I nostri servizi</p>
          <h2 className="mt-3 text-balance text-4xl font-black tracking-[-0.04em] text-graphite sm:text-5xl">
            Soluzioni tecniche rapide per casa, auto e lavoro
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Assistenza tecnica, ferramenta e duplicazione chiavi in un unico punto vendita a Palermo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[1.7rem] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-graphite text-brass transition group-hover:bg-brass group-hover:text-black">
                <Icon name={service.icon as IconName} className="h-7 w-7" />
              </div>
              <h3 className="mt-7 text-2xl font-black tracking-tight text-graphite">{service.title}</h3>
              <p className="mt-4 min-h-[96px] text-base leading-7 text-zinc-600">{service.text}</p>
              <a
                className="focus-ring mt-6 inline-flex rounded-full bg-zinc-100 px-5 py-3 text-sm font-extrabold text-graphite transition hover:bg-brass"
                href={whatsappUrl(`Buongiorno Effeshop, vorrei informazioni su: ${service.title}.`)}
              >
                Richiedi informazioni
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="rounded-[2rem] bg-graphite p-8 text-white shadow-premium md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brass">Perché scegliere Effeshop</p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Competenza, precisione e disponibilità
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Da Effeshop trovi competenza, precisione e disponibilità. Che si tratti di una chiave da duplicare, un telecomando da riparare o un prodotto di ferramenta da acquistare, riceverai assistenza professionale e soluzioni concrete.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item, index) => (
            <div key={item} className="rounded-[1.5rem] border border-zinc-200 bg-ash p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brass text-lg font-black text-black">0{index + 1}</span>
              <h3 className="mt-7 text-xl font-black tracking-tight text-graphite">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {index === 0 && 'Risposte chiare e contatto immediato per informazioni, chiavi e assistenza.'}
                {index === 1 && 'Servizi mirati su chiavi, telecomandi, serrature, batterie e materiali tecnici.'}
                {index === 2 && 'Una reputazione locale solida, valorizzata con collegamento alle recensioni Google.'}
                {index === 3 && 'Un negozio fisico raggiungibile in Piazza Rossi, 11 – Palermo.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="recensioni" className="section-pad bg-graphite text-white">
      <div className="container-xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-premium md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-brass">Recensioni</p>
              <h2 className="mt-3 text-balance text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Clienti soddisfatti, fiducia reale
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Effeshop gode di un’eccellente reputazione online, con valutazioni positive da parte dei clienti. Per mantenere il sito corretto e professionale, le recensioni specifiche non vengono inventate: il pulsante porta alla scheda Google da verificare prima della pubblicazione.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink href={business.reviewsUrl}>Leggi le recensioni su Google</CtaLink>
                <CtaLink href={whatsappUrl('Buongiorno Effeshop, ho visto le recensioni e vorrei informazioni.')} variant="outline">
                  Chiedi informazioni
                </CtaLink>
              </div>
            </div>
            <div className="rounded-[1.7rem] bg-white p-8 text-graphite">
              <div className="flex gap-1 text-brass" aria-label="Valutazione 5 stelle">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-8 w-8 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-5xl font-black tracking-[-0.05em]">5.0</p>
              <p className="mt-2 text-lg font-black">su Google</p>
              <p className="mt-5 text-sm leading-6 text-zinc-600">Recensioni eccellenti dei nostri clienti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationAndHours() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent('Effeshop Piazza Rossi 11 Palermo')}&output=embed`;

  return (
    <section id="dove-siamo" className="section-pad bg-ash">
      <div className="container-xl grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brass">Dove siamo</p>
          <h2 className="mt-3 text-balance text-4xl font-black tracking-[-0.04em] text-graphite sm:text-5xl">
            Raggiungici in Piazza Rossi, 11
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Ci trovi a Palermo, in Piazza Rossi, 11. Passa in negozio per duplicazione chiavi, assistenza tecnica, batterie, serrature e prodotti di ferramenta.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={business.mapsUrl}>Apri su Google Maps</CtaLink>
            <CtaLink href={`tel:${business.phoneHref}`} variant="dark">Chiama il negozio</CtaLink>
          </div>

          <div className="mt-10 overflow-hidden rounded-[1.7rem] border border-zinc-200 bg-white shadow-sm">
            <iframe
              title="Mappa Effeshop Palermo"
              src={mapSrc}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div id="orari" className="rounded-[2rem] bg-white p-7 shadow-premium md:p-9">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-graphite text-brass">
              <Icon name="clock" className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-zinc-400">Orari di apertura</p>
              <h3 className="text-2xl font-black tracking-tight text-graphite">Quando siamo aperti</h3>
            </div>
          </div>

          <div className="mt-8 divide-y divide-zinc-200 overflow-hidden rounded-3xl border border-zinc-200">
            {hours.map((item) => (
              <div key={item.days} className="grid gap-1 bg-white p-5 sm:grid-cols-[.8fr_1.2fr] sm:gap-5">
                <span className="font-black text-graphite">{item.days}</span>
                <span className={`font-bold ${item.time === 'Chiuso' ? 'text-red-600' : 'text-zinc-700'}`}>{item.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-ash p-5">
            <p className="font-black text-graphite">Hai bisogno di una chiave o di un telecomando?</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">Contatta il negozio prima di passare, così ricevi subito un’indicazione sul servizio.</p>
            <a className="focus-ring mt-5 inline-flex rounded-full bg-brass px-5 py-3 text-sm font-extrabold text-black" href={whatsappUrl()}>
              Scrivi su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const formMessage = 'Buongiorno Effeshop, vorrei informazioni. Nome: [scrivi nome] - Telefono: [scrivi telefono] - Servizio richiesto: [scrivi servizio] - Messaggio: [scrivi messaggio]';

  return (
    <section id="contatti" className="section-pad bg-white">
      <div className="container-xl grid gap-8 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
        <div className="rounded-[2rem] bg-graphite p-8 text-white shadow-premium md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brass">Contatti</p>
          <h2 className="mt-3 text-balance text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Chiavi auto, telecomandi e serrature: soluzioni rapide a Palermo
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Chiama ora, scrivi su WhatsApp o raggiungi il punto vendita. Effeshop è pronto ad aiutarti con assistenza tecnica, ferramenta e duplicazione chiavi.
          </p>

          <div className="mt-8 grid gap-3">
            <a href={`tel:${business.phoneHref}`} className="focus-ring flex items-center gap-4 rounded-3xl bg-white/8 p-5 transition hover:bg-white/12">
              <Icon name="phone" className="h-6 w-6 text-brass" />
              <span>
                <span className="block text-sm font-bold text-white/50">Telefono</span>
                <span className="block text-xl font-black">{business.phoneDisplay}</span>
              </span>
            </a>
            <a href={business.mapsUrl} className="focus-ring flex items-center gap-4 rounded-3xl bg-white/8 p-5 transition hover:bg-white/12">
              <Icon name="map" className="h-6 w-6 text-brass" />
              <span>
                <span className="block text-sm font-bold text-white/50">Indirizzo</span>
                <span className="block text-xl font-black">{business.address}</span>
              </span>
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={`tel:${business.phoneHref}`}>Chiama ora</CtaLink>
            <CtaLink href={whatsappUrl()} variant="outline">WhatsApp</CtaLink>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-ash p-7 md:p-9">
          <h3 className="text-2xl font-black tracking-tight text-graphite">Richiedi informazioni</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Il modulo è predisposto per inviare una richiesta via WhatsApp senza backend. Prima dell’invio, il cliente potrà completare il messaggio direttamente nell’app.
          </p>

          <form className="mt-7 grid gap-4" action={whatsappUrl(formMessage)}>
            <label className="grid gap-2 text-sm font-black text-graphite">
              Nome
              <input className="focus-ring min-h-12 rounded-2xl border border-zinc-200 bg-white px-4 font-medium outline-none" type="text" name="nome" placeholder="Il tuo nome" />
            </label>
            <label className="grid gap-2 text-sm font-black text-graphite">
              Telefono
              <input className="focus-ring min-h-12 rounded-2xl border border-zinc-200 bg-white px-4 font-medium outline-none" type="tel" name="telefono" placeholder="Numero di telefono" />
            </label>
            <label className="grid gap-2 text-sm font-black text-graphite">
              Servizio richiesto
              <select className="focus-ring min-h-12 rounded-2xl border border-zinc-200 bg-white px-4 font-medium outline-none" name="servizio" defaultValue="">
                <option value="" disabled>Seleziona un servizio</option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black text-graphite">
              Messaggio
              <textarea className="focus-ring min-h-32 rounded-2xl border border-zinc-200 bg-white px-4 py-3 font-medium outline-none" name="messaggio" placeholder="Scrivi cosa ti serve" />
            </label>
            <a
              href={whatsappUrl(formMessage)}
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-full bg-brass px-6 py-4 text-sm font-extrabold text-black transition hover:bg-amberline"
            >
              Invia richiesta su WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container-xl grid gap-8 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/effeshop-logo.svg" alt="Effeshop Palermo" className="h-14 w-auto max-w-[210px]" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">Ferramenta, duplicazione chiavi, telecomandi, serrature, batterie e assistenza tecnica a Palermo.</p>
        </div>
        <div>
          <p className="font-black">Contatti</p>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li>{business.address}</li>
            <li><a className="hover:text-brass" href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></li>
            <li><a className="hover:text-brass" href={business.facebookUrl}>Facebook Effeshop</a></li>
          </ul>
        </div>
        <div>
          <p className="font-black">Orari</p>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li>Lun–Ven: 08:30–13:00 / 16:00–19:30</li>
            <li>Sabato: 08:30–13:30</li>
            <li>Domenica: Chiuso</li>
          </ul>
          <div className="mt-5 flex gap-3 text-sm font-extrabold">
            <a className="hover:text-brass" href={business.reviewsUrl}>Recensioni Google</a>
            <a className="hover:text-brass" href={business.mapsUrl}>Maps</a>
          </div>
        </div>
      </div>
      <div className="container-xl mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} Effeshop. Tutti i diritti riservati. Sito vetrina professionale.
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <>
      <a
        href={whatsappUrl()}
        className="focus-ring fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-premium transition hover:-translate-y-1 md:bottom-6"
        aria-label="Contatta Effeshop su WhatsApp"
      >
        <img src="/whatsapp-logo.svg" alt="WhatsApp" className="h-14 w-14" />
      </a>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/96 p-3 shadow-premium backdrop-blur md:hidden">
        <a
          href={`tel:${business.phoneHref}`}
          className="focus-ring flex min-h-12 items-center justify-center rounded-full bg-brass px-5 text-sm font-black text-black"
        >
          Chiama ora {business.phoneDisplay}
        </a>
      </div>
    </>
  );
}

function JsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'HardwareStore',
    name: business.name,
    image: 'https://www.effeshop-palermo.it/og-image.svg',
    telephone: business.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Piazza Rossi, 11',
      postalCode: '90147',
      addressLocality: 'Palermo',
      addressRegion: 'PA',
      addressCountry: 'IT'
    },
    areaServed: 'Palermo',
    url: 'https://www.effeshop-palermo.it',
    sameAs: [business.facebookUrl],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '13:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '16:00',
        closes: '19:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:30',
        closes: '13:30'
      }
    ],
    description:
      'Ferramenta e assistenza tecnica a Palermo specializzata in duplicazione chiavi, chiavi auto, telecomandi, serrature, batterie e materiali tecnici.'
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Reviews />
        <LocationAndHours />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
