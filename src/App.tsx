import { AppRouter } from './router/AppRouter';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AppRouter />
    </GoogleOAuthProvider>
  );
};

export default App;
