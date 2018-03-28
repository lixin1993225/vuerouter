<template>
	<div>
		<h2 class="text-center">{{title}}</h2>
		<ul class="text-center sapcing" style="padding:0">
			<li v-for="item in links"><a @click="$goroute(item.route)">{{item.val}}</a></li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'page01',
		data(){
			return {
				title:"这里是第一个页面",
				links:[
					{val:'圆白菜',route:'/page01/page01-a'},
					{val:'长白菜',route:'/page01/page01-b'},
				]
			}
		}
	}
</script>
<style type="text/css">
	
</style>