const btnCalJsimples = document.querySelector("#btnCalJsimples");

function calcJurosSimples() {
    const nrCapital = document.querySelector("#nrCapital").value
    const nrTaxa = document.querySelector("#nrTaxa").value
    const nrMontante = document.querySelector("#nrMontante").value

    if (nrCapital === "") {
        alert(`Capital sem preenchimento de valor.\n${nrCapital}`)
    } else 
    if (nrTaxa === "") {
        alert(`Capital com preenchimaneto do valor e Taxa sem.\n${nrCapital}\n${nrTaxa}`)
    } else
    if (nrMontante === "") {
        alert(`Capital e Taxa preenchidos e montante sem preenchimento.\n${nrCapital}\n${nrTaxa}\n${nrMontante} `)
    } else {
        alert("INFO:\nVocê já tem todas as informações da questão.")
    }
    

}

btnCalJsimples.addEventListener("click", calcJurosSimples);