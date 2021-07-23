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
		],
		beforeEnter: (to, from, next) => {
			let access_token = store.getters['persist/access_token']
			let user = store.getters['persist/user']

			if (access_token) {
				if (user?.profiles?.type !== 'USER') next({name: 'home'})
				else {
					store.dispatch('persist/SET_ACCESS_TOKEN', [''])
					store.dispatch('persist/SET_USER', [{}])
				}
			}
			
			next()
		}
	},
	{
		path: '/', component: () => import('layouts/MainLayout.vue'),
		children: [
			{ 
				path: 'home', 
				name: 'home', 
				component: () => import('pages/Home.vue') 
			},
			{
				path: 'article/:id',
				name: 'article',
				component: () => import('pages/Article.vue') 
			},
			{
				path: 'profile',
				name: 'profile',
				component: () => import('pages/Profile.vue') 
			},
			{
				path: 'ranking',
				name: 'ranking',
				component: () => import('pages/Ranking.vue') 
			},
			{
				path: 'previously-read-articles',
				name: 'previously-read-articles',
				component: () => import('pages/PreviouslyReadArticles.vue')
			},
			{
				path: 'ngos',
				name: 'ngos',
				component: () => import('pages/Ngos.vue') 
			},
			{
				path: 'previously-read-articles/:id',
				name: 'previously-read-article',
				component: () => import('pages/Article.vue')
			},
			{
				path: 'feedback',
				name: 'feedback',
				component: () => import('pages/Feedback.vue')
			},
			{
				path: 'faq',
				name: 'faq',
				component: () => import('pages/Faq.vue') 
			}
		]
	},
	{
		path: '*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
