export const metadata = {
  title: 'About — Mandime',
  description: "Men's lifestyle — gear, tech, cars, gaming, health, style.",
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Mandime</h1>
      <div className="about-body">
        <p>
          Mandime is a men's lifestyle brand covering the gear, tech, cars, gaming,
          health, and style content that matters. We cut through the noise and surface
          the stuff worth your time.
        </p>
        <p>
          Want to work together?{' '}
          <a href="/contact">Get in touch</a>.
        </p>
      </div>
    </div>
  )
}
