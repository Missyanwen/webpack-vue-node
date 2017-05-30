<template>
	<div class="show">
		<div>
			{{message}}
		</div>

        <button @click="routerClick">
            路由到login页
        </button>

        <div id="test">
            sdfsdfsdf
        </div>

        <render :level="1">函数节</render>
        <render :level="2">函数流</render>
	</div>
</template>

<script type="text/javascript">
    import render from '../render/index'
	export default {
        components: {
            render
        },
        data() {
            return {
                message: ''
            }
        },
        created() {
            this.message = '这是showlive的事情！！！'
        },
        mounted() {
            $('#test').css('color','#999');
        },
        methods: {
            routerClick() {
                this.$router.push({ path: `/login`});
            }
        }
    }
</script>

<style lang="less">

</style>