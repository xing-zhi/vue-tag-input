<template>
  <div class="tag-input-container"
       tabindex="-1"
       @keyup.up="minusIndex"
       @keyup.down="plusIndex"
       @keyup.enter.prevent="select"
       @keyup.delete="popTag"
       @focus="onFocus">
    <tag v-for="(tagItem, index) in tagsToShow"
         :key="index"
         :tag="tagItem"
         :index="index"
         @remove-tag="removeTag">
    </tag>
    <input type="text"
           v-model="keyword"
           @focus="onFocus"
           @blur="stopHandleInput"
           @input="input"
           ref="input"
           style="float: left;"
           :style="'width:' + (tmpInput.length + 1) + 'em;'"/>
    <ul v-show="items.length && keyword && searching"
        class="search-result-container"
        :style="'max-height:' + height + 'px'"
        @scroll="onScroll">
      <li v-for="(item, index) in items"
          :key="index"
          class="search-result-item"
          @click="selectItem(index)"
          :class="{ highlight: currentIndex === index }">
        {{ item[labelKey] }}
      </li>
    </ul>
    <ul class="search-result-container" v-show="showNoResult()">
      <li class="search-result-item text-danger">没有结果，请更换关键词</li>
    </ul>
  </div>
</template>

<script>
const inArray = (item, arr) => arr.indexOf(item) !== -1;

import tag from './tag';

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
    }
  },
  components: {
    tag
  },
  data() {
    return {
      items: [],
      currentIndex: 0,
      searching: false,
      requestApi: false,
      keyword: '',
      prevKeyword: '',
      tmpInput: '',
      prevTmpInput: '',
      isScrollClick: false
    };
  },
  computed: {
    itemAmount() {
      return this.items.length;
    },
    tagsToShow() {
      return this.value.map((item) => item[this.labelKey]);
    }
  },
  watch: {
    keyword(v, oldV) {
      this.prevKeyword = oldV;

      if ( v ) {
        this.search();
      }
    },
    tmpInput(v, oldV) {
      // 用于判断回删tag
      this.prevTmpInput = oldV;
    }
  },
  methods: {
    inArray,
    onScroll() {
      this.isScrollClick = true;
    },
    input(e) {
      this.tmpInput = e.target.value;
    },
    onFocus() {
      this.$refs.input.focus();
      if ( this.keyword ) {
        this.search();
      }
    },
    search() {
      this.searching = true;
      this.requestApi = true;

      // 如果两次关键词相同，不调用接口，适用于已经输入关键词后的二次获取焦点
      if ( this.keyword === this.prevKeyword ) {
        return;
      }

      Promise.resolve(this.getItems(this.keyword))
        .then((items) => {
          this.requestApi = false;
          this.items = items;
        })
        .catch((err) => {
          this.requestApi = false;
          console.error(err);
        });
    },
    removeTag(index) {
      this.value.splice(index, 1);
    },
    popTag() {
      if ( !this.prevTmpInput && !this.tmpInput ) {
        this.value.pop();
        return;
      }
      if ( this.prevTmpInput && !this.tmpInput ) {
        this.prevTmpInput = '';
        return;
      }
    },
    select() {
      const item = this.items[this.currentIndex];

      if ( !inArray(item, this.value) ) {
        this.value.push(item);
      }

      this.keyword = '';
      this.currentIndex = 0;
      this.searching = false;
      this.tmpInput = '';
      this.isScrollClick = false;

      setTimeout(() => {
        this.prevTmpInput = '';
      });
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
    stopHandleInput() {
        // 增加200ms的延时，以应对点击选择的情况，因为这种情况下input会首先失去焦点，触发这个事件
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
      return this.keyword
        && !this.requestApi
        && this.items.length === 0;
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
    &::after {
        content: '';
        display: block;
        clear: both;
    }
    &:focus {
        outline: none;
    }
    input {
        border: none;
        outline: none;
        line-height: 20px;
        height: 20px;
        padding: 0;
        margin-top: 3px;
        min-width: 1em;
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
            &.highlight {
                background: #eee;
            }
        }
    }
}
</style>