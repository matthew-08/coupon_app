import path from 'path';

const apiFetchGenerator = (apiURL: string) => {
  return {
    apiURL,
    makeFetch(path: string, method: string = 'GET') {},
  };
};
