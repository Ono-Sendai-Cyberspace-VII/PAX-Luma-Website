import Link from "next/link";
import { Globe, AtSign, Link2, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/archai", label: "Archai" },
    { href: "/poroi", label: "Poroi" },
    { href: "/kata", label: "Kata" },
    { href: "/waitlist", label: "Join Waitlist" },
  ],
  company: [
    { href: "/login", label: "Sign In" },
    { href: "#", label: "About NYO" },
    { href: "/careers", label: "Careers" },
    { href: "#", label: "Contact" },
  ],
};

const socialLinks = [
  { href: "#", icon: AtSign, label: "Twitter / X" },
  { href: "#", icon: Link2, label: "LinkedIn" },
  { href: "#", icon: Globe, label: "GitHub" },
  { href: "#", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-nyo-black border-t border-nyo-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <img
                src="/images/nyo-logo.svg"
                alt="NYO"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-nyo-gray-400 text-sm leading-relaxed max-w-md">
              An Ichinyo Corporation brand. Building PAX:Luma &mdash; embodied
              synthetic intelligence grounded in first principles.
            </p>
            <p className="mt-3 text-nyo-gray-600 text-xs font-mono tracking-wider">
              &#x5FC3;&#x8EAB;&#x4E00;&#x5982; &mdash; Mind and body as one
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg text-nyo-gray-600 hover:text-nyo-orange hover:bg-nyo-gray-800/50 transition-all duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-nyo-gray-200 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-nyo-gray-400 hover:text-nyo-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-nyo-gray-200 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-nyo-gray-400 hover:text-nyo-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-nyo-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-nyo-gray-600">
            &copy; {new Date().getFullYear()} Ichinyo Corporation. A Delaware
            Public Benefit Corporation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-nyo-gray-600 hover:text-nyo-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-nyo-gray-600 hover:text-nyo-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
