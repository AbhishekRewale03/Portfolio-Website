import { CalendarDays, Check, Dumbbell, Search, ShoppingBag, Users } from 'lucide-react'

export function ProjectVisual({ id }: { id: string }) {
  if (id === 'gympro') return <GymVisual />
  if (id === 'turfmate') return <TurfVisual />
  return <ForeverVisual />
}

function GymVisual() {
  return (
    <div className="product-ui gym-ui" aria-label="Illustrative GymPro dashboard preview">
      <aside>
        <div className="ui-brand"><Dumbbell size={17} /> GymPro</div>
        {['Overview', 'Members', 'Attendance', 'Payments', 'Reports'].map((item, i) => <span className={i === 0 ? 'active' : ''} key={item}>{item}</span>)}
      </aside>
      <main>
        <div className="ui-top"><div><small>Tuesday, 12 November</small><strong>Good evening, Abhishek</strong></div><div className="avatar">AR</div></div>
        <div className="metric-row"><article><small>Active members</small><b>248</b><em>+12 this month</em></article><article><small>Collected</small><b>₹2.4L</b><em>94% on time</em></article><article><small>Check-ins</small><b>86</b><em>Today</em></article></div>
        <div className="chart-panel"><div><small>Revenue overview</small><strong>Membership growth</strong></div><div className="bars">{[34,48,42,63,57,74,82,91].map((h,i)=><i style={{height:`${h}%`}} key={i}/>)}</div></div>
      </main>
    </div>
  )
}

function TurfVisual() {
  return (
    <div className="turf-ui" aria-label="Illustrative Turfmate booking preview">
      <div className="pitch"><div className="center-line"/><div className="center-circle"/><div className="stadium-glow"/></div>
      <div className="booking-card">
        <div className="booking-head"><span><CalendarDays size={15}/> Book a turf</span><b>Step 2 of 3</b></div>
        <h4>Evening slots</h4>
        <p>Wednesday, 13 November</p>
        <div className="slots"><span>6:00 PM</span><span className="selected">7:00 PM</span><span>8:00 PM</span></div>
        <div className="booking-summary"><span>60 minutes</span><strong>₹1,200</strong></div>
        <div className="confirm"><Check size={16}/> Reserve this slot</div>
      </div>
    </div>
  )
}

function ForeverVisual() {
  return (
    <div className="fashion-ui" aria-label="Illustrative Forever storefront preview">
      <header><b>FOREVER.</b><nav>New in&nbsp;&nbsp; Men&nbsp;&nbsp; Women</nav><span><Search size={15}/><ShoppingBag size={15}/></span></header>
      <div className="fashion-copy"><small>AW / 26</small><h4>Quiet<br />confidence.</h4><p>Considered essentials for everyday movement.</p><span className="fashion-cta">Explore collection</span></div>
      <div className="fashion-model"><div className="model-head"/><div className="model-neck"/><div className="model-body"/><div className="model-coat left"/><div className="model-coat right"/></div>
      <div className="fashion-meta"><Users size={14}/><span>Editorial storefront</span></div>
    </div>
  )
}
