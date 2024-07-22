import axiosInstance from "@/plugins/axios";
import { PATHS } from "@/constants/path";
import { Cookie } from "@/classes/cookie";

export class BaseRepository {
  async call(endpoint, data, method, success, error) {
    let keyPayload = "data";
    if (method === "get") {
      keyPayload = "params";
    }
    const options = {
      url: endpoint,
      method,
      [keyPayload]: data,
    };

    await axiosInstance(options)
      .then((res) => {
        const { data, ...otherData } = res.data;

        return success({
          data: data || res.data || [],
          message: data?.message || otherData?.message,
          otherData: otherData,
          success: true,
        });
      })
      .catch((err) => {
        const res = err.response?.data;
        console.log(err);

        if (res?.code === 401) {
          Cookie.remove("token");
          const queryString = `${window.location.pathname}${window.location.search}`;
          Cookie.set("redirect_path", queryString);

          return (window.location.href =
            window.location.origin + "/" + PATHS.AUTH.LOGIN);
        }

        const errors = [];
        if (res?.errors) {
          Object.entries(res.errors).map(([key, value]) =>
            errors.push({ field: key, messages: value })
          );
        }

        return error({
          message: res?.message,
          code: res?.code,
          responseCode: res?.responseCode,
          error: true,
          errors: errors,
        });
      });
  }

  async list(endpoint, params, success, error) {
    return await this.call(endpoint, params, "get", success, error);
  }
}
