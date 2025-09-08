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
		const nomesRecebidos = ordemAnimais.split(',').sort();
		let resultadoAdocao = []
		let adotados = {
			"pessoa 1": [],
			"pessoa 2": []
		}

		for (const nomeRecebido of nomesRecebidos) {
			for (const animal of animais) {
				if (animal.nome === nomeRecebido) {
					let brinquedosTempPessoa1 = brinquedosPessoa1.filter(brinquedo => animal.brinquedos.includes(brinquedo)).join(',');
					let brinquedosTempPessoa2 = brinquedosPessoa2.filter(brinquedo => animal.brinquedos.includes(brinquedo)).join(',');
					let brinquedosAnimal = animal.brinquedos.join(',')

					if (brinquedosTempPessoa1 === brinquedosAnimal && brinquedosTempPessoa2 === brinquedosAnimal) {
						resultadoAdocao.push(`${animal.nome} - ${this.ABRIGO}`)
					} else if (brinquedosTempPessoa1 === brinquedosAnimal) {
						const valido = this.verificarConflitoAdocao(adotados[this.PESSOA_1], animal.tipo, animal.brinquedos)
						if (valido) {
							adotados[this.PESSOA_1].push({
								tipo: animal.tipo,
								brinquedos: animal.brinquedos
							});
							resultadoAdocao.push(`${animal.nome} - ${this.PESSOA_1}`)
						} else {
							resultadoAdocao.push(`${animal.nome} - ${this.ABRIGO}`)
						}
					} else if (brinquedosTempPessoa2 === brinquedosAnimal) {
						const valido = this.verificarConflitoAdocao(adotados[this.PESSOA_2], animal.tipo, animal.brinquedos)
						if (valido) {
							adotados[this.PESSOA_2].push({
								tipo: animal.tipo,
								brinquedos: animal.brinquedos
							});
							resultadoAdocao.push(`${animal.nome} - ${this.PESSOA_2}`)
						} else {
							resultadoAdocao.push(`${animal.nome} - ${this.ABRIGO}`)
						}
					} else {
						resultadoAdocao.push(`${animal.nome} - ${this.ABRIGO}`)
					}
					console.log(adotados)
					// para não percorrer o restante da lista de animais, pois o nome recebido já foi encontrado.
					break;
				}
			}
		}
		console.log(resultadoAdocao)
		return {lista: resultadoAdocao}
	}

	verificarConflitoAdocao(adotados, tipoNovoAnimal, brinquedosNovoAnimal) {
		let brinquedoExistente = [];
		let gatoExistente = [];
		for (const brinquedo of brinquedosNovoAnimal) {
			brinquedoExistente.push(adotados.some(item => item.brinquedos.includes(brinquedo)));
			gatoExistente.push(adotados.some(item => item.tipo.includes("gato")));
			console.log(brinquedoExistente)
			console.log(gatoExistente)
		}
		if (gatoExistente.includes(true) && brinquedoExistente.includes(true)) {
			return false;
		} else if (brinquedoExistente.includes(true) && tipoNovoAnimal == "gato") {
			return false;
		} else {
			return true;
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
		if (!brinquedosPessoa1 || !brinquedosPessoa2) {
			return {valido: false}
		}
		const brinquedosPessoas = [brinquedosPessoa1.split(','), brinquedosPessoa2.split(',')]
		let brinquedosValidos = new Set();

		for (const animal of animais) {
			animal.brinquedos.forEach((brinquedo) => brinquedosValidos.add(brinquedo));
		}

		for (const brinquedoPessoa of brinquedosPessoas) {
			let duplicados = new Set();
			for (const brinquedo of brinquedoPessoa) {
				if (duplicados.has(brinquedo) || !brinquedosValidos.has(brinquedo)) {
					return {valido: false}
				} else {
					duplicados.add(brinquedo)
				}
			}
		}
		return { brinquedos: brinquedosPessoas, valido: true };
	}
}


export { AbrigoAnimais as AbrigoAnimais };
