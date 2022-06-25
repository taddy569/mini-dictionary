export {
  default as productsReducer,
  add,
  setItemsPerPage,
  fetchProductById,
  fetchProducts,
} from './products'

export {
  default as cartsReducer,
  addProductToCart,
  updateProductOnCart,
  increaseProductOnCart,
  decreaseProductOnCart,
  removeProductFromCart,
} from './carts'
