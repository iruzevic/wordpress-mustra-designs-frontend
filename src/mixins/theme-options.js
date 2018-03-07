import {getThemeOptions} from '@/services/theme-options';

const themeOptions = {
  set options(options) {
    this._options = options;
  },

  get options() {
    return this._options;
  },

  tst() {
    return 'aaa';
  },

  fetchThemeOptions() {
    getThemeOptions().then((response) => {
      this.options = response.data;
    });
  }
}

export default themeOptions;
