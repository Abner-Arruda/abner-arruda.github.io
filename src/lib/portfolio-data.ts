export const LINKEDIN = "https://www.linkedin.com/in/abner-arruda10";
export const EMAIL = "abnergustavoarruda@gmail.com";
export const PHONE = "(21) 98594-0662";
export const PHONE_TEL = "+5521985940662";

export const timeline = [
  { when: "Abr 2022 — Fev 2025", org: "Cefet/RJ", role: "Ensino Médio Técnico em Informática", desc: "Base técnica em informática e primeiro contato com projetos de extensão e voluntariado." },
  { when: "Dez 2023 — Nov 2024", org: "Prefeitura de Nova Iguaçu", role: "IT Intern", desc: "Suporte técnico, plataforma de denúncias anônimas e presença digital institucional." },
  { when: "Dez 2024 — Nov 2025", org: "Fresenius Medical Care", role: "L2 Support Analyst", desc: "Controle de acessos, Active Directory, Microsoft 365 / Office 365, Okta (MFA), FortiClient VPN e KACE." },
  { when: "Mar 2025 — Set 2026", org: "Grupo Anchieta", role: "Tecnólogo em Segurança da Informação", desc: "Primeira formação superior em Cibersegurança; trancado para migrar ao bacharelado no Instituto Infnet.", tag: "Trancado" },
  { when: "Nov 2025 — Presente", org: "Open Co", role: "Infrastructure & Security Analyst", desc: "Blue Team (SIEM Wazuh, EDR, MITRE ATT&CK), IAM, gestão de vulnerabilidades, baselines CIS, SGSI (ISO 27001) e projetos de migração.", tag: "Posição atual" },
  { when: "Out 2026 — Out 2030", org: "Instituto Infnet", role: "Bacharelado em Engenharia de Software", desc: "Ênfase em Cibersegurança.", tag: "Em andamento" },
];

export const stack: [string, string][] = [
  ["IAM", "CyberArk (SSO · MFA · PAM) · Active Directory / Adaxes · Microsoft Entra ID · Intune · Okta · RBAC · SoD"],
  ["Cloud & Dados", "AWS IAM · GCP IAM · Secret Manager · Cloud Run · BigQuery · RDS · DocumentDB · SQL Server"],
  ["Colaboração & SaaS", "Google Workspace · Microsoft 365 / Office 365 · GitHub · Slack"],
  ["Segurança", "Wazuh (SIEM · HIDS · SCA) · SentinelOne (EDR) · ESET · Action1 · GoPhish · FortiGate · AWS Client VPN · FortiClient VPN"],
  ["Infraestrutura", "Windows Server · Linux · Active Directory · GPO · DNS · DHCP · WSUS"],
  ["Frameworks", "MITRE ATT&CK · CIS Benchmarks · ISO/IEC 27001 · ISO/IEC 27002 · LGPD"],
  ["Automação & APIs", "REST APIs · Webhooks · PowerShell · Python · Bash · SQL · n8n · Slack Workflow Builder · AppSheet · Terraform"],
  ["ITSM & Endpoints", "GLPI · Jira Service Management · ServiceNow · Action1 RMM · KACE"],
  ["Documentação & Suporte", "WikiJS · Confluence · Getscreen · TeamViewer · AnyDesk"],
];

