const boix = [
  {
    id: 0,
    check: 'Verificar estado geral de funcionamento do equipamento',
  },
  {
    id: 1,
    check: 'Limpar as pás do ventilador do motor (com auxilio da pistola de ar comprimido)',
  },
  {
    id: 2,
    check: 'Limpar filtro de aspiração (com auxilio da pistola de ar comprimido)',
  },
  {
    id: 3,
    check: 'Lubrificar as duas guias lineares ',
  },
  {
    id: 4,
    check: 'Lubrificar a cremalheira telescópio ( parte dentada), utilizando um pincel',
  },
  {
    id: 5,
    check: 'Lubrificar a cremalheira do tanque',
  },
  {
    id: 6,
    check: 'Verificar o quadro elétrico  quanto ao estado geral, limpeza e organização. OBS.: Não depositar materiais dentro dos mesmos.',
  },
  {
    id: 7,
    check: 'Verificar os sensores de segurança e botões de emergência, se os mesmos estão em perfeitas condições sem estarem amarrados ou Jampeados. ',
  },
  {
    id: 8,
    check: ' Verificar adesivos de segurança e de informações.',
  },
  {
    id: 9,
    check: 'Verificar as porcas, parafusos e outros elementos de fixação quanto a danos, modificações e peças faltando ou instaladas de forma inadequada.',
  },
  {
    id: 10,
    check: 'Inspecionar a máquina por completo quanto a trincas em soldas e componentes estruturais.',
  },
  {
    id: 11,
    check: 'Inspecionar a máquina por completo quanto a deformações ou danos da máquina.',
  },
  {
    id: 12,
    check: 'Verificar se todos os componentes estruturais e outros componentes importantes estão presentes e se todos os elementos de fixação associados estão nos seus lugares e devidamente apertados.',
  },
  {
    id: 13,
    check: 'Inspecionar vazamentos de óleo, ruídos ou vibrações anormais.',
  },
  {
    id: 14,
    check: 'Verificar ruídos dos rolamentos dos motores e motoredutores',
  },
  {
    id: 15,
    check: 'Verificar se há vazamentos de óleo nos motores.',
  },
  {
    id: 16,
    check: 'Verificar nível de óleo dos motoredutor.',
  },
  {
    id: 17,
    check: 'Verificar ruído do redutor.',
  },
  {
    id: 18,
    check: 'Trocar reparo dos cilindros',
  },
  {
    id: 19,
    check: 'Trocar filtro e mini filtro do coleiro',
  },
  {
    id: 20,
    check: 'Trocar correntes',
  },
  {
    id: 21,
    check: 'Trocar cilindros de apoio de caixa',
  },
  {
    id: 22,
    check: 'Trocar filtro da bomba de vácuo e palhetas',
  },
  {
    id: 23,
    check: 'Trocar óleo e filtro do compressor',
  },
  {
    id: 24,
    check: 'Trocar mangueiras pneumáticas',
  }
];

