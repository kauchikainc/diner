'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plan } from '@/types';
import { storeInfo } from '@/data/store';

interface FooterProps {
  plan: Plan;
}

export default function Footer({ plan }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const planPrefix = plan === 'premium' ? '/premium' : '/standard';

  const footerLinks = [
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
    <footer className="bg-[#0f0f0f] border-t-2 border-[#DC143C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 店舗情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#DC143C] mb-4">
              STORE INFO
            </h3>
            <div className="space-y-2 text-sm">
              <p>{storeInfo.name}</p>
              <p>{storeInfo.address}</p>
              <p>TEL: {storeInfo.phone}</p>
              <p>Email: {storeInfo.email}</p>
            </div>
          </motion.div>

          {/* 営業時間 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-[#DC143C] mb-4">
              OPENING HOURS
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-[#FFD700]">平日:</span>{' '}
                {storeInfo.hours.weekday}
              </p>
              <p>
                <span className="text-[#FFD700]">土日祝:</span>{' '}
                {storeInfo.hours.weekend}
              </p>
              <p>
                <span className="text-[#FFD700]">定休日:</span>{' '}
                {storeInfo.holiday}
              </p>
            </div>
          </motion.div>

          {/* ナビゲーション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[#DC143C] mb-4">
              NAVIGATION
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#DC143C] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* コピーライト */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-[#4a4a4a] pt-8 text-center text-sm text-gray-400"
        >
          <p>
            &copy; {currentYear} AMERICAN DINER ダイナー. All Rights Reserved.
          </p>
          <p className="mt-2">代表: 大内 稔</p>
        </motion.div>
      </div>
    </footer>
  );
}
