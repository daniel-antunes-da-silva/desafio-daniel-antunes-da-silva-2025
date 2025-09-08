import { animais } from "./dados-animais.js"

class AbrigoAnimais {
	constructor() {
		this.PESSOA_1 = "pessoa 1";
		this.PESSOA_2 = "pessoa 2";
		this.ABRIGO = "abrigo";
	}

	encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
		if (!this.validarAnimal(ordemAnimais)) {
			return { erro: 'Animal inválido' };
		}

		const resultadoBrinquedos = this.validarBrinquedos(brinquedosPessoa1, brinquedosPessoa2);

		if (!resultadoBrinquedos.valido) {
			return { erro: 'Brinquedo inválido' };
		}

		brinquedosPessoa1 = brinquedosPessoa1.split(',')
		brinquedosPessoa2 = brinquedosPessoa2.split(',')
		console.log("Brinquedos Pessoa 1: ", brinquedosPessoa1)
		console.log("Brinquedos Pessoa 2: ", brinquedosPessoa2)

		const nomesRecebidos = ordemAnimais.split(','); // .sort()


		// Itera sobre os nomes de animais recebidos
		for (const nomeRecebido of nomesRecebidos) {
			// Itera sobre a lista de animais totais
			for (const animal of animais) {
				// Verifica se o nome recebido é igual ao nome do animal da lista total. 
				if (animal.nome === nomeRecebido) {
					let brinquedosTempPessoa1 = brinquedosPessoa1.filter(brinquedo => animal.brinquedos.includes(brinquedo));
					let brinquedosTempPessoa2 = brinquedosPessoa2.filter(brinquedo => animal.brinquedos.includes(brinquedo));
					if (brinquedosTempPessoa1.join(',') === animal.brinquedos.join(',')) {
						console.log("Pessoa 1");
					} else if (brinquedosTempPessoa2.join(',') === animal.brinquedos.join(',')) {
						console.log("Pessoa 2");
					}
				}
			}
		}

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
		return { brinquedos: brinquedosPessoas, valido: true };
	}
}

// const resultado = new AbrigoAnimais().validarBrinquedos('BOLA,LASER', 'BOLA,NOVELO,RATO,LASER')
const resultado2 = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
	'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola')

// console.log(resultado)
// console.log(resultado2)

export { AbrigoAnimais as AbrigoAnimais };
