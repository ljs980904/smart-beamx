<template>
  <view class="list-page">
    <view class="row" v-for="s in songs" :key="s.id">
      <text class="name">{{ s.name }}</text>
      <text class="playing" v-if="s.playing">▁▂▃▅</text>
      <text class="btn">✖</text>
      <text class="btn">≡</text>
    </view>
    <button class="add">添加</button>
  </view>
</template>

<script>
export default { data:()=>({ songs:[{id:1,name:'Song 1',playing:true},{id:2,name:'Song 2'},{id:3,name:'Song 3'},{id:4,name:'Song 4'},{id:5,name:'Song 5'},{id:6,name:'Song 6'},{id:7,name:'Song 7'}] }) }
</script>

<style scoped>
.list-page{background:#000;min-height:100vh;color:#fff;padding:12px 16px}
.row{display:flex;align-items:center;border-bottom:1px solid #1f1f1f;padding:18px 0}
.name{flex:1}
.playing{margin-right:16px}
.btn{margin-left:14px}
.add{position:fixed;right:16px;top:12px;background:#2a2a2a;border:1px solid #444;border-radius:12px;color:#fff;padding:6px 12px}
</style>

