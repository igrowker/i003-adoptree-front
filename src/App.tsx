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
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AppRouter />
    </GoogleOAuthProvider>
  );
};

export default App;
