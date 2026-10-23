importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyB4ytaR7umuZV4VNE7k6AHylugeNxuc1tM",
    databaseURL: "https://kvzs-52e80-default-rtdb.firebaseio.com",
    projectId: "kvzs-52e80",
    storageBucket: "kvzs-52e80.firebasestorage.app",
    messagingSenderId: "743455714933",
    appId: "1:743455714933:android:001f02260badc4b669d23c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon_launcher.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
