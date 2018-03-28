<template>
	<div class="page01b">
		<p>{{title}}</p>
		<ul>
			<li v-for="item in links"><a @click="$goroute(item.link)">{{item.val}}</a></li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'page01-b',
		data(){
			return {
				title:'这个面条他又长又宽',
				links:[
					{
						val:'大菠萝',
						link:'/page01/page01-b/end'
					},
					{
						val:'小菠萝',
						link:'/home'
					}
				]
				
			}
		}
	}
</script>
<style type="text/css">
	.page01b{
		margin:0 auto;
		text-align: center;
	}
</style>