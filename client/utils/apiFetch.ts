import path from 'path';

type HTTPMethods = 'POST' | 'GET';
type APIPrefix<T extends string> = `/api/${T}`;
type EndPoints = 'users' | 'coupons';

type Paths = APIPrefix<EndPoints>;

const apiFetchGenerator = <T extends string>(apiURL: string) => {
  return {
    apiURL,
    async makeFetch(path: T, method: HTTPMethods = 'GET', body?: Object) {
      return await fetch(`${this.apiURL}${path}`, {
        ...(body && body),
        method: method,
        credentials: 'include',
      });
    },
  };
};

const api = apiFetchGenerator<Paths>('http://localhost:3000');

export default api;
