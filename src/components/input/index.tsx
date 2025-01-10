import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input ref={ref} className={`input-field ${error ? 'input-error' : ''}`} {...props} />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
