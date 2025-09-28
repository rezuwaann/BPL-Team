
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ selectedPlayers,removePlayer }) => {
    // console.log(selectedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
            selectedPlayers.map(selectedPlayer => <SelectedCard selectedPlayer={selectedPlayer} removePlayer={removePlayer}></SelectedCard>)
            }


        </div>
    );
};

export default SelectedPlayers;