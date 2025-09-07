import { animais} from "./dados-animais.js"

class AbrigoAnimais {
	// constructor() {
	// 	this.PESSOA_1 = "pessoa 1";
	// 	this.PESSOA_2 = "pessoa 2";
	// 	this.ABRIGO = "abrigo";
	// }
	
	encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
	if (!this.validarAnimal(ordemAnimais))  {
		return {erro: 'Animal inválido'};
	}

	// let resultadoAdocao = []
	// for (const animal of animais) {
	// 	console.log(animal.brinquedos)
	// 	const brinquedosAnimais = animal.brinquedos.split(',');
	// 	const listaBrinquedosPessoa1 = brinquedosPessoa1.split(',');
	// 	const listaBrinquedosPessoa2 = brinquedosPessoa2.split(',');
	// 	let brinquedosValidosPessoa1 = [];
	// 	let brinquedosValidosPessoa2 = [];

	// 	for (const brinquedoAnimal of brinquedosAnimais) {
	// 		for (const brinquedoPessoa1 of listaBrinquedosPessoa1) {
	// 			if (brinquedoPessoa1 == brinquedoAnimal) {
	// 				brinquedosValidosPessoa1.push(brinquedoPessoa1)
	// 			}
	// 		for (const brinquedoPessoa2 of listaBrinquedosPessoa2) {
	// 			if (brinquedoPessoa2 == brinquedoAnimal) {
	// 				brinquedosValidosPessoa2.push(brinquedoPessoa2)
	// 			}
	// 		}
	// 			// Para cada brinquedo do animal, vou verificar os brinquedos da pessoa
	// 			// se o brinquedo da pessoa for igual ao brinquedo atual do animal, adicionar numa lista temporaria.
	// 			// caso seja diferente, apenas passar para a próxima iteração.
	// 			// Após isso, verificar igualdade das listas... enfim, ver o restante da lógica.
	// 			// git push -u origin main
	// 		}
	// 	}

	// 	brinquedosPessoa1 = brinquedosValidosPessoa1.join(',')
	// 	console.log("Brinquedos da pessoa 1: " + brinquedosPessoa1)
	// 	brinquedosPessoa2 = brinquedosValidosPessoa2.join(',')
	// 	console.log("Brinquedos da pessoa 2: " + brinquedosPessoa2)

	// 	if (animal.brinquedos === brinquedosPessoa1 && animal.brinquedos == brinquedosPessoa2) {
	// 		resultadoAdocao.push(animal.nome + " - " + this.ABRIGO)
	// 	} else if (animal.brinquedos === brinquedosPessoa1) {
	// 		resultadoAdocao.push(animal.nome + " - " + this.PESSOA_1)
	// 	} else if (animal.brinquedos === brinquedosPessoa2) {
	// 		resultadoAdocao.push(animal.nome + " - " + this.PESSOA_2)
	// 	} else {
	// 		resultadoAdocao.push(animal.nome + " - " + this.ABRIGO)
	// 	}
	// }

	// return resultadoAdocao

  }

  validarAnimal(ordemAnimais) {
	let listaAnimais = ordemAnimais.split(',');
	const totalNomesAnimais = animais.map(animal => animal.nome);
	listaAnimais.sort();
	let animaisUnicos = [];
	for (let animal of listaAnimais) {
		animal = animal.trim();
		if (animaisUnicos.includes(animal)) {
			return false;
		}
		if (!totalNomesAnimais.includes(animal)) {
			return false;
		}
		animaisUnicos.push(animal);
	}
	return true;
  }
}

const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER', 
	'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola')

console.log(resultado)

export { AbrigoAnimais as AbrigoAnimais };
