// Hand-built SVG illustrations for each project. No stock images, no AI-generated art.

export function BrainVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#0e081c" />
      <line x1="0" y1="50" x2="420" y2="50" stroke="#6366f1" strokeOpacity=".06" />
      <line x1="0" y1="100" x2="420" y2="100" stroke="#6366f1" strokeOpacity=".06" />
      <line x1="0" y1="150" x2="420" y2="150" stroke="#6366f1" strokeOpacity=".06" />
      <ellipse cx="105" cy="98" rx="78" ry="68" fill="none" stroke="#8b5cf6" strokeWidth="1.4" strokeOpacity=".5" />
      <ellipse cx="105" cy="98" rx="58" ry="50" fill="#1e1040" stroke="#6366f1" strokeOpacity=".4" />
      <path d="M55 78 Q80 68 105 78 Q130 68 155 78" fill="none" stroke="#a5b4fc" strokeOpacity=".4" />
      <path d="M50 98 Q75 86 105 93 Q135 86 160 98" fill="none" stroke="#a5b4fc" strokeOpacity=".4" />
      <circle cx="120" cy="86" r="17" fill="rgba(244,63,94,.16)" stroke="#f43f5e" strokeDasharray="3,2" />
      <circle cx="120" cy="86" r="7" fill="rgba(244,63,94,.32)" />
      <text x="105" y="180" textAnchor="middle" fontSize="7.5" fill="#8b5cf6" opacity=".6" fontFamily="monospace">MRI · AXIAL</text>
      <g transform="translate(230,18)">
        <circle cx="20" cy="30" r="4.5" fill="#6366f1" opacity=".7" /><circle cx="20" cy="60" r="4.5" fill="#6366f1" opacity=".7" />
        <circle cx="20" cy="90" r="4.5" fill="#6366f1" opacity=".7" /><circle cx="20" cy="120" r="4.5" fill="#6366f1" opacity=".7" />
        <circle cx="65" cy="45" r="4.5" fill="#8b5cf6" opacity=".8" /><circle cx="65" cy="75" r="4.5" fill="#8b5cf6" opacity=".8" />
        <circle cx="65" cy="105" r="4.5" fill="#8b5cf6" opacity=".8" />
        <circle cx="110" cy="60" r="4.5" fill="#06b6d4" opacity=".8" /><circle cx="110" cy="90" r="4.5" fill="#06b6d4" opacity=".8" />
        <circle cx="150" cy="75" r="6.5" fill="#10b981" />
        <line x1="24" y1="30" x2="61" y2="45" stroke="#6366f1" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="24" y1="60" x2="61" y2="45" stroke="#6366f1" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="24" y1="60" x2="61" y2="75" stroke="#6366f1" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="24" y1="90" x2="61" y2="75" stroke="#6366f1" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="24" y1="90" x2="61" y2="105" stroke="#6366f1" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="24" y1="120" x2="61" y2="105" stroke="#6366f1" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="69" y1="45" x2="106" y2="60" stroke="#8b5cf6" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="69" y1="75" x2="106" y2="60" stroke="#8b5cf6" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="69" y1="75" x2="106" y2="90" stroke="#8b5cf6" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="69" y1="105" x2="106" y2="90" stroke="#8b5cf6" strokeWidth=".7" strokeOpacity=".3" />
        <line x1="114" y1="60" x2="143" y2="75" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity=".4" />
        <line x1="114" y1="90" x2="143" y2="75" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity=".4" />
        <text x="150" y="158" textAnchor="middle" fontSize="7.5" fill="#10b981" fontFamily="monospace">98% acc.</text>
      </g>
    </svg>
  );
}

