import { MenuItem } from '@/types';

// メニューデータ
export const menuItems: MenuItem[] = [
  // ハンバーガー
  {
    id: 'burger-1',
    name: 'クラシックバーガー',
    description: '定番の味わい。ジューシーなビーフパティにフレッシュな野菜',
    price: 1200,
    category: 'バーガー',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
  },
  {
    id: 'burger-2',
    name: 'BBQベーコンバーガー',
    description: 'スモーキーなBBQソースとクリスピーベーコン',
    price: 1500,
    category: 'バーガー',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
  },
  {
    id: 'burger-3',
    name: 'アボカドチーズバーガー',
    description: 'クリーミーなアボカドとチェダーチーズの絶妙なハーモニー',
    price: 1600,
    category: 'バーガー',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80',
  },
  {
    id: 'burger-4',
    name: 'ダブルチーズバーガー',
    description: 'ダブルパティとダブルチーズでボリューム満点',
    price: 1800,
    category: 'バーガー',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80',
  },

  // ステーキ
  {
    id: 'steak-1',
    name: 'サーロインステーキ',
    description: '柔らかく上質な赤身の旨みを堪能',
    price: 2800,
    category: 'ステーキ',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80',
  },
  {
    id: 'steak-2',
    name: 'リブアイステーキ',
    description: '霜降りの旨みとジューシーさが際立つ一品',
    price: 3200,
    category: 'ステーキ',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
  },
  {
    id: 'steak-3',
    name: 'Tボーンステーキ',
    description: 'サーロインとフィレを同時に楽しめる贅沢',
    price: 3800,
    category: 'ステーキ',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80',
  },

  // サイドメニュー
  {
    id: 'side-1',
    name: 'フレンチフライ',
    description: 'カリッと揚げた定番のポテトフライ',
    price: 500,
    category: 'サイド',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
  },
  {
    id: 'side-2',
    name: 'オニオンリング',
    description: 'サクサク食感の特製オニオンリング',
    price: 600,
    category: 'サイド',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=80',
  },
  {
    id: 'side-3',
    name: 'チーズフライ',
    description: 'とろ〜りチーズをトッピングしたフライドポテト',
    price: 700,
    category: 'サイド',
    image: 'https://images.unsplash.com/photo-1630431341973-02e1779c09db?w=800&q=80',
  },
  {
    id: 'side-4',
    name: 'コールスロー',
    description: 'さっぱりとした自家製コールスロー',
    price: 400,
    category: 'サイド',
    image: 'https://images.unsplash.com/photo-1625938145312-69e1f86f0e54?w=800&q=80',
  },

  // ドリンク
  {
    id: 'drink-1',
    name: 'クラフトビール',
    description: '厳選した地ビール各種(IPA、エール、ラガー)',
    price: 800,
    category: 'ドリンク',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80',
  },
  {
    id: 'drink-2',
    name: 'ミルクシェイク',
    description: 'バニラ、チョコ、ストロベリーから選べる',
    price: 600,
    category: 'ドリンク',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80',
  },
  {
    id: 'drink-3',
    name: 'コーラフロート',
    description: 'コーラにバニラアイスをトッピング',
    price: 500,
    category: 'ドリンク',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=800&q=80',
  },
  {
    id: 'drink-4',
    name: 'アイスコーヒー',
    description: '深煎りコーヒー豆を使用した本格アイスコーヒー',
    price: 450,
    category: 'ドリンク',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
  },

  // デザート
  {
    id: 'dessert-1',
    name: 'アップルパイ',
    description: 'バニラアイス添え。サクサク生地とシナモンの香り',
    price: 700,
    category: 'デザート',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&q=80',
  },
  {
    id: 'dessert-2',
    name: 'ブラウニー',
    description: '濃厚チョコレートブラウニーにアイスクリーム',
    price: 650,
    category: 'デザート',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
  },
  {
    id: 'dessert-3',
    name: 'チーズケーキ',
    description: 'ニューヨークスタイルのリッチなチーズケーキ',
    price: 750,
    category: 'デザート',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80',
  },
];

// カテゴリー一覧を取得
export const categories = Array.from(new Set(menuItems.map(item => item.category)));
