








"use client";

import {
    NotificationBell,
    NovuProvider,
    PopoverNotificationCenter,
} from "@novu/notification-center";
import { FC } from "react";

export const NovuComponent: FC<{ user: string }> = (props) => {
    const Application_ID=process.env.NEXT_PUBLIC_APPLICATION_ID;
    const { user } = props;
    return (
        <>
        <NovuProvider subscriberId={user} applicationIdentifier={  `${Application_ID }`}>
                <PopoverNotificationCenter
                    onNotificationClick={() => window.location.reload()}
                    colorScheme="light" // Add this line
                >
                    {({ unseenCount }) => <NotificationBell unseenCount={unseenCount!} />}
                </PopoverNotificationCenter>
            </NovuProvider>
        </>
    );
};