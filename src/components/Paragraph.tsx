import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLParagraphElement> {

}

const Paragraph: React.StatelessComponent<Props> = (props) => (
	<p {...props} />
);

export default Paragraph;
