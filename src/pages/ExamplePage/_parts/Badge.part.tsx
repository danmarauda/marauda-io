import React from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const BadgePart = () => {
	return (
		<div className='col-span-12 md:col-span-6 2xl:col-span-4'>
			<Card className='h-full'>
				<CardHeader>
					<CardHeaderChild>
						<CardTitle>Badge</CardTitle>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div>
						<Badge variant='solid' className='border-transparent'>
							Badge Text
						</Badge>{' '}
						outer text{' '}
						<Badge variant='outline' className='border-transparent'>
							4
						</Badge>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default BadgePart;
