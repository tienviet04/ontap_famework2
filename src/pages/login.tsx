import AuthForm from "../components/authForm"
import { useAuth } from "../hooks/useAuth"

export default function Login() {
    const { handleLogin } = useAuth()

    return <div className="">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
        </div>
        <AuthForm onSubmit={handleLogin} />
    </div>
}