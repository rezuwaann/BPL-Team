import React, { use } from 'react';
import Player from '../Player/Player';


const AvailablePlayers = ({ playerPromise, setAvailableBalance, availableBalance, selectedPlayers, setSelectedPlayers }) => {

    const players = use(playerPromise)
    const playerData = players.players;


    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
            {
                playerData.map(player => <Player
                    player={player}
                    setAvailableBalance={setAvailableBalance}
                    availableBalance={availableBalance}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}>

                </Player>)
            }
        </div>

    );
};

export default AvailablePlayers;