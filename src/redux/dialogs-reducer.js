const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
	dialogs: [
		{ id: 1, name: "Дмитрий" },
		{ id: 2, name: "Сергей" },
		{ id: 3, name: "Александр" },
		{ id: 4, name: "Иван" },
		{ id: 5, name: "Владимир" }
	],
	messages: [
		{ id: 1, message: "HI" },
		{ id: 2, message: "HOW ARE YOU" },
		{ id: 3, message: "YO" },
		{ id: 4, message: "YO" },
		{ id: 5, message: "YO" }
	]
}

const dialogsReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody
			return { ...state, messages: [...state.messages, { id: 6, message: body }] }
		default:
			return state
	}
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
export default dialogsReducer