export function CancerVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#080c10" />
      <line x1="0" y1="48" x2="420" y2="48" stroke="#06b6d4" strokeOpacity=".06" />
      <line x1="0" y1="96" x2="420" y2="96" stroke="#06b6d4" strokeOpacity=".06" />
      <line x1="0" y1="144" x2="420" y2="144" stroke="#06b6d4" strokeOpacity=".06" />
      <path d="M30 38 L80 40 L130 48 L180 63 L230 86 L280 116 L330 143 L380 160" fill="none" stroke="#10b981" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M30 38 L80 53 L130 73 L180 98 L230 123 L280 146 L330 163 L370 173" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,3" strokeOpacity=".7" />
      <line x1="25" y1="28" x2="25" y2="178" stroke="#334155" strokeWidth="1.3" />
      <line x1="25" y1="178" x2="395" y2="178" stroke="#334155" strokeWidth="1.3" />
      <text x="80" y="190" fontSize="7.5" fill="#475569" textAnchor="middle" fontFamily="monospace">12m</text>
      <text x="230" y="190" fontSize="7.5" fill="#475569" textAnchor="middle" fontFamily="monospace">48m</text>
      <text x="380" y="190" fontSize="7.5" fill="#475569" textAnchor="middle" fontFamily="monospace">84m</text>
      <line x1="250" y1="34" x2="272" y2="34" stroke="#10b981" strokeWidth="2.4" />
      <text x="278" y="38" fontSize="7.5" fill="#10b981">Stage I-II</text>
      <line x1="250" y1="48" x2="272" y2="48" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,2" />
      <text x="278" y="52" fontSize="7.5" fill="#a5b4fc">Stage III-IV</text>
      <text x="210" y="14" textAnchor="middle" fontSize="8.5" fill="#94a3b8">Kaplan-Meier · Survival Analysis</text>
    </svg>
  );
}

export function MentalVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#0a0814" />
      <g transform="translate(15, 50)">
        <rect x="0" y="20" width="62" height="52" rx="6" fill="#1a0e2e" stroke="#8b5cf6" strokeOpacity=".5" />
        <text x="31" y="36" textAnchor="middle" fontSize="7" fill="#c4b5fd" fontFamily="monospace">LSTM</text>
        <rect x="8" y="42" width="14" height="9" rx="2" fill="#6366f1" fillOpacity=".4" />
        <rect x="24" y="42" width="14" height="9" rx="2" fill="#8b5cf6" fillOpacity=".4" />
        <rect x="40" y="42" width="14" height="9" rx="2" fill="#06b6d4" fillOpacity=".4" />
        <line x1="64" y1="46" x2="78" y2="46" stroke="#8b5cf6" strokeWidth="1.4" strokeOpacity=".6" />
      </g>
      <g transform="translate(95, 50)">
        <rect x="0" y="20" width="62" height="52" rx="6" fill="#1a0e2e" stroke="#8b5cf6" strokeOpacity=".65" />
        <text x="31" y="36" textAnchor="middle" fontSize="7" fill="#c4b5fd" fontFamily="monospace">LSTM</text>
        <rect x="8" y="42" width="14" height="9" rx="2" fill="#6366f1" fillOpacity=".5" />
        <rect x="24" y="42" width="14" height="9" rx="2" fill="#8b5cf6" fillOpacity=".5" />
        <rect x="40" y="42" width="14" height="9" rx="2" fill="#06b6d4" fillOpacity=".5" />
        <line x1="64" y1="46" x2="78" y2="46" stroke="#8b5cf6" strokeWidth="1.4" strokeOpacity=".6" />
      </g>
      <g transform="translate(175, 50)">
        <rect x="0" y="20" width="62" height="52" rx="6" fill="#1e1040" stroke="#8b5cf6" strokeWidth="1.3" strokeOpacity=".8" />
        <text x="31" y="36" textAnchor="middle" fontSize="7" fill="#c4b5fd" fontFamily="monospace">LSTM</text>
        <rect x="8" y="42" width="14" height="9" rx="2" fill="#6366f1" fillOpacity=".7" />
        <rect x="24" y="42" width="14" height="9" rx="2" fill="#8b5cf6" fillOpacity=".7" />
        <rect x="40" y="42" width="14" height="9" rx="2" fill="#06b6d4" fillOpacity=".7" />
      </g>
      <text x="15" y="150" fontSize="8" fill="#6b7280" fontFamily="monospace">"I feel anxious and overwhelmed..."</text>
      <line x1="15" y1="153" x2="255" y2="153" stroke="#6366f1" strokeOpacity=".2" />
      <rect x="270" y="50" width="78" height="20" rx="5" fill="rgba(244,63,94,.1)" stroke="#f43f5e" strokeOpacity=".6" />
      <text x="309" y="63" textAnchor="middle" fontSize="8" fill="#fca5a5">Depression 78%</text>
      <rect x="270" y="75" width="78" height="20" rx="5" fill="rgba(245,158,11,.1)" stroke="#f59e0b" strokeOpacity=".6" />
      <text x="309" y="88" textAnchor="middle" fontSize="8" fill="#fcd34d">Anxiety 42%</text>
      <text x="210" y="16" textAnchor="middle" fontSize="8.5" fill="#8b8ba8">LSTM · Mental Health Text Classification</text>
    </svg>
  );
}

