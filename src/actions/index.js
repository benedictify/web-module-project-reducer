export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEM_ADD = "MEM_ADD";
export const MEM_RECALL = "MEM_RECALL";
export const MEM_CLEAR = "MEM_CLEAR";

export const applyNumber = (number) => {
	return({ 
		type:APPLY_NUMBER, payload:number 
	})
}

export const changeOperation = (newOperationString) => {
	return({ 
		type: CHANGE_OPERATION, payload: newOperationString 
	})
}

export const clearDisplay = () => {
	return({ 
		type: CLEAR_DISPLAY 
	})
}

export const memAdd = () => {
	return({
		type: MEM_ADD
	})
}

export const memRecall = () => {
	return({
		type: MEM_RECALL
	})
} 

export const memClear = () => {
	return({
		type: MEM_CLEAR
	})
} 
