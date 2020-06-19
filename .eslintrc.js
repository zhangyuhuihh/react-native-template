module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: [0, 'never'],
    'react-native/no-inline-styles': 0, // 取消禁止行内样式
    // 'array-bracket-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'], // 对象括号空格
  },
}
// https://www.jianshu.com/p/8a0c15454684
