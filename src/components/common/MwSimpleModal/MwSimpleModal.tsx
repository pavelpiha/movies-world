import { CrossIcon } from '../icons/CrossIcon/CrossIcon';
import MwButton from '../MwButton/MwButton';

import './MwSimpleModal.scss';

export interface MwSimpleModalProps {
  message: string;
  title: string;
  mwSubmitButton?: string;
  className?: string;
  onClose: Function;
  onSubmit: Function;
}

const MwSimpleModal = (props: MwSimpleModalProps): JSX.Element => {
  const { onClose, onSubmit } = props;
  const mwSubmitButtonTitle = props.mwSubmitButton ? props.mwSubmitButton : 'Submit';

  return (
    <div className="mwOverlay">
      <div className={props.className ? props.className : 'mwDefaultModalContainer'}>
        <MwButton onClick={onClose} className="mwCloseButton">
          <CrossIcon className="mwCloseIcon" />
        </MwButton>
        <h3>{props.title}</h3>
        <div className="mwSimpleModalMessage">{props.message}</div>
        <MwButton onClick={onSubmit} buttonName={mwSubmitButtonTitle} className="mwSubmitButton" />
        <div className="mwSimpleModalSubmit" />
      </div>
    </div>
  );
};

export default MwSimpleModal;
