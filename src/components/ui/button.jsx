
import PropTypes from 'prop-types';

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="px-4 py-2 bg-green-600 text-white rounded">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};