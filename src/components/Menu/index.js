import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://github.com/tayserosa' target="_blank" rel="noreferrer">
                <BsYoutube color='#fff' size={24} />
            </a>

            <a className='social' href='https://instagram.com/tayserosa' target="_blank" rel="noreferrer">
                <BsInstagram color='#fff' size={24} />
            </a>

            <Link to='/links' className='menu-item'>
                Meus links
            </Link>
        </div>
    )
}