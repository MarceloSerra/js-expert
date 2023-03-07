export default class Controller {
	#view;
	#service;

	constructor({ view, service }) {
		this.#view = view;
		this.#service = service;
	}

	#init() {
		this.#view.addBtnStart();
		this.#view.handleStartCamera();
	}

	static initialize(deps) {
		const controller = new Controller(deps);
		controller.#init();
	}
}
