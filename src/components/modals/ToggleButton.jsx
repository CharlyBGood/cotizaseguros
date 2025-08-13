import React from 'react';

function ToggleButton({ getData, handleToggleChange, data, label }) {
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer text-sm font-medium text-portfolio-text">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={getData}
          onChange={handleToggleChange(data)}
        />
        <div className="relative w-11 h-6 bg-portfolio-medium peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-portfolio-gradient-4/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-portfolio-accent after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-portfolio-gradient-4"></div>
        <span className="ms-3 text-sm font-medium text-portfolio-text">{label}</span>
      </label>
    </div>
  );
}

export default ToggleButton;