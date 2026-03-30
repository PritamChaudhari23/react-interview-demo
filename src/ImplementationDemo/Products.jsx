import React, { useState, useEffect } from 'react'

const Products = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const productdata = await response.json()
            setProducts(productdata)
            setLoading(false)
        } catch (err) {
            setError(true)
            setLoading(false)
        }
    }

    // const fetchProducts = () => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setProducts(data)
    //             setLoading(false)
    //         })
    //         .catch((err) => {
    //             setError(true)
    //             setLoading(false)
    //         });
    // }

    useEffect(() => {
        fetchProducts()
    }, [])

    if (loading) {
        return <label>Loading...</label>
    }
    if (error) {
        return <label>Error...</label>
    }
    if (products.length == 0) {
        return <label>No products...</label>
    }

    if (products) {
        return (
            <div>
                <h2>Products from API: </h2>
                <ul>{products.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
            </div>
        )
    }
}

export default Products