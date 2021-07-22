import { auth, provider }   from  '../firebase';

export function signInAPI() {
	return (dispatch) => {
		auth.signInWithPopup(provider)
			.then((payload) => dispatch(console.log(payload)))
			// .then((payload) => dispatch(setUser(payload.user)))
			.catch((err) => alert(err.message));
	};
};

