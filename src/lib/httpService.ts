import { createAxiosInstance } from './axios';

class HttpService {
  private axios;

  constructor(baseURL: string) {
    this.axios = createAxiosInstance({ baseURL });
  }

  get(url: string, config = {}) {
    return this.axios.get(url, config);
  }

  post(url: string, data = {}, config = {}) {
    return this.axios.post(url, data, config);
  }

  put(url: string, data = {}, config = {}) {
    return this.axios.put(url, data, config);
  }

  delete(url: string, config = {}) {
    return this.axios.delete(url, config);
  }
}

export default HttpService;
