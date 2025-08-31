<template>
  <view class="points-page">
    <view class="hero">
      <view class="score-card">
        <view class="left">
          <text class="score">{{ points }}</text>
          <text class="score-unit">积分</text>
        </view>
        <view class="right column">
          <button class="link" @click="goRules">积分奖励规则 ></button>
          <button class="plain" @click="goDetail">积分明细</button>
        </view>
      </view>
      <view class="checkin">
        <view class="days">
          <view class="day" v-for="d in 7" :key="d" :class="{done: d<=checkedDays}"></view>
        </view>
        <button class="checkin-btn" :disabled="checkedToday" @click="doCheckin">{{ checkedToday ? '已打卡' : '今日打卡' }}</button>
      </view>
    </view>

    <view class="task-card">
      <text class="section-title">做任务得积分</text>
      <view class="task-row" v-for="t in tasks" :key="t.id">
        <text class="task-name">{{ t.name }}</text>
        <view class="task-right">
          <text class="task-add">+{{ t.add }}</text>
          <button class="task-btn" @click="takeTask(t)">{{ t.taken ? '已领取' : (t.action || '领积分') }}</button>
        </view>
      </view>
    </view>

    <view class="tabs">
      <view class="tab" v-for="(c,i) in tabs" :key="i" :class="{active: curTab===i}" @click="curTab=i">{{ c }}</view>
    </view>

    <scroll-view scroll-y class="goods-grid">
      <view class="card" v-for="g in goods" :key="g.id">
        <image class="cover" :src="g.img" mode="aspectFill" />
        <view class="info">
          <text class="title">{{ g.title }}</text>
          <view class="price-row">
            <text class="price">$ {{ g.price }}</text>
            <text class="cart">🛒</text>
          </view>
          <text class="asin">ASIN: {{ g.asin }}</text>
        </view>
      </view>
    </scroll-view>

    <view class="search-bar-fixed">
      <view class="search" @click="goSearch">🔍 请输入关键字</view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return {
      points: 2488,
      checkedDays: 1,
      checkedToday: false,
      tabs: ['精选','优惠','好物'],
      curTab: 0,
      tasks: [
        { id:1, name:'新增模式', add:100, taken:false },
        { id:2, name:'设置灯光', add:100, taken:false },
        { id:3, name:'购买商品', add:1000, taken:false, action:'做任务' }
      ],
      goods: []
    }
  },
  onLoad(){ this.goods = this.mockGoods() },
  methods:{
    goRules(){ uni.navigateTo({ url:'/pages/points/rulesText' }) },
    goDetail(){ uni.navigateTo({ url:'/pages/points/rules' }) },
    doCheckin(){ this.checkedToday=true; this.checkedDays=Math.min(7,this.checkedDays+1); this.points+=20 },
    takeTask(t){ if(t.taken) return; t.taken=true; this.points+=t.add; uni.showToast({ title:'已领取 +'+t.add, icon:'none' }) },
    goSearch(){ uni.navigateTo({ url:'/pages/points/search' }) },
    mockGoods(){
      const imgs = [
        'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=800',
        'https://images.unsplash.com/photo-1612010167108-3e6bff0e3c70?q=80&w=800',
        'https://images.unsplash.com/photo-1584624274612-9b3e2e5c12e2?q=80&w=800',
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=800'
      ]
      return imgs.map((img,i)=>({ id:i+1, img, title:'LED 轮环灯RGB 带 APP 和遥控霓虹灯 带转向信号和制动功', price:'68.00', asin:'BOCXNW7X2' }))
    }
  }
}
</script>

<style scoped>
.points-page{background:#000;min-height:100vh;color:#fff}
.hero{padding:16px}
.score-card{display:flex;justify-content:space-between;align-items:center;background:#191919;border:1px solid #333;border-radius:14px;padding:18px}
.score{font-size:36px;font-weight:800}
.score-unit{margin-left:6px;opacity:.8}
.right.column{display:flex;flex-direction:column;gap:8px}
.plain{background:transparent;border:1px solid #555;border-radius:10px;color:#fff;padding:6px 10px}
.link{background:transparent;color:#cfcfcf;padding:0}
.checkin{margin-top:12px;background:#191919;border:1px solid #333;border-radius:14px;padding:14px}
.days{display:flex;gap:10px;margin-bottom:12px}
.day{width:26px;height:26px;border-radius:6px;background:linear-gradient(180deg,#2d2d2d,#1c1c1c);border:1px solid #3b3b3b;opacity:.55}
.day.done{opacity:1;background:linear-gradient(180deg,#444,#2b2b2b)}
.checkin-btn{width:100%;background:#2a2a2a;border:1px solid #444;border-radius:10px;color:#cfcfcf;padding:12px 0}
.task-card{margin:8px 16px;background:#191919;border:1px solid #333;border-radius:14px;padding:16px}
.section-title{font-size:16px;font-weight:700;margin-bottom:10px}
.task-row{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #2a2a2a;padding:12px 0}
.task-row:first-of-type{border-top:none}
.task-name{font-size:15px}
.task-right{display:flex;align-items:center;gap:10px}
.task-add{opacity:.9}
.task-btn{background:#2a2a2a;border:1px solid #555;border-radius:16px;color:#fff;padding:6px 12px}
.tabs{display:flex;gap:10px;padding:12px 16px}
.tab{background:#2a2a2a;border:1px solid #444;border-radius:10px;color:#cfcfcf;padding:8px 14px}
.tab.active{background:#3a3a3a;color:#fff}
.goods-grid{padding:0 12px 20px}
.card{background:#121212;border:1px solid #2f2f2f;border-radius:18px;overflow:hidden;margin:0 4px 12px 4px;width:calc(50% - 8px);display:inline-block;vertical-align:top}
.cover{width:100%;height:180px}
.info{padding:12px}
.title{display:block;line-height:1.4}
.price-row{display:flex;justify-content:space-between;align-items:center;margin:6px 0}
.price{color:#ff4d4f;font-weight:800}
.asin{opacity:.7}
.search-bar-fixed{position:fixed;left:0;right:0;top:10px;display:flex;justify-content:center;pointer-events:none}
.search{pointer-events:auto;width:84%;background:#2a2a2a;border:1px solid #444;border-radius:24px;color:#cfcfcf;padding:10px 14px}
</style>
