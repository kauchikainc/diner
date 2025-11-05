'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
      <div className="max-w-6xl w-full">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-[#DC143C] mb-4">
            DINER
          </h1>
          <p className="text-xl md:text-2xl text-[#FFD700] tracking-wider">
            AMERICAN DINING BAR
          </p>
          <p className="text-gray-400 mt-4">
            本格アメリカンダイニングバーの世界へようこそ
          </p>
        </motion.div>

        {/* プラン選択 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            プランを選択してください
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standardプラン */}
            <Link href="/standard">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(220, 20, 60, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-lg border-2 border-[#DC143C] cursor-pointer transition-all"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">🍔</div>
                  <h3 className="text-3xl font-bold text-[#DC143C] mb-4">
                    STANDARD
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    基本的な店舗情報とメニューをご覧いただけます。
                    お店の雰囲気や料理をチェックしたい方におすすめです。
                  </p>
                  <div className="space-y-2 text-left mb-6">
                    <div className="flex items-center text-gray-300">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      店舗情報・営業時間
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      メニュー・料金
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      お問い合わせフォーム
                    </div>
                  </div>
                  <div className="bg-[#DC143C] text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-[#b91028] transition-colors inline-block">
                    Standardを見る
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Premiumプラン */}
            <Link href="/premium">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(255, 215, 0, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-lg border-2 border-[#FFD700] cursor-pointer transition-all relative overflow-hidden"
              >
                {/* プレミアムバッジ */}
                <div className="absolute top-4 right-4 bg-[#FFD700] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-bold">
                  PREMIUM
                </div>

                <div className="text-center">
                  <div className="text-5xl mb-4">⭐</div>
                  <h3 className="text-3xl font-bold text-[#FFD700] mb-4">
                    PREMIUM
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Standardの全機能に加えて、ブログやニュースなどの
                    最新情報も充実。より深くお店を知りたい方に。
                  </p>
                  <div className="space-y-2 text-left mb-6">
                    <div className="flex items-center text-gray-300">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      Standardの全機能
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      ブログ記事
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      最新ニュース・イベント情報
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      キャンペーン情報
                    </div>
                  </div>
                  <div className="bg-[#FFD700] text-[#1a1a1a] py-3 px-6 rounded-full font-bold text-lg hover:bg-[#e6c200] transition-colors inline-block">
                    Premiumを見る
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* 注意書き */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            ※ このサイトはデモンストレーション用のサンプルサイトです
          </p>
        </motion.div>
      </div>
    </div>
  );
}
