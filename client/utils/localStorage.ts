const setLocalStorage = (token: string) => {
    localStorage.setItem('token', token)
}

const getToken = () => {
    localStorage.getItem('token')
}

export { setLocalStorage, getToken }
