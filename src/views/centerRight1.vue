<template>
    <div id="centreRight1">
        <div class="bg-color-black">
            <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
        </span>
                <div class="d-flex">
                    <span class="fs-xl text mx-2">任务完成排行榜</span>
                </div>
            </div>
            <div class="d-flex jc-center body-box">
                <dv-scroll-board :config="config" style="width:3.375rem;height:4.28rem"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {getIndexOrderInfo} from '@/api/report'

    export default {
        data() {
            return {
                config: {
                    header: ["业务员", "订单号", "价格"],
                    data: [["夏晓兵", "厂-门2103030", "<span  class='colorRed'>305</span>"], ["夏晓兵", "厂-门2103030", "<span  class='colorRed'>305</span>"], ["柳小波", "B-门2103068", "<span  class='colorRed'>1275</span>"], ["柳小波", "B-门2103068", "<span  class='colorRed'>1275</span>"], ["柳红海", "H-门2103008", "<span  class='colorRed'>340</span>"], ["柳红海", "H-门2103008", "<span  class='colorRed'>340</span>"], ["柳红海", "H-门2103008", "<span  class='colorRed'>340</span>"], ["柳红海", "H-门2103008", "<span  class='colorRed'>340</span>"], ["柳红海", "H-门2103008", "<span  class='colorRed'>340</span>"], ["柳小波", "B-门2103008", "<span  class='colorRed'>548</span>"]],
                    rowNum: 7, //表格行数
                    headerHeight: 35,
                    headerBGC: "#0f1325", //表头
                    oddRowBGC: "#0f1325", //奇数行
                    evenRowBGC: "#171c33", //偶数行
                    index: true,
                    columnWidth: [50],
                    align: ["center"]
                }
            };
        },
        components: {},
        created() {
            this.setRecentOrder();
        },
        methods: {
            changeTiming() {
                setInterval(() => {
                    this.setRecentOrder();
                }, 30000);
            },

            setRecentOrder() {
                getIndexOrderInfo().then(response => {
                    if (response.code == 'success') {

                        var data = [];
                        response.data.forEach((item, index) => {
                            let insert = []
                            insert[0] = item.salesman;
                            insert[1] = item.orderId;
                            insert[2] = "<span  class='colorRed'>" + item.totalPrice + "</span>";
                            data.push(insert)
                        })
                        this.config.data = data;
                        console.log("填充后数据:" + JSON.stringify(this.config.data))
                        this.$forceUpdate();

                    }
                })
            }
        }
    };
</script>

<style lang="scss">
    #centreRight1 {
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

        .body-box {
            border-radius: 0.125rem;
            overflow: hidden;
        }
    }
</style>