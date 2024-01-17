import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// Types
import { Classification } from '../../types';
// Services
import dateService from '../services/date.service';

type Data = {
  status: number;
  message?: string;
  error?: string;
  data?: any;
};

class UserRepo {
  private usersCollection = firestore().collection('users');

  public async getUser(uid: string) {
    return new Promise<Data>(async (resolve, reject) => {
      try {
        const snapshot = await this.usersCollection.doc(uid).get();
        if (!snapshot.exists) return null;
        resolve({ data: snapshot.data(), status: 200 });
      } catch (error) {
        console.error('Error getting user', error);
      }
    });
  }

  public async storeUser(userAuth: FirebaseAuthTypes.UserCredential) {
    return new Promise<Data>(async (resolve, reject) => {
      try {
        const { uid, email, displayName } = userAuth.user;

        const snapshot = await this.usersCollection.doc(uid).get();
        if (snapshot.exists) {
          return reject({
            message: 'Usuário já está cadastrado!',
            status: 403,
          });
        }
        this.usersCollection.doc(uid).set({
          email,
          displayName,
          uid,
          stars: 300,
          ranking: Classification['CIANITA_I'],
          rankingPoints: 0,
          createdAt: dateService.now(),
          updatedAt: null,
          deletedAt: null,
        });

        const data = {
          email,
          displayName,
          uid,
          stars: 300,
          ranking: Classification['CIANITA_I'],
          rankingPoints: 0,
          createdAt: dateService.now(),
          updatedAt: null,
          deletedAt: null,
        };

        resolve({
          message: 'Usuário cadastrado com sucesso!',
          status: 201,
          data,
        });
      } catch (error) {
        reject({
          message: 'Ocorreu um erro ao cadastrar o usuário',
          error,
          status: 422,
        });
      }
    });
  }

  public async deleteUser(uid: string) {
    return new Promise<Data>(async (resolve, reject) => {
      try {
        const snapshot = await this.usersCollection.doc(uid);
        snapshot.set({
          deletedAt: dateService.now(),
        });
        resolve({ status: 200, message: 'Usuário deletado com sucesso!' });
      } catch (error) {
        console.error('Error when deleting user', error);
        reject({
          status: 422,
          message: 'Ocorreu um erro ao tentar deletar o usuário',
        });
      }
    });
  }

  public async updateUser(userAuth: FirebaseAuthTypes.UserCredential) {}
  public async earnStars(userAuth: FirebaseAuthTypes.UserCredential) {}
  public async earnRankingPoints(userAuth: FirebaseAuthTypes.UserCredential) {}
}

const userRepo = new UserRepo();

export default userRepo;
