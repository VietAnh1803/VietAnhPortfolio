import { useEffect, useState } from "react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const email = "nguyenvietanh1803.hcmut@gmail.com";
const external = { target: "_blank", rel: "noopener noreferrer" };
const THEME_KEY = "nva-theme";

function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f4f2ec" : "#090a09");
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Theme selection still works when storage is unavailable.
    }
  }, [theme]);

  return [theme, setTheme];
}

function useScrollReveal() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const elements = document.querySelectorAll("[data-reveal]");
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 40px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
}

function useScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      const offset = Math.min(window.scrollY * 0.16, 130);
      document.documentElement.style.setProperty(
        "--hero-scroll",
        `${offset}px`,
      );
      document
        .querySelector(".site-header")
        ?.classList.toggle("is-scrolled", window.scrollY > 40);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--hero-scroll");
    };
  }, []);
}
const Arrow = ({ diagonal = false }) => (
  <span aria-hidden="true" className="arrow">
    {diagonal ? "↗" : "→"}
  </span>
);
const Link = ({
  href,
  children,
  className = "",
  showArrow = true,
  ...props
}) => (
  <a href={href} className={className} {...external} {...props}>
    {children}
    {showArrow && <Arrow diagonal />}
  </a>
);

const credentials = [
  {
    title: "Python Project for Data Engineering",
    issuer: "IBM · Coursera",
    date: "Aug 2026",
    image: "ibm-python-project.webp",
    href: "https://www.coursera.org/verify/G0LTEVZM0KLX",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM · Coursera",
    date: "Sep 2026",
    image: "ibm-sql.webp",
    href: "https://www.coursera.org/verify/1URYNTICH2R7",
  },
  {
    title: "Hands-on Introduction to Linux Commands",
    issuer: "IBM · Coursera",
    date: "Sep 2026",
    image: "ibm-linux.webp",
    href: "https://www.coursera.org/verify/FE815E5XYGDY",
  },
  {
    title: "Introduction to Data Engineering",
    issuer: "IBM · Coursera",
    date: "Aug 2026",
    image: "ibm-intro-data-engineering.jpg",
    href: "https://www.coursera.org/verify/M1BKYHR20V6U",
  },
  {
    title: "Introduction to Relational Databases (RDBMS)",
    issuer: "IBM · Coursera",
    date: "Sep 2026",
    image: "ibm-relational-databases.jpg",
    href: "https://www.coursera.org/verify/MQC0S2FFHCM5",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM · Coursera",
    date: "Sep 2026",
    image: "ibm-python-data-science.jpg",
    href: "https://www.coursera.org/verify/F3ZLX53QOUHF",
  },
  {
    title: "Google Sheets Fundamentals",
    issuer: "DataCamp",
    date: "Sep 2025",
    image: "datacamp-google-sheets.jpg",
    href: `${BASE}/credentials/datacamp-google-sheets.pdf`,
  },
  {
    title: "ChatGPT Fundamentals",
    issuer: "DataCamp",
    date: "Sep 2025",
    image: "datacamp-chatgpt.jpg",
    href: `${BASE}/credentials/datacamp-chatgpt.pdf`,
  },
  {
    title: "Introduction to SQL",
    issuer: "SoloLearn",
    date: "Oct 2025",
    image: "sololearn-sql.jpg",
    href: `${BASE}/credentials/sololearn-sql.pdf`,
  },
  {
    title: "Graphic Design Essentials",
    issuer: "Canva Design School",
    date: "Oct 2025",
    image: "graphic-design.jpg",
    href: `${BASE}/credentials/graphic-design.pdf`,
  },
];

