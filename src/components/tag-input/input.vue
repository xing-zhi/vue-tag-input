<template>
  <input type="text"
         v-model="keyword"
         @focus="onFocus(index)"
         @blur="onBlur"
         @input="input"
         @keyup.delete="del"
         style="float: left;"
         class="tag-input-input"
         :class="{ focus: focusIndex === index }"
         :style="'width:' + (tmpInput.length + 0.5) + 'em;'"/>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    focusIndex: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    onFocus: {
      type: Function,
      required: true
    },
    onBlur: {
      type: Function,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      keyword: '',
      tmpInput: '',
      prevTmpInput: ''
    };
  },
  watch: {
    focusIndex(v) {
      if ( v === this.index ) {
        this.$el.focus();
      }
    },
    selected(v) {
      if ( v ) {
        this.prevTmpInput = '';
        this.tmpInput = '';
        this.keyword = '';
      }
    }
  },
  methods: {
    input(e) {
      const value = e.target.value;

      this.$emit('input', this.keyword);
      this.prevTmpInput = this.tmpInput;
      this.tmpInput = value;
    },
    del() {
      if ( this.tmpInput ) {
        return;
      }

      if ( this.prevTmpInput ) {
        this.prevTmpInput = '';
        return;
      }

      if ( !this.prevTmpInput ) {
        this.$emit('delete', this.index);
      }
    }
  }
};
</script>
<style scoped lang="sass">
.tag-input-input {
    border: none;
    outline: none;
    line-height: 20px;
    height: 20px;
    padding: 0;
    margin-top: 3px;
    min-width: 0.1em;
    &.focus {
        min-width: 1em;
    }
    &:last-of-type {
        margin-left: 5px;
    }
}
</style>
