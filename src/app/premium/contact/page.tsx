'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import { storeInfo } from '@/data/store';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // フォーム送信処理 (実装例)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // TODO: 実際のAPIエンドポイントに送信
    // 現在はモックです
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitMessage('お問い合わせを受け付けました。ありがとうございます!');
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
  };

  // 入力変更ハンドラー
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* ページヘッダー */}
      <section className="relative h-[400px] bg-gradient-to-br from-[#DC143C] to-[#b91028] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact"
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
              CONTACT
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-4"></div>
            <p className="text-xl text-white/90">ご予約・お問い合わせ</p>
          </div>
        </ScrollAnimation>
      </section>

      {/* お問い合わせ情報 */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <ScrollAnimation>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-lg text-center border-2 border-[#DC143C] shadow-xl"
              >
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-4">
                  お電話でのご予約
                </h3>
                <a
                  href={`tel:${storeInfo.phone}`}
                  className="text-2xl font-bold text-white hover:text-[#DC143C] transition-colors"
                >
                  {storeInfo.phone}
                </a>
                <p className="text-gray-400 mt-4 text-sm">
                  受付時間: {storeInfo.hours.weekday}
                </p>
              </motion.div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-lg text-center border-2 border-[#DC143C] shadow-xl"
              >
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-4">
                  メールでのお問い合わせ
                </h3>
                <a
                  href={`mailto:${storeInfo.email}`}
                  className="text-lg font-semibold text-white hover:text-[#DC143C] transition-colors break-all"
                >
                  {storeInfo.email}
                </a>
                <p className="text-gray-400 mt-4 text-sm">
                  24時間受付<br />
                  ※返信まで1-2営業日いただく場合があります
                </p>
              </motion.div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-lg text-center border-2 border-[#DC143C] shadow-xl"
              >
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-4">所在地</h3>
                <p className="text-white">
                  {storeInfo.address}
                </p>
                <p className="text-gray-400 mt-4 text-sm">
                  JR釧路駅より徒歩10分
                </p>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                お問い合わせフォーム
              </h2>
              <p className="text-gray-400">
                下記フォームに必要事項をご記入の上、送信してください
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <form
                onSubmit={handleSubmit}
                className="bg-[#2a2a2a] p-8 md:p-12 rounded-lg border-2 border-[#DC143C] shadow-2xl"
              >
                {/* お名前 */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-white font-semibold mb-2"
                  >
                    お名前 <span className="text-[#DC143C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-white border-2 border-gray-600 rounded-lg focus:border-[#DC143C] focus:outline-none transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* メールアドレス */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-white font-semibold mb-2"
                  >
                    メールアドレス <span className="text-[#DC143C]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-white border-2 border-gray-600 rounded-lg focus:border-[#DC143C] focus:outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                {/* 電話番号 */}
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-white font-semibold mb-2"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-white border-2 border-gray-600 rounded-lg focus:border-[#DC143C] focus:outline-none transition-colors"
                    placeholder="0154-25-9732"
                  />
                </div>

                {/* お問い合わせ種別 */}
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-white font-semibold mb-2"
                  >
                    お問い合わせ種別 <span className="text-[#DC143C]">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-white border-2 border-gray-600 rounded-lg focus:border-[#DC143C] focus:outline-none transition-colors"
                  >
                    <option value="">選択してください</option>
                    <option value="reservation">ご予約</option>
                    <option value="menu">メニューについて</option>
                    <option value="event">貸切・イベントについて</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                {/* お問い合わせ内容 */}
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-white font-semibold mb-2"
                  >
                    お問い合わせ内容 <span className="text-[#DC143C]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-white border-2 border-gray-600 rounded-lg focus:border-[#DC143C] focus:outline-none transition-colors resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                {/* 送信ボタン */}
                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`px-12 py-4 font-bold text-lg rounded-full transition-colors shadow-lg ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-[#DC143C] text-white hover:bg-[#b91028]'
                    }`}
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </motion.button>
                </div>

                {/* 送信完了メッセージ */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-600 text-white rounded-lg text-center font-semibold"
                  >
                    {submitMessage}
                  </motion.div>
                )}

                {/* 注意事項 */}
                <div className="mt-8 p-4 bg-[#1a1a1a] rounded-lg">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    ※ ご予約の場合は、ご希望の日時、人数を明記してください<br />
                    ※ お問い合わせ内容によっては、お返事までお時間をいただく場合がございます<br />
                    ※ お急ぎの場合は、お電話にてお問い合わせください
                  </p>
                </div>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
