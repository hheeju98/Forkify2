import * as model from './model.js';
import bookmarksView from './views/bookmarksView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
}

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
};
init();

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
