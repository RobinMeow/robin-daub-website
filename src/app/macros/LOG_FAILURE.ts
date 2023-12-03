export const LOG_FAILURE: (text: string) => void = (text: string) => {
  console.log('%c' + text, 'color: #f53333;');
};
