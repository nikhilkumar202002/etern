import Image from 'next/image'

const Page = () => {
  return (
    <section
      className="app-container"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #FF941F, #FFA13F)',
      }}
    >
      <header>
        <div className="py-4">
          <Image
            src="/etern-white-logo.png"
            alt="Etern White Logo"
            width={180}
            height={60}
            priority
          />
        </div>
      </header>

      <div className="content-header">
        <div className="content-main-heading">        
          <h2 className="content-heading">Choose your profile</h2>
        </div>
        <div className="content-sub-heading">
          <p className="content-sub-heading-text">
            Pick a profile to continue your learning adventure!
          </p>
        </div>
      </div>

      <div className="cloud-overlap-section">
        <div className="cloud-overlay">
          <Image
            src="/patterns/create-profile-wave.svg"
            alt="Cloud Overlay"
            width={1600}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

export default Page
