export default {
  name: [
    ["André", "Coêlho"],
    ["Henrique", "dos Santos Alves"],
  ],
  photo: ["./img/andre.jpg", "./img/henrique.jpg"],
  info: [
    [
      "Aspirante a desenvolvedor full-stack, com conhecimento tanto em linguagens e tecnologias voltadas para o front-end (HTML, CSS, SASS, JavaScript), quanto para o back-end (Java, SQL e MongoDB, Node.js, Express). Possui também experiência com design e arte digital e com ferramentas como Adobe Photoshop, Illustrator, Maya e Figma. Em constante busca pelo aprendizado de novas tecnologias e pela ampliação dos horizontes do conhecimento de maneira geral.",
      "Eu sempre gostei de T.I. pelo fato de usar linguagens de programação de diferentes tipos e por ver as coisas que são possiveis fazer. Sendo um profissional capacitado na área, quando mais assistia videos e via o quão abrangente essa área é, desde o cara que programa para máquinas de cartões até o cara que trabalha para a NASA, essa profissão é uma das profissões que mais crescem no mercado de trabalho, com muitas demandas de vagas mas com tão poucas pessoas para ocupá-las, foi daí que eu decidi fazer um curso que me ensinasse a programar e atuar nesse nicho."
    ], // about
    [
      ["Programar", "Correr", "Desenhar", "Dormir"],
      ["Estudar JavaScript", "Estudar HTML"]
    ], // hobbies
    [
      ["Páginas web", "APIs", "Aplicações CLI"],
      ["Páginas web", "APIs", "Aplicações CLI"]
    ], // programming
  ],
  projects: [
    [
      {
        name: "Cidadela Tech: Site de Artigos de Informática",
        description:
          "Primeira tentativa na elaboração de um site, feito para um negócio fictício de vendas de artigos de informática/tecnologia, para a disciplina de Projeto de Interface do IESB.",
        url: "https://github.com/alcbcoelho/cidadela-tech"
      },
      {
        name: "Criador de Lista de Compras",
        description:
          "Aplicação web que possibilita o envio de itens pelo usuário, a partir dos quais é gerada uma lista de compras que pode ser reordenada, reformatada e modificada a qualquer momento.",
        url: "https://github.com/alcbcoelho/shopping-list-maker"
      },
      {
        name: "Playlistenin': Back-End de Aplicativo de Geração de Playlists",
        description:
          "API REST para um aplicativo de geração de playlists desenvolvida para a disciplina de Construção de Back-End do IESB. Conta com endpoints para músicas e usuário, além das playlists propriamente ditas.",
        url: "https://github.com/alcbcoelho/pi-backend"
      }
    ],
    [
      {
        name: "Meu Amigo PET: Projeto de Back-End",
        description: 'Meu Amigo PET é uma API REST cujo objetivo principal é conectar usuários, sejam eles pais de PETs ou aspirantes ao cargo, com objetivos semelhantes: adoção ou cruzamento. A conexão entre usuários se dá por meio de anúncios, os quais podem ser de adoção ou cruzamento. Assim, usuários logados podem acessar o "feed de anúncios" e obter informações de pets e usuários. A API visa atender usuários comuns e administradores com funcionalidades diferentes para cada um dos tipos de contas. Os usuários devem estar logados no servidor para acessar as diferentes rotas e suas funcionalidades. A aplicação foi construida usando-se Node.JS, módulos NPM, o framework Express e o GitHub.',
        url: "https://github.com/HenriqueSantosHS/projeto-de-back-end"
      },
      {
        name: "Tutorial do Pivotal Tracker",
        description: "Projeto de teste da ferramenta Pivotal Tracker.",
        url: "https://github.com/HenriqueSantosHS/pivotal-tutorial"
      },
      {
        name: "Tutorial de GIT",
        description: "Projeto de teste da ferramenta de versionamento GIT.",
        url: "https://github.com/HenriqueSantosHS/AtividadeGit"
      }
    ],
  ],
};
