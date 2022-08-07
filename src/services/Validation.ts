export default class Validation {
  static focus(value: string, type: string, validationBlock: HTMLElement) {
    switch (type) {
      case "login":
        if (!value) validationBlock.innerText = "Введите логин";
        break;
      case "first_name":
        if (!value) validationBlock.innerText = "Введите имя";
        break;
      case "second_name":
        if (!value) validationBlock.innerText = "Введите фамилию";
        break;
      case "display_name":
        if (!value) validationBlock.innerText = "Введите имя";
        break;
      case "phone":
        if (!value) validationBlock.innerText = "Введите телефон";
        break;
      case "email":
        if (!value) validationBlock.innerText = "Введите Email";
        break;
      case "password":
      case "password_again":
      case "old-password":
      case "new-password":
      case "new-password-repeat":
        if (!value) validationBlock.innerText = "Введите пароль";
        break;
    }
  }

  static blur(value: string, type: string, validationBlock: HTMLElement) {
    switch (type) {
      case "login":
        if (!value) validationBlock.innerText = "Введите логин";
        else if (!value.match(/^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/))
          validationBlock.innerText = "Неверный логин";
        else validationBlock.innerText = "";
        break;
      case "first_name":
        if (!value) validationBlock.innerText = "Введите имя";
        else if (!value.match(/^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ-]+$/))
          validationBlock.innerText = "Недопустимые символы в имени";
        else validationBlock.innerText = "";
        break;
      case "second_name":
        if (!value) validationBlock.innerText = "Введите фамилию";
        else if (!value.match(/^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ-]+$/))
          validationBlock.innerText = "Недопустимые символы в фамилии";
        else validationBlock.innerText = "";
        break;
      case "display_name":
        if (!value) validationBlock.innerText = "Введите имя";
        else if (!value.match(/^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ-]+$/))
          validationBlock.innerText = "Недопустимые символы в имени";
        else validationBlock.innerText = "";
        break;
      case "phone":
        if (!value) validationBlock.innerText = "Введите телефон";
        else if (!value.match(/^\+*\d{10,15}$/))
          validationBlock.innerText = "Введите корректный номер телефона";
        else validationBlock.innerText = "";
        break;
      case "email":
        if (!value) validationBlock.innerText = "Введите Email";
        else if (!value.match(/^[a-z]+[a-z-]+\@[a-z]+\.[a-z]+$/))
          validationBlock.innerText = "Введите корректный Email";
        else validationBlock.innerText = "";
        break;
      case "password":
      case "password_again":
      case "old-password":
      case "new-password":
      case "new-password-repeat":
        if (!value) validationBlock.innerText = "Введите пароль";
        else if (
          !value.match(
            /(?<!\S)(?=\S{8,40}(?!\S))\S*(\d\S*[A-ZА-ЯЁ]|[A-ZА-ЯЁ]\S*\d)\S*/
          )
        )
          validationBlock.innerText = "Неверный пароль";
        else validationBlock.innerText = "";
        break;
    }
  }
}
