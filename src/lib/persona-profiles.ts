export interface PersonaProfile {
  code: string;
  title: string;
  description: string;
  strengths: string[];
  development_areas: string[];
  coaching_recommendations: string[];
  practice_focus: string;
  competitive_strategy: string;
}

export interface PersonaProfiles {
  [code: string]: PersonaProfile;
}

export const personaProfiles: PersonaProfiles = {
  "C-A-S-P": {
    "code": "C-A-S-P",
    "title": "The Architect",
    "description": "Master planner who prizes predictability and control. Combines data-driven analysis with meticulously repeatable routines on and off the course.",
    "strengths": [
      "Exceptional course-management",
      "Reliable performance in stable conditions",
      "Deep technical knowledge",
      "Sustained focus over long rounds",
      "Low error frequency"
    ],
    "development_areas": [
      "Analysis paralysis in unfamiliar settings",
      "Slow adaptation to rapid change",
      "Over-thinking when rushed",
      "Rigidity if routines break",
      "Limited emotional-feel integration"
    ],
    "coaching_recommendations": [
      "Tempo-compression drills",
      "Adaptability scenarios mid-round",
      "First-instinct decision exercises",
      "Flow-state training to quiet analysis"
    ],
    "practice_focus": "Highly structured sessions with clear objectives, progress logs and predetermined targets.",
    "competitive_strategy": "Detailed pre-round prep, contingency plans, and decision trees for varying scenarios."
  },

  "C-A-S-R": {
    "code": "C-A-S-R",
    "title": "The Perfectionist",
    "description": "Quality-control specialist who benchmarks every strike against an exacting standard; precision motivates but can also imprison.",
    "strengths": [
      "Elite self-diagnosis skills",
      "Continuous technical refinement",
      "Precise ball-striking when confident",
      "Consistent dispersion patterns",
      "High commitment to excellence"
    ],
    "development_areas": [
      "Paralysis when perfection is impossible",
      "Harsh self-critique after misses",
      "Mid-round tinkering",
      "Difficulty accepting 'good-enough' shots",
      "Frustration on less exacting layouts"
    ],
    "coaching_recommendations": [
      "Acceptance training and error-tolerance",
      "Process-over-outcome framing",
      "Rapid mistake-recovery routines",
      "Confidence cues that celebrate progress"
    ],
    "practice_focus": "Laboratory-style range work favouring quality reps over volume.",
    "competitive_strategy": "Stick to conservative lines that reward precision; reset quickly after inevitable imperfections."
  },

  "C-A-E-P": {
    "code": "C-A-E-P",
    "title": "The General",
    "description": "Strategic commander who views each hole as a military puzzle solved through smart percentage play and risk minimisation.",
    "strengths": [
      "Superior course mapping",
      "Emotional control",
      "Low big-number frequency",
      "Plays within current skill set",
      "Consistent scoring"
    ],
    "development_areas": [
      "Occasionally over-conservative",
      "Needs bolder lines on scorable days",
      "Predictability in match play",
      "Hesitation to trust new power gains",
      "Can lack closing 'killer instinct'"
    ],
    "coaching_recommendations": [
      "Aggression-calibration drills",
      "Confidence work for newer skills",
      "Head-to-head situational games",
      "Resilience training for high-stakes moments"
    ],
    "practice_focus": "Target-based sessions mirroring on-course scenarios and lies.",
    "competitive_strategy": "Play percentages until data says attack; maintain clear red-light/green-light criteria."
  },

  "C-A-E-R": {
    "code": "C-A-E-R",
    "title": "The Chess Master",
    "description": "Dynamic strategist who recalculates in real time, blending analytics with situational awareness to stay one move ahead.",
    "strengths": [
      "Elite adaptability",
      "Complex decision-making under pressure",
      "Reads evolving conditions fast",
      "Balances aggression and safety",
      "Enjoys mental challenge"
    ],
    "development_areas": [
      "Can get caught between options",
      "Occasional commitment wobble",
      "Decision latency when choices equal",
      "Risk of over-analysis in crunch time"
    ],
    "coaching_recommendations": [
      "Time-boxed decision drills",
      "Commitment triggers",
      "Feel-vs-data balancing tasks",
      "Simulated pressure decisions"
    ],
    "practice_focus": "R&D style range work that tests multiple strategies and shot shapes.",
    "competitive_strategy": "Flexible game plan with pre-set pivots; rapid feedback loops during play."
  },

  "C-I-S-P": {
    "code": "C-I-S-P",
    "title": "The Craftsman",
    "description": "Patient artisan who fuses solid fundamentals with intuitive feel, building skills deliberately while staying open to creativity.",
    "strengths": [
      "Blend of precision and flair",
      "Kinaesthetic awareness",
      "Adaptive shot creation",
      "Reliable practice ethic",
      "Steady mental tempo"
    ],
    "development_areas": [
      "Lengthy routines in competition",
      "Internal focus can tighten under stress",
      "Distracted by swing mechanics mid-round",
      "Needs more assertive instincts"
    ],
    "coaching_recommendations": [
      "Time-efficient pre-shot work",
      "External-focus target drills",
      "Pressure ladders to trust feel",
      "Decision-speed games"
    ],
    "practice_focus": "Purposeful blocks mixed with creative experimentation.",
    "competitive_strategy": "Balance technical anchors with visualised shot shapes; keep tempo consistent."
  },

  "C-I-S-R": {
    "code": "C-I-S-R",
    "title": "The Patient Artist",
    "description": "Contemplative creator who values the beauty of strike and clever recovery; thrives on feel and finesse.",
    "strengths": [
      "Exceptional short-game touch",
      "Creative problem-solving",
      "Strong visualisation",
      "Composed under tough pins",
      "Unique shot repertoire"
    ],
    "development_areas": [
      "Plays slower than field pace",
      "Overly internal focus at times",
      "Less suited to straightforward power layouts",
      "Requires quicker decision cadence"
    ],
    "coaching_recommendations": [
      "Pace-of-play tempo work",
      "External situational drills",
      "Competitive intensity boosters",
      "Strategic checkpoints"
    ],
    "practice_focus": "Low-volume, high-attention reps with emphasis on touch.",
    "competitive_strategy": "Lean on creativity while monitoring pace; choose imaginative lines when advantageous."
  },

  "C-I-E-P": {
    "code": "C-I-E-P",
    "title": "The Visionary",
    "description": "Master visualiser who sees the shot first and builds execution around a vivid mental picture supported by solid mechanics.",
    "strengths": [
      "Superior imagination",
      "Translates vision to motion",
      "Comfortable with varied trajectories",
      "Reads greens exceptionally",
      "Adapts to complex lies"
    ],
    "development_areas": [
      "May overreach technical limits",
      "Frustration when picture and outcome diverge",
      "Needs tighter risk filters",
      "Benefit from analytic confirmation"
    ],
    "coaching_recommendations": [
      "Reality-calibration yardage tests",
      "Strategic decision frameworks",
      "Execution-confidence drills",
      "Stress-visualisation routines"
    ],
    "practice_focus": "Shot-making vocabulary expansion with fundamentals maintenance.",
    "competitive_strategy": "Select creative shots that align with current skill metrics; confirm with quick data check."
  },

  "C-I-E-R": {
    "code": "C-I-E-R",
    "title": "The Flow Master",
    "description": "Rhythm virtuoso who plays best when instinct guides each decision; excels by syncing with course conditions.",
    "strengths": [
      "Feel for wind and turf",
      "Instinctive shot selection",
      "Natural tempo",
      "High adaptability",
      "Comfort in uncertain setups"
    ],
    "development_areas": [
      "Less structured improvement path",
      "Dependent on being 'in tune'",
      "Limited objective feedback",
      "Precision play can lag"
    ],
    "coaching_recommendations": [
      "Structured feedback integration",
      "Instinct-plus-data balance drills",
      "Pressure rhythm maintenance",
      "Objective yardage calibration"
    ],
    "practice_focus": "Variable environmental simulations to deepen instinct library.",
    "competitive_strategy": "Stay in flow using environmental cues; add mini-checkpoints for yardage accuracy."
  },

  "D-A-S-P": {
    "code": "D-A-S-P",
    "title": "The Efficient Machine",
    "description": "Productivity expert who makes smart decisions fast and commits fully, marrying rapid analysis with confident execution.",
    "strengths": [
      "Quick, correct decisions",
      "Thrives at tournament pace",
      "Focus without over-deliberation",
      "Efficient practice habits",
      "Maintains momentum"
    ],
    "development_areas": [
      "May overlook subtle data",
      "Occasional snap judgments",
      "Needs patience with slow partners",
      "Can miss creative options"
    ],
    "coaching_recommendations": [
      "Information-scan checklists",
      "Patience interval drills",
      "Feel integration tasks",
      "Quality-under-speed simulations"
    ],
    "practice_focus": "Short, high-intensity sessions with defined metrics.",
    "competitive_strategy": "Preset frameworks for rapid decisions; maintain breathing cadence to prevent rush."
  },

  "D-A-S-R": {
    "code": "D-A-S-R",
    "title": "The Data Driven Athlete",
    "description": "Performance scientist who blends athletic aggression with analytical precision, chasing measurable gains in power and accuracy.",
    "strengths": [
      "Tech-savvy improvement",
      "Objective feedback utilisation",
      "Confident when data aligns",
      "Rapid skill progression",
      "Structured training blocks"
    ],
    "development_areas": [
      "Over-reliance on numbers",
      "Low feel development",
      "Frustration without tech",
      "Potential mechanic overload"
    ],
    "coaching_recommendations": [
      "Feel-centric drills",
      "Tech-balance routines",
      "Creative shot-making games",
      "Instinct trust exercises"
    ],
    "practice_focus": "Launch-monitor sessions with performance KPIs and trend tracking.",
    "competitive_strategy": "Data-backed aggression; fallback to feel when information incomplete."
  },

  "D-A-E-P": {
    "code": "D-A-E-P",
    "title": "The Strategic Aggressor",
    "description": "Calculated risk-taker who fuses smart analytics with bold execution, attacking when odds favour reward.",
    "strengths": [
      "Sharp risk-reward skills",
      "Comfort with bold lines",
      "Analytical confidence",
      "Capitalises on scoring windows",
      "Technically prepared for power"
    ],
    "development_areas": [
      "Impatience in low-risk phases",
      "Over-pressing when trailing",
      "Frustration on conservative tracks",
      "Needs grind skills in tough weather"
    ],
    "coaching_recommendations": [
      "Patience conditioning",
      "Emotion regulation routines",
      "Defensive-play drills",
      "Balanced match-strategy work"
    ],
    "practice_focus": "Rehearsal of attacking shots plus conservative fallback plays.",
    "competitive_strategy": "Clearly defined go-zones; disciplined lay-up choices when metrics say hold."
  },

  "D-A-E-R": {
    "code": "D-A-E-R",
    "title": "The Fearless Competitor",
    "description": "High-stakes specialist who elevates under pressure, believing greatness lives on the edge of risk.",
    "strengths": [
      "Clutch shot-making",
      "Mental toughness",
      "High energy during crunch time",
      "Inspires teammates",
      "Rapid focus escalation"
    ],
    "development_areas": [
      "Routine focus in low stakes",
      "Over-aggression when behind",
      "Patience in grind rounds",
      "Course fit issues on narrow tracks"
    ],
    "coaching_recommendations": [
      "Consistency drills",
      "Strategic patience tasks",
      "Emotional channeling cues",
      "Adaptability simulations"
    ],
    "practice_focus": "Pressure-laden scenarios and competitive contests.",
    "competitive_strategy": "Use adrenaline intentionally; apply aggressive metric only when payoff justified."
  },

  "D-I-S-P": {
    "code": "D-I-S-P",
    "title": "The Kinesthetic Engineer",
    "description": "Movement specialist who builds technical excellence through systematic feel and athletic repetition.",
    "strengths": [
      "High kinaesthetic IQ",
      "Methodical swing refinement",
      "Smooth rhythm",
      "Responsive mid-swing adjustments",
      "Disciplined practice blocks"
    ],
    "development_areas": [
      "Mechanic over-focus",
      "Needs stronger external cues",
      "Limited strategic depth",
      "Patience for slower progress cycles"
    ],
    "coaching_recommendations": [
      "Target-based external drills",
      "Strategic overlay sessions",
      "Under-pressure movement tasks",
      "Holistic game development plans"
    ],
    "practice_focus": "Quality repetition with intermittent feel checks and objective feedback.",
    "competitive_strategy": "Anchor on rhythm cues, trust athletic movement, overlay strategic checkpoints."
  },

  "D-I-S-R": {
    "code": "D-I-S-R",
    "title": "The Natural Athlete",
    "description": "Instinct-led shot-creator whose game flows from raw talent, rhythm, and creativity.",
    "strengths": [
      "Versatile shot-making",
      "Fast adaptation",
      "Calm under pressure",
      "Inspirational flair",
      "Natural tempo"
    ],
    "development_areas": [
      "Inconsistent when feel dips",
      "Avoids structured improvement",
      "Precision gaps on tight setups",
      "Needs firmer course management"
    ],
    "coaching_recommendations": [
      "Structured skill frameworks",
      "Dispersion consistency ladders",
      "Strategic decision modules",
      "Technical baseline maintenance"
    ],
    "practice_focus": "Feel-based sessions supplemented by measured drills for consistency.",
    "competitive_strategy": "Leverage creativity selectively; apply systematic choices on precision holes."
  },

  "D-I-E-P": {
    "code": "D-I-E-P",
    "title": "The Intuitive Competitor",
    "description": "Instinctive warrior who marries preparation with trust in natural ability to adapt instantly.",
    "strengths": [
      "Balanced prep-and-feel approach",
      "Quick adaptation to changing conditions",
      "Reads greens and lies intuitively",
      "Confident mid-round adjustments",
      "Creative under pressure"
    ],
    "development_areas": [
      "Can resist analytic structure",
      "Inconsistency if over-systemised",
      "Needs firmer technical feedback",
      "May lack grind patience on tough days"
    ],
    "coaching_recommendations": [
      "Instinct plus data integration",
      "Consistent pattern drills",
      "Analytic snapshots without overload",
      "Trust-building under stress"
    ],
    "practice_focus": "Balanced: systematic drills plus scenario-based intuition games.",
    "competitive_strategy": "Read conditions, commit to instinct backed by quick metric cross-check."
  },

  "D-I-E-R": {
    "code": "D-I-E-R",
    "title": "The Shot-Making Virtuoso",
    "description": "Ultimate artist who views golf as creative expression; thrives on imagination and daring execution.",
    "strengths": [
      "Spectacular shot creation",
      "Adaptive to unique lies",
      "Performs in high drama",
      "Inspires with flair",
      "Exceptional feel for spin and curve"
    ],
    "development_areas": [
      "Attempts low-percentage shots",
      "Inconsistent when strategy ignored",
      "Needs structure for steady rounds",
      "Frustration on bland layouts"
    ],
    "coaching_recommendations": [
      "Strategic shot selection filters",
      "Pattern consistency work",
      "Reality-capability calibration",
      "Structured improvement roadmap"
    ],
    "practice_focus": "Exploratory shot-making paired with baseline control drills.",
    "competitive_strategy": "Channel creativity within smart risk parameters; choose hero shots selectively."
  }
};

// Helper function to get a profile by code
export function getProfileByCode(code: string): PersonaProfile | null {
  return personaProfiles[code] || null;
}

// Helper function to get all profile codes
export function getAllProfileCodes(): string[] {
  return Object.keys(personaProfiles);
} 