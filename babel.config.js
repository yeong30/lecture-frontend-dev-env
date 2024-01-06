/**
 * babel을 별도로 설정할 때 사용하는 설정파일.
 * 일반적으로 로더로 웹팩으로 통합해서 사용함(babel-loader)
 */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          //지원할 최소 브라우저 나열
          chrome: "79",
          ie: "11",
        },
        useBuiltIns: "usage", //폴리필을 사용할 지 여부. 'entry' , false
        corejs: {
          //core-js = 폴리필 라이브러라
          version: 2,
        },
      },
    ],
  ],
};
