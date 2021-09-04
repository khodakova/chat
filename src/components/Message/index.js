import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from "classnames";

import tick from '../../assets/img/tick.svg';
import checkmark from '../../assets/img/checked.svg';
import './Message.scss';

const Message = ({avatar, user, text, date, isMe, isRead, attachments}) => {
  return (
    <div className={classNames('message', {'message__is_me': isMe})}>
      <div className='message__content'>

        <div className='message__avatar'>
          <img src={avatar} alt={` ${user.fullName}`}/>
        </div>
        <div className='message__info'>
          <div className='message__block'>
            {isMe ?
              <div className='message__checked-icon'>
                {!isRead ?
                  <img src={tick} alt='Unchecked message'/> :
                  <img src={checkmark} alt='Checked message'/>}
              </div> : null
            }
            <div className='message__block-content'>
              <div className='message__bubble'>
                <p className='message__text'>{text}</p>
              </div>
              <div className='message__attachments'>
                {attachments &&
                attachments.map(item => (
                  <div className='message__attachments-item'>
                    <img src={item.url} alt={item.filename}/>
                  </div>
                ))
                }
              </div>
            </div>

          </div>

            <span className='message__date'>
              {distanceInWordsToNow(new Date(date), {addSuffix: true, locale: ruLocale})}
            </span>
        </div>
      </div>
    </div>
  )
};

Message.defaultProps = {
  user: {}
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array
};

export default Message;
