'use client';

import { useState } from 'react';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

function Checkout({ donor, onReset }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');
  const [complete, setComplete] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setBusy(true);
    setMessage('');
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/?payment=complete` },
      redirect: 'if_required'
    });
    setBusy(false);
    if (result.error) setMessage(result.error.message || 'Payment could not be completed.');
    else { setComplete(true); setMessage('Contribution received. Thank you for supporting the campaign.'); }
  }

  return (
    <form onSubmit={submit} className="stripe-box">
      <PaymentElement options={{ layout: 'tabs' }} />
      <button className="primary full" disabled={!stripe || busy || complete}>{complete ? 'Contribution received' : busy ? 'Processing…' : `Contribute $${Number(donor.amount).toLocaleString()}`}</button>
      {message && <p className="form-message">{message}</p>}
      <button type="button" className="text-button" onClick={onReset}>Change contribution details</button>
    </form>
  );
}

export default function PaymentForm() {
  const [amount, setAmount] = useState('50');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [publicName, setPublicName] = useState('');
  const [comment, setComment] = useState('');
  const [nilAcknowledged, setNilAcknowledged] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function continueToPayment(e) {
    e.preventDefault();
    setError('');
    if (!nilAcknowledged) {
      setError('Please acknowledge the nonrefundable NIL fallback policy before continuing.');
      return;
    }
    if (!stripePromise) {
      setError('Stripe publishable key is not configured yet.');
      return;
    }
    setBusy(true);
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, name, email, publicName, comment })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to start payment.');
      setClientSecret(data.clientSecret);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  if (clientSecret && stripePromise) {
    return (
      <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
        <Checkout donor={{ amount }} onReset={() => setClientSecret('')} />
      </Elements>
    );
  }

  return (
    <form onSubmit={continueToPayment} className="donation-form">
      <div className="amount-grid">
        {[10,25,50,100,250].map(v => (
          <button key={v} type="button" className={Number(amount) === v ? 'amount active' : 'amount'} onClick={() => setAmount(String(v))}>${v}</button>
        ))}
      </div>
      <label>Custom amount
        <div className="money-input"><span>$</span><input type="number" min="1" step="1" value={amount} onChange={e => setAmount(e.target.value)} required /></div>
      </label>
      <div className="two-col">
        <label>Your name<input value={name} onChange={e => setName(e.target.value)} required /></label>
        <label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>
      </div>
      <label>Public supporter name <small>(optional; leave blank to display “Anonymous”)</small><input value={publicName} onChange={e => setPublicName(e.target.value)} /></label>
      <label>Comment <small>(optional)</small><textarea value={comment} onChange={e => setComment(e.target.value)} rows="3" /></label>
      <fieldset>
        <legend>Contribution policy acknowledgment</legend>
        <label className="radio"><input type="checkbox" checked={nilAcknowledged} onChange={e => setNilAcknowledged(e.target.checked)} required /> I understand that contributions are nonrefundable. If an authorized coaching-transition use cannot be completed, I agree that remaining proceeds may be redirected to the campaign’s designated Tulane-related NIL recipient.</label>
      </fieldset>
      <button className="primary full" disabled={busy}>{busy ? 'Preparing secure payment…' : 'Continue to secure payment'}</button>
      {error && <p className="form-error">{error}</p>}
      <p className="micro">Payments are securely processed by Stripe. Eligible payment methods such as major cards, Apple Pay or Google Pay may appear automatically based on the supporter’s device and your Stripe settings. Secret payment keys never appear in the browser.</p>
    </form>
  );
}
