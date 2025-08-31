<template>
  <view class="shop-page">
    <!-- 顶部横幅 + 城市 + 搜索条 -->
    <view class="banner">
      <image class="banner-img" :src="bannerUrl" mode="aspectFill" />
      <view class="top-bar">
        <text class="loc">📍 {{ city }}</text>
        <view class="search" @click="goSearch">🔍 请输入关键字</view>
      </view>
    </view>

    <!-- 分类chips -->
    <scroll-view class="chip-row" scroll-x>
      <view v-for="(c,i) in cats" :key="i" class="chip" :class="{active: curCat===i}" @click="curCat=i">{{ c }}</view>
    </scroll-view>

    <!-- 商品栅格 两列 -->
    <scroll-view scroll-y class="goods-area">
      <view class="card" v-for="g in goods" :key="g.id" @click="viewProduct(g)">
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
  </view>
 </template>

<script>
export default {
  name: 'ShopPage',
  data() {
    return {
      city: '深圳市',
      bannerUrl: 'https://images.unsplash.com/photo-1612010167108-3e6bff0e3c70?q=80&w=1600',
      cats: ['小车','卡车','吉普','摩托车','越野','其他'],
      curCat: 0,
      goods: []
    }
  },
  methods: {
    viewProduct(product) {
      uni.showToast({
        title: `查看${product.name}`,
        icon: 'none'
      })
    },
    goSearch(){ uni.navigateTo({ url:'/pages/points/search' }) },
    mockGoods(){
      const imgs=[
        'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=800',
        'https://images.unsplash.com/photo-1612010167108-3e6bff0e3c70?q=80&w=800',
        'https://images.unsplash.com/photo-1584624274612-9b3e2e5c12e2?q=80&w=800',
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=800'
      ]
      return imgs.map((img,i)=>({ id:i+1, img, title:'LED 轮环灯RGB 带 APP 和遥控霓虹灯 带转向信号和制动功', price:'68.00', asin:'BOCXNW7X2', name:'LED 灯' }))
    }
  },
  onLoad() {
    this.goods = this.mockGoods()
  }
}
</script>

<style scoped>
.shop-page{background:#000;min-height:100vh;color:#fff}
.banner{position:relative;height:180px}
.banner-img{position:absolute;inset:0;width:100%;height:100%}
.top-bar{position:absolute;left:12px;right:12px;top:12px;display:flex;align-items:center;gap:10px}
.loc{background:rgba(0,0,0,.5);border:1px solid #333;border-radius:16px;padding:6px 10px}
.search{flex:1;background:#2a2a2a;border:1px solid #444;border-radius:22px;color:#cfcfcf;padding:8px 14px}
.chip-row{white-space:nowrap;padding:12px 12px 8px}
.chip{display:inline-flex;align-items:center;justify-content:center;padding:8px 16px;margin-right:10px;background:#2a2a2a;border:1px solid #444;border-radius:12px;color:#cfcfcf}
.chip.active{background:#3a3a3a;color:#fff}
.goods-area{padding:6px 10px 90px}
.card{background:#121212;border:1px solid #2f2f2f;border-radius:18px;overflow:hidden;margin:0 6px 12px 6px;width:calc(50% - 12px);display:inline-block;vertical-align:top}
.cover{width:100%;height:180px}
.info{padding:10px}
.title{display:block;line-height:1.4}
.price-row{display:flex;align-items:center;justify-content:space-between;margin:6px 0}
.price{color:#ff4d4f;font-weight:800}
.asin{opacity:.7}
</style>
