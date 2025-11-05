type Product = {
    name: string
    slug: string
    category: string
    description: string
    images: string[]
    price: number
    brand: string
    rating: number
    numReviews: number
    stock: number
    isFeatured: boolean
    banner?: string | null
}

const ProductList = ({ data, title }: { data: Product[]; title?: string }) => {
    console.log(data);
    return (
        <>
            <div>
                <h1>{title}</h1>
                {
                    data.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {data.map((item) => {
                                return (
                                    <div
                                        key={item.slug}
                                    >
                                        <p>{item.name}</p>
                                    </div>
                                )
                            })}</div>
                    ) : ''
                }
            </div>
        </>
    )
};

export default ProductList