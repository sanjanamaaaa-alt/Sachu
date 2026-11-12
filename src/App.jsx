
import { useEffect, useState } from 'react'
import './App.css'

const openingPhotos = [
  '/photos/photo%201.JPG',
  '/photos/photo%202.JPG',
  '/photos/photo%203.jpg',
  '/photos/photo%204.jpg',
  '/photos/photo%205.jpg',
  '/photos/photo%206.jpg',
  '/photos/photo%207.jpg',
  '/photos/photo%208.jpg',
  '/photos/photo%209.jpg',
  '/photos/photo%2010.jpg',
  '/photos/photo%2011.jpg',
  '/photos/photo%2012.PNG',
]
const chapters = [
  {
    number: '01',
    title: 'The Day Our Paths Crossed',
    date: '01 AUGUST 2022',
    story: 'My first day at The American College. I was a first-year student, and you were already in your third year. Same college, same department, the same corridor. Little did I know that someone walking past my classroom would become my favourite person.',
    question: 'When did we first meet?',
    options: ['1 August 2022', '12 November 2022'],
    answer: 0,
    success: 'Our story began before I even knew it. ❤️',
  },
  {
    number: '02',
    title: 'That First Little Conversation',
    date: '02 AUGUST 2022',
    story: 'Who knew one accidental “brother” could start a conversation? You got upset, I messaged you to apologise, and somehow that little Instagram conversation became the beginning of something beautiful.',
    question: 'Where did our first conversation happen?',
    options: ['Instagram', 'WhatsApp'],
    answer: 0,
    success: 'One little message changed so much. ❤️',
  },
  {
    number: '03',
    title: 'Something You Felt First',
    date: 'AUGUST 2022',
    story: 'You told me how you felt around the 5th or 6th of August. You were sure about your feelings, while I needed a little more time. Maybe our hearts were moving at different speeds, but we were slowly finding the same direction.',
    question: 'Who expressed their feelings first?',
    options: ['Me', 'You'],
    answer: 1,
    success: 'You were brave enough to say it first. ❤️',
  },
  {
    number: '04',
    title: 'The Girl Who Needed Hope',
    date: 'A LITTLE BEFORE US',
    story: 'I was not someone who easily believed in love anymore. Some experiences had made me lose that hope. But you slowly made me feel that maybe love could be kind, safe and real after all.',
    question: 'What did you slowly give me?',
    options: ['Hope', 'More doubts'],
    answer: 0,
    success: 'You helped me believe in love again. ❤️',
  },
  {
    number: '05',
    title: 'A Little Bracelet, A Big Memory',
    date: 'ONE SPECIAL BIRTHDAY',
    story: 'Our first birthday celebration together was mine. We cut a cake, and you gave me a silver bracelet. I may have lost that bracelet later, but the memory of that day is still with me.',
    question: 'What gift did you give me?',
    options: ['A silver bracelet', 'A watch'],
    answer: 0,
    success: 'Some gifts stay in the heart forever. ❤️',
  },
  {
    number: '06',
    title: 'Our First Selfie',
    date: 'AT YOUR HOME',
    story: 'A casual visit with friends, a terrace, and our first selfie together. It was such a simple moment, but now it is one of those little memories I never want to forget.',
    question: 'Where did we take our first selfie?',
    options: ['At the college', 'On your house terrace'],
    answer: 1,
    success: 'A simple picture, a precious memory. ❤️',
  },
  {
    number: '07',
    title: 'The Day I Said Yes',
    date: '12 NOVEMBER 2022',
    story: 'Our first movie together was Love Today. After the movie, we went for lunch at Vamsavalli. I wore a black kurti, you wore a black shirt. When I finally said “love you”, your reply was, “I already know this.” I still remember it.',
    question: 'Where did I accept your love?',
    options: ['Vamsavalli', 'Sundaram Park'],
    answer: 0,
    success: 'The day we became us. Happy anniversary, love! ❤️',
  },
  {
    number: '08',
    title: 'Just You And Me',
    date: 'OUR FIRST OUTING',
    story: 'Our first outing alone after becoming lovers was at Sundaram Park. I was nervous, a little shy, and even wore a mask. You took a photo of me. I did not know how to act, but I loved being there with you.',
    question: 'Where was our first outing alone?',
    options: ['Sundaram Park', 'The college canteen'],
    answer: 0,
    success: 'Nervous me, happy us. ❤️',
  },
  {
    number: '09',
    title: 'My Favourite Trouble Maker',
    date: 'ALL OUR LITTLE MOMENTS',
    story: 'We are not always a typical romantic couple. We tease, joke, pull each other’s legs and fight over silly things. You make everyone laugh, and somehow you always find a way to make me smile too.',
    question: 'What do we do a lot?',
    options: ['Only serious talks', 'Vambu and teasing'],
    answer: 1,
    success: 'I would not trade our little madness for anything. ❤️',
  },
  {
    number: '10',
    title: 'Even On Difficult Days',
    date: 'WE KEPT CHOOSING US',
    story: 'We have had our difficult days and our little fights. You have seen all sides of me and still made me feel accepted. You gave me confidence that whatever happens, we can face it together.',
    question: 'What did your words make me feel?',
    options: ['That we can face things together', 'That I am alone'],
    answer: 0,
    success: 'Thank you for choosing us, again and again. ❤️',
  },
  {
    number: '11',
    title: 'The Person I Am Proud Of',
    date: 'MY HARDWORKING BOY',
    story: 'One thing I am genuinely proud of is how hard you work and how you stand on your own feet. I see your efforts, your growth and the person you are becoming. I hope you never stop believing in yourself.',
    question: 'What makes me especially proud of you?',
    options: ['Your hard work and independence', 'Your movie collection'],
    answer: 0,
    success: 'I will always be cheering for you. ❤️',
  },
  {
    number: '12',
    title: 'Our Kind Of Forever',
    date: 'A LITTLE DREAM OF MINE',
    story: 'I dream of a happy, healthy life with you. Our own little room filled with memories, long talks before sleeping, big trips together, and a home full of laughter. I do not need a perfect life. I just want us to build it together.',
    question: 'What kind of life do I dream of?',
    options: ['A life together, full of little memories', 'A life without you'],
    answer: 0,
    success: 'My favourite future has you in it. ❤️',
  },
  {
    number: '13',
    title: 'Still My Favourite Person',
    date: '12 NOVEMBER 2026',
    story: 'Four years later, here we are. Still teasing, still laughing, still learning each other. Thank you for being my comfort, my happiness and my favourite person to annoy. I love the life we are slowly building. And I hope we get a lifetime of these little moments.',
    question: 'After all these years, who is still my favourite person?',
    options: ['You, obviously!', 'only you'],
    answer: [0, 1],
    success: 'Correct. It will always be you, Sachin. I love you! ❤️',
  },
]

