import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'

import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

import Navbar from './components/Navbar/Navbar'
import { Suspense, useState } from 'react'

import { ToastContainer } from 'react-toastify';
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

const fetchPlayers = async () => {
  const res = await fetch('../players.json')
  return res.json();
}
const playerPromise = fetchPlayers();

function App() {

  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(60000000);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const removePlayer = (toRemovePlayer) => {
    const filteredPlayers = selectedPlayers.filter(player => player.name !== toRemovePlayer.name)
    setSelectedPlayers(filteredPlayers)
    setAvailableBalance(availableBalance + toRemovePlayer.price)
  }

  console.log(selectedPlayers)
  return (
    <>

      <Navbar availableBalance={availableBalance}></Navbar>
<Banner></Banner>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>

        <h1 className='font-bold text-2xl ml-2'>{toggle ? "Available Players" : "Selected Players"}</h1>

        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 hover:cursor-pointer ${toggle ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 hover:cursor-pointer ${toggle ? "" : "bg-[#E7FE29]"}`}>Selected <span>({selectedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle ?
          <Suspense fallback={<span className="loading loading-spinner loading-xl "></span>}>
            <AvailablePlayers
              playerPromise={playerPromise}
              setAvailableBalance={setAvailableBalance}
              availableBalance={availableBalance}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}

            >
            </AvailablePlayers>
          </Suspense>
          : <SelectedPlayers
            selectedPlayers={selectedPlayers}
            removePlayer={removePlayer}></SelectedPlayers>
      }

      <ToastContainer></ToastContainer>

<Footer></Footer>
    </>
  )
}

export default App
