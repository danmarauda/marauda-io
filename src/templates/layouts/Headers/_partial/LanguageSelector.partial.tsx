import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/ui/Dropdown';
import Button from '../../../../components/ui/Button';
import LANG from '../../../../constants/lang.constant';
import Icon from '../../../../components/icon/Icon';
import ThemeContext from '../../../../context/themeContext';

const LanguageSelectorPartial = () => {
	const { i18n } = useTranslation();
	const { setLanguage } = useContext(ThemeContext);

	const langArray = Object.values(LANG);
	const activeLang = langArray.filter((key) => key.lng === i18n.language)[0];

	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<Button icon='HeroLanguage' aria-label='Select Language' />
			</DropdownToggle>
			<DropdownMenu placement='bottom-end'>
				{langArray.map((item) => (
					<DropdownItem
						isActive={activeLang.lng === item.lng}
						key={item.lng}
						onClick={() => setLanguage(item.lng)}>
						<Icon icon={item.icon} size='text-2xl' className='ltr:mr-2 rtl:ml-2' />
						{item.text}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
};

export default LanguageSelectorPartial;
