import {computed, extendObservable, runInAction, observable} from 'mobx';

import {normalizeSectionName} from '../utils/helpers';

let store = null;

class Store {
  @observable cache = {};
  @observable url = '/';
  @observable isLoading = false;

  constructor(initialState = {}) {
    runInAction(() => {
      extendObservable(this.cache, initialState.cache || {});
      this.url = initialState.url || this.url;
    });
  }

  @computed get rawPage() {
    return this.cache[this.url];
  }

  set loading(data) {
    this.isLoading = data;
  }

  set page(data) {
    this.isLoading = true;
    if (typeof this.cache[this.url] === 'undefined') {
      extendObservable(this.cache, {[this.url]: data});
    }
    this.isLoading = false;
  }

  @computed get page() {
    const raw = this.rawPage;
    return raw ? {
      raw,
      id: raw.page_id,
      layout: normalizeSectionName(raw.layout || 'main'),
      sections: raw.template ? raw.meta : null,
      content: raw.content && raw.content.rendered,
      title: raw.title && raw.title.rendered,
      description: raw.description,
    } : null;
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
