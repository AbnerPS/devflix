import React, { Children } from 'react';

function ButtonLink(props) {
    return (
        <a href={props.href} alt={props.alt} className={props.className}>
            { props.children }
        </a>
    )
}

export default ButtonLink;