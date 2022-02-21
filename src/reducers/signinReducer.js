const signIn = (state = false, action) => {
    switch (action.type) {
        case "isLoggedIn":
            return !state;
        default:
            return false
    }
}
export default signIn;