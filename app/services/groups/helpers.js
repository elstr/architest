import {assignId} from '../helpers'
import {pipe} from 'ramda'

export const validateGroup = pipe(
		/* any other validation should be added here */
		assignId,
)
