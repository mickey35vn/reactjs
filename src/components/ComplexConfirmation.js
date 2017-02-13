import React, { PropTypes } from 'react';
import { Modal, Button, Input } from 'react-bootstrap';
import { confirmable } from 'react-confirm';

class ComplexConfirmation extends React.Component {

	refCallback(ref) {
		this.inputRef = ref;
	}

	handleOnClick(index) {
		const { proceed } = this.props;
		return () => {
			proceed({
				button: index,
				input: this.inputRef.getValue()
			});
		};
	}

	render() {
		const {
			show,
			dismiss,
			cancel,
			message
		} = this.props;

		return (
			<div className='static-modal'>
				<Modal show={show} onHide={dismiss} >
					<Modal.Header>
						<Modal.Title />
					</Modal.Header>
					<Modal.Body>
						{message}
					</Modal.Body>
					<Modal.Footer>
						<Input ref={this.refCallback} type='text' />
						<Button onClick={cancel}>Cancel</Button>
						<Button className='button-l' bsStyle='default' onClick={this.handleOnClick(1)}>1st</Button>
						<Button className='button-l' bsStyle='default' onClick={this.handleOnClick(2)}>2nd</Button>
						<Button className='button-l' bsStyle='default' onClick={this.handleOnClick(3)}>3rd</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

ComplexConfirmation.propTypes = {
	message: PropTypes.string,
	show: PropTypes.bool,            // from confirmable. indicates if the dialog is shown or not.
	proceed: PropTypes.func,         // from confirmable. call to close the dialog with promise resolved.
	cancel: PropTypes.func,          // from confirmable. call to close the dialog with promise rejected.
	dismiss: PropTypes.func,         // from confirmable. call to only close the dialog.
	confirmation: PropTypes.string,  // arguments of your confirm function
	options: PropTypes.oneOfType([PropTypes.object])        // arguments of your confirm function
};

export default confirmable(ComplexConfirmation);
