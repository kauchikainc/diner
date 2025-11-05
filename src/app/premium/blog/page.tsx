'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import { blogPosts } from '@/data/premium';

export default function BlogListPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* ページヘッダー */}
      <section className="relative h-[400px] bg-gradient-to-br from-[#DC143C] to-[#b91028] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80"
            alt="Blog"
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
              BLOG
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-4"></div>
            <p className="text-xl text-white/90">ダイナーの日常やメニューの裏側をご紹介</p>
          </div>
        </ScrollAnimation>
      </section>

      {/* ブログ一覧 */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={post.id} delay={index * 0.05}>
                <Link href={`/premium/blog/${post.id}`}>
                  <motion.article
                    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(220, 20, 60, 0.3)' }}
                    className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-xl transition-all cursor-pointer h-full"
                  >
                    <div className="relative h-56">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-[#FFD700] font-semibold">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-400">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between border-t border-gray-600 pt-4">
                        <span className="text-sm text-gray-500">by {post.author}</span>
                        <span className="text-[#DC143C] font-semibold text-sm">
                          続きを読む →
                        </span>
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
