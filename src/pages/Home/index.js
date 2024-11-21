import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu'
import Footer from '../Footer'

export default function Home(){
    return(
      <div className="container-home">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <span> Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#FFF" />
            <input 
              placeholder="Cole seu link aqui.."  
            />
          </div>

          <button>Encurtar link</button>

        </div>
          <Menu />
          <Footer />
      </div>
    )
  }