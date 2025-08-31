<template>
  <view class="search-page">
    <view class="search-bar">
      <input v-model="kw" class="input" placeholder="请输入关键字" confirm-type="search" @confirm="doSearch" />
    </view>
    <scroll-view scroll-y class="grid">
      <view class="card" v-for="g in list" :key="g.id">
        <image class="cover" :src="g.img" mode="aspectFill" />
        <view class="info">
          <text class="title">{{ g.title }}</text>
          <view class="price-row"><text class="price">$ {{ g.price }}</text><text class="cart">🛒</text></view>
          <text class="asin">ASIN: {{ g.asin }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data(){ return { kw:'', list: [] } },
  onLoad(){ this.list=this.mock() },
  methods:{
    doSearch(){ uni.showToast({ title:'搜索：'+(this.kw||'全部'), icon:'none' }) },
    mock(){
      const imgs=[
        'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=800',
        'https://images.unsplash.com/photo-1612010167108-3e6bff0e3c70?q=80&w=800'
      ]
      return imgs.map((img,i)=>({ id:i+1, img, title:'LED 轮环灯RGB 带 APP 和遥控霓虹灯 带转向信号和制动功', price:'68.00', asin:'BOCXNW7X2' }))
    }
  }
}
</script>

<style scoped>
.search-page{background:#000;min-height:100vh;color:#fff;padding-top:10px}
.search-bar{padding:0 16px 10px}
.input{width:100%;background:#2a2a2a;border:1px solid #444;border-radius:22px;color:#fff;padding:10px 14px}
.grid{padding:0 12px 20px}
.card{background:#121212;border:1px solid #2f2f2f;border-radius:18px;overflow:hidden;margin:0 6px 12px 6px;width:calc(50% - 12px);display:inline-block;vertical-align:top}
.cover{width:100%;height:180px}
.info{padding:10px}
.title{display:block;line-height:1.4}
.price-row{display:flex;justify-content:space-between;align-items:center;margin:6px 0}
.price{color:#ff4d4f;font-weight:800}
.asin{opacity:.7}
</style>

