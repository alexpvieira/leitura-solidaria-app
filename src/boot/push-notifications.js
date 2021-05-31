import { Platform } from 'quasar'

import {
	Plugins,
	PushNotification,
	PushNotificationToken,
	PushNotificationActionPerformed } from '@capacitor/core'

const { PushNotifications } = Plugins;

export default async ({ store, router, Vue }) => {
	if (Platform.is.capacitor) {
		PushNotifications.requestPermission().then(result => {
			if (result.granted) {
				PushNotifications.register()
			}
			else {
			  // Show some error
			}
		})

		PushNotifications.addListener('registration', (token) => {
			// store.dispatch('common/SET_DEVICE_TOKEN', [token.value])
      		console.log(token.value)
		})

		PushNotifications.addListener('registrationError', (error) => {
			// alert('Error on registration: ' + JSON.stringify(error))
		})

		PushNotifications.addListener('pushNotificationReceived', (notification) => {
			// alert('Notification received: ' + JSON.stringify(notification))
		})

		PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
			// if (notification.notification.data.message_id) {
			// 	store.dispatch('notifications/SET_MESSAGE_ID', [parseInt(notification.notification.data.message_id)])

            //     if (router.name !== 'profile') {
            //         router.push({ name: 'profile', query: { tab: 'inbox' } })
            //     }
            //     else {
            //         Vue.$root.$emit('showMessage', message.i)
            //     }
			// }
			console.log(notification)
		})
	}
}
