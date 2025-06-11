// Utility functions
export const formatDate = (timestamp) => {
  const date = new Date(timestamp?.seconds * 1000);
  return date.toLocaleString();
};
