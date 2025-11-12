# Ardia Health — Branded Full Site

## Run locally

```bash
npm install
npm run dev
```

## Deploy via GitHub + Vercel

1. Create a new GitHub repo:

```bash
git init
git add .
git commit -m "Initial Ardia Health site"
git branch -M main
git remote add origin https://github.com/YOUR-USER/ardiahealthlabs-site.git
git push -u origin main
```

2. In Vercel:
   - New Project → Import from GitHub → select `ardiahealthlabs-site`
   - Framework: Next.js (auto-detected)
   - Deploy

3. Set environment variables in Vercel → Settings → Environment Variables:

- SMTP_HOST
- SMTP_PORT
- SMTP_SECURE
- SMTP_USER
- SMTP_PASS
- CONTACT_TO
- CONTACT_FROM
