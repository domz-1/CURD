import {Link} from 'react-router-dom'


export default function SideBar (){
    return(
        <>
        <ul className='col slide-bar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Products List</Link>
        <Link to={'/products/create'}>Create</Link>
        </ul>
        </>
    )
}