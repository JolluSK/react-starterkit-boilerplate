import { useEffect } from 'react';
import { notification } from 'antd';
import {
    CheckCircleOutlined,
    ExclamationCircleOutlined,
    CloseCircleOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';

import { useNotificationStore, Notification } from '@/stores/index';

const iconMap = {
    info: <InfoCircleOutlined style={{ color: 'blue' }} />,
    success: <CheckCircleOutlined style={{ color: 'green' }} />,
    warning: <ExclamationCircleOutlined style={{ color: 'yellow' }} />,
    error: <CloseCircleOutlined style={{ color: 'red' }} />,
};

export const NotificationComponent = () => {
    const { notifications, dismissNotification } = useNotificationStore((state) => ({
        notifications: state.notifications,
        dismissNotification: state.dismissNotification,
    }));

    useEffect(() => {
        notifications.forEach((notificationObj: Notification) => {
            notification[notificationObj.type]({
                message: notificationObj.title,
                description: notificationObj.message,
                icon: iconMap[notificationObj.type],
                duration: 4.5,
                placement: 'topRight',
                onClose: () => dismissNotification(notificationObj.id),
            });
        });
    }, [notifications, dismissNotification]);

    return null;
};