<template>
  <div class="home-page">
    <div class="page-container">
      <!-- 导航栏 -->
      <!-- <nav class="navbar">
        <div class="logo">副业 365</div>
        <div class="nav-links">
          <a href="#" class="nav-item">最新文章</a>
          <a href="#" class="nav-item">副业工具箱</a>
          <a href="#" class="nav-item">关于</a>
        </div>
        <div class="right-logo">天天搞钱</div>
      </nav> -->

      <!-- 主标题区域 -->
      <!-- <div class="hero-section">
        <h1 class="hero-title">
          <span class="line-1">不要让工资成为</span>
          <span class="line-2">唯一的收入来源</span>
        </h1>
      </div> -->

      <!-- 项目卡片网格 -->
      <div class="projects-grid">
        <div class="project-card card-1" v-for="(project, index) in projects" :key="index">
          <div class="project-number">{{ index + 1 }}</div>
          <div class="project-content">
            <span class="project-icon">{{ project.icon }}</span>
            <span class="project-name">{{ project.name }}</span>
          </div>
          <div class="project-price" v-if="project.price">{{ project.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  { icon: '📥', name: '副业资料领取', price: null },
  { icon: '🤖', name: 'AI 资料大全', price: null },
  { icon: '🚀', name: '任推邦平台入口', price: null },
  { icon: '⚡', name: '蜂小推平台入口', price: null },
  { icon: '📈', name: '项小推平台入口', price: null },
  { icon: '🚗', name: '滴滴司机', price: '¥808' },
  { icon: '🛍️', name: '淘宝 1 分购', price: '¥18' },
  { icon: '💬', name: '千问推广', price: '¥10' },
  { icon: '✨', name: '即梦 AI', price: '¥11' },
  { icon: '☁️', name: '夸克网盘', price: '¥7' },
  { icon: '💾', name: '百度网盘', price: '¥12' },
  { icon: '⚡', name: '迅雷网盘', price: '¥15' },
  { icon: '🌐', name: '迅雷浏览器', price: '¥10' },
  { icon: '📦', name: 'UC 网盘', price: '¥10' },
  { icon: '🚗', name: '风韵出行/妥妥 E 行', price: null },
  { icon: '➕', name: '持续增加项目', price: null }
])
</script>

<style>
/* 全局样式，覆盖 VitePress 默认布局 */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.VPHome, .VPPage, .VPDoc {
  padding: 0 !important;
}

.VPHome > main, .VPPage > main {
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100% !important;
}

.VPNavBar, .VPSidebar {
  background: rgba(26, 26, 46, 0.95) !important;
  backdrop-filter: blur(10px);
}
</style>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  position: relative;
  overflow-x: hidden;
  width: 100%;
}

.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: transparent;
}

/* 导航栏 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto 2rem;
}

.logo,
.right-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #a78bfa;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-item {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s;
  position: relative;
}

.nav-item:hover {
  color: #a78bfa;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #a78bfa;
  transition: width 0.3s;
}

.nav-item:hover::after {
  width: 100%;
}

/* 主标题区域 */
.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  letter-spacing: 2px;
}

.line-1 {
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 107, 107, 0.3);
}

.line-2 {
  background: linear-gradient(135deg, #5f27cd 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(167, 139, 250, 0.3);
}

/* 项目卡片网格 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 0;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.4), rgba(254, 202, 87, 0.3));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.project-card:hover {
  transform: translateY(-3px) scale(1.02);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

/* 为不同卡片添加不同的边框颜色 */
.project-card.card-1:nth-child(odd)::before {
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.5), rgba(254, 202, 87, 0.3));
}

.project-card.card-1:nth-child(even)::before {
  background: linear-gradient(135deg, rgba(78, 205, 196, 0.5), rgba(107, 107, 255, 0.3));
}

.project-number {
  background: linear-gradient(135deg, #feca57 0%, #ff6b6b 100%);
  color: #0f0c29;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.85rem;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(254, 202, 87, 0.3);
}

.project-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
}

.project-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.project-name {
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.project-price {
  background: rgba(255, 255, 255, 0.1);
  color: #4ecdc4;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  white-space: nowrap;
  border: 1px solid rgba(78, 205, 196, 0.4);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 10px rgba(78, 205, 196, 0.2);
  transition: all 0.3s;
}

.project-price:hover {
  background: rgba(78, 205, 196, 0.2);
  box-shadow: 0 6px 15px rgba(78, 205, 196, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .nav-links {
    gap: 1.5rem;
  }
  
  .project-card {
    padding: 0.8rem 1.2rem;
  }
}

/* 添加微动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card {
  animation: fadeInUp 0.6s ease-out;
}

.project-card:nth-child(1) { animation-delay: 0.05s; }
.project-card:nth-child(2) { animation-delay: 0.1s; }
.project-card:nth-child(3) { animation-delay: 0.15s; }
.project-card:nth-child(4) { animation-delay: 0.2s; }
.project-card:nth-child(5) { animation-delay: 0.25s; }
.project-card:nth-child(6) { animation-delay: 0.3s; }
.project-card:nth-child(7) { animation-delay: 0.35s; }
.project-card:nth-child(8) { animation-delay: 0.4s; }
.project-card:nth-child(9) { animation-delay: 0.45s; }
.project-card:nth-child(10) { animation-delay: 0.5s; }
.project-card:nth-child(11) { animation-delay: 0.55s; }
.project-card:nth-child(12) { animation-delay: 0.6s; }
.project-card:nth-child(13) { animation-delay: 0.65s; }
.project-card:nth-child(14) { animation-delay: 0.7s; }
.project-card:nth-child(15) { animation-delay: 0.75s; }
.project-card:nth-child(16) { animation-delay: 0.8s; }
</style>