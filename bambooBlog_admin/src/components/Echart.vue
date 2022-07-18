<template>
  <div style="height: 100%" ref="e"></div>
</template>

<script>
import echarts from 'echarts'
import { computed, onMounted, ref } from 'vue'
export default {
  props: {
    chartData: {
      type: Object,
      default: () => {},
    },
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    let options = computed(() => {
      return this.isAxisChart ? this.axisOption : this.normalOption
    })
    let echart = null
    let e = ref(null)
    onMounted(() => {
      initChart(e.value)
    })
    function initChart(e) {
      if (echart) {
        echart.setOption(options)
      } else {
        echart = echarts.init(e)
        echart.setOption(options)
      }
    }
    return {
      echart,
      e,
      axisOption: {},
      normalOption: {},
      options,
    }
  },
}
</script>

<style lang="scss" scoped></style>
