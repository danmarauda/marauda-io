import React, { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalFooterChild,
	ModalHeader,
	TModalSize,
} from '../../../components/ui/Modal';
import ButtonGroup from '../../../components/ui/ButtonGroup';
import Visible from '../../../components/utils/Visible';
import { TScreens } from '../../../types/screens.type';

const ModalPart = () => {
	const [modalStatus, setModalStatus] = useState<boolean>(false);

	const [staticBackdrop, setStaticBackdrop] = useState<boolean>(false);

	const [scrollable, setScrollable] = useState<boolean>(false);

	const [centered, setCentered] = useState<boolean>(false);

	const [fullScrn, setFullScrn] = useState<TScreens | boolean>(false);

	const [size, setSize] = useState<TModalSize>('md');

	const content = (
		<div className='flex grow-0 flex-row flex-wrap items-center gap-4'>
			<div className='basis-auto'>
				<ButtonGroup>
					<Button
						icon='HeroCursorArrowRays'
						variant='outline'
						isActive={!staticBackdrop}
						onClick={() => setStaticBackdrop(false)}>
						Not Static
					</Button>
					<Button
						icon='HeroCursorArrowRipple'
						variant='outline'
						isActive={staticBackdrop}
						onClick={() => setStaticBackdrop(true)}>
						Static
					</Button>
				</ButtonGroup>
			</div>
			<div className='basis-auto'>
				<ButtonGroup>
					<Button
						icon='HeroLockClosed'
						variant='outline'
						isActive={!scrollable}
						onClick={() => setScrollable(false)}>
						Not Scrollable
					</Button>
					<Button
						icon='HeroChevronUpDown'
						variant='outline'
						isActive={scrollable}
						onClick={() => setScrollable(true)}>
						Scrollable
					</Button>
				</ButtonGroup>
			</div>
			<div className='basis-auto'>
				<ButtonGroup>
					<Button
						icon='HeroArrowSmallUp'
						variant='outline'
						isActive={!centered}
						onClick={() => setCentered(false)}>
						Top
					</Button>
					<Button
						icon='HeroArrowsPointingIn'
						variant='outline'
						isActive={centered}
						onClick={() => setCentered(true)}>
						Center
					</Button>
				</ButtonGroup>
			</div>
			<div className='basis-auto'>
				<ButtonGroup>
					<Button
						icon='HeroArrowsPointingIn'
						variant='outline'
						isActive={typeof fullScrn === 'boolean' && !fullScrn}
						onClick={() => setFullScrn(false)}>
						Not
					</Button>
					<Button
						icon='HeroArrowsPointingOut'
						variant='outline'
						isActive={typeof fullScrn === 'boolean' && fullScrn}
						onClick={() => setFullScrn(true)}>
						Full
					</Button>
					<Button
						variant='outline'
						isActive={fullScrn === 'sm'}
						onClick={() => setFullScrn('sm')}>
						sm
					</Button>
					<Button
						variant='outline'
						isActive={fullScrn === 'md'}
						onClick={() => setFullScrn('md')}>
						md
					</Button>
					<Button
						variant='outline'
						isActive={fullScrn === 'lg'}
						onClick={() => setFullScrn('lg')}>
						lg
					</Button>
					<Button
						variant='outline'
						isActive={fullScrn === 'xl'}
						onClick={() => setFullScrn('xl')}>
						xl
					</Button>
					<Button
						variant='outline'
						isActive={fullScrn === '2xl'}
						onClick={() => setFullScrn('2xl')}>
						2xl
					</Button>
				</ButtonGroup>
			</div>
			<div className='basis-auto'>
				<ButtonGroup>
					<Button
						variant='outline'
						isActive={size === 'sm'}
						onClick={() => setSize('sm')}>
						sm
					</Button>
					<Button
						variant='outline'
						isActive={size === 'md'}
						onClick={() => setSize('md')}>
						md
					</Button>
					<Button
						variant='outline'
						isActive={size === 'lg'}
						onClick={() => setSize('lg')}>
						lg
					</Button>
					<Button
						variant='outline'
						isActive={size === 'xl'}
						onClick={() => setSize('xl')}>
						xl
					</Button>
					<Button
						variant='outline'
						isActive={size === '2xl'}
						onClick={() => setSize('2xl')}>
						2xl
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);

	return (
		<div className='col-span-12 md:col-span-6 2xl:col-span-4'>
			<Card className='h-full'>
				<CardHeader>
					<CardHeaderChild>
						<CardTitle>Modal</CardTitle>
					</CardHeaderChild>
					<CardHeaderChild>
						<Button
							variant='outline'
							icon='HeroChatBubbleBottomCenter'
							onClick={() => setModalStatus(!modalStatus)}>
							Modal
						</Button>
						<Modal
							isOpen={modalStatus}
							setIsOpen={setModalStatus}
							isStaticBackdrop={staticBackdrop}
							isScrollable={scrollable}
							isCentered={centered}
							fullScreen={fullScrn}
							size={size}>
							<ModalHeader>Title</ModalHeader>
							<ModalBody>
								{content}
								<p>
									Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.
								</p>
								<p>
									Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.
								</p>
								<p>
									Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.
								</p>
								<Visible is={scrollable}>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
									<p>
										Cras mattis consectetur purus sit amet fermentum. Cras justo
										odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
										risus, porta ac consectetur ac, vestibulum at eros.
									</p>
								</Visible>
							</ModalBody>
							<ModalFooter>
								<ModalFooterChild />
								<ModalFooterChild>
									<Button
										icon='HeroXCircle'
										color='red'
										onClick={() => setModalStatus(false)}>
										Close
									</Button>
									<Button variant='solid' icon='HeroPencilSquare'>
										Save
									</Button>
								</ModalFooterChild>
							</ModalFooter>
						</Modal>
					</CardHeaderChild>
				</CardHeader>
				<CardBody className='mb-4'>{content}</CardBody>
			</Card>
		</div>
	);
};

export default ModalPart;
