'use client';

import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/premium';

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#1a1a1a]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">記事が見つかりません</h1>
          <Link
            href="/premium/blog"
            className="text-[#DC143C] hover:text-[#b91028] font-semibold"
          >
            ブログ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-[#1a1a1a]">
      {/* 記事ヘッダー */}
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
              {/* パンくずリスト */}
              <div className="mb-8 text-sm text-gray-400">
                <Link href="/premium" className="hover:text-[#DC143C]">
                  HOME
                </Link>
                {' > '}
                <Link href="/premium/blog" className="hover:text-[#DC143C]">
                  BLOG
                </Link>
                {' > '}
                <span className="text-white">{post.title}</span>
              </div>

              {/* カテゴリーと日付 */}
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-[#DC143C] text-white font-semibold rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-gray-400">{post.date}</span>
                <span className="text-gray-400">by {post.author}</span>
              </div>

              {/* タイトル */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                {post.title}
              </h1>

              {/* メイン画像 */}
              <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 本文 */}
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {post.content}
                </div>
              </div>

              {/* シェアボタン (モック) */}
              <div className="mt-12 pt-8 border-t border-gray-600">
                <p className="text-gray-400 mb-4">この記事をシェア:</p>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Twitter
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900"
                  >
                    Facebook
                  </motion.button>
                </div>
              </div>

              {/* 戻るリンク */}
              <div className="mt-12 text-center">
                <Link
                  href="/premium/blog"
                  className="inline-block px-10 py-4 bg-[#DC143C] text-white font-bold text-lg rounded-full hover:bg-[#b91028] transition-colors shadow-lg"
                >
                  ブログ一覧に戻る
                </Link>
              </div>
            </div>
        </div>
      </article>
    </div>
  );
}
