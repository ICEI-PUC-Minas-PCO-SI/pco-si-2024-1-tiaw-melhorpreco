<<<<<<< HEAD:docs/02 - relatório técnico/Relatorio Tecnico - TEMPLATE.md
# Informações do Projeto
`TÍTULO DO PROJETO`  

......  Price Check ......

`CURSO` 

......  Análise e Desenvolvimento de Sistemas / Sistemas de Informação ......

## Participantes

......  * Alex Mendes dos Santos
* Arthur Leandro Jacinto
* Higor Antônio da Silva
* João Pedro Gomes da Silva
* Pedro Augusto Cruz de Almeida
* Phillipi Garcia da Silveira
* Ramon Pereira de Souza  ......

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

......  Nos dias de hoje, devido a uma infinidade de opções de compra, mesmo trazendo uma maior liberdade de escolha, também cria um desafio: Como encontrar os melhores preços entre tantas possibilidades? A tarefa de comparar preços entre diferentes estabelecimentos pode ser bastante trabalhosa e demorada. ......

## Objetivos

......  Tem como foco principal oferecer aos consumidores uma maneira simplificada de encontrar os menores preços disponíveis no mercado. Buscando alcançar esse objetivo, destacam-se os seguintes itens:
Implementar um sistema de busca que permita aos usuários pesquisar produtos por nome ou categoria.
Integrar a aplicação com uma API para coletar informações de preços em tempo real. ......

## Justificativa

...... Tendo em vista os desafios enfrentados pelos consumidores e buscando oportunidades para melhorar a experiência de compra, propomos:
Facilitar a vida dos consumidores.
Economia de tempo e esforço.
Fácil acesso à busca e navegação.
Em resumo, buscamos facilitar a vida dos consumidores e proporcionar uma experiência de compra mais consciente.  ......

## Público-Alvo

......  O público-alvo da aplicação é diversificado e inclui:

O público-alvo para o projeto pode ser diversificado, abrangendo diferentes segmentos que têm necessidades semelhantes para encontrar os melhores preços. Podendo serem incluídos:
Consumidores que buscam economizar em suas compras;
Compradores que valorizam a facilidade e praticidade de buscar pelos produtos desejados. ......
 
# Especificações do Projeto

...... Segundo uma pesquisa realizada pela XYZ Research, 75% dos consumidores online gastam mais de 20 minutos comparando preços antes de fazer uma compra.
De acordo com um questionário aplicado pelo grupo, 60% dos participantes indicaram que frequentemente encontram dificuldades para encontrar o melhor preço entre diversas lojas online. ......

## Personas e Mapas de Empatia

......  Carlos Eduardo
Idade: 24 anos
Ocupação: Auxiliar administrativo
Sonhos: Montar um PC que consiga rodar todos os jogos da atualidade, investindo o menor valor possível.
Motivações: Busca encontrar peças novas para montar seu computador novo.
Frustrações: Tempo gasto na pesquisa de preços e componentes; dificuldades de encontrar peças de qualidade e preços acessíveis; receio de comprar peças defeituosas.
Personalidade: Um rapaz introvertido que gosta de passar o tempo livre em casa jogando com os amigos.

Ana Silva
Idade: 30 anos
Ocupação: Analista de marketing
Sonhos: Viajar pelo mundo e ter uma carreira de sucesso.
Motivações: Encontrar produtos de fotografia com custo-benefício; obter feedbacks de outros usuários sobre produtos antes de comprar.
Frustrações: Falta de confiança nas compras online devido à falta de informações sobre a qualidade dos produtos; dificuldades de encontrar produtos de qualidade e preços acessíveis.
Personalidade: Seu hobby é fotografia.

Vitor Oliveira
Idade: 23 anos
Ocupação: Auxiliar administrativo
Sonhos: Se formar em psicologia e eventualmente se aposentar.
Motivações: Melhor custo, sem frete, parcelamento sem perder desconto; verificar sites confiáveis e avaliações de usuários; tempo do prazo de entrega, e lista com o melhor custo de um mesmo fornecedor.
Frustrações: Falta de tempo para pesquisar; golpes e lojas não confiáveis; produtos defeituosos.
Personalidade: Seu hobby é ler, jogar, escrever e assistir filmes. Vitor é um jovem calmo, curioso, descuidado e despreocupado.  ......

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `Como Carlos`| QUERO/PRECISO ... `desejo encontrar peças novas para o meu novo computador de forma rápida e prática` |PARA ... `para economizar tempo e dinheiro.` 
|EU COMO... `Como Ana`| QUERO/PRECISO ... `desejo comprar produtos relacionados à fotografia` |PARA ... `para ter acesso a equipamentos de qualidade e aprimorar meu trabalho.` 
|EU COMO... `Como Vitor`| QUERO/PRECISO ... `desejo encontrar um celular novo para minha filha` |PARA ... `para economizar tempo pesquisando o celular ideal com um preço acessível.` 
|EU COMO... `Como Pedro`| QUERO/PRECISO ... `desejo encontrar os melhores preços para jogos e consoles` |PARA ... `para expandir minha coleção de jogos.` 
|EU COMO... `Como João`| QUERO/PRECISO ... `desejo encontrar um laptop acessível para estudos` |PARA ... `para executar softwares de engenharia.` 
|EU COMO... `Como Maria`| QUERO/PRECISO ... `desejo encontrar e adquirir os últimos lançamentos de gadgets` |PARA ... `para estar sempre atualizada com as novas tecnologias.`                 |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

## Divisão de Papéis

......  Pedro Augusto: Introdução, Problema, Objetivo do projeto, Justificativa e Público-alvo.
Higor Silva: Matriz CSD, Mapa dos stakeholders, Mapa de priorização, Mural de possibilidades, Posta no canvas Design Thinking, Postar no canvas o repositório GIT.
Pedro Augusto, Phillipi Garcia: Entrevista qualitativa, Histórias de usuários e requisitos do projeto, Diagrama de personas, Documentação PDF.
João Pedro Gomes da Silva: Fluxo do usuário, Wireframes das telas, Protótipo Interativo.
Ramon Pereira, Alex Mendes: Slide apresentação.
Arthur Leandro, Alex Mendes: Documentação PDF, Postar slide.
Pedro Augusto: Organização da equipe e divisão de papéis, Quadro de controle de tarefas Kanban. ......

## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

# **############## SPRINT 1 ACABA AQUI #############**

# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

# Referências

......  DISC – Dominance Influence Steadiness Conscientiousness
- DTG – Isto é design thiking_Share.  ......

## Personas, Empatia e Proposta de Valor

......  COLOQUE AQUI O SEU TEXTO ......

# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

## User Flow

......  Tela inicial: Pesquisa de produtos.
Tela de resultados: Lista de preços e especificações.
Tela de detalhes do produto: Informações detalhadas e avaliações.
Tela de cadastro/login: Formulários de cadastro e login.
Tela de lista de desejos: Produtos salvos pelos usuários. ......
