"use client";
import { useEffect, useState } from "react";

export default function IntroExperience() {
  const [visible, setVisible] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const announceComplete=()=>window.dispatchEvent(new Event("saidul-intro-complete"));
    if (sessionStorage.getItem("saidul-intro-seen")) {
      const hideTimer=window.setTimeout(()=>setVisible(false),0);
      const announceTimer=window.setTimeout(announceComplete,80);
      return()=>{window.clearTimeout(hideTimer);window.clearTimeout(announceTimer)};
    }
    sessionStorage.setItem("saidul-intro-seen", "true");
    const timers = [
      window.setTimeout(() => setRevealed(true), 850),
      window.setTimeout(() => { setLeaving(true); announceComplete(); }, 3400),
      window.setTimeout(() => setVisible(false), 4000),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, []);

  if (!visible) return null;
  return <div className={`intro-overlay intro-short ${leaving ? "intro-leaving" : ""}`} role="status" aria-label="Loading Saidul Islam portfolio">
    <div className="intro-grid" />
    <div className={`intro-short-content ${revealed ? "intro-short-revealed" : ""}`}>
      <div className="intro-short-mark">SI.</div>
      <div className="intro-short-copy"><h2>Saidul <em>Islam.</em></h2><p>FULL-STACK WEB DEVELOPER · KHULNA, BANGLADESH</p></div>
    </div>
    <div className="intro-short-progress" />
  </div>;
}
