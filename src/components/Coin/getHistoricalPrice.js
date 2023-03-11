export default function getHistoricalPrice(array) {
    var filtro = [];

     array.forEach((dado, index) => {
        filtro.push({
            id: index,
            preco: Number(dado[1]).toFixed(2),
        });
    });

    // console.log(filtro);
    return filtro;
}