import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

const certs = [
  {
    title: "SOAR – AI to be Aware",
    issuer: "Microsoft (NSQF Framework)",
    grade: "Completed",
    link: "https://drive.google.com/file/d/1nZnp0kZgprA6VDiPzLe0FOxcnvUo1KKW/preview",
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
    title: "Problem Solving in C",
    issuer: "NPTEL",
    grade: "Elite Grade",
    link: "https://drive.google.com/file/d/1CbxQ548YxEmc05KQbA2MQUyR2cK7YfoP/preview",
  },
  {
    title: "YUVA AI For All",
    issuer: "IndiaAI (TCS iON)",
    grade: "Completed",
    link: "https://drive.google.com/file/d/1IOHAN7PwxFDfmYHpN-C7AGS42tax908d/preview",
  },
  {
    title: "Database Management",
    issuer: "Infosys Springboard",
    grade: "Completed",
    link: "https://drive.google.com/file/d/16uqjeRfoJtNQMaIfQ8bhBWuUPEzJuBw9/preview",
  },
  {
    title: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
    grade: "Completed",
    link: "https://drive.google.com/file/d/1y9AatkwzaG6S79xe7yA1PvwwWeNBK1MG/preview",
  },
  {
    title: "Java (Basics)",
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
];

export function Certifications() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" /> Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Stamps of <span className="text-gradient">consistent learning</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card/60 backdrop-blur p-5 flex items-start gap-3 hover:border-primary/40 transition-all"
            >
              <BadgeCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm">{c.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {c.issuer} • {c.grade}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
