
import React from 'react';
import { Category, Ad } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'سيارات', icon: '🚗', slug: 'cars' },
  { id: '2', name: 'عقارات', icon: '🏠', slug: 'real-estate' },
  { id: '3', name: 'موبايلات', icon: '📱', slug: 'mobile' },
  { id: '4', name: 'إلكترونيات', icon: '💻', slug: 'electronics' },
  { id: '5', name: 'أثاث', icon: '🛋️', slug: 'furniture' },
  { id: '6', name: 'وظائف', icon: '💼', slug: 'jobs' },
  { id: '7', name: 'أزياء', icon: '👕', slug: 'fashion' },
  { id: '8', name: 'أطفال', icon: '👶', slug: 'kids' },
  { id: '9', name: 'حيوانات', icon: '🐾', slug: 'pets' },
  { id: '10', name: 'رياضة', icon: '⚽', slug: 'sports' },
  { id: '11', name: 'خدمات', icon: '🛠️', slug: 'services' },
  { id: '12', name: 'جمال وصحة', icon: '💄', slug: 'beauty' },
  { id: '13', name: 'شركات ومعدات', icon: '🏗️', slug: 'business' },
];

export const MOCK_ADS: Ad[] = [
  {
    id: '101',
    title: 'تويوتا كورولا 2022 بحالة ممتازة',
    price: 85000,
    currency: 'ريال',
    category: 'سيارات',
    location: 'الرياض',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
    date: 'منذ ساعتين',
    description: 'سيارة نظيفة جداً، صيانة وكالة.',
    seller: { name: 'أحمد علي', verified: true }
  },
  {
    id: '103',
    title: 'آيفون 15 برو ماكس 256 جيجا',
    price: 4200,
    currency: 'ريال',
    category: 'موبايل - تابلت',
    location: 'جدة',
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
    date: 'منذ يوم',
    description: 'الجهاز كالجديد، نسبة البطارية 100%.',
    seller: { name: 'سارة خالد', verified: false }
  },
  {
    id: '201',
    title: 'لابتوب ASUS ROG للألعاب',
    price: 5500,
    currency: 'ريال',
    category: 'لابتوب وكمبيوتر',
    location: 'الدمام',
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    date: 'منذ ساعة',
    description: 'معالج i9، كرت RTX 4080.',
    seller: { name: 'عالم الكمبيوتر', verified: true }
  },
  {
    id: '202',
    title: 'بلايستيشن 5 مع 3 ألعاب',
    price: 1950,
    currency: 'ريال',
    category: 'ألعاب وألعاب الفيديو',
    location: 'المدينة',
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800',
    date: 'منذ 3 ساعات',
    description: 'نسخة مطورة، بحالة ممتازة.',
    seller: { name: 'خالد', verified: true }
  },
  {
    id: '401',
    title: 'ثلاجة سامسونج ذكية 20 قدم',
    price: 3200,
    currency: 'ريال',
    category: 'أجهزة الكترونية وأجهزة منزلية',
    location: 'الرياض',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    date: 'منذ يوم',
    description: 'تبريد مزدوج، توفير طاقة.',
    seller: { name: 'معرض الأجهزة', verified: true }
  },
  {
    id: '501',
    title: 'قط شيرازي ذكر مطعم',
    price: 0,
    currency: 'مجاني',
    category: 'حيوانات وإكسسوارات',
    location: 'مكة',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    date: 'منذ 6 ساعات',
    description: 'للمحبين فقط، قط هادئ جداً.',
    seller: { name: 'أم أحمد', verified: false }
  },
  {
    id: '601',
    title: 'شقة 3 غرف للإيجار السنوي',
    price: 45000,
    currency: 'ريال',
    category: 'عقارات للايجار',
    location: 'الرياض',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    date: 'منذ يومين',
    description: 'تشطيب ديلوكس، حي هادئ.',
    seller: { name: 'الوسيط العقاري', verified: true }
  },
  {
    id: '701',
    title: 'طقم ملابس أطفال قطن 100%',
    price: 120,
    currency: 'ريال',
    category: 'موضة وأطفال',
    location: 'القصيم',
    imageUrl: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=800',
    date: 'منذ ساعة',
    description: 'متوفر جميع المقاسات.',
    seller: { name: 'بيبي شوب', verified: true }
  },
  {
    id: '801',
    title: 'جهاز سير رياضي منزلي',
    price: 850,
    currency: 'ريال',
    category: 'معدات رياضية ولياقة',
    location: 'جدة',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
    date: 'منذ 4 ساعات',
    description: 'يتحمل حتى 120 كجم.',
    seller: { name: 'متجر الرياضة', verified: true }
  },
  {
    id: '901',
    title: 'مطلوب مبرمج واجهات أمامية',
    price: 12000,
    currency: 'ريال',
    category: 'توظيف',
    location: 'الرياض',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    date: 'منذ ساعة',
    description: 'خبرة في React و Tailwind.',
    seller: { name: 'تكنو سوليوشنز', verified: true }
  }
];

export const TESTIMONIALS = [
  { id: 1, name: 'سلطان القحطاني', text: 'ليلى ساعدتني ألاقي لابتوب أحلامي بسعر خيالي. الموقع فعلاً ذكي!', rating: 5, avatar: 'https://i.pravatar.cc/150?u=sultan' },
  { id: 2, name: 'عبير ناصر', text: 'بعت أغراض بيتي القديمة في أسبوع واحد. مستعمل هو الخيار الأول دائماً.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=abeer' },
];

export const SERVICES_LIST = [
  { title: 'تقييم ذكي', desc: 'ليلى تقيم إعلانك وتعطيك السعر الأنسب للسوق.', icon: '⚖️' },
  { title: 'ضمان مستعمل', desc: 'نضمن لك حقك في عمليات الشراء والبيع الموثقة.', icon: '🛡️' },
  { title: 'شحن آمن', desc: 'حلول شحن متكاملة تصل لباب بيتك.', icon: '🚚' },
  { title: 'دعم 24/7', desc: 'فريقنا جاهز لمساعدتك في أي وقت.', icon: '📞' },
];
