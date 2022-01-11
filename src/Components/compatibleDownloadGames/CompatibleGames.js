import React from 'react'
import CompatibleGamesCard from './CompatibleGamesCard'

const CompatibleGames = () => {
    return (
        <div>
            <h2 style={{color: "white"}} className='mt-5'>Hemos detectado que tu ordenador es compatible con los siguientes juegos</h2>
            <CompatibleGamesCard />
        </div>
    )
}

export default CompatibleGames