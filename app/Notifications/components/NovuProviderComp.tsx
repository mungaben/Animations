"use client"

import React, { useState } from 'react'
import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell,
  } from '@novu/notification-center';
  

const NovuProvidercomp = () => {
  const AppId=process.env.NEXT_PUBLIC_APPLICATION_ID
  const [description, setDescription] = useState('');
  function onNotificationClick(message:any) {
    // your logic to handle the notification click
    if (message?.cta?.data?.url) {
window.location.href = message.cta.data.url;
    }
  }
  const colorScheme = 'light';
  return (
    <>
    <NovuProvider
      subscriberId={'15233'}
      applicationIdentifier={`${AppId}`}
      initialFetchingStrategy={{
        fetchNotifications: true,
        fetchUserPreferences: true,
      }}
    >
      <PopoverNotificationCenter
       colorScheme={colorScheme}
        onNotificationClick={onNotificationClick}
        listItem={(notification) => <div>{notification?.payload?.description as string}</div>}
      >
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  </>
  )
}

export default NovuProvidercomp