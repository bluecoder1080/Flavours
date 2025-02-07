import { useRouteError } from "react-router";

const Error = () =>{

    const err = useRouteError();
    console.log(err);
    return (
       
        <div className="bg-slate-300">
            <h1 className="text-center">Oops !!!</h1>
            <h2 className="text-center ">There is a Error</h2>
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    )
}
export default Error;