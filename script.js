const btnCalJsimples = document.querySelector("#btnCalJsimples");

function calcJurosSimples() {
    const nrCapital = document.querySelector("#nrCapital").value
    const nrTaxa = document.querySelector("#nrTaxa").value
    const nrMontante = document.querySelector("#nrMontante").value
    const nrTempo = document.querySelector("#nrTempo").value

    if (nrCapital === "") {
        alert(`Capital sem preenchimento de valor.\n${nrCapital}`)
    } else 
    if (nrTaxa === "") {
        alert(`Capital com preenchimaneto do valor e Taxa sem.\n${nrCapital}\n${nrTaxa}`)
    } else
    if (nrMontante === "") {
        alert(`Capital e Taxa preenchidos e montante sem preenchimento.\n${nrCapital}\n${nrTaxa}\n${nrMontante} `)
    } else
    if (nrTempo === "") {
        alert(`Capital,Taxa, Montante e tempo sem preenchimento.\n${nrCapital}\n${nrTaxa}\n${nrMontante}\n${nrTempo} `)
    }
    else {
        alert("INFO:\nVocê já tem todas as informações da questão.")
    }
    

}

btnCalJsimples.addEventListener("click", calcJurosSimples);