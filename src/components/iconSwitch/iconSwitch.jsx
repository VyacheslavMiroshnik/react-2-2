import PropTypes from 'prop-types';
export default function IconSwitch({ icon, onSwitchIcon }) {
  return (
    <div className='material-icons' onClick={() => onSwitchIcon(icon)}>
      {icon}
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitchIcon: PropTypes.func,
};
