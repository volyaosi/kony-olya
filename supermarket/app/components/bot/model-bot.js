export default class ModelBot {
  constructor() {
    this.initTokens();
  }

  get url() {
    return `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&parse_mode=MarkdownV2&text=`;
  }

  send = ({ id, name, total }) => {
    const msg = `New Order Stat: ID${id}, client name ${name}, total amount ${total}USD`;
    fetch(`${this.url}${msg}`);
  };

  initTokens = (_) => {
    this.token = localStorage.getItem("bot");
    this.chatId = localStorage.getItem("chat");
  };
}
