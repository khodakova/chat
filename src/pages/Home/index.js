import React from 'react';
// import {Route} from 'react-router-dom';

import './Home.scss'
import {Message} from "../../components";

const Home = () => {
  return (
    <section className='home'>
      <div className='home__content'>

        <Message
          avatar='https://static.wikia.nocookie.net/shingekinokyojin/images/b/b1/Levi_Ackermann_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210215024934&path-prefix=ru'
          text='he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link'
          date='Wed Sep 01 2021 21:55:55'
          isMe={false}
          attachments={[
            {
              filename: 'atata.jpg',
              url: 'https://source.unsplash.com/random/100x100'
            },
            {
              filename: 'atata1.jpg',
              url: 'https://source.unsplash.com/random/100x100'
            },
            {
              filename: 'atata2.jpg',
              url: 'https://source.unsplash.com/random/100x100'
            }
          ]}
        />
        <Message
          avatar='https://static.wikia.nocookie.net/shingekinokyojin/images/b/b1/Levi_Ackermann_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210215024934&path-prefix=ru'
          text='yopta'
          date='Wed Sep 01 2021 21:59:55'
          isMe={true}
          isRead={true}
          attachments={[
            {
              filename: 'atata.jpg',
              url: 'https://source.unsplash.com/random/100x100'
            },
            {
              filename: 'atata1.jpg',
              url: 'https://source.unsplash.com/random/100x100'
            }
          ]}
        />
        <Message
          avatar='https://static.wikia.nocookie.net/shingekinokyojin/images/b/b1/Levi_Ackermann_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210215024934&path-prefix=ru'
          date='Wed Sep 01 2021 21:59:55'
          attachments={[
            {
              filename: 'atata.jpg',
              url: 'https://source.unsplash.com/random/100x100'
            }
          ]}
        />
        <Message
          avatar='https://static.wikia.nocookie.net/shingekinokyojin/images/b/b1/Levi_Ackermann_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210215024934&path-prefix=ru'
          isTyping={true}
        />
        <Message
          avatar='https://static.wikia.nocookie.net/shingekinokyojin/images/b/b1/Levi_Ackermann_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210215024934&path-prefix=ru'
          date='Wed Sep 01 2021 21:59:55'
          isMe={true}
          attachments={[
            {
              filename: 'atata.jpg',
              url: 'https://source.unsplash.com/random/100x100'
            }
          ]}
        />

      </div>
    </section>
  )
};

export default Home;
