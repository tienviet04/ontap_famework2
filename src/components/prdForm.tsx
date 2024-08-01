import { useForm } from "react-hook-form"

import { Product, PrdInputs } from "../types/prd"
import { useEffect } from "react";

export type AuthProps = {
    product?: Product;
    onSubmit: (data: PrdInputs) => void
}

const PrdForm = ({ product, onSubmit }: AuthProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<PrdInputs>()

    useEffect(() => {
        if (!product) return;
        reset(product);
    }, [product, reset])

    return <>
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">


            <form action="#" onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label>Name</label>

                    <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            {...register('name', { required: "Required" })}
                            placeholder="Enter email"
                        />
                        {errors?.name && (
                            <small className="text-red-500">Name is required</small>
                        )}
                    </div>
                </div>
                <div>
                    <label>Price</label>

                    <div className="relative">
                        <input
                            type="number"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            {...register('price', { required: "Required", min: { value: 1, message: "min>1" } })}
                            placeholder="Enter Price"
                        />
                        {errors?.price && (
                            <small className="text-red-500">Price is required</small>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900"> Select </label>

                    <select

                        id="HeadlineAct"
                        {...register('brand', { required: "required" })}
                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    >
                        <option>Please select</option>
                        <option value="HP">HP</option>
                        <option value="Appler">Appler</option>
                    </select>
                    {errors?.brand && (
                        <small className="text-red-500">brand is required</small>
                    )}
                </div>
                <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
                    <div className="flex items-center">
                        &#8203;
                        <input {...register("isShow")} type="checkbox" className="size-4 rounded border-gray-300" id="Option1" />
                    </div>

                    <div>
                        <strong className="font-medium text-gray-900"> IsShow </strong>
                    </div>
                </label>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    </>

}
export default PrdForm