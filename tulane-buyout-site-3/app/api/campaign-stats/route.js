import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CAMPAIGN = 'Tulane Green Wave Coach Will Hall Buyout Fund';

export async function GET() {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ raised: 0, supporters: 0, recent: [] });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let startingAfter;
    let intents = [];
    for (let page = 0; page < 10; page++) {
      const batch = await stripe.paymentIntents.list({ limit: 100, ...(startingAfter ? { starting_after: startingAfter } : {}) });
      intents.push(...batch.data);
      if (!batch.has_more || !batch.data.length) break;
      startingAfter = batch.data[batch.data.length - 1].id;
    }

    const paid = intents.filter(pi => pi.status === 'succeeded' && pi.metadata?.campaign === CAMPAIGN);
    const raisedCents = paid.reduce((sum, pi) => sum + (pi.amount_received || pi.amount || 0), 0);
    const recent = paid
      .sort((a, b) => b.created - a.created)
      .slice(0, 8)
      .map(pi => ({
        name: pi.metadata?.public_name || 'Anonymous',
        amount: (pi.amount_received || pi.amount || 0) / 100,
        comment: pi.metadata?.comment || ''
      }));

    return NextResponse.json({ raised: raisedCents / 100, supporters: paid.length, recent });
  } catch (error) {
    return NextResponse.json({ raised: 0, supporters: 0, recent: [], error: 'Unable to load campaign totals.' }, { status: 200 });
  }
}
