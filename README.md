# Portfólio Marcos Martins

Este portfólio apresenta o trabalho e as habilidades de Marcos Martins, um estudante de programação apaixonado com grande interesse em projetos de código aberto, desenvolvimento web e aprendizado contínuo.

## Tecnologias Utilizadas

- **React:** Uma biblioteca JavaScript para construir interfaces de usuário.
- **Vite:** Uma ferramenta de build que proporciona uma experiência de desenvolvimento rápida e otimizada.
- **CSS Modules:** Utilizado para estilizar componentes React com CSS modular e reutilizável.
- **JavaScript:** A linguagem de programação principal para desenvolvimento web.
- **HTML:** A linguagem de marcação padrão para criar páginas web.

## Seções

O portfólio é dividido nas seguintes seções:

- **Hero:** Apresenta Marcos Martins com uma foto de perfil, nome, título e links para perfis de mídia social. Inclui uma alternância de tema para modos claro e escuro.
- **Projetos:** Uma vitrine dos projetos de Marcos Martins (atualmente em desenvolvimento).
- **Habilidades:** Destaca as habilidades técnicas de Marcos Martins, incluindo HTML, CSS, JavaScript, TypeScript, React, Node, Tailwind CSS, Git e Bootstrap.
- **Contato:** Um formulário de contato para os visitantes enviarem mensagens para Marcos Martins.
- **Rodapé:** Uma seção de rodapé com um aviso de direitos autorais.

## Assets

O diretório `assets` contém várias imagens, ícones e o CV:

- `checkmark-dark.svg`, `checkmark-light.svg`: Ícones usados na seção Habilidades.
- `cv.pdf`: O currículo vitae de Marcos Martins.
- `Design uten navn (1).png`, `Design uten navn (2).png`, `Design uten navn.png`: Imagens.
- `fitlift.png`, `fresh-burger.png`, `hipsster.png`, `viberr.png`: Imagens de projetos (atualmente não em uso).
- `github-dark.svg`, `github-light.svg`, `linkedin-dark.svg`, `linkedin-light.svg`, `twitter-dark.svg`, `twitter-light.svg`: Ícones de mídia social.
- `moon.svg`, `sun.svg`: Ícones para a alternância de tema.
- `hero-img.png`: Imagem do Hero.

## Contexto do Tema

O aplicativo usa um contexto de tema ([`src/common/ThemeContext.jsx`](src/common/ThemeContext.jsx)) para gerenciar o tema (modo claro ou escuro). O tema é armazenado no armazenamento local para persistir a preferência do usuário.

## Estilização

O aplicativo usa CSS Modules para estilização. Cada seção tem seu próprio módulo CSS (por exemplo, [`src/sections/Hero/HeroStyles.module.css`](src/sections/Hero/HeroStyles.module.css)).

## Scripts

O arquivo `package.json` inclui os seguintes scripts:

- `dev`: Executa o servidor de desenvolvimento.
- `build`: Compila o aplicativo para produção.
- `lint`: Executa o ESLint para verificar problemas de qualidade do código.
- `preview`: Visualiza o aplicativo compilado.

## Melhorias Futuras

- Popular a seção Projetos com projetos reais.
- Adicionar mais habilidades à seção Habilidades.
- Implementar o envio de formulário para a seção Contato.
- Melhorar o design geral e a responsividade do portfólio.
