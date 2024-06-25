import util from "./util";
const router = useRouter()
export default function handleError(error: any) {
  const status = error?.response?.status;
  const detail = error?.response?.data?.detail;
  if (error.code == "ERR_NETWORK") {
    util.toast("warning", "Internet bilan aloqa yo'q!");
  } else if (status)
    if (status == 400) {
      if (detail == "Inactive user") {
        router.push("/login");
      } else util.toast("warning", detail);
    } else if (status == 401) {
      router.push("/login");
    }
}
