// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { auth } from '../../config/firebase';

class AuthService {
  authProvider: FirebaseAuthTypes.Module = auth();
  public async registerWithEmailAndPassword(email: string, password: string) {
    const result = this.authProvider.createUserWithEmailAndPassword(
      email,
      password
    );
    return result;
  }

  public async loginWithEmailAndPassword(email: string, password: string) {
    const result = this.authProvider.signInWithEmailAndPassword(
      email,
      password
    );
    return result;
  }

  public async passwordReset(email: string) {
    return await this.authProvider.sendPasswordResetEmail(email);
  }

  public async logout() {
    return await this.authProvider.signOut();
  }

  public handleFirebaseAuthError(
    error: FirebaseAuthTypes.NativeFirebaseAuthError['code']
  ) {
    const errorMessages: Record<string, string> = {
      'auth/invalid-credential': 'Email ou senha incorretos',
      'auth/user-not-found': 'Usuário não encontrado',
      'auth/invalid-email': 'Email inválido',
      'auth/wrong-password': 'Senha incorreta, tente novamente',
      'auth/email-already-in-use': 'O email já está cadastrado',
      'auth/weak-password': 'Senha fraca, é necessário no mínimo 6 caracteres',
      default: 'Ocorreu um erro, tente novamente mais tarde!',
    };

    const errorMessage = errorMessages[error] || errorMessages.default;
    return errorMessage;
  }

  public async isUserTokenValid() {
    try {
      const result = await this.authProvider.currentUser?.getIdTokenResult();
      if (result?.expirationTime) {
        const currentTime = new Date(Date.now()).getMilliseconds();
        const expirationTime = new Date(
          result.expirationTime
        ).getMilliseconds();
        if (currentTime < expirationTime) return true;
      }
      return false;
    } catch (error) {
      console.error('Error verifying user token:', error);
      return false;
    }
  }

  public async reAuthenticateUser(token: string) {
    try {
      const userCredential =
        await this.authProvider.signInWithCustomToken(token);
      return userCredential.user;
    } catch (error) {
      console.error('Error re-authenticating user:', error);
    }
  }
}

const authService = new AuthService();
export default authService;
