# 🚀 ShareTargetPrice.in — Complete Setup Guide
## Next.js 14 + Supabase + Vercel | 500+ Stock Pages + Admin + Push Notifications

---

## 📁 Project Structure

```
sharetargetprice/
├── app/
│   ├── page.tsx                    ← Homepage
│   ├── layout.tsx                  ← Root layout (AdSense)
│   ├── not-found.tsx               ← 404 page
│   ├── sitemap.ts                  ← Auto sitemap
│   ├── robots.ts                   ← Robots.txt
│   ├── globals.css                 ← Global styles
│   ├── [slug]/page.tsx             ← Blog post page
│   ├── stock/[slug]/page.tsx       ← Stock analysis page (500+)
│   ├── stocks/page.tsx             ← All stocks listing
│   ├── search/page.tsx             ← Stock search
│   ├── category/[category]/        ← Category pages
│   ├── sip-calculator/             ← SIP Calculator
│   ├── lumpsum-calculator/         ← Lumpsum Calculator
│   ├── cagr-calculator/            ← CAGR Calculator
│   ├── home-loan-emi-calculator/   ← EMI Calculator
│   ├── about-us/                   ← About page
│   ├── contact-us/                 ← Contact page
│   ├── privacy-policy/             ← Privacy Policy
│   ├── disclaimer/                 ← Disclaimer
│   ├── terms-conditions/           ← Terms
│   ├── admin/                      ← Admin panel
│   │   ├── page.tsx                ← Login
│   │   ├── dashboard/              ← Posts management
│   │   ├── new/                    ← New article
│   │   ├── edit/[id]/              ← Edit article
│   │   └── push/                   ← Push notifications
│   └── api/
│       ├── stock/route.ts          ← Live price (Yahoo Finance)
│       ├── news/route.ts           ← RSS news aggregator
│       ├── admin/posts/            ← Admin CRUD API
│       └── push/                   ← Push notification API
├── components/
│   ├── Header.tsx                  ← Navigation + Search
│   ├── Footer.tsx                  ← Footer
│   ├── PostCard.tsx                ← Blog post card
│   ├── StockPriceLive.tsx          ← Live price widget
│   ├── TradingViewChart.tsx        ← Chart widget
│   ├── NewsCarousel.tsx            ← News horizontal scroll
│   └── PushSetup.tsx               ← Push subscription
├── lib/
│   └── supabase.ts                 ← DB client
├── public/
│   └── sw.js                       ← Service Worker
├── scripts/
│   ├── generate-ai-articles.js     ← AI content generation
│   ├── generate-keywords.js        ← SEO keywords
│   └── insert-financials.js        ← Financial data seed
└── sql/
    ├── schema.sql                  ← Complete DB schema
    ├── stocks_insert.sql           ← 562 stocks
    └── keywords_batch_*.sql        ← 11,000+ keywords
```

---

## ⚡ Quick Start (30 minutes)

### Step 1 — GitHub Repo banao

1. github.com pe jao → **New repository**
2. Name: `sharetargetprice`
3. Is project ke saare files upload karo (zip extract karke)
4. **Commit all files**

---

### Step 2 — Supabase Setup

1. **supabase.com** → New Project
   - Name: `sharetargetprice`
   - Region: **Singapore** (Asia ke closest)
   - Password: strong password save kar lo

2. **SQL Editor** mein yeh order mein run karo:

```sql
-- First run schema.sql (tables banaye)
-- Then stocks_insert.sql (562 stocks)
-- Then keywords_batch_1.sql through keywords_batch_4.sql
```

3. **Settings → API** se copy karo:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` → `SUPABASE_SERVICE_KEY`

---

### Step 3 — VAPID Keys Generate karo (Push Notifications)

```bash
npm install -g web-push
web-push generate-vapid-keys
```

Output aayega:
```
Public Key: Bxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Private Key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Dono save kar lo.

---

### Step 4 — Vercel Deploy

1. **vercel.com** → **New Project** → GitHub repo connect karo

