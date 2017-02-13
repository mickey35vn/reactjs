import { createConfirmation } from 'react-confirm';

import Confirmation from '../components/Confirmation';
import ComplexConfirmation from '../components/ComplexConfirmation';

const defaultConfirmation = createConfirmation(Confirmation);

export function confirm(confirmation, options = {}) {
	options.confirmation = confirmation;
	return defaultConfirmation(options);
}

export const confirmComplex = createConfirmation(ComplexConfirmation);
