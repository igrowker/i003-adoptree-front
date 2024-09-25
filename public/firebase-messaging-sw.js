/* eslint-disable no-undef */
// firebase-messaging-sw.js
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

// Inicializa Firebase cuando recibe la configuración desde el frontend
let messaging = null;

// La logica seria algo así:
// 1. Recibe la configuración desde el frontend, mediante la exportación del firebaseConfig, la cual la envia mediante un evento 'message' al SW cuando se inicia el SW
// 2. Inicializa Firebase con la configuración recibida, con esa configuración ya enviada, se podrá iniciar Firebase Messaging sin que las variables sean expuestas
// 3. Inicializa Firebase Messaging
// 4. Maneja los mensajes recibidos en segundo plano
self.addEventListener('message', (event) => {
  if (event.data && event.data.firebaseConfig) {
    // Inicializar Firebase con la configuración recibida, desde el App.tsx
    firebase.initializeApp(event.data.firebaseConfig);

    messaging = firebase.messaging();

    // Esto queda igual que antes 👇
    // Manejar notificaciones recibidas mientras la app está en segundo plano
    messaging.onBackgroundMessage((payload) => {
      console.log('Recibido mensaje en segundo plano ', payload);

      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png',
      };

      self.registration.showNotification(
        notificationTitle,
        notificationOptions
      );
    });
  }
});
