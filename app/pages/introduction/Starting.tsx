const Starting = () => {
  return (
    <section className="min-h-screen bg-[#FCFBFA] text-[#241c17]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative min-h-[42vh] overflow-hidden bg-black lg:min-h-screen">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/video/intro-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
        </div>

        <div className="relative flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95)_0%,_rgba(248,244,238,1)_52%,_rgba(241,236,229,1)_100%)] px-6 py-16 sm:px-10 lg:px-14">
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/55 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-[#ffe5c7]/50 blur-3xl" />

          <div className="relative w-full max-w-md rounded-[2rem] bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.12)] sm:px-10 sm:py-12">
            <div className="mb-10 flex justify-center">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f7fb] text-[#159ec0] shadow-inner shadow-cyan-100/70">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M15.4 4.5c2.3 2.1 2.9 5.4 1.3 8.2-1.1 1.9-3.1 3.3-5.5 3.8l-1.8-1.9c-.5-.5-.7-1.2-.5-1.9.4-1.4 1.4-2.6 2.6-3.3 1.5-.8 2.5-2.2 2.9-4.1Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.9 19.3c-2.1-1.9-2.8-5.1-1.4-7.8 1-2 3-3.6 5.5-4.1l1.4 1.5c.6.7.8 1.6.5 2.4-.4 1.4-1.4 2.5-2.6 3.1-1.6.8-2.6 2.1-3.4 4.9Z"
                      fill="currentColor"
                      opacity="0.9"
                    />
                  </svg>
                </div>

                <div className="text-left leading-tight">
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
                    Etern
                  </div>
                  <div className="text-[0.7rem] uppercase tracking-[0.34em] text-slate-400">
                    Learning
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-balance text-[30px] font-semibold leading-tight text-[#f47d21] sm:text-[2rem]">
              A joyful learning adventure sparks curiosity and discovery.
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-500 sm:text-[0.95rem]">
              Discover playful lessons, calm progress, and a space that feels welcoming from the first tap.
            </p>

            <button
              type="button"
              className="group mx-auto mt-9 flex h-12 w-12 items-center justify-center rounded-full bg-[#19a9c8] text-white shadow-[0_10px_24px_rgba(25,169,200,0.35)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#19a9c8]/40 focus:ring-offset-4"
              aria-label="Continue"
            >
              <span className="text-lg transition-transform duration-200 group-hover:translate-x-0.5">
                -&gt;
              </span>
            </button>

            <p className="mt-6 text-xs text-slate-400">
              Already have an account?{' '}
              <span className="font-medium text-[#54b46f]">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Starting
