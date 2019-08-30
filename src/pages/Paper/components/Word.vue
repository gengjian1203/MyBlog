<template>
  <div class="word-wrap">
    <div>
      <div class="word-wrapper" ref="scroll">
        <mavon-editor ref="editor" class="word-content" v-html="source" :subfield="false" defaultOpen="preview" :toolbarsFlag="false" :boxShadow="false"/>
      </div>
    </div>
    <common-footer class="word-footer"></common-footer>
  </div>
</template>

<script>

import axios from 'axios'
import marked from 'marked'
import DOMPurify from 'dompurify'
import BScroll from '@better-scroll/core'
import CommonFooter from 'Common/Footer'

export default {
  name: 'PaperWord',
  props: {
    strUrl: String
  },
  data () {
    return {
      source: ''
    }
  },
  components: {
    CommonFooter
  },
  methods: {
    // 刷新Scroll控件
    refreshScroll () {
      setTimeout(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.scroll, {
            click: true,
            tap: true
          })
        } else {
          this.scroll.refresh()
          this.scroll.scrollTo(0, 0)
        }
      }, 100)
    },
    getWordInfo () {
      axios.get(this.strUrl).then(this.getWordInfoSucc)
    },
    getWordInfoSucc (res) {
      // 页面加载md数据，并且进行杀菌处理
      this.source = DOMPurify.sanitize(marked(res.data || ''))
      // 初始化BScroll组件
      // this.$refs.editor.$nextTick(() => {
      //   this.refreshScroll()
      // })
      setTimeout(() => {
        this.refreshScroll()
      }, 500)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getWordInfo()
    })
  },
  activated () {
    this.$nextTick(() => {
      this.getWordInfo()
    })
  }
}

</script>

<style lang="less" scoped>

@import "~style/normal.less";

.word-wrap /deep/ .language,
.word-wrap /deep/ .language-bash,
.word-wrap /deep/ .language-json,
.word-wrap /deep/ .language-html,
.word-wrap /deep/ .language-css,
.word-wrap /deep/ .language-javascript,
.word-wrap /deep/ .language-c,
.word-wrap /deep/ .language-python,
.word-wrap /deep/ .language-java,
.word-wrap /deep/ .language-matlab,
 {
  overflow: hidden;
  width: 100%;
  white-space: pre-wrap;
}

.word-wrap {
  .word-wrapper {
    overflow: hidden;
    box-sizing: border-box;
    position: fixed;
    top: calc(@title-h * 2);
    left: 0;
    right: 0;
    bottom: @footer-h;
    background: @common-bg;
    width: 100%;
    .word-content {
      box-sizing: border-box;
      width: 100%;
      padding: @common-space;
      background: @common-bg;
    }
  }
  .word-footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

</style>
