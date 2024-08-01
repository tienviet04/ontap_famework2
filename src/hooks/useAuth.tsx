import axios, { AxiosError } from "axios";
import { UserInputs } from "../types/use";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoading } from "../context/loadingContext";

export const useAuth = () => {
    const navi = useNavigate()
    const { setLoading } = useLoading()
    const handleRegister = async (values: UserInputs) => {
        try {
            setLoading(true)
            axios.post('/register', values)
            toast.success("Ok")
            navi('/login')
        } catch (error) {
            toast.error((error as AxiosError)?.message)
        } finally {
            setLoading(false)
        }

    }
    const handleLogin = async (values: UserInputs) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/login', values)
            localStorage.setItem('token', data.accessToken)
            toast.success("Ok")
            navi('/admin/product/list')
        } catch (error) {
            toast.error((error as AxiosError)?.message)
        } finally {
            setLoading(false)
        }

    }
    return {
        handleLogin,
        handleRegister
    }
}