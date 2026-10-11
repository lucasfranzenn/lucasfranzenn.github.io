# Portfólio de Lucas Franzen Nori

Portfólio estático em português e inglês, preparado para o GitHub Pages. Apresenta experiência profissional, formação e o Marfran Imports, futura loja oficial que ainda está em desenvolvimento.

## Idiomas

O botão **PT / EN**, no topo da página, troca o conteúdo entre português e inglês. O idioma escolhido fica salvo no navegador e é restaurado na próxima visita. A troca também atualiza o idioma do documento, os textos para leitores de tela, o título e as descrições da página.

O texto em português está em `index.html`. As traduções em inglês e a lógica do botão estão em `script.js`. Ao adicionar conteúdo traduzível, marque o elemento com `data-i18n="chave"` e crie a mesma chave no objeto `english` do script.

## Prévia local

Abra `index.html` no navegador. O site não precisa de instalação, servidor ou etapa de compilação. Os arquivos principais são:

- `index.html` — conteúdo e estrutura;
- `styles.css` — visual e layouts responsivos;
- `script.js` — alternância de idioma e indicação da seção visível;
- `assets/marfran-local.png` — captura da versão local da Marfran Imports;
- `assets/curriculo.pdf` — currículo aberto pelo botão na seção de contato;
- `favicon.svg` — ícone da página.

## Publicar no GitHub Pages

1. Envie os arquivos do site, a pasta `assets` e `.nojekyll` para a raiz de um repositório no GitHub.
2. Em **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch principal e a pasta **/(root)**. Salve e aguarde o endereço do site aparecer nessa página.

Os caminhos dos arquivos são relativos, então o site funciona tanto em um repositório de projeto quanto em `<usuario>.github.io`. As fontes externas têm alternativas locais caso não carreguem.

O endereço `localhost:5173` pertence apenas ao ambiente de desenvolvimento da Marfran e não é um link público do portfólio. A captura mostra a versão local em desenvolvimento. O deploy da loja com Docker em uma VPS é um plano futuro, separado da publicação deste portfólio no GitHub Pages.
