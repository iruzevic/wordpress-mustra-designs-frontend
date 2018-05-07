import {computed, extendObservable, runInAction, observable} from 'mobx';

import {normalizeSectionName} from '../utils/helpers';

let store = null;

class Store {
  @observable cache = {};
  @observable currentUrl = '/';

  constructor(initialState = {}) {
    runInAction(() => {
      extendObservable(this.cache, initialState.cache || {});
      this.currentUrl = initialState.currentUrl || this.currentUrl;
    });
  }

  @computed get rawPage() {
    return this.cache[this.currentUrl];
  }

  set page(data) {
    if (this.cache.hasOwnProperty(this.currentUrl) === false) {
      extendObservable(this.cache, {[this.currentUrl]: data});
    }
  }

  @computed get page() {
    const raw = this.rawPage;
    return raw;
    // return raw ? {
    //   raw,
    //   id: raw.page_id,
    //   layout: normalizeSectionName(raw.layout || 'main'),
    //   sections: raw.template ? raw.meta : null,
    //   content: raw.content && raw.content.rendered,
    //   title: raw.title && raw.title.rendered,
    //   description: raw.description,
    // } : null;
  }
}


export function initStore(isServer, initialState) {
  if (isServer) {
    return new Store(initialState);
  }
  if (!store) {
    store = new Store(initialState);
  }
  return store;
}
