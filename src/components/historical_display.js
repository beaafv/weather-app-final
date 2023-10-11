import React from 'react';

const HistoricalDisplay = ({ historicalEvents }) => {
  return (
    <div className="weather-box col-lg-12">
      {historicalEvents.slice(0, 1).map((event, index) => (
        <p key={index}>
          <strong>In {event.year}</strong>: {event.event}
        </p>
      ))}
    </div>
  );
};

export default HistoricalDisplay;
