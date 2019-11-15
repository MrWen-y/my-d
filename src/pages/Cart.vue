<template>
  <div>
    <div class="header">
      <div class="header-content">
        <i class="el-icon-arrow-left"></i>
        <span class="h-m">
          <h3>购物车<span>(3)</span></h3>
        </span>
        <span class="h-r">编辑</span>
        <span class="h-r2">客服</span>
      </div>
    </div>
    <div class="txt"><i class="iconfont"></i><b>文轩现货</b></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {position: fixed;left: 0;top: 0;width: 100%;z-index: 201;;}
.header-content{position: relative;overflow: hidden;height: 2.2rem;padding: 0 2rem;background-color: #fafafa;}
.header-content i {display: block;width: 2rem;height: 2rem;font-size: 1.8rem; position: absolute;left: 0;top: 0;text-align: center;color: #f41e33;}
.h-m h3{line-height: 2.2rem;color: #262626;text-align: center;font-weight:normal}
.h-r{display: block;width: 1.9rem;height: 1.32rem;position: absolute;top: 0.4rem;right: 5rem;text-align: center;line-height: 1.32rem;font-size: 14px;color: #666;}
.h-r2{display: block;width: 1.9rem;height: 1.32rem;position: absolute;top: 0.4rem;right: 1rem;text-align: center;line-height: 1.32rem;font-size: 14px;color: #666;}
</style>