# Effeshop Palermo — sito vetrina professionale

Landing page moderna per Effeshop, ferramenta e assistenza tecnica a Palermo.

## Cosa include

- Homepage one-page responsive in Next.js
- Tailwind CSS
- Header fisso
- Logo SVG personalizzato per Effeshop, coerente con lo stile tecnico del sito
- Hero section con CTA: chiamata, indicazioni, WhatsApp
- Card servizi con icone SVG inline
- Sezione punti di forza
- Sezione recensioni Google senza recensioni inventate
- Mappa Google incorporata
- Orari in tabella elegante
- Sezione contatti con telefono, WhatsApp, Facebook e modulo predisposto per WhatsApp
- Pulsante WhatsApp flottante con logo WhatsApp riconoscibile
- Pulsante “Chiama ora” sempre visibile su mobile
- SEO locale e dati strutturati LocalBusiness / HardwareStore
- Configurazione pronta per deploy su Vercel

## Installazione locale

```bash
npm install
npm run dev
```

Poi aprire:

```bash
http://localhost:3000
```

## Prova da smartphone sulla stessa rete Wi-Fi

Avviare il sito così:

```bash
npm run dev -- -H 0.0.0.0
```

Poi aprire dallo smartphone:

```bash
http://IP-DEL-MAC:3000
```

Se Next.js usa la porta 3001, aprire `http://IP-DEL-MAC:3001`.

## Build produzione

```bash
npm run build
npm run start
```

La build è stata verificata correttamente con `npm run build`.

## Deploy su Vercel

Il progetto è già predisposto per Vercel.

### Metodo consigliato

1. Caricare la cartella del progetto su GitHub.
2. Entrare su Vercel.
3. Cliccare su “Add New Project”.
4. Selezionare il repository GitHub.
5. Vercel riconoscerà automaticamente Next.js.
6. Confermare il deploy.

Sono inclusi:

- `vercel.json`
- `.nvmrc` con Node 20
- script `build`, `start`, `dev` e `vercel-build` in `package.json`
- `package-lock.json`

## File principali da modificare

### Dati attività

Modificare qui:

```bash
src/lib/site.ts
```

Contiene:

- telefono
- WhatsApp
- indirizzo
- link Facebook
- link Google Maps
- link recensioni Google
- orari
- servizi
- testi card

### SEO

Modificare qui:

```bash
src/app/layout.tsx
```

Contiene:

- meta title
- meta description
- parole chiave locali
- Open Graph

### Struttura e sezioni pagina

Modificare qui:

```bash
src/app/page.tsx
```

Contiene:

- header
- hero
- servizi
- recensioni
- mappa
- contatti
- footer
- JSON-LD LocalBusiness

### Logo

Il logo Effeshop si trova qui:

```bash
public/effeshop-logo.svg
```

Il logo WhatsApp del pulsante flottante si trova qui:

```bash
public/whatsapp-logo.svg
```

## Note importanti prima della pubblicazione

1. Sostituire il dominio demo `https://www.effeshop-palermo.it` con il dominio reale, se diverso.
2. Recuperare da Google Business il link diretto esatto alla scheda Effeshop e alle recensioni.
3. Sostituire `business.reviewsUrl` in `src/lib/site.ts` con il link ufficiale alle recensioni.
4. Verificare il link Facebook ufficiale.
5. Aggiungere immagini reali del negozio, bancone, chiavi, serrature e prodotti quando disponibili.
6. Se si desidera ricevere email dal modulo, collegare un servizio backend o un form provider. Attualmente il modulo prepara una richiesta WhatsApp.

## Palette usata

- Antracite / nero: sezioni premium e tecniche
- Bianco e grigio chiaro: leggibilità
- Giallo/oro/arancio: CTA e dettagli ferramenta

## Obiettivo

Il sito è pensato per trasformare ricerche locali come “duplicazione chiavi Palermo”, “chiavi auto Palermo”, “ferramenta Piazza Rossi Palermo” e “riparazione telecomandi auto Palermo” in contatti rapidi tramite telefono, WhatsApp e indicazioni stradali.
