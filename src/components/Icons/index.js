import React from 'react';

import PropTypes from 'prop-types'

const propTypes = {
    data: PropTypes.string(),
    size: PropTypes.oneOf([
        PropTypes.string(),
        PropTypes.number()
    ]),
    fillShade: PropTypes.string(),
    fillColor: PropTypes.string()
}

function Icon(props) {
    return (
        <svg width={props.size}>
            <path d={props.data}/> 
        </svg>
    )
}

Icon.propTypes = propTypes

export default Icon
