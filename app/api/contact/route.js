import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  try {
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.log('[Contact DEV fallback]', body);
      return new Response(JSON.stringify({ ok: true, dev: true }), { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: String(SMTP_SECURE || 'true') === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: CONTACT_FROM || SMTP_USER,
      to: CONTACT_TO || SMTP_USER,
      subject: `Ardia Health Website — ${body.name || 'Contact'}`,
      text: `From: ${body.name} <${body.email}>
Org: ${body.org || '-'}

${body.message}`,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('[Contact error]', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
    });
  }
}
