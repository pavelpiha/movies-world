import './MwButton.scss';

export interface MwButtonProps {
  handleClick: Function;
  buttonName?: string;
  buttonClassName?: string;
  children?: JSX.Element;
}

const MwButton = (props: MwButtonProps): JSX.Element => {
  const { children, buttonName, buttonClassName, handleClick } = { ...props };

  const handleChange = (): void => {
    handleClick();
  };

  return (
    <button className={buttonClassName} onClick={handleChange}>
      {buttonName}
      {children}
    </button>
  );
};

export default MwButton;
