/**
 * TODO: Prettier가 스타일을 수정합니다.
 */
import axios from "axios";

import MainController from "./controllers/MainController.js";

import "./app.scss";

document.addEventListener("DOMContentLoaded", async () => {
  const result = await axios.get("/api/users");
  console.log("API 연동 테스트 result : ", result);
  new MainController();
});
