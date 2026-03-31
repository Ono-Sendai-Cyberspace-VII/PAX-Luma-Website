"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import Badge from "@/components/ui/Badge";
import SidebarTOC from "@/components/layout/SidebarTOC";
import { Scale } from "lucide-react";

const tocItems = [
  { id: "acceptance", title: "1. Acceptance of These Terms", level: 1 },
  { id: "eligibility", title: "2. Eligibility and Accounts", level: 1 },
  { id: "services", title: "3. The Services and Availability", level: 1 },
  { id: "acceptable-use", title: "4. Acceptable Use", level: 1 },
  { id: "inputs-outputs", title: "5. Inputs, Outputs, and Your Content", level: 1 },
  { id: "licenses", title: "6. Licenses You Grant", level: 1 },
  { id: "ip", title: "7. Intellectual Property", level: 1 },
  { id: "feedback", title: "8. Feedback", level: 1 },
  { id: "paid", title: "9. Paid Features", level: 1 },
  { id: "third-party", title: "10. Third-Party Services", level: 1 },
  { id: "disclaimers", title: "11. Disclaimers", level: 1 },
  { id: "liability", title: "12. Limitation of Liability", level: 1 },
  { id: "indemnity", title: "13. Indemnity", level: 1 },
  { id: "termination", title: "14. Suspension and Termination", level: 1 },
  { id: "governing-law", title: "15. Governing Law", level: 1 },
  { id: "changes", title: "16. Changes to the Terms", level: 1 },
  { id: "general", title: "17. General Terms", level: 1 },
  { id: "contact", title: "18. Contact Information", level: 1 },
];

