import Component, {TpropsAndChilds} from "../../../core/Component";
import tpl from "./tpl";
import Toolbar from "../../../components/toolbar";
import messageList from "../../../components/messageList";
import messageForm from "../../../components/messageForm";
import { Actions } from "../../../core/Store";
import { TChat } from "../../../api/chats";
import connect from "../../../core/Store/Connect";

export class ChatsArea extends Component {
  render() {
    return this.compile(tpl);
  }
}

const ChatsAreaConnectedStore = connect(ChatsArea, (state) => {
  return state.chat ?? {}
})

export default () =>
  new ChatsAreaConnectedStore("div", {
    name: (Actions.getChatState() as TChat).name,
    attr: { class: "chat-area" },
    toolbar: new Toolbar("header", {
      attr: { class: "toolbar" },
    }),
    messageList: messageList(),
    messageForm: messageForm(),
  });
