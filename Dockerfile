# 使用官方的Node.js镜像作为基础镜像，选择适合你的Node.js版本
FROM node:lts-alpine

# 设置工作目录
WORKDIR /app

# 将package.json和pnpm-lock.yaml（如果使用pnpm）复制到工作目录中
COPY package*.json ./
COPY pnpm-lock.yaml ./ # 如果你的项目使用了pnpm

# 安装pnpm（如果系统中没有预装）
RUN npm install -g pnpm

# 安装项目依赖
RUN pnpm install

# 将项目的其余文件复制到工作目录中
COPY . .

# 暴露应用运行的端口（根据你的项目配置设置正确的端口）
EXPOSE 6719

# 定义容器启动时执行的命令
CMD ["pnpm", "dev"]