import { useEffect, useRef, useState } from "react";
import portrait from "./assets/avatar.jpg";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const email = "nguyenvietanh1803.hcmut@gmail.com";
const external = { target: "_blank", rel: "noopener noreferrer" };
const Arrow = ({ diagonal = false }) => (
  <span aria-hidden="true" className="arrow">
    {diagonal ? "↗" : "→"}
  </span>
);
const Link = ({ href, children, className = "" }) => (
  <a href={href} className={className} {...external}>
    {children}
    <Arrow diagonal />
  </a>
);

const credentials = [
  [
    "Python Project for Data Engineering",
    "IBM · Coursera",
    "Aug 2026",
    "ibm-python-project.webp",
    "https://www.coursera.org/verify/G0LTEVZM0KLX",
  ],
  [
    "Databases and SQL for Data Science with Python",
    "IBM · Coursera",
    "Sep 2026",
    "ibm-sql.webp",
    "https://www.coursera.org/verify/1URYNTICH2R7",
  ],
  [
    "Hands-on Introduction to Linux Commands",
    "IBM · Coursera",
    "Sep 2026",
    "ibm-linux.webp",
    "https://www.coursera.org/verify/FE815E5XYGDY",
  ],
];
const moreCredentials = [
  [
    "Introduction to Data Engineering",
    "IBM · Coursera",
    "https://www.coursera.org/verify/M1BKYHR20V6U",
  ],
  [
    "Introduction to Relational Databases",
    "IBM · Coursera",
    "https://www.coursera.org/verify/MQC0S2FFHCM5",
  ],
  [
    "Python for Data Science, AI & Development",
    "IBM · Coursera",
    "https://www.coursera.org/verify/F3ZLX53QOUHF",
  ],
  [
    "Google Sheets Fundamentals",
    "DataCamp",
    `${BASE}/credentials/datacamp-google-sheets.pdf`,
  ],
  [
    "ChatGPT Fundamentals",
    "DataCamp",
    `${BASE}/credentials/datacamp-chatgpt.pdf`,
  ],
  ["Introduction to SQL", "SoloLearn", `${BASE}/credentials/sololearn-sql.pdf`],
  [
    "Graphic Design Essentials",
    "Canva Design School",
    `${BASE}/credentials/graphic-design.pdf`,
  ],
];

