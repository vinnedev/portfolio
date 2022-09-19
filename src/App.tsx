import { Header } from './Components/Header'
import { MainContainer } from './Components/MainContainer'
import './styles/main.css'

function App() {
  return (<>
      <div className='w-full bg-slate-300 h-screen'>
        <div className='max-w-5xl mx-auto px-8'>
          <Header />
          <MainContainer />
        </div>
        <div className='w-full h-[15vh] bg-zinc-900'></div>
      </div>
  </>
  )
}

export default App

