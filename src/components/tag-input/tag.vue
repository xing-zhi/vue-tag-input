<template>
  <div class="tag-input-tag">
    {{ tag }}
    <span class="tag-input-tag-remove" @click="removeTag">&times;</span>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeTag() {
      this.$emit('remove-tag', this.index);
    }
  }
};
</script>
<style>
.tag-input-tag {
  float: left;
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: default;
  float: left;
  line-height: 20px;
  height: 20px;
  max-width: 99%;
  padding: 0 20px 0 10px;
  margin-top: 3px;
  margin-right: 4px;
  font-size: 14px;
  background-color: #f3f3f3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.tag-input-tag-remove {
  position: absolute;
  right: 5px;
  cursor: pointer;
  padding-left: 4px;
  vertical-align: baseline;
}
</style>
