<template>
    <div id="center">
        <div class="up">
            <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
                <p class="ml-5 colorBlue fw-b">{{item.title}}</p>
                <div>
                    <dv-digital-flop :config="item.number" style="width:1.02rem;height:.625rem;"/>
                </div>
            </div>
        </div>
        <div class="down">
            <div class="ranking bg-color-black">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
                <span class="fs-xl text mx-2 mb-1">年度大客户榜单</span>
                <dv-scroll-ranking-board :config="ranking" style="height:2.75rem"/>
            </div>
            <div class="percent">
                <div class="item bg-color-black">
                    <span>今日任务通过率</span>
                    <centerChart :id="rate[0].id" :tips="rate[0].tips" :colorObj="rate[0].colorData"/>
                </div>
                <div class="item bg-color-black">
                    <span>今日任务达标率</span>
                    <centerChart :id="rate[1].id" :tips="rate[1].tips" :colorObj="rate[1].colorData"/>
                </div>
                <div class="item bg-color-black">
                    <span>今日任务通过率</span>
                    <centerChart :id="rate[2].id" :tips="rate[2].tips" :colorObj="rate[2].colorData"/>
                </div>
                <div class="item bg-color-black">
                    <span>今日任务通过率</span>
                    <centerChart :id="rate[3].id" :tips="rate[3].tips" :colorObj="rate[3].colorData"/>
                </div>
                <!--<div class="water">
                  <dv-water-level-pond :config="water" style="height: 1.5rem" />
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import centerChart from "@/components/echart/center/centerChartRate";
    import {getDvOrderCenter, getCustomerList} from '@/api/report'

    export default {
        data() {
            return {
                titleItem: [
                    {
                        title: "今日累计订单数",
                        number: {
                            number: [18],
                            toFixed: 0,
                            content: "{nt}"
                        }
                    },
                    {
                        title: "本月累计订单数",
                        number: {
                            number: [375],
                            toFixed: 0,
                            content: "{nt}"
                        }
                    },
                    {
                        title: "本年度累计订单数",
                        number: {
                            number: [3786],
                            toFixed: 0,
                            content: "{nt}"
                        }
                    },
                    {
                        title: "今日累计销售额",
                        number: {
                            number: [3725],
                            toFixed: 0,
                            content: "{nt}万"
                        }
                    },
                    {
                        title: "当月累计销售额",
                        number: {
                            number: [368],
                            toFixed: 0,
                            content: "{nt}万"
                        }
                    },
                    {
                        title: "今年累计销售额",
                        number: {
                            number: [368],
                            toFixed: 0,
                            content: "{nt}万"
                        }
                    }
                ],
                ranking: {
                    data: [{"value": "1915838", "name": "韩金龙"}, {"value": "1069922", "name": "张欣"}, {
                        "value": "88268",
                        "name": "沈金飞"
                    }, {"value": "59170", "name": "周应果"}, {"value": "59144", "name": "曾祥福"}, {
                        "value": "57260",
                        "name": "杨滔"
                    }, {"value": "28582", "name": "未知"}, {"value": "28400", "name": "李云海"}, {"value": "28290", "name": "山东马延亮"},
                        {"value": "25746", "name": "吴俊"}],
                    carousel: "single",
                    unit: "元"
                },
                water: {
                    data: [24, 45],
                    shape: "roundRect",
                    formatter: "{value}%",
                    waveNum: 3
                },
                // 通过率和达标率的组件复用数据
                rate: [
                    {
                        id: "centerRate1",
                        tips: 60,
                        colorData: {
                            textStyle: "#3fc0fb",
                            series: {
                                color: ["#00bcd44a", "transparent"],
                                dataColor: {
                                    normal: "#03a9f4",
                                    shadowColor: "#97e2f5"
                                }
                            }
                        }
                    },
                    {
                        id: "centerRate2",
                        tips: 40,
                        colorData: {
                            textStyle: "#67e0e3",
                            series: {
                                color: ["#faf3a378", "transparent"],
                                dataColor: {
                                    normal: "#ff9800",
                                    shadowColor: "#fcebad"
                                }
                            }
                        }
                    },
                    {
                        id: "centerRate3",
                        tips: 60,
                        colorData: {
                            textStyle: "#3fc0fb",
                            series: {
                                color: ["#00bcd44a", "transparent"],
                                dataColor: {
                                    normal: "#03a9f4",
                                    shadowColor: "#97e2f5"
                                }
                            }
                        }
                    },

                    {
                        id: "centerRate4",
                        tips: 40,
                        colorData: {
                            textStyle: "#67e0e3",
                            series: {
                                color: ["#faf3a378", "transparent"],
                                dataColor: {
                                    normal: "#ff9800",
                                    shadowColor: "#fcebad"
                                }
                            }
                        }
                    }
                ]
            };
        },
        components: {
            centerChart
            // centerChart1,
            // centerChart2
        },
        mounted() {
            this.changeTiming();
        },
        created() {
            this.setOrderCenterData();
            this.setCustomerList();
        },
        methods: {
            changeTiming() {
                setInterval(() => {
                    this.setOrderCenterData();
                }, 30000);
            },
            setCustomerList() {
                getCustomerList().then(response => {
                    if (response.code == 'success') {
                        this.ranking.data.forEach((item, index) => {
                            if (index == 0) {
                                item.name = response.data[0].name
                                item.value = response.data[0].value
                            }
                            if (index == 1) {
                                item.name = response.data[1].name
                                item.value = response.data[1].value
                            }
                            if (index == 2) {
                                item.name = response.data[2].name
                                item.value = response.data[2].value
                            }
                            if (index == 3) {
                                item.name = response.data[3].name
                                item.value = response.data[3].value
                            }
                            if (index == 4) {
                                item.name = response.data[4].name
                                item.value = response.data[4].value
                            }
                            if (index == 5) {
                                item.name = response.data[5].name
                                item.value = response.data[5].value
                            }


                        })
                        console.log("客户数据:" + JSON.stringify(this.ranking))
                    }
                })
            },
            setOrderCenterData() {
                getDvOrderCenter().then(response => {
                    if (response.code == 'success') {
                        this.titleItem.forEach((item, index) => {
                            console.log("--数据:" + JSON.stringify(item))
                            if (index == 0) {
                                item.number.number[0] = response.data.todayOrderNum;
                                item.number = {...item.number};
                            }
                            if (index == 1) {
                                item.number.number[0] = response.data.monthOrderNum;
                                item.number = {...item.number};
                            }
                            if (index == 2) {
                                item.number.number[0] = response.data.yearOrderNum;
                                item.number = {...item.number};
                            }
                            if (index == 3) {
                                item.number.number[0] = Math.round(response.data.todayOrderPrice / 10000);
                                item.number = {...item.number};
                            }
                            if (index == 4) {
                                item.number.number[0] = Math.round(response.data.monthOrderPrice / 10000);
                                item.number = {...item.number};
                            }
                            if (index == 5) {
                                item.number.number[0] = Math.round(response.data.yearOrderPrice / 10000);
                                item.number = {...item.number};
                            }

                        });
                    }
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
    #center {
        display: flex;
        flex-direction: column;

        .up {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            .item {
                border-radius: 0.0625rem;
                padding-top: 0.2rem;
                margin-top: 0.1rem;
                width: 32%;
                height: 0.875rem;
            }
        }

        .down {
            padding: 0.07rem 0.05rem;
            padding-bottom: 0;
            width: 100%;
            display: flex;
            height: 3.1875rem;
            justify-content: space-between;

            .bg-color-black {
                border-radius: 0.0625rem;
            }

            .ranking {
                padding: 0.125rem;
                width: 59%;
            }

            .percent {
                width: 40%;
                display: flex;
                flex-wrap: wrap;

                .item {
                    width: 50%;
                    height: 1.5rem;

                    span {
                        margin-top: 0.0875rem;
                        display: flex;
                        justify-content: center;
                    }
                }

                .water {
                    width: 100%;
                }
            }
        }
    }
</style>