export const competencies: { area: string; groups: { title: string; items: string[] }[] }[] = [
  {
    area: "Segurança da Informação",
    groups: [
      { title: "Blue Team / Operações de Segurança", items: [
        "Monitoramento, triagem e investigação de alertas e incidentes com Wazuh (SIEM), SentinelOne (EDR) e ESET (antivírus)",
        "Extração de dados do SIEM para identificação de eventos, com alertas mapeados ao MITRE ATT&CK e apoio de consultas SQL",
        "Investigação de acessos suspeitos e logins anômalos com CyberArk (Idira), Wazuh e SentinelOne",
        "Administração da proteção de endpoints (Windows, Linux e macOS): políticas, Device Control e tratamento de ameaças",
        "Gestão de vulnerabilidades com varreduras periódicas (Action1) e acompanhamento da remediação",
        "Baselines de segurança: avaliação de conformidade via Wazuh SCA (CIS Benchmarks), patches e criptografia de disco (BitLocker e FileVault)",
        "Assessments de segurança de novas ferramentas, integrações e fornecedores SaaS, com proposição de controles",
        "Segurança de e-mail: políticas antispam e antiphishing no Google Workspace",
        "Administração da segurança das ferramentas corporativas: configurações, autenticação, integrações e controles",
        "Gestão do fornecedor de redes dos escritórios: firewall FortiGate, redes wireless (Wi-Fi) e SD-WAN",
        "Monitoramento de KPIs de segurança e proposição de melhorias na postura de segurança com base em riscos e tendências de ameaças",
      ] },
      { title: "IAM & IGA", items: [
        "Ciclo de vida de identidades (Joiner, Mover, Leaver) em AD, Entra ID, Google Workspace, AWS, GCP, GitHub e SaaS",
        "Administração do AD híbrido via Adaxes; Intune e Conditional Access; SSO, MFA, provisionamento e PAM com CyberArk",
        "Modelagem de RBAC e SoD com privilégio mínimo; recertificação e revisão de privilégios e contas administrativas",
        "Análise e aprovação de requisições de acesso via GLPI",
        "Acessos em cloud e dados: IAM GCP/AWS, BigQuery, RDS, DocumentDB e service accounts",
        "Automação de fluxos de acesso via API (Slack, GLPI, Action1)",
        "Auditorias ISO 27001, controles compensatórios",
      ] },
      { title: "ISO/IEC 27001, LGPD & SGSI", items: [
        "Monitoramento de indicadores e suporte a auditorias internas e externas",
        "Controles de infraestrutura física",
        "Elaboração, revisão e implementação de políticas, normas, procedimentos e fluxos",
        "Acompanhamento dos planos de resposta a incidentes e continuidade do negócio",
      ] },
      { title: "Conscientização", items: [
        "Campanhas de phishing simulado com GoPhish: montagem, envio e metrificação",
        "Conteúdos educativos e treinamentos de segurança",
      ] },
    ],
  },
  {
    area: "Infraestrutura",
    groups: [
      { title: "Servidores, AD & Ativos", items: [
        "Administração de Active Directory híbrido, DNS, DHCP e WSUS",
        "Windows Server em AWS EC2 (RDP, SQL Server, pastas e serviços) e servidores Linux",
        "Gestão do parque de ativos de TI — disponibilidade, padronização e continuidade",
        "Troubleshooting de endpoints; suporte remoto via Getscreen/TeamViewer",
        "Atendimento de chamados via GLPI com SLA, RCA e consultas SQL",
        "Gestão dos agentes de RMM e segurança de endpoints (Action1, Wazuh, SentinelOne e ESET)",
        "Focal point em incidentes críticos e suporte ao Service Desk",
      ] },
      { title: "Stack & Ferramentas", items: stack.map(([t, d]) => `${t} — ${d}`) },
      { title: "Atuação Transversal", items: [
        "Parceria com times multidisciplinares: SRE, DataOps, Produto, Jurídico, People, Financeiro e C-Level",
        "Fortalecimento da cultura de segurança e governança de acessos",
      ] },
    ],
  },
];

