import { auth, provider }   from  '../firebase';

export function signInAPI() {
	return (dispatch) => {
		auth.signInWithPopup(provider)
			.then((payload) => dispatch(setUser(payload.user)))
			.catch((err) => alert(err.message));
	};
}