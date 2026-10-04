import OptOutButton from '@/app/components/OptOutButton'

export const metadata = {
  title: 'Privacy Policy',
  description: 'What mandime.com collects, why, who processes it, and the choices you have.',
  alternates: { canonical: '/privacy' },
}

const CONTACT = 'info@mandime.com'
const h2 = { fontSize: 22, fontWeight: 600, margin: '40px 0 12px', color: '#1a1a1a' }
const h3 = { fontSize: 16, fontWeight: 600, margin: '22px 0 8px', color: '#1a1a1a' }
const ul = { margin: '12px 0 20px 24px', lineHeight: 1.9 }

function Mail({ subject }) {
  const href = `mailto:${CONTACT}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
  return <a href={href}>{CONTACT}</a>
}

function Ext({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}<span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default function Privacy() {
  return (
    <div className="post-page">
      <a href="/" className="post-back">← Back</a>
      <h1>Privacy Policy</h1>
      <p className="post-date">Last updated: October 4, 2026</p>

      <div className="post-body" style={{ marginTop: 40 }}>
        <div className="legal-summary">
          <strong>The short version</strong>
          <ul>
            <li>No accounts, no ads, no tracking cookies, and we never sell your information.</li>
            <li>We count page views with cookieless analytics that cannot identify you.</li>
            <li>If you email us or use the contact form, we use what you send only to reply.</li>
            <li>Videos are embedded from YouTube in its privacy-enhanced mode.</li>
            <li>You can turn analytics off below, and we honor Global Privacy Control automatically.</li>
          </ul>
        </div>

        <p>
          Mandime ("we," "us," "our") operates mandime.com (the "Site"). This policy explains what
          information is collected when you use the Site, why, who processes it on our behalf, how
          long it is kept, and the rights and choices you have. Mandime is responsible for the
          information described here. You can reach us at <Mail subject="Privacy" />.
        </p>

        {/* ── 1 ── */}
        <h2 style={h2}>1. Information collected when you visit</h2>

        <h3 style={h3}>Delivering and protecting the Site</h3>
        <p>
          Like every website, the Site can only be delivered if your browser's request reaches our
          servers. Our hosting provider (Vercel) and our network and security provider (Cloudflare)
          therefore process technical request data: your IP address, browser and device type, the
          page you requested, the referring page, and the time of the request. They use it to serve
          pages, keep the Site fast, and block abuse such as attacks and spam. We do not keep our own
          copies of this data or use it to identify visitors.
        </p>

        <h3 style={h3}>Analytics</h3>
        <p>
          We use Vercel Web Analytics to understand which stories people read. It does not use
          cookies or similar storage, does not track you across other websites, and does not store
          your IP address. Each page view records the page address, the referring site, your
          approximate location (country, region, city), your device type, operating system and
          browser. To tell visits apart, Vercel uses a hash computed from the request that is
          discarded after 24 hours. We only see aggregated statistics. You can turn analytics off
          for your browser in <a href="#choices">Section 7</a>, and it is off automatically if your
          browser sends a Global Privacy Control signal.
        </p>

        <h3 style={h3}>Embedded YouTube videos</h3>
        <p>
          Video stories embed the creator's video from YouTube using its privacy-enhanced mode
          (youtube-nocookie.com), and preview images load from YouTube's image servers. When a page
          with a video loads, your browser connects to Google, which receives your IP address and
          browser information. Once a video plays, Google may store information on your device and
          collect viewing data under its own{' '}
          <Ext href="https://policies.google.com/privacy">privacy policy</Ext>. On phones, the
          home page's swipeable feed starts the current video muted; it does not autoplay if your
          device is set to reduce motion, and you can switch to the grid view at any time.
        </p>

        <h3 style={h3}>Settings stored in your browser</h3>
        <p>
          The Site sets no advertising, analytics, or tracking cookies. Our security provider may
          set a strictly necessary cookie to tell people from bots. If you turn analytics off, we
          save that choice in your browser's local storage under the name{' '}
          <code>mandime_analytics_optout</code>. It never leaves your device.
        </p>

        {/* ── 2 ── */}
        <h2 style={h2}>2. Information you send us</h2>
        <p>
          If you use the contact form or email us, we receive your name, email address, and whatever
          you write. The contact form is delivered to our inbox by FormSubmit, a form-forwarding
          service, and our email is hosted by Google Workspace. We use your message only to read and
          reply to it, and to handle the request you make (for example, a creator asking us to remove
          or re-credit a post). We do not add you to any mailing list.
        </p>

        {/* ── 3 ── */}
        <h2 style={h2}>3. Our social media accounts</h2>
        <p>
          We publish our stories on Instagram and other social platforms. Those platforms give us
          aggregate statistics about our own posts (views, likes, shares). If you follow, comment on,
          or message our accounts, the platform's own privacy policy governs that activity. We do not
          receive information that lets us link your social media activity to your visits to the
          Site.
        </p>

        {/* ── 4 ── */}
        <h2 style={h2}>4. How we use information, and what we never do</h2>
        <p>We use the information above to:</p>
        <ul style={ul}>
          <li>deliver, maintain, secure, and improve the Site;</li>
          <li>understand which stories and topics readers find useful;</li>
          <li>reply to messages and handle creator, copyright, and privacy requests; and</li>
          <li>comply with the law and protect our rights.</li>
        </ul>
        <p>
          We do not sell personal information, we do not "share" it for cross-context behavioral
          advertising (as California law defines those terms), we do not show ads, we do not build
          profiles of individual visitors, and we do not make automated decisions that have legal or
          similarly significant effects on anyone.
        </p>

        {/* ── 5 ── */}
        <h2 style={h2}>5. Who processes information for us</h2>
        <p>
          We rely on the providers below. Each processes information only to provide its service to
          us, except YouTube, which acts independently under Google's policy when you watch a video.
        </p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr><th scope="col">Provider</th><th scope="col">What it does for us</th><th scope="col">Policy</th></tr>
            </thead>
            <tbody>
              <tr><td>Vercel Inc. (USA)</td><td>Hosting and cookieless analytics</td><td><Ext href="https://vercel.com/legal/privacy-policy">vercel.com</Ext></td></tr>
              <tr><td>Cloudflare, Inc. (USA)</td><td>Domain name service, content delivery, and security</td><td><Ext href="https://www.cloudflare.com/privacypolicy/">cloudflare.com</Ext></td></tr>
              <tr><td>FormSubmit</td><td>Delivers contact-form messages to our inbox</td><td><Ext href="https://formsubmit.co/">formsubmit.co</Ext></td></tr>
              <tr><td>Google LLC (USA)</td><td>Email (Google Workspace); embedded YouTube videos</td><td><Ext href="https://policies.google.com/privacy">policies.google.com</Ext></td></tr>
            </tbody>
          </table>
        </div>
        <p>
          We may also disclose information if the law requires it, to protect the rights or safety of
          others, or to a successor if Mandime is ever sold or merged, in which case this policy will
          continue to apply to information collected under it.
        </p>

        {/* ── 6 ── */}
        <h2 style={h2}>6. How long information is kept</h2>
        <ul style={ul}>
          <li><strong>Analytics:</strong> only aggregated reports are kept, for up to 12 months on our plan. The visit hash is discarded after 24 hours.</li>
          <li><strong>Messages:</strong> kept as long as needed to deal with your request, and deleted within two years.</li>
          <li><strong>Request data at our providers:</strong> kept for the short periods described in their policies for security and troubleshooting.</li>
        </ul>

        {/* ── 7 ── */}
        <h2 style={h2} id="choices">7. Your privacy choices</h2>
        <span id="opt-out" />
        <p>
          <strong>Analytics.</strong> Use the control below to stop this browser from being counted.
          If your browser or an extension sends the{' '}
          <Ext href="https://globalprivacycontrol.org/">Global Privacy Control</Ext> signal, we treat
          it as an opt-out automatically, with no action needed.
        </p>
        <OptOutButton />
        <p>
          <strong>YouTube.</strong> You can avoid YouTube's data collection by not playing embedded
          videos, by blocking third-party content in your browser, or by following the link at the
          bottom of each story to watch on YouTube directly.
        </p>
        <p>
          <strong>Sale and sharing.</strong> Because we do not sell or share personal information,
          there is nothing to opt out of, but you are welcome to send us a request anyway.
        </p>

        {/* ── 8 ── */}
        <h2 style={h2}>8. Your rights</h2>

        <h3 style={h3}>United States residents</h3>
        <p>
          Depending on your state (including California, Colorado, Connecticut, Virginia, and others
          with privacy laws), you may have the right to know what personal information we have about
          you and to get a copy, to correct it, to delete it, and to opt out of its sale, sharing for
          targeted advertising, or profiling. We do not collect sensitive personal information, and we
          will never treat you differently for exercising your rights.
        </p>

        <h3 style={h3}>Visitors in the EEA, UK, and Switzerland</h3>
        <p>
          We process information on these legal bases: our legitimate interests in delivering,
          securing, and understanding the use of the Site (request data and cookieless analytics), and
          in answering you (messages you send). You have the right to access, correct, delete, or
          restrict our processing of your personal data, to object to it, to data portability, and to
          complain to your local data protection authority. Our providers are based in the United
          States; where data is transferred there, they rely on recognized safeguards such as the
          EU-U.S. Data Privacy Framework or the European Commission's Standard Contractual Clauses.
        </p>

        <h3 style={h3}>How to make a request</h3>
        <p>
          Email <Mail subject="Privacy Request" /> with the subject "Privacy Request" and tell us what
          you would like us to do. You do not need an account. Because we hold very little information
          that is linked to a person, we may ask for details that let us find what relates to you,
          such as the email address you wrote to us from. We respond within the time the law requires
          (generally 30 days in Europe and 45 days in the United States, extendable where permitted).
          You may use an authorized agent; we may ask for proof that the agent may act for you. If we
          decline a request, you can appeal by replying to our decision, and if we deny the appeal you
          may contact your state attorney general or data protection authority.
        </p>

        {/* ── 9 ── */}
        <h2 style={h2}>9. Security</h2>
        <p>
          The Site is served only over encrypted HTTPS connections, and we limit what we collect in
          the first place. No method of transmission or storage is perfectly secure, so we cannot
          guarantee absolute security.
        </p>

        {/* ── 10 ── */}
        <h2 style={h2}>10. Children</h2>
        <p>
          The Site is written for adults and is not directed to children under 13 (or under 16 where
          local law sets a higher age). We do not knowingly collect personal information from
          children. If you believe a child has sent us personal information, email{' '}
          <Mail subject="Child privacy" /> and we will delete it.
        </p>

        {/* ── 11 ── */}
        <h2 style={h2}>11. Changes to this policy</h2>
        <p>
          We will update this page when our practices change and revise the date at the top. If a
          change is significant, we will also say so at the top of this page for at least 30 days.
        </p>

        {/* ── 12 ── */}
        <h2 style={h2}>12. Contact</h2>
        <p>
          Questions or requests about privacy: <Mail subject="Privacy" />.
        </p>
      </div>
    </div>
  )
}
