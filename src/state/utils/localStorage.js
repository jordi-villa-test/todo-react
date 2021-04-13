export const ITEM_NAME = 'state';

export const loadState = () => {
  const JSONState = localStorage.getItem(ITEM_NAME);
  if (JSONState === null) {
    return undefined;
  }
  return JSON.parse(JSONState);
};

export const saveState = (state) => {
  const JSONState = JSON.stringify(state);
  localStorage.setItem(ITEM_NAME, JSONState);
};
