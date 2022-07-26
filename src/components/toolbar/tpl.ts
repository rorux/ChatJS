export default `
  <div class="toolbar__person">
    <img
      class="chat-item__avatar"
      src="img/avatar.png"
      alt=""
      width="34"
      height="34"
    />
    <div class="chat-item__content">
      <span class="chat-item__person">{{firstName}}</span>
    </div>
  </div>
  <button class="toolbar__toggle">
    <svg
      width="3"
      height="16"
      viewBox="0 0 3 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.5" cy="2" r="1.5"></circle>
      <circle cx="1.5" cy="8" r="1.5"></circle>
      <circle cx="1.5" cy="14" r="1.5"></circle>
    </svg>
  </button>
`;
