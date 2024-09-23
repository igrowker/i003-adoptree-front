import { GoogleLogin } from '@react-oauth/google';

const GoogleSignIn = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        onSuccess(credentialResponse);
      }}
      onError={() => {
        onFailure('Error de inicio de sesión con Google');
      }}
      useOneTap
      text="signin_with"
    />
  );
};

export default GoogleSignIn;
