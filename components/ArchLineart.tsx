// Slow-drifting SVG architectural line art — arches, spires, tracery, railings.
// Purely decorative; aria-hidden across the board.

export default function ArchLineart({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Arched window tracery — top-left quadrant */}
      <svg
        className="absolute arch-drift"
        style={{ top: '6%', left: '4%', opacity: 0.07, animationDelay: '0s' }}
        width="320"
        height="480"
        viewBox="0 0 320 480"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        {/* Gothic arch */}
        <path d="M60 420 L60 220 Q60 100 160 80 Q260 100 260 220 L260 420" />
        <path d="M90 420 L90 240 Q90 140 160 120 Q230 140 230 240 L230 420" />
        {/* Tracery rosette */}
        <circle cx="160" cy="140" r="28" />
        <circle cx="160" cy="140" r="16" />
        <line x1="132" y1="140" x2="188" y2="140" />
        <line x1="160" y1="112" x2="160" y2="168" />
        {/* Mullions */}
        <line x1="160" y1="170" x2="160" y2="420" />
        <line x1="120" y1="290" x2="200" y2="290" />
        {/* Side lancets */}
        <path d="M60 290 Q60 240 90 230 Q120 240 120 290" />
        <path d="M200 290 Q200 240 230 230 Q260 240 260 290" />
      </svg>

      {/* Wrought-iron railing — right side */}
      <svg
        className="absolute arch-drift-slow"
        style={{ bottom: '8%', right: '5%', opacity: 0.06, animationDelay: '-14s' }}
        width="200"
        height="340"
        viewBox="0 0 200 340"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        {/* Top rail */}
        <line x1="0" y1="20" x2="200" y2="20" />
        {/* Bottom rail */}
        <line x1="0" y1="320" x2="200" y2="320" />
        {/* Vertical bars with spear tips */}
        {[20, 50, 80, 110, 140, 170].map((x) => (
          <g key={x}>
            <line x1={x} y1="20" x2={x} y2="320" />
            {/* Spear tip */}
            <path d={`M${x - 6} 28 L${x} 8 L${x + 6} 28`} />
          </g>
        ))}
        {/* Scrollwork */}
        <path d="M20 120 Q35 100 50 120 Q65 140 80 120" />
        <path d="M110 180 Q125 160 140 180 Q155 200 170 180" />
      </svg>

      {/* Spire / cathedral tower — top-right */}
      <svg
        className="absolute arch-drift"
        style={{ top: '0%', right: '12%', opacity: 0.055, animationDelay: '-8s' }}
        width="180"
        height="500"
        viewBox="0 0 180 500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        {/* Spire */}
        <path d="M90 10 L120 160 L60 160 Z" />
        <line x1="90" y1="10" x2="90" y2="160" />
        {/* Tower body */}
        <rect x="40" y="160" width="100" height="280" />
        {/* Tower windows — lancet arches */}
        <path d="M60 200 L60 240 Q60 200 75 190 Q90 200 90 240 L90 260 L60 260" />
        <path d="M90 200 L90 240 Q90 200 105 190 Q120 200 120 240 L120 260 L90 260" />
        {/* Battlements */}
        {[40, 60, 80, 100, 120].map((x) => (
          <rect key={x} x={x} y="148" width="12" height="14" />
        ))}
        {/* Clock face */}
        <circle cx="90" cy="330" r="28" />
        <line x1="90" y1="310" x2="90" y2="326" />
        <line x1="90" y1="330" x2="106" y2="330" />
      </svg>

      {/* Georgian fanlight / doorway — bottom-left */}
      <svg
        className="absolute arch-drift-slow"
        style={{ bottom: '15%', left: '8%', opacity: 0.065, animationDelay: '-22s' }}
        width="260"
        height="200"
        viewBox="0 0 260 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        {/* Door frame */}
        <rect x="60" y="80" width="140" height="120" />
        {/* Fanlight semicircle */}
        <path d="M60 80 Q60 20 130 20 Q200 20 200 80" />
        {/* Fan radiants */}
        {[0, 30, 60, 90, 120, 150, 180].map((deg) => {
          const rad = (deg * Math.PI) / 180
          const cx = 130, cy = 80, r = 58
          const x2 = cx + r * Math.cos(Math.PI - rad)
          const y2 = cy - r * Math.sin(Math.PI - rad)
          return <line key={deg} x1={cx} y1={cy} x2={x2} y2={y2} />
        })}
        {/* Fanlight ring */}
        <path d="M75 80 Q75 34 130 34 Q185 34 185 80" />
        {/* Side pilasters */}
        <line x1="48" y1="80" x2="48" y2="200" />
        <line x1="212" y1="80" x2="212" y2="200" />
      </svg>

      {/* Oxford spire cluster — centre-right, very faint */}
      <svg
        className="absolute arch-drift"
        style={{ top: '20%', right: '2%', opacity: 0.04, animationDelay: '-5s' }}
        width="240"
        height="380"
        viewBox="0 0 240 380"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      >
        {/* Three spires at varying heights */}
        <path d="M60 10 L80 120 L40 120 Z" />
        <path d="M120 30 L145 150 L95 150 Z" />
        <path d="M185 20 L205 130 L165 130 Z" />
        {/* Connecting building ledge */}
        <line x1="0" y1="150" x2="240" y2="150" />
        {/* Building block */}
        <rect x="0" y="150" width="240" height="230" />
        {/* Repeating arched windows */}
        {[20, 70, 120, 170].map((x) => (
          <path key={x} d={`M${x} 200 L${x} 260 Q${x} 230 ${x + 25} 220 Q${x + 50} 230 ${x + 50} 260 L${x + 50} 200`} />
        ))}
      </svg>
    </div>
  )
}
