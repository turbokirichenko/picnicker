export const createBEM = (
    parent = "",
    element = "",
    modification = "",
    value = ""
  ) => {
    return `${parent}${element && "__" + element}${modification && "_" + modification}${value && "_" + value}`;
  }