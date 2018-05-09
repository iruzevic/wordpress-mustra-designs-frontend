import {computed, extendObservable, runInAction, observable} from 'mobx';

import {normalizeSectionName, normalizeSectionClassName} from '../utils/helpers';

let store = null;

class Store {
  @observable cache = {};
  @observable currentUrl = '/';
  // @observable themeOptions = {};

  constructor(initialState = {}) {
    runInAction(() => {
      extendObservable(this.cache, initialState.cache || {});
      this.currentUrl = initialState.currentUrl || this.currentUrl;
    });
  }

  @computed get rawPage() {
    return this.cache[this.currentUrl];
  }

  // set themeOptions(data) {
  //   this.themeOptions = data;
  // }

  set page(data) {
    if (this.cache.hasOwnProperty(this.currentUrl) === false) {
      extendObservable(this.cache, {[this.currentUrl]: data});
    }
  }

  // get themeOptions() {
  //   return this.themeOptions ? this.themeOptions : null;
  // }

  @computed get page() {
    const raw = this.rawPage;
    let sections = null;

    if (raw && raw.sections) {
      sections = raw.sections.map((element) => {
        if (element.hasOwnProperty('acf_fc_layout')) {
          element.section_name = normalizeSectionName(element.acf_fc_layout); // eslint-disable-line camelcase
          element.section_class_name = normalizeSectionClassName(element.acf_fc_layout); // eslint-disable-line camelcase
        }
  
        return element;
      });
    }

    return raw ? {
      id: raw.ID,
      slug: raw.post_name,
      title: raw.post_title,
      content: raw.post_content,
      authorId: raw.post_author,
      parentId: raw.post_parent,
      featuredImage: raw.featured_image,
      postDate: raw.post_date,
      postModifiedDate: raw.post_modified,
      postExcerpt: raw.post_excerpt,
      postStatus: raw.post_status,
      postType: raw.post_type,
      template: raw.template,
      sections,

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
