/* Generated SVG "product preview" artwork.
 * Renders a deterministic, premium mockup per project variant so the
 * portfolio never depends on placeholder/broken image assets.
 */

const windowChrome = (id) => (
  <g>
    <rect x="0" y="0" width="800" height="34" rx="14" fill="#0d1117" opacity="0.04" />
    <circle cx="22" cy="17" r="5" fill="#ff5f57" opacity="0.9" />
    <circle cx="40" cy="17" r="5" fill="#febc2e" opacity="0.9" />
    <circle cx="58" cy="17" r="5" fill="#28c840" opacity="0.9" />
    <rect x="180" y="10" width="420" height="14" rx="7" fill="#ffffff" opacity="0.55" />
  </g>
);

const card = (x, y, w, h, fill) => (
  <rect x={x} y={y} width={w} height={h} rx="10" fill={fill} />
);

const bars = (x, y, w, h, color) => (
  <g>
    {Array.from({ length: 7 }).map((_, i) => (
      <rect
        key={i}
        x={x + i * w}
        y={y + h * (0.25 + 0.65 * ((i * 37) % 100) / 100) * -1 + h}
        width={w - 6}
        height={h * (0.25 + 0.65 * ((i * 37) % 100) / 100)}
        rx="3"
        fill={color}
        opacity={0.35 + 0.65 * (i / 7)}
      />
    ))}
  </g>
);

function DashboardArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      {/* sidebar */}
      <rect x="0" y="34" width="150" height="486" fill="#0d1117" opacity="0.22" />
      {[70, 110, 150, 190, 230].map((y, i) => (
        <rect key={i} x="28" y={y} width={i === 0 ? 90 : 64} height="14" rx="7" fill={sc(i === 0 ? 0.9 : 0.35)} />
      ))}
      {/* topbar */}
      <rect x="150" y="48" width="200" height="14" rx="7" fill={sc(0.5)} />
      <rect x="690" y="44" width="80" height="22" rx="11" fill={c2} />
      {/* stat cards */}
      {[180, 340, 500, 660].map((x, i) => (
        <g key={i}>
          <rect x={x} y="92" width="120" height="86" rx="12" fill="#ffffff" opacity="0.16" />
          <rect x={x + 16} y="108" width="46" height="10" rx="5" fill={sc(0.55)} />
          <rect x={x + 16} y="130" width="72" height="16" rx="8" fill="#ffffff" opacity="0.85" />
          <rect x={x + 16} y="156" width="34" height="10" rx="5" fill={c2} />
        </g>
      ))}
      {/* main chart */}
      <rect x="180" y="200" width="360" height="150" rx="14" fill="#ffffff" opacity="0.14" />
      <text x="200" y="226" fontFamily="Montserrat, sans-serif" fontSize="13" fontWeight="700" fill="#ffffff" opacity="0.75">
        Revenue overview
      </text>
      {bars(200, 268, 46, 66, sc(0.9))}
      {/* side panel */}
      <rect x="560" y="200" width="210" height="150" rx="14" fill="#ffffff" opacity="0.14" />
      <rect x="580" y="224" width="120" height="12" rx="6" fill={sc(0.55)} />
      {[256, 288, 320].map((y, i) => (
        <g key={i}>
          <rect x="580" y={y} width="170" height="18" rx="9" fill="#ffffff" opacity="0.12" />
          <rect x="584" y={y + 4} width="80" height="10" rx="5" fill={sc(0.5)} />
        </g>
      ))}
      {/* table */}
      <rect x="180" y="366" width="590" height="120" rx="14" fill="#ffffff" opacity="0.12" />
      {[386, 412, 438, 464].map((y, i) => (
        <rect key={i} x="196" y={y} width={540 - (i % 3) * 80} height="10" rx="5" fill={sc(0.28 + 0.08 * i)} />
      ))}
      <text
        x="744"
        y="470"
        fontFamily="Montserrat, sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#ffffff"
        opacity="0.6"
        textAnchor="end"
      >
        {text}
      </text>
    </g>
  );
}

function LibraryArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      <rect x="0" y="34" width="150" height="486" fill="#0d1117" opacity="0.2" />
      {[70, 110, 150, 190, 230].map((y, i) => (
        <rect key={i} x="28" y={y} width={i === 0 ? 92 : 58} height="13" rx="6.5" fill={sc(i === 0 ? 0.9 : 0.32)} />
      ))}
      <rect x="182" y="56" width="180" height="16" rx="8" fill={sc(0.8)} />
      {/* canvas area */}
      <rect x="182" y="84" width="434" height="392" rx="14" fill="#ffffff" opacity="0.13" />
      {/* component: button row */}
      <g>
        <rect x="210" y="112" width="110" height="38" rx="19" fill={c2} />
        <rect x="330" y="112" width="110" height="38" rx="19" fill="transparent" stroke={sc(0.8)} />
        <rect x="450" y="112" width="110" height="38" rx="19" fill="transparent" stroke={sc(0.35)} strokeDasharray="4 4" />
      </g>
      {/* component: input + toggle */}
      <rect x="210" y="172" width="250" height="40" rx="10" fill="#ffffff" opacity="0.15" />
      <rect x="224" y="186" width="120" height="12" rx="6" fill={sc(0.45)} />
      <rect x="520" y="172" width="60" height="30" rx="15" fill={c2} />
      <circle cx="554" cy="187" r="10" fill="#ffffff" opacity="0.95" />
      {/* component: card + switch */}
      <rect x="210" y="234" width="180" height="120" rx="12" fill="#ffffff" opacity="0.16" />
      <rect x="226" y="252" width="70" height="10" rx="5" fill={sc(0.55)} />
      <rect x="226" y="272" width="140" height="10" rx="5" fill={sc(0.35)} />
      <rect x="226" y="290" width="120" height="10" rx="5" fill={sc(0.35)} />
      <rect x="226" y="322" width="80" height="20" rx="10" fill={c2} />
      <rect x="410" y="234" width="180" height="120" rx="12" fill="#ffffff" opacity="0.16" />
      {/* badges */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={410 + i * 44} y="252" width="36" height="24" rx="12" fill={c2} opacity={0.4 + 0.2 * ((i * 2) % 3)} />
      ))}
      <rect x="410" y="300" width="150" height="30" rx="8" fill="#ffffff" opacity="0.12" />
      {/* colors */}
      {[210, 246, 282, 318, 354, 390].map((x, i) => (
        <circle key={i} cx={x} cy="430" r="16" fill={["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"][i]} opacity="0.9" />
      ))}
      <text x="636" y="470" fontFamily="Montserrat, sans-serif" fontSize="13" fontWeight="600" fill="#ffffff" opacity="0.6">
        {text}
      </text>
    </g>
  );
}

function CrmArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  const cols = [180, 380, 580];
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      <rect x="0" y="34" width="150" height="486" fill="#0d1117" opacity="0.2" />
      {[70, 110, 150, 190, 230].map((y, i) => (
        <rect key={i} x="28" y={y} width={i === 0 ? 90 : 60} height="13" rx="6.5" fill={sc(i === 0 ? 0.9 : 0.32)} />
      ))}
      <rect x="182" y="56" width="130" height="16" rx="8" fill={sc(0.8)} />
      {/* kanban columns */}
      {cols.map((cx, ci) => (
        <g key={ci}>
          <rect x={cx} y="86" width="180" height="390" rx="14" fill="#ffffff" opacity="0.11" />
          <rect x={cx + 16} y="104" width="70" height="12" rx="6" fill={sc(0.5)} />
          <circle cx={cx + 150} cy="110" r="11" fill={c2} opacity="0.9" />
          {[132, 236, 340].map((cy, i) => (
            <g key={i}>
              <rect x={cx + 14} y={cy} width="152" height="86" rx="12" fill="#ffffff" opacity="0.16" />
              <rect x={cx + 28} y={cy + 14} width="100" height="12" rx="6" fill={sc(0.7)} />
              <rect x={cx + 28} y={cy + 36} width="124" height="10" rx="5" fill={sc(0.35)} />
              <rect x={cx + 28} y={cy + 52} width="110" height="10" rx="5" fill={sc(0.35)} />
              <rect x={cx + 28} y={cy + 68} width="52" height="18" rx="9" fill={c2} opacity={0.5 + 0.25 * (i % 2)} />
            </g>
          ))}
        </g>
      ))}
      <text x="744" y="500" fontFamily="Montserrat, sans-serif" fontSize="13" fontWeight="600" fill="#ffffff" opacity="0.6" textAnchor="end">
        {text}
      </text>
    </g>
  );
}

function TravelArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      {/* nav */}
      <rect x="40" y="54" width="70" height="14" rx="7" fill={sc(0.9)} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={560 + i * 70} y="56" width="44" height="10" rx="5" fill={sc(0.5)} />
      ))}
      <rect x="150" y="46" width="90" height="26" rx="13" fill={c2} />
      {/* headline */}
      <text x="40" y="150" fontFamily="Montserrat, sans-serif" fontSize="46" fontWeight="800" fill="#ffffff">
        Explore the
      </text>
      <text x="40" y="208" fontFamily="Montserrat, sans-serif" fontSize="46" fontWeight="800" fill="#ffffff">
        edge of the world
      </text>
      <rect x="42" y="236" width="300" height="10" rx="5" fill={sc(0.45)} />
      <rect x="42" y="256" width="220" height="10" rx="5" fill={sc(0.45)} />
      <rect x="40" y="290" width="150" height="44" rx="22" fill="#ffffff" opacity="0.9" />
      <rect x="64" y="306" width="80" height="12" rx="6" fill={`url(#${g1})`} />
      {/* destination cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={40 + i * 250} y="380" width="220" height="110" rx="16" fill="#ffffff" opacity="0.16" />
          <circle cx={80 + i * 250} cy="416" r="24" fill={c2} opacity="0.85" />
          <rect x={116 + i * 250} y="402" width="90" height="11" rx="5.5" fill={sc(0.8)} />
          <rect x={116 + i * 250} y="420" width="120" height="9" rx="4.5" fill={sc(0.4)} />
          <rect x={40 + i * 250} y="444" width="60" height="20" rx="10" fill={c2} opacity="0.6" />
          <text
            x="744"
            y="500"
            fontFamily="Montserrat, sans-serif"
            fontSize="13"
            fontWeight="600"
            fill="#ffffff"
            opacity="0.6"
            textAnchor="end"
          >
            {text}
          </text>
        </g>
      ))}
    </g>
  );
}

function FinanceArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      <rect x="0" y="34" width="150" height="486" fill="#0d1117" opacity="0.2" />
      {[70, 110, 150, 190, 230].map((y, i) => (
        <rect key={i} x="28" y={y} width={i === 0 ? 90 : 60} height="13" rx="6.5" fill={sc(i === 0 ? 0.9 : 0.32)} />
      ))}
      {/* balance card */}
      <rect x="180" y="60" width="300" height="120" rx="16" fill="#ffffff" opacity="0.15" />
      <rect x="200" y="78" width="90" height="10" rx="5" fill={sc(0.5)} />
      <text x="200" y="128" fontFamily="Montserrat, sans-serif" fontSize="30" fontWeight="800" fill="#ffffff">
        $24,860
      </text>
      <rect x="200" y="146" width="70" height="16" rx="8" fill={c2} />
      {/* donut */}
      <rect x="508" y="60" width="252" height="120" rx="16" fill="#ffffff" opacity="0.15" />
      <circle cx="570" cy="120" r="40" fill="none" stroke={sc(0.2)} strokeWidth="16" />
      <circle cx="570" cy="120" r="40" fill="none" stroke={c2} strokeWidth="16" strokeDasharray="150 250" opacity="0.95" />
      <rect x="630" y="96" width="80" height="10" rx="5" fill={sc(0.5)} />
      <rect x="630" y="116" width="60" height="10" rx="5" fill={sc(0.35)} />
      <rect x="630" y="136" width="70" height="10" rx="5" fill={sc(0.35)} />
      {/* line chart */}
      <rect x="180" y="200" width="370" height="170" rx="14" fill="#ffffff" opacity="0.14" />
      <text x="200" y="228" fontFamily="Montserrat, sans-serif" fontSize="13" fontWeight="700" fill="#ffffff" opacity="0.75">
        Spending trend
      </text>
      <path
        d="M200 320 C 240 296, 260 318, 300 290 S 360 250, 390 268 S 460 222, 520 238"
        fill="none"
        stroke={c2}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="580" y="200" width="180" height="170" rx="14" fill="#ffffff" opacity="0.14" />
      {[224, 268, 312].map((y, i) => (
        <g key={i}>
          <rect x="598" y={y} width="130" height="12" rx="6" fill={sc(0.45)} />
          <rect x="598" y={y + 20} width="90" height="10" rx="5" fill={sc(0.3)} />
        </g>
      ))}
      {/* transactions */}
      {[396, 432, 468].map((y, i) => (
        <g key={i}>
          <rect x="180" y={y} width="580" height="24" rx="12" fill="#ffffff" opacity="0.1" />
          <rect x="200" y={y + 6} width="120" height="12" rx="6" fill={sc(0.4)} />
          <text x="740" y={y + 16} fontFamily="Montserrat, sans-serif" fontSize="12" fontWeight="600" fill="#ffffff" opacity="0.7" textAnchor="end">
            {["-$48.20", "+$1,200", "-$112"][i]}
          </text>
        </g>
      ))}
    </g>
  );
}

function SaasArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      <rect x="0" y="34" width="150" height="486" fill="#0d1117" opacity="0.2" />
      {[70, 110, 150, 190, 230].map((y, i) => (
        <rect key={i} x="28" y={y} width={i === 0 ? 90 : 60} height="13" rx="6.5" fill={sc(i === 0 ? 0.9 : 0.32)} />
      ))}
      <rect x="182" y="56" width="140" height="16" rx="8" fill={sc(0.8)} />
      {/* inline editable list */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="182" y={92 + i * 58} width="420" height="46" rx="12" fill="#ffffff" opacity="0.12" />
          <circle cx="214" cy={115 + i * 58} r="12" fill={c2} opacity="0.9" />
          <rect x="236" y={104 + i * 58} width="180" height="12" rx="6" fill={sc(0.6)} />
          <rect x="236" y={122 + i * 58} width="120" height="9" rx="4.5" fill={sc(0.35)} />
          <rect x="520" y={104 + i * 58} width="60" height="20" rx="10" fill={sc(0.3)} />
        </g>
      ))}
      {/* right summary */}
      <rect x="624" y="92" width="150" height="230" rx="14" fill="#ffffff" opacity="0.14" />
      <rect x="642" y="112" width="110" height="12" rx="6" fill={sc(0.5)} />
      <text x="642" y="168" fontFamily="Montserrat, sans-serif" fontSize="26" fontWeight="800" fill="#ffffff">
        84%
      </text>
      <rect x="642" y="184" width="90" height="10" rx="5" fill={sc(0.4)} />
      <rect x="642" y="210" width="80" height="8" rx="4" fill={sc(0.25)} />
      <rect x="642" y="250" width="116" height="34" rx="10" fill={c2} />
      <rect x="642" y="292" width="116" height="14" rx="7" fill={sc(0.35)} />
    </g>
  );
}

function MobileArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      <text
        x="400"
        y="60"
        fontFamily="Montserrat, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        opacity="0.85"
        textAnchor="middle"
      >
        {text}
      </text>
      {/* phone frame */}
      <rect x="600" y="80" width="170" height="340" rx="28" fill="#0d1117" opacity="0.9" />
      <rect x="608" y="88" width="154" height="324" rx="22" fill="#ffffff" opacity="0.16" />
      <rect x="664" y="96" width="42" height="6" rx="3" fill="#0d1117" opacity="0.6" />
      {/* phone content */}
      <circle cx="646" cy="150" r="18" fill={c2} />
      <rect x="672" y="142" width="74" height="10" rx="5" fill={sc(0.6)} />
      <rect x="672" y="158" width="52" height="9" rx="4.5" fill={sc(0.35)} />
      {[188, 236, 284, 332].map((y, i) => (
        <g key={i}>
          <rect x="626" y={y} width="118" height="38" rx="12" fill="#ffffff" opacity="0.14" />
          <rect x="638" y={y + 10} width="70" height="9" rx="4.5" fill={sc(0.5)} />
          <rect x="638" y={y + 23} width="46" height="8" rx="4" fill={sc(0.3)} />
        </g>
      ))}
      <rect x="626" y="382" width="118" height="18" rx="9" fill={c2} />
      {/* left floating design panel */}
      <rect x="70" y="96" width="240" height="300" rx="18" fill="#ffffff" opacity="0.14" />
      <rect x="94" y="120" width="190" height="70" rx="12" fill={c2} opacity="0.7" />
      <rect x="94" y="206" width="90" height="9" rx="4.5" fill={sc(0.6)} />
      <rect x="94" y="224" width="150" height="9" rx="4.5" fill={sc(0.4)} />
      <rect x="94" y="242" width="120" height="9" rx="4.5" fill={sc(0.4)} />
      <rect x="94" y="270" width="170" height="46" rx="10" fill="#ffffff" opacity="0.16" />
      <rect x="108" y="284" width="90" height="9" rx="4.5" fill={sc(0.5)} />
      <rect x="94" y="330" width="90" height="34" rx="17" fill={c2} />
      <text x="90" y="440" fontFamily="Montserrat, sans-serif" fontSize="13" fontWeight="600" fill="#ffffff" opacity="0.6">
        Mobile-first, 320px and up
      </text>
    </g>
  );
}

function LandingArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      <rect x="40" y="50" width="70" height="14" rx="7" fill={sc(0.9)} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={560 + i * 70} y="52" width="44" height="10" rx="5" fill={sc(0.5)} />
      ))}
      <rect x="150" y="42" width="90" height="28" rx="14" fill={c2} />
      <rect x="40" y="150" width="260" height="12" rx="6" fill={sc(0.55)} />
      <text x="40" y="230" fontFamily="Montserrat, sans-serif" fontSize="44" fontWeight="800" fill="#ffffff">
        Ship interfaces
      </text>
      <text x="40" y="286" fontFamily="Montserrat, sans-serif" fontSize="44" fontWeight="800" fill="#ffffff">
        at the speed of thought
      </text>
      <rect x="42" y="318" width="330" height="10" rx="5" fill={sc(0.4)} />
      <rect x="42" y="338" width="260" height="10" rx="5" fill={sc(0.4)} />
      <rect x="40" y="380" width="160" height="48" rx="24" fill="#ffffff" opacity="0.92" />
      <rect x="64" y="396" width="90" height="14" rx="7" fill={`url(#${g1})`} />
      <rect x="216" y="380" width="120" height="48" rx="24" fill="transparent" stroke={sc(0.8)} />
      <rect x="236" y="396" width="70" height="14" rx="7" fill={sc(0.9)} />
      {/* feature cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={40 + i * 200} y="460" width="180" height="70" rx="14" fill="#ffffff" opacity="0.13" />
          <circle cx={64 + i * 200} cy="484" r="12" fill={c2} opacity="0.9" />
          <rect x={84 + i * 200} y="478" width="90" height="10" rx="5" fill={sc(0.5)} />
          <rect x={84 + i * 200} y="494" width="120" height="9" rx="4.5" fill={sc(0.3)} />
        </g>
      ))}
    </g>
  );
}

function SystemArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  const swatches = ["#10b981", "#0ea5e9", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      <rect x="0" y="34" width="800" height="30" fill="#0d1117" opacity="0.2" />
      <rect x="40" y="84" width="130" height="12" rx="6" fill={sc(0.5)} />
      {/* color tokens */}
      {swatches.map((c, i) => (
        <g key={i}>
          <rect x={40 + i * 100} y="110" width="80" height="54" rx="12" fill={c} opacity="0.9" />
          <rect x={40 + i * 100} y="178" width="80" height="8" rx="4" fill={sc(0.45)} />
        </g>
      ))}
      <rect x="40" y="212" width="90" height="12" rx="6" fill={sc(0.5)} />
      {/* type scale */}
      <text x="40" y="258" fontFamily="Montserrat, sans-serif" fontSize="34" fontWeight="800" fill="#ffffff">
        Heading / 40
      </text>
      <text x="40" y="302" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="700" fill="#ffffff">
        Subheading / 28
      </text>
      <text x="40" y="336" fontFamily="Open Sans, sans-serif" fontSize="15" fill={sc(0.9)}>
        Body — comfortable reading at 16px and a 1.6 line height.
      </text>
      {/* component tokens */}
      <rect x="420" y="250" width="120" height="40" rx="20" fill={c2} />
      <rect x="556" y="250" width="120" height="40" rx="20" fill="transparent" stroke={sc(0.8)} />
      <rect x="420" y="308" width="100" height="40" rx="10" fill="#ffffff" opacity="0.15" />
      <rect x="536" y="308" width="100" height="40" rx="10" fill="#ffffff" opacity="0.15" />
      <rect x="420" y="366" width="160" height="34" rx="8" fill="#ffffff" opacity="0.12" />
      <rect x="600" y="366" width="120" height="34" rx="17" fill={c2} opacity="0.8" />
      {/* spacing scale */}
      <rect x="40" y="396" width="90" height="12" rx="6" fill={sc(0.5)} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={40} y={(422 + i * 14).toString()} width={20 + i * 8} height="8" rx="4" fill={c2} opacity={0.4 + i * 0.1} />
      ))}
    </g>
  );
}

