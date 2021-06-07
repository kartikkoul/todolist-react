import React from 'react';
import './Title.css';
import titleLeftImage from '../assets/List.png';
import titleRightImage from '../assets/to-do-list.png'

import Container from 'react-bootstrap/Container';

const Title = (props) => {
    return (
        <Container>
            <div className='titleArea container'>
                <img src={titleLeftImage} className='titleLeftImage' />
                <h1>{props.title}</h1>
                <img src={titleRightImage} className='titleRightImage' />
            </div>
        </Container>
    )
}

export default Title
