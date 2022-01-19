const classificador = (disorderedArrayGroupWpp) => {
  const filterBySouEu = (element) => element.souEu;
  const filterByResponsavel = (element) =>
    element.responsavel && !element.souEu;
  const filterByNotResponsavel = (element) =>
    !element.responsavel && !element.souEu;

  const GroupWpp = [];

  disorderedArrayGroupWpp
    .filter(filterBySouEu)
    .forEach((element) => GroupWpp.push(element));

  disorderedArrayGroupWpp
    .filter(filterByResponsavel)
    .sort((elementSortA, elementSortB) =>
      elementSortA.nome > elementSortB.nome
        ? 1
        : elementSortB.nome > elementSortA.nome
        ? -1
        : 0
    )
    .forEach((element) => GroupWpp.push(element));

  disorderedArrayGroupWpp
    .filter(filterByNotResponsavel)
    .sort((elementSortA, elementSortB) =>
      elementSortA.nome > elementSortB.nome
        ? 1
        : elementSortB.nome > elementSortA.nome
        ? -1
        : 0
    )
    .forEach((element) => GroupWpp.push(element));

  return GroupWpp;
};

const disorderedArray = [
  { souEu: true, responsavel: false, nome: "Bruno Lopes" },
  { souEu: false, responsavel: true, nome: "Maria Silva" },
  { souEu: false, responsavel: false, nome: "Marcos Jr" },
  { souEu: false, responsavel: false, nome: "Ana Paula" },
  { souEu: false, responsavel: true, nome: "Zilda lemos" },
  { souEu: false, responsavel: false, nome: "Marcos Amaral" },
  { souEu: false, responsavel: false, nome: "Jeferson Rodriguez" },
  { souEu: false, responsavel: true, nome: "Carla Maria" },
  { souEu: false, responsavel: false, nome: "Vitor Carvalho" },
  { souEu: false, responsavel: true, nome: "Carolina Silva" },
  { souEu: false, responsavel: true, nome: "Thiago Coelho" },
];

console.log(classificador(disorderedArray));
