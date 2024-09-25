// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBxg91gPdpBMT_ZM9RF0qYlLq7gdTcZPEs",
    authDomain: "adoptree-e5755.firebaseapp.com",
    projectId: "adoptree-e5755",
    storageBucket: "adoptree-e5755.appspot.com",
    messagingSenderId: "1010417560409",
    appId: "1:1010417560409:web:9ecb65ea4ec785a6cdba48",
    measurementId: "G-9KYTB4MLT5"
    
  };

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Manejar notificaciones recibidas mientras la app está en segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('Recibido mensaje en segundo plano ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
