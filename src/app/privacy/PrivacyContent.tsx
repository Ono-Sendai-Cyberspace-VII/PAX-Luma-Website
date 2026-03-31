"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import Badge from "@/components/ui/Badge";
import SidebarTOC from "@/components/layout/SidebarTOC";

const tocItems = [
  { id: "scope", title: "1. Scope", level: 1 },
  { id: "info-collect", title: "2. Information We Collect", level: 1 },
  { id: "how-use", title: "3. How We Use Information", level: 1 },
  { id: "ai-processing", title: "4. AI-Specific Processing", level: 1 },
  { id: "cookies", title: "5. Cookies", level: 1 },
  { id: "legal-bases", title: "6. Legal Bases", level: 1 },
  { id: "sharing", title: "7. When We Share Information", level: 1 },
  { id: "retention", title: "8. Data Retention", level: 1 },
  { id: "security", title: "9. Data Security", level: 1 },
  { id: "transfers", title: "10. International Transfers", level: 1 },
  { id: "rights", title: "11. Your Rights and Choices", level: 1 },
  { id: "children", title: "12. Children\u2019s Privacy", level: 1 },
  { id: "third-party", title: "13. Third-Party Services", level: 1 },
  { id: "changes", title: "14. Changes to This Policy", level: 1 },
  { id: "contact", title: "15. Contact Us", level: 1 },
];

