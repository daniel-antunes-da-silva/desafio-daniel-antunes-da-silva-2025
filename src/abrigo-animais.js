import { animais} from "./dados-animais.js"

class AbrigoAnimais {
	constructor() {
		this.PESSOA_1 = "pessoa 1";
		this.PESSOA_2 = "pessoa 2";
		this.ABRIGO = "abrigo";
	}
	
	encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
		if (!this.validarAnimal(ordemAnimais))  {
			return {erro: 'Animal inválido'};
		}

		resultadoBrinquedos = this.validarBrinquedos(brinquedosPessoa1, brinquedosPessoa2)
		if (!resultadoBrinquedos.valido) {
			return {erro: 'Brinquedo inválido'};
		}

		const brinquedosPessoas = resultadoBrinquedos.brinquedosPessoas


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

	validarBrinquedos(brinquedosPessoa1, brinquedosPessoa2) {
		const brinquedosPessoas = [brinquedosPessoa1.split(','), brinquedosPessoa2.split(',')]
		let brinquedosValidos = new Set();

		for (const animal of animais) {
			animal.brinquedos.forEach((brinquedo) => brinquedosValidos.add(brinquedo));
		}

		for (const brinquedoPessoa of brinquedosPessoas) {
			let duplicados = new Set();

			for (const brinquedo of brinquedoPessoa) {
				if (duplicados.has(brinquedo) || !brinquedosValidos.has(brinquedo)) {
					return false
				} else {
					duplicados.add(brinquedo)
				}
			}

		}
		console.log('------------------------')
		return {brinquedos: brinquedosPessoas, valido: true};
	}
}

// const resultado = new AbrigoAnimais().validarBrinquedos('BOLA,LASER', 'BOLA,NOVELO,RATO,LASER')
const resultado2 = new AbrigoAnimais().encontraPessoas('BOLA,LASER', 
	'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola')

// console.log(resultado)
console.log(resultado2)

export { AbrigoAnimais as AbrigoAnimais };