export function SentimentVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#080c10" />
      <defs>
        <linearGradient id="pg1" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#059669" stopOpacity=".5" /></linearGradient>
        <linearGradient id="ng1" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#f43f5e" /><stop offset="100%" stopColor="#e11d48" stopOpacity=".5" /></linearGradient>
      </defs>
      <rect x="30" y="20" width="1" height="155" fill="#334155" />
      <rect x="30" y="174" width="355" height="1" fill="#334155" />
      <rect x="50" y="58" width="55" height="116" rx="4" fill="url(#pg1)" />
      <text x="77" y="52" textAnchor="middle" fontSize="9" fill="#10b981" fontFamily="monospace">88%</text>
      <text x="77" y="188" textAnchor="middle" fontSize="7.5" fill="#64748b">Positive</text>
      <rect x="180" y="106" width="55" height="68" rx="4" fill="url(#ng1)" />
      <text x="207" y="100" textAnchor="middle" fontSize="9" fill="#f43f5e" fontFamily="monospace">62%</text>
      <text x="207" y="188" textAnchor="middle" fontSize="7.5" fill="#64748b">Negative</text>
      <text x="240" y="35" fontSize="13" fill="#10b981" fillOpacity=".7" fontWeight="bold">great</text>
      <text x="290" y="68" fontSize="11" fill="#f43f5e" fillOpacity=".6">poor</text>
      <text x="330" y="50" fontSize="8" fill="#f43f5e" fillOpacity=".4">terrible</text>
      <text x="210" y="14" textAnchor="middle" fontSize="8.5" fill="#8b8ba8">Product Review Sentiment · 88% Accuracy</text>
    </svg>
  );
}

