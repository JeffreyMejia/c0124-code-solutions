import { useState } from 'react';

export function ToggleSwitch() {
  const [onOff, setOnOff] = useState(false);
  const isOn = onOff;
  let change = '';
  let text = '';

  function handleClick() {
    setOnOff(!isOn);
  }

  if (isOn === true) {
    change = 'is-on';
    text = 'ON';
  } else {
    change = 'is-off';
    text = 'OFF';
  }
  return (
    <div className={`toggle-switch ${change}`}>
      <div className="slider">
        <div onClick={handleClick} className="switch"></div>
      </div>
      <span className="on-off">{text}</span>
    </div>
  );
}
