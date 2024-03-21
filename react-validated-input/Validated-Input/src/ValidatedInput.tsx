import './ValidatedInput.css';
import { useState } from 'react';

export function ValidatedInput() {
  const [pass, setPass] = useState('');
  let text = '';

  if (pass.length <= 0) {
    text = 'A password is required';
  } else if (pass.length > 0 && pass.length < 8) {
    text = 'Your password is too short';
  } else {
    text = '';
  }
  return (
    <>
      <div>
        <label className="password" htmlFor="password">
          Password
        </label>
      </div>
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        id="password"
        type="password"
        required
      />
      <p className="input-message">{text}</p>
    </>
  );
}
