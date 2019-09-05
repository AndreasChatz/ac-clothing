import UserActionTypes from "./user.types";

const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export {
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailure,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  checkUserSession
};
