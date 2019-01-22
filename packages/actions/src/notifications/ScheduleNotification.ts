// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import ReactNativeFirebase from "react-native-firebase";

/**
 * Displays the specified notification at a future moment in time.
 *
 * Note: It is not possible to display a notification whilst the app is in the foreground on iOS 9.
 * @param {Date} date - Required
 * @param {string} body - Required
 * @param {string} title
 * @param {string} subtitle
 * @param {boolean} playSound
 * @param {Big} iosBadgeNumber
 * @returns {boolean}
 */
function ScheduleNotification(
    date?: Date,
    body?: string,
    title?: string,
    subtitle?: string,
    playSound?: boolean,
    iosBadgeNumber?: BigJs.Big
): Promise<void> {
    // BEGIN USER CODE
    // Documentation https://rnfirebase.io/docs/v5.x.x/notifications/scheduling-notifications

    const Firebase: typeof ReactNativeFirebase = require("react-native-firebase");

    if (!date) {
        throw new TypeError("Input parameter 'date' is required");
    }

    if (!body) {
        throw new TypeError("Input parameter 'body' is required");
    }

    if (iosBadgeNumber && iosBadgeNumber.lte(0)) {
        throw new TypeError("Input parameter 'iosBadgeNumber' should be greater than zero");
    }

    let notification = new Firebase.notifications.Notification().setBody(body);

    if (title) {
        notification = notification.setTitle(title);
    }

    if (subtitle) {
        notification = notification.setSubtitle(subtitle);
    }

    if (playSound) {
        notification = notification.setSound("default");
    }

    if (iosBadgeNumber) {
        notification = notification.ios.setBadge(Number(iosBadgeNumber));
    }

    return Firebase.notifications().scheduleNotification(notification, {
        fireDate: date.getTime()
    });

    // END USER CODE
}
