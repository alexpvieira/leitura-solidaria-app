import store from '../store'

const routes = [
	{
		path: '/', component: () => import('layouts/IntroductionLayout.vue'),
		children: [
			{ 
				path: '',
				name: 'introduction',
				component: () => import('pages/Introduction.vue') 
			},
		],
		beforeEnter: (to, from, next) => {
			if (store.getters['persist/introduction_watched']) {
				next({name: 'login'})
			}
			else {
				next()
			}
		}
	},
	{
		path: '/', component: () => import('layouts/NotAuthenticatedLayout.vue'),
		children: [
			{ 
				path: 'login',
				name: 'login',
				component: () => import('pages/Login.vue') 
			},
			{ 
				path: 'recover-password',
				name: 'recover-password',
				component: () => import('pages/RecoverPassword.vue') 
			},
			{ 
				path: 'register',
				name: 'register',
				component: () => import('pages/Register.vue') 
			}
		]
	},
	{
		path: '/', component: () => import('layouts/MainLayout.vue'),
		children: [
			{ 
				path: 'home', 
				name: 'home', 
				component: () => import('pages/Home.vue') 
			}
		]
	},
	{
		path: '*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
