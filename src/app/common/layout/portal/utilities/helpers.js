export const findUnreadNotificationCount = notifications => {
  if (notifications?.length > 0) return notifications[0]?.unread_notification_count;
  return 0;
};

export const isSenderOnline = (users, senderId) => users?.find(item => item.profile === senderId);
