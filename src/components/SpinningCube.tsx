'use client';

import { useState } from 'react';
import { Eye, Shield, TrendingUp, FileSearch, BookOpen, Users, Play, Pause } from 'lucide-react';

interface CubeFaceProps {
  className: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const CubeFace = ({ className, icon, title, description, features }: CubeFaceProps) => (
  <div className={`cube-face ${className}`}>
    <div className="mb-4 text-blue-400">{icon}</div>
    <h3 className="text-xl font-bold mb-3 glow-text">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
    <ul className="text-xs space-y-1">
      {features.map((feature) => (
        <li key={feature} className="text-blue-300">• {feature}</li>
      ))}
    </ul>
  </div>
);

export default function SpinningCube() {
  const [isPaused, setIsPaused] = useState(false);

  const cubeData = [
    {
      className: "face-front",
      icon: <Eye size={32} />,
      title: "OSINT & Intelligence",
      description: "Defence-grade open source intelligence gathering and analysis",
      features: ["Real-time threat monitoring", "Digital footprint analysis", "Social media intelligence", "Dark web surveillance"]
    },
    {
      className: "face-back",
      icon: <Shield size={32} />,
      title: "Due Diligence",
      description: "Comprehensive background checks and risk assessment",
      features: ["Corporate investigations", "Executive background checks", "Regulatory compliance", "Fraud detection"]
    },
    {
      className: "face-right",
      icon: <TrendingUp size={32} />,
      title: "Strategic Foresight",
      description: "Anticipate market shifts and competitive threats",
      features: ["Market intelligence", "Competitor analysis", "Risk prediction", "Opportunity mapping"]
    },
    {
      className: "face-left",
      icon: <FileSearch size={32} />,
      title: "Crisis Response",
      description: "Rapid alerts and deep-dive investigations",
      features: ["24/7 monitoring", "Crisis communication", "Damage assessment", "Recovery planning"]
    },
    {
      className: "face-top",
      icon: <BookOpen size={32} />,
      title: "Intelligence Blog",
      description: "Expert insights on global security and risk trends",
      features: ["Weekly threat briefings", "Industry analysis", "Case studies", "Best practices"]
    },
    {
      className: "face-bottom",
      icon: <Users size={32} />,
      title: "Executive Coaching",
      description: "Leadership development and strategic thinking enhancement",
      features: ["Executive mentoring", "Strategic planning", "Decision making", "Golf course networking"]
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="cube-container flex justify-center items-center h-[400px]">
        <div
          className={`cube ${isPaused ? 'animation-pause' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={isPaused ? { animationPlayState: 'paused' } : {}}
        >
          {cubeData.map((face) => (
            <CubeFace key={face.title} {...face} />
          ))}
        </div>
      </div>

      {/* Cube Controls */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition-all duration-300"
        >
          {isPaused ? <Play size={16} /> : <Pause size={16} />}
          <span className="text-sm">{isPaused ? 'Resume' : 'Pause'}</span>
        </button>
        <span className="text-xs text-muted-foreground">
          Hover over cube to explore services
        </span>
      </div>
    </div>
  );
}
