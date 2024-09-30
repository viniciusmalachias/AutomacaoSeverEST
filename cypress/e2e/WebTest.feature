Feature: Automação dos cenários funcionais com cypress + cucumber

  Scenario: Realizar Cadastro no sistema
    Given que estou na página de login
    When clico no botão Cadastre-se
    When preencho os campos obrigatórios de Cadastro
    When clico no botão Cadastrar
    Then visualizo a mensagem de confirmação que meu cadastro foi realizado

  Scenario: Login com sucesso usando credenciais válidas
    Given que estou na página de login
    When eu insiro um nome de usuário e senha válidos
    When clico no botão de login
    Then devo ser redirecionado para a Home

  Scenario: Login sem sucesso com credenciais inválidas
    Given que estou na página de login
    When eu insiro um nome de usuário e senha inválidos
    And clico no botão de login
    Then devo ver uma mensagem de erro sobre credenciais inválidas

  Scenario: Falha no login com campos obrigatórios vazios
    Given que estou na página de login
    When clico no botão de login
    Then devo ver mensagens de erro indicando os campos obrigatórios