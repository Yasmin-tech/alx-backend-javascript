import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(fileName, lastName), uploadPhoto(fileName)])
    .then((responses) => responses.map((res) => ({
      status: res.status,
      value: res.status === 'fulfilled' ? res.value : String(res.reason),
    })));
}