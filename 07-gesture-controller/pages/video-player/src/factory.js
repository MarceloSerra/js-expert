import Controller from "./controller.js";
import View from "./view.js";
import Service from "./service.js";
import Camera from "../../lib/shared/camera.js";

const cameraConfig = {
	audio: false,
	video: {
		width: globalThis.innerWidth,
		heigth: globalThis.innerWidth,
		sampleRate: 60,
	},
};
const camera = new Camera(cameraConfig);

const factory = {
	async initialize() {
		return Controller.initialize({
			view: new View(camera),
			service: new Service(),
		});
	},
};

export default factory;
