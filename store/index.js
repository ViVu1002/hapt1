const cookieparser = process.server ? require('cookieparser') : undefined;
export const state = () => {
  return {
    token: null,
    user: "",
    products: [],
    cart: []
  }
};
export const getters = {
  products: state => state.products,
  cart: state => state.cart
};
export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setCart(state, cart){
    state.cart = cart;
  },
  ADD_TO_CART(state, product) {
    state.cart.push(product);
  },

};
export const actions = {
  nuxtServerInit({commit}, {req}) {
    let token = null;
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      token = parsed.token;
      commit('setToken', token);
    }
  },
  addToCart(context, product) {
    context.commit('ADD_TO_CART', product);
  },
  setCart(context, cart) {
    context.commit('setCart', cart)
  }
};

