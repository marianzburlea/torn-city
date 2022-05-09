// import * as T from './icon.type';
// import { iconSet as defaultIconSet } from './torn';

// export const getFixedIconSet = (iconSet = defaultIconSet) => {
//   const list = iconSet.iconSets[0].selection.reduce(
//     (a, c) => ({
//       ...a,
//       // @ts-ignore
//       [c.code]: {
//         properties: { name: c.name },
//         // @ts-ignore
//         code: c.code,
//         // @ts-ignore
//         codes: c.codes,
//       },
//     }),
//     {
//       order: 0,
//       id: 0,
//       name: 'test',
//       prevSize: 0,
//       // code: 0,
//       // tempChar: 'test',
//       // codes: [],
//     }
//   );
//   const iconSetFiltered = [
//     ...(iconSet || { iconSets: [{ icons: [{ defaultCode: 0 }] }] }).iconSets[0]
//       .icons,
//   ].filter(({ defaultCode }: T.IconBase) => defaultCode);

//   const enhancedList: T.IconSetItem[] = Object.keys(list)
//     .filter(Boolean)
//     .map((s) => +s)
//     .map((iconCode: number) => {
//       const findIcon: T.IconBase = iconSetFiltered.find(
//         (x: T.IconBase) => +(x?.defaultCode || 0) === +iconCode
//         // +x.defaultCode === +iconCode ||
//         // (Array.isArray(x?.codes) && x.codes.includes(iconCode))
//       ) || {
//         paths: [],
//         attrs: [],
//       };

//       return {
//         // @ts-ignore
//         ...list[iconCode],
//         icon: {
//           paths: findIcon.paths,
//           attrs: findIcon.attrs,
//         },
//       };
//     })
//     .filter(({ properties }) => properties);

//   const iconListEnchanced: T.IconSet = { icons: enhancedList };
//   return iconListEnchanced;
// };
const a = 2;
export { a };