const meps = [
  {
    id: 0,
    check: 'Lubrificar correntes',
  },
  {
    id: 1,
    check: 'Verificar estado geral de funcionamento do equipamento',
  },
  {
    id: 2,
    check: 'Verificar o quadro elétrico  quanto ao estado geral, limpeza e organização. OBS.: Não depositar materiais dentro dos mesmos.',
  },
  {
    id: 3,
    check: 'Verificar os sensores de segurança e botões de emergência, se os mesmos estão em perfeitas condições sem estarem amarrados ou Jampeados. ',
  },
  {
    id: 4,
    check: 'Verificar se as grades de proteções estão integras e instaladas de forma correta',
  },
  {
    id: 5,
    check: ' Verificar adesivos de segurança e de informações.',
  },
  {
    id: 6,
    check: 'Verificar as porcas, parafusos e outros elementos de fixação quanto a danos, modificações e peças faltando ou instaladas de forma inadequada.',
  },
  {
    id: 7,
    check: 'Inspecionar a máquina por completo quanto a trincas em soldas e componentes estruturais.',
  },
  {
    id: 8,
    check: 'Inspecionar a máquina por completo quanto a deformações ou danos da máquina.',
  },
  {
    id: 9,
    check: 'Verificar se todos os componentes estruturais e outros componentes importantes estão presentes e se todos os elementos de fixação associados estão nos seus lugares e devidamente apertados.',
  },
  {
    id: 10,
    check: 'Inspecionar vazamentos de óleo, ruídos ou vibrações anormais.',
  },
  {
    id: 11,
    check: 'Verificar o alinhamento, e os elementos de transmissão montados nos eixos.',
  },
  {
    id: 12,
    check: 'Verificar ruídos dos rolamentos dos motores e motoredutores',
  },
  {
    id: 13,
    check: 'Verificar se há vazamentos de óleo nos motores',
  },
  {
    id: 14,
    check: 'Verificar nível de óleo dos motoredutor',
  },
  {
    id: 15,
    check: 'Verificar ruído do redutor.',
  },
  {
    id: 16,
    check: 'Lubrificar mancais',
  },
  {
    id: 17,
    check: 'Verificar o óleo do redutor',
  },
  {
    id: 18,
    check: 'Trocar reparo dos cilindros',
  },
  {
    id: 19,
    check: 'Trocar filtro e mini filtro do coleiro',
  },
  {
    id: 20,
    check: 'Trocar correntes',
  },
  {
    id: 21,
    check: 'Trocar cilindros de apoio de caixa',
  },
  {
    id: 22,
    check: 'Trocar filtro da bomba de vácuo e palhetas',
  },
  {
    id: 23,
    check: 'Trocar óleo e filtro do compressor',
  },
  {
    id: 24,
    check: 'Trocar mangueiras pneumáticas',
  }
];

const kopempack = [
  {
    id: 0,
    check: 'Regular Esticadores, caso for necessário.',
  },
  {
    id: 1,
    check: 'Lubrificar Porcas de Latão.',
  },
  {
    id: 2,
    check: 'Limpeza das ventosas com ar comprimido. Basta desconectar as mangueiras e soprar um jato de ar comprimido nas ventosas.',
  },
  {
    id: 3,
    check: 'Limpeza dos Geradores de Vácuo.',
  },
  {
    id: 4,
    check: 'Verificar o quadro elétrico  quanto ao estado geral, limpeza e organização. OBS.: Não depositar materiais dentro dos mesmos.',
  },
  {
    id: 5,
    check: 'Verificar os sensores de segurança e botões de emergência, se os mesmos estão em perfeitas condições sem estarem amarrados ou Jampeados.',
  },
  {
    id: 6,
    check: 'Verificar se as grades de proteções estão integras e instaladas de forma correta.',
  },
  {
    id: 7,
    check: 'Verificar adesivos de segurança e de informações.',
  },
  {
    id: 8,
    check: 'Verificar as porcas, parafusos e outros elementos de fixação quanto a danos, modificações e peças faltando ou instaladas de forma inadequada.',
  },
  {
    id: 9,
    check: 'Inspecionar a máquina por completo quanto a trincas em soldas e componentes estruturais.',
  },
  {
    id: 10,
    check: 'Inspecionar a máquina por completo quanto a deformações ou danos da máquina.',
  },
  {
    id: 11,
    check: 'Verificar se todos os componentes estruturais e outros componentes importantes estão presentes e se todos os elementos de fixação associados estão nos seus lugares e devidamente apertados.',
  },
  {
    id: 12,
    check: 'Inspecionar vazamentos de óleo, ruídos ou vibrações anormais.',
  },
  {
    id: 13,
    check: 'Trocar Rolo do Tracionador de Caixa se necessário.',
  },
  {
    id: 14,
    check: 'Trocar peças do Aplicador de Fita (Rolo de entrada e saída, Faca, Escova e conjunto de molas ) se necessário.',
  },
  {
    id: 15,
    check: 'Trocar Ventosas, se necessário.',
  },
  {
    id: 16,
    check: 'Trocar Rolamentos do Tracionador, se necessário.',
  },
  {
    id: 17,
    check: 'Trocar Acionamento completo do Tracionador, se necessário.',
  },
  {
    id: 18,
    check: 'Trocar Bucha Igus do Cj Magazine, Tracionador, Dobrador e Aplicador de Fita, se necessário.',
  },
  {
    id: 19,
    check: 'Trocar Bucha Igus do Equipamento, se necessário.',
  },
  {
    id: 20,
    check: 'Trocar Correias, se necessário.',
  },
  {
    id: 21,
    check: 'Trocar correntes do Tracionador com Aditamentos, se necessário.',
  },
  {
    id: 22,
    check: 'Trocar Minirails, se necessário.',
  },
];

