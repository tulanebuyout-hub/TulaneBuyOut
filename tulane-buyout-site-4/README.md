# Tulane Green Wave Coach Will Hall Buyout Fund

A standalone Next.js crowdfunding website with an on-site Stripe Payment Element integration.

## Campaign status

The project intentionally starts with:
- $0 raised
- 0 supporters
- 0% progress
- Goal shown as TBD until a verified buyout / authorized funding amount is confirmed
- Stripe payments become active when valid Stripe keys are configured
- Contributions are nonrefundable
- If an authorized coaching-transition use cannot be completed, remaining proceeds are redirected to the campaign’s designated Tulane-related NIL recipient under the campaign policy

## Run locally

1. Install Node.js 20+.
2. In this folder run:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Connect Stripe

1. Create a Stripe account.
2. Copy your TEST publishable key into `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.
3. Copy your TEST secret key into `STRIPE_SECRET_KEY`.
4. Test with Stripe test keys first.
5. When ready to accept real payments, replace the test keys in Vercel with Stripe live keys.

Never paste a Stripe secret key into public source code or commit `.env.local`.

## Free deployment on Vercel

- Create a free Vercel account.
- Import this project from GitHub, or use the Vercel CLI.
- Add the two Stripe environment variables in Vercel Project Settings > Environment Variables.
- Deploy.

The site and payment form stay on the same domain. Stripe securely renders the actual card/payment fields. The site also reads successful Stripe PaymentIntents server-side to update the raised total, supporter count, and recent public supporter names/comments without exposing private payment data.

## Images and licenses

Hero image:
- Yulman Stadium - Tulane Green Wave (55143965690)
- Author: ajay_suresh
- Wikimedia Commons
- CC BY 4.0
- https://commons.wikimedia.org/wiki/File:Yulman_Stadium_-_Tulane_Green_Wave_(55143965690).jpg

Supporting image:
- Tulane Green Wave football takes the field (2014).jpg
- Author: Vegasjon
- Wikimedia Commons
- CC BY-SA 4.0
- https://commons.wikimedia.org/wiki/File:Tulane_Green_Wave_football_takes_the_field_(2014).jpg

The website loads those images from Wikimedia at runtime and displays attribution beneath them.

## Campaign factual sources

The site includes source links for key claims. Verify them again immediately before publishing because the 2026 season is ongoing.

- Tulane Athletics: 2025 final ranking / CFP recap
- Tulane Athletics: Will Hall hiring announcement
- Tulane Athletics: 2026 Duke recap
- Tulane Athletics: 2026 South Alabama recap
- Southern Miss Athletics: October 2024 leadership change

## Before accepting live payments

Confirm that the exact NIL recipient and the nonrefundable fallback policy are clearly disclosed to supporters, and confirm with qualified legal/tax/payment professionals as appropriate that the fundraiser structure, NIL fallback, tax treatment, and any proposed transfer are permitted. Do not state or imply Tulane has authorized the campaign unless you receive actual authorization.
