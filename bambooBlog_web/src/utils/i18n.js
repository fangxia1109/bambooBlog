/**
 * 获取页面title
 * @param title
 * @returns {*}
 */
// 翻译router.meta.title, 使用在breadcrumb（面包屑）、sidebar（侧边栏）、tagsview（页面标签）
export function generateTitle (title) {
  const hasKey = this.$te('route.' + title)

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    return this.$t('route.' + title)
  }
  return title
}