const mecalonia = [
  {
    id: 0,
    check: 'Verificar estado geral de funcionamento do equipamento'
  },
  {
    id: 1,
    check: 'Verificar o quadro elétrico  quanto ao estado geral, limpeza e organização. OBS.: Não depositar materiais dentro dos mesmos.'
  },
  {
    id: 2,
    check: 'Verificar os sensores de segurança e botões de emergência, se os mesmos estão em perfeitas condições sem estarem amarrados ou Jampeados. '
  },
  {
    id: 3,
    check: 'Verificar se as grades de proteções estão integras e instaladas de forma correta'
  },
  {
    id: 4,
    check: ' Verificar adesivos de segurança e de informações.'
  },
  {
    id: 5,
    check: 'Verificar as porcas, parafusos e outros elementos de fixação quanto a danos, modificações e peças faltando ou instaladas de forma inadequada.'
  },
  {
    id: 6,
    check: 'Inspecionar a máquina por completo quanto a trincas em soldas e componentes estruturais.'
  },

  {
    id: 7,
    check: 'Inspecionar a máquina por completo quanto a deformações ou danos da máquina.'
  },
  {
    id: 8,
    check: 'Verificar se todos os componentes estruturais e outros componentes importantes estão presentes e se todos os elementos de fixação associados estão nos seus lugares e devidamente apertados.'
  },
  {
    id: 9,
    check: 'Inspecionar vazamentos de óleo, ruídos ou vibrações anormais.'
  }
]

