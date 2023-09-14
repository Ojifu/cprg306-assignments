import Link from "next/link";
import StudentInfo from "../StudentInfo"

export default function Page(){
    return (
    <main>
        
            <Link href="/"><b>My Shopping List</b></Link>
            <StudentInfo />
    </main>
        );
}