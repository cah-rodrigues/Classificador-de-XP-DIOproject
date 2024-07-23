function classificar() {
    let nome = document.getElementById('nome').value;
    let xp = parseInt(document.getElementById('xp').value);
    let resultado = classificarHeroi(nome, xp);
    document.getElementById('resultado').textContent = resultado;
  }
  
  function classificarHeroi(nome, xp) {
    const niveis = [
      { limite: 1000, nome: 'Ferro' },
      { limite: 2000, nome: 'Bronze' },
      { limite: 5000, nome: 'Prata' },
      { limite: 7000, nome: 'Ouro' },
      { limite: 8000, nome: 'Platina' },
      { limite: 9000, nome: 'Ascendente' },
      { limite: 10000, nome: 'Imortal' },
      { limite: Infinity, nome: 'Radiante' }
    ];
  
    let nivel = 'Nível Desconhecido';
  
    for (let i = 0; i < niveis.length; i++) {
      if (xp <= niveis[i].limite) {
        nivel = niveis[i].nome;
        break;
      }
    }
  
    return `O Herói de nome ${nome} está no nível de ${nivel}`;
  }
  