# dibumi.com

Website profil studio rekayasa perangkat lunak dan infrastruktur modern **dibumi.com** dengan inspirasi tampilan estetika minimalis khas **Evozi.com**.

Dibangun menggunakan **Next.js 15 (App Router)** dengan kapabilitas **Server-Side Rendering (SSR)** penuh dan konfigurasi siap dideploy ke **Cloudflare Pages**.

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
- **Framework:** Next.js 15 (App Router, Server-Side Rendering Edge Runtime)
- **Styling:** Tailwind CSS (Dark Minimalist Theme)
- **Icons:** Lucide React
- **Cloudflare Integration:** `@cloudflare/next-on-pages` / `@cloudflare/workers-types` & `wrangler.toml`

---

## 💻 Cara Menjalankan Lokal

```bash
# Jalankan mode development
npm run dev

# Jalankan build production Next.js
npm run build
```

---

## ☁️ Deploy ke Cloudflare Pages

### Melalui Git (Rekomendasi di Cloudflare Dashboard)
1. Hubungkan repositori Git ke **Cloudflare Pages**.
2. Pilih framework preset: **Next.js**.
3. Atur build command:
   ```bash
   npx @cloudflare/next-on-pages@1
   ```
4. Atur build output directory:
   ```
   .vercel/output/static
   ```
5. Tambahkan Environment Variable di Cloudflare Dashboard:
   - `NODE_VERSION`: `20` atau `22`
   - `COMPATIBILITY_FLAG`: `nodejs_compat`
