'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSlider from '@/components/HeroSlider';
import ScrollAnimation from '@/components/ScrollAnimation';
import { storeInfo } from '@/data/store';
import { menuItems } from '@/data/menu';

export default function StandardHomePage() {
  // カテゴリー別のおすすめメニュー (各カテゴリーから1つずつ)
  const featuredMenuItems = [
    menuItems.find(item => item.category === 'バーガー'),
    menuItems.find(item => item.category === 'ステーキ'),
    menuItems.find(item => item.category === 'サイド'),
    menuItems.find(item => item.category === 'ドリンク'),
  ].filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <HeroSlider plan="standard" />

      {/* Aboutセクション */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{
                  textShadow: '2px 2px 4px rgba(220, 20, 60, 0.3)',
                }}
              >
                ABOUT <span className="text-[#DC143C]">DINER</span>
              </motion.h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollAnimation direction="left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="ダイナー店内"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.2}>
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFD700]">
                  本格アメリカンダイニングの味わい
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  北海道釧路市に佇む本格アメリカンダイニングバー「ダイナー」。
                  1950年代のレトロなアメリカンカルチャーを再現した店内で、
                  こだわりの自家製ハンバーガーと上質なステーキをお楽しみいただけます。
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  厳選した国産牛と豚肉をブレンドしたジューシーなパティ、
                  地元ベーカリーの特製バンズ、新鮮な野菜。
                  すべての素材にこだわり、毎日丁寧に仕込んでいます。
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/standard/about"
                    className="inline-block px-8 py-3 bg-[#DC143C] text-white font-bold rounded-full hover:bg-[#b91028] transition-colors shadow-lg"
                  >
                    詳しく見る
                  </Link>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Menuセクション */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{
                  textShadow: '2px 2px 4px rgba(220, 20, 60, 0.3)',
                }}
              >
                FEATURED <span className="text-[#DC143C]">MENU</span>
              </motion.h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-4"></div>
              <p className="text-gray-300 text-lg">当店自慢のメニュー</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {featuredMenuItems.map((item, index) => (
              <ScrollAnimation key={item!.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(220, 20, 60, 0.3)' }}
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-xl transition-all"
                >
                  <div className="relative h-64">
                    <Image
                      src={item!.image || ''}
                      alt={item!.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#DC143C] text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item!.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item!.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item!.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#FFD700]">
                        ¥{item!.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.5}>
            <div className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/standard/menu"
                  className="inline-block px-10 py-4 bg-[#DC143C] text-white font-bold text-lg rounded-full hover:bg-[#b91028] transition-colors shadow-lg"
                >
                  全メニューを見る
                </Link>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Conceptセクション */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{
                  textShadow: '2px 2px 4px rgba(220, 20, 60, 0.3)',
                }}
              >
                OUR <span className="text-[#DC143C]">CONCEPT</span>
              </motion.h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🍔',
                title: 'こだわりの食材',
                description: '国産牛と豚肉をブレンドした自家製パティ。毎朝店内で手ごねしています。',
              },
              {
                icon: '🎸',
                title: 'レトロな雰囲気',
                description: '1950年代のアメリカンダイナーを再現。ジュークボックスで音楽も楽しめます。',
              },
              {
                icon: '🍺',
                title: 'クラフトビール',
                description: '国内外から厳選したクラフトビールを常時8種類ご用意しています。',
              },
            ].map((concept, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-lg text-center border-2 border-[#DC143C] shadow-xl"
                >
                  <div className="text-6xl mb-4">{concept.icon}</div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-4">
                    {concept.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {concept.description}
                  </p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Store Infoセクション */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{
                  textShadow: '2px 2px 4px rgba(220, 20, 60, 0.3)',
                }}
              >
                STORE <span className="text-[#DC143C]">INFO</span>
              </motion.h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollAnimation direction="left">
              <div className="bg-[#2a2a2a] p-8 rounded-lg border-2 border-[#DC143C] shadow-xl">
                <h3 className="text-2xl font-bold text-[#FFD700] mb-6">店舗情報</h3>
                <div className="space-y-4 text-white">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">店名</p>
                    <p className="text-lg font-semibold">{storeInfo.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">住所</p>
                    <p className="text-lg">{storeInfo.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">電話番号</p>
                    <p className="text-lg font-semibold">{storeInfo.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">メールアドレス</p>
                    <p className="text-lg">{storeInfo.email}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.2}>
              <div className="bg-[#2a2a2a] p-8 rounded-lg border-2 border-[#DC143C] shadow-xl">
                <h3 className="text-2xl font-bold text-[#FFD700] mb-6">営業時間</h3>
                <div className="space-y-4 text-white">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">平日</p>
                    <p className="text-lg font-semibold">{storeInfo.hours.weekday}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">土日祝</p>
                    <p className="text-lg font-semibold">{storeInfo.hours.weekend}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">定休日</p>
                    <p className="text-lg font-semibold">{storeInfo.holiday}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.4}>
            <div className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/standard/about"
                  className="inline-block px-10 py-4 bg-[#DC143C] text-white font-bold text-lg rounded-full hover:bg-[#b91028] transition-colors shadow-lg"
                >
                  アクセス情報を見る
                </Link>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gradient-to-br from-[#DC143C] to-[#b91028]">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ご予約・お問い合わせ
            </h2>
            <p className="text-xl text-white/90 mb-10">
              お電話またはお問い合わせフォームからご連絡ください
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href={`tel:${storeInfo.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#DC143C] font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                電話で予約: {storeInfo.phone}
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/standard/contact"
                  className="inline-block px-10 py-4 bg-[#FFD700] text-[#1a1a1a] font-bold text-lg rounded-full hover:bg-[#e6c200] transition-colors shadow-lg"
                >
                  お問い合わせフォーム
                </Link>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
