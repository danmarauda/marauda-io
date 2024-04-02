import React, { useState } from 'react';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasFooter,
	OffCanvasFooterChild,
	OffCanvasHeader,
	TOffCanvasPosition,
} from '../../../components/ui/OffCanvas';
import ButtonGroup from '../../../components/ui/ButtonGroup';
import Button from '../../../components/ui/Button';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../components/ui/Card';

const OffCanvasPart = () => {
	const [modalStatus, setOffCanvasStatus] = useState<boolean>(false);

	const [staticBackdrop, setStaticBackdrop] = useState<boolean>(false);

	const [position, setPosition] = useState<TOffCanvasPosition>('right');

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
						icon='HeroArrowRight'
						variant='outline'
						isActive={position === 'right'}
						onClick={() => setPosition('right')}>
						right
					</Button>
					<Button
						icon='HeroArrowDown'
						variant='outline'
						isActive={position === 'bottom'}
						onClick={() => setPosition('bottom')}>
						bottom
					</Button>
					<Button
						icon='HeroArrowLeft'
						variant='outline'
						isActive={position === 'left'}
						onClick={() => setPosition('left')}>
						left
					</Button>
					<Button
						icon='HeroArrowUp'
						variant='outline'
						isActive={position === 'top'}
						onClick={() => setPosition('top')}>
						top
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
						<CardTitle>OffCanvas</CardTitle>
					</CardHeaderChild>
					<CardHeaderChild>
						<Button
							variant='outline'
							icon='HeroChatBubbleBottomCenter'
							onClick={() => setOffCanvasStatus(!modalStatus)}>
							OffCanvas
						</Button>
						<OffCanvas
							isOpen={modalStatus}
							setIsOpen={setOffCanvasStatus}
							isStaticBackdrop={staticBackdrop}
							position={position}>
							<OffCanvasHeader>Title</OffCanvasHeader>
							<OffCanvasBody>
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
							</OffCanvasBody>
							<OffCanvasFooter>
								<OffCanvasFooterChild />
								<OffCanvasFooterChild>
									<Button
										icon='HeroXCircle'
										color='red'
										onClick={() => setOffCanvasStatus(false)}>
										Close
									</Button>
									<Button variant='solid' icon='HeroPencilSquare'>
										Save
									</Button>
								</OffCanvasFooterChild>
							</OffCanvasFooter>
						</OffCanvas>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>{content}</CardBody>
			</Card>
		</div>
	);
};

export default OffCanvasPart;
