import { createI18n } from "vue-i18n";
import ja from "@/locales/ja.json";
import vi from "@/locales/vi.json";
import en from "@/locales/en.json";
import { globalLocale } from "@/constants/variable.js";
import { Languages } from "@/constants/lang.js";

const i18n = createI18n({
  locale: globalLocale.value,
  fallbackLocale: Languages.VI,
  messages: { vi, ja, en },
  legacy: false,
});

export default i18n;
