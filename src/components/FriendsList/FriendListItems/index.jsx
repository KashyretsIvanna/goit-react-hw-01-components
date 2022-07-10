import PropTypes from 'prop-types';
import styles from '../FriendListItems/index.module.css';

const FriendListItems = ({ friend }) => {
  return (
    <li className={styles.item}>
      <span className={styles.status}>
        <span className={friend.isOnline ? styles.red : styles.green}> kk</span>
      </span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

FriendListItems.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendListItems;
