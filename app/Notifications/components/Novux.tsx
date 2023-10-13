"use client";
import React, { FC } from "react";
import {
  NotificationBell,
  NovuProvider,
  PopoverNotificationCenter,
} from "@novu/notification-center";

const NovuComp: FC<{ user: string }> = (props) => {

  const { user } = props;
  const colorScheme = "light";
  const Application_ID = process.env.NEXT_PUBLIC_APPLICATION_ID;
  return (
    <>
      <NovuProvider
        subscriberId={user}
        applicationIdentifier={`${Application_ID}`}
      >
        <PopoverNotificationCenter
          onNotificationClick={() => window.location.reload()}
          colorScheme={colorScheme}
        >
          {({ unseenCount }) => <NotificationBell unseenCount={unseenCount!} />}
        </PopoverNotificationCenter>
      </NovuProvider>
    </>
  );
};
export default NovuComp;
