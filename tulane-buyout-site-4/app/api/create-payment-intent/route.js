import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 });
  }

  try {
    const { amount, name, email, publicName, comment } = await request.json();
    const dollars = Number(amount);
    if (!Number.isFinite(dollars) || dollars < 1 || dollars > 100000) {
      return NextResponse.json({ error: 'Enter a valid contribution amount.' }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(dollars * 100),
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      receipt_email: email || undefined,
      description: 'Independent Tulane football fan-organized crowdfunding contribution',
      statement_descriptor_suffix: 'TULANE FAN FUND',
      metadata: {
        donor_name: String(name || '').slice(0, 120),
        public_name: String(publicName || '').slice(0, 120),
        comment: String(comment || '').slice(0, 450),
        fallback_policy: 'nonrefundable_nil_redirect',
        campaign: 'Tulane Green Wave Coach Will Hall Buyout Fund'
      }
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Unable to start payment.' }, { status: 500 });
  }
}
