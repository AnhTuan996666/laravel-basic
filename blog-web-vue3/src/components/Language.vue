<template>
    <div class="language-selector" @click="handleShow">
      <div class="selected-language">
          <div
            v-for="language in languages"
            :key="language.value"
            :class="{
              'select-box d-block': true,
              'pe-none active': currentLocale === language.value,
              'd-block': isActive,
            }"
            @click="changeLanguage(language.value)"
          >
            {{ $t(`language.${language.value}`) }}
          </div>
        </div>
      </div>
</template>

<script>
import { ref } from 'vue';
import i18n from '@/i18n.js';
import { useI18n } from 'vue-i18n';
import { Languages } from '@/constants/lang.js';
import { globalLocale } from '@/constants/variable.js';

export default {
  name: 'language-component',
  data() {
    const { t } = useI18n();
    const languages = ref([
      { value:Languages.VI, label: t('language.vi')},
      { value: Languages.JA, label: t('language.ja')},
      { value: Languages.EN, label: t('language.en')},
    ]);

    const selectedLanguage = ref(i18n.locale);

    const show = ref(false);

    const isActive = ref(false);

    const currentLocale = ref(globalLocale.value.value);
    
    const changeLanguage = (language) => {
      globalLocale.update(currentLocale.value = language,  i18n.global.locale.value = language );
      localStorage.setItem('locale', language);
    };


    const handleShow = () => {
      show.value = true;
      isActive.value = !isActive.value;
    };

    return {
      languages,
      changeLanguage,
      show,
      currentLocale,
      isActive,
      selectedLanguage,
      globalLocale,
      handleShow
    };
  },
};
</script>

<style lang="scss" scoped>
  .language-selector {
    .select-box {
      display: none;
      &.active {
        display: block;
      }
    }
  }

  .select-box {
    position: relative;
    padding-right: 40px;
    cursor: pointer;
    &::after {
      position: absolute;
      content: "";
      width: 29px;
      height: 17px;
      right: 0;
      top: 2px;
      background: url(@/assets/images/icon/ico-flag-vi.png) no-repeat;
    }
    &:nth-child(2) {
      &::after {
        background: url(@/assets/images/icon/ico-flag-ja.png) no-repeat;
      }
    }
    &:nth-child(3) {
      &::after {
        background: url(@/assets/images/icon/ico-flag-en.png) no-repeat;
      }
    }
  }
</style>
