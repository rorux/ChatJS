import Store from './Store';
import { TUser } from "../../api/auth";
import { TChat } from "../../api/chats";

const store = new Store();

const getUserState = (): TUser | {} => {
  const state = store.getState();
  return state.user ?? {};
}

const changeUserData = (user: TUser) => {
  store.set('user', user);
}

const getChatState = (): TChat | {} => {
  const state = store.getState();
  return state.chat ?? {};
}

const changeChatData = (chat: TChat) => {
  store.set('chat', chat);
}

export {
  getUserState,
  changeUserData,
  getChatState,
  changeChatData
}