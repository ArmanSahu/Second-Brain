type URLPathType = {
    signup: string,
    login: string,
    content: string,
    me: string
}

export const  URLPath:URLPathType = {
    signup: "/api/v1/auth/signup",
    login: "/api/v1/auth/login",
    content: "/api/v1/content/",
    me: "/api/v1/me/"
}