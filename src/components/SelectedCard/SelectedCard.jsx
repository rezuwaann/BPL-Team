import deleteImg from '../../assets/Frame.png'

const SelectedCard = ({selectedPlayer,removePlayer}) => {
    return (
        <div>
            <div className=" flex justify-between items-center mt-3 rounded-2xl border-2 border-gray-200 mx-2">
                <div className='flex items-center gap-2'>
                    <div>
                        <img className='h-[80px] w-[80px] rounded-2xl m-2  shadow-lg shadow-gray object-cover' src={selectedPlayer.image} alt="" /></div>
                    <div>
                        <h1 className='text-xl font-bold'>{selectedPlayer.name}</h1>
                        <h1 className='text-gray-400 font-semibold'>{selectedPlayer.playing_role}</h1>
                    </div>
                </div>
                <div>
                    <img onClick={()=>removePlayer(selectedPlayer)} className='hover:cursor-pointer mr-2' src={deleteImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;