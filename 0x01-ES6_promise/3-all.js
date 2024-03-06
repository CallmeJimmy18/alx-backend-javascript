import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoRes, userRes]) => {
      console.log(photoRes.body, userRes.firstName, userRes.lastName);
    })
    .catch(error => {
      console.log('Signup system offline');
    });
}
