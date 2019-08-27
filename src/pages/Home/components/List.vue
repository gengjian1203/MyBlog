<template>
  <div class="list-wrap">
    <div class="list-content">
      <div class="list-title border-bottom">
        List title
      </div>
      <ul class="list-data">
        <router-link tag="li" :to="'/Paper/' + '00001'" class="list-item border-bottom">
          11111
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeList'
}

</script>

<style lang="less" scoped>

@import "~style/normal.less";

.list-wrap {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background: @common-bg;
  padding: 0 @common-space @common-space @common-space;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: .05rem;
    height: @list-h;
    background: @common-clr;
  }
  .list-content {
    width: 100%;
    background: #ffffff;
    border-radius: @common-radius;
    .list-title {
      width: 100%;
      height: @list-h;
      line-height: @list-h;
      padding: 0 @common-space;
    }
  }
  .list-data {
    width: 100%;
    .list-item {
      width: 100%;
      height: @list-h;
      line-height: @list-h;
      padding: 0 @common-space;
    }
  }
}

</style>
