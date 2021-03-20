<template>
  <div>
    <div id="centreLeft1Chart" style="width:3.25rem; height: 2.75rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";

export default {
  props: {
    pieData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    pieData: {
      deep: true,
      handler() {
        this.draw()
      }
    }
  },
  mixins: [echartMixins],
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      console.log("传过来的饼图数据:"+JSON.stringify(this.pieData));
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById("centreLeft1Chart"));
      //  ----------------------------------------------------------------

      this.chart.setOption({
        color: [
          "#37a2da",
          "#32c5e9",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293",
          "#e7bcf3",
          "#8378ea"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true
        },
        calculable: true,
        legend: {
          orient: "horizontal",
          icon: "circle",
          bottom: 0,
          x: "center",
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "订单种类分布",
            type: "pie",
            radius: [20, 60],
            roseType: "area",
            center: ["50%", "40%"],
            data: this.pieData
          }
        ]
      });
    }
  },

  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
</style>