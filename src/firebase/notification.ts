import { messaging } from './../../firebase-config';
import { getToken } from 'firebase/messaging';

const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      });
      console.log('Token de notificación FCM:', token);
      // Aquí puedes enviar el token al servidor para guardar.
    } else {
      console.log('Permiso de notificaciones denegado');
    }
  } catch (error) {
    console.error('Error al obtener el token FCM:', error);
  }
};

export default requestNotificationPermission;
