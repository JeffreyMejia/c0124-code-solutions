import { FormEvent } from 'react';
import './RegistrationFormUncontrolled.css';
import { useState } from 'react';

export function RegistrationFormControlled() {
  const [pass, setPass] = useState('');
  const [username, setUsername] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('password:', pass);
    console.log('username:', username);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input onChange={(e) => setUsername(e.target.value)} type="text" />
        </label>
        <label>
          Password
          <input onChange={(e) => setPass(e.target.value)} type="password" />
        </label>
        <div>
          <button type="submit" className="SignUp">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
