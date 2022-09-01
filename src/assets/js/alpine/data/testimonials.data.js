import jsonURL from '/assets/json/clients.json?url';

export default () => ({
  clients: {
    all: [],
    onStage: [],
  },
  buttonDisabled() {
    return this.clients.onStage.length >= 9 ? true : false;
  },
  more() {
    const start = this.clients.onStage.length;
    const end = start + 3;
    this.clients.onStage.push(...this.clients.all.slice(start, end));
  },
  async init() {
    let response = await fetch(jsonURL);
    let clients = await response.json();
    this.clients.all = clients;
    this.more();
  },
});