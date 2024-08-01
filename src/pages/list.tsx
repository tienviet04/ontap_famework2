
import { Link } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"

export default function List() {
    const { products, handleDelete } = useProduct()

    return <>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">IsShow</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Brand</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map((prd, index) => (
                        <tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{prd.name}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{prd.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{prd.isShow.toString()}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{prd.brand}</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <button
                                    onClick={() => handleDelete(prd.id)}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    View
                                </button>
                                <Link to={'/admin/product/edit/' + prd.id}

                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    edit
                                </Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    </>
}