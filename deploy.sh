#!/bin/bash

echo "🚀 Starting deployment to GitHub Pages..."

# Проверяем, что мы в git репозитории
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository"
    exit 1
fi

# Проверяем, что нет незакоммиченных изменений
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes"
    read -p "Do you want to continue? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled"
        exit 1
    fi
fi

echo "📦 Installing dependencies..."
npm install

echo "🔍 Running linter..."
npm run lint

echo "🏗️  Building project for production..."
npm run build:prod

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    echo "🌐 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "📱 Your site will be available at: https://mrdoker1.github.io/exact-pixel-artistry"
        echo "⏰ Note: It may take a few minutes for changes to appear"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi 