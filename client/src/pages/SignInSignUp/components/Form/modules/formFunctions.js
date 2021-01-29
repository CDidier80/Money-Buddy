import emailValidityCheck from "./emailValidition/emailValidationFunctions"
import { LogInUser } from '../../../../../Services/UserService'
import initializeAccount from "./modelFunctions"


export const signup = async (props) => {
    const {
        reenteredPassword, 
        setUserInfo, 
        password, 
        setAuth, 
        email
    } = props

    try {
        if (password !== reenteredPassword){
            return false
        }
        if (!emailValidityCheck(email)){
            return false
        }
        const response = await initializeAccount(email, password)
        const {data: user, status} = response
        if (status === 200) {
            setUserInfo(user)
            setAuth(true)
        }
        return true
    } catch (error) {
        console.log(error)
    }
}


export const signin = async (props) => {
    console.log(props)
    const { 
        setUserInfo, 
        password, 
        setAuth, 
        history, 
        email, 
    } = props
    try {
        console.log("reached")

        const response = await LogInUser({ email, password })
        console.log("reached")

        if (response.status === 200) {
            setAuth(true)
            setUserInfo(response.data.user)
            history.push('/dashboard')
        } 
    } catch (error) {
        console.log(error)
    }
}

