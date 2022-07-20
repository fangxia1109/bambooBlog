import Vue from 'vue'
import VueI18n from 'vue-i18n'
// element-ui lang
import elementZhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
// 自定义lang
import zhCNLocale from './zh-CN'
import enLocale from './en'

Vue.use(VueI18n)

const messages = {
  'zh-CN': {
    ...zhCNLocale,
    ...elementZhCNLocale
  },
  'en': {
    ...enLocale,
    ...elementEnLocale
  },
}

export function getLanguage () {
  // 没有选择语言
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale.toLowerCase()) > -1) {
      return locale
    }
  }
  return 'zh-CN'
}

/**
 * $t(path, locale, option)           // text 文本替换，locale可单独设置语言，option可传参数替换模板
 * $tc(path, choice, locale, option)  // text+choice 比$t多一个choice，可以选择模板内容（模板内容间用 | 分隔，如 香蕉|苹果|梨，最多只能使用三个选项，下标从0开始，当选项为2个时下标从1开始~~）
 * $te(path)                          // text+exist 判断当前语言包中path是否存在
 * $d(number|Date, path, locale)      // date 时间格式化
 * $n(number, path, locale)           // number  数字格式化（货币等）
 * 更多：https://kazupon.github.io/vue-i18n/api/#vue-injected-methods
 * @type {VueI18n}
 */
const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

export default i18n