export function FruitVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#0a0c10" />
      <rect x="10" y="62" width="44" height="68" rx="4" fill="#1a2030" stroke="#334155" />
      <rect x="14" y="66" width="36" height="60" rx="2" fill="#1e2d20" />
      <ellipse cx="32" cy="96" rx="13" ry="15" fill="#22c55e" fillOpacity=".7" />
      <text x="32" y="148" textAnchor="middle" fontSize="6.5" fill="#475569">Input</text>
      <g transform="translate(68, 48)">
        <rect x="0" y="0" width="16" height="95" rx="2" fill="#6366f1" fillOpacity=".35" stroke="#6366f1" strokeOpacity=".5" />
        <rect x="20" y="10" width="16" height="75" rx="2" fill="#6366f1" fillOpacity=".45" stroke="#6366f1" strokeOpacity=".5" />
        <text x="18" y="107" textAnchor="middle" fontSize="6.5" fill="#a5b4fc">Conv</text>
      </g>
      <g transform="translate(140, 62)">
        <rect x="0" y="0" width="14" height="65" rx="2" fill="#8b5cf6" fillOpacity=".45" stroke="#8b5cf6" strokeOpacity=".5" />
        <text x="7" y="79" textAnchor="middle" fontSize="6.5" fill="#c4b5fd">Pool</text>
      </g>
      <rect x="245" y="50" width="72" height="28" rx="6" fill="rgba(34,197,94,.13)" stroke="#22c55e" />
      <text x="281" y="61" textAnchor="middle" fontSize="8" fill="#86efac" fontWeight="bold">🍎 Apple</text>
      <text x="281" y="73" textAnchor="middle" fontSize="7" fill="#86efac" fontFamily="monospace">97.2%</text>
      <rect x="245" y="84" width="72" height="28" rx="6" fill="rgba(250,204,21,.06)" stroke="#eab308" strokeOpacity=".5" />
      <text x="281" y="95" textAnchor="middle" fontSize="8" fill="#fde047" fillOpacity=".6">🍋 Lemon</text>
      <text x="281" y="107" textAnchor="middle" fontSize="7" fill="#fde047" fillOpacity=".5" fontFamily="monospace">2.8%</text>
      <rect x="330" y="135" width="80" height="35" rx="6" fill="rgba(99,102,241,.08)" stroke="#6366f1" strokeOpacity=".6" />
      <text x="370" y="148" textAnchor="middle" fontSize="7" fill="#a5b4fc">CNN Classifier</text>
      <text x="370" y="160" textAnchor="middle" fontSize="8.5" fill="#c7d2fe" fontWeight="bold" fontFamily="monospace">&gt;95% Acc.</text>
      <text x="140" y="190" textAnchor="middle" fontSize="8.5" fill="#64748b">CNN Image Classification</text>
    </svg>
  );
}

export function MoneyVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#08100a" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#10b981" strokeWidth="17" strokeDasharray="108 203" transform="rotate(-90 100 100)" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#6366f1" strokeWidth="17" strokeDasharray="62 249" strokeDashoffset="-108" transform="rotate(-90 100 100)" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#f59e0b" strokeWidth="17" strokeDasharray="33 278" strokeDashoffset="-170" transform="rotate(-90 100 100)" />
      <circle cx="100" cy="100" r="34" fill="#08100a" />
      <text x="100" y="96" textAnchor="middle" fontSize="10" fill="#e2e8f0" fontWeight="bold" fontFamily="monospace">+42%</text>
      <text x="100" y="110" textAnchor="middle" fontSize="6.5" fill="#64748b">savings rate</text>
      <polyline points="210,148 240,118 270,133 300,88 330,98 360,73 390,80" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      <path d="M210,148 240,118 270,133 300,88 330,98 360,73 390,80 390,158 210,158Z" fill="rgba(16,185,129,.05)" />
      <circle cx="300" cy="88" r="3.5" fill="#10b981" />
      <rect x="210" y="14" width="85" height="30" rx="5" fill="rgba(16,185,129,.1)" stroke="#10b981" strokeOpacity=".6" />
      <text x="252" y="26" textAnchor="middle" fontSize="6.5" fill="#64748b">Balance</text>
      <text x="252" y="38" textAnchor="middle" fontSize="8" fill="#10b981" fontWeight="bold" fontFamily="monospace">248,500</text>
      <text x="210" y="180" textAnchor="middle" fontSize="8.5" fill="#475569">Money Hub · Finance Dashboard</text>
    </svg>
  );
}