export const jobs = [
  {
    co: "Open Co", type: "Full-time", when: "Nov 2025 – Presente", dur: "1 ano", where: "Botafogo, Rio de Janeiro", mode: "Híbrido",
    role: "Infrastructure & Security Analyst",
    groups: [
      { title: "Atuação Transversal", items: ["Atuação em Blue Team (operações de segurança), IAM e Infraestrutura, junto a SRE, DataOps, Desenvolvimento, Produto, Jurídico, People, Financeiro e C-Level, fortalecendo a cultura de segurança e governança de acessos"] },
      { title: "Blue Team / Operações de Segurança", items: [
        "Monitoramento, triagem e investigação de alertas e incidentes de segurança com Wazuh (SIEM), SentinelOne (EDR) e ESET (antivírus)",
        "Extração de informações do SIEM para identificação e análise de eventos, com alertas mapeados ao MITRE ATT&CK e consultas SQL",
        "Investigação de acessos suspeitos e logins anômalos com CyberArk (Idira), Wazuh e SentinelOne",
        "Proteção de endpoints Windows, Linux e macOS: cobertura, políticas, Device Control, quarentenas, falsos positivos e tratamento de ameaças",
        "Gestão de vulnerabilidades com varreduras periódicas via Action1, priorização por risco e acompanhamento da remediação",
        "Avaliação de conformidade de servidores e endpoints com baselines de segurança via Wazuh SCA (CIS Benchmarks)",
        "Conformidade de ativos: patches, configurações e controle mensal de criptografia de disco (BitLocker e FileVault) no SGSI",
        "Assessments de segurança de novas ferramentas, integrações e fornecedores SaaS, com parecer técnico e proposição de controles",
        "Segurança de e-mail: configuração de políticas antispam e antiphishing no Google Workspace",
        "Administração da segurança das ferramentas corporativas, revisando configurações, autenticação, integrações e controles de segurança",
        "Gestão do fornecedor terceirizado de redes dos escritórios: firewall FortiGate, redes wireless (Wi-Fi) e SD-WAN",
        "Proposição de melhorias na postura de segurança com base em riscos, vulnerabilidades e tendências de ameaças",
        "Conscientização com GoPhish: campanhas de phishing simulado, métricas e treinamentos",
      ] },
      { title: "IAM & IGA", items: [
        "Ciclo de vida de identidades (Joiner, Mover, Leaver): provisionamento e desprovisionamento em Active Directory, Entra ID, Google Workspace, AWS, GCP, GitHub e SaaS",
        "AD híbrido via Adaxes: usuários, grupos, OUs, permissões e licenças; Intune e Conditional Access",
        "Integração de aplicações ao IAM (CyberArk) com SSO, MFA e provisionamento; PAM e políticas de acesso",
        "Governança de acessos: RBAC e SoD com privilégio mínimo, recertificação e revisão de contas privilegiadas",
        "Análise, aprovação e atendimento de requisições de acesso via GLPI",
        "Acessos a cloud e dados: GCP/AWS IAM, BigQuery, RDS, DocumentDB, service accounts, Secret Manager e VPN por grupos do AD",
        "Normas e procedimentos de administração de acessos",
      ] },
      { title: "GRC", items: [
        "ISO 27001 e LGPD: políticas, normas, procedimentos e indicadores do SGSI",
        "Suporte a auditorias ISO 27001: evidências, planos de ação e controles compensatórios",
        "Acompanhamento dos planos de resposta a incidentes e continuidade do negócio",
      ] },
      { title: "Infraestrutura & Automação", items: [
        "Administração de Active Directory híbrido, DNS, DHCP e WSUS; Windows Server em AWS EC2 (RDP, SQL Server, pastas e serviços) e servidores Linux",
        "Gestão do parque de TI e endpoints; troubleshooting N2, análise de causa raiz e consultas SQL; GLPI (ITIL/SLA)",
        "Gestão de agentes RMM/EDR (Action1, Wazuh, SentinelOne e ESET); ponto focal em incidentes críticos",
        "Automações via API e PowerShell: sincronização de cargos Slack ↔ Adaxes e integração Slack ↔ GLPI",
      ] },
      { title: "Projetos & Resultados", items: [
        "Migração do RMM (ManageEngine → Action1) em 100% do parque, com instalação em massa via API — economia de R$ 50 mil/ano",
        "Migração do ITSM (Jira → GLPI) sem interrupção, com portais de Service Desk, Acessos e Incidentes — economia de R$ 30 mil/ano",
        "Monitoramento automatizado de agentes RMM/EDR via API, com relatórios no Slack e 100% de cobertura do parque",
        "Conformidade de criptografia de disco (BitLocker/FileVault) em 100% dos endpoints",
        "RBAC + SoD na migração Confluence → WikiJS",
      ] },
    ],
  },
  {
    co: "Fresenius Medical Care", type: "Full-time", when: "Dez 2024 – Nov 2025", dur: "1 ano", where: "Barra da Tijuca, Rio de Janeiro", mode: "Presencial",
    role: "L2 Support Analyst",
    groups: [{ title: "", items: [
      "Controle de acessos e permissões administrativas conforme políticas de Segurança da Informação, apoiando a prevenção de vulnerabilidades",
      "Administração de identidades em Active Directory, Microsoft 365 / Office 365 (contas e licenças) e Okta (MFA)",
      "Configuração e suporte ao FortiClient VPN para acesso remoto seguro",
      "Suporte na migração de domínio Microsoft (Windows, Microsoft 365, Teams e OneDrive)",
      "Chamados no ServiceNow, inventário de ativos no KACE e implantação de imagens de sistema operacional",
      "Troubleshooting de estações Windows: perfis, permissões, drivers e suporte remoto",
    ] }],
  },
  {
    co: "Prefeitura de Nova Iguaçu", type: "Estágio", when: "Dez 2023 – Nov 2024", dur: "1 ano", where: "Nova Iguaçu, Rio de Janeiro", mode: "Híbrido",
    role: "Information Technology Intern",
    groups: [{ title: "", items: [
      "Suporte técnico em hardware, software e infraestrutura (cabeamento e estações), manutenção de computadores e help desk",
      "Desenvolvimento e manutenção do site institucional de denúncias anônimas",
      "Atendimento a usuários internos e externos e elaboração de relatórios operacionais",
    ] }],
  },
];

