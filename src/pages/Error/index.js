import './error.css'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import Footer from '../Footer'
import { FiArrowLeft } from 'react-icons/fi'

export default function Error(){
    return(
      <div className="container-error">
              <Menu />
    
                <Link to="/" className='container'>
                  <FiArrowLeft size={38} color='#fff' />
                  <h1>Página não encontrada, voltar para Home</h1>
                </Link>
    
            <Footer />
      </div>
    )
  }