export function SanadiVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#0a0a14" />
      <rect x="0" y="0" width="85" height="195" fill="#0e0e22" />
      <rect x="8" y="16" width="69" height="24" rx="6" fill="rgba(99,102,241,.15)" stroke="#6366f1" strokeOpacity=".5" />
      <text x="42" y="32" textAnchor="middle" fontSize="8.5" fill="#a5b4fc" fontWeight="bold">🌸 Sanadi</text>
      <rect x="8" y="48" width="69" height="16" rx="4" fill="rgba(99,102,241,.1)" />
      <text x="42" y="59" textAnchor="middle" fontSize="7" fill="#818cf8">Dashboard</text>
      <text x="42" y="79" textAnchor="middle" fontSize="7" fill="#4b5563">Children</text>
      <text x="42" y="99" textAnchor="middle" fontSize="7" fill="#4b5563">Payments</text>
      <text x="42" y="119" textAnchor="middle" fontSize="7" fill="#4b5563">Staff</text>
      <rect x="100" y="14" width="65" height="36" rx="5" fill="#13132a" stroke="#1e1e3a" />
      <text x="132" y="27" textAnchor="middle" fontSize="6.5" fill="#6b7280">Children</text>
      <text x="132" y="42" textAnchor="middle" fontSize="12" fill="#6366f1" fontWeight="bold" fontFamily="monospace">47</text>
      <rect x="172" y="14" width="65" height="36" rx="5" fill="#13132a" stroke="#1e1e3a" />
      <text x="204" y="27" textAnchor="middle" fontSize="6.5" fill="#6b7280">Enrolled</text>
      <text x="204" y="42" textAnchor="middle" fontSize="12" fill="#10b981" fontWeight="bold" fontFamily="monospace">39</text>
      <rect x="244" y="14" width="65" height="36" rx="5" fill="#13132a" stroke="#1e1e3a" />
      <text x="276" y="27" textAnchor="middle" fontSize="6.5" fill="#6b7280">Pending</text>
      <text x="276" y="42" textAnchor="middle" fontSize="12" fill="#f59e0b" fontWeight="bold" fontFamily="monospace">8</text>
      <rect x="100" y="58" width="310" height="118" rx="6" fill="#0e0e22" stroke="#1e1e3a" />
      <text x="113" y="73" fontSize="8" fill="#6366f1" fontWeight="bold">Recent Enrollments</text>
      <line x1="100" y1="78" x2="410" y2="78" stroke="#1e1e3a" />
      <text x="113" y="98" fontSize="7.5" fill="#94a3b8">Amal B.</text>
      <rect x="270" y="89" width="38" height="12" rx="3" fill="rgba(16,185,129,.15)" />
      <text x="289" y="98" textAnchor="middle" fontSize="6.5" fill="#34d399">Active</text>
      <text x="113" y="118" fontSize="7.5" fill="#94a3b8">Youssef M.</text>
      <rect x="270" y="109" width="38" height="12" rx="3" fill="rgba(245,158,11,.1)" />
      <text x="289" y="118" textAnchor="middle" fontSize="6.5" fill="#fbbf24">Pending</text>
    </svg>
  );
}

export function BudgetVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#08100c" />
      <rect x="10" y="10" width="85" height="38" rx="5" fill="#0e1a12" stroke="#1a2e1e" />
      <text x="52" y="24" textAnchor="middle" fontSize="6.8" fill="#4b5563">Total Budget</text>
      <text x="52" y="39" textAnchor="middle" fontSize="11.5" fill="#10b981" fontWeight="bold" fontFamily="monospace">18.2M</text>
      <rect x="105" y="10" width="85" height="38" rx="5" fill="#0e1a12" stroke="#1a2e1e" />
      <text x="147" y="24" textAnchor="middle" fontSize="6.8" fill="#4b5563">Spent</text>
      <text x="147" y="39" textAnchor="middle" fontSize="11.5" fill="#f59e0b" fontWeight="bold" fontFamily="monospace">11.7M</text>
      <text x="10" y="65" fontSize="7.5" fill="#4b5563">Project A: Road Section 12</text>
      <rect x="10" y="69" width="295" height="7" rx="3.5" fill="#1a2e1e" />
      <rect x="10" y="69" width="207" height="7" rx="3.5" fill="#10b981" />
      <text x="312" y="75" fontSize="7" fill="#10b981" fontFamily="monospace">70%</text>
      <text x="10" y="90" fontSize="7.5" fill="#4b5563">Project B: Infrastructure Zone</text>
      <rect x="10" y="94" width="295" height="7" rx="3.5" fill="#1a2e1e" />
      <rect x="10" y="94" width="251" height="7" rx="3.5" fill="#f59e0b" />
      <text x="312" y="100" fontSize="7" fill="#f59e0b" fontFamily="monospace">85%</text>
      <text x="10" y="115" fontSize="7.5" fill="#4b5563">Project C: Access Roads</text>
      <rect x="10" y="119" width="295" height="7" rx="3.5" fill="#1a2e1e" />
      <rect x="10" y="119" width="109" height="7" rx="3.5" fill="#6366f1" />
      <text x="312" y="125" fontSize="7" fill="#a5b4fc" fontFamily="monospace">37%</text>
      <rect x="10" y="140" width="135" height="17" rx="4" fill="rgba(244,63,94,.1)" stroke="#f43f5e" strokeOpacity=".5" />
      <text x="77" y="152" textAnchor="middle" fontSize="7" fill="#fca5a5">⚠ Near Budget Limit</text>
    </svg>
  );
}

