/**
 * TODO: IE11에서도 동작하는 자바스크립트로 변환할수 있게 바벨을 구성하세요.
 */

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: "11",
        },
        useBuiltIns: "usage", //usage: 실제 사용한 폴리필만 삽입 , entry:coje-js 삽입무늘 corejs 하위 특정 모듈로 변환
        corejs: { version: 2 },
      },
    ],
  ],
};
