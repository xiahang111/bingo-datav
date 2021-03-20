<template>
    <div id="centreRight2">
        <div class="bg-color-black">
            <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
                <span class="fs-xl text mx-2">当月产品销售种类分析</span>
            </div>
            <div class="d-flex jc-center body-box" style=" margin-top: 0;">
                <dv-capsule-chart :config="config" style="width: 100%;height:4.5rem"/>
                <!-- ---------------------------------------- -->
                <!--<centreRight2Chart1></centreRight2Chart1>-->
            </div>
        </div>
    </div>
</template>

<script>
    // import centreRight2Chart1 from "@/components/echart/centreRight2/centreRight2Chart1";
    import {getOrderTypePie} from '@/api/report'

    export default {
        data() {
            return {
                orderTypePie: [],
                config: {
                    data: [{"value": "45", "name": "门单"}, {"value": "7", "name": "层板灯单"}, {
                        "value": "12",
                        "name": "轻奢极简餐桌"
                    }, {"value": "1", "name": "小样品"}, {"value": "2", "name": "置物架"}, {"value": "9", "name": "材料单"}]
                }
            };
        },
        components: {},
        mounted() {
        },
        created() {
            this.setOrderPie();
        },
        methods: {
            setOrderPie() {
                getOrderTypePie().then(response => {

                    if (response.code == 'success') {
                        this.config.data = response.data;
                        console.log("销售种类数据:" + JSON.stringify(this.config.data))
                    }
                })
            }
        }
    };
</script>

<style lang="scss">
    #centreRight2 {
        padding: 0.0625rem;
        height: 5rem;
        min-width: 3.75rem;
        border-radius: 0.0625rem;

        .bg-color-black {
            padding: 0.0625rem;
            height: 5.0625rem;
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