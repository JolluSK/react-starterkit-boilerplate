import { create } from 'zustand';
import { nanoid } from 'nanoid';

export type NotificationType = 'info' | 'warning' | 'success' | 'error';

export interface Notification {
    id: string;
    type: NotificationType;
    title: string;
    message?: string;
}

interface NotificationState {
    notifications: Notification[];
    addNotification: (type: NotificationType, title: string, message?: string) => void;
    dismissNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
    notifications: [],
    addNotification: (type, title, message) => {
        const id = nanoid();
        set((state) => ({
            notifications: [...state.notifications, { id, type, title, message }]
        }));
        return id;
    },
    dismissNotification: (id) => {
        set((state) => ({
            notifications: state.notifications.filter(notification => notification.id !== id)
        }));
    },
}));