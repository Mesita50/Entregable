import { Home } from './components/Pages/Home/Home'
import { News } from './components/News/News'
import { Header } from './components/Layouts/Header/Header'
import { Main } from './components/Layouts/Main/Main'
import './index.css'
import { ItemsCards } from './components/ItemsCards/ItemsCards'
import { Nightclubs } from './components/Scripts/Nightclubs'
import principalImgSection from './assets/sectionPrincipalImg.jpg'

import {Carousel} from './components/Layouts/Slider/Slider'
import { Footer } from './components/Layouts/Footer/Footer'

function App() {
  const slide=[
    'https://lapergola.co/wp-content/uploads/2020/05/pic02.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/5c/89/dc/octavaclub.jpg?w=1200&h=-1&s=1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9sjGRCwq7L3MjNTp32BJw5y8Sfl4l67-Q1D7z7u9xw&s',
  ]
  return (
    <>
      <Home>
        <Header />
        <Main>
          <div className="flex w-full justify-evenly ">
            <News>
              <div className=' flex flex-col justify-center items-center '>
                <img className='w-4/5' src={principalImgSection} alt="" />
                <div className='w-4/5 flex flex-col items-start text-sm '>
                <h1 className='mb-2 mt-4'>Tres discotecas de Colombia entre las 100 mejores del mundo </h1>
                <p>Por el lado de colombia, aparecieron nombres inscritos como el tan sonado Theatron de Bogotá, el Living Nightclub en Cali, Brutal Disco de Medellín o el Flow Multiespacio en Duitama (Boyacá).

Sin embargo, del país 'cafetero' fueron elegidos tres establecimientos: La Pérgola Clandestina, ubicada en Cali y que se llevó el puesto 79; la Octava Club de Bogotá, en el puesto 73 y Salvador, también de la capital, en la posición 95. </p>
                </div>
                
              </div>

            </News>
            <News>
              {Nightclubs.map(Nightclubs => <ItemsCards
                key={Nightclubs.id}
                img={Nightclubs.img}
                time={Nightclubs.time}
                description={Nightclubs.description} />)}
            </News>
          </div>
        
        <div className=' flex justify-center items-center mb-12 p-1 '>
        <Carousel Slides={slide}/>
        </div>
        
        </Main>
        <div>
          <Footer/>
        </div>
      </Home>
    </>
  )
}

export default App