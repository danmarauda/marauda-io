import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import Card, { CardBody, CardFooter, CardFooterChild } from '../../../components/ui/Card';
import Avatar from '../../../components/Avatar';

interface IChatItemContainerCommonProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	isAnswer?: boolean;
	userImage?: string;
	userName: string;
}
const ChatItemContainerCommon: FC<IChatItemContainerCommonProps> = (props) => {
	const { children, className, isAnswer, userImage, userName, ...rest } = props;
	return (
		<div
			className={classNames('col-span-8', { 'col-start-5': !isAnswer }, className)}
			{...rest}>
			<Card>
				<CardBody className='pb-8'>{children}</CardBody>
				<CardFooter className='relative !p-0'>
					<CardFooterChild />
					<CardFooterChild>
						<Avatar
							src={userImage}
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
ChatItemContainerCommon.defaultProps = {
	isAnswer: false,
	className: undefined,
	userImage: undefined,
};

export default ChatItemContainerCommon;
