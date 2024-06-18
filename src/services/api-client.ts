import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "316f4f6a6ba04d4d82d353a96bdfea54",
	},
});
