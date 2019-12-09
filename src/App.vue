<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    	<div class="header">
    		<div class="logo floatl"> <router-link to='/'>logo</router-link></div>
    		<div class="about floatr"><router-link to='/about_us'>关于我们</router-link></div>
    		<div class="article floatr"><router-link to='/article'>文章</router-link></div>
    	</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  	
  }
}
</script>

<style>
	.header {
		height: 50px;
		box-sizing: border-box;
		padding: 0 30px;
	} 
	.logo {
	
	}
	.article {
		margin-right: 50px;
	}
	.about {
		/*margin-right: 50px;*/
	}
	.floatl {
		float: left;
	}
	.floatr {
		float: right;
	}
</style>
