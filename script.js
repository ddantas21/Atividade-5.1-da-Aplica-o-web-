// Arrays paralelos (mesmo índice = mesmo estado)
const siglas     = ["DF", "GO", "MT", "MS"];
const capitais   = ["Brasília", "Goiânia", "Cuiabá", "Campo Grande"];
const areas      = ["5.760,783 km²", "340.242,854 km²", "903.208,361 km²", "357.142,082 km²"];
const populacoes = ["2.817.381 hab.", "7.056.495 hab.", "3.658.649 hab.", "2.757.013 hab."];
const bandeiras  = [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Distrito_Federal_(Brasil).svg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Goi%C3%A1s.svg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Mato_Grosso.svg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Mato_Grosso_do_Sul.svg"
];

// Elementos da DOM
const selectEstados = document.getElementById("selectEstados");
const btnDetalhes   = document.getElementById("btnDetalhes");
const divCapital    = document.getElementById("divCapital");
const divArea       = document.getElementById("divArea");
const divPopulacao  = document.getElementById("divPopulacao");
const divBandeira   = document.getElementById("divBandeira");

// Clique no botão
btnDetalhes.addEventListener("click", function () {
    const index = selectEstados.value;

    if (index !== "") {
        divCapital.textContent   = capitais[index];
        divArea.textContent      = areas[index];
        divPopulacao.textContent = populacoes[index];
        divBandeira.innerHTML    = `<img src="${bandeiras[index]}" alt="Bandeira de ${siglas[index]}">`;
    }
});
