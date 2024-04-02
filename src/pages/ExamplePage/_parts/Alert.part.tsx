import React from 'react';
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../components/ui/Card';
import Alert from '../../../components/ui/Alert';

const AlertPart = () => {
	return (
		<div className='col-span-12 md:col-span-6 2xl:col-span-4'>
			<Card className='h-full'>
				<CardHeader>
					<CardHeaderChild>
						<CardTitle>Alert</CardTitle>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='mb-4 flex grow-0 flex-row flex-wrap gap-4'>
						<Alert
							icon='HeroRocketLaunch'
							title='Title Here!'
							color='emerald'
							variant='outline'>
							Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet! Lorem ipsum
							dolor sit amet! Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet!
							Lorem ipsum dolor sit amet!
						</Alert>
						<Alert variant='outline'>Lorem ipsum dolor sit amet!</Alert>
					</div>
				</CardBody>
				<CardFooter>
					<CardFooterChild>asd</CardFooterChild>
				</CardFooter>
			</Card>
		</div>
	);
};

export default AlertPart;
