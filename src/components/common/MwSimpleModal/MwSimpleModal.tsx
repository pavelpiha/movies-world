import { CrossIcon } from '../icons/CrossIcon/CrossIcon';
import MwButton from '../MwButton/MwButton';

import './MwSimpleModal.scss';

export interface MwSimpleModalProps {
  message: string;
  title?: string;
  mwSubmitButton?: string;
  className?: string;
  handleCloseDialog: Function;
}

const MwSimpleModal = (props: MwSimpleModalProps): JSX.Element => {
  const { handleCloseDialog } = props;
  const mwSubmitButtonTitle = props.mwSubmitButton ? props.mwSubmitButton : 'Submit';

  return (
    <div className="mwOverlay">
      <div className={props.className ? props.className : 'mwDefaultModalContainer'}>
        <MwButton handleClick={handleCloseDialog} buttonClassName="mwCloseButton">
          <CrossIcon className="mwCloseIcon" />
        </MwButton>
        <h3>{props.title ? props.title : 'Remove movie?'}</h3>
        <div className="mwSimpleModalMessage">{props.message}</div>
        <MwButton handleClick={handleCloseDialog} buttonName={mwSubmitButtonTitle} buttonClassName="mwSubmitButton" />
        <div className="mwSimpleModalSubmit"></div>
      </div>
    </div>
  );
};

export default MwSimpleModal;
