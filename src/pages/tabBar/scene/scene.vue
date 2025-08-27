<template>
  <view class="scene-page">
    <text class="page-title">场景设置</text>
    
    <view class="scene-grid">
      <view 
        v-for="(scene, index) in scenes" 
        :key="index"
        class="scene-item"
        @click="selectScene(index)"
      >
        <text class="scene-icon">{{ scene.icon }}</text>
        <text class="scene-name">{{ scene.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'ScenePage',
  data() {
    return {
      scenes: [
        { icon: '🏙️', name: '城市驾驶' },
        { icon: '🛣️', name: '高速公路' },
        { icon: '🌄', name: '乡村道路' },
        { icon: '🅿️', name: '停车场' },
        { icon: '🌙', name: '夜间驾驶' },
        { icon: '⚡', name: '自定义' }
      ]
    }
  },
  methods: {
    selectScene(index) {
      uni.showToast({
        title: `已选择${this.scenes[index].name}`,
        icon: 'success'
      })
    }
  },
  onLoad() {
    console.log('场景页面加载')
  }
}
</script>

<style scoped>
.scene-page {
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

.scene-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.scene-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #1a1a1a;
  border-radius: 12px;
  border: 1px solid #333333;
}

.scene-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.scene-name {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
}
</style>
