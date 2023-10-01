const nrTaxa = document.querySelector("#nrTaxa");
const nrMontante = document.querySelector("#nrMontante");
const btnCalJsimples = document.querySelector("#btnCalJsimples");

function calcJurosSimples() {
    const nrCapital = document.querySelector("#nrCapital").value
    if (nrCapital === "") {
        alert(`Coloque alguma valor no campo.\n${nrCapital}`)
    } else {
        alert(`Valor do campo capital: \n${nrCapital}`)

    }
    

}

btnCalJsimples.addEventListener("click", calcJurosSimples);