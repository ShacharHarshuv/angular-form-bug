export const myVeryBigArray = Array.from({ length: 100000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`,
  description: `Description ${index}`,
  price: Math.random() * 100,
}));
