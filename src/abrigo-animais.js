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

		ordemAnimais = ordemAnimais.split(',')
		console.log(ordemAnimais)
		let resultadoAdocao = []
		let animaisAdotadosPessoa1 = [];
		let animaisAdotadosPessoa2 = [];

		for (const animalAtual of ordemAnimais) {
			let brinquedosAnimal;

			for (const animalOriginal of animais) {
				if (animalAtual === animalOriginal.nome) {
					brinquedosAnimal = animalOriginal.brinquedos.split(',')
					console.log("Brinquedos do animal original: " + brinquedosAnimal)
					const listaBrinquedosPessoa1 = brinquedosPessoa1.split(',');
					const listaBrinquedosPessoa2 = brinquedosPessoa2.split(',');
					let brinquedosValidosPessoa1 = [];
					let brinquedosValidosPessoa2 = [];
			
					for (const brinquedoAnimal of brinquedosAnimal) {
						for (const brinquedoPessoa1 of listaBrinquedosPessoa1) {
							if (brinquedoPessoa1 === brinquedoAnimal) {
								brinquedosValidosPessoa1.push(brinquedoPessoa1)
							}
						}
						for (const brinquedoPessoa2 of listaBrinquedosPessoa2) {
							if (brinquedoPessoa2 === brinquedoAnimal) {
								brinquedosValidosPessoa2.push(brinquedoPessoa2)
							}
						}
							// git push -u origin main
					}
			
					brinquedosValidosPessoa1 = brinquedosValidosPessoa1.join(',')
					console.log("Brinquedos da pessoa 1: " + brinquedosValidosPessoa1)
					brinquedosValidosPessoa2 = brinquedosValidosPessoa2.join(',')
					console.log("Brinquedos da pessoa 2: " + brinquedosValidosPessoa2)

					if (animalOriginal.brinquedos === brinquedosValidosPessoa1 && animalOriginal.brinquedos === brinquedosValidosPessoa2) {
						resultadoAdocao.push(animalOriginal.nome + " - " + this.ABRIGO)
					} else if (animalOriginal.brinquedos === brinquedosValidosPessoa1) {
						resultadoAdocao.push(animalOriginal.nome + " - " + this.PESSOA_1)
					} else if (animalOriginal.brinquedos === brinquedosValidosPessoa2) {
						resultadoAdocao.push(animalOriginal.nome + " - " + this.PESSOA_2)
					} else {
						resultadoAdocao.push(animalOriginal.nome + " - " + this.ABRIGO)
					}
				}
			}
		}

		return resultadoAdocao

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
