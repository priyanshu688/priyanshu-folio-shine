import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  Rocket,
  Target,
  Users,
  BarChart3,
  Layers,
  Code2,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanshu Vaishnavi — Aspiring Product Manager" },
      {
        name: "description",
        content:
          "Portfolio of Priyanshu Vaishnavi — Aspiring Product Manager with 2.6+ years driving digital products across SaaS, e-commerce and web platforms.",
      },
      { property: "og:title", content: "Priyanshu Vaishnavi — Product Manager Portfolio" },
      {
        property: "og:description",
        content: "Product strategy, UX optimization, and cross-functional delivery.",
      },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { icon: Target, title: "Product Strategy", items: ["PRD Creation", "Roadmapping", "Feature Prioritization", "GTM Coordination"] },
  { icon: Users, title: "Stakeholder Mgmt", items: ["Requirement Gathering", "Cross-functional Collaboration", "Client Communication"] },
  { icon: BarChart3, title: "Data & Analytics", items: ["Google Analytics", "Power BI", "KPI Tracking", "SQL (Basic)"] },
  { icon: Layers, title: "UX & Growth", items: ["A/B Testing", "Figma", "Conversion Optimization", "User Research"] },
  { icon: Rocket, title: "Agile Delivery", items: ["Jira", "Confluence", "Sprint Planning", "Scrum"] },
  { icon: Code2, title: "Platforms", items: ["WordPress", "WooCommerce", "CMS", "Web Optimization"] },
];

const experiences = [
  {
    role: "WordPress Developer • Product Execution & Delivery",
    company: "vSplash Techlabs Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Dec 2024 — Present",
    points: [
      "Managed digital product delivery across WordPress and e-commerce platforms.",
      "Translated stakeholder requirements into functional, scalable website features.",
      "Prioritized enhancements and bug fixes by impact and business goals.",
      "Coordinated cross-functional launches with developers, designers, SEO and clients.",
      "Improved UX and checkout flow — increased conversions by 65%.",
    ],
  },
  {
    role: "WordPress Developer • Product-Focused Execution",
    company: "Globussoft Technologies",
    location: "Bangalore, India",
    period: "Nov 2023 — Dec 2024",
    points: [
      "Owned end-to-end delivery of multiple website projects aligned with client goals.",
      "Built conversion-focused pages that lifted user engagement and leads by 70%.",
      "Translated stakeholder requirements into customized features.",
      "Resolved production issues and tuned performance for better UX.",
    ],
  },
];

const projects = [
  {
    title: "EmpMonitor — B2B SaaS Platform",
    period: "Jan 2024 – Jan 2025",
    tag: "SaaS Product",
    description:
      "Drove product growth initiatives for a workforce monitoring SaaS — owning website delivery, onboarding funnels and conversion experiments.",
    impact: ["+70% lead generation", "Optimized onboarding funnel", "Improved user retention"],
  },
  {
    title: "E-commerce Checkout Optimization",
    period: "2025",
    tag: "Growth & UX",
    description:
      "Re-architected the checkout flow on a WooCommerce storefront — reduced friction at key drop-off steps and shipped iterative A/B tests.",
    impact: ["+65% conversion rate", "Reduced cart abandonment", "Higher AOV"],
  },
  {
    title: "Multi-Client Web Delivery Program",
    period: "2023 – 2024",
    tag: "Product Ops",
    description:
      "Managed a portfolio of client website launches — coordinating PRDs, sprint planning, QA/UAT and post-launch support across teams.",
    impact: ["10+ launches delivered", "Faster sprint cycles", "Zero critical post-launch bugs"],
  },
];

