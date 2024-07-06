import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((photoObj) => {
      createUser()
        .then((userOBJ) => {
          console.log(`${photoObj.body} ${userOBJ.firstName} ${userOBJ.lastName}`);
        })
        .catch(() => consol.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}