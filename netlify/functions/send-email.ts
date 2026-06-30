import type { Handler, HandlerEvent } from "@netlify/functions"
import nodemailer from "nodemailer"

interface FormPayload {
  nome: string
  email: string
  whatsapp: string
  empresa: string
  segmento: string
  faturamento: string
  dificuldade?: string
  captchaToken: string
}

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? ""

const corsHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
})

const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers["origin"] ?? ""

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders(origin), body: "" }
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Método não permitido." }),
    }
  }

  let payload: FormPayload
  try {
    payload = JSON.parse(event.body ?? "{}")
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Body inválido." }),
    }
  }

  const { nome, email, whatsapp, empresa, segmento, faturamento, dificuldade, captchaToken } = payload

  if (!nome?.trim() || !email?.trim() || !whatsapp?.trim()) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Campos obrigatórios faltando." }),
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "E-mail inválido." }),
    }
  }

  // Validação do reCAPTCHA
  if (!captchaToken) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Verificação de segurança ausente." }),
    }
  }

  try {
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    })

    const recaptchaData = await recaptchaResponse.json()

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.error("reCAPTCHA falhou:", recaptchaData)
      return {
        statusCode: 403,
        headers: corsHeaders(origin),
        body: JSON.stringify({ error: "Falha na verificação de segurança." }),
      }
    }
  } catch (error) {
    console.error("Erro ao validar reCAPTCHA:", error)
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Erro na verificação de segurança." }),
    }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `Ember LP <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: "[Ember] Novo lead — " + segmento,
      html: `
        <h2>Novo lead via Landing Page</h2>
        <table>
          <tr><td><strong>Nome:</strong></td><td>${nome}</td></tr>
          <tr><td><strong>E-mail:</strong></td><td>${email}</td></tr>
          <tr><td><strong>WhatsApp:</strong></td><td>${whatsapp}</td></tr>
          <tr><td><strong>Estabelecimento:</strong></td><td>${empresa}</td></tr>
          <tr><td><strong>Segmento:</strong></td><td>${segmento}</td></tr>
          <tr><td><strong>Faturamento:</strong></td><td>${faturamento}</td></tr>
          <tr><td><strong>Maior dificuldade:</strong></td><td>${dificuldade || "Não informado"}</td></tr>
        </table>
      `,
    })

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({ message: "Lead recebido com sucesso." }),
    }
  } catch (error) {
    console.error("Erro SMTP:", error)
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Falha ao enviar. Tente novamente." }),
    }
  }
}

export { handler }