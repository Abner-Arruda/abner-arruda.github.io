import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, ArrowRight, Phone, Languages } from "lucide-react";
import photo from "@/assets/abner-photo.jpg";
import {
  LINKEDIN, EMAIL, PHONE, PHONE_TEL, timeline, competencies, jobs, projects, education, volunteering, certs, recommendations,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abner Arruda — Infrastructure & Security Analyst" },
      { name: "description", content: "Portfólio de Abner Arruda: Blue Team / SOC, IAM e infraestrutura em fintech regulada no Rio de Janeiro." },
      { property: "og:title", content: "Abner Arruda — Infrastructure & Security Analyst" },
      { property: "og:description", content: "Blue Team / SOC, IAM e infraestrutura. Projetos, experiência, certificações e contato." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Sobre", "#sobre"], ["Experiência", "#experiencia"], ["Projetos", "#projetos"], ["Formação", "#formacao"],
  ["Certificações", "#certificacoes"], ["Recomendações", "#recomendacoes"], ["Contato", "#contato"],
];

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-20">
      <p className="mb-10 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{label}</p>
      {children}
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-accent/40 bg-navy/40 px-3 py-0.5 text-xs text-accent">{children}</span>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{i}
        </li>
      ))}
    </ul>
  );
}

const card = "rounded-lg border border-border bg-card p-6";

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <a href="#inicio" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-xs font-bold">AA</a>
          <nav className="hidden gap-6 text-sm text-muted-foreground lg:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-foreground">{l}</a>)}
          </nav>
          <a href="#contato" className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-accent">Fale Comigo</a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section id="inicio" className="grid min-h-[78vh] items-center gap-12 py-20 md:grid-cols-[1.4fr_1fr]">
          <div className="fade-up">
            <p className="mb-4 text-sm text-muted-foreground">Infrastructure & Security Analyst · Blue Team / SOC · IAM · Rio de Janeiro</p>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Olá, eu sou<br /><span className="text-accent">Abner Arruda</span>
            </h1>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>Profissional de Segurança da Informação com foco em Blue Team / SOC (monitoramento em SIEM, resposta a incidentes e MITRE ATT&amp;CK), IAM e infraestrutura, em fintech regulada com ambiente híbrido AWS, Google Cloud e Microsoft Entra ID. Minha abordagem é essencialmente prática: entender como os sistemas funcionam por dentro, automatizar processos, melhorar fluxos e garantir ambientes seguros, confiáveis e disponíveis.</p>
              <p>Acredito que segurança não é apenas bloquear acessos, é garantir o acesso certo, com menor privilégio, rastreabilidade e responsabilidade. Alinhado às normas ISO/IEC 27001 e à LGPD. Atualmente estudando para a certificação CompTIA Security+.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85">
                Ver Projetos <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"><Linkedin className="h-4 w-4" /></a>
              <a href={`mailto:${EMAIL}`} aria-label="E-mail" className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="fade-up flex justify-center md:justify-end" style={{ animationDelay: "0.15s" }}>
            <div className="glow-ring aspect-square w-64 overflow-hidden rounded-full bg-card md:w-80">
              <img src={photo} alt="Abner Arruda" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <Section id="sobre" label="Sobre mim">
          <h2 className="max-w-3xl text-3xl font-semibold leading-snug md:text-4xl">Usando a tecnologia para tornar o mundo mais seguro com controle, rastreabilidade e responsabilidade.</h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((t) => (
              <div key={t.org + t.when} className={card}>
                <p className="text-xs text-accent">{t.when}</p>
                <h3 className="mt-2 font-semibold">{t.org}</h3>
                <p className="text-sm">{t.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                {t.tag && <div className="mt-3"><Badge>{t.tag}</Badge></div>}
              </div>
            ))}
          </div>

          <div className="mt-14 grid items-start gap-4 lg:grid-cols-2">
            {competencies.map((c) => (
              <div key={c.area} className={card}>
                <h3 className="mb-6 text-2xl font-semibold">{c.area}</h3>
                <div className="space-y-8">
                  {c.groups.map((g) => (
                    <div key={g.title}>
                      <h4 className="mb-4 font-semibold text-accent">{g.title}</h4>
                      <Bullets items={g.items} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experiencia" label="Experiência Profissional">
          <div className="space-y-6">
            {jobs.map((j) => (
              <article key={j.co} className={card}>
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{j.role}</h3>
                    <p className="text-accent">{j.co} · <span className="text-muted-foreground">{j.type}</span></p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{j.when} · {j.dur}</p>
                    <p>{j.where} · {j.mode}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-6">
                  {j.groups.map((g) => (
                    <div key={g.title || j.co}>
                      {g.title && <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">{g.title}</h4>}
                      <Bullets items={g.items} />
                    </div>
                  ))}
                </div>
                {projects.some((p) => p.org === j.co) && (
                  <a href="#projetos" className="mt-6 inline-block text-sm font-semibold text-accent transition-opacity hover:opacity-80">
                    Ver projetos liderados neste cargo →
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="projetos" label="Projetos">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.t} className={`${card} flex flex-col transition-all hover:-translate-y-1 hover:border-accent`}>
                <p className="text-xs font-semibold text-accent">{p.org}</p>
                <h3 className="mt-2 text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="formacao" label="Formação Acadêmica">
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.org} className={`${card} flex flex-wrap items-start justify-between gap-4`}>
                <div className="max-w-2xl">
                  <h3 className="font-semibold">{e.org}</h3>
                  <p className="text-sm">{e.course}</p>
                  {e.note && <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>}
                </div>
                <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">{e.when}<Badge>{e.status}</Badge></div>
              </div>
            ))}
          </div>
          <h3 className="mb-5 mt-14 text-2xl font-semibold">Voluntariado</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {volunteering.map((v) => (
              <div key={v.t} className={card}>
                <div className="flex items-start justify-between gap-3"><h4 className="font-semibold">{v.t}</h4><Badge>{v.status}</Badge></div>
                <p className="text-sm text-accent">{v.org}</p>
                <p className="text-xs text-muted-foreground">{v.when}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certificacoes" label="Licenças & Certificações">
          <div className="grid gap-3 md:grid-cols-2">
            {certs.map(([t, org, status, when], i) => (
              <div key={t} className={`${card} flex gap-4 p-5`}>
                <span className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <h4 className="font-semibold leading-snug">{t}</h4>
                  <p className="text-sm text-muted-foreground">{org}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3"><Badge>{status}</Badge>{when && <span className="text-xs text-muted-foreground">{when}</span>}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="recomendacoes" label="Recomendações Recebidas">
          <div className="grid gap-4 lg:grid-cols-3">
            {recommendations.map((r) => (
              <figure key={r.name} className={card}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold">{r.i}</span>
                  <div><p className="font-semibold">{r.name}</p><p className="text-xs text-muted-foreground">{r.title}</p></div>
                </div>
                <p className="mt-2 text-xs text-accent">{r.ctx}</p>
                <blockquote className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {r.text.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
                </blockquote>
              </figure>
            ))}
          </div>
        </Section>

        <Section id="contato" label="Contato">
          <h2 className="mb-10 text-3xl font-semibold md:text-5xl">Vamos conversar?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className={`${card} transition-colors hover:border-accent`}>
              <Linkedin className="h-5 w-5 text-accent" /><p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
              <p className="font-semibold">Abner Arruda</p><p className="text-sm text-muted-foreground">linkedin.com/in/abner-arruda10</p>
            </a>
            <a href={`mailto:${EMAIL}`} className={`${card} transition-colors hover:border-accent`}>
              <Mail className="h-5 w-5 text-accent" /><p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">E-mail</p>
              <p className="break-all font-semibold">{EMAIL}</p><p className="text-sm text-muted-foreground">Disponível para contato</p>
            </a>
            <a href={`tel:${PHONE_TEL}`} className={`${card} transition-colors hover:border-accent`}>
              <Phone className="h-5 w-5 text-accent" /><p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Telefone</p>
              <p className="font-semibold">{PHONE}</p><p className="text-sm text-muted-foreground">Ligação ou WhatsApp</p>
            </a>
          </div>

          <h3 className="mb-5 mt-14 text-2xl font-semibold">Idiomas</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className={card}>
              <Languages className="h-5 w-5 text-accent" />
              <p className="mt-3 font-semibold">Português</p>
              <p className="text-sm text-muted-foreground">Nativo</p>
            </div>
            <div className={card}>
              <Languages className="h-5 w-5 text-accent" />
              <p className="mt-3 font-semibold">Inglês</p>
              <p className="text-sm text-muted-foreground">Intermediário (em aprimoramento com aulas particulares)</p>
            </div>
          </div>
        </Section>
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">Abner Arruda · 2026 · Rio de Janeiro, Brasil</footer>
    </div>
  );
}
