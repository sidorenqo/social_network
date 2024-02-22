import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import dialogsReducer from "./dialogs-reducer"


let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi, how are you?", likesCount: "❤️ 10" },
				{ id: 2, message: "It`s my first post", likesCount: "❤️ 333" }
			],
			newPostText: "Текст сообщения"
		},
		
		dialogsPage: {
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
			],
			newMessageBody: "Введите сообщение"
		},
		
		sidebar: {
			friends: [
				{ id: 1, name: "Андрей" },
				{ id: 2, name: "Саша" },
				{ id: 3, name: "Александр" }
			]
		}
	},
	_callSubscriber() {
		console.log("state change")
	},
	
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	
	dispatch(action) {  //// обязательно имеет тип: type: 'ADD-POST'
		
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebarPage, action)
		
		this._callSubscriber(this._state)
		
	}
}


export default store
window.store = store