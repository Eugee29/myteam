import { getStories } from '../services/helper.service'

import { ReactComponent as BgSvg1 } from '../assets/svg/bg-pattern-home-4-about-3.svg'
import { ReactComponent as BgSvg2 } from '../assets/svg/bg-pattern-home-5.svg'
import { ReactComponent as QuotesSvg } from '../assets/svg/icon-quotes.svg'

export const SuccessStories = () => {
  const stories = getStories()

  return (
    <section className="success-stories">
      <header className="success-stories-header">
        <h1 className="success-stories-title">
          Delivering real results for top companies. Some of our
          <span> success stories.</span>
        </h1>
      </header>
      <ul className="stories">
        {stories.map((story) => (
          <li className="story" key={story._id}>
            <QuotesSvg className="quotes" />
            {console.log(story.avatar)}
            <p className="story-text">{story.story}</p>
            <h2 className="author">{story.author}</h2>
            <div className="author-avatar-container">
              <img
                className="author-avatar"
                src={require(`../assets/img/${story._id}.jpg`)}
                alt={story.author}
              />
            </div>
          </li>
        ))}
      </ul>
      <BgSvg1 className="bg-svg-1" />
      <BgSvg2 className="bg-svg-2" />
    </section>
  )
}
