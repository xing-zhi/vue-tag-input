<template>
  <div class="tag-input-container"
       tabindex="-1"
       :class="{ focus: focusIndex !== -2 }"
       @keyup.up="minusIndex"
       @keyup.down="plusIndex"
       @keyup.left="moveLeft"
       @keyup.right="moveRight"
       @keyup.enter.prevent="select"
       @focus="setFocus">
    <tag-input v-model="keyword"
               v-if="!readonly"
               :index="-1"
               :focus-index="focusIndex"
               :selected="selected"
               :on-focus="onFocus"
               :on-blur="stopHandleInput">
    </tag-input>
    <template v-for="(tagItem, index) in tagsToShow">
      <tag :key="index"
           :tag="tagItem.tag"
           :index="index"
           :readonly="readonly || tagItem.readonly"
           @remove-tag="removeTag">
      </tag>
      <tag-input v-model="keyword"
                 v-if="!readonly"
                 :index="index"
                 :focus-index="focusIndex"
                 :selected="selected"
                 :on-focus="onFocus"
                 :on-blur="stopHandleInput"
                 @delete="removeTag">
      </tag-input>
    </template>
    <spinner class="spinner" v-if="requestCount && !simpleMode && spinner"></spinner>
    <ul v-show="items.length && keyword && searching"
        class="search-result-container"
        :style="'max-height:' + height + 'px'"
        @scroll="onScroll">
      <li v-for="(item, index) in items"
          :key="index"
          class="search-result-item"
          @click="selectItem(index)"
          :class="{ highlight: currentIndex === index, selected: inArray(item, value) }">
        {{ item[labelKey] }}
      </li>
    </ul>
    <ul class="search-result-container" v-show="showNoResult()">
      <li class="search-result-item text-danger">没有结果，请更换关键词</li>
    </ul>
  </div>
</template>

<script>
import deepEqual from 'deep-equal';

import tag from './tag';
import tagInput from './input';
import spinner from './spinner';

const inArray = (itemToTest, arr) => arr.some(item => deepEqual(itemToTest, item));
const isObject = (a) => typeof a === 'object' && a !== null;
const isFunction = (a) => typeof a === 'function';

/*
 * v-model: 标签列表
 * getItems: 关键词变化时调用的函数，参数为关键词，返回Promise
 * labelKey: 搜索结果中用于显示的属性名
 * height: 搜索结果列表的高度，默认为280，显示10行
 */

