export default class Camera {
	#config;

	constructor(config) {
		this.#config = config;
	}

	async #check() {
		return (
			window.navigator.mediaDevices &&
			window.navigator.mediaDevices.getUserMedia()
		);
	}

	async init() {
		if (!this.#check) return "Media devices API not allowed";
		return window.navigator.mediaDevices.getUserMedia(this.#config);
	}

	static async initialize() {
		const camera = new Camera();
		return camera.init;
	}
}
