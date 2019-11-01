/**
 * Calculo do IMC
 * @author João José
 */

 // Variáveis globais
 let imc, altura, peso

 function calcular(){
    peso = Number(frmImc.txtPeso.value.replace(",","."))
    altura = Number(frmImc.txtAltura.value.replace(",","."))
    imc = peso / (altura*altura)
    frmImc.txtImc.value = imc.toFixed(2)
 }