import React from 'react';
import './Timeline.css';
import coccardaBadge from '../assets/Coccarda.png';

const timelineData = [
  { title: "Step 1: Ideation", date: "Jan 2026", desc: "Brainstorming cool design concepts." },
  { title: "Step 2: Prototyping", date: "Feb 2026", desc: "Building the initial wireframes and user flows." },
  { title: "Step 3: Development", date: "Mar 2026", desc: "Coding the React components and styling." },
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <div className="timeline-item" key={index}>
          {/* The decorative dot */}
          <div className='flex items-center flex-row'>
            <div className="timeline-dot">
              <img
                src={coccardaBadge}
                alt="Coccarda"
                className="timeline-dot-image"
              />
            </div>
            <div className="timeline-line"></div>
          
          
            {/* The actual content box */}
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}