const plasmetal = [
  {
    id: 0,
    check: 'Verificar estado geral de funcionamento do equipamento'
  },
  {
    id: 1,
    check: 'Verifique mangueiras, conexões, cilindros, e inspecione se há vazamentos de ar'
  },
  {
    id: 2,
    check: 'Verifique o estado das ventosas e aperto das mesmas.'
  },
  {
    id: 3,
    check: 'Inspecionar umidade e qualidade do ar no sistema pneumático.'
  },
  {
    id: 4,
    check: 'Limpeza dos geradores de vácuo das ventosas.'
  },
  {
    id: 5,
    check: 'Abafadores nos escapes das válvulas.'
  },
  {
    id: 6,
    check: 'Verificar regulagens.'
  },
  {
    id: 7,
    check: 'Verifique se os prensa cabos estão bem apertados.'
  },
  {
    id: 8,
    check: 'Verifique os contatos das botoeiras, quanto a oxidação e conservação.'
  },
  {
    id: 9,
    check: 'Verificar aperto das conexões nos paineis'
  },
  {
    id: 10,
    check: 'Verificar Conectores de rede íntegros com travas de segurança e sem oxidação (se existir).'
  },
  {
    id: 11,
    check: 'Verificar o quadro elétrico  quanto ao estado geral, limpeza e organização. OBS.: Não depositar materiais dentro dos mesmos.'
  },
  {
    id: 12,
    check: 'Verifique os sensores de segurança e botões de emergência, se os mesmos estão em perfeitas condições sem estarem amarrados ou Jampeados.'
  },
  {
    id: 13,
    check: 'Verifqiue se as grades de proteções estão integras e instaladas de forma correta'
  },
  {
    id: 14,
    check: 'Adesivos de segurança e de informações.'
  },
  {
    id: 15,
    check: 'Verifique as porcas, parafusos e outros elementos de fixação quanto a danos, modificações e peças faltando ou instaladas de forma inadequada.'
  },
  {
    id: 16,
    check: 'Inspecione a máquina por completo quanto a trincas em soldas e componentes estruturais.'
  },
  {
    id: 17,
    check: 'Inspecione a máquina por completo quanto a deformações ou danos da máquina.'
  },
  {
    id: 18,
    check: 'Verifique se todos os componentes estruturais e outros componentes importantes estão presentes e se todos os elementos de fixação associados estão nos seus lugares e devidamente apertados.'
  },
  {
    id: 19,
    check: 'Inspecione vazamentos de óleo, ruídos ou vibrações anormais.'
  },
  {
    id: 20,
    check: 'Verifique a lubrificação, e lubrifique se necessário.'
  },
  {
    id: 21,
    check: 'Verifique o alinhamento, e os elementos de transmissão montados nos eixos.'
  },
  {
    id: 22,
    check: 'Verificar ruídos dos rolamentos dos motores e motoredutores'
  },
  {
    id: 23,
    check: 'Verifique se há vazamentos de óleo nos motores'
  },
  {
    id: 24,
    check: 'Substituir rolamentos do motor se necessario com 1600 horas'
  },
  {
    id: 25,
    check: 'Verificar nível de óleo dos motoredutor'
  },
  {
    id: 26,
    check: 'Verificar ruído do redutor.'
  },
  {
    id: 27,
    check: 'Substituir rolamentos redutor se necessario depois de 1600 horas'
  },
  {
    id: 28,
    check: 'Estado dos lotes quanto à umidade, encanamento e medidas.'
  }
]

const cyklop = [
  {
    id: 0,
    check: 'Verificar estado geral de funcionamento do equipamento'
  },
  {
    id: 1,
    check: 'Verificar Plugue e cabo de alimentação.'
  },
  {
    id: 2,
    check: 'Verificar chave liga/desliga.'
  },
  {
    id: 3,
    check: 'Verificar botões de emergência'
  },
  {
    id: 4,
    check: 'Verificação de sensores de segurança'
  },
  {
    id: 5,
    check: 'Verificar Motores elétricos'
  },
  {
    id: 6,
    check: 'Verificar alimentação das fases'
  },
  {
    id: 7,
    check: 'Verificar se o painel elétrico esta integro'
  },
  {
    id: 8,
    check: 'Verificar se o painel elétrico esta fechado e sem itens internamente'
  },
  {
    id: 9,
    check: 'Verificar Elementos de fixação: parafusos anéis de retenção, rebites.'
  },
  {
    id: 10,
    check: 'Limpeza e lubrificação de correntes e mancais'
  },
  {
    id: 11,
    check: 'Verificar roletes'
  },
  {
    id: 12,
    check: 'Verificar  eixos'
  },
  {
    id: 13,
    check: 'Verificar  mancais'
  },
  {
    id: 14,
    check: 'Verificar  rolamentos'
  },
  {
    id: 15,
    check: 'Verificar correias'
  },
  {
    id: 16,
    check: 'Verificar Rodas dentadas'
  },
  {
    id: 17,
    check: 'Verificar  correntes, alinhar se necessario'
  },
  {
    id: 18,
    check: 'Verificar  correias transportadoras, alinhar se necessario'
  },
  {
    id: 19,
    check: 'Verificar guias de produtos.'
  },
  {
    id: 20,
    check: 'Verificar alavancas de ajuste de largura'
  },
  {
    id: 21,
    check: 'Verificar engrenagens de redução'
  },
  {
    id: 22,
    check: 'Verificar o cabeçote de fita'
  },
  {
    id: 23,
    check: 'Verificar sistema de corte'
  },
  {
    id: 24,
    check: 'Verificar Rodízios e freios, fixação das mesas de entrada e saída'
  },
  {
    id: 25,
    check: 'Verificar Colunas direita e esquerda'
  },
  {
    id: 26,
    check: 'Verificar fuso de ajuste de altura'
  },
  {
    id: 27,
    check: 'Verificar nivelamento e alinhamento'
  }
]

