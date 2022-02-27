export const getExpireDate = (expire: string) => {
  const now = new Date();
  switch (expire) {
    case "today":
      return now;
    case "tomorrow":
      const tomorrow = new Date(now);
      tomorrow.setDate(now.getDate() + 1);
      return tomorrow;
    case "upcoming":
      const upcoming = new Date(now);
      upcoming.setDate(now.getDate() + 9999); // TODO: 仮で9999日後に設定
      return upcoming;
    default:
      return now;
  }
};
