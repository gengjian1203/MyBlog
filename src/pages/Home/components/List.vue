<template>
  <div class="list-wrap">
    <div class="list-content">
      <div class="list-title border-bottom">
        {{this.title}}<span class="list-title-total">（共 {{list.length}} 篇）</span>
      </div>
      <ul class="list-data">
        <router-link
          v-for="(item, index) of list"
          :key="item.id"
          v-if="index < 3"
          tag="li"
          :to="'/Paper/' + item.id"
          class="list-item border-bottom"
        >
          <p class="list-item-left">{{item.name}}</p>
          <p class="list-item-right">{{item.date}}</p>
        </router-link>
        <router-link tag="div" :to="'/Icon/' + id" class="list-item list-more">
          点击查看更多
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeList',
  props: {
    index: Number,
    title: String,
    list: Array
  },
  computed: {
    id () {
      return 20000 + this.index
    }
  }
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
      box-sizing: border-box;
      width: 100%;
      height: @list-h;
      line-height: @list-h;
      padding: 0 @common-space;
      @ellipsis();
      .list-title-total {
        margin-left: @common-space;
      }
    }
  }
  .list-data {
    width: 100%;
    .list-item {
      box-sizing: border-box;
      width: 100%;
      height: @list-h;
      line-height: @list-h;
      padding: 0 @common-space;
      .list-item-left {
        width: 70%;
        float: left;
        text-align: left;
        @ellipsis();
      }
      .list-item-right {
        width: 30%;
        float: right;
        text-align: right;
        @ellipsis();
      }
    }
    .list-more {
      text-align: center;
    }
  }
}

</style>
