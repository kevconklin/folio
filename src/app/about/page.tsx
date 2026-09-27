import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const links = [
  { label: "Email", url: "mailto:conklinradio@gmail.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/kevinwconklin/" },
  { label: "GitHub", url: "https://github.com/kevconklin" },
  { label: "Medium", url: "https://medium.com/@kevinconklin_17818" },
];

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        I&apos;m Kevin Conklin, a Senior AI Advisor at OakTruss Group. I specialize in
        enterprise use of AI, Responsible AI, and accelerator development: helping
        organizations adopt AI in ways that are useful, trustworthy, and quick to deliver.
      </p>
      <p>
        Before joining OakTruss in May 2026, I was a Technical Manager and AI Innovation
        Lead at Deloitte, where I led generative AI work in the Government &amp; Public
        Services practice.
      </p>
      <p>
        I hold an M.S. in Business Analytics and a B.S. in Mathematics from Arizona State
        University.
      </p>

      <h2>Contact</h2>
      <p>
        {links.map((link, i) => (
          <span key={link.label}>
            {i > 0 && " · "}
            <a href={link.url}>{link.label}</a>
          </span>
        ))}
      </p>
    </>
  );
}
