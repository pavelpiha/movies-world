export interface MwButtonProps {
  onClick: Function;
  buttonName?: string;
  className?: string;
  children?: JSX.Element;
  type?: 'submit' | 'reset' | 'button';
}

const MwButton = (props: MwButtonProps): JSX.Element => {
  const { type = 'button', children, buttonName, className, onClick } = { ...props };

  const handleChange = (): void => {
    onClick();
  };

  return (
    <button type={type} className={`mwButton ${className ? className : ''}`} onClick={handleChange}>
      {buttonName}
      {children}
    </button>
  );
};

export default MwButton;
