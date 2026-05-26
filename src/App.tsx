import { MapPin } from 'iconoir-react'
import './App.css'

const heroImages = [
  {
    src: 'https://mdxzhyjfvgidxkqvahsa.supabase.co/storage/v1/object/public/brands/homepage-img-1.png',
    alt: 'Sabie Studio preview image showing a green lounge interior',
    className: 'image-slot image-slot--large',
  },
  {
    src: 'https://mdxzhyjfvgidxkqvahsa.supabase.co/storage/v1/object/public/brands/homepage-img-2.png',
    alt: 'Sabie Studio preview image showing a styled tabletop with a phone',
    className: 'image-slot image-slot--small',
  },
]

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <img
          className="brand-logo"
          src="https://mdxzhyjfvgidxkqvahsa.supabase.co/storage/v1/object/public/brands/sabie-logo-home.png"
          alt="Sabie Studio"
        />
        <a className="contact-link" href="mailto:jen@sabie.studio">
          Contact
        </a>
      </header>

      <section className="hero" aria-label="Sabie Studio">
        <div className="hero-middle">
          <div className="hero-copy">
            <h1>
              Designing digital experiences for the world&apos;s most beautiful spaces.
            </h1>
            <p className="intro">
              We partner with interior designers, architects, hospitality brands,
              and builders to create elevated websites, content, and digital
              experiences that reflect the quality of their work.
            </p>
          </div>
        </div>

        <div className="image-grid" aria-label="Sabie Studio preview images">
          {heroImages.map((image) => (
            <figure key={image.src} className={image.className}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="locations" aria-label="Studio locations">
          <div className="location">
            <MapPin />
            <span>Cornwall, UK</span>
          </div>
          <div className="location">
            <MapPin />
            <span>Florida, USA</span>
          </div>
        </div>

        <p className="copyright">
          © 2026 Sabie Studio. All rights reserved.
        </p>
      </footer>
    </main>
  )
}

export default App
