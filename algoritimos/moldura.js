const moldura = (colunas, linhas) => {
  let saida = "";
  const matriz = [];

  for (let index = 0; index < linhas; index++) {
    matriz.push([]);
  }

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      if (
        (i === 0 && j === 0) ||
        (i === 0 && j === colunas - 1) ||
        (j === 0 && i === linhas - 1) ||
        (i === linhas - 1 && j === colunas - 1)
      )
        matriz[i][j] = "+";

      if (
        (i === 0 && j >= 1 && i === 0 && j <= colunas - 2) ||
        (i === linhas - 1 && j >= 1 && i === linhas - 1 && j <= colunas - 2) ||
        (j === 0 && i >= 1 && j === 0 && i <= linhas - 2) ||
        (j === colunas - 1 && i >= 1 && j === colunas - 1 && i <= linhas - 2)
      )
        matriz[i][j] = "-";

      if (i > 0 && i < linhas - 1 && j > 0 && j < colunas - 1)
        matriz[i][j] = " ";
    }
  }

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      saida += matriz[i][j] + "  ";
    }
    console.log(saida);
    saida = "";
  }
};

moldura(9, 6);
