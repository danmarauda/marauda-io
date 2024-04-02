import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import Card, { CardBody, CardFooter, CardFooterChild } from '../../../components/ui/Card';
import Avatar from '../../../components/Avatar';
import { UserBrainThumb } from '../../../assets/images';

interface IAIChatItemContainerCommonProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	isAnswer?: boolean;
	userImage?: string;
	userName?: string;
}
const AIChatItemContainerCommon: FC<IAIChatItemContainerCommonProps> = (props) => {
	const { children, className, isAnswer, userImage, userName, ...rest } = props;
	return (
		<div
			className={classNames(
				'col-span-10 lg:col-span-8',
				{ 'col-start-3 lg:col-start-5': !isAnswer },
				className,
			)}
			{...rest}>
			<Card>
				<CardBody className='pb-8'>{children}</CardBody>
				<CardFooter className='relative !p-0'>
					<CardFooterChild />
					<CardFooterChild>
						<Avatar
							src={isAnswer ? UserBrainThumb : userImage}
							className={classNames('absolute -top-6', {
								'start-6': isAnswer,
								'end-6': !isAnswer,
							})}
							name={userName}
							rounded='rounded-xl'
						/>
					</CardFooterChild>
				</CardFooter>
			</Card>
		</div>
	);
};
AIChatItemContainerCommon.defaultProps = {
	isAnswer: false,
	className: undefined,
	userImage: undefined,
	userName: 'AI',
};

export default AIChatItemContainerCommon;
