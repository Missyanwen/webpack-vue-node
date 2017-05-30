<!--侧边栏-->

<template>

<ul class="sidebar-menu">
    <li v-for="menu in menus">
        <!--标题-->
        <a>
            <span class="title">{{ menu.title }}</span>
        </a>
    </li>
</ul>

</template>

<script>


export default {

    data () {
        return {
            explandMenu: null,
            menus: [
                { title: '需求创建', path: '/'},
                {
                    title: '需求管理',
                    children: [
                        { title: '需求管理', path: '/demand/management' },
                        { title: '我的需求', path: '/demand/mine' },
                    ]
                },
                /*{ title: '需求统计', path: '/orion' },*/
                {
                    title: '配置管理',
                    children: [
                        { title: '接口人配置', path: '/config/user' }
                    ]
                }
            ],
            menus: []
        };
    },
    created() {


    },
    watch: {

    },
    methods: {

    }
};
</script>
<style lang="less">
    .sidebar-menu{
        position: absolute;
        left: 8px;
        width: 250px;
        height: 100vh;
        background: #666;
        border:1px solid #000;
    }
    .main{
        margin-left: 300px;
    }
</style>