*Automação de Testes com Cypress + Cucumber*

Este é um projeto de automação de testes utilizando Cypress e Cucumber. O projeto é construído no padrão Page Objects para organizar e facilitar a manutenção dos testes. A automação cobre cenários como login no sistema Serverest.

Requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas na sua máquina:

Node.js (versão 12 ou superior)
Git (para clonar o repositório)
Instalação
Siga os passos abaixo para clonar o repositório, instalar as dependências e rodar os testes.

____________________________________________________________________________________________________________________________________________________________________
1. Clonar o Repositório
Primeiro, abra o terminal ou prompt de comando e execute o seguinte comando para clonar o repositório na sua máquina:

git clone https://github.com/viniciusmalachias/AutomacaoSeverEST


2. Acessar o Diretório do Projeto
Após clonar o repositório, navegue até a pasta do projeto:

cd automacao Serverest


3. Instalar as Dependências
Certifique-se de que o Node.js está instalado corretamente na sua máquina. Em seguida, execute o seguinte comando para instalar todas as dependências necessárias do projeto:

npm install

Este comando irá baixar e instalar todas as bibliotecas listadas no arquivo package.json, incluindo Cypress e Cucumber.
____________________________________________________________________________________________________________________________________________________________________

*Como Rodar os Testes*

Após a instalação das dependências, você pode executar os testes de duas maneiras: modo interativo (com a interface gráfica do Cypress) ou modo headless (sem interface gráfica, diretamente no terminal).

1. Executar os Testes no Modo Interativo
Para abrir a interface do Cypress, onde você pode selecionar os testes e visualizá-los em tempo real:

npx cypress open


Após abrir a interface, selecione o arquivo .feature desejado e o Cypress iniciará o teste.

2. Executar os Testes no Modo Headless
Se você quiser rodar os testes diretamente no terminal, sem abrir a interface do Cypress, use o comando:

npx cypress run

Este comando executa todos os testes automaticamente e exibe os resultados no terminal.
____________________________________________________________________________________________________________________________________________________________________
Descrição dos Arquivos:

login.feature: Arquivo que contém os cenários de teste descritos em Gherkin (Given, When, Then) para validar o login na aplicação.

WebTests.js: Contém os Step Definitions do Cucumber, onde os passos definidos nos arquivos .feature são implementados.

loginPage.js: Arquivo de Page Object que contém métodos para interagir com a página de login, como preencher o campo de email, senha e submeter o formulário.

___________________________________________________________________________________________________________________________________________________________________
Personalizando os Testes
Se você deseja personalizar os testes, pode editar os arquivos .feature dentro do diretório cypress/e2e/features ou modificar as interações nos arquivos de Page Object dentro da pasta cypress/support/pages.
____________________________________________________________________________________________________________________________________________________________________
Executando os Testes em Diferentes Ambientes
Se o projeto precisa ser executado em diferentes ambientes (desenvolvimento, homologação, produção), você pode configurar variáveis de ambiente no Cypress. Para isso, consulte a documentação oficial do Cypress sobre ambientes.
____________________________________________________________________________________________________________________________________________________________________
Contribuições
Se você deseja contribuir com este projeto, siga os passos abaixo:

Faça um fork do repositório.
Crie um branch com a sua feature: git checkout -b minha-feature.
Faça commit das suas alterações: git commit -m 'Minha nova feature'.
Faça push para o branch: git push origin minha-feature.
Abra um Pull Request.
Suporte
Se você encontrar algum problema ou precisar de ajuda, abra uma issue no repositório.


Quaisquer dúvidas pode entrar em contato diretamente comigo pelo email: Vinicius.malachiasti@gmail.com
ou celular: 11989669903.



