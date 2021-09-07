import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from "classnames";

import tick from '../../assets/img/tick.svg';
import checkmark from '../../assets/img/checked.svg';
import './Message.scss';

const Message = ({avatar, user, text, date, isMe, isRead, attachments, isTyping}) => {
  return (
    <div className={classNames(
      'message',
      {
        'message__is_me': isMe,
        'message__is_typing': isTyping,
        'message__attachments-image': attachments && attachments.length === 1
      }
    )}
    >
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
              {(text || isTyping) && (
                <div className={classNames('message__bubble', {'message__bubble_is-typing': isTyping})}>
                  {text &&
                    (<p className='message__text'>{text}</p>)
                  }
                  {isTyping &&
                  (<div className="typing_indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>)
                  }
                </div>
              )}
              <div className='message__attachments'>
                {attachments &&
                attachments.map(item => (
                  <div className='message__attachments-item' key={`${item.url}_${item.filename}`}>
                    <img src={item.url} alt={item.filename}/>
                  </div>
                ))
                }
              </div>
            </div>

          </div>
          {date && (
            <span className='message__date'>
              {distanceInWordsToNow(new Date(date), {addSuffix: true, locale: ruLocale})}
            </span>
          )}
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
  attachments: PropTypes.array,
  isTyping: PropTypes.bool
};

export default Message;
