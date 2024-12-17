import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up-form/sign-up-form.component";

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = signInWithGooglePopup();
    const { user } = await response;
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUp />
    </div>
  );
}
