import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Image, Card, Tag, Button } from 'antd';
import './moreDetails.scss'
 
import helpers from '../../assets/helpers';
const colorTypes = require('../../assets/types.json');

const MoreDetails = ({history}) => {
    const pokeCardData = useSelector(state => state.pokemons.pokemonCardInfo)
    let selectedPokemon = null
    const name = (history.location.pathname).substr(1)

    pokeCardData.forEach( item => {
        if(item.name == name) {
            selectedPokemon = item
        }
    });

    return (
        <React.Fragment>
            {selectedPokemon && 
                <Row gutter={[4,8]} className="poke-details-wrapper">
                <Col xs={24}>
                    <Image style={{ margin: 'auto' }} src={selectedPokemon.sprites.other['official-artwork'].front_default}/>
                </Col>
                <Col xs={24}>
                    <Row justify="space-around" align="middle">
                        <Col >
                            <span>{'#'+ helpers.lpad(selectedPokemon.id, 3) + ' ' + selectedPokemon.name}</span>
                            
                        </Col>
                        <Col >
                        {selectedPokemon.types.map( (item, index) => (
                            <Tag className="poke-tag" key={index} color={colorTypes[item.type.name].tag}>{item.type.name}</Tag>
                        ))}
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Card className="poke-card-more-details" 
                        bodyStyle={{background: 'url('+ colorTypes[selectedPokemon.types[0].type.name].background +')', backgroundSize: 'cover', borderRadius: '25px'}}>
                        <Row justify="space-around" align="middle" gutter={[8,8]}>
                            <Col span={12} >
                                <img 
                                    src={selectedPokemon.sprites.front_default}
                                    alt='charmandar'
                                />
                            </Col>
                            <Col span={12} >
                                <span>Ability: {selectedPokemon.abilities[0].ability.name}</span>
                            </Col>
                            <Col span={12} >
                                <span>Weight: {selectedPokemon.weight + ' g'}</span>
                            </Col>
                            <Col span={12} >
                                <span>Height: {selectedPokemon.height + ' dm'}</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            }
        </React.Fragment>
    );
}

export default MoreDetails;
    