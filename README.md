# Malha — Site institucional

Landing page da Malha (sites & automação para negócios locais).

## Stack

- React 19 + Vite 6
- React Router (modo biblioteca, `react-router-dom`) — pronto pra crescer para mais páginas
- Tailwind CSS v4
- Motion (Framer Motion)

Compatível com **Node 18.0.0 ou superior**.

## Rodando o projeto

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview   # pra testar o build localmente
```

Os arquivos finais ficam em `dist/`, prontos pra subir em qualquer hospedagem estática
(Vercel, Netlify, Cloudflare Pages, etc.).

## Editando o conteúdo

Todo o texto, números, tecnologias, trabalhos e contatos ficam em:

```
app/config/site.json
```

Edite esse arquivo — não precisa mexer em componente nenhum pra trocar textos,
adicionar um trabalho novo ou atualizar o WhatsApp.

## Reorganizando as seções

A ordem das seções da página é definida em `app/App.tsx`. Pra mudar a ordem,
mova as linhas dos componentes (`<Hero />`, `<WhatWeDo />`, etc.). Pra adicionar
uma seção nova, crie um componente em `app/components/sections/` seguindo o
padrão dos existentes (recebe `config` como prop) e inclua ele em `App.tsx`.

## Nota de segurança

O `react-router-dom` está fixado na série 6.x para manter compatibilidade com
Node 18 (a série 7.x exige Node 20+). Há um aviso de segurança de severidade
moderada (`npm audit`) nessa série, relacionado a redirecionamento aberto via
`<Link>`/`useNavigate` com URLs controladas pelo usuário — não se aplica aqui,
já que este site não usa links dinâmicos vindos de entrada do usuário. Se no
futuro migrarem para Node 20+, vale rodar `npm audit fix --force` pra ir pra
`react-router-dom@7`.
