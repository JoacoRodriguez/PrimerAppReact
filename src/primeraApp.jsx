import PropTypes from 'prop-types';

export const MiNombre = ( {title}) =>{


    return(
        <>
            <h1> {title} </h1>
            <p>fragmento</p>
        </>
    )
}

MiNombre.propTypes = {
    title: PropTypes.string.isRequired
}