export default function PrivacyContent() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 py-16 text-center">
        <ScrollReveal>
          <Badge variant="orange" className="mb-6">Legal</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-nyo-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-nyo-gray-400 max-w-2xl mx-auto">
            Effective date: March 30, 2026
          </p>
        </ScrollReveal>
      </header>

      <div className="max-w-7xl mx-auto px-6 flex gap-12">
        <SidebarTOC items={tocItems} />

        <article className="prose-nyo max-w-3xl flex-1">
          <ScrollReveal>
            <section id="scope">
              <h2>1. Scope and Who This Policy Covers</h2>
              <p>
                This Privacy Policy explains how Ichinyo Corporation and its affiliates, brands, and products that link to this Policy (collectively, &ldquo;Ichinyo,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collect, use, disclose, and otherwise process personal information in connection with ichinyo.ai, the PAX:Luma waitlist, any sign-in experiences, our content and blog pages, and related products, applications, services, and communications (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p>
                This Policy applies to personal information we collect from visitors, waitlist applicants, account holders, customers, business contacts, and individuals who communicate with us. If we introduce enterprise, developer, or white-label offerings, separate commercial terms, a data processing addendum, or supplemental privacy notices may also apply.
              </p>
              <p>
                Where required by applicable law, Ichinyo is the &ldquo;controller&rdquo; or &ldquo;business&rdquo; responsible for the personal information described in this Policy. For questions about this Policy, please use the contact information in Section 15.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="info-collect">
              <h2>2. Personal Information We Collect</h2>
              <h3>Information you provide directly</h3>
              <p>
                We may collect your name, email address, company, role, waitlist responses, account credentials, profile information, support messages, survey responses, and any information you choose to submit through forms, product features, chat, document ingestion, voice interactions, or direct communications with us.
              </p>
              <h3>Content and interaction data</h3>
              <p>
                If you use PAX:Luma or related features, we may collect prompts, instructions, uploaded files, notes, transcripts, generated outputs, feedback, preferences, and records of how you interact with the Services so we can provide, maintain, and improve them.
              </p>
              <h3>Technical and usage information</h3>
              <p>
                We may automatically collect device information, browser type, IP address, approximate location inferred from IP, language settings, referral URLs, pages viewed, session events, crash logs, diagnostics, cookies, and similar analytics data.
              </p>
              <h3>Information from other sources</h3>
              <p>
                We may receive information from analytics providers, authentication providers, hosting vendors, social media platforms, service providers, publicly available sources, and, where you authorize them, third-party integrations or connectors.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="how-use">
              <h2>3. How We Use Personal Information</h2>
              <p>
                We use personal information to provide and operate the Services, administer the waitlist and accounts, authenticate users, personalize experiences, respond to requests, send transactional and product-related communications, and provide customer support.
              </p>
              <p>
                We also use personal information to secure the Services; monitor performance; detect, investigate, and prevent fraud, abuse, safety incidents, and policy violations; comply with legal obligations; protect our rights and the rights of others; and enforce our terms and policies.
              </p>
              <p>
                Subject to applicable law and user controls, we may use personal information, prompts, uploads, feedback, and interaction data to debug, evaluate, train, tune, and improve our models, systems, and safety measures. Where we offer settings that allow you to opt out of certain improvement or training uses, we will honor those choices as described in-product or in supplemental notices.
              </p>
              <p>
                We may aggregate or de-identify information and use that information for research, analytics, safety testing, product development, benchmarking, and other lawful business purposes.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="ai-processing">
              <h2>4. AI-Specific Processing Practices</h2>
              <p>
                Because the Services are designed around AI assistance, some personal information may be processed by machine learning models and automated systems to generate responses, summaries, analyses, recommendations, and other outputs. Outputs may not always be accurate, complete, or suitable for every use case, and users should exercise judgment before relying on them.
              </p>
              <p>
                To improve quality, trust, and safety, authorized personnel and trusted service providers may review a limited subset of prompts, uploads, transcripts, and outputs, including where necessary for support, abuse prevention, legal compliance, incident response, or model evaluation.
              </p>
              <p>
                Please do not submit highly sensitive personal information unless the Service expressly requests it and you are comfortable with that use. If future features are intended for regulated or sensitive use cases, Ichinyo may provide additional disclosures, controls, or contractual terms before those features become available.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="cookies">
              <h2>5. Cookies and Similar Technologies</h2>
              <p>
                We and our service providers may use cookies, local storage, pixels, SDKs, log files, and similar technologies to remember preferences, keep users signed in, measure traffic, understand engagement, improve performance, and support security and marketing activities.
              </p>
              <p>
                You can usually control cookies through your browser settings and, where offered, through cookie preference tools on the Services. Disabling certain technologies may affect site functionality.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="legal-bases">
              <h2>6. Legal Bases for Processing</h2>
              <p>
                Where required under applicable law, we rely on one or more of the following legal bases: performance of a contract with you; our legitimate interests in operating, improving, and securing the Services; your consent; and compliance with legal obligations. If we rely on consent, you may withdraw it at any time, although this will not affect processing that occurred before withdrawal.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="sharing">
              <h2>7. When We Share Personal Information</h2>
              <p>
                We may share personal information with vendors and service providers that help us host infrastructure, store data, provide analytics, moderate content, send communications, process payments, authenticate users, provide customer support, and improve security and reliability.
              </p>
              <p>
                We may disclose personal information within the Ichinyo corporate family and to advisors, auditors, insurers, potential financing sources, or counterparties in connection with corporate transactions such as mergers, acquisitions, asset sales, restructurings, or financings.
              </p>
              <p>
                We may disclose information where required by law, subpoena, court order, or legal process; where we believe disclosure is necessary to detect or prevent harm, fraud, abuse, or security incidents; or to protect the rights, property, safety, or security of Ichinyo, our users, or others.
              </p>
              <p>
                If we make available social features, public posts, community spaces, or shared workspaces, information you choose to publish there may be visible to other users or the public. We will label those features accordingly.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="retention">
              <h2>8. Data Retention</h2>
              <p>
                We retain personal information for as long as reasonably necessary to provide the Services, maintain accounts, administer the waitlist, comply with legal obligations, resolve disputes, enforce agreements, and support legitimate business needs such as security, fraud prevention, and product improvement.
              </p>
              <p>
                Retention periods vary depending on the nature of the information, the sensitivity of the data, the purpose for which it was collected, user settings, and applicable legal requirements. We may retain de-identified or aggregated information for longer periods.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="security">
              <h2>9. Data Security</h2>
              <p>
                We use administrative, technical, and physical safeguards designed to protect personal information, including access controls, authentication measures, logging, encryption in transit where appropriate, vendor oversight, and security monitoring. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="transfers">
              <h2>10. International Data Transfers</h2>
              <p>
                Ichinyo may store and process personal information in the United States and other countries where we or our service providers operate. Those countries may have data protection laws that differ from those in your jurisdiction. Where required, we will use appropriate safeguards for cross-border transfers.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="rights">
              <h2>11. Your Rights and Choices</h2>
              <p>
                Depending on where you live, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information; obtain a portable copy of certain data; appeal a denial of your request; and opt out of targeted advertising, sales, or certain profiling activities if those laws apply.
              </p>
              <p>
                You may also have choices regarding marketing emails, cookies, training or improvement settings, and public-sharing controls. We will not discriminate against you for exercising privacy rights protected by law.
              </p>
              <p>
                To exercise rights, contact us using the details in Section 15. We may need to verify your identity before completing certain requests. You may also designate an authorized agent where permitted by law.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="children">
              <h2>12. Children&apos;s Privacy</h2>
              <p>
                The Services are not directed to children under 13, and we do not knowingly collect personal information from children under 13 without legally sufficient authorization. If local law sets a higher age threshold for digital consent, that threshold will apply in the relevant jurisdiction. If you believe a child has provided personal information to us in violation of this Policy, please contact us so we can investigate and take appropriate action.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="third-party">
              <h2>13. Third-Party Services and Links</h2>
              <p>
                The Services may link to third-party websites, products, documentation, repositories, payment providers, or authentication tools. This Policy does not apply to third-party practices, and we encourage you to review the privacy policies of those third parties before interacting with them.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="changes">
              <h2>14. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in the Services, legal requirements, or our practices. If we make material changes, we will provide notice as required by law, which may include posting an updated Policy on the Services, updating the effective date, or sending notice through the Service or by email.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="contact">
              <h2>15. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or would like to exercise your privacy rights, please contact Ichinyo at{" "}
                <a href="mailto:legal@ichinyo.ai" className="text-nyo-orange hover:text-nyo-orange-hover transition-colors">
                  legal@ichinyo.ai
                </a>
              </p>
            </section>
          </ScrollReveal>
        </article>
      </div>
    </div>
  );
}
