import type { Metadata } from 'next';
import './globals.css';

const title = 'Effeshop Palermo | Ferramenta, duplicazione chiavi e telecomandi';
const description =
  'Effeshop a Palermo è specializzato in duplicazione chiavi, chiavi auto, telecomandi, serrature, batterie e articoli di ferramenta. Ci trovi in Piazza Rossi, 11.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.effeshop-palermo.it'),
  title,
  description,
  keywords: [
    'ferramenta Palermo',
    'duplicazione chiavi Palermo',
    'copia chiavi auto Palermo',
    'riparazione telecomandi auto Palermo',
    'serrature Palermo',
    'batterie telecomandi Palermo',
    'ferramenta Piazza Rossi Palermo',
    'Effeshop Palermo'
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'it_IT',
    siteName: 'Effeshop Palermo',
    images: ['/og-image.svg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
