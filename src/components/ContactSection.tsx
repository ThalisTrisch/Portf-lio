import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin, Copy, Check, ArrowUpRight, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contatos" className="py-20 px-4 sm:px-6 relative bg-neutral-50/70 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 pb-5 border-b border-neutral-200">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Canais de Comunicação</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Contatos & Conexões
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 max-w-xl">
            Aberto para oportunidades profissionais, desenvolvimento de projetos e conexões na área de tecnologia.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-2xl bg-white border border-neutral-200 flex items-center justify-between gap-4 shadow-2xs hover:border-neutral-300 transition-colors"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-700 shrink-0">
                <Mail className="w-5 h-5 text-neutral-700" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-neutral-500">E-mail</p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors truncate block"
                  title={PERSONAL_INFO.email}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              id="copy-email-btn"
              className="p-2.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-950 border border-neutral-200 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-mono"
              title="Copiar e-mail"
              aria-label="Copiar e-mail"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 text-[11px] hidden sm:inline">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-[11px] hidden sm:inline">Copiar</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-5 rounded-2xl bg-white border border-neutral-200 flex items-center justify-between gap-4 shadow-2xs hover:border-neutral-300 transition-colors"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-700 shrink-0">
                <Phone className="w-5 h-5 text-neutral-700" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-neutral-500">Telefone</p>
                <span className="text-xs sm:text-sm font-semibold text-neutral-900 block">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyPhone}
              id="copy-phone-btn"
              className="p-2.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-950 border border-neutral-200 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-mono"
              title="Copiar telefone"
              aria-label="Copiar telefone"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 text-[11px] hidden sm:inline">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-[11px] hidden sm:inline">Copiar</span>
                </>
              )}
            </button>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <a
              href="https://github.com/ThalisTrisch"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github-card"
              className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-400 transition-colors group shadow-2xs flex items-center justify-between gap-4 block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-700 group-hover:text-neutral-950 transition-colors shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-neutral-500">GitHub</p>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 block truncate">
                    @ThalisTrisch
                  </span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-neutral-50 group-hover:bg-neutral-100 border border-neutral-200 text-neutral-400 group-hover:text-neutral-900 transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <a
              href="https://www.linkedin.com/in/thalis-trisch-b2879a220/"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin-card"
              className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-400 transition-colors group shadow-2xs flex items-center justify-between gap-4 block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-700 group-hover:text-neutral-950 transition-colors shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-neutral-500">LinkedIn</p>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 block truncate">
                    @thalis-trisch
                  </span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-neutral-50 group-hover:bg-neutral-100 border border-neutral-200 text-neutral-400 group-hover:text-neutral-900 transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Additional info badge bar */}
        <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-neutral-400" />
            <span>IFSUL Gravataí • ADS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
