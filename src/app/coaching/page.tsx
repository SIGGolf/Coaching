'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import { Facebook, Instagram, MessageCircle, CheckCircle, AlertCircle, Target, Lightbulb, BookOpen, Zap } from 'lucide-react';
import { getProfileByCode, PersonaProfile, personaProfiles } from '@/lib/persona-profiles';

const testimonials = [
  {
    text: "I used to fall apart on the back nine when I had a good score going. Lincoln helped me understand that my brain was hijacking my swing. Now I have routines that keep me steady when the pressure's on. Shot my best round ever last month—68 with people watching.",
    author: "Andy L., 43, 4.6 handicap",
    rating: 5
  },
  {
    text: "The mental side was always my weakness. I'd hit it pure on the range then spray it everywhere in competition. Lincoln showed me how to train my focus like I was training my swing. The difference in my tournament play has been massive.",
    author: "Ben C., 36, 5 handicap",
    rating: 5
  },
  {
    text: "What clicked for me was when Lincoln explained how my military background was actually working against me on the course—too much tension, too much control. He taught me to harness that discipline without strangling my swing. I'm playing the best golf of my life.",
    author: "Matt J., 40, 8 handicap",
    rating: 5
  },
  {
    text: "I've always been a head case under pressure. Lincoln didn't just tell me to relax—he gave me actual tools to manage my nerves. The biometric feedback showed me exactly when I was getting tight. Now I catch it before it ruins my round.",
    author: "Tom P., 28, 3.9 handicap",
    rating: 5
  },
  {
    text: "I was stuck in this loop of overthinking every shot. Lincoln helped me build a pre-shot routine that actually works when my heart's pounding. It's like having a mental reset button. My bad rounds aren't disasters anymore.",
    author: "Chris D., 34, 6 handicap",
    rating: 5
  },
  {
    text: "The breakthrough came when Lincoln helped me see that my ADHD wasn't a handicap—it was an advantage if I channeled it right. He taught me to use my rapid-fire thinking to read the course better. I'm seeing shots I never saw before.",
    author: "Richard W., 45, 2 handicap",
    rating: 5
  },
  {
    text: "I thought I just needed to fix my swing. Turns out my swing was fine—it was the war going on in my head that was the problem. Lincoln helped me quiet the noise and trust what I'd trained. My confidence has never been higher.",
    author: "James K., 31, 7 handicap",
    rating: 5
  },
  {
    text: "After struggling with depression, golf was one of the few things that brought me joy. But then the pressure to perform started killing that joy. Lincoln helped me remember why I love this game while still competing at a high level. Game-changer.",
    author: "Ollie F., 26, 1 handicap",
    rating: 5
  },
  {
    text: "I'm a perfectionist which was destroying my course management. Lincoln taught me that sometimes good enough is perfect. My decision-making has improved massively and I'm taking way fewer big numbers.",
    author: "Dan H., 38, 3.2 handicap",
    rating: 5
  },
  {
    text: "I've been playing off single figures for years but always felt like I was fighting myself out there. Lincoln showed me how to get out of my own way. The game feels easier now, more natural. I'm actually enjoying pressure situations.",
    author: "Steve M., 47, 9 handicap",
    rating: 5
  },
];

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const total = testimonials.length;

  useEffect(() => {
    function updateVisibleCount() {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(1);
      }
    }
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Looping logic
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  // Get visible testimonials
  const getVisible = () => {
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(testimonials[(index + i) % total]);
    }
    return arr;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <button onClick={prev} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-lime-600/80 text-lime-200 p-2 rounded-full shadow-lg transition-all">
        <span className="sr-only">Previous</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}>
        {getVisible().map((t, i) => (
          <div key={i} className="flex-shrink-0 w-full lg:w-1/3 px-2">
            <div className="bg-black/80 border border-lime-600/30 rounded-2xl p-6 shadow-2xl text-center mx-2 min-h-[200px] flex flex-col justify-between">
              {/* Star Rating */}
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={`w-5 h-5 ${
                      starIndex < (t.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-100 mb-4">"{t.text}"</p>
              <span className="block font-bold text-lime-200">{t.author}</span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={next} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-lime-600/80 text-lime-200 p-2 rounded-full shadow-lg transition-all">
        <span className="sr-only">Next</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}

export default function CoachingPage() {
  // --- Player Insight Profile Survey Logic ---

  const [showResult, setShowResult] = useState(false);
  const [resultCode, setResultCode] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [expandedLessons, setExpandedLessons] = useState<number[]>([]);
  const [showPsychTest, setShowPsychTest] = useState(false);

  // Lesson data
  const lessons = [
    {
      id: 0,
      title: "Performance Evaluation & Player Assessment",
      price: "£95",
      duration: "(90 mins, in person or virtual)",
      features: [
        "Mental routines and stress response",
        "Swing patterns via video & stats",
        "Mobility and physical readiness (TPI screen)",
        "Practice habits and playing strategy"
      ],
      outcome: "A full player development report and training plan tailored to your goals."
    },
    {
      id: 1,
      title: "Performance Session (Mind + Mechanics)",
      price: "£80",
      duration: "(60 mins)",
      features: [
        "Targeted technical drills",
        "Decision-making under pressure",
        "Pre- and post-shot mental routines",
        "Biometric or video feedback as needed"
      ],
      outcome: "Best For: Players seeking continuous, structured improvement with accountability."
    },
    {
      id: 2,
      title: "On-Course Tactical Session",
      price: "£150 / £225",
      duration: "(9 holes) / (18 holes)",
      features: [
        "Course management and shot selection",
        "Competitive mindset development",
        "Between-shot recovery routines",
        "Playing with discipline under pressure"
      ],
      outcome: "Sharper strategy, better scoring decisions, improved emotional control."
    },
    {
      id: 3,
      title: "Mental Performance Programme (4-Week Block)",
      price: "£280",
      duration: "(4 x 60 mins + resources)",
      features: [
        "Stress inoculation techniques",
        "Focus training, breathing, recovery",
        "Cognitive resilience frameworks (military & sport)",
        "Custom pre-round mental plans"
      ],
      outcome: "Includes: Session summaries, guided practice tasks, and WhatsApp support between sessions."
    },
    {
      id: 4,
      title: "Swing & Biomechanics Package",
      price: "£240",
      duration: "(3 x 60 mins)",
      features: [
        "High-speed video, biomechanics screening, and technical work",
        "Force generation, sequencing, posture",
        "Mobility restrictions linked to swing flaws",
        "Swing speed and efficiency training"
      ],
      outcome: "Best For: Serious players stuck in mechanical patterns or rebuilding with intent."
    },
    {
      id: 5,
      title: "Golf Fitness Programme (6 Weeks)",
      price: "£275",
      duration: "(Initial screen + 5 x sessions)",
      features: [
        "TPI-based mobility and strength training",
        "Golf-specific conditioning and injury prevention",
        "Functional training aligned with swing goals",
        "Optional integration with your coach/PT"
      ],
      outcome: "Includes: Access to training plans and recorded mobility drills."
    },
    {
      id: 6,
      title: "Competition Caddying & Mental Support",
      price: "From £180 / £300",
      duration: "(9 holes) / (18 holes) + expenses",
      features: [
        "Pre-round briefing & planning",
        "Shot-by-shot coaching on focus, commitment, and tempo",
        "Performance review post-round"
      ],
      outcome: "Best For: Players under pressure—county, scratch team, amateur tour, or qualifiers."
    },
    {
      id: 7,
      title: "Full Season Coaching Plan",
      price: "£1,200 / £4,000",
      duration: "(3-month plan) / (year plan)",
      features: [
        "Fortnightly coaching sessions",
        "Mental performance integration",
        "Physical training + progress tracking",
        "Tournament support + WhatsApp access"
      ],
      outcome: "Includes: Performance reviews, match play analysis, and flexible scheduling."
    }
  ];

  const toggleLesson = (lessonId: number) => {
    setExpandedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  // Add the full manual/tutorial as a string (for brevity, use a placeholder here)
  const fullManual = `
# The Substantia Intelligence™ Player Insight System
## Official Tutorial for Players and Coaches

---

### Introduction: Beyond Mechanics

Welcome to Substantia Intelligence™, a groundbreaking assessment system designed to decode the most important-yet-overlooked aspect of performance: your golfing mind.

... (rest of your manual here) ...
`;



  // Get detailed profile explanation using the new data structure
  function getProfileExplanation(code: string) {
    const profile = getProfileByCode(code);
    
    if (!profile) {
      return {
        title: 'Your Unique Profile',
        description: 'Your combination of traits creates a unique playing style that we\'ll explore together.',
        strengths: ['Individual analysis required'],
        challenges: ['Individual analysis required'],
        coachingFocus: ['Individual analysis required']
      };
    }

    return {
      title: profile.title,
      description: profile.description,
      strengths: profile.strengths,
      challenges: profile.development_areas,
      coachingFocus: profile.coaching_recommendations
    };
  }



  const sendResults = async (userEmail: string, profile: { code: string; breakdown: string[] }) => {
    // Get the full profile data
    const fullProfile = getProfileByCode(profile.code);
    
    const emailData = {
      to: userEmail,
      subject: 'Your Substantia Intelligence Profile Results',
      profileCode: profile.code,
      profileTitle: fullProfile?.title || 'Unknown Profile',
      profileDescription: fullProfile?.description || '',
      strengths: fullProfile?.strengths || [],
      developmentAreas: fullProfile?.development_areas || [],
      coachingRecommendations: fullProfile?.coaching_recommendations || [],
      practiceFocus: fullProfile?.practice_focus || '',
      competitiveStrategy: fullProfile?.competitive_strategy || '',
      timestamp: new Date().toISOString()
    };
    
    // Send to Lincoln (you can replace this with your actual email)
    const lincolnEmail = 'lincoln@substantia-intelligence.com'; // Replace with actual email
    
    console.log('Sending results to user:', emailData);
    console.log('Sending results to Lincoln:', {
      to: lincolnEmail,
      subject: `New Profile Submission - ${profile.code} (${fullProfile?.title})`,
      userEmail: userEmail,
      profileCode: profile.code,
      profileTitle: fullProfile?.title,
      profileDescription: fullProfile?.description,
      strengths: fullProfile?.strengths,
      developmentAreas: fullProfile?.development_areas,
      coachingRecommendations: fullProfile?.coaching_recommendations,
      practiceFocus: fullProfile?.practice_focus,
      competitiveStrategy: fullProfile?.competitive_strategy,
      timestamp: new Date().toISOString()
    });
    
    // TODO: Integrate with your email service (SendGrid, Mailgun, etc.)
    // Example with a hypothetical email service:
    // await emailService.send({
    //   to: [userEmail, lincolnEmail],
    //   subject: 'Your Substantia Intelligence Profile Results',
    //   html: generateEmailTemplate(emailData)
    // });
  };

  // Questions and answers data
  const playerQuestions = useMemo(() => [
    {
      text: 'First-tee routine',
      options: [
        'Walk in and swing before nerves appear',
        'Picture the shot then breathe and go',
        'Check wind and yardage book before deciding',
        'Pace a few steps to channel energy',
        'Pause behind the ball to settle heart-rate',
      ],
    },
    {
      text: 'Reachable par-5 strategy',
      options: [
        'Lay up unless all numbers suit',
        'Fire at the green every time',
        'Go for it when lie and wind invite',
        'Lay up for guaranteed wedge yardage',
        'Decide on gut feel the moment you arrive',
      ],
    },
    {
      text: 'Ten-minute wait on a tee',
      options: [
        'Sit, conserve energy, and chat',
        'Rehearse swings to stay loose',
        'Breathe and reset patiently',
        'Hit a few chips to stay engaged',
        'Walk about visualising the next shot',
      ],
    },
    {
      text: 'Club selection trigger',
      options: [
        'Purely on carry numbers and launch data',
        'Gut feel from current strike quality',
        'Combination of book figures and feel',
        'Glance at wind then trust the eye',
        'Check historical notes before deciding',
      ],
    },
    {
      text: 'Post-round review focus',
      options: [
        'Moments the round turned',
        'Full strokes-gained and stat sheet',
        'Pure strikes and flow states',
        'Pattern of misses hole-by-hole',
        'General vibe and confidence level',
      ],
    },
    {
      text: 'Yardage chart style',
      options: [
        'Digital sheet with every carry and spin',
        'Rough guide you adjust on the fly',
        'Updated notebook with trends',
        'Mental map based on experience',
        'Phone app plus margin notes',
      ],
    },
    {
      text: 'Attention during swing',
      options: [
        'Target and ball flight only',
        'Key body position at transition',
        'Sound of strike and feel',
        'Clubface alignment cue',
        'Whole shot picture then blank mind',
      ],
    },
    {
      text: 'Loud buggy mid-swing',
      options: [
        'Hardly notice and finish',
        'Stop, reset, and start again',
        'Notice then narrow focus harder',
        'Shrug and adapt tempo',
        'Treat as test of routine discipline',
      ],
    },
    {
      text: 'Nerves under pressure',
      options: [
        'Focus on breathing rhythm',
        'Repeat mechanical checkpoints',
        'Visualise perfect outcome',
        'Lock on to tiny target',
        'Recall a past clutch shot',
      ],
    },
    {
      text: 'Typical range session',
      options: [
        'Pre-planned blocks with rest and metrics',
        'Free flow until strike feels pure',
        'Mix of specific drills and fun shots',
        'Random pressure games to simulate play',
        'Short sharp burst then putting green',
      ],
    },
    {
      text: 'Feedback you trust most',
      options: [
        'Launch monitor numbers',
        'Ball flight to target',
        'Coach video breakdown',
        'Pure contact sound',
        'Stats after a scoring session',
      ],
    },
    {
      text: 'Coach gives a new drill',
      options: [
        'Log it and set rep targets',
        'Try, tweak, keep only if flight improves',
        'Fold into next session plan',
        'Play with it until it feels natural',
        'Ask for the "why" before starting',
      ],
    },
  ], []);



  // Add answer values for scoring (order matches options in playerQuestions)
  const answerValues = [
    // Q1-3: Competitive Tempo (C/D)
    [-2, 1, 0, 2, -1], // Q1
    [-2, 2, 1, -1, 0], // Q2
    [-2, 2, -1, 1, 0], // Q3
    // Q4-6: Decision Bias (A/I)
    [-2, 2, 1, 0, -1], // Q4
    [2, -2, 1, -1, 0], // Q5
    [-2, 2, -1, 1, 0], // Q6
    // Q7-9: Focus Style (S/E)
    [2, -2, 1, -1, 0], // Q7
    [2, -2, 1, 0, -1], // Q8
    [-2, -1, 2, 1, 0], // Q9
    // Q10-12: Practice Driver (P/R)
    [-2, 2, 1, 0, -1], // Q10
    [-2, 2, 1, 0, -1], // Q11
    [-2, 2, 1, 0, -1], // Q12
  ];

  function calculateProfileCode(selected: number[]) {
    // Each dimension: 3 questions
    const dimensions = [
      { letters: ['C', 'D'], idx: [0, 1, 2] },
      { letters: ['A', 'I'], idx: [3, 4, 5] },
      { letters: ['S', 'E'], idx: [6, 7, 8] },
      { letters: ['P', 'R'], idx: [9, 10, 11] },
    ];
    let code = '';
    for (const dim of dimensions) {
      let sum = 0;
      for (let i = 0; i < 3; i++) {
        const qIdx = dim.idx[i];
        const optIdx = selected[qIdx];
        sum += answerValues[qIdx][optIdx];
      }
      code += sum > 0 ? dim.letters[1] : dim.letters[0];
    }
    // Add hyphens to match the JSON format (C-A-S-P instead of CASP)
    const formattedCode = code.split('').join('-');
    return formattedCode;
  }

  // Use the original questions in consistent order - no randomization
  const questions = playerQuestions;

  // State for selected answers
  const [selectedOptions, setSelectedOptions] = useState(Array(playerQuestions.length).fill(null));

  return (
    <div data-page="coaching">
      <Navigation />
      <main className="min-h-screen bg-cover bg-center text-gray-100 relative pt-16" style={{ backgroundImage: 'url(/golf-bg-2.jpg)' }}>

      {/* Hero Section with Golf Background */}
      <section className="relative py-16 px-4 text-center border-b border-green-500/20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/golf-bg-2.jpg"
            alt="Golf background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.5) blur(1px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-green-900/60 to-lime-900/70" />
        </div>
        {/* Content */}
        <div className="relative z-50">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-lime-200">Unlock Lasting Performance By Training Your Mind First</h1>
          <p className="text-lg md:text-2xl mb-8 text-lime-100 drop-shadow-lg">
            Substantia Golf blends elite mental coaching, sports science, and structured technical development to help serious players perform under pressure, think sharper, and score lower on and off the course.
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform mb-8">Book Your Session</a>
          {/* Feature Circles Row (moved from below) */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-items-center mt-10">
            {/* Mindset First */}
            <div className="group relative flex flex-col items-center overflow-visible">
              <div className="rounded-full w-48 h-48 p-0 border-4 border-lime-400 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(/Mindset_First.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all rounded-full" style={{ boxShadow: 'none' }} />
                <h3 className="relative z-10 text-xl font-bold text-lime-200 text-center">Mindset First</h3>
              </div>
              <div className="absolute left-1/2 top-0 z-[2147483647] -translate-x-1/2 -translate-y-full mt-2 w-72 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 flex justify-center">
                <div className="bg-black/95 border border-lime-600/40 text-lime-100 text-sm rounded-xl p-4 shadow-2xl w-full text-center">
                  We start where most coaches finish: inside the mind. Drawing on military performance psychology, golf's top mental coaches, and behavioural science, we build the mental strength needed to perform consistently under pressure.
                </div>
              </div>
            </div>
            {/* Elite Frameworks */}
            <div className="group relative flex flex-col items-center overflow-visible">
              <div className="rounded-full w-48 h-48 p-0 border-4 border-lime-400 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(/Elite_Frameworks.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all rounded-full" style={{ boxShadow: 'none' }} />
                <h3 className="relative z-10 text-xl font-bold text-lime-200 text-center">Elite Frameworks</h3>
              </div>
              <div className="absolute left-1/2 top-0 z-[2147483647] -translate-x-1/2 -translate-y-full mt-2 w-72 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 flex justify-center">
                <div className="bg-black/95 border border-lime-600/40 text-lime-100 text-sm rounded-xl p-4 shadow-2xl w-full text-center">
                  Our coaching integrates insights from Dr Bob Rotella, Dr Raymond Prior, Karl Morris, Dr Michael Gervais, and military-grade resilience techniques. You benefit from proven frameworks used by world-class athletes, special forces, and peak performers.
                </div>
              </div>
            </div>
            {/* Structured, Personalised Development */}
            <div className="group relative flex flex-col items-center overflow-visible">
              <div className="rounded-full w-48 h-48 p-0 border-4 border-lime-400 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(/Personalised_Development.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all rounded-full" style={{ boxShadow: 'none' }} />
                <h3 className="relative z-10 text-xl font-bold text-lime-200 text-center">Structured, Personalised Development</h3>
              </div>
              <div className="absolute left-1/2 top-0 z-[2147483647] -translate-x-1/2 -translate-y-full mt-2 w-72 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 flex justify-center">
                <div className="bg-black/95 border border-lime-600/40 text-lime-100 text-sm rounded-xl p-4 shadow-2xl w-full text-center">
                  No guesswork. Every session is planned with a clear focus, tailored to your goals, and supported by video analysis, biometric insight, and post-session feedback.
                </div>
              </div>
            </div>
            {/* Technical Meets Mental */}
            <div className="group relative flex flex-col items-center overflow-visible">
              <div className="rounded-full w-48 h-48 p-0 border-4 border-lime-400 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(/Technical_Meets_Mental.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all rounded-full" style={{ boxShadow: 'none' }} />
                <h3 className="relative z-10 text-xl font-bold text-lime-200 text-center">Technical Meets Mental</h3>
              </div>
              <div className="absolute left-1/2 top-0 z-[2147483647] -translate-x-1/2 -translate-y-full mt-2 w-72 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 flex justify-center">
                <div className="bg-black/95 border border-lime-600/40 text-lime-100 text-sm rounded-xl p-4 shadow-2xl w-full text-center">
                  We bridge the gap between swing mechanics and mental performance. You'll improve both the feel and the function of your game—learning to train smarter, compete harder, and recover faster.
                </div>
              </div>
            </div>
            {/* Trusted by Serious Players */}
            <div className="group relative flex flex-col items-center overflow-visible">
              <div className="rounded-full w-48 h-48 p-0 border-4 border-lime-400 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(/Serious_Players.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all rounded-full" style={{ boxShadow: 'none' }} />
                <h3 className="relative z-10 text-xl font-bold text-lime-200 text-center">Trusted by Serious Players</h3>
              </div>
              <div className="absolute left-1/2 top-0 z-[2147483647] -translate-x-1/2 -translate-y-full mt-2 w-72 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 flex justify-center">
                <div className="bg-black/95 border border-lime-600/40 text-lime-100 text-sm rounded-xl p-4 shadow-2xl w-full text-center">
                  Substantia Golf works almost exclusively with committed amateur golfers, single-figure handicappers, and those striving for competitive edge. If you want to train with clarity, purpose, and honesty, we're here to help.
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg md:text-2xl text-lime-200/80 mt-8 drop-shadow-lg">Based in the UK. Available nationally and internationally for serious players.</p>
        </div>
      </section>

      {/* Psych Test CTA Button */}
      <section className="py-8 px-4 text-center bg-black/40 backdrop-blur-md border-b border-green-500/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-lime-200">Discover Your Golf Personality</h2>
          <p className="text-lg text-lime-100 mb-6">
            Take our scientifically-designed personality assessment to understand your mental game strengths and unlock personalized coaching insights.
          </p>
          <button 
            onClick={() => {
              setShowPsychTest(true);
              // Scroll to the psych test section after a brief delay to ensure it's rendered
              setTimeout(() => {
                document.getElementById('psych-test')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }, 100);
            }}
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform text-lg"
          >
            Take the SIG Golf Personality Test Now
          </button>
        </div>
      </section>

      {/* Move the bio card section (Passionate About Helping Golfers Succeed, badges, Lincoln's bio, etc.) to directly after the hero section */}
      {/* Certifications/Expertise */}
      <section className="relative z-10 max-w-2xl mx-auto mt-16 bg-black/80 border border-lime-600/30 rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-6">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-lime-300 mb-2 text-center">Passionate About Helping Golfers Succeed</h2>
        {/* Badges */}
        <div className="grid grid-cols-2 gap-3 mb-2 w-full max-w-md">
          <a href="https://www.mytpi.com/certification" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center bg-white rounded-md border border-lime-400 p-2 shadow hover:scale-105 transition-transform">
            <img src="/TPI.png" alt="Titleist Performance" className="h-10 w-auto mb-1" />
            <span className="text-xs font-semibold text-lime-900 text-center">Titleist Performance</span>
          </a>
          <a href="https://www.staffs.ac.uk/course/sport-and-exercise-psychology-bsc-hons" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center bg-white rounded-md border border-lime-400 p-2 shadow hover:scale-105 transition-transform">
            <img src="/WGTF.png" alt="WGTF" className="h-10 w-auto mb-1" />
            <span className="text-xs font-semibold text-lime-900 text-center">WGTF</span>
          </a>
          <span className="inline-flex flex-col items-center bg-white rounded-md border border-lime-400 p-2 shadow">
            <img src="/Stafford.png" alt="Sport & Exercise Psychology" className="h-10 w-auto mb-1" />
            <span className="text-xs font-semibold text-lime-900 text-center">Sport & Exercise Psychology</span>
          </span>
          <a href="https://www.caddy.com/" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center bg-green-900 rounded-md border border-lime-400 p-2 shadow hover:scale-105 transition-transform">
            <img src="/Caddy.png" alt="Caddy" className="h-10 w-auto mb-1" />
            <span className="text-xs font-semibold text-white">Caddy</span>
          </a>
        </div>
        {/* Bio Pic */}
        <img src="/Lincoln_Bio_Pic.png" alt="Lincoln Bio" className="h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full border-4 border-lime-400 shadow-2xl object-cover mb-2 bg-gray-900" />
        {/* Social Links */}
        <div className="flex gap-3 mt-2 mb-2 justify-center">
          <a href="https://www.facebook.com/lincoln.stephens.9" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-2 shadow-md transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://www.instagram.com/lincolnstephensgolf/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white rounded-full p-2 shadow-md transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
          </a>
          <a href="https://wa.me/447789123456" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 shadow-md transition-colors" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/></svg>
          </a>
        </div>
        
        {/* Tabs */}
        <div className="w-full max-w-2xl">
          <div className="flex border-b border-lime-600/30 mb-6">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 py-3 px-4 text-center font-semibold transition-colors ${
                activeTab === 'about'
                  ? 'text-lime-300 border-b-2 border-lime-400'
                  : 'text-gray-400 hover:text-lime-200'
              }`}
            >
              About Lincoln 'Bendy' Stephens
            </button>
            <button
              onClick={() => setActiveTab('statement')}
              className={`flex-1 py-3 px-4 text-center font-semibold transition-colors ${
                activeTab === 'statement'
                  ? 'text-lime-300 border-b-2 border-lime-400'
                  : 'text-gray-400 hover:text-lime-200'
              }`}
            >
              Personal Statement
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="min-h-[200px]">
            {activeTab === 'about' && (
              <div className="text-gray-100 text-base md:text-lg text-left max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-lime-300 mb-4 text-center">About Bendy</h3>
                
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  Lincoln "Bendy" Stephens discovered his calling through his own mental battlefield. After serving in the military and navigating the challenges of PTSD and neurodivergence, he found that golf became more than a game—it became his laboratory for understanding how the mind works under pressure.
                </p>
                
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  What started as personal healing evolved into a mission to help other golfers break through their mental barriers. Lincoln combines his military background with deep study of sports psychology, drawing from proven frameworks by Dr. Bob Rotella, Dr. Raymond Prior, and Karl Morris. His neurodivergent perspective allows him to spot cognitive patterns that others miss, making him uniquely skilled at decoding how each player's mind operates in high-pressure situations.
                </p>
                
                <h4 className="text-lg font-bold text-lime-200 mb-3">His Approach</h4>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  Lincoln's coaching philosophy centers on building what he calls "mental armor"—the psychological resilience that allows players to perform their best when it matters most. He integrates traditional technical coaching with military stress inoculation techniques, applied sports psychology, and biometric feedback to create a comprehensive training system.
                </p>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  His method isn't about positive thinking or quick fixes. It's about rewiring the brain's response to pressure through structured, practical work that creates lasting change. Players learn to transform mental noise into focused energy, turning their biggest psychological challenges into competitive advantages.
                </p>
                
                <h4 className="text-lg font-bold text-lime-200 mb-3">His Players</h4>
                <p className="text-base md:text-lg text-gray-100 mb-4">
                  Lincoln works almost exclusively with committed amateur golfers and single-figure handicappers who know they have more to give. His ideal clients are players who:
                </p>
                <ul className="text-base md:text-lg text-gray-100 mb-6 space-y-2 list-disc list-inside ml-4">
                  <li>Perform well in practice but struggle in competition</li>
                  <li>Want to move beyond "just relax" advice to real mental training</li>
                  <li>Are ready to invest in the psychological side of their game with the same intensity they bring to their swing</li>
                </ul>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  Whether you're trying to break through a scoring plateau or seeking the mental edge that separates good players from great ones, Lincoln helps serious golfers train their minds like elite athletes.
                </p>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  Because he's walked the path from mental chaos to breakthrough performance, Lincoln understands what it takes to build a game that thrives under pressure—not just survives it.
                </p>
              </div>
            )}
            
            {activeTab === 'statement' && (
              <div className="text-gray-100 text-base md:text-lg text-left max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-lime-300 mb-4 text-center">Personal Statement</h3>
                
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  I know what it's like to stand over a crucial putt while your mind screams sabotage. My war wasn't just on the battlefield—it was inside my head after PTSD and neurodivergence left me feeling trapped by my own thoughts.
                </p>
                
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  Golf became my proving ground for breakthrough. What started as a search for peace on the course evolved into discovering that true resilience isn't born on the range... it's forged in the fire of pressure. Through my own struggles and victories, I learned that the game doesn't just reveal character—it builds it, one shot at a time.
                </p>
                
                <h4 className="text-lg font-bold text-lime-200 mb-3">My Mission</h4>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  Today, I use that hard-won insight to help serious golfers break through their mental barriers. I don't just help players lower scores—I help them raise their floor so bad days don't derail them, and smash their ceiling so they own the moments that matter most.
                </p>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  My approach blends military stress inoculation techniques with proven sports psychology from mentors like Dr. Bob Rotella, Karl Morris, Dr. Raymond Prior, and Dr. Michael Gervais. I integrate real-time biometric feedback with cognitive conditioning frameworks to help players think sharper and play freer under pressure.
                </p>
                
                <h4 className="text-lg font-bold text-lime-200 mb-3">My Method</h4>
                <p className="text-base md:text-lg text-gray-100 mb-4">
                  This isn't abstract mindset coaching. It's practical, structured work that creates lasting change:
                </p>
                <ul className="text-base md:text-lg text-gray-100 mb-6 space-y-2 list-disc list-inside ml-4">
                  <li>We dismantle the mental patterns that create chaos—the 3am replay of missed putts, the "play it safe" voice on crucial shots</li>
                  <li>We build resilience routines that make pressure your ally rather than your enemy</li>
                  <li>We pressure-test new habits in real-play scenarios until they become automatic</li>
                </ul>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  My neurodivergent mind became my advantage in this work—I spot cognitive patterns others miss and decode how each player's brain works under pressure so we can rewire it effectively.
                </p>
                
                <h4 className="text-lg font-bold text-lime-200 mb-3">Who I Serve</h4>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  I work with golfers who know they underperform when it matters most, who are tired of "just relax" advice, and who want a mental edge as sharp as their ball-striking. Whether you're chasing lower scores or seeking more control in pressure moments, I coach players ready to train like elite performers do—with honesty, intent, and mental clarity.
                </p>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  Because I've stood where you stand, feeling trapped by mental noise that sabotages performance. And I know the path through the chaos to breakthrough.
                </p>
                
                <p className="text-lime-300 font-semibold mt-6 text-center">— Lincoln "Bendy" Stephens</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Coaching Services - Interactive Expandable Cards */}
      <div className="mt-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-lime-200 text-center">Coaching Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id}
              className={`bg-black/80 border border-lime-600/30 rounded-2xl shadow-2xl transition-all duration-300 cursor-pointer hover:border-lime-500/50 hover:shadow-lime-500/20 ${
                expandedLessons.includes(lesson.id) ? 'ring-2 ring-lime-400' : ''
              }`}
              onClick={() => toggleLesson(lesson.id)}
            >
              {/* Header - Always Visible */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-lime-200 leading-tight flex-1 mr-3 text-center">
                    {lesson.title}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${
                    expandedLessons.includes(lesson.id) ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedLessons.includes(lesson.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-lime-300 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {lesson.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-100 flex items-start">
                          <span className="text-lime-400 mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-lime-300 mb-2">Outcome:</h4>
                    <p className="text-sm text-gray-100">{lesson.outcome}</p>
                  </div>

                  {/* Price and Book Button */}
                  <div className="border-t border-lime-600/30 pt-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-lime-300">{lesson.price}</div>
                      <div className="text-sm text-gray-300">{lesson.duration}</div>
                    </div>
                    <a
                      href={`mailto:lincoln@substantiaintelligence.co.uk?subject=Booking: ${lesson.title}&body=Hi Lincoln,%0D%0A%0D%0AI'd like to book the ${lesson.title} session.%0D%0A%0D%0APrice: ${lesson.price} ${lesson.duration}%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThanks!`}
                      className="w-full bg-gradient-to-r from-green-500 to-lime-500 text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform inline-block text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-8 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-lime-200">What Clients Say</h2>
        <div className="flex gap-4 overflow-x-auto scroll-smooth scroll-px-4 pb-4 snap-x snap-mandatory" style={{ WebkitOverflowScrolling: 'touch' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-80 snap-center">
              <div className="bg-black/80 border border-lime-600/30 rounded-2xl p-6 shadow-2xl text-center mx-2 min-h-[200px] flex flex-col justify-between">
                {/* Star Rating */}
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-5 h-5 ${
                        starIndex < (t.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-100 mb-4">"{t.text}"</p>
                <span className="block font-bold text-lime-200">{t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Contact/Booking CTA */}
      <section id="contact" className="py-16 px-4 text-center bg-black/40 backdrop-blur-md border-t border-green-500/20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-lime-200">Ready to Get Started?</h2>
        <p className="text-lg text-lime-100 mb-8">Contact me to book your first session or ask any questions. I look forward to helping you play your best golf!</p>
        <a href="mailto:lincoln@substantiaintelligence.co.uk" className="inline-block bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform">Book Now</a>
      </section>

      {/* Know Yourself Better Than Anyone */}
      {showPsychTest && (
        <section id="psych-test" className="relative z-10 max-w-2xl mx-auto mt-16 bg-white/90 border border-lime-600/30 rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-6 text-gray-900">
        <h2 className="text-2xl md:text-3xl font-bold text-lime-900 mb-2 text-center">Know Yourself Better Than Anyone</h2>
        <p className="text-base md:text-lg text-red-700 font-semibold mb-2 text-center">Warning!!! It takes strength to look in the golfing mirror!</p>
        <p className="text-base md:text-lg text-gray-700 mb-4 text-center">
          Twelve scenarios, five possible reactions each. Your choices map to the four mental dimensions we measure. Trust your first instinct; there are no right or wrong answers.
        </p>
        <form className="w-full max-w-xl mx-auto" onSubmit={e => {
  e.preventDefault();
  if (selectedOptions.some(v => v === null)) {
    setError('Please answer all questions.');
    return;
  }
  setError('');
  // Calculate and show result
  setResultCode(calculateProfileCode(selectedOptions));
  setShowResult(true);
}}>
          {questions.map((q, i) => (
            <div key={i} className="mb-6 p-4 bg-lime-50 rounded-xl shadow border border-lime-200">
              <h3 className="font-semibold text-lime-900 mb-3">{i + 1}. {q.text}</h3>
              <div className="space-y-2">
                {q.options.map((option, j) => (
                  <button
                    key={j}
                    type="button"
                    className={`w-full text-left flex items-start space-x-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                      selectedOptions[i] === j
                        ? 'bg-lime-200 border-lime-500 text-lime-900 shadow-md ring-2 ring-lime-300 font-semibold'
                        : 'border-lime-200 hover:bg-lime-100 text-gray-700 hover:border-lime-300 font-normal'
                    }`}
                    onClick={() => {
                      const newSelected = [...selectedOptions];
                      newSelected[i] = j;
                      setSelectedOptions(newSelected);
                    }}
                  >
                    <span className="text-sm flex-1">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
          {error && <div className="text-red-600 font-semibold mb-4">{error}</div>}
          <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform mt-4">See My Profile</button>
        </form>
        {showResult && (
  <div className="mt-8 p-6 bg-lime-100 border border-lime-400 rounded-xl text-center">
    <h3 className="text-2xl font-bold mb-2 text-lime-900">Your Profile Code</h3>
    <div className="text-4xl font-bold mb-2 tracking-wider text-lime-700">{resultCode}</div>
    {!emailSubmitted ? (
      <form
        className="mt-6 flex flex-col items-center gap-4"
        onSubmit={e => {
          e.preventDefault();
          if (!email) return;
          setEmailSubmitted(true);
          // Send the full profile results
          const profile = getProfileByCode(resultCode);
          if (profile) {
            sendResults(email, { code: resultCode, breakdown: [profile.title, profile.description] });
          }
        }}
      >
        <label htmlFor="profile-email" className="text-lime-900 font-semibold">Enter your email to get your full profile results:</label>
        <input
          id="profile-email"
          name="profile-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent w-full max-w-xs"
          placeholder="you@email.com"
          required
        />
        <button type="submit" className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform">Get My Full Profile</button>
      </form>
    ) : (
      <div className="mt-6 text-left">
        <h4 className="text-xl font-bold text-lime-900 mb-4 text-center">Your Full Profile</h4>
        
        {/* Profile Overview */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md border border-lime-200">
          <h5 className="text-lg font-bold text-lime-800 mb-2">{getProfileExplanation(resultCode).title}</h5>
          <p className="text-gray-700 mb-4">{getProfileExplanation(resultCode).description}</p>
        </div>

        {/* Strengths */}
        <div className="bg-green-50 rounded-lg p-6 mb-6 shadow-md border border-green-200">
          <div className="flex items-center mb-3">
            <CheckCircle className="text-green-600 mr-2" size={20} />
            <h5 className="text-lg font-bold text-green-800">Your Strengths</h5>
          </div>
          <ul className="space-y-2">
            {getProfileExplanation(resultCode).strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Development Areas */}
        <div className="bg-orange-50 rounded-lg p-6 mb-6 shadow-md border border-orange-200">
          <div className="flex items-center mb-3">
            <AlertCircle className="text-orange-600 mr-2" size={20} />
            <h5 className="text-lg font-bold text-orange-800">Development Areas</h5>
          </div>
          <ul className="space-y-2">
            {getProfileExplanation(resultCode).challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coaching Recommendations */}
        <div className="bg-blue-50 rounded-lg p-6 mb-6 shadow-md border border-blue-200">
          <div className="flex items-center mb-3">
            <Target className="text-blue-600 mr-2" size={20} />
            <h5 className="text-lg font-bold text-blue-800">Coaching Focus</h5>
          </div>
          <ul className="space-y-2">
            {getProfileExplanation(resultCode).coachingFocus.map((focus, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">{focus}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Focus */}
        <div className="bg-purple-50 rounded-lg p-6 mb-6 shadow-md border border-purple-200">
          <div className="flex items-center mb-3">
            <BookOpen className="text-purple-600 mr-2" size={20} />
            <h5 className="text-lg font-bold text-purple-800">Practice Focus</h5>
          </div>
          <p className="text-gray-700">{getProfileByCode(resultCode)?.practice_focus}</p>
        </div>

        {/* Competitive Strategy */}
        <div className="bg-indigo-50 rounded-lg p-6 mb-6 shadow-md border border-indigo-200">
          <div className="flex items-center mb-3">
            <Zap className="text-indigo-600 mr-2" size={20} />
            <h5 className="text-lg font-bold text-indigo-800">Competitive Strategy</h5>
          </div>
          <p className="text-gray-700">{getProfileByCode(resultCode)?.competitive_strategy}</p>
        </div>

        {/* Next Steps */}
        <div className="bg-lime-50 rounded-lg p-6 shadow-md border border-lime-200">
          <h5 className="text-lg font-bold text-lime-800 mb-3">Next Steps</h5>
          <p className="text-gray-700 mb-4">
            Your profile has been sent to Lincoln. He'll review your results and may reach out to discuss how this insight can inform your coaching journey.
          </p>
          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-green-500 to-lime-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    )}
  </div>
)}
        </section>
      )}
    </main>
    </div>
  );
} 