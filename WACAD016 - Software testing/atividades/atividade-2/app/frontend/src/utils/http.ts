import axios, { AxiosInstance } from "axios";

export const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};

class Http {
  private instance: AxiosInstance | null = null;

  public get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const apiUrl = import.meta.env.VITE_API_URL;

    const http = axios.create({
      baseURL: apiUrl,
      headers,
      withCredentials: true,
    });

    http.interceptors.response.use(
      function (response) {
        return response;
      },

      function (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            window.location.href = "/login";
          }
        }
      }
    );
    this.instance = http;
    return http;
  }
}

export const instance = new Http();
