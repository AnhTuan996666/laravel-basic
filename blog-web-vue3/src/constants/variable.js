import { Languages } from "@/constants/lang";
import { reactive } from "vue";

const locale = localStorage.getItem("locale") || Languages.VI;
localStorage.setItem("locale", locale);

const defaultLocale = reactive({ value: locale });
// const formatDate = reactive({
//   value: import.meta.env[
//     `VITE_APP_FORMAT_DATE_${defaultLocale.value.toUpperCase()}`
//   ],
// });

export const globalLocale = {
  value: defaultLocale.value,
  update(locale) {
    defaultLocale.value = locale;
  },
};

// export const globalFormatDate = {
//   value: formatDate.value,
//   update(format) {
//     formatDate.value = format;
//   },
// };

// export const defaultFormatDate = formatDate;

export default {
  globalLocale,
  // globalFormatDate,
  // defaultFormatDate,
};
