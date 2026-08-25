const cardapio = [
    {nome: "Coca", preco: 6.5},
    {nome: "Sorvete", preco: 10.0},
    {nome: "Carbonara", preco: 16.0},
    {nome: "Frango a Parmegiana", preco: 25.5},
    {nome: "Bife a Milanesa", preco: 17.5}
]

const taxaEntrega = (km) => {
    if(km <= 2) return 0;
    if(km < 8) return 6;
    return 6 + (km - 8) * 1.5;
}

const totalPedido = (valores) => {
    let total = 0;

    for (let i = 0; i < valores.length; i++) {
        total += valores[i];
    }
    return total;
}

const buscarPreco = (cardapio, nome) => {
    return cardapio.find(item => item.nome === nome)?.preco || null;
}

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`${titulo} passou`);
  } else {
    console.error(`${titulo} não passou`);
  }
};

// teste("1km", 0, taxaEntrega(1));
// teste("2km", 0, taxaEntrega(2));
// teste("7km", 6, taxaEntrega(7));
// teste("10km", 9, taxaEntrega(9));
// 
// teste("pedido 1", 60, totalPedido([10, 20, 30]));
// teste("pedido 2", 12, totalPedido([10, 20, 30]));
// teste("pedido 3", 56, totalPedido([10, 20, 30]));

console.log(buscarPreco(cardapio, "Coca-Cola"));