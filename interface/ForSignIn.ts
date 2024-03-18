export interface SignInForm {
    username: string,
    password: string,
}
export interface tokenWithSomeUserDetails {
    accessToken: string,
    refreshToken: string
    email: string,
    created_date: string,
    last_modified: string,
}