const btnCalJsimples = document.querySelector("#btnCalJsimples");
const containerJsimplesResultado = document.querySelector(".container-jsimples-resultado")

function calcJurosSimples() {
    const nrCapital = document.querySelector("#nrCapital").value
    const nrTaxa = document.querySelector("#nrTaxa").value
    const nrMontante = document.querySelector("#nrMontante").value
    const nrTempo = document.querySelector("#nrTempo").value

    if (nrCapital === "") {
        containerJsimplesResultado.innerHTML 
        = `Capital sem preenchimento de valor.\n${nrCapital}`
    } else 
    if (nrTaxa === "") {
        containerJsimplesResultado.innerHTML 
        = `Capital com preenchimaneto do valor e Taxa sem.\n${nrCapital}\n${nrTaxa}`

    } else
    if (nrMontante === "") {
        containerJsimplesResultado.innerHTML 
        = `Capital e Taxa preenchidos e montante sem preenchimento.\n${nrCapital}\n${nrTaxa}\n${nrMontante} `

    } else
    if (nrTempo === "") {
        containerJsimplesResultado.innerHTML 
        = `Capital,Taxa, Montante e tempo sem preenchimento.\n${nrCapital}\n${nrTaxa}\n${nrMontante}\n${nrTempo}`
        // [j = cit] ==> t = j/(ci)/100
        const t = (nrMontante-nrCapital)/(nrCapital*(nrTaxa/100))
        containerJsimplesResultado.innerHTML = `O resultado é:\n${t} meses<br>ou<br>${t/12} anos`
    }
    else {
        containerJsimplesResultado.innerHTML 
        = `INFO:<br>Você já tem todas as informações da questão.`
    }
    
}

btnCalJsimples.addEventListener("click", calcJurosSimples);