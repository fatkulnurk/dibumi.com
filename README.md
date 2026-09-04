# dibumi.com

Website profil studio rekayasa perangkat lunak dan infrastruktur modern **dibumi.com** dengan inspirasi tampilan estetika minimalis khas **Evozi.com**.

Dibangun menggunakan **Next.js 16 (App Router)** dengan kapabilitas **Server-Side Rendering (SSR)** penuh dan dideploy sebagai **Cloudflare Worker** (Workers Static Assets) via **OpenNext**.

---

## 🚀 Layanan yang Ditampilkan
1. **Custom Software Development**: Pembuatan sistem modular, API, workflow otomasi bisnis, dan arsitektur enterprise.
2. **Company Profile & Modern Web**: Website korporat performa tinggi (Core Web Vitals 95+), Server-Side Rendering di Edge.
3. **Custom Android Apps**: Aplikasi native (Kotlin) & cross-platform dengan antarmuka mulus dan sinkronisasi data andal.
4. **Jasa Pembuatan WebView Android**: Konversi instan web ke APK/AAB siap rilis Google Play Store lengkap dengan OneSignal push notification, kamera, dan file upload handler.
5. **Kelola Server & DevOps**: Setup server Linux (Ubuntu/Debian), reverse proxy Nginx/Caddy, Docker, firewall security, dan automasi backup rutin.
6. **Maintenance & SLA**: Monitoring 24/7 dan pendampingan teknis jangka panjang.

---

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router, Server-Side Rendering di Edge)
- **Styling:** Tailwind CSS (Dark Minimalist Theme)
- **Icons:** Lucide React
- **Cloudflare Integration:** `@opennextjs/cloudflare` + `wrangler` (Workers Static Assets)

---

## 💻 Cara Menjalankan Lokal

```bash
# Jalankan mode development
npm run dev

# Jalankan build production Next.js
npm run build
```

---

## ☁️ Deploy ke Cloudflare Workers

Situs ini dirender SSR oleh sebuah Cloudflare Worker (bukan Pages). Asset statis disajikan dari Workers Static Assets.

### Menjalankan Preview Lokal (workerd)
```bash
npm run build:worker   # build OpenNext -> .open-next/
npm run preview        # jalankan wrangler dev lokal
```

### Deploy Manual
```bash
npm run deploy
```
Butuh environment variable `CLOUDFLARE_API_TOKEN` dan `CLOUDFLARE_ACCOUNT_ID` (atau login via `npx wrangler login`).

### Deploy via GitHub Actions
Workflow `.github/workflows/deploy.yml` otomatis melakukan build & deploy setiap push ke `main`. Pastikan repository secrets berisi:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### Custom Domain
Hubungkan domain (mis. `dibumi.com`) ke Worker melalui **Cloudflare Dashboard → Workers & Pages → dibumi-com → Settings → Domains & Routes**.
