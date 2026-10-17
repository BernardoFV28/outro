# OUTRO® — site

Site estático, sem build. Abra `index.html` ou publique a pasta inteira.

## 1. Configurar
Edite `config.js`: `instagram` (URL do perfil), `email` (contato) e `cadastroEndpoint`.

## 2. Cadastro de e-mails (grátis)
1. Crie conta em formspree.io e um formulário novo.
2. Copie a URL do formulário (https://formspree.io/f/xxxx) para `cadastroEndpoint`.
Sem endpoint, mas com `email` preenchido, o botão abre o app de e-mail do visitante. Sem nenhum dos dois, o site avisa que o cadastro não está ativo.

## 3. Domínio
Troque `https://SEU-DOMINIO.com.br` pelo seu domínio em todos os arquivos (canonical, og, sitemap, robots):
`grep -rl "https://SEU-DOMINIO.com.br" . | xargs sed -i 's#https://SEU-DOMINIO.com.br#https://SEUDOMINIO#g'` (Linux/macOS)

## 4. Hospedagem grátis
Cloudflare Pages ou GitHub Pages: envie esta pasta. O domínio próprio é opcional. A página `404.html` usa caminhos a partir da raiz, então funciona melhor em domínio próprio ou no subdomínio .pages.dev.

## 5. Pendências
Textos legais (rascunho): revisar antes da venda. Imagens: substituir `img/*.webp` por arquivos em alta resolução. Lighthouse e teste em celular: ainda não executados.
