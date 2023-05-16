type HTTPMethods = 'POST' | 'GET' | 'PUT';
type APIPrefix<T extends string> = `/api/${T}` | `/api/${T}/${number}`;
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
        headers: {
          authorization: `Bearer ${getToken()}`,
        },
      });
    },
  };
};

const api = apiFetchGenerator<Paths>('http://localhost:3000');

export default api;
