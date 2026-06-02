import React from 'react';
import './Timeline.css';
import coccardaBadge from '../assets/Coccarda.png';

const timelineData = [
  { title: "Napoleon is born in Corsica", date: "1769 August 15", desc: "A fiery child destined to shake Europe’s established order." },
  { title: "Graduates from military academy", date: "1785 October 28", desc: "Leaving behind a young cadet and stepping into the world with cold ambition." },
  { title: "Captures Toulon from the British", date: "1793 September 18", desc: "Using daring strategy to turn a vulnerable port into his first famous victory." },
  { title: "Appointed commander of the Army of Italy", date: "1796 March 2", desc: "His thunderous leadership begins to rewrite the rules of warfare." },
  { title: "Signs the Treaty of Campo Formio", date: "1797 October 17", desc: "Shaping a new balance of power from the ruins of war." },
  { title: "Invades Egypt", date: "1798 May 19", desc: "Chasing glory on foreign sands while Europe watches the bold expedition unfold." },
  { title: "Overthrows the Directory", date: "1799 November 9", desc: "Seizing control and carving a path from general to ruler." },
  { title: "Crowns himself Emperor", date: "1804 December 2", desc: "Transforming revolutionary chaos into imperial grandeur." },
  { title: "Wins the Battle of Austerlitz", date: "1805 October 21", desc: "Delivering one of the greatest tactical triumphs in military history." },
  { title: "Defeats Prussia at Jena-Auerstedt", date: "1806 October 14", desc: "Crushing enemies with swift maneuver and iron resolve." },
  { title: "Defeats Russia at Friedland", date: "1807 June 14", desc: "Forcing a reluctant peace after a campaign of relentless pressure." },
  { title: "Invades Spain", date: "1808 February 2", desc: "Igniting a brutal guerrilla war that will sap the strength of his empire." },
  { title: "Invades Russia", date: "1812 June 24", desc: "Embarking on a fateful campaign whose bitter winter will become legend." },
  { title: "Defeated at Leipzig", date: "1813 October 16-19", desc: "A massive clash that marks the beginning of his downfall." },
  { title: "Abdicates and is exiled to Elba", date: "1814 April 11", desc: "A fallen emperor sent to a rocky island with the remnants of his crown." },
  { title: "Escapes from Elba", date: "1815 March 20", desc: "Sparking the dramatic Hundred Days and a final desperate resurgence." },
  { title: "Defeated at Waterloo", date: "1815 June 18", desc: "Ending his dream in a muddy field watched by the world." },
  { title: "Exiled to Saint Helena", date: "1815 October 15", desc: "Removed to a lonely rock far from Europe’s bustle." },
  { title: "Dies on Saint Helena", date: "1821 May 5", desc: "Closing the chapter on a life of brilliance, ambition, and ruin." },
];

export default function Timeline() {
  return (
    <div className="flex flex-row justify-center w-full py-10 ">
      <div className="min-h-full min-w-[4px] relative">
        <div className="min-h-full min-w-[4px] absolute timeline-long-line z-0"></div>
      </div>
      <div>
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
    </div>
  );
}