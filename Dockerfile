# 使用官方的Node.js镜像作为基础镜像，版本选择LTS或你项目所需的特定版本
FROM node:lts-alpine

# 设置工作目录
WORKDIR /app

# 将package.json和package-lock.json（或yarn.lock）文件复制到镜像中
COPY package*.json ./

# 安装项目依赖
RUN npm install --legacy-peer-deps

# 将项目的其余文件复制到工作目录中
COPY . .

# 构建项目（对于Vue CLI项目，通常是npm run build；对于Vite项目，可能是npm run build或npm run prod）
RUN npm run build

# 如果你的应用是一个静态网站，并且构建产物在dist目录中，你可以设置一个Nginx或Apache服务器来提供服务
# 但为了简化，这里我们直接使用Node.js的HTTP服务器来托管静态文件
# 安装一个简单的HTTP服务器，如http-server
RUN npm install -g http-server

# 暴露应用运行的端口（这里假设你的应用将在这个端口上运行）
EXPOSE 6719

# 定义容器启动时执行的命令
# 使用http-server来托管dist目录中的文件，并设置端口为6719
CMD ["http-server", "dist", "-p", "6719"]