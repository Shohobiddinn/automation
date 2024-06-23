import Swal from 'sweetalert2';
import type { SweetAlertIcon } from 'sweetalert2';
export default {
  payment_types: ["naqd", "plastik", "click"],
  units: ["ta", "dona", "kg", "litr", "metr", "m²", "п/м"],
  currency(number: any = Number()) {
    return Intl.NumberFormat("RU-ru").format(number.toFixed(2));
  },
  tel(number: any) {
    number = Number(number);
    return String(
      "(" +
      String(number).substring(0, 2) +
      ") " +
      String(number).substring(2, 5) +
      " " +
      String(number).substring(5, 7) +
      " " +
      String(number).substring(7, 9)
    );
  },
  captalize(text = String()) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },
  format_date(date: any) {
    return new Date(date).toLocaleString("en-GB", {
      hour12: false,
    });
  },
  countDays(start: any, end: any) {
    let start_date = start ? new Date(start) : new Date(),
      end_date = new Date(end),
      difference = end_date.getTime() - start_date.getTime(),
      days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
  },
  toast(icon = "success", title = "Amaliyot bajarildi !") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    const validIcons: SweetAlertIcon[] = ['success', 'error', 'warning', 'info', 'question'];
    const validIcon = validIcons.includes(icon as SweetAlertIcon) ? icon : undefined;
  
    return Toast.fire({
      icon: validIcon as SweetAlertIcon,
      title: title,
    });
  },
  getFormattedDate() {
    var mm: any = new Date().getMonth() + 1;
    var yy = new Date().getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    return yy + "-" + mm + "-" + "01";
  },
  today() {
    return new Date().toISOString().split("T")[0]
  },

  toastError(icon?: string, title?: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  
    const validIcons: SweetAlertIcon[] = ['success', 'error', 'warning', 'info', 'question'];
    const validIcon = validIcons.includes(icon as SweetAlertIcon) ? icon : undefined;
  
    return Toast.fire({
      icon: validIcon as SweetAlertIcon,
      title: title,
    });
  },
  formData: (object:any) =>
    Object.entries(object).reduce((fd, [key, val]) => {
      if (Array.isArray(val)) {
        val.forEach((v) => {
          if (typeof v === 'string' || v instanceof Blob) {
            fd.append(key, v);
          } else {
            throw new Error(`Invalid type for FormData value: ${typeof v}`);
          }
        });
      } else {
        if (typeof val === 'string' || val instanceof Blob) {
          fd.append(key, val);
        } else {
          throw new Error(`Invalid type for FormData value: ${typeof val}`);
        }
      }
      return fd;
    }, new FormData()),

};
