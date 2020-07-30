import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({
  href, alt, className, children,
}) {
  return (
    <a href={href} alt={alt} className={className}>
      { children }
    </a>
  );
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonLink;
