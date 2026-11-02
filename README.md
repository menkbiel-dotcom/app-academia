# Diário de Treino

App web para organizar rotinas de academia, registrar séries e acompanhar a evolução dos exercícios.

**Acesse:** [menkbiel-dotcom.github.io/app-academia](https://menkbiel-dotcom.github.io/app-academia/)

## Funcionalidades

- Crie rotinas reutilizáveis e duplique uma rotina para montar variações.
- Registre carga, repetições e tipo da série: **A** (aquecimento), **N** (normal) ou **F** (falha).
- Ao abrir um exercício, veja carga e repetições da última sessão para agilizar o registro.
- Marque séries concluídas para iniciar o descanso automático, configurável por exercício.
- Registre uma nota por sessão e o RPE (esforço percebido de 1 a 10) em cada série.
- Acompanhe a evolução por **1RM estimado**, **maior carga**, **repetições** ou **volume**.
- Veja recordes pessoais e históricos dos exercícios.
- Inicie, pause e encerre sessões. Ao encerrar, veja duração, exercícios, séries, volume e novos recordes.
- Consulte sessões anteriores e duração no calendário e veja o resumo semanal.
- Alterne entre kg e lb.
- Exporte e importe backups pelo menu de três pontos.

## Uso no celular

A interface se adapta a telas pequenas e oferece navegação na parte inferior.

Você pode adicionar o app à tela inicial:

- **Android (Chrome):** abra o app, toque no menu do navegador e escolha **Instalar app** ou **Adicionar à tela inicial**.
- **iPhone/iPad (Safari):** toque em **Compartilhar** e escolha **Adicionar à Tela de Início**.

Depois de abrir o app uma vez, os arquivos do aplicativo ficam disponíveis para uso offline.

## Dados e privacidade

O histórico fica salvo localmente no navegador do dispositivo. Nesta versão, os dados não são sincronizados entre aparelhos nem enviados para uma conta na nuvem. Para transferir ou proteger seus registros, use **Exportar backup** e guarde o arquivo em um local seguro.

Limpar os dados do navegador ou desinstalá-lo pode apagar o histórico local. Importar um backup substitui os dados existentes neste navegador pelos dados do arquivo.

## Publicação

O app está publicado pelo GitHub Pages:

https://menkbiel-dotcom.github.io/app-academia/

A branch `main` é publicada a partir da pasta raiz. Não é necessário instalar dependências nem executar um processo de build.

## Arquivos principais

- `index.html` — interface e funcionalidades do app.
- `manifest.json` — nome, ícones e configuração para instalação.
- `service-worker.js` — cache dos arquivos do app para acesso offline.
- `icons/` — ícones usados pelo app instalado.
