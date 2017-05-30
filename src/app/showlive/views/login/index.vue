<template>
	<div>
		<div>
			{{message}}
		</div>
        <button @click="routerClick">
            路由到主页
        </button>
	</div>
</template>

<script type="text/javascript">
	export default {
        data() {
            return {
                message: ''
            }
        },
        created() {
            this.message = '我的登录窗口'
        },
        methods: {
            routerClick() {
                this.$router.push({ path: `/`});
            }
        }
    }
</script>

<style lang="less">

</style>