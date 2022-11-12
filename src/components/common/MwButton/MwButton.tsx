import './MwButton.scss';

export interface MwButtonProps {
  onClickInternal: Function;
  buttonName?: string;
  className?: string;
  children?: JSX.Element;
}

const MwButton = (props: MwButtonProps): JSX.Element => {
  const { children, buttonName, className, onClickInternal } = { ...props };

  const handleChange = (): void => {
    onClickInternal();
  };

  return (
    <button className={className} onClick={handleChange}>
      {buttonName}
      {children}
    </button>
  );
};

export default MwButton;
