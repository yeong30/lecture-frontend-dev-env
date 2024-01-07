import MainController from "./controllers/MainController.js";

// DESC:시스에는 sass 확장자가 있고 scss 확장자가 있음. sass만 쓴다면 sass확장자, sass+ css를 사용한다면 scss 확장자를 사용한다.
// TODO: app.css 파일이 사라졌습니다. 이제는 app.scss를 불러올수 있도록 웹팩 구성을 추가하세요.
import "./app.scss";

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
