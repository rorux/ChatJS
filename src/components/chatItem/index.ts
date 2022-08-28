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

    deleteChatBtn.addEventListener("click", (e) => {
      e.preventDefault();
      ChatsAPI.deleteChat({
        data: { chatId: +this._props.id },
        headers: {'Content-Type': 'application/json'}
      }).then(() => console.log(
          `Чат ${this._props.id} удален...`
        )
      )
    })

    activeChatBtn.addEventListener("click", (e) => {
      e.preventDefault();
      Actions.changeChatData({
        id: +this._props.id,
        name: this._props.name as string,
      })
    })
  }
}
