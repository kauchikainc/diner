'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import { newsItems } from '@/data/premium';

export default function NewsListPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* ページヘッダー */}
      <section className="relative h-[400px] bg-gradient-to-br from-[#DC143C] to-[#b91028] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
            alt="News"
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
              NEWS
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-4"></div>
            <p className="text-xl text-white/90">最新のお知らせ・イベント情報</p>
          </div>
        </ScrollAnimation>
      </section>

      {/* ニュース一覧 */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {newsItems.map((news, index) => (
              <ScrollAnimation key={news.id} delay={index * 0.05}>
                <Link href={`/premium/news/${news.id}`}>
                  <motion.article
                    whileHover={{ scale: 1.02, backgroundColor: '#2a2a2a' }}
                    className="bg-[#1a1a1a] p-6 rounded-lg mb-6 border-2 border-[#2a2a2a] hover:border-[#DC143C] transition-all cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* 日付 */}
                      <div className="flex-shrink-0">
                        <div className="text-center bg-[#DC143C] text-white rounded-lg p-3 min-w-[100px]">
                          <div className="text-sm font-semibold">
                            {new Date(news.date).toLocaleDateString('ja-JP', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </div>
                          <div className="text-xs opacity-80">
                            {new Date(news.date).getFullYear()}
                          </div>
                        </div>
                      </div>

                      {/* カテゴリー */}
                      <div className="flex-shrink-0">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-bold ${
                            news.category === 'news'
                              ? 'bg-[#DC143C] text-white'
                              : news.category === 'event'
                              ? 'bg-[#FFD700] text-[#1a1a1a]'
                              : 'bg-blue-600 text-white'
                          }`}
                        >
                          {news.category === 'news'
                            ? 'お知らせ'
                            : news.category === 'event'
                            ? 'イベント'
                            : 'キャンペーン'}
                        </span>
                      </div>

                      {/* タイトル */}
                      <div className="flex-1">
                        <h2 className="text-white font-bold text-lg hover:text-[#DC143C] transition-colors">
                          {news.title}
                        </h2>
                      </div>

                      {/* 矢印アイコン */}
                      <div className="flex-shrink-0 text-[#DC143C]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
