import api from '../../axios'
export function getHomeData() {
  return api.get('/home/getHomeData')
}
