const { EmailTemplate } = require('@/components/Email/Email-template');
const { Resend } = require('resend');

const resend = new Resend("re_WaGBibst_4kpXQS2S53ujVh8wQvhZjYJ5");

async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'makabmahlalela@gmail.com',
      to: ['info@outoftheboxmedia.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'Mayo' }),
    });

    if (error) {
      return { statusCode: 500, body: JSON.stringify({ error }) };
    }

    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error }) };
  }
}

module.exports = { POST };
