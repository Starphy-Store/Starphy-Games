import React from 'react'
import { Card } from 'react-bootstrap'
import './CompatibleCardStyles.css'

const CompatibleGamesCard = () => {
    return (
        <div class="compatible-container d-flex justify-content-center">
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default CompatibleGamesCard
