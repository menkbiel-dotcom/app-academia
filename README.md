# Diário de Treino

App web para organizar rotinas de academia, registrar séries e acompanhar a evolução dos exercícios.

**Acesse:** [menkbiel-dotcom.github.io/app-academia](https://menkbiel-dotcom.github.io/app-academia/)

## O que você pode fazer

- Criar dias ou rotinas de treino e adicionar exercícios a cada dia.
- Registrar carga, repetições e tipo de série: **A** (aquecimento), **N** (normal) ou **F** (falha).
- Acompanhar recordes pessoais e comparar com registros anteriores.
- Iniciar, pausar e encerrar uma sessão. O cronômetro só começa quando você inicia o treino.
- Usar o temporizador de descanso entre as séries.
- Ver o gráfico de evolução escolhendo um exercício na aba **Evolução**.
- Consultar dias e sessões anteriores na aba **Calendário**.
- Ver um resumo semanal de treinos, séries e dias ativos.
- Trocar a unidade de carga entre kg e lb.
- Exportar e importar um backup pelo menu de três pontos.

## No celular

A interface se adapta a telas pequenas e tem navegação na parte inferior.

Você também pode adicionar o app à tela inicial:

- **Android (Chrome):** abra o app, toque no menu do navegador e escolha **Instalar app** ou **Adicionar à tela inicial**.
- **iPhone/iPad (Safari):** toque em **Compartilhar** e escolha **Adicionar à Tela de Início**.

Após abrir o app uma vez, os arquivos do aplicativo ficam disponíveis para uso offline. Os dados ficam armazenados no navegador do dispositivo.

## Dados e privacidade

O histórico de treino é salvo localmente no navegador por meio do armazenamento do próprio dispositivo. Nesta versão, os dados não são sincronizados entre aparelhos nem enviados para uma conta na nuvem. Para transferir ou proteger seus registros, use **Exportar backup** no menu de três pontos e guarde o arquivo em um local seguro.

Limpar os dados do navegador ou desinstalar o navegador pode apagar o histórico local. Importar um backup restaura os registros contidos naquele arquivo.

## Publicação

O app está publicado pelo GitHub Pages em:

https://menkbiel-dotcom.github.io/app-academia/

O repositório publica a branch `main` a partir da pasta raiz. Não é necessário instalar dependências ou executar um processo de build: o app usa HTML, CSS e JavaScript no navegador.

## Arquivos principais

- `index.html` — interface e funcionalidades do app.
- `manifest.json` — nome, ícones e configuração para instalação.
- `service-worker.js` — cache dos arquivos do app para acesso offline.
- `icons/` — ícones usados pelo app instalado.
