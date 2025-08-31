<template>
  <view class="connect-page">
    <!-- 搜索中提示 -->
    <view v-if="state==='searching'" class="hint-card">
      <text class="spinner">○</text>
      <text class="hint-text">正在搜索可发现设备...</text>
    </view>

    <!-- 权限未开弹窗 -->
    <view v-if="showPermModal" class="modal-mask" @click="closePerm">
      <view class="modal" @click.stop>
        <view class="modal-row"><text class="bt">🔵</text><text class="modal-title">蓝牙权限未开启，无法发现设备</text></view>
        <button class="modal-btn primary" @click="openPerm">好</button>
      </view>
    </view>

    <!-- 搜索失败 -->
    <view v-if="state==='empty'" class="fail-wrap">
      <text class="fail-title">搜索失败</text>
      <view class="fail-card">
        <text class="fail-dot">✖</text>
        <text class="fail-text">未发现可匹配的设备</text>
      </view>
      <text class="tips">您可以尝试以下方法：</text>
      <view class="step">1  长按设备电源进入配网...</view>
      <view class="step">2  重启手机蓝牙...</view>
      <view class="bottom-bar">
        <button class="primary-btn" @click="startSearch">重新搜索</button>
      </view>
    </view>

    <!-- 列表 -->
    <scroll-view v-if="state==='list'" scroll-y class="list">
      <view class="dev-item" v-for="(d,i) in devices" :key="i">
        <image class="dev-cover" :src="d.icon" mode="aspectFill" />
        <view class="dev-info">
          <text class="dev-name">{{ d.name }}</text>
          <text class="dev-mac">MAC： {{ d.mac }}</text>
        </view>
        <button class="link-btn" @click="connect(d)">连接</button>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data(){
    return {
      state: 'searching', // searching | empty | list
      showPermModal: false,
      devices: []
    }
  },
  onLoad(){
    this.mockFlow()
  },
  methods:{
    mockFlow(){
      // 1. 先模拟弹权限
      setTimeout(()=>{ this.showPermModal = true }, 800)
      // 2. 关闭后继续搜索，给到空态，再到列表
      setTimeout(()=>{ this.state = 'empty' }, 2400)
      setTimeout(()=>{ this.state = 'list'; this.devices = this.genMock() }, 4000)
    },
    startSearch(){
      this.state = 'searching'
      setTimeout(()=>{ this.state='list'; this.devices=this.genMock() }, 1200)
    },
    openPerm(){ this.showPermModal=false },
    closePerm(){ this.showPermModal=false },
    genMock(){
      const icon = 'https://images.unsplash.com/photo-1606813907291-76a4d0df2c3b?w=200&h=200&fit=crop'
      return Array.from({length:4}).map((_,i)=>({ name:'LED', mac:'246576315654', icon }))
    },
    connect(d){ uni.showToast({ title: '已连接 '+d.name, icon:'none' }) }
  }
}
</script>

<style scoped>
.connect-page{background:#000;min-height:100vh;color:#fff;padding:16px}
.hint-card{display:flex;align-items:center;gap:10px;background:#191919;border:1px solid #333;border-radius:12px;padding:14px}
.spinner{opacity:.6}
.hint-text{color:#cfcfcf}
.modal-mask{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center}
.modal{width:84%;background:#181818;border:1px solid #333;border-radius:16px;padding:18px}
.modal-row{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.bt{font-size:18px}
.modal-title{font-size:15px}
.modal-btn.primary{background:#ff5a24;color:#fff;border:none;border-radius:10px;padding:12px 0}
.fail-wrap{padding-top:8px}
.fail-title{font-size:24px;font-weight:700;margin-bottom:12px}
.fail-card{display:flex;align-items:center;gap:10px;background:#1a1a1a;border:1px solid #2f2f2f;border-radius:12px;padding:14px;margin-bottom:16px}
.fail-dot{color:#ff4d4f}
.fail-text{color:#cfcfcf}
.tips{display:block;margin:10px 0 8px 0;color:#cfcfcf}
.step{background:#1a1a1a;border:1px solid #2f2f2f;border-radius:12px;padding:16px;margin-bottom:12px}
.bottom-bar{position:fixed;left:0;right:0;bottom:20px;padding:0 16px}
.primary-btn{width:100%;background:#ff5a24;border:none;border-radius:14px;padding:14px 0;color:#fff}
.list{max-height:calc(100vh - 20px)}
.dev-item{display:flex;align-items:center;background:#1a1a1a;border:1px solid #2f2f2f;border-radius:16px;padding:14px;margin-bottom:14px}
.dev-cover{width:48px;height:48px;border-radius:10px;margin-right:12px}
.dev-info{flex:1}
.dev-name{font-size:16px;font-weight:600}
.dev-mac{display:block;color:#bdbdbd;margin-top:6px}
.link-btn{background:#ff5a24;color:#fff;border:none;border-radius:999px;padding:10px 16px}
</style>

