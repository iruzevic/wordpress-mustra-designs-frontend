import {getThemeOptions} from '@/services/theme-options';

export const themeOptions = {
  set options(options) {
    this._options = options;
  },

  get options() {
    return this._options;
  },

  fetchThemeOptions() {
    getThemeOptions().then((response) => {
      this.options = response.data;
    });
  }
}
