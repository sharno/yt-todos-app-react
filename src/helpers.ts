export const fetchData = <T>(key: string): T => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : false;
};

export const saveToDB = (key: string, data: {}) => {
  localStorage.setItem(key, JSON.stringify(data));
};