export function EquipVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#10090a" />
      <text x="210" y="38" textAnchor="middle" fontSize="13" fill="#fca5a5" fillOpacity=".7" fontWeight="bold">🚚 Equipment Rental System</text>
      <rect x="20" y="58" width="180" height="45" rx="6" fill="#1a1010" stroke="#3a1a1a" />
      <text x="110" y="76" textAnchor="middle" fontSize="8" fill="#94a3b8">Excavator CAT-320</text>
      <rect x="32" y="82" width="80" height="14" rx="3" fill="rgba(16,185,129,.15)" />
      <text x="72" y="92" textAnchor="middle" fontSize="6.5" fill="#34d399">Within Budget</text>
      <rect x="220" y="58" width="180" height="45" rx="6" fill="#1a1010" stroke="#3a1a1a" />
      <text x="310" y="76" textAnchor="middle" fontSize="8" fill="#94a3b8">Crane Liebherr LTM</text>
      <rect x="232" y="82" width="80" height="14" rx="3" fill="rgba(244,63,94,.15)" />
      <text x="272" y="92" textAnchor="middle" fontSize="6.5" fill="#fca5a5">⚠ Over Budget</text>
      <rect x="20" y="116" width="380" height="55" rx="6" fill="#150e0e" stroke="#2a1818" />
      <text x="35" y="133" fontSize="8" fill="#f43f5e" fontWeight="bold">Automated Validation Engine</text>
      <text x="35" y="148" fontSize="7" fill="#6b7280" fontFamily="monospace">Rule: amount &#8804; allocated_budget(supplier, period)</text>
      <text x="35" y="161" fontSize="7" fill="#6b7280">Sends alerts automatically when spending is too high</text>
    </svg>
  );
}

