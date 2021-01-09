import { LogInUser } from '../../../../../Services/UserService'
import initializeAccount from "./modelFunctions"
import emailValidityCheck from "./emailValidition/emailValidationFunctions"


export const signup = async ({setUserInfo, setAuth, password, reenteredPassword, email}) => {
    try {
        if (password !== reenteredPassword){
            console.log("incorrect password")
            return false
        }
        if (!emailValidityCheck(email)){
            return false
        }

        const response = await initializeAccount(email, password)
        console.log("response:", response)
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


export const signin = async ({setUserInfo, setAuth, email, password}) => {
    try {
        const response = await LogInUser({ email, password })
        const {data, status} = response
        if (status === 200) {
            setUserInfo(data.user)
            setAuth(true)
        }
        // console.log("it worked")
        // console.log(response)
    } catch (error) {
        console.log(error)
    }
}

