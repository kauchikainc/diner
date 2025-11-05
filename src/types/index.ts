// プラン種別の型定義
export type Plan = 'standard' | 'premium';

// メニューアイテムの型定義
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

// ブログ記事の型定義 (Premiumプラン用)
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

// ニュース・お知らせの型定義 (Premiumプラン用)
export interface News {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'news' | 'event' | 'campaign';
}

// 店舗情報の型定義
export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  holiday: string;
}
