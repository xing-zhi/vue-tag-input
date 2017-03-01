import tagInput from './components/tag-input';

export default tagInput;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('tag-input', tagInput);
}
