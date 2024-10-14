import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

interface GoogleSignInProps {
  onSuccess: (credentialResponse: CredentialResponse) => void | Promise<void>;
  onFailure: (error: string) => void;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({
  onSuccess,
  onFailure,
}) => {
  return (
    <div className="w-full mt-4">
      <GoogleLogin
        onSuccess={(credentialResponse: CredentialResponse) => {
          onSuccess(credentialResponse);
        }}
        onError={() => {
          onFailure('Error de inicio de sesión con Google');
        }}
        useOneTap
        text="signin_with"
        // Aplica el tema claro para mantener la consistencia visual
        theme="outline"
        size="large"
      />
    </div>
  );
};

export default GoogleSignIn;
