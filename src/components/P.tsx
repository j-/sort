import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLParagraphElement> {

}

const P: React.StatelessComponent<Props> = (props) => (
	<p {...props} />
);

export default P;