const dalca = [
  {
    id: 0,
    check: 'Verificar estado geral de funcionamento do equipamento'
  },
  {
    id: 1,
    check: 'Verificar cuidadosamente as condições físicas de todos os componentes e conjuntos. Verificação de engrenamentos e assentamentos'
  },
  {
    id: 2,
    check: 'Verificar se há desgaste nas correntes transportadoras'
  },
  {
    id: 3,
    check: 'Verificar o tensionamento das correntes'
  },
  {
    id: 4,
    check: 'Verificar o nível de óleo dos motorredutores'
  },
  {
    id: 5,
    check: 'Verificar o posicionamento dos fixadores dos sensores magnético, micros. Cuidar para não desalinhar'
  },
  {
    id: 6,
    check: 'Limpeza do quadro do controlador do robô'
  },
  {
    id: 7,
    check: 'Limpeza do quadro do controlador do sistema de visão'
  },
  {
    id: 8,
    check: 'Limpeza do quadro pneumático'
  },
  {
    id: 9,
    check: 'Limpeza e substituição do filtro. O componente filtrante pode ser limpo com solventes, reinstalado quando seco, o copo do filtro deve ser limpo com água e detergente neutro'
  },
  {
    id: 10,
    check: 'Reaperto dos parafusos de fixação, flanges de conexão dos motorredutores'
  },
  {
    id: 11,
    check: 'Reengraxar rolamentos e trocar vedações externas dos motorredutores'
  },
  {
    id: 12,
    check: 'Verificar e ajustar o torque dos parafusos e porcas de fixação'
  },
  {
    id: 13,
    check: 'Verificação do funcionamento dos atuadores pneumáticos e da capacidade de ar da linha'
  },
  {
    id: 14,
    check: 'Verificar alinhamento dos eixos dos motorredutores'
  },
  {
    id: 15,
    check: 'Cheque as chaves e relés, cuidando para substituição se ruptura'
  },
]

const ocme = [
  {
    id: 0,
    check: 'Verificar estado geral de funcionamento do equipamento'    
  },
  {
    id: 1,
    check: 'Verificar desgaste dos Tapetes e pinhoes'
  },
  {
    id: 2,
    check: 'Verificar desgaste das correntes, pinos e guias'
  },
  {
    id: 3,
    check: 'Verificar destastes nos cilindros pneumáticos'
  },
  {
    id: 4,
    check: 'Verificar desgastes nas cremalheiras ou barra roscada'
  },
  {
    id: 5,
    check: 'Lubrificar as guias lineares das lâminas oscilantes'
  },
  {
    id: 6,
    check: 'Fixar e limpar fotocélulas e detector'
  },
  {
    id: 7,
    check: 'Tensionar e verificar desgaste na corrente com dentes'
  },
  {
    id: 8,
    check: 'Tensionar e verificar desgaste na corrente de tração'
  },
  {
    id: 9,
    check: 'Verificar desgaste pente de conexão'
  },
  {
    id: 10,
    check: 'Tensionar e verificar desgaste na correia de acionamento'
  },
  {
    id: 11,
    check: 'Verificar desgaste no rolete extrator'
  },
  {
    id: 12,
    check: 'Verificar desgaste no suporte oval'
  },
  {
    id: 13,
    check: 'Verificar desgaste no rolamento'
  },
  {
    id: 14,
    check: 'Verificar desgaste nos cilindros dos compressores'
  },
  {
    id: 15,
    check: 'Verificar desgaste no cilindro da escova'
  },
  {
    id: 16,
    check: 'Verificar desgaste guarnição da roda livre'
  },
  {
    id: 17,
    check: 'Lubrificação da roda livre do motor'
  },
  {
    id: 18,
    check: 'Lubrificação das guias lineares do carro de compressores'
  }
]

