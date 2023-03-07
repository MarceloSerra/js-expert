export default class View {
	#btnStartElement = document.createElement("button");
	#cameraInstance;
	#cameraElement = document.createElement("video");

	constructor(cameraInstance) {
		this.#cameraInstance = cameraInstance;
	}

	addBtnStart() {
		this.#btnStartElement.innerText = "Start Camera";
		document.body.append(this.#btnStartElement);
	}

	async handleStartCamera() {
		this.#btnStartElement.onclick = () => {
			this.#cameraStreamStart(true);
		};
	}

	#setVideoDimensions() {
		this.#cameraElement.width = 768;
		this.#cameraElement.height = 384;
	}

	async #cameraStreamStart(show = false) {
		const cameraStream = await this.#cameraInstance.init();
		this.#cameraElement.srcObject = cameraStream;

		show && this.#setVideoDimensions();

		this.#cameraElement.onloadedmetadata = () => {
			this.#cameraElement.play();
		};

		document.body.append(this.#cameraElement);
	}
}
