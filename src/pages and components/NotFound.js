import { Link  } from "react-router-dom";




export default function NotFound(){
    return(
        <div>
            <h1>Page Not Found</h1>
            <button>
                <Link to={'/'}> Home Page</Link>         
            </button>
        </div>
    )
}