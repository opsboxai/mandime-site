export const metadata = {
  title: 'Terms of Service — Mandime',
  description: 'Terms of Service for mandime.com',
  alternates: { canonical: '/terms' },
}

const h2 = { fontSize: 22, fontWeight: 600, margin: '36px 0 12px', color: '#1a1a1a' }
const ul = { margin: '12px 0 20px 24px', lineHeight: 2 }

export default function Terms() {
  return (
    <div className="post-page">
      <a href="/" className="post-back">← Back</a>
      <h1>Terms of Service</h1>
      <p className="post-date">Last updated: July 15, 2026</p>

      <div className="post-body" style={{ marginTop: 40 }}>
        <p>
          Welcome to Mandime ("we," "us," "our"). By accessing or using our website at
          mandime.com (the "Site"), you agree to be bound by these Terms of Service
          ("Terms"). If you do not agree to these Terms, do not use the Site.
        </p>
        <p>
          <strong>
            PLEASE READ SECTION 10 (DISPUTE RESOLUTION; ARBITRATION; CLASS ACTION WAIVER)
            CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT
            IN COURT AND YOUR RIGHT TO A JURY TRIAL.
          </strong>
        </p>

        {/* ── 1. Use of the Site ── */}
        <h2 style={h2}>1. Use of the Site</h2>
        <p>
          You may use the Site for personal, non-commercial purposes only. You agree not to:
        </p>
        <ul style={ul}>
          <li>Reproduce, distribute, or exploit any Site content without our prior written consent</li>
          <li>Scrape, crawl, or use automated tools to extract content at scale</li>
          <li>Attempt to interfere with, disrupt, or gain unauthorized access to the Site or its infrastructure</li>
          <li>Use the Site in any manner that violates applicable law or these Terms</li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue the Site or any part of it at
          any time without notice. We will not be liable for any such modification, suspension,
          or discontinuation.
        </p>

        {/* ── 2. Content & Intellectual Property ── */}
        <h2 style={h2}>2. Content & Intellectual Property</h2>
        <p>
          All original content on the Site — including editorial commentary, site design,
          logos, and compilations — is owned by or licensed to Mandime and protected by
          copyright, trademark, and other applicable intellectual property laws.
          Third-party content featured on the Site (videos, articles, images sourced from
          social media and the web) is credited to its original creators and remains their
          property. Nothing in these Terms grants you a license to use Mandime's
          intellectual property except as expressly stated.
        </p>

        {/* ── 3. User-Generated Content ── */}
        <h2 style={h2}>3. User-Generated Content</h2>
        <p>
          If you submit any content to us — comments, messages, feedback, or suggestions —
          you grant Mandime a non-exclusive, worldwide, royalty-free, perpetual, irrevocable
          license to use, reproduce, modify, publish, and distribute that content in any
          media. You represent that you own or have the right to submit the content and that
          it does not infringe the rights of any third party.
        </p>

        {/* ── 4. Third-Party Links & Content ── */}
        <h2 style={h2}>4. Third-Party Links & Content</h2>
        <p>
          The Site links to and features third-party websites, videos, articles, and other
          content. We do not endorse, control, or assume responsibility for any third-party
          content, products, or services. Accessing third-party sites is at your own risk
          and subject to those sites' own terms and privacy policies. We are not responsible
          for the accuracy, legality, or appropriateness of any third-party content.
        </p>

        {/* ── 5. Privacy ── */}
        <h2 style={h2}>5. Privacy</h2>
        <p>
          Your use of the Site is also governed by our{' '}
          <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms by
          reference. By using the Site, you consent to the data practices described in our
          Privacy Policy.
        </p>

        {/* ── 6. Disclaimer of Warranties ── */}
        <h2 style={h2}>6. Disclaimer of Warranties</h2>
        <p>
          THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
          WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY
          LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY
          WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. WE DO NOT
          WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF
          VIRUSES OR OTHER HARMFUL COMPONENTS.
        </p>

        {/* ── 7. Limitation of Liability ── */}
        <h2 style={h2}>7. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, MANDIME AND ITS OWNERS,
          OPERATORS, AFFILIATES, AND CONTRIBUTORS SHALL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY
          LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR USE, ARISING OUT OF OR RELATED TO
          YOUR USE OF OR INABILITY TO USE THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE
          POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM
          ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SITE SHALL NOT
          EXCEED ONE HUNDRED DOLLARS ($100.00). SOME JURISDICTIONS DO NOT ALLOW THE
          EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES;
          IN THOSE JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT
          PERMITTED BY LAW.
        </p>

        {/* ── 8. Indemnification ── */}
        <h2 style={h2}>8. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Mandime and its owners,
          operators, affiliates, and contributors from and against any claims, liabilities,
          damages, losses, costs, and expenses (including reasonable attorneys' fees)
          arising out of or relating to your use of the Site, your violation of these
          Terms, or your violation of any rights of a third party.
        </p>

        {/* ── 9. Governing Law ── */}
        <h2 style={h2}>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of California, without regard
          to its conflict of law principles, except that the Federal Arbitration Act (9 U.S.C.
          § 1 et seq.) governs the interpretation and enforcement of Section 10 below.
        </p>

        {/* ── 10. Dispute Resolution ── */}
        <h2 style={h2}>10. Dispute Resolution; Binding Arbitration; Class Action Waiver</h2>

        <p>
          <strong>10.1 Informal Resolution.</strong> Before initiating any formal dispute
          proceeding, you agree to contact us at{' '}
          <a href="mailto:contact@mandime.com">contact@mandime.com</a> and give us 30 days
          to resolve the dispute informally. Most concerns can be resolved quickly this way.
          This informal dispute resolution period is a prerequisite to arbitration or any
          other legal proceeding.
        </p>

        <p>
          <strong>10.2 Binding Arbitration.</strong> If we cannot resolve a dispute
          informally within 30 days, <strong>you and Mandime agree to resolve any and all
          disputes, claims, or controversies arising out of or relating to these Terms or
          your use of the Site — including any claims arising under any statute, regulation,
          or common law theory, including the California Invasion of Privacy Act (Penal Code
          §§ 630 et seq.), the California Consumer Privacy Act, or any other privacy law —
          exclusively through final and binding individual arbitration, rather than in a
          court of law.</strong>
        </p>
        <p>
          Arbitration shall be administered by JAMS pursuant to its Streamlined Arbitration
          Rules and Procedures (for claims under $250,000) or its Comprehensive Arbitration
          Rules and Procedures (for claims $250,000 or more), available at{' '}
          <a href="https://www.jamsadr.com" target="_blank" rel="noopener noreferrer">jamsadr.com</a>.
          The arbitration shall be conducted by a single neutral arbitrator. If the claim
          amount is $10,000 or less, the arbitration may be conducted by documents only
          (without a hearing) at your election. Arbitration may be conducted in person, by
          telephone, by video conference, or by documents only, at a location convenient
          to you or as otherwise agreed.
        </p>
        <p>
          The arbitrator shall have the authority to award any relief available in court,
          including monetary damages, injunctive relief, and attorneys' fees where
          authorized by law. The arbitrator's award shall be final and binding and may
          be entered as a judgment in any court of competent jurisdiction.
        </p>
        <p>
          Filing fees and arbitration costs: If you initiate arbitration, you will pay
          the applicable JAMS filing fee. We will pay all other JAMS arbitration fees
          for claims that do not exceed $75,000. For claims exceeding $75,000, fee
          allocation is governed by the applicable JAMS rules.
        </p>

        <p>
          <strong>10.3 CLASS ACTION AND JURY TRIAL WAIVER.</strong>{' '}
          <strong>
            YOU AND MANDIME EACH WAIVE ANY RIGHT TO A JURY TRIAL. YOU AND MANDIME EACH
            WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION, CLASS ARBITRATION,
            REPRESENTATIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR ANY OTHER
            PROCEEDING IN WHICH EITHER PARTY ACTS OR PROPOSES TO ACT IN A REPRESENTATIVE
            CAPACITY. THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON'S CLAIMS
            AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS
            PROCEEDING.
          </strong>
        </p>

        <p>
          <strong>10.4 Exceptions.</strong> The following claims are not subject to
          arbitration: (a) claims within the jurisdiction of a small claims court (so
          long as the matter remains in small claims court and is pursued on an individual
          basis only); (b) claims for injunctive or equitable relief to prevent actual or
          threatened infringement, misappropriation, or violation of intellectual property
          rights; and (c) any claim that applicable law expressly excludes from
          arbitration.
        </p>

        <p>
          <strong>10.5 Opt-Out.</strong> You may opt out of the arbitration agreement in
          this Section 10 by sending written notice to{' '}
          <a href="mailto:contact@mandime.com">contact@mandime.com</a> with the subject
          line "Arbitration Opt-Out" <strong>within 30 days of first using the Site.</strong>{' '}
          Your opt-out notice must include your name, the email address you use to contact
          us, and a clear statement that you wish to opt out of arbitration. If you opt
          out, neither party may require the other to participate in arbitration, but all
          other provisions of these Terms remain in effect. Opting out will not affect
          your use of the Site.
        </p>

        <p>
          <strong>10.6 Severability.</strong> If the class action waiver in Section 10.3
          is found unenforceable with respect to any claim or request for relief, then
          that specific claim or request for relief shall be severed from the arbitration
          and may be litigated in court, but only after all arbitrable claims are resolved
          in arbitration. If any other portion of Section 10 is found unenforceable, that
          portion shall be severed and the remainder of Section 10 shall continue in
          full force and effect.
        </p>

        {/* ── 11. Changes to Terms ── */}
        <h2 style={h2}>11. Changes to These Terms</h2>
        <p>
          We may update these Terms at any time. When we make material changes, we will
          update the "Last updated" date at the top of this page. Your continued use of
          the Site after the effective date of any changes constitutes acceptance of the
          revised Terms. If you do not agree to the revised Terms, stop using the Site.
          Changes to the arbitration agreement in Section 10 will not apply to disputes
          for which you provided notice before the effective date of the change.
        </p>

        {/* ── 12. Miscellaneous ── */}
        <h2 style={h2}>12. Miscellaneous</h2>
        <p>
          These Terms, together with our Privacy Policy, constitute the entire agreement
          between you and Mandime with respect to your use of the Site and supersede all
          prior agreements. Our failure to enforce any right or provision of these Terms
          will not constitute a waiver of that right or provision. If any provision of
          these Terms is found invalid or unenforceable, the remaining provisions will
          continue in full force. These Terms are personal to you and may not be assigned
          or transferred without our written consent.
        </p>

        {/* ── 13. Contact ── */}
        <h2 style={h2}>13. Contact</h2>
        <p>
          Questions about these Terms? Contact us at{' '}
          <a href="mailto:contact@mandime.com">contact@mandime.com</a>.
        </p>
      </div>
    </div>
  )
}
