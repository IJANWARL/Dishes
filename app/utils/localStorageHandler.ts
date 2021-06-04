const isLocalStorageAvailable = () => {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (e) {
    return false;
  }
};

export const saveToLocalStorage = (key: string, data: string) => {
  if (!isLocalStorageAvailable()) {
    return false;
  }

  localStorage.setItem(key, data);
  return true;
};

export const readFromLocalStorage = (key: string) =>
  isLocalStorageAvailable() ? localStorage.getItem(key) : false;

export const removeFromLocalStorage = (key: string) =>
  isLocalStorageAvailable() ? localStorage.removeItem(key) : false;
