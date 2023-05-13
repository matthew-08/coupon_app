import path from 'path';

type HTTPMethods = 'POST' | 'GET';
type APIPrefix<T extends string> = `/api/${T}`;
type EndPoints = 'users' | 'coupons' | 'sessions';

type Paths = APIPrefix<EndPoints>;

const apiFetchGenerator = <T extends string>(apiURL: string) => {
  return {
    apiURL,
    async makeFetch(path: T, method: HTTPMethods = 'GET', body?: Object) {
      if (method === 'POST') {
        return await fetch(`${this.apiURL}${path}`, {
          body: JSON.stringify(body),
          headers: {
            'content-type': 'application/json',
          },
          method: method,
        });
      }
      return await fetch(`${this.apiURL}${path}`, {
        method: method,
      });
    },
  };
};

const api = apiFetchGenerator<Paths>('http://localhost:3000');

export default api;
