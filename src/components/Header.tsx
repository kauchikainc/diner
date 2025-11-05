'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plan } from '@/types';

interface HeaderProps {
  plan: Plan;
}

export default function Header({ plan }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // スクロール時の背景変更
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ナビゲーションリンク
  const planPrefix = plan === 'premium' ? '/premium' : '/standard';
  const navLinks = [
    { href: planPrefix, label: 'HOME' },
    { href: `${planPrefix}/about`, label: 'ABOUT' },
    { href: `${planPrefix}/menu`, label: 'MENU' },
    ...(plan === 'premium' ? [
      { href: `${planPrefix}/blog`, label: 'BLOG' },
      { href: `${planPrefix}/news`, label: 'NEWS' },
    ] : []),
    { href: `${planPrefix}/contact`, label: 'CONTACT' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a1a1a] shadow-lg border-b-2 border-[#DC143C]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col"
            >
              <span className="text-2xl md:text-3xl font-bold text-[#DC143C] tracking-wider">
                DINER
              </span>
              <span className="text-xs text-[#FFD700] tracking-widest">
                AMERICAN DINING BAR
              </span>
            </motion.div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  whileHover={{ scale: 1.1, color: '#DC143C' }}
                  className="text-white font-semibold tracking-wide cursor-pointer transition-colors"
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="メニュー"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="flex flex-col space-y-1.5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                className="block w-8 h-0.5 bg-white"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="block w-8 h-0.5 bg-white"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                className="block w-8 h-0.5 bg-white"
              />
            </motion.div>
          </button>
        </div>

        {/* モバイルメニュー */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#1a1a1a] border-t border-[#DC143C]"
            >
              <div className="flex flex-col space-y-4 py-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white font-semibold tracking-wide hover:text-[#DC143C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
