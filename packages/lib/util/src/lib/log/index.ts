export const log = (...argList: any) => {
  if (argList.length) {
    console.group();
    argList.forEach((x: any) => console.log(x));
    console.groupEnd();
  }
};
