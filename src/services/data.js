export default class Data {
  static database = [
    {
      id: "fkqrcovh9s185p4sj9wm60uy",
      name: "Matheus",
      email: "matheus@kenzie.com",
      password: "Matheus!1234",
    },
  ];

  static idGenerator() {
    const id =
      Math.floor(Date.now() * Math.random()).toString(36) +
      Math.floor(Date.now() * Math.random()).toString(36) +
      Math.floor(Date.now() * Math.random()).toString(36);

    return id;
  }
}
