'use client';

import { useEffect, useState } from 'react';

function useStats() {
  const [stats, setStats] = useState({ raised: 0, supporters: 0, recent: [], loading: true });
  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const r = await fetch('/api/campaign-stats', { cache: 'no-store' });
        const data = await r.json();
        if (active && r.ok) setStats({ ...data, loading: false });
      } catch (_) {
        if (active) setStats(s => ({ ...s, loading: false }));
      }
    }
    load();
    const id = setInterval(load, 30000);
    return () => { active = false; clearInterval(id); };
  }, []);
  return stats;
}

export function CampaignProgress() {
  const stats = useStats();
  return (
    <div className="progress-card">
      <div className="statline"><div><span className="big">${Number(stats.raised || 0).toLocaleString()}</span><span>raised</span></div><div className="right"><b>{stats.supporters || 0}</b><span>supporters</span></div></div>
      <div className="bar"><span style={{width:'0%'}}></span></div>
      <div className="goal"><b>Campaign goal:</b> TBD — pending a verified buyout / authorized funding amount</div>
      <div className="status-grid"><div><strong>{stats.loading ? '…' : '$' + Number(stats.raised || 0).toLocaleString()}</strong><span>verified by Stripe</span></div><div><strong>LIVE</strong><span>secure checkout</span></div><div><strong>TBD</strong><span>verified target</span></div></div>
    </div>
  );
}

export function RecentSupporters() {
  const stats = useStats();
  return (
    <section className="section supporters">
      <div className="supporter-copy">
        <div className="section-kicker">RECENT SUPPORTERS</div>
        <h2>{stats.supporters ? `${stats.supporters} supporter${stats.supporters === 1 ? '' : 's'} so far` : 'Be the first supporter'}</h2>
        {!stats.supporters && <p>This campaign begins at $0 raised and 0 supporters. No demo donations or fake totals are displayed.</p>}
        {!!stats.recent?.length && <div className="supporter-list">{stats.recent.map((d, i) => <article key={i}><div className="supporter-avatar">≈</div><div><b>{d.name || 'Anonymous'}</b><span>${Number(d.amount || 0).toLocaleString()}</span>{d.comment && <p>“{d.comment}”</p>}</div></article>)}</div>}
      </div>
      {!stats.supporters && <div className="empty-wave">≈</div>}
    </section>
  );
}
