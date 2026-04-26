import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio — Zidane Sontia" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] Message de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <h2 style="color: #0f172a; margin-bottom: 4px;">Nouveau message depuis ton portfolio</h2>
          <p style="color: #64748b; font-size: 14px; margin-bottom: 24px;">Reçu via le formulaire de contact</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; width: 80px;">Nom</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="color: #06b6d4;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #64748b; font-size: 13px; margin-bottom: 8px;">Message</p>
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">
            Tu peux répondre directement à cet email — la réponse ira à ${email}
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    return NextResponse.json({ error: 'Échec de l\'envoi' }, { status: 500 })
  }
}
