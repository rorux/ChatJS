import Component from "../../services/Component";
import tpl from "./tpl";
import "./page-error.scss";

export class ServerError extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default (): Component =>
  new ServerError("div", { attr: { class: "content-center" } });