export const projects = [
  { t: "Implantação do RMM Action1", org: "Open Co", d: "Responsável de ponta a ponta por prospectar, validar e executar a migração massiva da solução de monitoramento (ManageEngine para Action1) em todos os endpoints, com instalação em massa dos agentes via API e monitoramento contínuo com reports automáticos no Slack. A nova solução padronizou patches e varreduras de vulnerabilidades, manteve os padrões de segurança do parque e resultou em uma redução de custos de R$ 50.000 ao ano.", tags: ["Action1", "ManageEngine", "RMM", "Vulnerabilidades", "API", "Slack"] },
  { t: "Migração ITSM: Jira → GLPI", org: "Open Co", d: "Condução integral do projeto de migração de plataforma, executado em paralelo ao ambiente legado, garantindo que não houvesse interrupção ou queda na operação de suporte. A transição e reestruturação dos fluxos de Requisição de Acessos e Incidentes de Segurança geraram uma economia de R$ 30.000 anuais para a organização.", tags: ["GLPI", "Jira", "ITSM", "Service Desk", "Migração"] },
  { t: "Conscientização com GoPhish", org: "Open Co", d: "Administração da plataforma GoPhish com montagem, envio e metrificação de campanhas de phishing simulado (abertura, clique e reporte), apoiando treinamentos de conscientização e a redução de riscos de engenharia social entre os colaboradores.", tags: ["GoPhish", "Phishing", "Conscientização", "Métricas", "Blue Team"] },
  { t: "Baselines & Conformidade de Endpoints", org: "Open Co", d: "Avaliação contínua de servidores e endpoints contra baselines de segurança com Wazuh SCA (CIS Benchmarks), somada ao controle mensal de criptografia de disco (BitLocker/FileVault), que chegou a 100% dos endpoints em conformidade, e ao monitoramento automatizado da cobertura de agentes RMM/EDR via API com relatórios no Slack.", tags: ["Wazuh SCA", "CIS Benchmarks", "BitLocker", "FileVault", "Hardening", "Blue Team"] },
  { t: "Modelagem RBAC: Confluence → WikiJS", org: "Open Co", d: "Modelagem de controle de acesso baseado em funções (RBAC) e aplicação de Segregação de Funções (SoD) na migração da base de conhecimento corporativo do Confluence para o WikiJS, garantindo que cada perfil acesse estritamente o necessário.", tags: ["RBAC", "SoD", "WikiJS", "Confluence", "IAM"] },
  { t: "Automações de Acesso via API", org: "Open Co", d: "Manutenção da automação de sincronização de cargos com o Slack via API, com diagnóstico da falha causada por token expirado e restabelecimento da atualização dos atributos de identidade (Mover). Integração de formulários do Slack com a API do GLPI para abertura automática de requisições de acesso e chamados.", tags: ["API", "Slack", "GLPI", "n8n", "IAM"] },
  { t: "Sistema de Gestão de Ativos", org: "Open Co", d: "Desenvolvimento de um sistema interno de gestão de ativos de TI com a plataforma AppSheet (no-code), integrando dados de inventário e automações para controle e rastreabilidade de todo o parque tecnológico da empresa.", tags: ["AppSheet", "No-Code", "Gestão de Ativos", "Automação"] },
  { t: "Políticas & Documentação de Segurança", org: "Open Co", d: "Elaboração, revisão e implementação de políticas de segurança da informação, procedimentos operacionais e fluxos de trabalho alinhados à ISO/IEC 27001, com foco em melhoria contínua e automação de processos de segurança.", tags: ["ISO 27001", "Políticas", "SGSI", "Documentação", "Automação"] },
  { t: "Site de Denúncias Anônimas", org: "Prefeitura de Nova Iguaçu", d: "Apoio no desenvolvimento de plataforma digital para denúncias anônimas, contribuindo para a modernização dos processos institucionais e melhoria da comunicação digital da Prefeitura Municipal de Nova Iguaçu com a população.", tags: ["Desenvolvimento Web", "Setor Público", "Privacidade", "Digital"] },
];

