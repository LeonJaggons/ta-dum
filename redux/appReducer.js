const appState = {
	appTitle: "TaDum",
	appState: "SIGN_IN",
};

const appReducer = (state = appState, action) => {
	switch (action.type) {
		case "SET":
			return {
				...state,
				[action.attrName]: action.payload,
			};
		default:
			return { ...state };
	}
};

export default appReducer;
