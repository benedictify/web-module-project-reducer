export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";



export const applyNumber = (number) => {
	return({ type:APPLY_NUMBER, payload:number });
}

export const changeOperation = (newOperationString) => {
	return({ type: CHANGE_OPERATION, payload: newOperationString })
}
