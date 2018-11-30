import * as React from 'react';

export interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const Textarea: React.StatelessComponent<Props> = (props) => (
	<textarea {...props} />
);

export default Textarea;
