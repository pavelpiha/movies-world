import React, { ChangeEventHandler } from 'react';

import './MwInput.scss';

export interface MwInputProps {
  className: string;
  containerStyle: string;
  name: string;
  onChange: ChangeEventHandler;
  type: string;
  value: string;
  placeholder?: string;
  error?: string;
}

const MwInput = (props: MwInputProps): JSX.Element => {
  const inputRef = React.useRef(null);

  const handleClick = (): void => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div className={props.className}>
        <div className="mwInputTitle">{props.name}</div>
        <div onClick={handleClick} className="mwInputContainer">
          <input
            ref={inputRef}
            tabIndex={0}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
          />
        </div>
        <div className="mwInputError">{props.error}</div>
      </div>
    </>
  );
};

export default MwInput;
