class Forca {

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;    
    this.vidas = 6;
    this.letrasChutadas = new Array();
    this.palavraJogo = new Array();
    
  }   

  chutar(letra) {
    var chute = new Array();
    chute = letra;
    var palavra = new Array();
    palavra = this.palavraSecreta;

    if(chute.length < 2 && chute != "") {
      chute = this.letrasChutadas.includes(letra);
      var letraCerta = palavra.includes(letra);

      if(chute === false){
        this.letrasChutadas.push(letra);        
      }

      if(letraCerta === false){
        --this.vidas;        
      } else {
        this.palavraJogo.push(letra); 
      }

    }   

  }

  
  buscarEstado() {
    if(this.vidas > 0 && this.palavraJogo.length != this.palavraSecreta.length){
      return "aguardando chute";
    } else if(this.palavraJogo.length == this.palavraSecreta.length){ //Falta ajeitar para comparar com a palavra certa e não com o tamanho
      return "ganhou";
    } else {
      return "perdeu"; 
    }    
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  //Falta trazer a palavra com os espaços "_" e letras nos locais
  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavraJogo // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
