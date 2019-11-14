/**
 * Pessoas que pode votar
 * @author João José
 */

function verificar() {
    let Idade
    idade = Number(frmEleitor.txtIdade.value)
    if (Idade < 16) {
        alert('Proibido Votar')
    } else if (Idade >= 18 && Idade < 70) {
        alert('Voto Obrigatório')
    } else {
        alert('Voto Facultativo')
    }
}