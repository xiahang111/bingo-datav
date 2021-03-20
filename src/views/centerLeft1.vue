<template>
    <div id="centreLeft1">
        <div class="bg-color-black">
            <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
                <div class="d-flex">
                    <span class="fs-xl text mx-2">订单种类分布</span>
                    <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;"/>
                </div>
            </div>
            <div class="d-flex jc-center">
                <centreLeft1Chart :pie-data="orderTypePie"/>
            </div>
            <!-- 4个主要的数据 -->
            <div class="bottom-data">
                <div class="item-box" v-for="(item,index) in numberData" :key="index">
                    <div class="d-flex">
                        <span class="coin"></span>
                        <dv-digital-flop :config="item.number" style="width:2.5rem;height:.625rem;"/>
                    </div>
                    <p class="text" style="text-align: center;">
                        {{item.text}}
                        <span class="colorYellow">(单)</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import centreLeft1Chart from "@/components/echart/centerLeft2/centreLeft1Chart";
    import {getOrderTypePie, getDvOrderNum} from '@/api/report'

    export default {
        data() {
            return {
                orderTypePie: [],

                numberData: [
                    {
                        number: {
                            number: [15],
                            toFixed: 0,
                            content: "{nt}"
                        },
                        text: "今日订单数"
                    },
                    {
                        number: {
                            number: [1144],
                            toFixed: 0,
                            content: "{nt}"
                        },
                        text: "总订单数"
                    },
                    {
                        number: {
                            number: [361],
                            toFixed: 0,
                            content: "{nt}"
                        },
                        text: "已完成订单数"
                    },
                    {
                        number: {
                            number: [157],
                            toFixed: 0,
                            content: "{nt}"
                        },
                        text: "未完成订单数"
                    }
                ]
            };
        },
        components: {
            centreLeft1Chart
        },
        mounted() {
            this.changeTiming();
        },
        created() {
            this.setOrderPie();
            this.changeNumber();

        },
        methods: {
            setOrderPie() {
                getOrderTypePie().then(response => {
                    if (response.code == 'success') {
                        this.orderTypePie = response.data;

                    }
                })
            },
            changeTiming() {
                setInterval(() => {
                    this.changeNumber();
                }, 30000);
            },
            changeNumber() {
                getDvOrderNum().then(response => {
                        if (response.code == 'success') {
                            this.numberData.forEach((item, index) => {
                                if (index == 0){
                                    item.number.number[0] = response.data.todayOrderNum;
                                    item.number = {...item.number};
                                }
                                if (index == 1){
                                    item.number.number[0] = response.data.totalOrderNum;
                                    item.number = {...item.number};
                                }
                                if (index == 2){
                                    item.number.number[0] = response.data.completeOrderNum;
                                    item.number = {...item.number};
                                }
                                if (index == 3){
                                    item.number.number[0] = response.data.WorkingOrderNum;
                                    item.number = {...item.number};
                                }
                            });
                        }
                    }
                )

            }
        }
    };
</script>

<style lang="scss">
    #centreLeft1 {
        padding: 0.2rem;
        height: 5.125rem;
        min-width: 3.75rem;
        border-radius: 0.0625rem;

        .bg-color-black {
            height: 4.8125rem;
            border-radius: 0.125rem;
        }

        .text {
            color: #c3cbde;
        }

        .chart-box {
            margin-top: 0.2rem;
            width: 2.125rem;
            height: 2.125rem;

            .active-ring-name {
                padding-top: 0.125rem;
            }
        }

        .bottom-data {
            .item-box {
                float: right;
                position: relative;
                width: 50%;
                color: #d3d6dd;
                // 金币
                .coin {
                    position: absolute;
                    left: 0.1rem;
                    top: 0.2125rem;
                    font-size: 0.25rem;
                    color: #ffc107;
                }

                .colorYellow {
                    color: yellowgreen;
                }
            }
        }
    }
</style>