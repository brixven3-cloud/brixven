'use client'

export default function VoiceRobot() {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[460px] xl:max-w-[480px] mx-auto lg:mx-0">
      <div className="relative w-full aspect-square flex items-center justify-center">

        {/* Decorative concentric rings */}
        <div className="absolute rounded-full pointer-events-none" style={{ width: '37.5%', height: '37.5%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', border: '1px solid rgba(255,255,255,0.10)' }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: '53.3%', height: '53.3%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', border: '1px solid rgba(255,255,255,0.07)' }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: '70%',   height: '70%',   top: '50%', left: '50%', transform: 'translate(-50%,-50%)', border: '1px solid rgba(255,255,255,0.04)' }} />

        {/* Robot */}
        <div className="robot-wrap" aria-hidden="true">
          <style>{`
            .robot-wrap {
              position: relative;
              width: 140px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0;
            }

            /* ── Antenna ── */
            .robot-antenna {
              width: 3px;
              height: 18px;
              background: linear-gradient(to top, #a4a4a4, #ffffff);
              border-radius: 2px;
              margin-bottom: -1px;
              position: relative;
            }
            .robot-antenna::after {
              content: '';
              position: absolute;
              top: -5px;
              left: 50%;
              transform: translateX(-50%);
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: #ffffff;
              box-shadow: 0 0 6px 2px rgba(255,255,255,0.6);
              animation: antennaBlink 2s ease-in-out infinite;
            }
            @keyframes antennaBlink {
              0%,100% { opacity: 1; box-shadow: 0 0 6px 2px rgba(255,255,255,0.6); }
              50%      { opacity: 0.3; box-shadow: 0 0 2px 1px rgba(255,255,255,0.2); }
            }

            /* ── Head ── */
            .robot-head {
              width: 72px;
              height: 58px;
              background: linear-gradient(160deg, #ffffff 0%, #b0b0b0 60%, #787878 100%);
              border-radius: 12px;
              position: relative;
              box-shadow: inset -3px -4px 8px rgba(0,0,0,0.4), 0 2px 8px rgba(255,255,255,0.08);
              animation: headBob 4s ease-in-out infinite;
            }
            @keyframes headBob {
              0%,100% { transform: translateY(0); }
              50%      { transform: translateY(-3px); }
            }

            /* Visor */
            .robot-visor {
              position: absolute;
              top: 12px;
              left: 10px;
              right: 10px;
              height: 26px;
              background: #0a0a0a;
              border-radius: 6px;
              border: 1px solid rgba(255,255,255,0.15);
              display: flex;
              align-items: center;
              justify-content: space-around;
              padding: 0 10px;
              overflow: hidden;
            }
            .robot-visor::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%);
              border-radius: inherit;
            }

            /* Eyes */
            .robot-eye {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #ffffff;
              box-shadow: 0 0 6px 2px rgba(255,255,255,0.8);
              animation: eyeBlink 3.5s ease-in-out infinite;
            }
            .robot-eye:nth-child(2) { animation-delay: 0.1s; }
            @keyframes eyeBlink {
              0%,90%,100% { transform: scaleY(1); }
              94%          { transform: scaleY(0.08); }
            }

            /* Mouth grille */
            .robot-mouth {
              position: absolute;
              bottom: 8px;
              left: 14px;
              right: 14px;
              height: 6px;
              display: flex;
              gap: 3px;
              align-items: center;
            }
            .robot-mouth span {
              flex: 1;
              height: 2px;
              background: rgba(255,255,255,0.3);
              border-radius: 1px;
            }

            /* ── Neck ── */
            .robot-neck {
              width: 22px;
              height: 8px;
              background: linear-gradient(to bottom, #888, #555);
              border-radius: 2px;
            }

            /* ── Torso ── */
            .robot-torso {
              width: 88px;
              height: 72px;
              background: linear-gradient(160deg, #d8d8d8 0%, #909090 55%, #606060 100%);
              border-radius: 10px;
              position: relative;
              box-shadow: inset -4px -6px 10px rgba(0,0,0,0.45), 0 2px 10px rgba(255,255,255,0.06);
              display: flex;
              align-items: center;
              justify-content: center;
            }

            /* Chest core */
            .robot-core {
              width: 28px;
              height: 28px;
              border-radius: 50%;
              border: 2px solid rgba(255,255,255,0.5);
              background: radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.04) 70%);
              box-shadow: 0 0 12px 4px rgba(255,255,255,0.15);
              animation: corePulse 2.8s ease-in-out infinite;
            }
            @keyframes corePulse {
              0%,100% { box-shadow: 0 0 12px 4px rgba(255,255,255,0.15); opacity: 1; }
              50%      { box-shadow: 0 0 22px 8px rgba(255,255,255,0.35); opacity: 0.8; }
            }

            /* Torso side panel lines */
            .robot-torso::before,
            .robot-torso::after {
              content: '';
              position: absolute;
              top: 16px;
              width: 8px;
              height: 32px;
              border-radius: 3px;
              background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
            }
            .robot-torso::before { left: 10px; }
            .robot-torso::after  { right: 10px; }

            /* ── Hips ── */
            .robot-hips {
              width: 76px;
              height: 16px;
              background: linear-gradient(to bottom, #888, #555);
              border-radius: 4px;
              margin-top: -2px;
            }

            /* ── Arms wrapper ── */
            .robot-arms {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              pointer-events: none;
            }

            /* Right arm (resting down) */
            .robot-arm-right {
              position: absolute;
              top: 4px;
              right: -22px;
              width: 18px;
              height: 60px;
              background: linear-gradient(to bottom, #c0c0c0, #808080);
              border-radius: 8px;
              box-shadow: inset -2px -3px 6px rgba(0,0,0,0.4);
            }
            .robot-arm-right::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 50%;
              transform: translateX(-50%);
              width: 16px;
              height: 12px;
              background: linear-gradient(to bottom, #909090, #606060);
              border-radius: 4px;
            }

            /* Left arm — raises phone to ear */
            .robot-arm-left {
              position: absolute;
              top: 4px;
              left: -22px;
              width: 18px;
              height: 60px;
              background: linear-gradient(to bottom, #c0c0c0, #808080);
              border-radius: 8px;
              box-shadow: inset 2px -3px 6px rgba(0,0,0,0.4);
              transform-origin: top center;
              animation: armRaise 4s ease-in-out infinite;
            }
            @keyframes armRaise {
              0%,20%  { transform: rotate(0deg); }
              40%,80% { transform: rotate(-75deg); }
              100%    { transform: rotate(0deg); }
            }

            /* Forearm (bends at elbow as arm raises) */
            .robot-forearm {
              position: absolute;
              bottom: -2px;
              left: 50%;
              transform-origin: top center;
              transform: translateX(-50%) rotate(0deg);
              width: 16px;
              height: 44px;
              background: linear-gradient(to bottom, #a0a0a0, #686868);
              border-radius: 6px;
              animation: forearmBend 4s ease-in-out infinite;
            }
            @keyframes forearmBend {
              0%,20%  { transform: translateX(-50%) rotate(0deg); }
              40%,80% { transform: translateX(-50%) rotate(80deg); }
              100%    { transform: translateX(-50%) rotate(0deg); }
            }

            /* Phone held in hand */
            .robot-phone {
              position: absolute;
              bottom: -30px;
              left: 50%;
              transform: translateX(-50%);
              width: 22px;
              height: 36px;
              background: #1a1a1a;
              border-radius: 4px;
              border: 1px solid rgba(255,255,255,0.2);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 0 8px rgba(255,59,48,0.4);
            }

            /* Sound waves at ear */
            .robot-waves {
              position: absolute;
              top: 10px;
              left: -28px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              opacity: 0;
              animation: wavesFade 4s ease-in-out infinite;
            }
            @keyframes wavesFade {
              0%,30%  { opacity: 0; }
              50%,75% { opacity: 1; }
              90%,100%{ opacity: 0; }
            }
            .robot-waves span {
              display: block;
              height: 2px;
              background: rgba(255,255,255,0.5);
              border-radius: 1px;
              animation: wavePing 0.7s ease-in-out infinite alternate;
            }
            .robot-waves span:nth-child(1) { width: 10px; animation-delay: 0s; }
            .robot-waves span:nth-child(2) { width: 16px; animation-delay: 0.12s; }
            .robot-waves span:nth-child(3) { width: 22px; animation-delay: 0.24s; }
            @keyframes wavePing {
              from { opacity: 0.3; transform: scaleX(0.7); }
              to   { opacity: 1;   transform: scaleX(1); }
            }

            /* ── Legs ── */
            .robot-legs {
              display: flex;
              gap: 10px;
              margin-top: -1px;
            }
            .robot-leg {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0;
            }
            .robot-thigh {
              width: 22px;
              height: 36px;
              background: linear-gradient(to bottom, #a0a0a0, #707070);
              border-radius: 6px 6px 3px 3px;
              box-shadow: inset -2px -3px 6px rgba(0,0,0,0.35);
            }
            .robot-knee {
              width: 24px;
              height: 10px;
              background: linear-gradient(to bottom, #888, #555);
              border-radius: 3px;
            }
            .robot-shin {
              width: 18px;
              height: 30px;
              background: linear-gradient(to bottom, #909090, #606060);
              border-radius: 3px 3px 5px 5px;
              box-shadow: inset -2px -3px 5px rgba(0,0,0,0.3);
            }
            .robot-foot {
              width: 28px;
              height: 10px;
              background: linear-gradient(to right, #707070, #404040);
              border-radius: 3px 6px 6px 3px;
              margin-top: -1px;
            }

            /* Scale down gracefully at small sizes */
            @media (max-width: 380px) {
              .robot-wrap { width: 100px; }
              .robot-head { width: 52px; height: 42px; }
              .robot-torso { width: 64px; height: 52px; }
              .robot-hips { width: 56px; }
              .robot-thigh { height: 26px; }
              .robot-shin { height: 22px; }
              .robot-waves { display: none; }
            }
          `}</style>

          {/* Antenna */}
          <div className="robot-antenna" />

          {/* Head */}
          <div className="robot-head">
            <div className="robot-visor">
              <div className="robot-eye" />
              <div className="robot-eye" />
            </div>
            <div className="robot-mouth">
              <span /><span /><span /><span />
            </div>
          </div>

          {/* Neck */}
          <div className="robot-neck" />

          {/* Torso + arms */}
          <div style={{ position: 'relative' }}>
            <div className="robot-torso">
              <div className="robot-core" />

              <div className="robot-arms">
                {/* Right arm */}
                <div className="robot-arm-right" />

                {/* Left arm with forearm + phone + sound waves */}
                <div className="robot-arm-left">
                  <div className="robot-forearm">
                    {/* Phone */}
                    <div className="robot-phone">
                      {/* Red phone icon */}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff3b30">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                      </svg>
                    </div>

                    {/* Sound waves */}
                    <div className="robot-waves">
                      <span /><span /><span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hips */}
          <div className="robot-hips" />

          {/* Legs */}
          <div className="robot-legs">
            {[0, 1].map((i) => (
              <div className="robot-leg" key={i}>
                <div className="robot-thigh" />
                <div className="robot-knee" />
                <div className="robot-shin" />
                <div className="robot-foot" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