const robopac = [
  {
    id: 0,
    check: 'Verificar o quadro elétrico  quanto ao estado geral, limpeza e organização. OBS.: Não depositar materiais dentro dos mesmos.'
  },
  {
    id: 1,
    check: 'Verificar os sensores de segurança e botões de emergência, se os mesmos estão em perfeitas condições sem estarem amarrados ou Jampeados.'     
  },
  {
    id: 2,
    check: 'Verificar se as grades de proteções estão integras e instaladas de forma correta'
  },
  {
    id: 3,
    check: 'Verificar adesivos de segurança e de informações.'
  },
  {
    id: 4,
    check: 'Verificar as porcas, parafusos e outros elementos de fixação quanto a danos, modificações e peças faltando ou instaladas de forma inadequada.'
  },
  {
    id: 5,
    check: 'Inspecionar a máquina por completo quanto a trincas em soldas e componentes estruturais.'
  },
  {
    id: 6,
    check: 'Inspecionar a máquina por completo quanto a deformações ou danos da máquina.'
  },
  {
    id: 7,
    check: 'Verificar se todos os componentes estruturais e outros componentes importantes estão presentes e se todos os elementos de fixação associados estão nos seus lugares e devidamente apertados.'
  },
  {
    id: 8,
    check: 'Inspecionar vazamentos de óleo, ruídos ou vibrações anormais.'
  }
]

const imsb = [
  {
    id: 0,
    check: 'Verificar estado geral de funcionamento do equipamento'    
  },
  {
    id: 1,
    check: 'Verificar o quadro elétrico  quanto ao estado geral, limpeza e organização. OBS.: Não depositar materiais dentro dos mesmos.'
  },
  {
    id: 2,
    check: 'Verificar os sensores de segurança e botões de emergência, se os mesmos estão em perfeitas condições sem estarem amarrados ou Jampeados.' 
  },
  {
    id: 3,
    check: 'Verificar se as grades de proteções estão integras e instaladas de forma correta'
  },
  {
    id: 4,
    check: 'Verificar adesivos de segurança e de informações.'
  },
  {
    id: 5,
    check: 'Verificar as porcas, parafusos e outros elementos de fixação quanto a danos, modificações e peças faltando ou instaladas de forma inadequada.'
  },
  {
    id: 6,
    check: 'Inspecionar a máquina por completo quanto a trincas em soldas e componentes estruturais.'
  },
  {
    id: 7,
    check: 'Inspecionar a máquina por completo quanto a deformações ou danos da máquina.'
  },
  {
    id: 8,
    check: 'Verificar se todos os componentes estruturais e outros componentes importantes estão presentes e se todos os elementos de fixação associados estão nos seus lugares e devidamente apertados.'
  },
  {
    id: 9,
    check: 'Inspecionar vazamentos de óleo, ruídos ou vibrações anormais.'
  }
]

const machines = [
  boix,
  meps,
  kopempack,
  mecalonia,
  plasmetal,
  cyklop,
  dalca,
  ocme,
  robopac,
  imsb,
]

export const getMessages = () => boix;

export const getMessage = (id) => boix.find(b => b.id === id);

// export const showMachines = () => machines.forEach(function(element, index, array){
//   console.log(element, index, array);
// });


export const getLength = () => boix.length;

  // export const getMessage = boix.map(({ check }) => check);