export const formatTitle = (title) => {
  title = title.slice(1);
  if (title.length === 0) return "Home";
  return title.charAt(0).toUpperCase() + title.slice(1);
};
