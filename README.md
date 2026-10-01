# Amigos da Esperança

Projeto de uma plataforma web para uma organização fictícia do terceiro setor chamada Amigos da Esperança.

O objetivo do projeto é apresentar a organização, seus projetos sociais e permitir que pessoas interessadas possam realizar um cadastro para participar como voluntárias.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Git e GitHub
* Day.js

## Funcionalidades

* Navegação entre as páginas do projeto
* Layout responsivo para diferentes tamanhos de tela
* Menu hambúrguer para dispositivos menores
* Formulário de cadastro de voluntários
* Validação dos campos do formulário
* Máscaras para CPF, telefone e CEP
* Modal de confirmação do cadastro
* Mensagem de sucesso após o cadastro
* Armazenamento dos cadastros no `localStorage`
* Exibição do histórico de cadastros
* Navegação em formato de SPA
* Recursos de acessibilidade no menu

## Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/carioque/amigos-da-esperanca.git
```

2. Entre na pasta do projeto:

```bash
cd amigos-da-esperanca
```

3. Inicie um servidor local:

```bash
python -m http.server 8000
```

4. Abra no navegador:

```text
http://localhost:8000/html/index.html
```

## Estrutura do projeto

```text
ong/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── imagens/
│   └── voluntarios.jpg
├── js/
│   ├── mascaras.js
│   ├── modal.js
│   ├── spa.js
│   ├── storage.js
│   ├── validacao.js
│   └── script.js
└── README.md
```

## Fluxo de desenvolvimento

O projeto utiliza uma estrutura baseada no GitFlow para organizar o desenvolvimento e o controle de versões.

* `master` representa a versão estável do projeto.
* `develop` é utilizada para reunir as alterações durante o desenvolvimento.
* `feature/*` é utilizada para desenvolver funcionalidades específicas de forma isolada.

As funcionalidades foram desenvolvidas em branches próprias e depois integradas à branch `develop` por meio de Pull Requests.

### Exemplo de fluxo

```text
master
   │
   └── develop
          ├── feature/spa
          └── feature/acessibilidade
```

## Acessibilidade

O projeto foi desenvolvido buscando seguir boas práticas de acessibilidade e os princípios das diretrizes WCAG 2.1.

Entre as medidas utilizadas estão:

* Uso de elementos semânticos do HTML5.
* Textos alternativos nas imagens.
* Hierarquia adequada de títulos.
* Labels associados aos campos do formulário.
* Validação dos dados do formulário.
* Uso de atributos ARIA no menu responsivo.
* Atualização do `aria-expanded` de acordo com o estado do menu.
* Atualização do `aria-label` para indicar se o menu pode ser aberto ou fechado.

