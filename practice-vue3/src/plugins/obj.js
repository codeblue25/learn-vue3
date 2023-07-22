const objPlugins = {
  install(app, options) {
    console.log('objPlugins app: ', app);
    console.log('objPlugins options: ', options);

    // app.component() 전역 컴포넌트를 추가할 수 있음
    // app.config.globalProperties 전역 애플리케이션 인스턴스에 속성 추가할 수 있음
    // app.directive 커스텀 디렉티브를 추가할 수 있음
    // app.provide() 다양한 리소스를 자식 컴포넌트에 사용할 수 있도록 추가할 수 있음
  },
};

export default objPlugins;
