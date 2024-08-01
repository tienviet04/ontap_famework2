import { useForm } from "react-hook-form"
import { UserInputs } from "../types/use"

export type AuthProps = {
    onSubmit: (data: UserInputs) => void
}

const AuthForm = ({ onSubmit }: AuthProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserInputs>()
    return <>
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
           

            <form action="#" onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>

                    <div className="relative">
                        <input
                            type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            {...register('email', { required: "Required" })}
                            placeholder="Enter email"
                        />
                        {errors?.email && (
                            <small className="text-red-500">Email is required</small>
                        )}
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            {...register('password', { required: "Required" })}
                            placeholder="Enter password"
                        />
                        {errors?.password && (
                            <small className="text-red-500">Password is required</small>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </>

}
export default AuthForm