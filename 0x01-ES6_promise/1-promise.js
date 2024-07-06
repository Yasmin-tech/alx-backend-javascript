// Make a full promise based on the function's arrgument

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        firstName: 'Guillaume',
        lastName: 'Salva',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
