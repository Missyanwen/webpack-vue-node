<!--顶部导航条-->

<template>
    <header class="header">
        <div class="topmenu">
            头部
        </div>
    </header>
</template>

<script>

    export default {
        data() {
            return {
                userinfo: {
                    userName: ''
                }
            }
        },
        created() {
        },
        components: {
        },
        methods: {
        }
    };
</script>

<style lang="less">
    .header{
        width: 100%;
        height: 40px;
        background: #666;
        border:1px solid #000;
        text-align: center;
        font-size: 18px;
        line-height: 40px;
        color: #fff;
    }
</style>