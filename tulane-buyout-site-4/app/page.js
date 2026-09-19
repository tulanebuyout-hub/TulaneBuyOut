import PaymentForm from '../components/PaymentForm';
import { CampaignProgress, RecentSupporters } from '../components/CampaignStats';

const HERO = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Tulane_Green_Wave_football_takes_the_field_(2014).jpg?width=2200';
const STADIUM = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Yulman_Stadium_-_Tulane_Green_Wave_%2855143965690%29.jpg/1920px-Yulman_Stadium_-_Tulane_Green_Wave_%2855143965690%29.jpg';

const facts = [
  ['2022', '12–2', 'Cotton Bowl win over USC; final No. 9 AP ranking'],
  ['2023', '11–3', '8–0 in conference play'],
  ['2024', '9–5', 'Third straight American Conference title-game appearance'],
  ['2025', '11–3', 'American champion; first CFP appearance; final No. 18 ranking']
];

export default function Page() {
  return (
    <main>
      <div className="prelaunch">INDEPENDENT FAN-ORGANIZED CAMPAIGN • NOT AFFILIATED WITH TULANE UNIVERSITY OR TULANE ATHLETICS</div>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Campaign home"><span className="wave">≈</span><span>ROLL WAVE • FAN CAMPAIGN</span></a>
        <nav><a href="#why">Why change?</a><a href="#funds">Funds</a><a href="#faq">FAQ</a><a className="nav-cta" href="#contribute">Contribute</a></nav>
      </header>

      <section id="top" className="hero" style={{backgroundImage:`linear-gradient(90deg, rgba(2,61,47,.96), rgba(2,61,47,.72) 48%, rgba(2,61,47,.28)), url(${HERO})`}}>
        <div className="hero-copy">
          <div className="eyebrow">INDEPENDENT FAN-ORGANIZED CAMPAIGN</div>
          <h1>Tulane Green Wave<br/><span>Coach Will Hall Buyout Fund</span></h1>
          <p>An independent fan-organized campaign calling for a coaching change and a new direction for Tulane football.</p>
          <div className="hero-actions"><a className="primary" href="#contribute">Support the campaign</a><a className="ghost" href="#why">Read the case for change</a></div>
          <p className="hero-disclaimer">Not affiliated with, sponsored by, or endorsed by Tulane University, Tulane Athletics, the Green Wave football program, Will Hall, or any official organization.</p>
        </div>
      </section>
      <div className="photo-credit">Hero photo: <a href="https://commons.wikimedia.org/wiki/File:Tulane_Green_Wave_football_takes_the_field_(2014).jpg" target="_blank" rel="noreferrer">Vegasjon / Wikimedia Commons</a> • CC BY-SA 4.0 • dark overlay/crop applied</div>

      <section className="campaign-shell">
<CampaignProgress />

        <div id="contribute" className="donate-card">
          <div className="section-kicker">MAKE YOUR POSITION HEARD</div>
          <h2>Contribute to the campaign</h2>
          <p>Payments stay on this website using Stripe’s secure Payment Element. Contributions are nonrefundable. If an authorized coaching-transition use cannot be completed, funds will be redirected to the campaign’s designated Tulane-related NIL recipient under the published campaign policy.</p>
          <PaymentForm />
        </div>
      </section>

      <section id="why" className="section green-section">
        <div className="section-kicker light">THE STANDARD TULANE BUILT</div>
        <h2>Why supporters believe Tulane should move on from Will Hall</h2>
        <p className="lead">This campaign’s argument is about the direction of the football program, not a personal attack. Tulane entered 2026 after one of the strongest four-year stretches in program history. Supporters backing this campaign believe that standard should be protected.</p>
        <div className="season-grid">
          {facts.map(([year, record, detail]) => <article key={year}><span>{year}</span><strong>{record}</strong><p>{detail}</p></article>)}
        </div>
        <div className="callout">From 2022 through 2025, Tulane went <b>43–13</b>, with a Cotton Bowl win, repeated conference-title appearances, an American championship and the program’s first College Football Playoff berth.</div>
      </section>

      <section className="section split">
        <div>
          <div className="section-kicker">THE EARLY 2026 CONCERN</div>
          <h2>A sharp change in trajectory</h2>
          <p>Supporters of this campaign believe quarterback play, offensive execution, play-calling, third-down efficiency and discipline have fallen short of the standard established in recent seasons.</p>
          <div className="games">
            <article><div className="date">SEP 5</div><div><b>Duke 17, Tulane 3</b><p>258 total yards, 54 rushing yards, 10 first downs, 3-for-14 on third down and 15 penalties for 104 yards.</p></div></article>
            <article><div className="date win">SEP 12</div><div><b>Tulane 28, South Alabama 24</b><p>A win powered by Jaylin Lucas’ 214 rushing yards, but South Alabama recorded 25 first downs to Tulane’s 13.</p></div></article>
            <article><div className="date">SEP 19</div><div><b>Kansas State 31, Tulane 20</b><p>The loss moved Tulane to 1–2 through three games.</p></div></article>
          </div>
        </div>
        <aside className="record-card"><div className="section-kicker">HALL’S FBS HEAD-COACHING RECORD</div><div className="record-number">14–30</div><p>Will Hall finished 14–30 across four seasons as Southern Miss head coach. ESPN reported that Southern Miss fired Hall on October 20, 2024 after the Golden Eagles fell to 1–6 that season following a 44–28 loss to Arkansas State. ESPN also noted that Southern Miss had gone 4–15 after Hall’s 7–6 bowl season in 2022. <a href="https://www.espn.com/college-football/story/_/id/41911928/southern-miss-fires-head-coach-hall-14-30-record" target="_blank" rel="noreferrer">Read ESPN’s report.</a></p></aside>
      </section>

      <section className="section photo-showcase">
        <div className="showcase-copy">
          <div className="section-kicker">TULANE VISUALS</div>
          <h2>Championship expectations should still look and feel like Tulane football.</h2>
          <p>This campaign now includes a dedicated second image section so the site feels more polished and more unmistakably Tulane. The hero image focuses on the team taking the field, while this section highlights Yulman Stadium and the standard supporters believe the program should defend.</p>
          <div className="showcase-points">
            <span>• Cotton Bowl standard</span>
            <span>• CFP-level expectations</span>
            <span>• Built around a stronger Green Wave aesthetic</span>
          </div>
        </div>
        <figure className="showcase-image">
          <img src={STADIUM} alt="Yulman Stadium at Tulane" />
          <figcaption>Yulman Stadium photo: <a href="https://commons.wikimedia.org/wiki/File:Yulman_Stadium_-_Tulane_Green_Wave_(55143965690).jpg" target="_blank" rel="noreferrer">ajay_suresh / Wikimedia Commons</a> • CC BY 4.0</figcaption>
        </figure>
      </section>

      <section id="funds" className="section funds-section">
        <div className="section-kicker">TRANSPARENCY FIRST</div><h2>How the funds are intended to work</h2>
        <div className="fund-grid">
          <article><span>01</span><h3>If the target is reached</h3><p>The organizer intends to request direct communication with Tulane Athletics leadership to discuss the proper, lawful and authorized steps forward. Reaching the target does not itself trigger or guarantee a coaching change, and this campaign does not claim Tulane has agreed to accept the funds.</p></article>
          <article><span>02</span><h3>If a buyout / transition cannot be completed</h3><p>If an authorized buyout or coaching-transition use cannot be completed, all remaining campaign proceeds will be redirected to the designated Tulane-related NIL recipient identified by the campaign, subject to applicable platform, tax, collective and legal requirements. Contributions are not refundable.</p></article>
          <article><span>03</span><h3>Nonrefundable contribution policy</h3><p>Contributions are nonrefundable. By contributing, supporters agree that if an authorized coaching-transition use cannot be completed, the campaign may redirect the remaining proceeds to the designated Tulane-related NIL recipient described in campaign updates.</p></article>
        </div>
        <div className="legal-box"><b>Important:</b> No representation is being made that Tulane University has authorized this campaign, will accept these funds, or that crowdfunding proceeds can directly satisfy any contractual buyout obligation.</div>
      </section>

<RecentSupporters />

      <section className="section update-section"><div className="section-kicker">CAMPAIGN UPDATES</div><h2>September 19, 2026</h2><div className="update-card"><div className="dot"></div><div><b>Crowdfund Buyout Campaign Launched</b><p>Today marks the launch of this independent fan-organized campaign. We will post updates as contributions come in and as any discussions or outreach to university or athletics leadership develop. No representation is being made that Tulane has approved, endorsed, or agreed to participate in the campaign.</p></div></div></section>

      <section id="faq" className="section faq"><div className="section-kicker">QUESTIONS & ANSWERS</div><h2>Frequently asked questions</h2>
        <details open><summary>What happens if we reach the buyout goal?</summary><p>The organizer intends to seek direct communication with Tulane Athletics leadership to discuss the proper, authorized next steps. Reaching the goal does not itself trigger or guarantee a coaching change and does not mean Tulane has agreed to accept campaign funds.</p></details>
        <details><summary>Where does the money go?</summary><p>The first intended use is a lawful, authorized coaching-transition or buyout effort if an appropriate mechanism exists. If that cannot be completed, all remaining proceeds will be redirected to the designated Tulane-related NIL recipient identified by the campaign. Contributions are nonrefundable.</p></details>
        <details><summary>What if a successful buyout cannot be attained?</summary><p>Contributions are nonrefundable. If an authorized buyout or coaching-transition use cannot be completed, all remaining campaign proceeds will be redirected to the designated Tulane-related NIL recipient identified by the campaign, subject to applicable requirements.</p></details>
        <details><summary>Is this affiliated with Tulane University?</summary><p>No. This is an independent fan-organized campaign and is not affiliated with, sponsored by or endorsed by Tulane University, Tulane Athletics, the football program, Will Hall or any official organization.</p></details>
        <details><summary>Can I contribute anonymously?</summary><p>Yes. The site can keep your public supporter name anonymous while payment information remains privately processed through Stripe.</p></details>
        <details><summary>Are contributions refundable?</summary><p>No. Contributions are nonrefundable. By contributing, supporters agree that if an authorized coaching-transition use cannot be completed, remaining proceeds may be redirected to the designated Tulane-related NIL recipient identified by the campaign.</p></details>
      </section>

      <section className="sources section"><div className="section-kicker">FACT CHECKING</div><h2>Sources used for campaign claims</h2><p>Primary factual claims are based on Tulane Athletics and Southern Miss Athletics records and recaps, including Tulane’s 2025 final ranking / CFP recap, Tulane’s announcement naming Will Hall, Tulane’s 2026 Duke and South Alabama recaps, and Southern Miss’ 2024 leadership-change announcement, and ESPN’s report on Hall’s dismissal with a 14–30 record. The Sept. 19 Kansas State result is current as of campaign launch.</p><div className="source-links"><a href="https://tulanegreenwave.com/news/2026/1/20/football-finishes-ranked-no-18-in-final-national-polls" target="_blank">Tulane: 2025 final ranking / CFP</a><a href="https://tulanegreenwave.com/news/2025/12/8/tulane-selects-will-hall-to-lead-green-waves-football-program" target="_blank">Tulane: Will Hall hiring</a><a href="https://tulanegreenwave.com/news/2026/9/5/football-opens-season-with-17-3-road-loss-to-duke" target="_blank">Tulane: Duke recap</a><a href="https://tulanegreenwave.com/news/2026/9/12/football-rallies-for-thrilling-28-24-home-opening-victory-over-south-alabama" target="_blank">Tulane: South Alabama recap</a><a href="https://southernmiss.com/news/2024/10/20/southern-miss-announces-football-leadership-change" target="_blank">Southern Miss: 2024 leadership change</a><a href="https://www.espn.com/college-football/story/_/id/41911928/southern-miss-fires-head-coach-hall-14-30-record" target="_blank">ESPN: Hall fired at 14–30</a></div></section>

      <footer><div className="footer-brand"><span className="wave">≈</span><b>ROLL WAVE • FAN CAMPAIGN</b></div><p>Independent fan-organized campaign. Not affiliated with, sponsored by, or endorsed by Tulane University, Tulane Athletics, the Green Wave football program, Will Hall, or any official organization.</p><p className="micro">Tulane, Green Wave and related marks belong to their respective owners. This site uses a Tulane-inspired color palette for commentary and fan advocacy; it does not claim official status.</p></footer>
      <a href="#contribute" className="mobile-cta">Contribute</a>
    </main>
  );
}