export const education = [
  { org: "Instituto Infnet", course: "Bacharelado em Engenharia de Software, Ênfase em Cibersegurança", when: "Out 2026 – Out 2030", status: "Em andamento" },
  { org: "Grupo Anchieta", course: "Curso Superior de Tecnologia (CST) em Segurança da Informação", when: "Mar 2025 – Set 2026", status: "Trancado", note: "Curso trancado, migração para Engenharia de Software com ênfase em Cibersegurança no Instituto Infnet." },
  { org: "Cefet/RJ — Centro Federal de Educação Tecnológica Celso Suckow da Fonseca", course: "Ensino Médio Técnico em Informática", when: "Abr 2022 – Fev 2025", status: "Concluído" },
];

export const volunteering = [
  { t: "Google Student Ambassador", org: "Google · Programa Estudantes Embaixadores do Google 2026", when: "Ago 2026 – Dez 2026 · 5 meses · Ciência e Tecnologia", status: "Ativo", d: "Comunidade educacional que conecta estudantes de todo o país para trocar experiências e aprendizados práticos sobre o Google Gemini. Uma jornada prática de capacitação digital e liderança que transforma estudantes universitários apaixonados por tecnologia em referências locais de IA." },
  { t: "Projeto de Extensão PEEXT 2023 — Turing", org: "Cefet/RJ", when: "Mai 2023 – Dez 2023 · 8 meses · Ciência e Tecnologia", status: "Concluído", d: "Suporte técnico à comunidade acadêmica: conserto e manutenção de computadores, restauração de aparelhos e instalação de software para alunos e professores do Cefet/RJ." },
];

export const certs: [string, string, string, string?][] = [
  ["CompTIA Security+", "CompTIA — estudando para a prova", "Em andamento", "2026"],
  ["Gestão de Identidades Digitais na Era da IA", "IBSEC — Instituto Brasileiro de Cibersegurança", "Concluído", "Jul 2026 · Expira Jul 2029"],
  ["Introduction to AWS Identity and Access Management (IAM)", "Amazon Web Services (AWS)", "Concluído", "Mar 2026"],
  ["AWS Cloud Practitioner Essentials", "Amazon Web Services (AWS)", "Em andamento"],
  ["Google Cloud Associate Cloud Engineer — Preparatório", "Udemy", "Em andamento"],
  ["The Age of AI: Machine Learning, LLMs, Generative AI, and Agents", "DIO — Bootcamp de Cibersegurança", "Concluído", "Mar 2026"],
  ["Fundamentals of Large-Scale Language Models", "DIO — Bootcamp de Cibersegurança", "Concluído", "Mar 2026"],
  ["Introduction to Prompt Engineering", "DIO", "Concluído", "Fev 2026"],
  ["Formação Claude Code 2026: IA com Claude e Cowork", "Udemy", "Concluído", "2026"],
  ["Jira Software: Projetos Completos com Scrum", "Udemy", "Concluído", "2026"],
  ["Ágil Scrum — O Guia Prático e Definitivo", "Udemy", "Concluído", "2026"],
  ["Formação Linux Completa: Do Básico ao Avançado", "Udemy", "Em andamento"],
  ["Cybersecurity: Fundamentals and Integrated Practices", "Alura", "Concluído", "Mai 2025"],
  ["Introduction to Cybersecurity", "Cisco Networking Academy", "Concluído", "Fev 2025"],
  ["Linux", "Cisco Networking Academy", "Concluído"],
  ["Python para Análise de Dados e Automação", "Hashtag Treinamentos", "Concluído", "2025"],
  ["Inteligência Artificial para Simplificar o Dia a Dia", "ENAP — Escola Nacional de Administração Pública", "Concluído", "2025"],
  ["Suporte Técnico na Prática", "Udemy", "Concluído"],
];

