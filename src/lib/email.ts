import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS?.replace(/\s+/g, ''),
  },
});

export async function sendVerificationEmail(email: string, code: string, name: string) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: '🔐 Verify your LeadProspect account',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify your account</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 500px; margin: 0 auto; padding: 40px 20px;">
            <tr>
              <td align="center">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #22c55e, #4ade80); border-radius: 16px; margin-bottom: 24px;">
                  <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0 0 8px 0;">
                  Verify your account
                </h1>
                
                <p style="color: #a1a1aa; font-size: 16px; margin: 0 0 32px 0;">
                  Hi ${name}, welcome to LeadProspect! Use this code to verify your email:
                </p>
                
                <div style="background: #18181b; border: 1px solid #27272a; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                  <div style="font-size: 32px; font-weight: 700; color: #22c55e; letter-spacing: 8px; text-align: center;">
                    ${code}
                  </div>
                  <p style="color: #71717a; font-size: 14px; text-align: center; margin: 16px 0 0 0;">
                    This code expires in 10 minutes
                  </p>
                </div>
                
                <p style="color: #52525b; font-size: 12px; text-align: center; margin: 0;">
                  If you didn't create this account, please ignore this email.
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}

export async function sendWelcomeEmail(email: string, name: string) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: '🎉 Welcome to LeadProspect!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 500px; margin: 0 auto; padding: 40px 20px;">
            <tr>
              <td align="center">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #22c55e, #4ade80); border-radius: 16px; margin-bottom: 24px;">
                  <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0 0 8px 0;">
                  🎉 You're in, ${name}!
                </h1>
                
                <p style="color: #a1a1aa; font-size: 16px; margin: 0 0 16px 0;">
                  Welcome to LeadProspect. Your account has been verified successfully.
                </p>
                
                <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard" 
                   style="display: inline-block; background: #22c55e; color: #09090b; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 600; margin-top: 8px;">
                  Go to Dashboard
                </a>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}

export async function sendResetPasswordEmail(email: string, newPassword: string, name: string) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: '🔑 Your LeadProspect Password Reset',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Password Reset</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 500px; margin: 0 auto; padding: 40px 20px;">
            <tr>
              <td align="center">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #f59e0b, #fbbf24); borderpx; margin-bottom-radius: 16: 24px;">
                  <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                </div>
                
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0 0 8px 0;">
                  Password Reset
                </h1>
                
                <p style="color: #a1a1aa; font-size: 16px; margin: 0 0 16px 0;">
                  Hi ${name}, your password has been reset. Here's your new temporary password:
                </p>
                
                <div style="background: #18181b; border: 1px solid #27272a; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                  <div style="font-size: 24px; font-weight: 700; color: #f59e0b; letter-spacing: 4px; text-align: center; word-break: break-all;">
                    ${newPassword}
                  </div>
                  <p style="color: #71717a; font-size: 14px; text-align: center; margin: 16px 0 0 0;">
                    Please change this password after logging in
                  </p>
                </div>
                
                <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/login" 
                   style="display: inline-block; background: #22c55e; color: #09090b; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 600; margin-top: 8px;">
                  Login Now
                </a>
                
                <p style="color: #52525b; font-size: 12px; text-align: center; margin: 24px 0 0 0;">
                  If you didn't request this, please contact support immediately.
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}
