/** 封装vuex的mapGetters方法 */
import { mapGetters, createNamespacedHelpers } from 'vuex'
import { useStateMapper } from './useMapper'
import { checkType } from '../utils/index'
/**
 *
 * @param {*} moduleName 模块名称
 * @param {*} mapper getters属性集合 ['name', 'age']
 * @returns
 */
export default function useGetters(moduleName, mapper) {
  let mapperFn = mapGetters
  // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapGetters方法
  if (checkType(moduleName) === '[object String]' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  }
  return useStateMapper(mapper, mapperFn)
}
