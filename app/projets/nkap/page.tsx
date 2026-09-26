import type { Metadata } from 'next'
import NkapProject from '@/components/NkapProject'

export const metadata: Metadata = {
  title: 'NKAP · Zidane Sontia',
  description: 'ERP SaaS multi-entreprises pour les PME : CRM, facturation, stocks, paie et pilotage.',
}

export default function NkapPage() {
  return <NkapProject />
}