export default function TermsContent() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 py-16 text-center">
        <ScrollReveal>
          <Badge variant="orange" className="mb-6">Legal</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-nyo-white mb-4">
            Terms of Service
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
            <section id="acceptance">
              <h2>1. Acceptance of These Terms</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of ichinyo.ai and any related websites, applications, accounts, waitlist functions, AI features, content, products, and services that link to these Terms (collectively, the &ldquo;Services&rdquo;). The Services are provided by Ichinyo Corporation, a Delaware public benefit corporation (&ldquo;Ichinyo,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using the Services, you agree to these Terms and our <a href="/privacy">Privacy Policy</a>.
              </p>
              <p>
                If you use the Services on behalf of a company, organization, or other entity, you represent and warrant that you are authorized to bind that entity, and &ldquo;you&rdquo; will include both you and that entity. If you do not agree to these Terms, do not use the Services.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="eligibility">
              <h2>2. Eligibility and Accounts</h2>
              <p>
                You must be at least 18 years old, or the age of digital majority in your jurisdiction, to use the Services unless a parent, guardian, or other legally authorized person validly consents where permitted by law. You may be required to create an account, join a waitlist, or provide registration details to access some features.
              </p>
              <p>
                You agree to provide accurate, current, and complete information, keep your credentials confidential, and promptly notify us of any unauthorized use of your account. You are responsible for activities that occur under your account unless prohibited by law.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="services">
              <h2>3. The Services and Availability</h2>
              <p>
                We may modify, improve, suspend, or discontinue all or part of the Services at any time. Some features may be offered on a preview, beta, research, or limited-availability basis and may change more frequently than general-availability features.
              </p>
              <p>
                We do not guarantee that the Services will always be available, uninterrupted, secure, accurate, or error-free. Planned or unplanned downtime, maintenance, and service changes may occur.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="acceptable-use">
              <h2>4. Acceptable Use</h2>
              <p>
                You may use the Services only in compliance with these Terms, our policies, and applicable law. You may not use the Services to engage in unlawful, harmful, fraudulent, deceptive, abusive, infringing, harassing, or rights-violating conduct.
              </p>
              <p>
                Without limiting the foregoing, you may not: attempt to reverse engineer or extract source code or model weights except as allowed by law; probe, scan, or test the vulnerability of our systems without authorization; circumvent safety features or access controls; upload malware; use the Services to generate or distribute content that violates law or others&apos; rights; misrepresent AI-generated output as solely human-generated in contexts where disclosure is legally required; or use the Services to develop competing foundation models or services where such use is prohibited by applicable product terms.
              </p>
              <p>
                We may investigate suspected violations and may suspend or terminate access, remove content, or take other action where reasonably necessary to protect the Services, users, or third parties.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="inputs-outputs">
              <h2>5. Inputs, Outputs, and Your Content</h2>
              <p>
                You may submit text, files, audio, images, instructions, prompts, and other materials to the Services (&ldquo;Inputs&rdquo;). Subject to your compliance with these Terms and applicable law, you retain whatever rights you have in your Inputs.
              </p>
              <p>
                The Services may generate responses, summaries, code, images, analyses, recommendations, transcriptions, or other materials (&ldquo;Outputs&rdquo;). As between you and Ichinyo, and to the extent permitted by law, we assign to you our rights, if any, in Outputs generated specifically for you from your Inputs. Outputs may not be unique, and similar or identical outputs may be generated for other users.
              </p>
              <p>
                You are responsible for reviewing Inputs and Outputs for accuracy, legality, safety, and appropriateness before using or sharing them. You must not rely on Outputs as a substitute for professional advice, high-stakes human judgment, or independent verification.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="licenses">
              <h2>6. Licenses You Grant to Ichinyo</h2>
              <p>
                To operate and improve the Services, you grant Ichinyo a worldwide, non-exclusive, royalty-free license to host, store, reproduce, modify, transmit, display, perform, and otherwise process Inputs, Outputs, feedback, and related content as necessary to provide, secure, maintain, analyze, and improve the Services and to comply with law.
              </p>
              <p>
                Where permitted by law and described in our Privacy Policy or product settings, this license also includes the right to use such materials for model training, evaluation, and safety tuning unless you opt out through any controls we make available or separate contractual terms provide otherwise.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="ip">
              <h2>7. Intellectual Property and Brand Rights</h2>
              <p>
                The Services, including our software, models, interfaces, site design, trademarks, logos, documentation, and other materials, are owned by Ichinyo or its licensors and are protected by intellectual property and other laws. Except for the limited rights expressly granted in these Terms, no rights are granted to you by implication, estoppel, or otherwise.
              </p>
              <p>
                You may not use Ichinyo&apos;s names, logos, or brand features without prior written permission, except for truthful, nominative references that comply with applicable law and any posted brand guidelines.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="feedback">
              <h2>8. Feedback</h2>
              <p>
                If you provide feedback, suggestions, ideas, or proposed improvements regarding the Services, you grant Ichinyo a worldwide, perpetual, irrevocable, royalty-free license to use and exploit that feedback for any lawful purpose without restriction or compensation to you.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="paid">
              <h2>9. Paid Features, Subscriptions, and Trials</h2>
              <p>
                Some Services may require payment, a subscription, or a separate order. If we offer paid plans, pricing, billing intervals, renewal terms, refund rules, and plan-specific limitations will be disclosed at the point of purchase or in separate commercial terms.
              </p>
              <p>
                Unless otherwise stated, subscriptions may renew automatically until canceled. You authorize us and our payment processors to charge the payment method you provide for applicable fees, taxes, and related charges. We may suspend or downgrade access for non-payment.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="third-party">
              <h2>10. Third-Party Services</h2>
              <p>
                The Services may interoperate with third-party platforms, authentication providers, hosting providers, data sources, app stores, or integrations. Ichinyo is not responsible for third-party products or services, and your use of them may be governed by separate terms and policies.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="disclaimers">
              <h2>11. Disclaimers</h2>
              <p className="uppercase text-xs tracking-wider leading-relaxed text-nyo-gray-400">
                The Services are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; except to the extent prohibited by law. Ichinyo and its affiliates, licensors, and service providers disclaim all warranties, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, quiet enjoyment, accuracy, or results from use.
              </p>
              <p>
                AI systems can produce inaccurate, incomplete, outdated, biased, or otherwise unexpected results. You are solely responsible for evaluating whether Outputs are appropriate for your use case.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="liability">
              <h2>12. Limitation of Liability</h2>
              <p className="uppercase text-xs tracking-wider leading-relaxed text-nyo-gray-400">
                To the maximum extent permitted by law, Ichinyo and its affiliates, officers, directors, employees, contractors, licensors, and service providers will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenues, goodwill, data, or business opportunity, even if advised of the possibility of such damages.
              </p>
              <p className="uppercase text-xs tracking-wider leading-relaxed text-nyo-gray-400">
                To the maximum extent permitted by law, the total liability of Ichinyo and the other released parties for all claims arising out of or relating to the Services or these Terms will not exceed the greater of (a) the amount you paid to Ichinyo for the relevant Services during the twelve months before the event giving rise to the claim or (b) one hundred U.S. dollars (US $100).
              </p>
              <p>
                Some jurisdictions do not allow certain disclaimers or limitations, so parts of this section may not apply to you.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="indemnity">
              <h2>13. Indemnity</h2>
              <p>
                To the extent permitted by law, you will defend, indemnify, and hold harmless Ichinyo and its affiliates, officers, directors, employees, contractors, licensors, and service providers from and against third-party claims, liabilities, damages, judgments, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of the Services, your Inputs, your Outputs when used by you, your violation of these Terms, or your violation of law or third-party rights.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="termination">
              <h2>14. Suspension and Termination</h2>
              <p>
                We may suspend, restrict, or terminate your access to some or all of the Services if we reasonably believe: you have violated these Terms or applicable policies; your use poses a security, legal, or abuse risk; we are required to do so by law; or continued provision of the Services is no longer commercially or technically feasible.
              </p>
              <p>
                You may stop using the Services at any time. Upon termination, provisions that by their nature should survive will survive, including sections addressing intellectual property, feedback, disclaimers, limitations of liability, indemnity, dispute resolution, and general terms.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="governing-law">
              <h2>15. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, without regard to conflict-of-laws principles, except to the extent consumer protection law in your jurisdiction requires otherwise.
              </p>
              <p>
                Before filing a claim, you and Ichinyo agree to try to resolve the dispute informally by sending written notice to the contact information in Section 18. If the dispute is not resolved within a reasonable period, either party may pursue formal remedies.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="changes">
              <h2>16. Changes to the Terms</h2>
              <p>
                We may update these Terms from time to time. If we make material changes, we will provide notice as required by law, such as by posting the revised Terms on the Services, updating the effective date, or sending an email or in-product notice. By continuing to use the Services after updated Terms take effect, you agree to the revised Terms.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="general">
              <h2>17. General Terms</h2>
              <p>
                These Terms constitute the entire agreement between you and Ichinyo regarding the Services, except for any separate product terms, order forms, or other written agreements that apply. If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.
              </p>
              <p>
                Our failure to enforce a provision is not a waiver of that provision. You may not assign these Terms without our prior written consent, and we may assign them in connection with a merger, acquisition, corporate reorganization, or sale of assets. These Terms do not create any third-party beneficiary rights except where expressly stated.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="contact">
              <h2>18. Contact Information</h2>
              <p>
                Questions about these Terms should be sent to{" "}
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
