import ProductCard from '../product/product-card'

import { Product } from '@/types';

const ProductList = ({ data, title }: { data: Product[]; title?: string }) => {
    return (
        <>
            <div>
                <h1>{title}</h1>
                {
                    data.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {data.map((item: Product) => {
                                return (
                                    <ProductCard key={item.slug} product={item}/>
                                )
                            })}</div>
                    ) : ''
                }
            </div>
        </>
    )
};

export default ProductList