<template>
  <el-container>
    <el-aside :width="isCollapse?'64px':'250px'" class="aside">
      <div class="logo">
        <h1 v-if="isShowTitle">人力资源管理系统</h1>
      </div>
      <el-row class="tac">
        <el-col>
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#25364A"
            font-size="20px"
            text-color="#708CA4"
            :collapse = 'isCollapse'
            :collapse-transition="false">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header class="header">
        <el-button :icon="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" size="mini" @click="triggerAside"/>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      isShowTitle: true,
      isCollapse: false
    }
  },
  methods: {
    triggerAside: function () {
      this.isShowTitle = !this.isShowTitle
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped lang="less">
  .el-container{
    button{
      cursor: pointer;
    }
    height: 100%;
    .aside{
      color:#708CA4;
      background-color: #25364A;//#3783B5
      .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 60px;
      }
      .el-menu{
        border:none;
      }
    }
    .header{
      display: flex;
      align-items: center;
      background-color: #3783B5;
    }
  }
</style>