const certifications = [
  "Google Project Management Professional Certificate",
  "Google Analytics Certified",
  "Agile & Scrum Fundamentals",
  "Product Management Foundations",
];

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight gradient-text">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Portfolio() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#hero" className="font-semibold tracking-tight text-lg">
            <span className="gradient-text">Priyanshu</span>
            <span className="text-muted-foreground">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </div>
          <a
            href="/Priyanshu_Vaishnavi_Resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />

        <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Available for Associate Product Manager roles
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              <span className="block text-foreground">Priyanshu</span>
              <span className="block gradient-text">Vaishnavi</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Aspiring <span className="text-foreground font-medium">Product Manager</span> with{" "}
              <span className="text-foreground font-medium">2.6+ years</span> driving digital products across
              SaaS, e-commerce and web — from PRDs to launch, with measurable growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/Priyanshu_Vaishnavi_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:border-primary/40 transition-colors"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-vaishnavi/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:border-primary/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "2.6+", v: "Years Exp" },
                { k: "65%", v: "Conv. Lift" },
                { k: "10+", v: "Launches" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl font-semibold gradient-text">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative aspect-square rounded-3xl glass shadow-elegant p-8 animate-float">
              <div className="absolute -inset-px rounded-3xl gradient-primary opacity-20 blur-xl" />
              <div className="relative h-full w-full rounded-2xl bg-card/60 border border-border flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Profile</div>
                  <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                </div>
                <div>
                  <div className="text-6xl font-semibold gradient-text">PV</div>
                  <div className="mt-2 text-sm text-muted-foreground">Product · Strategy · Delivery</div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-secondary/60 p-3">
                    <div className="text-muted-foreground">Focus</div>
                    <div className="text-foreground font-medium mt-0.5">SaaS · E-com</div>
                  </div>
                  <div className="rounded-lg bg-secondary/60 p-3">
                    <div className="text-muted-foreground">Based</div>
                    <div className="text-foreground font-medium mt-0.5">India 🇮🇳</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="Building products people actually use.">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-5 text-muted-foreground text-lg leading-relaxed animate-fade-up">
            <p>
              I'm Priyanshu — a product-minded builder who spent the last <span className="text-foreground">2.6 years</span>{" "}
              shipping digital products across web, e-commerce and SaaS. I love the messy middle: turning fuzzy
              stakeholder asks into crisp PRDs, prioritized backlogs and shipped releases.
            </p>
            <p>
              I've owned roadmaps, run UAT, coordinated launches, and used analytics + A/B testing to push real
              numbers — from <span className="text-foreground">+65% conversion</span> on checkout flows to{" "}
              <span className="text-foreground">+70% lead generation</span> for SaaS funnels.
            </p>
            <p>
              Now I'm focused on stepping into an <span className="text-foreground">Associate Product Manager</span> role
              where I can pair execution discipline with sharper product thinking.
            </p>
          </div>
          <div className="rounded-2xl glass p-6 hover-lift animate-fade-up">
            <div className="flex items-center gap-2 text-gold">
              <Award className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">Achievement</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold">Gold Medalist</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              B.Tech CSE, Uttarakhand Technical University (2023). Awarded for highest academic performance — 86.8%.
            </p>
            <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4 text-primary" />
              B.Tech, Computer Science
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        eyebrow="Skills"
        title="Product, growth and execution toolkit."
        subtitle="A blend of product craft, data fluency and hands-on delivery experience."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl gradient-card-bg border border-border p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Experience" title="Where I've shipped product impact.">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className={`relative md:grid md:grid-cols-2 md:gap-12 animate-fade-up ${
                  idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                  <span className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 h-3 w-3 rounded-full gradient-primary shadow-glow" />
                  <div className="text-sm text-primary font-medium">{exp.period}</div>
                  <div className="mt-2 inline-flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </div>
                </div>
                <div className="pl-12 md:pl-12 mt-3 md:mt-0">
                  <div className="rounded-2xl glass p-6 hover-lift">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg leading-tight">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      {exp.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Projects" title="Selected work & outcomes.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative rounded-2xl gradient-card-bg border border-border p-6 hover-lift animate-fade-up overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full gradient-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                  {p.tag}
                </span>
                <span className="text-muted-foreground">{p.period}</span>
              </div>
              <h3 className="mt-5 font-semibold text-xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <ul className="mt-5 space-y-1.5">
                {p.impact.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-gold" /> {m}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Research */}
      <Section
        id="research"
        eyebrow="Research"
        title="Research & publications."
        subtitle="Exploring the intersection of product, behavior and technology."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl glass p-8 hover-lift animate-fade-up">
            <div className="flex items-center gap-2 text-primary text-sm">
              <BookOpen className="w-4 h-4" /> Whitepaper
            </div>
            <h3 className="mt-4 text-2xl font-semibold leading-tight">
              UX Patterns That Drive Conversion in B2B SaaS Onboarding
            </h3>
            <p className="mt-4 text-muted-foreground">
              A practitioner study from EmpMonitor — analyzing onboarding drop-off, micro-CTA placement and
              trust signals that influence first-week activation.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
              Coming soon <ExternalLink className="w-4 h-4" />
            </div>
          </div>
          <div className="rounded-2xl glass p-8 hover-lift animate-fade-up">
            <div className="flex items-center gap-2 text-primary text-sm">
              <BookOpen className="w-4 h-4" /> Article
            </div>
            <h3 className="mt-4 text-2xl font-semibold leading-tight">
              From Stakeholder Ask to Shippable PRD — A Field Playbook
            </h3>
            <p className="mt-4 text-muted-foreground">
              Lessons from running 10+ client launches: how to translate ambiguous requests into crisp,
              testable product requirements without losing speed.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
              Read on LinkedIn <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section
        id="certifications"
        eyebrow="Certifications"
        title="Continuous learning."
        subtitle="Sharpening the product, analytics and delivery toolkit."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((c, i) => (
            <div
              key={c}
              className="rounded-xl glass p-5 hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Award className="w-6 h-6 text-gold" />
              <p className="mt-4 text-sm font-medium leading-snug">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="relative py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl glass p-10 md:p-16 overflow-hidden shadow-elegant animate-fade-up">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full gradient-primary opacity-20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold opacity-10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-4">
                <span className="h-px w-8 bg-primary" />
                Contact
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight gradient-text max-w-2xl">
                Let's build something users love.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Open to Associate Product Manager roles, collaborations and conversations on product, growth and UX.
              </p>

              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                <a
                  href="mailto:vaishnavipriyanshu198@gmail.com"
                  className="rounded-xl bg-secondary/60 border border-border p-5 hover-lift block"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="mt-1 text-sm font-medium break-all">vaishnavipriyanshu198@gmail.com</div>
                </a>
                <a
                  href="tel:+918298149202"
                  className="rounded-xl bg-secondary/60 border border-border p-5 hover-lift block"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <div className="mt-1 text-sm font-medium">+91 82981 49202</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/priyanshu-vaishnavi/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-secondary/60 border border-border p-5 hover-lift block"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</div>
                  <div className="mt-1 text-sm font-medium">/in/priyanshu-vaishnavi</div>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:vaishnavipriyanshu198@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
                >
                  Say hello <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/Priyanshu_Vaishnavi_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:border-primary/40 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Priyanshu Vaishnavi · Crafted with care.
      </footer>
    </main>
  );
}
