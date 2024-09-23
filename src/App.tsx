import { AppRouter } from './router/AppRouter';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="320850219602-da35nosbb61qld5h0n2t254usmq207ia.apps.googleusercontent.com">
      <AppRouter />
    </GoogleOAuthProvider>
  );
};

export default App;
