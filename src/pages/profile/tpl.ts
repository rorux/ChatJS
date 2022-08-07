export default `
  <div class="form-edit" action="#">
    <div class="form-edit__avatar form-edit__avatar_hover">
      <input type="file" name="new-avatar" id="new-avatar" />
      <label for="new-avatar" class="new-avatar-label">
        Поменять аватар
      </label>
      <img src="img/avatar-lg.png" alt="" width="130" height="130" />
      <div class="form-edit__title"> Иван </div>
    </div>

    {{{ formInputEditEmail }}}
    {{{ formInputEditLogin }}}
    {{{ formInputEditFirstName }}}
    {{{ formInputEditLastName }}}
    {{{ formInputEditDisplayName }}}
    {{{ formInputEditTel }}}

    <div class="form-edit__bottom">
      <a href="edit-profile" class="link form-edit__link"
        >Изменить данные</a
      >
      <a href="edit-password" class="link form-edit__link"
        >Изменить пароль</a
      >
      <a href="#" class="link-red form-edit__link">Выйти</a>
    </div>
  </div>
`;