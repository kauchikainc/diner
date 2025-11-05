'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import { menuItems, categories } from '@/data/menu';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて');

  // フィルタリングされたメニュー
  const filteredMenuItems =
    selectedCategory === 'すべて'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* ページヘッダー */}
      <section className="relative h-[400px] bg-gradient-to-br from-[#DC143C] to-[#b91028] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1920&q=80"
            alt="Menu"
            fill
            className="object-cover"
          />
        </div>
        <ScrollAnimation>
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              style={{
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
              }}
            >
              MENU
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-4"></div>
            <p className="text-xl text-white/90">こだわりのメニューをご堪能ください</p>
          </div>
        </ScrollAnimation>
      </section>

      {/* カテゴリーフィルター */}
      <section className="py-8 bg-[#2a2a2a] sticky top-20 z-40 shadow-lg border-b-2 border-[#DC143C]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('すべて')}
              className={`px-6 py-2 rounded-full font-bold transition-colors ${
                selectedCategory === 'すべて'
                  ? 'bg-[#DC143C] text-white'
                  : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#DC143C] hover:text-white'
              }`}
            >
              すべて
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-bold transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#DC143C] text-white'
                    : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#DC143C] hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* メニューグリッド */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {filteredMenuItems.map((item, index) => (
                <ScrollAnimation key={item.id} delay={index * 0.05}>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: '0 20px 40px rgba(220, 20, 60, 0.3)',
                    }}
                    className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-xl transition-all"
                  >
                    <div className="relative h-64">
                      <Image
                        src={item.image || ''}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#DC143C] text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between border-t border-gray-600 pt-4">
                        <span className="text-3xl font-bold text-[#FFD700]">
                          ¥{item.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredMenuItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">
                このカテゴリーにはメニューがありません
              </p>
            </div>
          )}
        </div>
      </section>

      {/* お知らせ */}
      <section className="py-16 bg-gradient-to-br from-[#DC143C] to-[#b91028]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">メニューについて</h2>
              <div className="space-y-4 text-lg">
                <p>
                  ※表示価格は税込です
                </p>
                <p>
                  ※仕入れ状況により、一部メニューが品切れとなる場合がございます
                </p>
                <p>
                  ※アレルギー対応について、お気軽にスタッフまでお申し付けください
                </p>
                <p className="font-semibold text-[#FFD700] text-xl mt-8">
                  お持ち帰りも承っております!<br />
                  お電話でご予約いただければスムーズです
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
