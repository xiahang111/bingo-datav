<template>
  <div>
    <div id="centreLeft2Chart" style="width:4.125rem; height: 4.625rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";

export default {
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        this.draw()
      }
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById("centreLeft2Chart"));
      //  ----------------------------------------------------------------

      let option = {
        angleAxis: {
          interval: 1,
          type: "category",
          data: this.chartData.xaxis,
          z: 10,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#00c7ff",
            margin: 8,
            fontSize: 12
          }
        },
        radiusAxis: {
          min: 0,
          max: 100,
          interval: 20,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            formatter: "{value} %",
            show: false,
            padding: [0, 0, 20, 0],
            color: "#00c7ff",
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          }
        },
        legend: {
          show: true,
          orient: "vartical",
          top: "center",
          bottom: "0%",
          itemWidth: 16,
          itemHeight: 8,
          itemGap: 16,
          textStyle: {
            color: "#A3E2F4",
            fontSize: 12,
            fontWeight: 0
          },
          data: [""]
        },
        polar: {},
        series: [
          {
            name: "",
            type: "bar",
            radius: ["70%", "150%"],
            data: [
              {
                value: Math.round(this.chartData.yaxis[0]/1000),
                itemStyle: {
                  normal: {
                    color: "#f54d4d"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[1]/1000),
                itemStyle: {
                  normal: {
                    color: "#f87544"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[2]/1000),
                itemStyle: {
                  normal: {
                    color: "#ffae00"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[3]/1000),
                itemStyle: {
                  normal: {
                    color: "#dcff00"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[4]/1000),
                itemStyle: {
                  normal: {
                    color: "#25d053"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[5]/1000),
                itemStyle: {
                  normal: {
                    color: "#01fff5"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[6]/1000),
                itemStyle: {
                  normal: {
                    color: "#007cff"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[7]/1000),
                itemStyle: {
                  normal: {
                    color: "#4245ff"
                  }
                }
              },
              {
                value:Math.round(this.chartData.yaxis[8]/1000),
                itemStyle: {
                  normal: {
                    color: "#c32eff"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[9]/1000),
                itemStyle: {
                  normal: {
                    color: "#ff62e8"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[10]/1000),
                itemStyle: {
                  normal: {
                    color: "#ff61f1"
                  }
                }
              },
              {
                value: Math.round(this.chartData.yaxis[11]/1000),
                itemStyle: {
                  normal: {
                    color: "#ff61f1"
                  }
                }
              }
            ],
            coordinateSystem: "polar"
          }
        ]
      };
      this.chart.setOption(option);
    }
  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
</style>