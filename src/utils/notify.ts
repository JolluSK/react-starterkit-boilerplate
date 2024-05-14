import { useNotificationStore, NotificationType } from '@/stores/index';

// Custom hook to be used within React components
export function useNotify() {
    const { addNotification } = useNotificationStore();

    return (type: NotificationType, title: string, message?: string) => {
        addNotification(type, title, message);
    };
}
