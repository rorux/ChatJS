import Component, {TpropsAndChilds} from "../../core/Component";
import tpl from "./tpl";
import "./chatItem.scss";
import { ChatsAPI } from "../../api";
import { Actions } from "../../core/Store";
import Store_ from "../../core/Store/Store";
import Store from "../../core/Store";

export default class ChatItem extends Component {
  constructor(tagName: string, props: TpropsAndChilds) {
    super(tagName, props);
    Store.on(Store_.EVENT_UPDATE, () => {
      return this.setProps(Store.getState());
    });
  }
  render() {
    return this.compile(tpl);
  }

  addEvents() {
    const activeChatBtn = this._element.querySelector("#activate-chat") as HTMLButtonElement;
    const deleteChatBtn = this._element.querySelector("#delete-chat") as HTMLButtonElement;
    const chatItemWrap = this._element.querySelector(".chat-item__wrap") as HTMLButtonElement;

    deleteChatBtn.addEventListener("click", (e) => {
      e.preventDefault();
      ChatsAPI.deleteChat({
        data: { chatId: +this._props.id },
        headers: {'Content-Type': 'application/json'}
      }).then(() => {
        chatItemWrap.style.display = "none";
        console.log(`Чат ${this._props.id} удален...`)
      }
      )
    })

    activeChatBtn.addEventListener("click", (e) => {
      e.preventDefault();
      Actions.changeChatData({
        id: +this._props.id,
        name: this._props.name as string,
      })
      ChatsAPI.getToken(+this._props.id)
        .then(res => res.response.token)
        .then(token => {
          //@ts-ignore
          const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${Actions.getUserState()?.id}/${this._props.id}/${token}`);

          socket.addEventListener('open', () => {
            console.log('Соединение установлено');

            socket.send(JSON.stringify({
              content: 'Моё первое сообщение миру!',
              type: 'message',
            }));
          });

          socket.addEventListener('close', event => {
            if (event.wasClean) {
              console.log('Соединение закрыто чисто');
            } else {
              console.log('Обрыв соединения');
            }

            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
          });

          socket.addEventListener('message', event => {
            console.log('Получены данные', event.data);
          });

          socket.addEventListener('error', event => {
            console.log('Ошибка', event.message);
          });
        })
    })
  }
}
