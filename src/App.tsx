import { AppRouter } from './router/AppRouter';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import { useEffect } from 'react';
import requestNotificationPermission from './firebase/notification';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const App: React.FC = () => {
  useEffect(() => {
    requestNotificationPermission();
  }, []);
  
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        console.log("Service Worker registrado con éxito:", registration);
      })
      .catch((error) => {
        console.log("Error al registrar el Service Worker:", error);
      });
  }
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AppRouter />
    </GoogleOAuthProvider>
  );
};

export default App;
