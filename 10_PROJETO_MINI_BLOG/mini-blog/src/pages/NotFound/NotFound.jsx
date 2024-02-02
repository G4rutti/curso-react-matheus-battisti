import { useQuery } from '../../hooks/useQuery.jsx'
import { Link } from 'react-router-dom'

const NotFound = () => {
    const query = useQuery()


    return (
        
        <div className='flex flex-col justify-center'>
          {console.log("to aqui")}
            <div className='w-full mx-auto bg-slate-900 h-42 md:h-40 md:mb-20'>
                <h2 className='my-10 flex flex-col mx-auto text-xl w-80vw uppercase font-bold text-slate-300
                md:text-center'>Resultados apartir da busca por: <span className='lowercase text-center mt-5'>{query}</span></h2>
            </div>
            
            <div>
              <div className='flex flex-col justify-center mx-auto w-80vw my-10'>
                  <p className='text-center text-2xl font-bold uppercase mb-10'>Não foram encontrados posts a partir da sua busca</p>
                  <Link className="w-30vw mx-auto my-2 bg-red-600 py-2 rounded-md hover:text-red-900 transition-all duration-500 text-slate-200 text-center
                  md:w-20" to='/'>
                      Voltar
                  </Link>
              </div>  
            </div>
        </div>
    )
}

export default NotFound