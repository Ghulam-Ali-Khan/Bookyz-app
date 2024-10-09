const token = typeof window !== 'undefined' && localStorage.getItem('token');

// Constants

// CHAT
export const ALL_ROOM_SOCKET_URL = `wss://booklyz.com/chat/update/?token=${token}`;

// CHAT
export const webSocketUrl = roomId => `wss://booklyz.com/dashboard/chat/?token=${token}&room_id=${roomId}`;

// USER ONLINE
export const getUserOnlineURL = `wss://booklyz.com/online/status/?token=${token}`;

// NOTIFICATIONS
export const getNotificationUrl = () => `wss://booklyz.com/notification/detail/?token=${token}`;
