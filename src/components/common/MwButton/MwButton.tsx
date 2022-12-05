import './MwButton.scss';

export interface MwButtonProps {
  onClickInternal: Function;
  buttonName?: string;
  className?: string;
  children?: JSX.Element;
  type?: 'submit' | 'reset' | 'button';
}

const MwButton = (props: MwButtonProps): JSX.Element => {
  const { children, buttonName, className, onClickInternal } = { ...props };

  const handleChange = (): void => {
    onClickInternal();
  };

  return (
    <>
      {props.type ? (
        <button type={props.type} className={className} onClick={handleChange}>
          {buttonName}
          {children}
        </button>
      ) : (
        <button className={className} onClick={handleChange}>
          {buttonName}
          {children}
        </button>
      )}
    </>
  );
};

export default MwButton;
