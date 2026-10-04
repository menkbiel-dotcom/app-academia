[README.md](https://github.com/user-attachments/files/33037888/README.md)
# app-academia
registre seus treinos e muito mais
# 🏋️ Diário de Treino

App web para registrar treinos de academia: exercícios, séries, carga, repetições e recordes pessoais (PR). Funciona 100% no navegador, é instalável como app (PWA) e funciona offline.

## Funcionalidades

- **Dias de treino** — organize os exercícios por dia (Peito, Costas, Perna, etc).
- **Busca de exercícios** — mais de 60 exercícios comuns já sugeridos ao digitar.
- **Séries múltiplas** — registre várias séries de um exercício de uma vez.
- **Classificação de série** — marque cada série como Aquecimento (A), Normal (N) ou Falha (F).
- **Recorde pessoal (PR)** — calculado automaticamente pela força estimada (1RM, fórmula de Epley), avisando quando você bate um novo recorde.
- **Gráfico de evolução** — acompanhe a evolução de cada exercício ao longo do tempo.
- **Funciona offline** — depois da primeira visita, o app abre mesmo sem internet.
- **Instalável** — pode ser adicionado à tela inicial do celular como um app nativo.

## Como usar (sem instalar nada)

Basta abrir o `index.html` em qualquer navegador. Todos os dados ficam salvos localmente no seu navegador (`localStorage`) — nada é enviado para nenhum servidor.

## Como publicar no GitHub Pages (pra virar um "app" instalável)

1. Crie um repositório no GitHub e envie todos os arquivos desta pasta para ele.
2. No repositório, vá em **Settings → Pages**.
3. Em "Source", selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
4. Salve. Em alguns minutos o GitHub vai te dar um link tipo:
   `https://seu-usuario.github.io/nome-do-repositorio/`
5. Abra esse link no celular. No Chrome (Android), vai aparecer a opção **"Adicionar à tela inicial" / "Instalar app"** no menu do navegador. No Safari (iOS), use **Compartilhar → Adicionar à Tela de Início**.
6. Pronto — o app abre em tela cheia, com ícone próprio, como se fosse baixado de uma loja.

## Estrutura dos arquivos

```
├── index.html          → o app inteiro (interface + lógica)
├── manifest.json        → configuração do PWA (nome, ícone, cores)
├── service-worker.js    → cache para funcionamento offline
├── icons/                → ícones do app em vários tamanhos
└── README.md
```

## Observações importantes

- **Os dados são salvos no navegador de cada pessoa**, não em um banco compartilhado. Se você compartilhar o link com amigos, cada um terá seu próprio histórico de treino, isolado do dos outros.
- Se limpar os dados do navegador ou trocar de celular, o histórico local se perde — não há backup em nuvem nesta versão.
- Não é necessário nenhum servidor, banco de dados ou build step — é só HTML, CSS e JavaScript puro.

## Tecnologias

Nenhuma dependência externa: HTML, CSS e JavaScript puro (vanilla), com Service Worker e Web App Manifest para o comportamento de PWA.
