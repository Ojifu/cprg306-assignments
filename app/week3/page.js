import item from './item.js';
import ItemList from './item-list.js';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
            <ItemList />
        </main>
        </div>
    )
}