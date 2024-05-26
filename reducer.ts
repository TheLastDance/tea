// interface SelectedProduct {
//   id: number;
//   count: number;
// }

// type Action =
//   | { type: "INCREMENT"; payload: number }
//   | { type: "DECREMENT"; payload: number }
//   | { type: "RESET" };
// const initialState: SelectedProduct[] = [];
// function reducer(state: SelectedProduct[], action: Action): SelectedProduct[] {
//   switch (action.type) {
//     case "INCREMENT": {
//       const selectedProductIdx = state.findIndex(
//         (p) => p.id === action.payload
//       );

//       if (selectedProductIdx === -1) {
//         return [...state, { id: action.payload, count: 1 }];
//       }

//       const clone = [...state];
//       const selectedProduct = clone[selectedProductIdx];
//       const updatedSelectedProduct = {
//         ...selectedProduct,
//         count: selectedProduct.count + 1,
//       };
//       clone[selectedProductIdx] = updatedSelectedProduct;
//       return clone;
//     }
//     case "DECREMENT": {
//       const selectedProductIdx = state.findIndex(
//         (p) => p.id === action.payload
//       );

//       if (selectedProductIdx === -1) {
//         return state;
//       }

//       const clone = [...state];
//       const selectedProduct = clone[selectedProductIdx];
//       const updatedCount = selectedProduct.count - 1;

//       if (updatedCount <= 0) {
//         return clone.filter((_, idx) => idx !== selectedProductIdx);
//       } else {
//         const updatedSelectedProduct = {
//           ...selectedProduct,
//           count: updatedCount,
//         };
//         clone[selectedProductIdx] = updatedSelectedProduct;
//         return clone;
//       }
//     }
//     case "RESET":
//       return initialState;
//     default:
//       return state;
//   }
// }

// const [selectedProducts, dispatch] = useReducer(reducer, initialState);

// const handleAddProduct = (id: number) => {
//   dispatch({ type: "INCREMENT", payload: id });
// };

// const selectedNumber = selectedProducts.reduce((acc, cur) => {
//   return acc + cur.count;
// }, 0);
