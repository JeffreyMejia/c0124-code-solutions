import { FormEvent } from 'react';
import './RegistrationFormUncontrolled.css';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData);
    console.log(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username <input name="username" type="text" />
        </label>
        <label>
          Password <input name="password" type="password" />
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
