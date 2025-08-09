import useUser from "../model/useUser"

function useUserUI(initData?: Partial<UserData>){

    const {
        data,
        isValid,
        errors,
        handlers: {
            setPassword,
            setUsername,
        }
    } = useUser(initData)
    function UserPassword({}){
        return (
            <input 
                value={data?.username}
                type="text" 
                id="username" 
                name="username" 
                placeholder="Usuario" 
                onChange={setUsername} 
            />
        )
    }

    function UserUsername({}){
        return (
            <input 
                value={data.password}
                type="password" 
                id="password" 
                name="password" 
                placeholder="Contraseña" 
                onChange={setPassword}
            />
        )
    }

    return {
        components: {
            UserPassword,
            UserUsername,
        },
        data,
        errors,
        isValid,
    }
}

export default useUserUI