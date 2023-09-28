import Link from 'next/link';
import item from './item.js';
import ItemList from './item-list.js';


export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="flex flex-col items-center justify-center flex-1 px-20 text-center">Shopping List</h1>
            <ItemList/>
            <Link href="/" className="flex flex-col items-center justify-center flex-1 px-20 text-center">Home</Link>
        </div>
    )
}