import {computed, extendObservable, runInAction, observable} from 'mobx';

import {normalizeSectionName} from '../utils/helpers';

let store = null;

class Store {
  @observable cache = {};
  @observable currentUrl = '/';
  @observable isLoading = false;

  constructor(initialState = {}) {
    runInAction(() => {
      extendObservable(this.cache, initialState.cache || {});
      this.currentUrl = initialState.currentUrl || this.currentUrl;
    });
  }

  @computed get rawPage() {
    return this.currentUrl in this.cache && this.cache[this.currentUrl];
  }

  set loading(data) {
    this.isLoading = data;
  }

  set page(data) {
    this.loading = true;
    // console.log(data, this.cache, this.currentUrl, 'DDDD');
    // if (typeof this.cache[this.currentUrl] === 'undefined') {
      extendObservable(this.cache, {[this.currentUrl]: data});
      console.log(this.cache, 'CACHE');
      // console.log(data, 'AAAA');
      // console.log(this.cache, 'BBBB');
      // console.log(this.currentUrl, 'CCCC');
    // }
    this.loading = false;
  }

  @computed get page() {
    // console.log(this.cache, this.currentUrl, this.isLoading);
    // return this.cache;
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
