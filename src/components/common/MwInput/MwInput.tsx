import React, { ChangeEventHandler } from 'react';

import './MwInput.scss';

export interface MwInputProps {
  id: string;
  className: string;
  name: string;
  onChange: ChangeEventHandler;
  type: string;
  value: string;
  placeholder?: string;
  error?: string;
}

const MwInput = (props: MwInputProps): JSX.Element => {
  const { type, ...restProps } = props;
  const inputRef = React.useRef(null);

  const commonProps = {
    tabIndex: 0,
    ref: inputRef,
  };

  const onClick = (): void => {
    inputRef?.current?.focus();
  };

  return (
    <div className={props.className}>
      <div className="mwInputTitle">{props.name}</div>
      <div onClick={onClick} className="mwInputContainer">
        {type === 'textarea' ? <textarea {...restProps} {...commonProps} /> : <input {...restProps} {...commonProps} />}
      </div>
      <div className="mwInputError">{props.error}</div>
    </div>
  );
};

export default MwInput;
