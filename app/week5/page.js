import Link from 'next/link';
import ItemList from './item-list.js';

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h3 className="flex flex-col items-center justify-center flex-1 px-20 text-center"><b>Shopping List</b></h3>
            <ItemList/>
            <Link href="/" className="flex flex-col items-center justify-center flex-1 px-20 text-center">Home</Link>
        </main>
    );
}
export default Page;