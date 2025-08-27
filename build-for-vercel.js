const fs = require('fs');
const path = require('path');

// 创建构建目录
const distDir = 'dist';
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 创建基本的HTML文件
const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SmartBeamX - 智能汽车灯控制</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #000;
      color: #fff;
      overflow-x: hidden;
    }
    .app-container {
      min-height: 100vh;
      background: #000;
    }
    .header {
      padding: 40px 20px 20px;
      text-align: center;
      background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
    }
    .logo {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      background: linear-gradient(45deg, #fff, #ccc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      color: #999;
      font-size: 14px;
    }
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding: 40px 20px;
      max-width: 400px;
      margin: 0 auto;
    }
    .feature-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 30px 20px;
      text-align: center;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      cursor: pointer;
    }
    .feature-card:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: translateY(-2px);
    }
    .feature-icon {
      font-size: 32px;
      margin-bottom: 15px;
      display: block;
    }
    .feature-title {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
    .coming-soon {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.1);
      padding: 12px 24px;
      border-radius: 20px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ccc;
      font-size: 14px;
    }
    .github-link {
      position: fixed;
      top: 20px;
      right: 20px;
      color: #fff;
      text-decoration: none;
      background: rgba(255, 255, 255, 0.1);
      padding: 10px;
      border-radius: 10px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }
    .github-link:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  </style>
</head>
<body>
  <div class="app-container">
    <a href="https://github.com/fatman1221/smart-beamx" class="github-link" target="_blank">
      📱 GitHub
    </a>
    
    <div class="header">
      <div class="logo">SmartBeamX</div>
      <div class="subtitle">智能汽车灯控制系统</div>
    </div>
    
    <div class="feature-grid">
      <div class="feature-card">
        <span class="feature-icon">🏠</span>
        <div class="feature-title">首页</div>
      </div>
      
      <div class="feature-card">
        <span class="feature-icon">🔧</span>
        <div class="feature-title">模式</div>
      </div>
      
      <div class="feature-card">
        <span class="feature-icon">🎬</span>
        <div class="feature-title">场景</div>
      </div>
      
      <div class="feature-card">
        <span class="feature-icon">🛒</span>
        <div class="feature-title">商城</div>
      </div>
      
      <div class="feature-card">
        <span class="feature-icon">👤</span>
        <div class="feature-title">我的</div>
      </div>
      
      <div class="feature-card">
        <span class="feature-icon">⚙️</span>
        <div class="feature-title">设置</div>
      </div>
    </div>
    
    <div class="coming-soon">
      📱 uniapp版本开发中，敬请期待
    </div>
  </div>
  
  <script>
    // 简单的交互效果
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('click', function() {
        const title = this.querySelector('.feature-title').textContent;
        alert('即将跳转到' + title + '模块');
      });
    });
    
    // 添加一些动态效果
    function addParticles() {
      const container = document.querySelector('.app-container');
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = \`
          position: fixed;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          pointer-events: none;
          left: \${Math.random() * 100}%;
          top: \${Math.random() * 100}%;
          animation: float \${3 + Math.random() * 4}s infinite linear;
        \`;
        container.appendChild(particle);
      }
    }
    
    // CSS动画
    const style = document.createElement('style');
    style.textContent = \`
      @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
      }
    \`;
    document.head.appendChild(style);
    
    addParticles();
    setInterval(addParticles, 5000);
    
    console.log('🚀 SmartBeamX 演示版本已加载');
    console.log('📱 GitHub: https://github.com/fatman1221/smart-beamx');
  </script>
</body>
</html>`;

// 写入HTML文件
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);

console.log('✅ 构建完成！输出目录: dist/');
console.log('📱 SmartBeamX 演示版本已准备好部署到 Vercel');
