<template>
<div class="left-nav">
 <div class="logo">
    场地<span>预订</span>
 </div>
 <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#409EFF">
     <router-link to='/'><el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">预订主页</span>
      </el-menu-item></router-link> 
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>项目管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/pmpage"><el-menu-item index="2-1">项目管理</el-menu-item></router-link> 
          <router-link to="/addpm"> <el-menu-item index="2-2">添加项目</el-menu-item></router-link> 
         
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">基本设置</span>
      </el-menu-item>
    </el-menu>
</div>
  
</template>

<script>
export default {
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
  .logo {
    width: 199px;
    height: 80px;
    line-height: 80px;
    /* text-align: center; */
    font-size: 28px;
    background-color:#000;
    color: #c0c0c0;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .logo span {
    color:#409EFF;
  }

  .left-nav {
    width: 200px;
    float: left;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    z-index: 100;
  }

  .left-nav .el-menu {
    height: 100%;
  }
  .el-submenu .el-menu-item {
    min-width: 100px;
  }
</style>