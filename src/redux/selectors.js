export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.filter;
export const getIsLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token;

