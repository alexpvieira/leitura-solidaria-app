const routes = [
	{
		path: '/', component: () => import('layouts/NotAuthenticatedLayout.vue'),
		children: [
			{ 
				path: '',
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
