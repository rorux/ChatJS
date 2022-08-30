import Component, {TpropsAndChilds} from "../../core/Component";
import tpl from "./tpl";
import { TUser } from "../../api/auth";
import { Actions } from "../../core/Store";
import "./toolbar.scss";

export default class Toolbar extends Component {
  constructor(tag: string, props: TpropsAndChilds) {
    props.displayName = (Actions.getUserState() as TUser).display_name
    super(tag, props)
  }
  render() {
    return this.compile(tpl);
  }
}
