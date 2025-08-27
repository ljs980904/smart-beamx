<template>
  <view class="mode-page">
    <text class="page-title">灯光模式</text>
    
    <view class="mode-list">
      <view 
        v-for="(mode, index) in modes" 
        :key="index"
        class="mode-item"
        :class="{ active: activeMode === index }"
        @click="selectMode(index)"
      >
        <text class="mode-icon">{{ mode.icon }}</text>
        <text class="mode-name">{{ mode.name }}</text>
        <text class="mode-desc">{{ mode.desc }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'ModePage',
  data() {
    return {
      activeMode: 0,
      modes: [
        { icon: '🌟', name: '标准模式', desc: '日常驾驶的标准照明' },
        { icon: '⚡', name: '运动模式', desc: '增强照明强度和范围' },
        { icon: '🌱', name: '节能模式', desc: '降低功耗延长使用寿命' },
        { icon: '🌧️', name: '雨雾模式', desc: '恶劣天气优化照明' }
      ]
    }
  },
  methods: {
    selectMode(index) {
      this.activeMode = index
      uni.showToast({
        title: `已切换到${this.modes[index].name}`,
        icon: 'success'
      })
    }
  },
  onLoad() {
    console.log('模式页面加载')
  }
}
</script>

<style scoped>
.mode-page {
  background-color: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 24px;
  display: block;
}

.mode-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mode-item {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #333333;
}

.mode-item.active {
  border-color: #007AFF;
  background-color: rgba(0, 122, 255, 0.1);
}

.mode-icon {
  font-size: 32px;
  margin-bottom: 12px;
  display: block;
}

.mode-name {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 8px;
  display: block;
}

.mode-desc {
  font-size: 14px;
  color: #999999;
}
</style>
