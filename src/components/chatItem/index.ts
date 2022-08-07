import Component from "../../services/Component";
import tpl from "./tpl";
import "./chatItem.scss";

export default class ChatItem extends Component {
  render() {
    return this.compile(tpl);
  }
}
