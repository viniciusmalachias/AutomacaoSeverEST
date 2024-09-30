Feature: Validação da API de Listagem de Usuários

  Scenario: Validar que a API retorna o status 200 e uma lista de usuários
    Given que eu envio uma requisição para a API de listagem de usuários
    When a resposta de usuários for recebida
    Then o status code de usuários deve ser 200
    When a lista de usuários deve estar presente no corpo da resposta

Scenario: Validar que a API retorna o status 200 e uma lista de produtos
    Given que eu envio uma requisição para a API de listagem de produtos
    When a resposta de produtos for recebida
    Then o status code de produtos deve ser 200
    When a lista de produtos deve estar presente no corpo da resposta