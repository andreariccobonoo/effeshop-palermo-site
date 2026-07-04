export const business = {
  name: 'Effeshop',
  phoneDisplay: '+39 391 101 4399',
  phoneHref: '+393911014399',
  whatsapp: '393911014399',
  email: 'effeshop@outlook.it',
  address: 'Piazza Rossi, 11 – 90147 Palermo',
  area: 'Palermo',
  facebookUrl: 'https://www.facebook.com/EffeShop2015/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Effeshop%20Piazza%20Rossi%2011%20Palermo',
  reviewsUrl:
    'https://www.google.com/search?q=Effeshop+Palermo+Piazza+Rossi+11+recensioni',
  whatsappMessage:
    'Buongiorno Effeshop, vorrei ricevere informazioni su un servizio.'
};

export const hours = [
  { days: 'Lunedì – Venerdì', time: '08:30 – 13:00 / 16:00 – 19:30' },
  { days: 'Sabato', time: '08:30 – 13:30' },
  { days: 'Domenica', time: 'Chiuso' }
];

export const services = [
  {
    title: 'Duplicazione chiavi',
    icon: 'key',
    text:
      'Copie di chiavi per casa, edifici, porte blindate, cilindri europei, auto, moto e chiavi con telecomando.',
    cta: 'Richiedi duplicazione chiavi'
  },
  {
    title: 'Chiavi auto e moto',
    icon: 'car',
    text:
      'Creazione e assistenza su chiavi auto e moto, anche in caso di smarrimento o telecomando danneggiato.',
    cta: 'Parla con un tecnico'
  },
  {
    title: 'Telecomandi e radiocomandi',
    icon: 'remote',
    text:
      'Riparazione telecomandi, sostituzione cover, batterie e componenti per radiocomandi di ogni tipo.',
    cta: 'Chiedi assistenza'
  },
  {
    title: 'Serrature e casseforti',
    icon: 'lock',
    text:
      'Assistenza su serrature, casseforti e sistemi di chiusura: apertura, riparazione e installazione.',
    cta: 'Richiedi intervento'
  },
  {
    title: 'Batterie e pile',
    icon: 'battery',
    text:
      'Vasto assortimento di pile e batterie per telecomandi, orologi, radiocomandi e dispositivi elettronici.',
    cta: 'Verifica disponibilità'
  },
  {
    title: 'Ferramenta tecnica',
    icon: 'tools',
    text:
      'Materiale elettrico, termoidraulico, vernici, viteria, accessori e prodotti per casa, lavoro e fai da te.',
    cta: 'Contatta il negozio'
  }
];

export const strengths = [
  'Assistenza rapida',
  'Specializzazione tecnica',
  'Ottime recensioni Google',
  'Punto vendita fisico a Palermo'
];

export function whatsappUrl(message = business.whatsappMessage) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
