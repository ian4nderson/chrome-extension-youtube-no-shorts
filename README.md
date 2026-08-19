# YouTube No Shorts

Extensão para Google Chrome que remove os Shorts do YouTube automaticamente, permitindo que você navegue sem distrações verticais.

## Funcionalidades

- Remove vídeos Shorts da página inicial, dos resultados de busca e da grade de vídeos
- Remove as seções de Shorts (prateleiras) da página inicial
- Remove o botão "Shorts" da barra lateral de navegação
- Redireciona qualquer página `/shorts/` para o formato normal de visualização `/watch?v=`

## Instalação

1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/ian/youtube-no-shorts.git
   ```
2. Abra o Chrome e acesse `chrome://extensions/`
3. Ative o **Modo do desenvolvedor** (canto superior direito)
4. Clique em **Carregar sem compactação** e selecione a pasta do projeto
5. Pronto! A extensão já está ativa em `youtube.com`

## Como funciona

A extensão é um `content_script` (Manifest V3) que roda em todas as páginas do YouTube:

- `content.js` — Remove os elementos de Shorts do DOM e redireciona páginas `/shorts/`. Um `MutationObserver` garante que novos Shorts carregados dinamicamente pela SPA do YouTube também sejam removidos.
- `styles.css` — Oculta via CSS os componentes de Shorts (barra lateral, prateleiras e lockups) com `display: none !important`.

## Estrutura

```
├── manifest.json   # Configuração da extensão (Manifest V3)
├── content.js      # Lógica de remoção e redirecionamento
├── styles.css      # Estilos para ocultar componentes de Shorts
└── icons/          # Ícones da extensão (16, 48 e 128 px)
```
