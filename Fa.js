import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import fontAwesome from '../../node_modules/font-awesome/css/font-awesome.css';


class Fa extends React.Component{

    getFontAwesomeIconClass(icon, fixed) {
        const iconClassString = classnames(fontAwesome.fa, fontAwesome[icon], { [fontAwesome['fa-fw']] : fixed }); 
        return iconClassString; 
    }

    render() { 
        const icon = this.getFontAwesomeIconClass(this.props.name, this.props.fixed);
        return ( 
            <i className={icon} aria-hidden="true"></i> 
        )
    }
}

Fa.propTypes = { 
    name: PropTypes.string.isRequired,
    fixed: PropTypes.bool
}

export default Fa;
        
