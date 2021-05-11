import React, { useEffect } from 'react'
import Routes from './src/routes/index';
import * as Notifications from 'expo-notifications'


import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading'
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
      }
    )

    return () => subscription.remove()
    //  Remover todas notificações
    // async function removeAllNotifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync()
    //   const data = await Notifications.getAllScheduledNotificationsAsync()
    // }

    // removeAllNotifications()
  }, [])

  if (!fontsLoaded)
    return <AppLoading />


  return (
    <Routes />
  )
}