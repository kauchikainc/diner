'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plan } from '@/types';

// ヒーロースライドデータ
const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=1920&q=80',
    title: 'WELCOME TO DINER',
    subtitle: '本格アメリカンダイニングの味わい',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1920&q=80',
    title: 'JUICY BURGERS',
    subtitle: 'こだわりの自家製パティ',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1920&q=80',
    title: 'PREMIUM STEAKS',
    subtitle: '上質なステーキをご堪能ください',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80',
    title: 'AMERICAN ATMOSPHERE',
    subtitle: 'レトロな雰囲気で特別なひとときを',
  },
];

interface HeroSliderProps {
  plan: Plan;
}

export default function HeroSlider({ plan }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const planPrefix = plan === 'premium' ? '/premium' : '/standard';

  // 自動スライド
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // スライド変更
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* スライド画像 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* テキストコンテンツ */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-wider"
                style={{
                  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-[#FFD700] font-semibold"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={`${planPrefix}/menu`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 20, 60, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#DC143C] text-white font-bold text-lg rounded-full hover:bg-[#b91028] transition-colors shadow-lg"
            >
              メニューを見る
            </motion.a>
            <motion.a
              href={`${planPrefix}/contact`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg rounded-full hover:bg-[#FFD700] hover:text-[#1a1a1a] transition-colors shadow-lg"
            >
              ご予約・お問い合わせ
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ナビゲーションボタン */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="前のスライド"
      >
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="次のスライド"
      >
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
      </button>

      {/* インジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#DC143C] w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`スライド${index + 1}へ移動`}
          />
        ))}
      </div>

      {/* スクロールダウンインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white flex flex-col items-center"
        >
          <span className="text-sm mb-2 tracking-wider">SCROLL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