2. **Environment Variables** add karo:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_KEY` | Supabase service key |
| `ADMIN_PASSWORD` | Apna password |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | VAPID public key |
| `VAPID_PRIVATE_KEY` | VAPID private key |
| `ADMIN_PUSH_SECRET` | Any random string |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | ca-pub-XXXXX (optional) |
| `CLAUDE_API_KEY` | sk-ant-... (optional) |

3. **Deploy!** — Build time ~5-8 minutes for 562 stock pages

---

### Step 5 — Financial Data Seed (Optional)

```bash
# Clone repo locally, add .env.local with keys
npm install
node scripts/insert-financials.js
```

Yeh IRFC, RVNL, Suzlon, HDFC Bank, Tata Motors ke liye P&L, quarterly results, shareholding seed karega.

---

### Step 6 — AI Articles Generate karo (Optional, ~$6-8 cost)

```bash
# CLAUDE_API_KEY required
node scripts/generate-ai-articles.js
```

562 stocks × 4 articles = 2248 unique articles!

---

## 🌐 Live URLs After Deploy

| URL | Page |
|-----|------|
| `/` | Homepage |
| `/stocks` | All 562 stocks |
| `/search` | Stock search |
| `/stock/irfc-share-price-target` | IRFC page |
| `/stock/rvnl-share-price-target` | RVNL page |
| `/stock/suzlon-energy-share-price-target` | Suzlon page |
| `/stock/hdfc-bank-share-price-target` | HDFC Bank page |
| `/stock/tata-motors-share-price-target` | Tata Motors page |
| `/sip-calculator` | SIP Calculator |
| `/lumpsum-calculator` | Lumpsum Calculator |
| `/cagr-calculator` | CAGR Calculator |
| `/home-loan-emi-calculator` | EMI Calculator |
| `/admin` | Admin login |
| `/admin/dashboard` | Posts management |
| `/admin/push` | Push notifications |
| `/sitemap.xml` | Auto-generated sitemap |

---

## 📊 Domain Connect (sharetargetprice.in)

1. **Vercel Dashboard** → Your Project → **Settings → Domains**
2. `sharetargetprice.in` add karo
3. Hostinger/GoDaddy DNS mein Vercel ke records add karo:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
4. 24-48 hours mein live!

---

## 🔧 Add More Stocks

Supabase SQL Editor mein:
```sql
INSERT INTO stocks (name, slug, symbol, sector, market_cap, exchange, is_active)
VALUES ('Company Name', 'company-name-share-price-target', 'SYMBOL', 'Sector', 50000000000, 'NSE', true);
```

Phir **Vercel Redeploy** karo → New page auto-generate hoga!

---

## 🔔 Push Notifications

Admin panel: `yourdomain.com/admin/push`

Test karo:
```bash
curl -X POST https://sharetargetprice.in/api/push/send \
  -H "Content-Type: application/json" \
  -H "x-admin-secret: YOUR_ADMIN_PUSH_SECRET" \
  -d '{"title":"Test","body":"Working!","url":"/"}'
```

---

## 📈 SEO Features

Each stock page automatically has:
- ✅ **15+ SEO keywords** targeted
- ✅ **FAQ Schema Markup** (Google Featured Snippets)
- ✅ **Article Schema**
- ✅ **Canonical URLs**
- ✅ **Open Graph tags**
- ✅ **Auto Sitemap** (`/sitemap.xml`)
- ✅ **TradingView Chart**
- ✅ **Live prices** (Yahoo Finance, 1hr cache)
- ✅ **News carousel** (RSS feeds)
- ✅ **Push notifications**

---

## 🛠️ Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails | Check all env vars in Vercel |
| Live price not showing | Yahoo Finance may throttle; refresh |
| Stock pages 404 | Check `is_active=true` in stocks table |
| Admin login fails | Check `ADMIN_PASSWORD` env var |
| Push not working | Verify VAPID keys are correct |
| News not loading | RSS feeds sometimes rate-limit |

---

## 💰 Cost Estimate

| Service | Cost |
|---------|------|
| Vercel (Hobby) | Free |
| Supabase (Free tier) | Free |
| Domain | ~₹800/year |
| AI Articles (optional) | ~$6-8 one-time |
| **Total** | **~₹800/year** |

---

Built with ❤️ for Indian investors | ShareTargetPrice.in
