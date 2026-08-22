import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certs = [
  {
    title: "SOAR - AI to be Aware",
    issuer: "Microsoft (NCVET)",
    grade: "Certified",
    link: "https://drive.google.com/file/d/1nZnp0kZgprA6VDiPzLe0FOxcnvUo1KKW/preview",
  },
  {
    title: "YUVA AI For All",
    issuer: "IndiaAI (TCS iON)",
    grade: "Certified",
    link: "https://drive.google.com/file/d/1IOHAN7PwxFDfmYHpN-C7AGS42tax908d/preview",
  },
  {
    title: "Database Management System (DBMS)",
    issuer: "Infosys Springboard",
    grade: "Certified",
    link: "https://drive.google.com/file/d/16uqjeRfoJtNQMaIfQ8bhBWuUPEzJuBw9/preview",
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    grade: "Certified",
    link: "https://drive.google.com/file/d/1lf7e2Ee9F1RMrOuEXByCr4Htmc1KNTE7/preview",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    grade: "Certified",
    link: "https://drive.google.com/file/d/12jkSEJbX2mSY4N1JUsC-H12wVXSHH9CH/preview",
  },
  {
    title: "Problem Solving through Programming in C",
    issuer: "NPTEL",
    grade: "Elite Grade",
    link: "https://drive.google.com/file/d/1CbxQ548YxEmc05KQbA2MQUyR2cK7YfoP/preview",
  },
  {
    title: "Programming in Modern C++",
    issuer: "NPTEL (IIT Kharagpur)",
    grade: "Completed",
    link: "https://drive.google.com/file/d/16cw53kze3oCe4AN3XpK9msoNH_ekIOtF/preview",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    grade: "Completed",
    link: "https://drive.google.com/file/d/1CHJytXgRcSnNvfBTlISNXlxkUvn_fXrA/preview",
  },
  {
    title: "Programming Fundamentals in Python",
    issuer: "Infosys Springboard",
    grade: "Completed",
    link: "https://drive.google.com/file/d/1y9AatkwzaG6S79xe7yA1PvwwWeNBK1MG/preview",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-[#F2EDE3] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A3432F] font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" /> 04 — Verified Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181715]">
            Credentials & <span className="text-[#A3432F]">continuous learning</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#716B61] leading-relaxed">
            Industry & academic certifications verifying software, programming, and cloud skills.
          </p>
        </motion.div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="craft-card p-4.5 flex items-start justify-between gap-3 group bg-[#F8F4EC] border border-[#D5CCBC] rounded-md"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#F2EDE3] border border-[#D5CCBC] grid place-items-center text-[#A3432F] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#181715] group-hover:text-[#A3432F] transition-colors leading-snug">
                    {c.title}
                  </h3>
                  <div className="text-[10px] text-[#716B61] mt-1 font-mono">
                    {c.issuer} • <span className="text-[#A3432F] font-semibold">{c.grade}</span>
                  </div>
                </div>
              </div>

              <ExternalLink className="w-3.5 h-3.5 text-[#716B61] group-hover:text-[#A3432F] transition-colors shrink-0 mt-1" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
