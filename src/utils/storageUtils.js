// Made to handle local storage operations:
export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const saveToStorage = (key, value) => {
  const existingData = getFromStorage(key) || [];
  localStorage.setItem(key, JSON.stringify([...existingData, value]));
};

export const getRandomEntries = (key, count = 5) => {
  const data = getFromStorage(key) || [];
  return data.sort(() => 0.5 - Math.random().slice(0, count));
};