const secretNotes = [
  {
    title: 'A little secret',
    message: 'You may not realise it, but you make my ordinary days feel special. I love having you in my life. ❤️',
  },
  {
    title: 'Open when you miss me',
    message: 'Imagine me sitting beside you, annoying you as usual. I wish I could be there right now. ❤️',
  },
  {
    title: 'One promise',
    message: 'Whatever life brings, I want us to keep understanding each other, laughing together and choosing each other.',
  },
  {
    title: 'My favourite dream',
    message: 'One day, our own little room, our memories, our long night talks and a lifetime of silly fights. Just us. ❤️',
  },
  {
    title: 'Just for you',
    message: 'Thank you for being you, Sachin. I love you more than I probably say.',
  },
  {
    title: 'A tiny reminder',
    message: 'You are loved, appreciated and always someone I am proud of. Never forget that.',
  },
]


export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [opened, setOpened] = useState(false)
  const [entered, setEntered] = useState(false)
  const [chapterIndex, setChapterIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [showSecrets, setShowSecrets] = useState(false)
  const [openSecret, setOpenSecret] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const [openingPhotoIndex, setOpeningPhotoIndex] = useState(0)
  const [previousOpeningPhotoIndex, setPreviousOpeningPhotoIndex] = useState(0)
  const [showGallery, setShowGallery] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => {
      setOpeningPhotoIndex((current) => {
        setPreviousOpeningPhotoIndex(current)
        return (current + 1) % openingPhotos.length
      })
    }, 4000)

    return () => clearInterval(timer)
  }, [])


  const chapter = chapters[chapterIndex]

  function chooseAnswer(index) {
    setSelected(index)
    setAnswered(true)
  }

  function nextChapter() {
    setChapterIndex((current) => current + 1)
    setSelected(null)
    setAnswered(false)
    setShowQuiz(false)
  }
  if (showGallery) {
    return (
      <main className="story-screen">
        <header className="story-header">
          <span>SANJANA <i>&</i> SACHIN</span>
          <span>OUR MEMORIES</span>
        </header>

        <div className="story-content">
          <p className="chapter-date">A COLLECTION OF US</p>
          <h1>Little moments, forever memories.</h1>
          <p className="chapter-story">
            Every picture has a story. Every moment has a place in my heart. ❤️
          </p>

          <div className="memory-gallery">
            <div className="gallery-grid">
              {openingPhotos.map((photo, index) => (
                <div className="gallery-photo" key={index}>
                  <img
                    src={photo}
                    alt={`Memory ${index + 1}`}
                  />
                  <small>MEMORY {String(index + 1).padStart(2, '0')}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="story-footer">
          <button onClick={() => setShowGallery(false)}>
            ← BACK TO OUR SURPRISES
          </button>
          <span>MADE WITH LOVE ♡</span>
        </footer>
      </main>
    )
  }
  if (showVideo) {
    return (
      <main className="story-screen">
        <header className="story-header">
          <span>SANJANA <i>&</i> SACHIN</span>
          <span>A LITTLE MOVIE OF US</span>
        </header>

        <div className="story-content video-section">
          <p className="chapter-date">12 NOVEMBER 2026</p>
          <h1>Our little world, in motion.</h1>
          <p className="chapter-story">
            Four years of memories, laughter and love.
            Here is a little movie made just for you. ❤️
          </p>

          <video controls playsInline preload="metadata" className="our-video">

            <source src="/video/116318-compressed.mp4" type="video/mp4" />

          </video>
        </div>

        <footer className="story-footer">
          <button onClick={() => setShowVideo(false)}>
            ← BACK TO OUR SURPRISES
          </button>
          <span>MADE WITH LOVE ♡</span>
        </footer>
      </main>
    )
  }
  if (showSecrets) {
    return (
      <main className="story-screen">
        <div className="story-content">
          <p className="chapter-date">A FEW LITTLE SURPRISES</p>
          <h1>Little things I want you to know</h1>
          <p className="chapter-story">
            I have hidden a few little notes for you.
            Open each envelope, one at a time. ❤️
          </p>

          <div className="secret-world">
            <div className="secret-envelopes">
              {secretNotes.map((note, index) => (
                <button
                  className="secret-envelope"
                  key={note.title}
                  onClick={() => setOpenSecret(index)}
                >
                  <span className="envelope-icon">✉</span>
                  <span>{note.title}</span>
                </button>
              ))}
            </div>

            {openSecret !== null && (
              <div className="secret-note">
                <p>{secretNotes[openSecret].message}</p>
                <button
                  className="continue-button"
                  onClick={() => setOpenSecret(null)}
                >
                  CLOSE NOTE
                </button>
              </div>
            )}
          </div>
          <button
            className="continue-button"
            onClick={() => setShowVideo(true)}
          >
            WATCH OUR VIDEO →
          </button>
          <button
            className="continue-button"
            onClick={() => setShowGallery(true)}
          >
            OUR MEMORIES →
          </button>
        </div>
        <button
          className="continue-button"
          onClick={() => {
            setShowSecrets(false)
            setOpenSecret(null)
          }}
        >
          ← BACK TO OUR STORY
        </button>
      </main>
    )
  }



  if (entered) {
    return (
      <main className="story-screen">
        <header className="story-header">
          <span>SANJANA <i>&</i> SACHIN</span>
          <span>OUR STORY · 2022 — 2026</span>
        </header>

        <div className="story-content" key={`${chapter.number}-${showQuiz}`}>
          {!showQuiz ? (
            <>
              <p className="chapter-date">{chapter.date}</p>
              <p className="chapter-number">CHAPTER {chapter.number} / 13</p>
              <h1>{chapter.title}</h1>
              <div className="chapter-divider"><span>✦</span></div>
              <p className="chapter-story">{chapter.story}</p>

              <div className="chapter-photo">
                <img
                  src={
                    chapterIndex === 11
                      ? '/photos/chapter12.png'
                      : `/photos/chapter${chapterIndex + 1}.jpg`
                  }
                  alt={`Chapter ${chapterIndex + 1}`}
                />
              </div>

              <button
                className="continue-button"
                onClick={() => setShowQuiz(true)}
              >
                NEXT →
              </button>
            </>
          ) : (
            <>
              <p className="chapter-date">CHAPTER {chapter.number} / 13</p>
              <p className="quiz-label">A LITTLE MEMORY CHECK</p>
              <h1>{chapter.question}</h1>

              <div className="quiz-options">
                {chapter.options.map((option, index) => (
                  <button
                    key={option}
                    className={`quiz-option ${selected === index
                      ? index === chapter.answer ? 'correct' : 'wrong'
                      : ''
                      }`}
                    disabled={answered}
                    onClick={() => chooseAnswer(index)}
                  >
                    <span>{index === 0 ? 'A' : 'B'}</span>
                    {option}
                  </button>
                ))}
              </div>

              {answered && (
                <div className="quiz-feedback">
                  {(Array.isArray(chapter.answer)
                    ? chapter.answer.includes(selected)
                    : selected === chapter.answer) ? (
                    <>
                      <p>{chapter.success}</p>
                      <button
                        className="continue-button"
                        onClick={() => {
                          if (chapterIndex === chapters.length - 1) {
                            setShowSecrets(true)
                          } else {
                            nextChapter()
                          }
                        }}
                      >
                        {chapterIndex === chapters.length - 1
                          ? 'FINISH OUR STORY'
                          : 'CONTINUE →'}
                      </button>
                    </>
                  ) : (
                    <>
                      <p>Oops! Not quite, try again. 😊</p>
                      <button
                        className="continue-button"
                        onClick={() => {
                          setSelected(null)
                          setAnswered(false)
                        }}
                      >
                        TRY AGAIN
                      </button>
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        <footer className="story-footer">
          <button
            disabled={chapterIndex === 0 && !showQuiz}
            onClick={() => {
              if (showQuiz) {
                setShowQuiz(false)
                setSelected(null)
                setAnswered(false)
              } else if (chapterIndex > 0) {
                setChapterIndex((current) => current - 1)
                setShowQuiz(false)
                setSelected(null)
                setAnswered(false)
              }
            }}
          >
            ← PREVIOUS
          </button>
          <span>{chapterIndex + 1} / 13</span>
          <span>MADE WITH LOVE ♡</span>

          <button
            className="floating-secret"
            title="A little secret for you"
            onClick={() => {
              setOpenSecret(Math.floor(Math.random() * secretNotes.length))
              setShowSecrets(true)
            }}
          >
            ✉
          </button>
        </footer>
      </main>
    )
  }


  return (
    <main className="opening-screen">
      <div className="stars" />
      <div
        key={`old-${openingPhotoIndex}`}
        className="opening-slideshow slideshow-previous"
        style={{
          backgroundImage: `url("${openingPhotos[previousOpeningPhotoIndex]}")`,
        }}
      />

      <div
        key={`new-${openingPhotoIndex}`}
        className="opening-slideshow slideshow-next"
        style={{
          backgroundImage: `url("${openingPhotos[openingPhotoIndex]}")`,
        }}
      />
      <div className="opening-content">
        <p className="eyebrow">A LITTLE SOMETHING FOR YOU</p>
        <div className={`envelope-area ${opened ? 'is-open' : ''}`}>
          <button className="envelope" onClick={() => setOpened(true)} aria-label="Open envelope">
            <span className="envelope-back" />
            <span className="envelope-letter">
              <span>For my favourite person</span>
              <strong>❤️</strong>
            </span>
            <span className="envelope-front" />
            <span className="envelope-flap" />
            <span className="envelope-seal">S</span>
          </button>
        </div>
        {!opened ? (
          <>
            <h1>Something is waiting for you.</h1>
            <p className="instruction">A little surprise, made with all my love.</p>
            <button className="text-button" onClick={() => setOpened(true)}>
              TAP TO OPEN <span>↗</span>
            </button>
          </>
        ) : (
          <div className="reveal-message">
            <h1>Some stories are too special to fit in words.</h1>
            <p>And ours is my favourite one.</p>
            <button className="enter-button" onClick={() => setEntered(true)}>
              OPEN YOUR SURPRISE <span>→</span>
            </button>
          </div>
        )}
        <div className="anniversary-date">12 . 11 . 2022</div>
      </div>
      <div className="bottom-caption">MADE WITH LOVE, JUST FOR YOU</div>
    </main>
  )
}