function useReveals() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Nguyen Viet Anh, back to top"
        >
          NVA<span>.</span>
        </a>
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
          <a href="#credentials" onClick={() => setOpen(false)}>
            Credentials
          </a>
          <a
            className="nav-cta"
            href={`mailto:${email}`}
            onClick={() => setOpen(false)}
          >
            Get in touch <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Portrait() {
  const element = useRef(null);
  const move = (event) => {
    if (event.pointerType !== "mouse") return;
    if (
      !element.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = element.current.getBoundingClientRect();
    element.current.style.setProperty(
      "--rx",
      `${-((event.clientY - rect.top) / rect.height - 0.5) * 6}deg`,
    );
    element.current.style.setProperty(
      "--ry",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 8}deg`,
    );
  };
  const reset = () => {
    if (element.current) {
      element.current.style.setProperty("--rx", "0deg");
      element.current.style.setProperty("--ry", "0deg");
    }
  };
  return (
    <div
      ref={element}
      className="portrait-stage"
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <div className="portrait-grid" aria-hidden="true" />
      <div className="portrait-frame">
        <img src={portrait} alt="Portrait of Nguyen Viet Anh" />
      </div>
      <span className="stage-corner stage-corner-a" aria-hidden="true" />
      <span className="stage-corner stage-corner-b" aria-hidden="true" />
      <p className="portrait-caption">
        Nguyen Viet Anh
        <br />
        Ho Chi Minh City, VN
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="hero-kicker">
          <span /> Data Engineer / Applied ML
        </p>
        <h1>
          Nguyen
          <br />
          <strong>Viet Anh.</strong>
        </h1>
        <p className="hero-description">
          I build reliable data systems and evaluate machine learning for
          real-world use.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#work">
            Explore work <Arrow />
          </a>
          <Link
            className="underlined-link"
            href="https://github.com/VietAnh1803"
          >
            GitHub
          </Link>
        </div>
      </div>
      <Portrait />
    </section>
  );
}

function Intro() {
  return (
    <section className="intro-band">
      <div className="shell intro-grid">
        <p>
          Currently at <strong>OSAS</strong>
          <br />
          Data Engineer, since Jun 2025
        </p>
        <p>
          Computer Science
          <br />
          <strong>HCMUT</strong>, graduated 2026
        </p>
        <p>
          Based in
          <br />
          <strong>Ho Chi Minh City</strong>
        </p>
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
        <svg
          className="signal"
          aria-hidden="true"
          viewBox="0 0 640 150"
          preserveAspectRatio="none"
        >
          <path d="M0 84 H86 L111 82 L128 84 L144 87 L158 51 L173 123 L192 76 L207 83 H276 L295 82 L309 84 L327 86 L342 48 L356 121 L376 77 L393 83 H469 L487 81 L504 84 L517 86 L533 53 L547 119 L567 76 L584 83 H640" />
        </svg>
      )}
      {active > 0 && (
        <p className="analysis-label">
          {active === 1
            ? "Medication-name extraction"
            : "Synthetic health-score regression"}
        </p>
      )}
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
            <span>OSAS</span>
          </div>
          <div
            className="sags-visual"
            role="img"
            aria-label="Report processing: source reports, heading-based chunks, SQL and pgvector retrieval, cited answers"
          >
            {[
              "Reports",
              "Heading chunks",
              "SQL + pgvector",
              "Cited answers",
            ].map((step, index) => (
              <div className="pipeline-step" key={step}>
                <small>0{index + 1}</small>
                <strong>{step}</strong>
              </div>
            ))}
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
            <span>OSAS</span>
          </div>
          <div
            className="warehouse-visual"
            aria-label="Reconciliation corrected one customer's policy count from 82 to 1"
          >
            <span className="old-count">82</span>
            <span className="count-arrow">→</span>
            <span className="new-count">1</span>
            <small>policies / one customer</small>
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
        <h3>Earlier work</h3>
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
      "at OSAS",
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
          <h2>
            Built through
            <br />
            <em>practice.</em>
          </h2>
          <p>
            I work across data preparation, model evaluation, and the
            applications that make results usable.
          </p>
        </div>
        <div className="timeline">
          {roles.map(([date, title, place, desc]) => (
            <article key={title} data-reveal>
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
  const groups = [
    [
      "Machine learning",
      "scikit-learn, CatBoost, feature engineering, LOSO / k-fold validation, model interpretation",
    ],
    [
      "Data & retrieval",
      "Python, SQL, Pandas, PostgreSQL, pgvector, OpenSearch, Oracle, PL/SQL",
    ],
    ["Applications", "FastAPI, Flutter, Dart, Go, Docker, GitHub Actions"],
  ];
  return (
    <section className="toolkit section-pad shell">
      <h2 data-reveal>
        Tools I use<span className="period">.</span>
      </h2>
      <div className="toolkit-grid">
        {groups.map(([name, tools]) => (
          <div key={name} data-reveal>
            <h3>{name}</h3>
            <p>{tools}</p>
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
        <div className="credentials-head" data-reveal>
          <h2>
            Continued learning<span className="period">.</span>
          </h2>
          <p>
            Selected certificates, with direct verification where available.
          </p>
        </div>
        <div className="credential-grid">
          {credentials.map(([title, issuer, date, image, href]) => (
            <Link key={title} className="credential-card" href={href}>
              <div className="credential-image">
                <img
                  src={`${BASE}/credentials/${image}`}
                  alt={`${title} certificate`}
                  loading="lazy"
                />
              </div>
              <div className="credential-meta">
                <span>{issuer}</span>
                <span>{date}</span>
              </div>
              <h3>{title}</h3>
            </Link>
          ))}
        </div>
        <details className="more-credentials" data-reveal>
          <summary>
            More credentials <span aria-hidden="true">+</span>
          </summary>
          <div className="more-list">
            {moreCredentials.map(([name, source, href]) => (
              <Link href={href} key={name}>
                <span>{name}</span>
                <small>{source}</small>
              </Link>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <p>Have a role or research problem in mind?</p>
        <a className="footer-cta" href={`mailto:${email}`}>
          Get in touch <Arrow diagonal />
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nguyen Viet Anh</span>
          <div>
            <Link href="https://www.linkedin.com/in/anh-nguyen-viet-835081336">
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
  useReveals();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Experience />
        <Toolkit />
        <Credentials />
      </main>
      <Footer />
    </>
  );
}
