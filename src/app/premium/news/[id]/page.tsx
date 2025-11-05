'use client';

import Link from 'next/link';
import { use } from 'react';
import { motion } from 'framer-motion';
import { newsItems } from '@/data/premium';

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const news = newsItems.find((n) => n.id === id);

  if (!news) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#1a1a1a]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">お知らせが見つかりません</h1>
          <Link
            href="/premium/news"
            className="text-[#DC143C] hover:text-[#b91028] font-semibold"
          >
            お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-[#1a1a1a]">
      {/* ニュース詳細 */}
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
              {/* パンくずリスト */}
              <div className="mb-8 text-sm text-gray-400">
                <Link href="/premium" className="hover:text-[#DC143C]">
                  HOME
                </Link>
                {' > '}
                <Link href="/premium/news" className="hover:text-[#DC143C]">
                  NEWS
                </Link>
                {' > '}
                <span className="text-white">{news.title}</span>
              </div>

              {/* 記事ヘッダー */}
              <div className="bg-[#2a2a2a] p-8 md:p-12 rounded-lg border-2 border-[#DC143C] shadow-2xl">
                {/* カテゴリーと日付 */}
                <div className="flex items-center gap-4 mb-6">
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
                  <span className="text-gray-400">{news.date}</span>
                </div>

                {/* タイトル */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  {news.title}
                </h1>

                {/* 本文 */}
                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                    {news.content}
                  </div>
                </div>

                {/* 問い合わせ先 */}
                <div className="mt-8 pt-8 border-t border-gray-600">
                  <p className="text-gray-400 text-sm">
                    ご不明な点がございましたら、お気軽にお問い合わせください。
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4"
                  >
                    <Link
                      href="/premium/contact"
                      className="inline-block px-8 py-3 bg-[#DC143C] text-white font-bold rounded-full hover:bg-[#b91028] transition-colors"
                    >
                      お問い合わせ
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* 戻るリンク */}
              <div className="mt-12 text-center">
                <Link
                  href="/premium/news"
                  className="inline-block px-10 py-4 bg-[#2a2a2a] text-white font-bold text-lg rounded-full hover:bg-[#DC143C] transition-colors border-2 border-[#DC143C] shadow-lg"
                >
                  お知らせ一覧に戻る
                </Link>
              </div>
            </div>
        </div>
      </article>
    </div>
  );
}
