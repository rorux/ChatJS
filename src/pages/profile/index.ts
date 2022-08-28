import Component from "../../core/Component";
import tpl from "./tpl";
import formInputEdit from "../../components/formInputEdit";
import { AuthAPI, UsersAPI } from "../../api";
import Router from "../../core/Router";

export class Profile extends Component {
  render() {
    return this.compile(tpl);
  }

  addEvents() {
    this.addEventsForms();
    const logoutBtn = this._element.querySelector("#logout") as HTMLFormElement;
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      AuthAPI.logout();
      (new Router()).go('/auth');
    })

    const sendAvatarForm = this._element.querySelector("#sendAvatar") as HTMLFormElement;
    const successMsg = this._element.querySelector(".success") as HTMLDivElement;
    const errorMsg = this._element.querySelector(".error") as HTMLDivElement;

    sendAvatarForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = new FormData(sendAvatarForm);

      UsersAPI.changeAvatar({ data: form })
       .then((res) => {
         if(res.status === 200) {
           successMsg.innerText = 'Аватар изменен, обновите страницу!';
           errorMsg.innerText = '';
         }
         else {
           errorMsg.innerText = 'Аватар не изменен, выберите изображение!';
           successMsg.innerText = '';
         }
       });
    });

  }
}

export default (): Promise<Component> => {
  return AuthAPI.getUserInfo().then(
    resGetUser =>
      new Profile("div", {
        attr: {class: "content-center"},
        displayName: resGetUser.response["display_name"],
        avatar: resGetUser.response.avatar
                ? `https://ya-praktikum.tech/api/v2/resources/${resGetUser.response.avatar}`
                : 'img/avatar-lg.png',
        formInputEditEmail: new formInputEdit("div", {
          type: "text",
          param: "email",
          name: "Почта",
          value: resGetUser.response.email,
          disabled: true,
          attr: {class: "form-edit__group"},
        }),
        formInputEditLogin: new formInputEdit("div", {
          type: "text",
          param: "login",
          name: "Логин",
          value: resGetUser.response.login,
          disabled: true,
          attr: {class: "form-edit__group"},
        }),
        formInputEditFirstName: new formInputEdit("div", {
          type: "text",
          param: "first_name",
          name: "Имя",
          value: resGetUser.response.first_name,
          disabled: true,
          attr: {class: "form-edit__group"},
        }),
        formInputEditLastName: new formInputEdit("div", {
          type: "text",
          param: "second_name",
          name: "Фамилия",
          value: resGetUser.response.second_name,
          disabled: true,
          attr: {class: "form-edit__group"},
        }),
        formInputEditDisplayName: new formInputEdit("div", {
          type: "text",
          param: "display_name",
          name: "Имя в чате",
          value: resGetUser.response.display_name,
          disabled: true,
          attr: {class: "form-edit__group"},
        }),
        formInputEditTel: new formInputEdit("div", {
          type: "tel",
          param: "phone",
          name: "Телефон",
          value: resGetUser.response.phone,
          disabled: true,
          attr: {class: "form-edit__group"},
        }),
      })
    )
}