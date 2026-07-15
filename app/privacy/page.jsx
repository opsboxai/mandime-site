import OptOutButton from '@/app/components/OptOutButton'

export const metadata = {
  title: 'Privacy Policy — Mandime',
  description: 'Privacy Policy for mandime.com',
  alternates: { canonical: '/privacy' },
}

const h2 = { fontSize: 22, fontWeight: 600, margin: '36px 0 12px', color: '#1a1a1a' }
const h3 = { fontSize: 16, fontWeight: 600, margin: '20px 0 8px', color: '#1a1a1a' }
const ul = { margin: '12px 0 20px 24px', lineHeight: 2 }

export default function Privacy() {
  return (
    <div className="post-page">
      <a href="/" className="post-back">← Back</a>
      <h1>Privacy Policy</h1>
      <p className="post-date">Last updated: July 15, 2026</p>

      <div className="post-body" style={{ marginTop: 40 }}>
        <p>
          Mandime ("we," "us," "our") operates mandime.com (the "Site"). This Privacy
          Policy explains what information we collect, how we use it, with whom we share
          it, and the choices you have — including your rights under the California
          Consumer Privacy Act (CCPA/CPRA) and the California Invasion of Privacy Act (CIPA).
        </p>

        {/* ── 1. Information We Collect ── */}
        <h2 style={h2}>1. Information We Collect</h2>

        <h3 style={h3}>1a. Information collected automatically</h3>
        <p>
          When you visit the Site, certain information is collected automatically by us
          and by the third-party services described in Section 5. This includes:
        </p>
        <ul style={ul}>
          <li>IP address (anonymized before storage — see Section 5)</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Referring URL and exit page</li>
          <li>Pages viewed and time spent on each page</li>
          <li>General geographic location (country/region, derived from IP)</li>
          <li>Session and engagement metrics</li>
        </ul>
        <p>
          This data is collected through cookies, web beacons, and analytics scripts. It
          is used in aggregate and anonymized form to understand how visitors use the Site.
          We do not build individual user profiles or combine this data with other sources
          to identify you personally.
        </p>

        <h3 style={h3}>1b. Information you provide voluntarily</h3>
        <p>
          If you contact us via email or a contact form, we collect the information you
          choose to share — typically your name and email address and the content of your
          message. We use this only to respond to your inquiry.
        </p>

        <h3 style={h3}>1c. Social media engagement data</h3>
        <p>
          When we publish content on Instagram, TikTok, YouTube, or X, those platforms
          provide us with aggregate engagement metrics (views, likes, shares). We do not
          receive individually identifiable information from those platforms about you.
        </p>

        {/* ── 2. How We Use Your Information ── */}
        <h2 style={h2}>2. How We Use Your Information</h2>
        <ul style={ul}>
          <li>To operate, maintain, and improve the Site</li>
          <li>To analyze which content resonates with our audience</li>
          <li>To make editorial and content curation decisions</li>
          <li>To detect and prevent fraud, abuse, or security issues</li>
          <li>To respond to inquiries you send us</li>
          <li>To comply with legal obligations</li>
        </ul>
        <p>
          We do not use your information for targeted advertising, behavioral profiling,
          or automated decision-making that produces legal or similarly significant effects.
        </p>

        {/* ── 3. Do Not Sell or Share ── */}
        <h2 style={h2}>3. We Do Not Sell or Share Your Personal Information</h2>
        <p>
          We do not sell your personal information to third parties for money. We also do
          not "share" your personal information for cross-context behavioral advertising
          purposes as defined under the CPRA. The analytics data described in Section 5
          is disclosed to service providers who are contractually prohibited from using it
          for their own advertising or commercial purposes.
        </p>
        <p>
          If you wish to opt out of analytics data collection on this device, you can do
          so in Section 10 below or by visiting{' '}
          <a href="/privacy#opt-out">mandime.com/privacy#opt-out</a>. We also honor the
          Global Privacy Control (GPC) browser signal — if your browser sends a GPC
          signal, analytics data collection is automatically disabled for your session
          without any further action required.
        </p>

        {/* ── 4. Information Sharing ── */}
        <h2 style={h2}>4. Information Sharing</h2>
        <p>
          We share information only in the following limited circumstances:
        </p>
        <ul style={ul}>
          <li>
            <strong>Service providers:</strong> We disclose data to the third-party
            analytics and infrastructure services described in Section 5, solely for the
            purpose of operating the Site. These providers are prohibited from using the
            data for their own advertising purposes.
          </li>
          <li>
            <strong>Legal compliance:</strong> We may disclose information if required
            by law, subpoena, court order, or government request, or if we believe
            disclosure is necessary to protect our rights or the safety of others.
          </li>
          <li>
            <strong>Business transfers:</strong> In the event of a merger, acquisition,
            or sale of all or substantially all of our assets, user data may be
            transferred as part of that transaction. We will notify you of any such
            change via a notice on the Site.
          </li>
          <li>
            <strong>Aggregated or de-identified data:</strong> We may publish or share
            aggregated, anonymized data that cannot reasonably be used to identify any
            individual.
          </li>
        </ul>
        <p>
          We do not sell, rent, lease, or trade your personal information to any
          third party for that party's own marketing or commercial purposes.
        </p>

        {/* ── 5. Third-Party Analytics & Tracking ── */}
        <h2 style={h2}>5. Third-Party Analytics Services</h2>
        <p>
          The Site currently uses the following third-party analytics services. Each
          fires on page load subject to your consent status (see Section 10):
        </p>

        <h3 style={h3}>Google Analytics 4 (Google LLC)</h3>
        <p>
          We use Google Analytics 4, operated by Google LLC, 1600 Amphitheatre Parkway,
          Mountain View, CA 94043. Google Analytics collects anonymized page-view data,
          session information, and general device/browser characteristics. We have enabled
          IP anonymization, which causes Google to truncate your IP address before storage.
          We have implemented Google Consent Mode v2 — if you have opted out or your
          browser sends a Global Privacy Control (GPC) signal, Google Analytics operates
          in a consent-denied state and does not set cookies or transmit identifiers.
        </p>
        <p>
          Google Analytics data is processed by Google subject to Google's Privacy Policy
          at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
          You can also opt out globally using the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>

        <h3 style={h3}>Cloudflare Web Analytics (Cloudflare, Inc.)</h3>
        <p>
          We use Cloudflare Web Analytics, operated by Cloudflare, Inc., 101 Townsend St,
          San Francisco, CA 94107. Cloudflare Web Analytics is a privacy-first analytics
          tool that does not use cookies, does not fingerprint visitors, and does not track
          users across websites or use data for advertising. It collects aggregate page-view
          and performance metrics. Cloudflare processes this data as our service provider
          and does not sell or share it. Cloudflare's Privacy Policy is available at{' '}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
            cloudflare.com/privacypolicy
          </a>.
        </p>

        {/* ── 6. Cookies ── */}
        <h2 style={h2}>6. Cookies</h2>
        <p>
          Google Analytics may set first-party cookies in your browser when analytics
          consent is granted (see Section 10). These cookies are used to distinguish
          sessions and are not used for advertising. Cloudflare Web Analytics does not
          set cookies. You can delete or block cookies at any time through your browser
          settings. Blocking analytics cookies does not affect your ability to use the Site.
        </p>

        {/* ── 7. Data Retention ── */}
        <h2 style={h2}>7. Data Retention</h2>
        <p>
          Google Analytics data is retained for 14 months per our GA4 configuration, after
          which it is automatically deleted. Cloudflare Web Analytics data is retained for
          90 days. Email correspondence is retained until no longer needed to address your
          inquiry, and in any event deleted within two years. Aggregated, anonymized data
          may be retained indefinitely.
        </p>

        {/* ── 8. Data Security ── */}
        <h2 style={h2}>8. Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to protect
          information against unauthorized access, loss, or disclosure. The Site is served
          over HTTPS. However, no transmission or storage method is completely secure, and
          we cannot guarantee absolute security.
        </p>

        {/* ── 9. California Privacy Rights (CCPA/CPRA) ── */}
        <h2 style={h2}>9. California Privacy Rights (CCPA / CPRA)</h2>
        <p>
          California residents have the following rights under the California Consumer
          Privacy Act, as amended by the California Privacy Rights Act:
        </p>
        <ul style={ul}>
          <li>
            <strong>Right to Know:</strong> You may request disclosure of the categories
            and specific pieces of personal information we have collected about you, the
            categories of sources, the business or commercial purposes for collection, and
            the categories of third parties with whom we share it.
          </li>
          <li>
            <strong>Right to Delete:</strong> You may request deletion of personal
            information we have collected, subject to certain exceptions (e.g., information
            needed to complete a transaction or comply with a legal obligation).
          </li>
          <li>
            <strong>Right to Correct:</strong> You may request correction of inaccurate
            personal information we maintain about you.
          </li>
          <li>
            <strong>Right to Opt Out of Sale / Sharing:</strong> You have the right to
            opt out of the sale of your personal information and the sharing of your
            personal information for cross-context behavioral advertising. We do not sell
            or share personal information for advertising purposes; however, you may opt
            out of analytics data collection using the tool in Section 10 below or by
            enabling the Global Privacy Control in your browser.
          </li>
          <li>
            <strong>Right to Non-Discrimination:</strong> We will not discriminate against
            you for exercising any of these rights. You will not receive a different level
            of service or be denied access to the Site for exercising your privacy rights.
          </li>
          <li>
            <strong>Right to Limit Use of Sensitive Personal Information:</strong> We do
            not collect sensitive personal information as defined under CPRA.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:contact@mandime.com">contact@mandime.com</a> with the subject
          line "California Privacy Request." We will verify your request and respond
          within 45 days, with one possible 45-day extension if reasonably necessary.
          We will not require you to create an account to submit a request.
        </p>
        <p>
          <strong>Global Privacy Control (GPC):</strong> If your browser or browser
          extension transmits a GPC signal (navigator.globalPrivacyControl = true), we
          automatically treat it as an opt-out of analytics data collection. No further
          action is required on your part.
        </p>
        <p>
          <strong>Authorized agents:</strong> You may designate an authorized agent to
          submit requests on your behalf. We may require written authorization and will
          verify the agent's identity before processing the request.
        </p>

        {/* ── 10. Opt-Out Tool ── */}
        <h2 style={h2} id="opt-out">10. Opt Out of Analytics on This Device</h2>
        <p>
          Use the button below to opt out of Google Analytics data collection on this
          browser and device. This preference is stored locally in your browser. It does
          not affect Cloudflare Web Analytics (which is cookieless and does not collect
          personal identifiers) and does not affect any other website. If you clear your
          browser data, you will need to opt out again.
        </p>
        <OptOutButton />

        {/* ── 11. Children's Privacy ── */}
        <h2 style={h2}>11. Children's Privacy</h2>
        <p>
          The Site is intended for general audiences and is not directed to children under
          13. We do not knowingly collect personal information from children under 13. If
          you believe we have inadvertently collected such information, contact us at{' '}
          <a href="mailto:contact@mandime.com">contact@mandime.com</a> and we will delete it
          promptly.
        </p>

        {/* ── 12. Changes ── */}
        <h2 style={h2}>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make material
          changes, we will update the "Last updated" date at the top of this page. We
          encourage you to review this page periodically. Your continued use of the Site
          after the effective date of any changes constitutes acceptance of the updated
          Policy.
        </p>

        {/* ── 13. Contact ── */}
        <h2 style={h2}>13. Contact</h2>
        <p>
          For privacy questions, requests, or concerns, contact us at:{' '}
          <a href="mailto:contact@mandime.com">contact@mandime.com</a>
        </p>
      </div>
    </div>
  )
}
