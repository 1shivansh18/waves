import React from "react";

const Waves = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Waves – The Study of Oscillations
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
            <p className="text-gray-300 text-lg font-sans">
              Waves are repeating disturbances that carry energy from one place
              to another without actually moving matter. For example, when you
              throw a stone into water, the ripples spread outwards, but the
              water itself doesn’t move with the ripple — only the disturbance
              moves. Waves can be of different types, such as mechanical waves
              (like sound and water waves, which need a medium) and
              electromagnetic waves (like light and radio waves, which can even
              travel in space). In simple words, waves are like messengers that
              transfer energy without carrying stuff along.
            </p>
            
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              Real-World Applications
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0f172a] p-4 rounded-lg">
                <h3 className="text-green-400 font-medium">Music</h3>
                <p className="text-gray-400 text-sm">
                  Understanding sound waves in instruments and speakers.
                </p>
              </div>

              <div className="bg-[#0f172a] p-4 rounded-lg">
                <h3 className="text-purple-400 font-medium">Engineering</h3>
                <p className="text-gray-400 text-sm">
                  Designing communication systems and sonar technology.
                </p>
              </div>

              <div className="bg-[#0f172a] p-4 rounded-lg">
                <h3 className="text-pink-400 font-medium">Medical</h3>
                <p className="text-gray-400 text-sm">
                  Ultrasound imaging using high-frequency sound waves.
                </p>
              </div>

              <div className="bg-[#0f172a] p-4 rounded-lg">
                <h3 className="text-yellow-400 font-medium">Oceanography</h3>
                <p className="text-gray-400 text-sm">
                  Studying water waves, tides, and tsunamis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              Types of Waves
            </h2>

            <div className="bg-[#0f172a] p-4 rounded-lg mb-3">
              <h3 className="font-medium text-white">Mechanical Waves</h3>
              <p className="text-gray-400 text-sm">
                Waves that require a medium to travel (sound, water).
              </p>
            </div>

            <div className="bg-[#0f172a] p-4 rounded-lg mb-3">
              <h3 className="font-medium text-white">Electromagnetic Waves</h3>
              <p className="text-gray-400 text-sm">
                Do not need a medium (light, radio, X-rays).
              </p>
            </div>

            <div className="bg-[#0f172a] p-4 rounded-lg">
              <h3 className="font-medium text-white">
                Transverse & Longitudinal
              </h3>
              <p className="text-gray-400 text-sm">
                Classification based on particle vibration direction.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md overflow-hidden">
            <svg
              role="img"
              aria-label="Animated wave visualization"
              className="w-full h-48"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <clipPath id="waveClip">
                  <rect x="0" y="0" width="1200" height="200" />
                </clipPath>
              </defs>

              <g
                clipPath="url(#waveClip)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g>
                  <path
                    stroke="url(#waveGradient)"
                    strokeWidth="4"
                    d="
                      M 0 120
                      Q 50 80, 100 120
                      T 200 120
                      T 300 120
                      T 400 120
                      T 500 120
                      T 600 120
                      T 700 120
                      T 800 120
                      T 900 120
                      T 1000 120
                      T 1100 120
                      T 1200 120
                    "
                  />
                  <path
                    stroke="url(#waveGradient)"
                    strokeWidth="4"
                    transform="translate(1200 0)"
                    d="
                      M 0 120
                      Q 50 80, 100 120
                      T 200 120
                      T 300 120
                      T 400 120
                      T 500 120
                      T 600 120
                      T 700 120
                      T 800 120
                      T 900 120
                      T 1000 120
                      T 1100 120
                      T 1200 120
                    "
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    from="0 0"
                    to="-1200 0"
                    dur="8s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waves;
