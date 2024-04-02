import React from 'react';
import NotificationPartial from '../_partial/Notification.partial';
import SettingsPartial from '../_partial/Settings.partial';
import LanguageSelectorPartial from '../_partial/LanguageSelector.partial';
import MessagesPartial from '../_partial/Messages.partial';

const DefaultHeaderRightCommon = () => {
	return (
		<>
			<MessagesPartial />
			<NotificationPartial />
			<SettingsPartial />
			<LanguageSelectorPartial />
		</>
	);
};

export default DefaultHeaderRightCommon;
