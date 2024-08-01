
import PrdForm from "../components/prdForm"

import { useProduct } from "../hooks/useProduct"

export default function Edit() {
    const { product, handleEdit } = useProduct()

    return <div className="">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Edit</h1>
        </div>
        <PrdForm onSubmit={handleEdit} product={product} />
    </div>
}