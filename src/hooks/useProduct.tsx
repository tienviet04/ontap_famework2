import axios, { AxiosError } from "axios";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Product, PrdInputs } from "../types/prd";
import { useEffect, useState } from "react";
import { useLoading } from "../context/loadingContext";

export const useProduct = () => {
    const navi = useNavigate()
    const { id } = useParams()
    const [products, setProducts] = useState<Product[]>([])
    const [product, setProduct] = useState<Product>()
    const { setLoading } = useLoading()
    const handleAdd = async (values: PrdInputs) => {
        try {
            setLoading(true)
            axios.post('/products', values)
            toast.success("Ok")
            navi('/admin/product/list')
        } catch (error) {
            toast.error((error as AxiosError)?.message)
        } finally {
            setLoading(false)
        }

    }
    const List = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('/products')
            setProducts(data)

        } catch (error) {
            toast.error((error as AxiosError)?.message)
        } finally {
            setLoading(false)
        }

    }
    const handleEdit = async (values: PrdInputs) => {
        try {
            setLoading(true)
            const { data } = await axios.put('/products/' + id, values)
            setProduct(data)
            toast.success("Ok")
            navi('/admin/product/list')
        } catch (error) {
            toast.error((error as AxiosError)?.message)
        } finally {
            setLoading(false)
        }

    }

    const getDetail = async (id: string) => {
        try {
            setLoading(true)
            const { data } = await axios.get('/products/' + id)
            setProduct(data)

        } catch (error) {
            toast.error((error as AxiosError)?.message)
        } finally {
            setLoading(false)
        }

    }
    const handleDelete = async (id: string) => {
        if (window.confirm("xoá?")) {
            try {
                setLoading(true)
                await axios.delete('/products/' + id)
                toast.success("Ok")
                List()
            } catch (error) {
                toast.error((error as AxiosError)?.message)
            } finally {
                setLoading(false)
            }
        }

    }
    useEffect(() => {
        List()
    }, [])
    useEffect(() => {
        if (!id) return
        getDetail(id)
    }, [id])

    return {
        products,
        product,
        handleEdit,
        handleDelete,
        handleAdd
    }
}