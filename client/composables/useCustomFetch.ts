type HTTPMethods = 'POST' | 'GET' | 'PUT';
type APIPrefix<T extends string> = `/api/${T}` | `/api/${T}/${number}`;
type EndPoints = 'users' | 'coupons' | 'sessions';

type Paths = APIPrefix<EndPoints>;

const useCustomFetch = <T extends string>(apiURL: string) => {
  return {
    apiURL,
    async makeFetch(path: T, method: HTTPMethods = 'GET', body?: Object) {
      if (method === 'POST') {
        return await fetch(`${apiURL}${path}`, {
          body: JSON.stringify(body),
          headers: {
            'content-type': 'application/json',
          },
          method: method,
        });
      }
      return await fetch(`${apiURL}${path}`, {
        method: method,
        headers: {
          authorization: `Bearer ${getToken()}`,
        },
      });
    },
  };
};

export { useCustomFetch };
