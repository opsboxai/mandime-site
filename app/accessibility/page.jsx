export const metadata = {
  title: 'Accessibility',
  description: 'Our commitment to making mandime.com usable by everyone, known limitations, and how to reach us.',
  alternates: { canonical: '/accessibility' },
}

const h2 = { fontSize: 22, fontWeight: 600, margin: '40px 0 12px', color: '#1a1a1a' }
const ul = { margin: '12px 0 20px 24px', lineHeight: 1.9 }

export default function Accessibility() {
  return (
    <div className="post-page">
      <a href="/" className="post-back">← Back</a>
      <h1>Accessibility Statement</h1>
      <p className="post-date">Last reviewed: October 4, 2026</p>

      <div className="post-body" style={{ marginTop: 40 }}>
        <p>
          Mandime should be easy to read and use for everyone, including people who use screen
          readers, keyboard navigation, magnification, captions, or other assistive technology. This
          page explains what we aim for, what we have done, where we still fall short, and how to tell
          us about a problem.
        </p>

        <h2 style={h2}>Our standard</h2>
        <p>
          We aim to meet the{' '}
          <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">
            Web Content Accessibility Guidelines (WCAG) 2.2<span className="sr-only"> (opens in a new tab)</span>
          </a>{' '}
          at Level AA. These guidelines explain how to make web content more accessible to people with
          a wide range of disabilities.
        </p>

        <h2 style={h2}>What we have done</h2>
        <ul style={ul}>
          <li>Text and links meet WCAG AA color-contrast ratios.</li>
          <li>Every page can be used with a keyboard alone, with a visible focus outline and a "Skip to content" link.</li>
          <li>Pages use real headings and labeled regions so screen-reader users can navigate by structure.</li>
          <li>Story images carry text descriptions written for each post.</li>
          <li>Links that open a new tab say so to screen readers, and links inside stories are underlined.</li>
          <li>Contact-form fields are labeled, errors are announced, and there is no puzzle or CAPTCHA to solve.</li>
          <li>Video never autoplays with sound, and the phone feed does not autoplay at all if your device is set to reduce motion.</li>
          <li>Pages work when zoomed to 200% and on small screens.</li>
        </ul>

        <h2 style={h2}>Known limitations</h2>
        <ul style={ul}>
          <li>
            <strong>Embedded videos.</strong> Videos come from their creators on YouTube. Captions
            and audio description depend on the creator; YouTube's automatic captions are available
            from the player's settings for most videos. Each video story also has a written summary.
          </li>
          <li>
            <strong>Image descriptions.</strong> Each story image gets a text description when the
            story is published. If one is missing or doesn't match the picture, let us know.
          </li>
          <li>
            <strong>Phone feed.</strong> On phones, the home page opens as a swipeable video feed that
            plays the current video muted. Use the grid button at the top of the screen to switch to a
            standard list, or turn on your device's reduce-motion setting to stop autoplay.
          </li>
          <li>
            <strong>Other websites.</strong> Stories link to the original creators' sites, which we do
            not control and which may not meet the same standard.
          </li>
        </ul>

        <h2 style={h2}>How we check</h2>
        <p>
          We review the Site ourselves using automated testing with axe-core and manual keyboard
          checks, and we fix problems as we find them. This statement was last reviewed on
          October 4, 2026.
        </p>

        <h2 style={h2}>Tell us about a problem</h2>
        <p>
          If something on the Site is hard to use, or you need a story in a different format, email{' '}
          <a href="mailto:info@mandime.com?subject=Accessibility">info@mandime.com</a> with the
          subject "Accessibility." Please include the page address and what went wrong. We aim to
          reply within 7 days and to fix the issue or provide the content another way.
        </p>
      </div>
    </div>
  )
}
