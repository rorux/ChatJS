export default `
  <form class="form-edit" action="#">
    <div class="form-edit__avatar">
      <img src="img/avatar-lg.png" alt="" />
    </div>

    {{{ formInputEditOldPassword }}}
    {{{ formInputEditNewPassword }}}
    {{{ formInputEditNewPasswordRepeat }}}

    <div class="form-edit__bottom">
      <button type="submit" class="form-edit__submit button">
        Сохранить
      </button>
    </div>
    <div class="error"></div>
  </form>
`;
