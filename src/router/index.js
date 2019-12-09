import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import aboutUs from '@/components/aboutUs'
import article from '@/components/article'

Vue.use(Router)

const router = new Router({
	routes: [{
			path: '/',
			name: '郁金医',
			meta: {
				title: '郁金医'
			},
			component: index,
		},
		{
			path: '/about_us',
			name: '关于我们',
			meta: {
				title: '关于我们'
			},
			component: aboutUs
		},
		{
			path: '/article',
			name: '文章列表',
			meta: {
				title: '文章列表'
			},
			component: article
		}
	]
})
router.beforeEach((to, from, next) => {

	/* 路由发生变化修改页面title */
	if(to.meta.title) {
		document.title = to.meta.title;
	}
	next();

});

export default router;