export function MyServicesVisual() {
  return (
    <svg viewBox="0 0 420 195" className="w-full h-full">
      <rect width="420" height="195" fill="#0a0f14" />

      <rect x="0" y="0" width="78" height="195" fill="#0d1420" />
      <rect x="8" y="14" width="62" height="22" rx="5" fill="rgba(16,185,129,.14)" stroke="#10b981" strokeOpacity=".5" />
      <text x="39" y="29" textAnchor="middle" fontSize="8" fill="#6ee7b7" fontWeight="bold">My Services</text>
      <rect x="8" y="44" width="62" height="15" rx="3" fill="rgba(99,102,241,.1)" />
      <text x="39" y="54" textAnchor="middle" fontSize="6.5" fill="#a5b4fc">Orders</text>
      <text x="39" y="74" textAnchor="middle" fontSize="6.5" fill="#4b5563">Services</text>
      <text x="39" y="94" textAnchor="middle" fontSize="6.5" fill="#4b5563">Payments</text>
      <text x="39" y="114" textAnchor="middle" fontSize="6.5" fill="#4b5563">Clients</text>
      <rect x="8" y="168" width="62" height="17" rx="4" fill="rgba(99,102,241,.08)" stroke="#6366f1" strokeOpacity=".4" />
      <text x="39" y="180" textAnchor="middle" fontSize="6.5" fill="#a5b4fc">Admin</text>

      <text x="90" y="20" fontSize="8.5" fill="#6366f1" fontWeight="bold">Order Requests</text>
      <line x1="88" y1="26" x2="412" y2="26" stroke="#1e293b" />

      <rect x="88" y="34" width="248" height="34" rx="6" fill="#0e1622" stroke="#1c2735" />
      <text x="98" y="48" fontSize="7.5" fill="#e2e8f0">PowerPoint Presentation</text>
      <text x="98" y="60" fontSize="6.5" fill="#64748b">Client: Sarah K.</text>
      <rect x="270" y="42" width="58" height="16" rx="8" fill="rgba(245,158,11,.12)" stroke="#f59e0b" strokeOpacity=".5" />
      <text x="299" y="53" textAnchor="middle" fontSize="6.5" fill="#fbbf24">Pending</text>

      <rect x="88" y="74" width="248" height="34" rx="6" fill="#0e1622" stroke="#1c2735" />
      <text x="98" y="88" fontSize="7.5" fill="#e2e8f0">Excel Financial Report</text>
      <text x="98" y="100" fontSize="6.5" fill="#64748b">Client: Karim B.</text>
      <rect x="270" y="82" width="58" height="16" rx="8" fill="rgba(16,185,129,.12)" stroke="#10b981" strokeOpacity=".5" />
      <text x="299" y="93" textAnchor="middle" fontSize="6.5" fill="#34d399">Confirmed</text>

      <rect x="88" y="114" width="248" height="34" rx="6" fill="#0e1622" stroke="#1c2735" />
      <text x="98" y="128" fontSize="7.5" fill="#e2e8f0">Research Paper Help</text>
      <text x="98" y="140" fontSize="6.5" fill="#64748b">Client: Lina M.</text>
      <rect x="270" y="122" width="58" height="16" rx="8" fill="rgba(16,185,129,.12)" stroke="#10b981" strokeOpacity=".5" />
      <text x="299" y="133" textAnchor="middle" fontSize="6.5" fill="#34d399">Paid</text>

      <rect x="345" y="34" width="65" height="114" rx="8" fill="rgba(6,182,212,.07)" stroke="#06b6d4" strokeOpacity=".35" />
      <text x="377" y="50" textAnchor="middle" fontSize="6.5" fill="#67e8f9" fontWeight="bold">Telegram</text>
      <circle cx="377" cy="68" r="11" fill="rgba(6,182,212,.18)" />
      <text x="377" y="72" textAnchor="middle" fontSize="11">✈</text>
      <text x="377" y="92" textAnchor="middle" fontSize="6" fill="#94a3b8">New order</text>
      <text x="377" y="102" textAnchor="middle" fontSize="6" fill="#94a3b8">received!</text>
      <circle cx="396" cy="40" r="6" fill="#f43f5e" />
      <text x="396" y="43" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">1</text>
      <rect x="352" y="124" width="50" height="16" rx="4" fill="rgba(6,182,212,.1)" />
      <text x="377" y="135" textAnchor="middle" fontSize="6" fill="#67e8f9">Instant alert</text>

      <text x="210" y="190" textAnchor="middle" fontSize="8.5" fill="#475569">Admin Dashboard with Live Telegram Alerts</text>
    </svg>
  );
}

export const visualMap = {
  brain: BrainVisual,
  cancer: CancerVisual,
  mental: MentalVisual,
  sentiment: SentimentVisual,
  fruit: FruitVisual,
  money: MoneyVisual,
  sanadi: SanadiVisual,
  budget: BudgetVisual,
  equip: EquipVisual,
  myservices: MyServicesVisual,
};
