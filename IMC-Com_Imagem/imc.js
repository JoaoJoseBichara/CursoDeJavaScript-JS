/**
 * Calculo do IMC
 * @author João José
 */

 // Variáveis globais
 let imc, altura, peso;

 function calcular(){
    peso = Number(frmImc.txtPeso.value.replace(",","."))
    altura = Number(frmImc.txtAltura.value.replace(",","."))
    imc = peso / (altura*altura)
    frmImc.txtImc.value = imc.toFixed(2)
 
  if (imc < 16.99){
    document.getElementById('status').src='imc1.png'
 } else if (imc > 17 && 18.49) {
    document.getElementById('status').src='imc2.png'
 } if (imc > 18.50 && 24.99) {
    document.getElementById('status').src='imc3.png' 
 } else if (imc > 25 && 29.99) {
    document.getElementById('status').src='imc4.png'
 } if (imc > 30 && 34.99) {
    document.getElementById('status').src='imc5.png'
 } else if (imc > 35 && 39.99) {
    document.getElementById('status').src='imc6.png'
 } if (imc > 40) {
    document.getElementById('status').src='imc7.png'
 }
}