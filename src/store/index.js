import {computed, extendObservable, runInAction, observable} from 'mobx';

import {normalizeSectionName} from '../utils/helpers';

let store = null;

class Store {
  @observable cache = {};
  @observable url = '/';

  constructor(initialState = {}) {
    runInAction(() => {
      extendObservable(this.cache, initialState.cache || {});
      this.url = initialState.url || this.url;
    });
  }

  @computed get rawPage() {
    return this.cache[this.url];
  }

  set page(data) {
    extendObservable(this.cache, {[this.url]: data});
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


const store = new Store();

export default store;
