import React from 'react';
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../components/ui/Card';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/ui/Dropdown';
import Button from '../../../components/ui/Button';

const DropdownPart = () => {
	return (
		<div className='col-span-12 md:col-span-6 2xl:col-span-4'>
			<Card className='h-full'>
				<CardHeader>
					<CardHeaderChild>
						<CardTitle>Dropdown</CardTitle>
					</CardHeaderChild>
					<CardHeaderChild>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								<Button
									variant='outline'
									color='zinc'
									icon='HeroEllipsisVertical'
								/>
							</DropdownToggle>
							<DropdownMenu placement='bottom-end'>
								<DropdownItem>List item 1</DropdownItem>
								<DropdownItem>List item 2</DropdownItem>
								<Dropdown>
									<DropdownToggle>
										<DropdownItem>List item 3</DropdownItem>
									</DropdownToggle>
									<DropdownMenu placement='right-start'>
										<Dropdown>
											<DropdownToggle>
												<DropdownItem>List item 3-1</DropdownItem>
											</DropdownToggle>
											<DropdownMenu placement='right-start'>
												<DropdownItem>List item 3-1-1</DropdownItem>
												<DropdownItem>List item 3-1-2</DropdownItem>
												<DropdownItem>List item 3-1-3</DropdownItem>
											</DropdownMenu>
										</Dropdown>
										<DropdownItem>List item 3-2</DropdownItem>
										<DropdownItem>List item 3-3</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</DropdownMenu>
						</Dropdown>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<Dropdown>
						<DropdownToggle>
							<Button variant='outline' icon='HeroRocketLaunch'>
								Click Me!
							</Button>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem>List item 1</DropdownItem>
							<DropdownItem>List item 2</DropdownItem>
							<Dropdown>
								<DropdownToggle>
									<DropdownItem>List item 3</DropdownItem>
								</DropdownToggle>
								<DropdownMenu placement='right-start'>
									<Dropdown>
										<DropdownToggle>
											<DropdownItem>List item 3-1</DropdownItem>
										</DropdownToggle>
										<DropdownMenu placement='right-start'>
											<DropdownItem>List item 3-1-1</DropdownItem>
											<DropdownItem>List item 3-1-2</DropdownItem>
											<DropdownItem>List item 3-1-3</DropdownItem>
										</DropdownMenu>
									</Dropdown>
									<DropdownItem>List item 3-2</DropdownItem>
									<DropdownItem>List item 3-3</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</DropdownMenu>
					</Dropdown>
				</CardBody>
				<CardFooter>
					<CardFooterChild>
						<Dropdown>
							<DropdownToggle>
								<Button icon='HeroRocketLaunch'>Click Me!</Button>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem>List item 1</DropdownItem>
								<DropdownItem>List item 2</DropdownItem>
								<Dropdown>
									<DropdownToggle>
										<DropdownItem>List item 3</DropdownItem>
									</DropdownToggle>
									<DropdownMenu placement='right-start'>
										<Dropdown>
											<DropdownToggle>
												<DropdownItem>List item 3-1</DropdownItem>
											</DropdownToggle>
											<DropdownMenu placement='right-start'>
												<DropdownItem>List item 3-1-1</DropdownItem>
												<DropdownItem>List item 3-1-2</DropdownItem>
												<DropdownItem>List item 3-1-3</DropdownItem>
											</DropdownMenu>
										</Dropdown>
										<DropdownItem>List item 3-2</DropdownItem>
										<DropdownItem>List item 3-3</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</DropdownMenu>
						</Dropdown>
					</CardFooterChild>
					<CardFooterChild>
						<Dropdown>
							<DropdownToggle>
								<Button variant='solid' color='emerald' icon='HeroRocketLaunch'>
									Click Me!
								</Button>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem>List item 1</DropdownItem>
								<DropdownItem>List item 2</DropdownItem>
								<Dropdown>
									<DropdownToggle>
										<DropdownItem>List item 3</DropdownItem>
									</DropdownToggle>
									<DropdownMenu placement='right-start'>
										<Dropdown>
											<DropdownToggle>
												<DropdownItem>List item 3-1</DropdownItem>
											</DropdownToggle>
											<DropdownMenu placement='right-start'>
												<DropdownItem>List item 3-1-1</DropdownItem>
												<DropdownItem>List item 3-1-2</DropdownItem>
												<DropdownItem>List item 3-1-3</DropdownItem>
											</DropdownMenu>
										</Dropdown>
										<DropdownItem>List item 3-2</DropdownItem>
										<DropdownItem>List item 3-3</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</DropdownMenu>
						</Dropdown>
					</CardFooterChild>
				</CardFooter>
			</Card>
		</div>
	);
};

export default DropdownPart;
