const Calcular = document.getElementById('Calcular');

function imc(){
    const Nome = document.getElementById('Nome').value;
    const Altura = document.getElementById('Altura').value;
    const Peso = document.getElementById('Peso').value;
    const tela = document.getElementById('tela');

     if (Nome !=='' && Altura !=='' && Peso !==' '){

      const valorIMC = (Peso/(Altura * Altura)).toFixed(1);

      let classificacao = '';

      if(valorIMC< 18.5){
       classificacao= 'abaixo do peso.';
      } else if(valorIMC < 25){
       classificacao= 'com peso ideal. parabens!!! ';
      } else if(valorIMC < 30){
       classificacao='Estas acima do peso';
      } else if(valorIMC < 35){
       classificacao = 'com obesidade grau II';
      } else{
       classificacao = 'com obesidade grau III. cuidado!!';
      }

   
      tela.textContent= `${Nome} seu IMC é ${valorIMC} e voce esta ${classificacao}`;
     }
     else{
        tela.textContent = 'Preencha todos os campos!!!';
     }
}
Calcular.addEventListener('click', imc);