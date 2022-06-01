import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

function Progress({ completed, maxCompleted }) {
	return (
		<ProgressBar
			completed={completed}
			maxCompleted={maxCompleted}
			width={'60%'}
			height={10}
			className='w-full '
			bgColor='#609bfa'
			isLabelVisible={false}
			baseBgColor= "#3a3b3d"
		/>
	);
}

export default Progress;
