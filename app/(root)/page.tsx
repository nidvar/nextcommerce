import ProductList from '@/components/shared/header/product/product-list';

import sampleData from '@/db/sample-data';

const Homepage = ()=>{
    return(
        <>
            <ProductList data={sampleData.products} title={'Sample Data'}/>
        </>
    )
};

export default Homepage;