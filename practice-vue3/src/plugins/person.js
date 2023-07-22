export default {
  install(app, options) {
    const person = {
      name: 'sychoi',
      say() {
        alert(this.name);
      },
      ...options,
    };

    app.config.globalProperties.$person = person;
    app.provide('person', person);
  },
};
