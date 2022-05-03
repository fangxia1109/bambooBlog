/** 封装vuex的mapState方法 */
import { mapState, createNamespacedHelpers } from 'vuex'
import { useStateMapper } from './useMapper'
import { checkType } from '../utils/index'
/**
 *
 * @param {*} moduleName 模块名称
 * @param {*} mapper state属性集合 ['name', 'age']
 * @returns
 */
export default function useState(moduleName, mapper) {
  let mapperFn = mapState
  // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
  if (checkType(moduleName) === '[object String]' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  }
  // 如果只传了第一个参数并且是数组
  if (checkType(moduleName) === '[object Array]' && moduleName) {
    mapper = moduleName
  }
  return useStateMapper(mapper, mapperFn)
}