function Nav({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <div className="nav-brand">
          <a
            className="wordmark"
            href="#top"
            aria-label="Nguyen Viet Anh, back to top"
          >
            Nguyen Viet Anh<span>.</span>
          </a>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav
          id="main-nav"
          className={`main-nav ${open ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="#stack" onClick={() => setOpen(false)}>
            Stack
          </a>
          <a href="#credentials" onClick={() => setOpen(false)}>
            Credentials
          </a>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
            <span className="theme-toggle-label">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
          <a className="nav-cta" href={`mailto:${email}`}>
            Let&apos;s talk <Arrow diagonal />
          </a>
        </div>
      </div>
    </header>
  );
}

const systems = [
  {
    name: "Warehouse",
    eyebrow: "01 / DATA ENGINEERING",
    nodes: [
      ["Source", "Insurance records", "Oracle · CDC"],
      ["Process", "Load & reconcile", "ODI · PL/SQL"],
      ["Outcome", "Trustworthy counts", "82 → 1 corrected in one case"],
    ],
    footnote: "Also corrected sales-channel classifications across ~68k rows.",
  },
  {
    name: "Retrieval",
    eyebrow: "02 / APPLIED AI",
    nodes: [
      ["Source", "Vietnamese reports", "Financial statements"],
      ["Process", "Hybrid retrieval", "SQL · pgvector · OpenSearch"],
      ["Outcome", "Cited answers", "Source-page references"],
    ],
    footnote:
      "A report pipeline built at OSAS Joint Stock Company via AI-MED, from figures and heading chunks to answers.",
  },
  {
    name: "Evaluation",
    eyebrow: "03 / RESEARCH",
    nodes: [
      ["Source", "Wearable signals", "WESAD · 15 participants"],
      ["Process", "LOSO validation", "869 windows"],
      ["Outcome", "93.8% accuracy", "Mean · full-record normalization"],
    ],
    footnote:
      "HealthMate stress-model result; resting-only calibration remains to be validated.",
  },
];

function SystemsAtlas() {
  const [active, setActive] = useState(0);
  const system = systems[active];
  return (
    <div
      className="systems-atlas"
      aria-label="Explore three kinds of data systems I work on"
    >
      <div className="atlas-topline">
        <span>
          <i aria-hidden="true" /> FIELD NOTES // PRODUCTION SNAPSHOT
        </span>
        <span>
          SYS STATUS <strong>OPTIMAL</strong>
        </span>
      </div>
      <div className="atlas-select" role="group" aria-label="System type">
        {systems.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span> {item.name}
          </button>
        ))}
      </div>
      <div className="atlas-content" key={system.name} aria-live="polite">
        <p className="atlas-eyebrow">DOMAIN: {system.eyebrow}</p>
        <div className="atlas-flow">
          {system.nodes.map(([label, title, detail], index) => (
            <div className="atlas-node" key={label}>
              <small>
                {label} / 0{index + 1}
              </small>
              <strong>{title}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>
        <p className="atlas-footnote">{system.footnote}</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero-art"
        role="img"
        aria-label="Abstract flowing glass structure representing connected data"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="shell hero-content">
        <span className="hero-eyebrow">
          Portfolio / Data engineering & applied ML
        </span>
        <h1>
          Engineering
          <br />
          <em>clarity.</em>
        </h1>
        <p className="hero-description">
          I&apos;m Nguyen Viet Anh. I build reliable data systems and evaluate
          machine learning for real-world use—from warehouse pipelines to cited
          answers and measured model performance.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#work">
            Explore selected work <span aria-hidden="true">↗</span>
          </a>
          <a className="hero-text-link" href="#experience">
            The story behind the work <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
      <div className="shell hero-bottom">
        <span>Ho Chi Minh City, Vietnam</span>
        <span>
          Scroll to explore <span aria-hidden="true">↓</span>
        </span>
      </div>
    </section>
  );
}

function HealthVisual() {
  const [active, setActive] = useState(0);
  const views = [
    {
      name: "Stress",
      metrics: [
        ["93.8", "%", "Mean accuracy"],
        ["92.8", "%", "Macro F1"],
      ],
      note: "WESAD · 15 participants · 869 windows · LOSO CV",
    },
    {
      name: "OCR",
      metrics: [
        ["0.46", "", "PaddleOCR micro-F1"],
        ["0.24", "", "PaddleOCR-VL micro-F1"],
      ],
      note: "66 manually labeled prescriptions · medication names",
    },
    {
      name: "Readiness",
      metrics: [
        ["4.08", "", "CatBoost CV MAE"],
        ["0.920", "", "R²"],
      ],
      note: "5-fold CV · synthetic health scores (0–100)",
    },
  ];
  const view = views[active];
  return (
    <div
      className={`health-visual mode-${active}`}
      role="group"
      aria-label="Explore HealthMate evaluation results"
    >
      <div className="health-grid" aria-hidden="true" />
      <div className="health-switch" role="group" aria-label="Evaluation area">
        {views.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {active === 0 && (
        <div className="signal-stage" aria-hidden="true">
          <span className="signal-stage-label">LIVE SIGNAL / ECG</span>
          <svg
            className="signal"
            viewBox="0 0 640 150"
            preserveAspectRatio="none"
          >
            <path
              className="signal-baseline"
              d="M0 84 H86 L111 82 L128 84 L144 87 L158 51 L173 123 L192 76 L207 83 H276 L295 82 L309 84 L327 86 L342 48 L356 121 L376 77 L393 83 H469 L487 81 L504 84 L517 86 L533 53 L547 119 L567 76 L584 83 H640"
            />
            <path
              className="signal-live"
              pathLength="1000"
              d="M0 84 H86 L111 82 L128 84 L144 87 L158 51 L173 123 L192 76 L207 83 H276 L295 82 L309 84 L327 86 L342 48 L356 121 L376 77 L393 83 H469 L487 81 L504 84 L517 86 L533 53 L547 119 L567 76 L584 83 H640"
            />
          </svg>
          <span className="signal-sweep" />
        </div>
      )}
      {active > 0 && (
        <p className="analysis-label">
          {active === 1
            ? "Medication-name extraction"
            : "Synthetic health-score regression"}
        </p>
      )}
      <div className="health-time-axis" aria-hidden="true">
        <span>t = 0.0s [BASE]</span>
        <span>
          {active === 0 ? "t = 30.0s [PEAK STRESS]" : "MEASURED RESULT"}
        </span>
        <span>t = 60.0s [NORMALIZED]</span>
      </div>
      <div className="health-metrics" aria-live="polite">
        {view.metrics.map(([value, unit, label]) => (
          <div key={label}>
            <strong>
              {value}
              <span>{unit}</span>
            </strong>
            <small>{label}</small>
          </div>
        ))}
      </div>
      <p className="health-caption">{view.note}</p>
    </div>
  );
}

function Work() {
  return (
    <section className="work section-pad shell" id="work">
      <div className="section-head" data-reveal>
        <span className="section-eyebrow">// DEEP ARCHITECTURE REPOSITORY</span>
        <h2>
          Selected work<span className="period">.</span>
        </h2>
        <p>Research, engineering, and the details that connect them.</p>
      </div>
      <article className="featured-project" data-reveal>
        <div className="feature-copy">
          <span className="project-type">Research / 2025–2026</span>
          <h3>HealthMate</h3>
          <p className="project-lead">
            I designed the Flutter interface and helped evaluate stress models,
            readiness prediction, and prescription OCR.
          </p>
          <p className="project-detail">
            Compared models and OCR approaches against measured outcomes. Stress
            results use full-record per-subject normalization; resting-only
            calibration remains to be validated.
          </p>
          <div className="project-links">
            <Link href="https://github.com/Brookvita3/HealthMate">
              Backend & OCR
            </Link>
            <Link href="https://github.com/Btbach25/HealthMate_FE">
              Flutter app
            </Link>
          </div>
        </div>
        <HealthVisual />
      </article>
      <div className="project-grid">
        <article className="project-panel sags-panel" data-reveal>
          <div className="panel-meta">
            <span>Applied AI</span>
            <span>OSAS Joint Stock Company via AI-MED</span>
          </div>
          <div className="project-art project-art-retrieval">
            <img
              src={`${BASE}/retrieval-art.webp`}
              alt="Conceptual illustration of layered reports linked by retrieval paths"
              loading="lazy"
              width="1536"
              height="1024"
            />
            <span className="project-art-label">
              Reports → Retrieval → Cited answers
            </span>
          </div>
          <h3>Financial Statement Assistant</h3>
          <p>
            Built a Vietnamese report pipeline with figure extraction, hybrid
            retrieval, LLM summaries, and source-page references.
          </p>
          <div className="tags">
            <span>FastAPI</span>
            <span>pgvector</span>
            <span>OpenSearch</span>
            <span>Ollama</span>
          </div>
        </article>
        <article className="project-panel warehouse-panel" data-reveal>
          <div className="panel-meta">
            <span>Data engineering</span>
            <span>OSAS Joint Stock Company via AI-MED</span>
          </div>
          <div className="project-art project-art-warehouse">
            <img
              src={`${BASE}/warehouse-art.webp`}
              alt="Conceptual illustration of aligned data blocks in a warehouse pipeline"
              loading="lazy"
              width="1536"
              height="1024"
            />
            <span className="project-art-label">
              One customer&apos;s policy count: 82 → 1
            </span>
          </div>
          <h3>Insurance Data Warehouse</h3>
          <p>
            Maintained Oracle warehouse loads and CDC. Reconciled a policy-count
            error and corrected sales-channel classifications across about
            68,000 rows.
          </p>
          <div className="tags">
            <span>Oracle</span>
            <span>PL/SQL</span>
            <span>ODI</span>
            <span>GoldenGate</span>
          </div>
        </article>
      </div>
      <div className="earlier-work" data-reveal>
        <h3>Earlier engineering projects</h3>
        <div>
          <Link href="https://github.com/HoaNguyenz/Multi_vendor_ecom">
            <span>Multi-vendor e-commerce</span>
            <small>Frontend · React / Tailwind · 2024</small>
          </Link>
          <Link href="https://github.com/baohuynhhcmut/smartfarm-fe">
            <span>Smart Farm IoT</span>
            <small>Frontend · React / MQTT · 2025</small>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const roles = [
    [
      "Jun 2025 – Present",
      "Data Engineer",
      "at OSAS Joint Stock Company via AI-MED",
      "Developing warehouse loads, search, and retrieval pipelines for financial and insurance data.",
    ],
    [
      "Sep 2025 – May 2026",
      "HealthMate thesis",
      "at HCMUT",
      "Collaborated on wearable health research, model benchmarking, OCR evaluation, and Flutter interface design.",
    ],
    [
      "2022 – 2026",
      "B.Sc. Computer Science",
      "at HCMUT",
      "Majored in Information Systems at Ho Chi Minh City University of Technology.",
    ],
  ];
  return (
    <section className="experience section-pad" id="experience">
      <div className="shell experience-grid">
        <div className="experience-intro" data-reveal>
          <span className="section-eyebrow">// RIGOROUS FOUNDATION</span>
          <h2>
            Built through
            <br />
            <em>practice.</em>
          </h2>
          <p>
            I work across data preparation, model evaluation, and the
            applications that make results usable.
          </p>
          <div className="competence-card">
            <small>CORE COMPETENCE</small>
            <strong>Production data systems & model evaluation</strong>
            <span>Reliable, measured outcomes</span>
          </div>
        </div>
        <div className="timeline">
          {roles.map(([date, title, place, desc]) => (
            <article key={title} data-reveal>
              {title === "Data Engineer" && (
                <div className="company-mark">
                  <img
                    src={`${BASE}/osas-logo.png`}
                    alt="OSAS company logo — Your success our values"
                    width="150"
                    height="73"
                    loading="lazy"
                  />
                </div>
              )}
              <time>{date}</time>
              <h3>
                {title} <span>{place}</span>
              </h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  const featured = [
    { name: "Python", icon: "python", area: "Pipelines & analysis" },
    { name: "Apache Kafka", icon: "apachekafka", area: "Streaming data" },
    { name: "Oracle Database", icon: "oracle", area: "Warehouse & SQL" },
    {
      name: "Oracle Data Integrator",
      icon: "oracle",
      code: "ODI",
      area: "ETL / ELT",
    },
    {
      name: "Oracle GoldenGate",
      icon: "oracle",
      code: "OGG",
      area: "Change capture",
    },
    { name: "PostgreSQL", icon: "postgresql", area: "Retrieval storage" },
    {
      name: "Apache Spark",
      icon: "apachespark",
      area: "Distributed processing",
    },
    { name: "FastAPI", icon: "fastapi", area: "Service layer" },
    { name: "Flutter", icon: "flutter", area: "Mobile interface" },
    { name: "Docker", icon: "docker", area: "Application delivery" },
  ];
  const groups = [
    [
      "Machine learning",
      "scikit-learn, CatBoost, feature engineering, LOSO / k-fold validation, model interpretation",
      "MODEL EVAL & ML",
      ["scikit-learn", "CatBoost", "LOSO / k-fold CV", "Feature engineering"],
    ],
    [
      "Data & retrieval",
      "Python, SQL, Pandas, PostgreSQL, pgvector, OpenSearch, Oracle, PL/SQL",
      "STORAGE & RETRIEVAL",
      [
        "Python",
        "SQL / PL-SQL",
        "Pandas",
        "PostgreSQL / pgvector",
        "OpenSearch",
        "Oracle",
      ],
    ],
    [
      "Applications & infra",
      "FastAPI, Flutter, Dart, Go, Docker, GitHub Actions",
      "APPS & INFRA",
      ["FastAPI", "Flutter · Dart", "Go", "Docker", "GitHub Actions"],
    ],
  ];
  return (
    <section className="toolkit section-pad shell" id="stack">
      <div className="section-head" data-reveal>
        <span className="section-eyebrow">// STACK SPECIFICATION</span>
        <h2>
          Tools I use<span className="period">.</span>
        </h2>
        <p>System capabilities, from research to production.</p>
      </div>
      <div className="tech-gallery" aria-label="Featured technology stack">
        {featured.map(({ name, icon, code, area }, index) => (
          <div
            className="tech-card"
            key={name}
            data-reveal
            style={{ "--reveal-delay": `${(index % 4) * 80}ms` }}
          >
            <div className="tech-logo-stage">
              <img
                src={`${BASE}/tech-icons/${icon}.svg`}
                alt=""
                width="94"
                height="94"
                loading="lazy"
              />
              {code && <span className="tech-product-code">{code}</span>}
            </div>
            <span className="tech-card-index">0{index + 1} / STACK</span>
            <h3>{name}</h3>
            <p>{area}</p>
          </div>
        ))}
      </div>
      <p className="tech-gallery-note">
        ODI and GoldenGate are Oracle products; their cards use the Oracle mark.
      </p>
      <div className="toolkit-grid">
        {groups.map(([name, description, eyebrow, tools], index) => (
          <div key={name} data-reveal>
            <small>
              0{index + 1} / {eyebrow}
            </small>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="tags">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="credentials section-pad" id="credentials">
      <div className="shell">
        <div className="credentials-head section-head" data-reveal>
          <span className="section-eyebrow">// RIGOROUS ACCREDITATION</span>
          <h2>
            Continued learning<span className="period">.</span>
          </h2>
          <p>
            {credentials.length} certificates across data engineering,
            analytics, and design. Open any card to view its source.
          </p>
        </div>
        <div className="credential-grid">
          {credentials.map(({ title, issuer, date, image, href }, index) => (
            <Link
              key={title}
              className="credential-card"
              href={href}
              showArrow={false}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` }}
            >
              <div className="credential-preview" aria-hidden="true">
                <img
                  src={`${BASE}/credentials/${image}`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="credential-meta">
                <span>{issuer}</span>
                {date && <span>{date}</span>}
              </div>
              <h3>{title}</h3>
              <span className="verify-link">
                {href.endsWith(".pdf")
                  ? "View certificate"
                  : "Verify credential"}{" "}
                <Arrow diagonal />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <div className="contact-panel" data-reveal>
          <span className="section-eyebrow">// START A CONVERSATION</span>
          <h2>
            Have a role or research problem in mind?
            <br />
            <a href={`mailto:${email}`}>Get in touch.</a>
          </h2>
          <p>
            Open to data engineering roles, applied ML collaborations, and
            research projects in Ho Chi Minh City or remotely.
          </p>
          <div className="contact-actions">
            <a className="button-primary" href={`mailto:${email}`}>
              Send direct email <span aria-hidden="true">✉</span>
            </a>
            <button
              className="copy-email"
              type="button"
              onClick={copyEmail}
              aria-live="polite"
            >
              {copied ? "✓ Email copied" : `Copy: ${email}`}
            </button>
            <Link href="https://www.linkedin.com/in/nguyenvietanh180304/">
              LinkedIn profile
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Nguyen Viet Anh <i>/</i> DATA ENG &
            APPLIED ML
          </span>
          <div>
            <Link href="https://www.linkedin.com/in/nguyenvietanh180304/">
              LinkedIn
            </Link>
            <Link href="https://github.com/VietAnh1803">GitHub</Link>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useTheme();
  useScrollReveal();
  useScrollMotion();
  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Work />
        <Experience />
        <section
          className="approach section-pad shell"
          aria-labelledby="approach-heading"
        >
          <div className="section-head" data-reveal>
            <span className="section-eyebrow">The method</span>
            <h2 id="approach-heading">
              From signal to <em>meaning.</em>
            </h2>
            <p>Three connected disciplines behind the work.</p>
          </div>
          <SystemsAtlas />
        </section>
        <Toolkit />
        <Credentials />
      </main>
      <Footer />
    </>
  );
}
