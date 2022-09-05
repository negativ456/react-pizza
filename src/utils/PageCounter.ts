export const PageCounter = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};
