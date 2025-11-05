import Image from 'next/image';
import Link from 'next/link';

import Menu from '../header/menu'

const Header = () => {
    return(
        <>
            <header className='w-full border-b'>
                <div className='wrapper flex-between'>
                    <div className='flex-start'>
                        <Link href='/' className='flex-start'>
                            <Image src='/images/logo.svg' alt='logo' height={48} width={48} priority={true} />
                            <span className='hidden lg:block font-bold text-2xl ml-3'>NextJS Ecommerce</span>
                        </Link>
                    </div>
                    <div className='space-x-2'>
                        <Menu />
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;