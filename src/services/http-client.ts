import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

type ApiResponse<T = object> = {
  data: T;
  errors: string[];
};

class HttpClient {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    });

    this.api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (config.headers.Authorization === undefined) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          "cws.token"
        )}`;
      }

      return config;
    });
  }

  async post<T = object>(url: string, body: object) {
    return this.api.post<ApiResponse<T>>(url, body);
  }

  async get<T = object>(url: string, params?: object) {
    return this.api.get<ApiResponse<T>>(url, { params });
  }

  setAuthorization(authorizationToken: string) {
    this.api.defaults.headers.common.Authorization = authorizationToken;
  }
}

const httpClient = new HttpClient();

export { httpClient };
