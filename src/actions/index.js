export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const applyNumber = (number) => {
	return({ type:APPLY_NUMBER, payload:number });
}

export const changeOperation = (newOperationString) => {
	return({ type: CHANGE_OPERATION, payload: newOperationString })
}

export const clearDisplay = () => {
	return({ type: CLEAR_DISPLAY })
}
