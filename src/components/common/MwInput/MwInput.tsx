import React, { ChangeEventHandler } from 'react';

import './MwInput.scss';

export interface MwInputProps {
  id: string;
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
        {props.type === 'textarea' ? (
          <textarea
            id={props.id}
            ref={inputRef}
            tabIndex={0}
            cols={30}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
          ></textarea>
        ) : (
          <input
            id={props.id}
            ref={inputRef}
            tabIndex={0}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
          />
        )}
      </div>
      <div className="mwInputError">{props.error}</div>
    </div>
  );
};

export default MwInput;