export const recommendations = [
  { i: "AC", name: "Alan Cardoso", title: "Analista de Segurança da Informação Sênior", ctx: "Trabalharam juntos na equipe de Infra Corporativa · Mar 2026", text: [
    "Tive o privilégio de trabalhar ao lado de Abner Arruda na equipe de Infra Corporativa. Nesse período, pude acompanhar de perto sua postura profissional, curiosidade técnica e, principalmente, seu forte engajamento em evoluir na área de Tecnologia e Segurança.",
    "Mesmo atuando como profissional júnior em Infra/Service Desk, Abner sempre demonstrou interesse genuíno em Segurança da Informação. Ele constantemente buscava entender melhor os processos e práticas da área, se voluntariando para apoiar demandas relacionadas à segurança sempre que possível, sem deixar de lado suas responsabilidades do dia a dia.",
    "Algo que se destaca é sua atitude proativa: quando havia momentos de menor demanda operacional, ele aproveitava para estudar, aprofundar conhecimentos ou trocar ideias com profissionais mais experientes da área. Essa postura demonstra maturidade, disciplina e uma clara intenção de construir experiência prática em Segurança da Informação.",
    "Abner é um profissional aplicado, com forte senso de responsabilidade e grande vontade de aprender. Tenho certeza de que, mantendo essa dedicação e consistência, sua trajetória na área de Segurança da Informação será muito bem-sucedida.",
  ] },
  { i: "YM", name: "Yuri Melo", title: "Software Engineer · React · Typescript · Node.js · C# .NET", ctx: "Estudaram juntos no Cefet/RJ · Fev 2026", text: [
    "Tive a oportunidade de trabalhar com o Abner e posso afirmar que é um excelente profissional. Sempre demonstrou ser uma pessoa atenciosa, tranquila e muito respeitosa no dia a dia, o que contribui bastante para um ambiente de trabalho positivo.",
    "Além disso, é focado em suas responsabilidades, comprometido com os resultados e está sempre disposto a ajudar o time. Abner também se destaca por motivar as pessoas ao seu redor, mantendo uma postura colaborativa e profissional mesmo em momentos de pressão.",
    "Sem dúvidas, é alguém confiável, dedicado e que agrega valor à equipe e aos projetos em que participa. Recomendo seu trabalho com total confiança.",
  ] },
  { i: "JV", name: "João Vitor", title: "Desenvolvedor Full Stack · Next.js · React · TypeScript · Node.js · Supabase · UI/UX Designer", ctx: "Estudaram juntos no Cefet/RJ · Fev 2026", text: [
    "Tive a oportunidade de estudar com Abner Arruda no Ensino Médio Técnico em Informática no Cefet. Durante esse período, ele sempre demonstrou comprometimento, responsabilidade e grande interesse em aprofundar seus conhecimentos na área de tecnologia.",
    "Abner se destaca pela facilidade em aprender novos conteúdos, pela organização na execução das atividades e pela postura colaborativa em trabalhos em equipe. É uma pessoa dedicada, proativa e que busca constantemente evoluir tanto no aspecto técnico quanto pessoal.",
    "Tenho plena confiança no potencial dele e acredito que será um excelente profissional na área de Tecnologia da Informação, agregando valor por onde passar.",
  ] },
];
