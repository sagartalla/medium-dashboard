import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export const actionTypes = {
  FETCH_HOME_PAGE_DATA: 'FETCH_HOME_PAGE_DATA',
  FITLER_HOME_PAGE_DATA: 'FITLER_HOME_PAGE_DATA'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_PAGE_DATA:
      return Object.assign({}, state, {
        hpdata: action.payload
      })
    case actionTypes.FITLER_HOME_PAGE_DATA:
      return {
        ...state,
        hpdata: {
          ...state.hpdata,
          recipes: action.payload
        }
      }
    default: return state
  }
}

export const fetchHomePageData = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.FETCH_HOME_PAGE_DATA, payload: fetchHomePageDataApi() })
}

export const filterData = (topic) => dispatch => {
  return dispatch({ type: actionTypes.FITLER_HOME_PAGE_DATA, payload: filterHomePageDataApi(topic) })
}


export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}



export const selectors = {
  getHPData: (store) => {
    return store.hpdata.recipes;
  },
  getTopics: (store) => {
    return store.hpdata.categories;
  }
}

function fetchHomePageDataApi() {
  return {"categories":[{"name":"Dessert","image":"http://www.myiconfinder.com/uploads/iconsets/256-256-7275aebc435153f103fe46c706a7f332-pastry.png"},{"name":"Starters","image":"https://image.flaticon.com/icons/svg/362/362272.svg"},{"name":"Main course","image":"https://image.flaticon.com/icons/svg/926/926255.svg"},{"name":"Drinks","image":"https://image.flaticon.com/icons/svg/861/861276.svg"},{"name":"Ice creams","image":"https://image.flaticon.com/icons/svg/1256/1256952.svg"},{"name":"Snacks","image":"https://image.flaticon.com/icons/svg/1205/1205761.svg"}],"recipes":[{"name":"Iced Christmas-pudding mousse","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--3310_11.jpg","price":10,"category":"Dessert","rating":3,"reviews":200,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":true},{"name":"Christmas pudding ice cream","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--495459_12.jpg?itok=kkRfx82P","price":100,"category":"Dessert","rating":4,"reviews":200,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":false},{"name":"Ginger & Christmas pud cheesecake with ginger sauce","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1173572_11.jpg?itok=eA3vwizY","price":200,"category":"Dessert","rating":4,"reviews":200,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":false},{"name":"Deep-fried Brussels with black pudding & apple","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/brussels.jpg?itok=le0uWJBh","price":300,"category":"Starters","rating":2,"reviews":230,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":true},{"name":"Grilled goat's cheese","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--424546_12.jpg?itok=pCudOGKl","price":310,"category":"Starters","rating":1,"reviews":130,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":true},{"name":"Pan-fried scallops","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--360452_12.jpg?itok=uTTHi2oH","price":31,"category":"Starters","rating":2,"reviews":230,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":false},{"name":"Spicy roast potatoes","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--932464_10.jpg?itok=XJ_xNb70","price":51,"category":"Main course","rating":3,"reviews":230,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":true},{"name":"Elderflower spritzer","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--424832_11.jpg?itok=paxXf84X","price":501,"category":"Drinks","rating":4,"reviews":430,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":true},{"name":"Apple, elderflower & gin cocktail","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/cocktail.jpg?itok=EZgCC4bT","price":501,"category":"Drinks","rating":4,"reviews":430,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":false},{"name":"Elderflower and herb cooler","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/03/elderflower.jpg?itok=OKQcpISx","price":901,"category":"Drinks","rating":4,"reviews":430,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":true},{"name":"Banana","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/05/quick-banana-ice-cream-sandwiches.jpg?itok=RHvmYX-q","price":801,"category":"Ice creams","rating":2,"reviews":480,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":true},{"name":"Choc hazelnut","image":"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/06/choc-hazelnut.jpg?itok=PdtRctjG","price":301,"category":"Ice creams","rating":2,"reviews":480,"details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","isFavourite":false}]}
}


function filterHomePageDataApi(topic) {
  debugger;
  return fetchHomePageDataApi().recipes.filter((i) => i.category === topic);
}
