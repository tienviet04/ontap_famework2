import AuthForm from "../components/authForm"
import { useAuth } from "../hooks/useAuth"

export default function Register() {
    const { handleRegister } = useAuth()

    return <div>
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Register</h1>
        </div>
        <AuthForm onSubmit={handleRegister} />
    </div>
}