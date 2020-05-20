import { postRequest } from "./axios";
import { baseUrl } from "./urlconfig";

// 获取短信验证码
export const demo = (data) => {
    return postRequest(`${baseUrl}/xxx`, data);
}
