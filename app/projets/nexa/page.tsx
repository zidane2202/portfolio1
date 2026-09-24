import type { Metadata } from 'next'
import NexaProject from '@/components/NexaProject'

export const metadata: Metadata = {
  title: 'Nexa · Zidane Sontia',
  description: 'Plateforme EdTech SaaS pour écoles, centres de formation, universités et entreprises, avec un parcours TCF Canada.',
}

export default function NexaPage() {
  return <NexaProject />
}
