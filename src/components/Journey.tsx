import React from 'react';

const education = [
  {
    period: '2025 – 2027',
    title: 'Master of Computer Applications',
    organization: 'Graphic Era (Deemed to be University)',
    detail: 'Current CGPA: 7.55 / 10',
  },
  {
    period: '2022 – 2025',
    title: 'Bachelor of Computer Applications',
    organization: 'Babasaheb Bhimrao Ambedkar Bihar University',
    detail: 'Final result: 72.43%',
  },
];

const experience = [
  {
    period: 'Academic project',
    title: 'RaktaSetu',
    organization: 'Blood donation management system',
    detail: 'Built a role-based web application for donor and blood request management with Java, Spring Boot and MySQL.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    period: 'Academic project',
    title: 'MediPredict AI',
    organization: 'Healthcare prediction project',
    detail: 'Developed a machine-learning project using Python, TensorFlow, Keras and a Streamlit interface.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Streamlit'],
  },
];

const certifications = [
  {
    period: 'December 2025',
    title: 'Getting Started with Artificial Intelligence',
    organization: 'IBM SkillsBuild',
    href: 'https://www.credly.com/badges/b19d437e-b179-403b-8cfe-e37c2e3b0047',
    linkLabel: 'Verify certificate',
  },
  {
    period: 'October 2025',
    title: 'AWS Cloud Practitioner Essentials',
    organization: 'AWS Training & Certification',
  },
  {
    period: 'August 2026',
    title: 'Introduction to Data Analytics',
    organization: 'Certificate of completion',
  },
  {
    period: 'Professional development',
    title: 'Entrepreneurship & AI',
    organization: 'TBIGEU',
  },
];

type TimelineEntry = {
  period: string;
  title: string;
  organization: string;
  detail?: string;
  technologies?: string[];
  href?: string;
  linkLabel?: string;
};

function TimelineSection({
  id,
  eyebrow,
  title,
  entries,
}: {
  id: string;
  eyebrow: string;
  title: string;
  entries: TimelineEntry[];
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative w-full border-t border-white/5 px-5 py-20 text-gray-100 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500 md:text-sm">{eyebrow}</p>
        <h2
          id={`${id}-heading`}
          className="mb-10 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>
        <ol className="relative ml-2 border-l border-red-500/35">
          {entries.map((entry) => (
            <li key={`${entry.title}-${entry.period}`} className="relative pb-8 pl-7 last:pb-0 md:pl-10">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.65)]" />
              <article className="glass glass-panel-card rounded-2xl p-5 md:p-7">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-red-300 md:text-xs">
                  {entry.period}
                </p>
                <h3 className="text-lg font-extrabold text-white md:text-2xl">{entry.title}</h3>
                <p className="mt-1 text-sm font-medium text-gray-300 md:text-base">{entry.organization}</p>
                {entry.detail && <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">{entry.detail}</p>}
                {entry.technologies && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {entry.technologies.map((technology) => (
                      <li key={technology} className="glass-chip rounded-full px-3 py-1 text-xs font-semibold text-gray-200">
                        {technology}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.href && entry.linkLabel && (
                  <a
                    className="mt-4 inline-flex text-sm font-bold text-red-300 underline decoration-red-500/40 underline-offset-4 hover:text-white"
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {entry.linkLabel} <span className="ml-1" aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <>
      <TimelineSection id="experience" eyebrow="Project work" title="Experience timeline." entries={experience} />
      <TimelineSection id="education" eyebrow="Academic background" title="Education." entries={education} />
      <TimelineSection id="certifications" eyebrow="Professional learning" title="Certifications." entries={certifications} />
    </>
  );
}
