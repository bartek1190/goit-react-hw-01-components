import css from './friends.module.css';
import propTypes from 'prop-types';
import clsx from 'clsx';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friendContainer}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={css.item}>
            <span
              className={clsx(css.status, {
                [css.true]: friend.isOnline,
                [css.false]: !friend.isOnline,
              })}
            ></span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: propTypes.array.isRequired,
};
