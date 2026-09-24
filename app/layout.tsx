import type { Metadata } from 'next'
import { Syne, Fira_Code, DM_Sans } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-fira',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zidane Sontia · Portfolio',
  description: 'Licence en Intelligence Artificielle & Big Data · Développeur Full Stack · Yaoundé, Cameroun',
  keywords: ['Zidane Sontia', 'Portfolio', 'AI', 'Big Data', 'Next.js', 'React', 'Cameroun'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${syne.variable} ${firaCode.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
