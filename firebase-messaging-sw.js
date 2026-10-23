importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
  projectId: "kvzs-52e80",
  messagingSenderId: "743455714933",
  appId: "1:743455714933:android:001f02260badc4b669d23c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || '𓆩👑𓆪 K.E.M.O VIP';
  const notificationOptions = {
    body: payload.notification?.body || 'لديك إشارة جديدة من التطبيق!',
    icon: payload.notification?.image || '',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
