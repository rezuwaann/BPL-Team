import userImg from '../../assets/user1.png'
import flagImg from '../../assets/flag.png'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Player = ({ player, setAvailableBalance, availableBalance, selectedPlayers, setSelectedPlayers }) => {



    const [isSelected, setIsSelected] = useState(false);




    return (

        <div className='mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img className='h-[400px] w-full object-cover rounded-2xl'
                        src={player.image}
                        alt="players image" />
                </figure>

                <div className="mt-4">
                    <h2 className="card-title"><span><img src={userImg} alt="" /></span>{player.name}</h2>

                    <div className="flex justify-between mt-4 pb-2 border-b-1 border-gray-400">
                        <div className='flex gap-1 items-center'>
                            <img className='h-[20px] w-[20px]' src={flagImg} alt="" />
                            <h1>{player.country}</h1>
                        </div>

                        <div className='btn'>{player.playing_role}</div>
                    </div>

                    <div className='flex justify-between font-bold mt-2'>
                        <div>Rating</div>
                        <div>{player.rating}</div>
                    </div>

                    <div className='flex justify-between mt-2 items-center'>
                        <div className='font-bold '>{player.batting_style}</div>
                        <div>{player.bowling_style}</div>
                    </div>

                    <div className='flex justify-between font-bold mt-2 items-center'>
                        <div>Price: ${player.price}</div>
                        <div className="card-actions justify-end ">
                            <button disabled={isSelected} onClick={() => {
                                if (player.price > availableBalance) {
                                    toast('Balance is low')
                                    return;
                                }
                                if (selectedPlayers.length === 6) {
                                    toast('You can only choose 6 players');
                                    return;
                                }

                                if (selectedPlayers.includes(player)) {

                                    setIsSelected(true)
                                    return;
                                };


                                setSelectedPlayers([...selectedPlayers, player]);
                                setIsSelected(true)
                                setAvailableBalance(availableBalance - player.price)
toast('Player selected!')



                            }} className="btn">{isSelected ? 'Selected' : 'Choose Player'}</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Player;