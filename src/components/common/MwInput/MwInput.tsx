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

  const onClickInternal = (): void => {
    inputRef?.current?.focus();
  };
  return (
    <div className={props.className}>
      <div className="mwInputTitle">{props.name}</div>
      <div onClick={onClickInternal} className="mwInputContainer">
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
  );
};

export default MwInput;
