import { Pessoa } from "./pessoa.js";
import { animais} from "./dados-animais.js"

class AbrigoAnimais {
	
	encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
	if (!this.validarAnimal(ordemAnimais))  {
		return {erro: 'Animal inválido'}
	}
}

  validarAnimal(ordemAnimais) {
	let listaAnimais = ordemAnimais.split(',')
	listaAnimais.sort()
	let animaisUnicos = []
	for (let animal of listaAnimais) {
		animal = animal.trim()
		if (animaisUnicos.includes(animal)) {
			return false
		}
		if (!animais.includes(animal)) {
			return false
		}
		animaisUnicos.push(animal)
	}
	return true
  }
}

export { AbrigoAnimais as AbrigoAnimais };
