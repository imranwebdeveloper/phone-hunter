export const getElementById = (id) => {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Sorry we don't found ${id} HTML id`);
  }
  return element;
};
export const getQuerySelectorAll = (selectors) => {
  const element = document.querySelectorAll(selectors);
  if (!element) {
    throw new Error(`Sorry we don't found ${selectors} HTML element`);
  }
  return element;
};
