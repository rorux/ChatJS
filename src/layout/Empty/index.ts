import Component from "../../services/Component";
import tpl from "./tpl";

export default class EmptyLayout extends Component {
  render() {
    return this.compile(tpl);
  }
}