export default {
  props: {
    value: {
      type: Array,
      required: true
    },
    getItems: {
      type: Function,
      required: true
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    height: {
      type: Number,
      default: 280
    },
    readonly: {
      type: Boolean,
      default: false
    },
    spinner: {
      type: Boolean,
      default: true
    }
  },
  components: {
    tag,
    tagInput,
    spinner
  },
  data() {
    return {
      items: [],
      currentIndex: 0,
      searching: false,
      requestCount: 0,
      keyword: '',
      prevKeyword: '',
      isScrollClick: false,
      focusIndex: -2,
      selected: false
    };
  },
  computed: {
    itemAmount() {
      return this.items.length;
    },
    tagsToShow() {
      return this.value
        .map(a => isObject(a) ? { tag: a[this.labelKey], readonly: a.readonly } : { tag: a });
    },
    simpleMode() {
      // In simple mode
      // There is no getItem function
      // The input will be the new tag when press the [enter] key
      return !isFunction(this.getItems);
    }
  },
  watch: {
    keyword(v, oldV) {
      this.prevKeyword = oldV;

      if ( v ) {
       this.search();
      }
    }
  },
  methods: {
    inArray,
    onScroll() {
      this.isScrollClick = true;
    },
    setFocus() {
      const tagAmount = this.tagsToShow.length;

      this.focusIndex = tagAmount ? tagAmount - 1 : -1;
    },
    onFocus(index) {
      this.focusIndex = index;
      this.selected = false;
      if ( this.keyword ) {
        this.search();
      }
    },
    search() {
      // There is no search in simple mode
      if ( this.simpleMode ) {
        return;
      }

      this.searching = true;
      this.requestCount++;

      // 如果两次关键词相同，不调用接口，适用于已经输入关键词后的二次获取焦点
      if ( this.keyword === this.prevKeyword ) {
        return;
      }

      Promise.resolve(this.getItems(this.keyword))
        .then((items) => {
          this.requestCount--;

          if ( !this.requestCount ) {
            this.items = items;
          }
        })
        .catch((err) => {
          this.requestCount--;
          console.error(err);
        });
    },
    removeTag(index) {
      if ( index !== -1 && !this.value[index].readonly ) {
        this.value.splice(index, 1);
        this.focusIndex--;
      }
    },
    select() {
      let item;

      // The keyword is the new tag in simple mode
      // The selected item is the new tag otherwise
      if ( this.simpleMode ) {
        item = this.keyword;
      } else {
        item = this.items[this.currentIndex];
      }

      if ( !inArray(item, this.value) ) {
        this.value.splice(this.focusIndex + 1, 0, item);
        // update focuseIndex after DOM updated
        this.$nextTick(() => {
          this.focusIndex++;
        });
      }

      this.keyword = '';
      this.currentIndex = 0;
      this.searching = false;
      this.isScrollClick = false;
      this.selected = true;
    },
    plusIndex() {
      this.currentIndex = (this.currentIndex + 1) % this.itemAmount;
    },
    minusIndex() {
      this.currentIndex = (this.currentIndex - 1 + this.itemAmount) % this.itemAmount;
    },
    selectItem(index) {
      this.currentIndex = index;
      this.isScrollClick = false;
      this.select();
    },
    stopHandleInput(e) {
      // when click to select item, the blur event of input will fire before the click event of the select item
      // but the click event should be handled first
      // so add 200ms delay
      const delay = 200;

      setTimeout(() => {
        if ( this.isScrollClick ) {
          return;
        }

        this.searching = false;
        if ( this.keyword === '' ) {
          this.selectedItem = '';
        }
      }, delay);
    },
    showNoResult() {
      return !this.simpleMode
        && this.keyword
        && !this.requestCount
        && this.items.length === 0;
    },
    moveLeft() {
      const focusIndex = this.focusIndex;
      const maxIndex = this.tagsToShow.length || -1;

      if ( focusIndex === -1 ) {

        if ( maxIndex !== -1 ) {
          this.focusIndex = maxIndex - 1;
        }
      } else {
        this.focusIndex--;
      }
    },
    moveRight() {
      const focusIndex = this.focusIndex;
      const maxIndex = this.tagsToShow.length || -1;

      if ( focusIndex === maxIndex - 1 ) {
        if ( maxIndex !== -1 ) {
          this.focusIndex = - 1;
        }
      } else {
        this.focusIndex++;
      }
    }
  }
};
</script>
<style scoped lang="sass">
.tag-input-container {
    position: relative;
    z-index: 1000;
    user-select: none;
    box-sizing: border-box;
    padding: 0 5px 3px 5px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    outline: none;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    min-width: 200px;
    min-height: 28px;
    &::after {
        content: '';
        display: block;
        clear: both;
    }
    &:focus {
        outline: none;
    }
    &.focus {
        border-color: #66afe9;
    }
    .spinner {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%) scale(0.5);
    }
    .search-result-container {
        padding: 0;
        margin: 10px 0;
        border: 1px solid #66afe9;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        border-radius: 5px;
        background-color: white;
        cursor: pointer;
        list-style: none;
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        overflow: auto;
        .search-result-item {
            padding: 5px 10px;
            text-align: left;
            position: relative;
            &.highlight {
                background: #eee;
            }
            &.selected {
                font-weight: 600;
                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    width: 5px;
                    height: 10px;
                    border: 2px solid #168ddf;
                    border-left: none;
                    border-top: none;
                    transform: rotate(45deg) translate(-50%, -50%);
                }
            }
        }
    }
}
</style>
<style>
.spinner svg path {
    fill: #d9d9d9;
}
</style>
