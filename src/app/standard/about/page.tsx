'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import { storeInfo } from '@/data/store';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* ページヘッダー */}
      <section className="relative h-[400px] bg-gradient-to-br from-[#DC143C] to-[#b91028] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="About"
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
              ABOUT US
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
          </div>
        </ScrollAnimation>
      </section>

      {/* 店舗紹介 */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                私たちについて
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  北海道釧路市に佇むアメリカンダイニングバー「ダイナー」は、
                  1950年代のアメリカンカルチャーを愛する店主・大内稔が
                  2015年にオープンしました。
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  当店のコンセプトは「本物のアメリカンダイナーの味と雰囲気を
                  日本で再現すること」。アメリカ各地のダイナーを巡り歩いて研究し、
                  内装から音楽、料理まで細部にこだわり抜いています。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  厳選した国産牛と豚肉をブレンドした自家製パティ、
                  地元ベーカリーに特注したバンズ、新鮮な地元の野菜。
                  すべての食材にこだわり、毎日丁寧に仕込んでいます。
                  温かな雰囲気の中で、心を込めた料理をお楽しみください。
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                代表挨拶
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <ScrollAnimation direction="left">
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                    alt="代表 大内稔"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2} className="md:col-span-2">
                <div className="bg-[#2a2a2a] p-8 rounded-lg border-2 border-[#DC143C] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-4">
                    代表 大内 稔
                  </h3>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      数あるお店の中から、当店「ダイナー」にご関心をお寄せいただき、
                      誠にありがとうございます。
                    </p>
                    <p>
                      私は若い頃、アメリカを旅して回り、各地のダイナーで
                      その土地ならではの味と人々の温かさに触れてきました。
                      帰国後、その感動を日本でも再現したいという思いから、
                      この店をオープンしました。
                    </p>
                    <p>
                      料理はもちろん、店の雰囲気、音楽、接客に至るまで、
                      すべてにこだわり、お客様に特別なひとときを
                      提供できるよう日々努めています。
                    </p>
                    <p className="font-semibold text-[#FFD700]">
                      皆様のご来店を心よりお待ちしております。
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              店舗情報
            </h2>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation direction="left">
                <div className="bg-[#2a2a2a] p-8 rounded-lg border-2 border-[#DC143C] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-6">基本情報</h3>
                  <div className="space-y-4 text-white">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">店名</p>
                      <p className="text-lg font-semibold">{storeInfo.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">代表</p>
                      <p className="text-lg font-semibold">大内 稔</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">住所</p>
                      <p className="text-lg">{storeInfo.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">電話番号</p>
                      <p className="text-lg font-semibold">
                        <a
                          href={`tel:${storeInfo.phone}`}
                          className="hover:text-[#DC143C] transition-colors"
                        >
                          {storeInfo.phone}
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">メールアドレス</p>
                      <p className="text-lg">
                        <a
                          href={`mailto:${storeInfo.email}`}
                          className="hover:text-[#DC143C] transition-colors"
                        >
                          {storeInfo.email}
                        </a>
                      </p>
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
                    <div className="pt-4 border-t border-gray-600">
                      <p className="text-sm text-gray-400 mb-2">アクセス</p>
                      <p className="text-base">
                        JR釧路駅より徒歩10分<br />
                        北大通沿い、栄町交差点付近<br />
                        ※専用駐車場はございません。<br />
                        お近くのコインパーキングをご利用ください。
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* 地図 */}
            <ScrollAnimation delay={0.4}>
              <div className="mt-12 bg-[#2a2a2a] p-8 rounded-lg border-2 border-[#DC143C] shadow-xl">
                <h3 className="text-2xl font-bold text-[#FFD700] mb-6">アクセスマップ</h3>
                <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">
                    ※ Google Mapsの埋め込みを想定<br />
                    実装時にはGoogle Maps APIを使用してください
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* こだわり */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              私たちのこだわり
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: '01',
                title: '食材へのこだわり',
                description:
                  '国産牛と豚肉をブレンドした自家製パティは毎朝店内で手ごね。バンズは地元ベーカリーに特注した特製品を使用しています。',
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
              },
              {
                number: '02',
                title: '雰囲気へのこだわり',
                description:
                  '1950年代のアメリカンダイナーを再現。アンティークのジュークボックスやネオンサイン、赤いビニールシートなど細部まで こだわり抜いています。',
                image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80',
              },
              {
                number: '03',
                title: 'サービスへのこだわり',
                description:
                  'お客様一人ひとりに寄り添った温かなサービスを心がけています。常連のお客様も初めてのお客様も、皆様に居心地の良い空間を。',
                image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
              },
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#DC143C] text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                      {item.number}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
