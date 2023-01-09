import React, { ChangeEventHandler } from 'react';
import { useField } from 'formik';

export interface MwInputProps {
  className: string;
  name: string;
  label: string;
  onChange?: ChangeEventHandler;
  type: string;
  value?: string;
  placeholder?: string;
}

const MwInput = (props: MwInputProps): JSX.Element => {
  const [field, meta] = useField(props);
  const { type, ...restProps } = props;
  return (
    <div className={props.className}>
      <div className="mwInputTitle">{props.label}</div>
      <div className="mwInputContainer">
        {type === 'textarea' ? (
          <textarea className="mwTextarea" {...field} {...restProps} />
        ) : (
          <input className="mwInput" onChange={props.onChange} {...field} {...restProps} />
        )}
        {meta.touched && meta.error ? <div className="mwError">{meta.error}</div> : null}
      </div>
    </div>
  );
};

export default MwInput;
