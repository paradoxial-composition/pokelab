import React from 'react';
import './moreDetails.scss'

import { useSelector } from 'react-redux';

const MoreDetails = () => {
    const selectedPokemon = useSelector(state => state.pokemons.selectedPokemon)
    console.log(selectedPokemon)
    return (
        <Row justify="space-around" align="middle">
            <Col>
            </Col>
        </Row>
    );
}

export default MoreDetails;
    