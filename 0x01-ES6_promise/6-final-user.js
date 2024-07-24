import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((promisesSettled) => promisesSettled.map((obj) => {
      if (obj.status === 'fulfilled') {
        const newObj = { ...obj };
        return newObj;
      }
      const newObj = { status: obj.status, value: String(obj.reason) };
      return newObj;
    }));
}
