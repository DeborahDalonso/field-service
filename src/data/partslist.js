export const parts = [
    {
      id: 0,
      name: 'Cabeçote / Base',
      value: 0,
      un: 3,
    },
    {
      id: 1,
      name: 'Eixo horizontal e estica-fio',
      value: 0,
      un: 3,
    },
    {
      id: 2,
      name: 'Barra de agulha e tensor da linha',
      value: 0,
      un: 3,
    },
    {
      id: 3,
      name: 'Barra de pressão',
      value: 0,
      un: 3,
    },
    {
      id: 4,
      name: 'Eixo de acionamento da lançadeira',
      value: 0,
      un: 3,
    },
    {
      id: 5,
      name: 'Mecanismo de alimentação',
      value: 0,
      un: 3,
    },
    {
      id: 6,
      name: 'Regulador do comprimento do ponto',
      value: 0,
      un: 3,
    },
    {
      id: 7,
      name: 'Acessórios principais da máquina',
      value: 0,
      un: 3,
    }
  ];

  export const listParts = () =>  parts;
  export const getPart = (part) => parts.find(p => p.part === part);