function WireframeArt({ g1, c2, text }) {
  const sc = (o) => `rgba(148,163,184,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      {/* sketch nav */}
      <rect x="40" y="50" width="70" height="14" rx="4" fill="none" stroke={sc(0.8)} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={560 + i * 70} y="52" width="40" height="10" rx="3" fill="none" stroke={sc(0.5)} strokeWidth="2" />
      ))}
      <rect x="150" y="44" width="80" height="26" rx="8" fill="none" stroke={sc(0.7)} strokeWidth="2" />
      {/* headline blocks */}
      <rect x="40" y="130" width="360" height="16" rx="6" fill={sc(0.35)} />
      <rect x="40" y="160" width="300" height="16" rx="6" fill={sc(0.35)} />
      <rect x="40" y="200" width="420" height="10" rx="4" fill={sc(0.2)} />
      <rect x="40" y="220" width="340" height="10" rx="4" fill={sc(0.2)} />
      <rect x="40" y="264" width="140" height="44" rx="10" fill="none" stroke={sc(0.8)} strokeWidth="2" strokeDasharray="6 6" />
      {/* image placeholder */}
      <rect x="430" y="120" width="330" height="180" rx="12" fill="none" stroke={sc(0.6)} strokeWidth="2" strokeDasharray="8 8" />
      <circle cx="595" cy="200" r="18" fill="none" stroke={sc(0.5)} strokeWidth="2" />
      {/* content grid */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={40 + i * 200} y="330" width="180" height="90" rx="10" fill="none" stroke={sc(0.5)} strokeWidth="2" strokeDasharray="6 6" />
          <rect x={56 + i * 200} y="348" width="120" height="10" rx="4" fill={sc(0.35)} />
          <rect x={56 + i * 200} y="368" width="148" height="8" rx="3" fill={sc(0.2)} />
          <rect x={56 + i * 200} y="384" width="132" height="8" rx="3" fill={sc(0.2)} />
        </g>
      ))}
      {/* annotations */}
      <text x="40" y="480" fontFamily="Courier, monospace" fontSize="13" fill="#94a3b8" opacity="0.9">
        lo-fi → hi-fi
      </text>
      <text x="760" y="480" fontFamily="Courier, monospace" fontSize="13" fill="#94a3b8" opacity="0.9" textAnchor="end">
        {text}
      </text>
    </g>
  );
}

function AuthArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      <rect x="0" y="34" width="800" height="26" fill="#0d1117" opacity="0.18" />
      <rect x="0" y="60" width="150" height="460" fill="#0d1117" opacity="0.18" />
      {[84, 122, 160, 198, 236].map((y, i) => (
        <rect key={i} x="28" y={y} width={i === 0 ? 90 : 56} height="12" rx="6" fill={sc(i === 0 ? 0.8 : 0.3)} />
      ))}
      {/* auth card */}
      <rect x="360" y="90" width="360" height="380" rx="20" fill="#ffffff" opacity="0.15" />
      <circle cx="540" cy="146" r="26" fill={c2} />
      <rect x="470" y="190" width="140" height="14" rx="7" fill={sc(0.75)} />
      <rect x="470" y="214" width="100" height="10" rx="5" fill={sc(0.4)} />
      <rect x="392" y="252" width="296" height="44" rx="10" fill="#ffffff" opacity="0.14" />
      <rect x="408" y="266" width="110" height="12" rx="6" fill={sc(0.5)} />
      <rect x="392" y="308" width="296" height="44" rx="10" fill="#ffffff" opacity="0.14" />
      <rect x="408" y="322" width="110" height="12" rx="6" fill={sc(0.5)} />
      <rect x="392" y="372" width="296" height="46" rx="23" fill={c2} />
      <rect x="470" y="388" width="140" height="14" rx="7" fill={sc(0.9)} />
      <rect x="440" y="430" width="200" height="10" rx="5" fill={sc(0.35)} />
    </g>
  );
}

function RagArt({ g1, c2, text }) {
  const sc = (o) => `rgba(255,255,255,${o})`;
  return (
    <g>
      <rect x="0" y="0" width="800" height="520" rx="16" fill={`url(#${g1})`} />
      <rect x="0" y="34" width="168" height="486" fill="#0d1117" opacity="0.22" />
      {[72, 112, 152, 192, 232].map((y, i) => (
        <rect key={i} x="28" y={y} width={i === 0 ? 108 : 72} height="13" rx="6.5" fill={sc(i === 0 ? 0.9 : 0.32)} />
      ))}
      <rect x="196" y="56" width="220" height="16" rx="8" fill={sc(0.85)} />
      <rect x="620" y="50" width="140" height="26" rx="13" fill={c2} />
      {["POLICY", "PROCESS", "CONTACT"].map((label, i) => (
        <g key={label}>
          <rect x={196 + i * 118} y="92" width="108" height="26" rx="13" fill="#ffffff" opacity={i === 0 ? 0.28 : 0.12} />
          <text x={250 + i * 118} y="110" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="700" fill="#ffffff" opacity="0.85" textAnchor="middle">
            {label}
          </text>
        </g>
      ))}
      <rect x="196" y="138" width="340" height="64" rx="14" fill="#ffffff" opacity="0.14" />
      <rect x="214" y="154" width="220" height="10" rx="5" fill={sc(0.55)} />
      <rect x="214" y="174" width="160" height="10" rx="5" fill={sc(0.35)} />
      <rect x="556" y="138" width="204" height="64" rx="14" fill="#ffffff" opacity="0.14" />
      <text x="576" y="166" fontFamily="Montserrat, sans-serif" fontSize="11" fontWeight="700" fill="#ffffff" opacity="0.7">
        How I found this
      </text>
      <rect x="576" y="176" width="150" height="8" rx="4" fill={sc(0.3)} />
      <rect x="196" y="220" width="564" height="168" rx="16" fill="#ffffff" opacity="0.16" />
      <text x="220" y="252" fontFamily="Montserrat, sans-serif" fontSize="14" fontWeight="700" fill="#ffffff" opacity="0.9">
        Grounded policy answer
      </text>
      <rect x="220" y="270" width="500" height="10" rx="5" fill={sc(0.45)} />
      <rect x="220" y="290" width="460" height="10" rx="5" fill={sc(0.32)} />
      <rect x="220" y="310" width="420" height="10" rx="5" fill={sc(0.32)} />
      <rect x="220" y="340" width="90" height="22" rx="11" fill={c2} />
      <rect x="322" y="340" width="110" height="22" rx="11" fill="#ffffff" opacity="0.18" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={196 + i * 192} y="408" width="176" height="72" rx="14" fill="#ffffff" opacity="0.14" />
          <rect x={214 + i * 192} y="424" width="88" height="10" rx="5" fill={c2} opacity="0.85" />
          <rect x={214 + i * 192} y="444" width="132" height="8" rx="4" fill={sc(0.4)} />
          <rect x={214 + i * 192} y="460" width="108" height="8" rx="4" fill={sc(0.28)} />
        </g>
      ))}
      <text x="744" y="504" fontFamily="Montserrat, sans-serif" fontSize="13" fontWeight="600" fill="#ffffff" opacity="0.6" textAnchor="end">
        {text}
      </text>
    </g>
  );
}

