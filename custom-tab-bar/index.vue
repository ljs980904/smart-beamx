<template>
  <view class="custom-tab-bar">
    <view 
      v-for="(item, index) in tabList" 
      :key="index"
      class="tab-item"
      :class="{ active: activeTab === index }"
      @click="switchTab(index)"
    >
      <view class="tab-icon">
        <text class="icon-text">{{ item.icon }}</text>
      </view>
      <text class="tab-text">{{ item.text }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'CustomTabBar',
  data() {
    return {
      activeTab: 0,
      tabList: [
        {
          pagePath: 'pages/tabBar/home/home',
          text: '首页',
          icon: '●'
        },
        {
          pagePath: 'pages/tabBar/mode/mode',
          text: '模式',
          icon: '◆'
        },
        {
          pagePath: 'pages/tabBar/scene/scene',
          text: '场景',
          icon: '▲'
        },
        {
          pagePath: 'pages/tabBar/shop/shop',
          text: '商城',
          icon: '■'
        },
        {
          pagePath: 'pages/tabBar/my/my',
          text: '我的',
          icon: '◉'
        }
      ]
    }
  },
  methods: {
    switchTab(index) {
      if (this.activeTab === index) return
      
      this.activeTab = index
      const item = this.tabList[index]
      
      uni.switchTab({
        url: `/${item.pagePath}`
      })
    },
    
    updateActiveTab() {
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      const route = currentPage.route
      
      const index = this.tabList.findIndex(item => item.pagePath === route)
      if (index !== -1) {
        this.activeTab = index
      }
    }
  },
  
  mounted() {
    this.updateActiveTab()
  }
}
</script>

<style scoped>
.custom-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #000000;
  border-top: 1px solid #333333;
  display: flex;
  z-index: 1000;
  padding-bottom: env(safe-area-inset-bottom);
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all 0.3s ease;
  color: #666666;
  padding: 8px 0;
}

.tab-item.active {
  color: #ffffff;
}

.tab-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  transition: all 0.3s ease;
}

.tab-item.active .tab-icon {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.icon-text {
  font-size: 18px;
}

.tab-text {
  font-size: 10px;
  line-height: 1;
}

/* 适配不同屏幕 */
@media (max-width: 750px) {
  .custom-tab-bar {
    height: 60px;
  }
  
  .tab-icon {
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }
  
  .icon-text {
    font-size: 16px;
  }
  
  .tab-text {
    font-size: 9px;
  }
}
</style>
