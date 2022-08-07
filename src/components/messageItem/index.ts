import Component from "../../services/Component";
import tpl from "./tpl";

export default class MessageItem extends Component {
  render() {
    return this.compile(tpl);
  }
}
