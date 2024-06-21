import server from "./server";
import util from "./util";
import type { Login } from "~/interfaces/api";

export default {
    token(data: Login) {
        return server('token', 'post', util.formData(data)); // util modulidagi formData funksiyasini chaqirish
    }
}