# Portfólio — Abner Arruda

Código-fonte do site (React + TanStack Start + Tailwind CSS v4).

## Como rodar no seu computador

1. Instale o [Bun](https://bun.sh) (ou use npm).
2. Na pasta do projeto:
   ```
   bun install
   bun run dev
   ```
3. Abra o endereço que aparecer no terminal (geralmente `http://localhost:8080`).

Para gerar a versão final: `bun run build` (o resultado fica na pasta `dist`).

## Onde mexer

| O que você quer mudar | Arquivo |
| --- | --- |
| Textos: vagas, projetos, certificações, formação, recomendações, idiomas | `src/lib/portfolio-data.ts` |
| LinkedIn, e-mail e telefone (linhas 1 a 4) | `src/lib/portfolio-data.ts` |
| Layout, ordem das seções, botões | `src/routes/index.tsx` |
| Cores (fundo preto + azul-marinho) e fontes | `src/styles.css` |
| Título e descrição que aparecem no Google / WhatsApp | `head()` em `src/routes/index.tsx` |

## Sobre a sua foto

A foto já carrega do próprio pacote (`src/assets/abner-photo.jpg`), então funciona em qualquer lugar.

## Publicação no GitHub Pages

O build gera HTML estático (prerender ativado em `vite.config.ts`) na pasta `.output/public`.
O arquivo `.github/workflows/deploy.yml` compila e publica sozinho a cada push na branch `main`.

Uma vez só, no repositório: **Settings → Pages → Source: GitHub Actions**.

## Testes

`bunx vitest run`