const ART = {
  dashboard: DashboardArt,
  library: LibraryArt,
  crm: CrmArt,
  travel: TravelArt,
  finance: FinanceArt,
  saas: SaasArt,
  mobile: MobileArt,
  landing: LandingArt,
  system: SystemArt,
  wireframe: WireframeArt,
  auth: AuthArt,
  rag: RagArt,
};

/**
 * Renders a generated product preview.
 * @param {object} props
 * @param {string} props.variant one of the ART keys
 * @param {{from:string,to:string,accent:string,glow?:string}} props.palette
 * @param {string} props.text small caption drawn in the art
 * @param {string} props.id unique id for gradient defs
 */
export default function ProjectPreview({ variant = "dashboard", palette, text = "", id = "g" }) {
  const Art = ART[variant] ?? DashboardArt;
  const g1 = `grad-${id}`;
  const c2 = palette?.accent ?? "#0ea5e9";

  return (
    <svg
      viewBox="0 0 800 520"
      className="h-auto w-full"
      role="img"
      aria-label={text || variant}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={g1} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette?.from ?? "#2563eb"} />
          <stop offset="100%" stopColor={palette?.to ?? "#0ea5e9"} />
        </linearGradient>
      </defs>
      {windowChrome(g1)}
      <Art g1={g1} c2={c2} text={text} />
    </svg>
  );
}