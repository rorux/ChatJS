import Component from "../../services/Component";
import tpl from "./tpl";
import "./search.scss";

export default class Search extends Component {
  render() {
    return this.compile(tpl);
  }
}
