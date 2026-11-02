# Diário de Treino

App web para organizar rotinas de academia, registrar séries e acompanhar o progresso.

**Acesse:** [menkbiel-dotcom.github.io/app-academia](https://menkbiel-dotcom.github.io/app-academia/)

## Navegação

- **Treino:** rotinas reutilizáveis, séries, descanso, superséries e metas de repetições.
- **Evolução:** histórico e gráficos por 1RM estimado, maior carga, repetições ou volume.
- **Calendário:** treinos registrados e duração das sessões concluídas.
- **Análises:** séries da última semana por grupo muscular.
- **Medidas:** peso corporal, cintura, peito, quadril, braço e coxa, com gráficos.
- **Ferramentas:** calculadora de anilhas e compartilhamento/exportação de uma rotina ou resumo de treino.

## Recursos de treino

- Carga, repetições, tipo da série: **A** (aquecimento), **N** (normal) ou **F** (falha).
- Sugestão dos valores registrados na sessão anterior do exercício.
- RPE opcional de 1 a 10 por série e notas por sessão.
- Descanso automático configurável para cada exercício.
- Superséries/circuitos identificados por grupos. Ao concluir uma série, a tela avança para o próximo exercício do mesmo grupo.
- Faixa de repetições por exercício. Ao atingir o limite superior em todas as séries válidas, o app sugere considerar um aumento de carga; a alteração continua sob seu controle.
- Resumo ao encerrar: duração, exercícios, séries, volume e recordes.

## No celular

A interface se adapta a telas pequenas e pode ser adicionada à tela inicial:

- **Android (Chrome):** menu do navegador → **Instalar app** ou **Adicionar à tela inicial**.
- **iPhone/iPad (Safari):** **Compartilhar** → **Adicionar à Tela de Início**.

Depois da primeira visita, os arquivos do app ficam disponíveis para uso offline.

## Dados e privacidade

Os dados de treino e medidas ficam no armazenamento local do navegador deste dispositivo. Nesta versão, não há sincronização em nuvem. O backup completo fica no menu de três pontos; as medidas também são incluídas nele. Para compartilhar somente uma rotina, use a aba **Ferramentas**.

Limpar os dados do navegador ou desinstalá-lo pode apagar o histórico local. Importar um backup substitui os dados atuais deste navegador.

## Publicação e arquivos

O app está publicado pelo GitHub Pages:

https://menkbiel-dotcom.github.io/app-academia/

A branch `main` é publicada a partir da pasta raiz. Não é necessário instalar dependências nem executar um processo de build.

- `index.html` — interface e funcionalidades.
- `manifest.json` — nome, ícones e configuração de instalação.
- `service-worker.js` — cache para acesso offline.
- `icons/` — ícones do app instalado.
