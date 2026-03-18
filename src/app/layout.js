import { Outfit, Dancing_Script } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Afetto Sorveteria & Cafeteria | O doce encontro do dia',
  description: 'Afetto Sorveteria & Cafeteria — Sorvetes artesanais, cafés especiais, salgados, doces e mini refeições. Rua dos Cravos, 90 — Feu Rosa, Serra - ES. O doce encontro do dia!',
  keywords: ['sorveteria', 'cafeteria', 'sorvete', 'café', 'Serra', 'Feu Rosa', 'Afetto', 'salgados', 'doces'],
  openGraph: {
    title: 'Afetto Sorveteria & Cafeteria',
    description: 'O doce encontro do dia! Sorvetes artesanais, cafés especiais e muito mais.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${dancingScript.variable}`}>
      <body style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
