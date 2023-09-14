export default function StudentInfo(){
    return(
        <div>
            <Name />
            <Course />
            <Github />
        </div>
    );
}


function Name(){
    return <p>Ahmed Hijazi</p>;
}

function Course(){
    return <p>CPRG 306-B</p>;
}

function Github(){
    return (<a href="https://github.com/Ojifu/cprg306-assignments">
        Visit my Github Repo
    </a>)
    ;
}