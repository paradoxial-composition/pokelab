import React from 'react';
import './pokeDisplay.scss'
import {Row, Col} from 'antd';
import { useSelector } from 'react-redux';
import PokeCard from '../PokeCard';

const PokeDisplay = ({pokeCardData, loading}) => {

    return (
        <Row justify="space-around" align="middle" gutter={[4,48]} >
            {pokeCardData.map( (item, index) => (
            <Col key={index} className="gutter-row" xs={24} md={12} lg={8}>
                <PokeCard  pokeInfo={item} loading={loading}/>
            </Col>
            ))}
        </Row>	
    );
}

export default PokeDisplay;
    