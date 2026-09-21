import postsData from '../../posts.json';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  return (
   <>
   <main className='flex-grow pt-20'>
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
  <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
  <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob" style={{ animationDelay: '-2s' }}></div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="text-center max-w-4xl mx-auto">
      <div className="section-label inline-flex items-center gap-2 px-5 py-2 rounded-full bg-transparent border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
  
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        <span className="text-sm font-medium text-neutral-300">مرحباً بك في عدسة</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
        اكتشف <span className="text-orange-400">فن</span><br />التصوير الفوتوغرافي
      </h1>
      
      <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
        <a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300" href="/blog" data-discover="true">
          <span>استكشف المقالات</span>
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
        <a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-orange-500 text-orange-400 font-bold bg-transparent hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300" href="/about" data-discover="true">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>اعرف المزيد</span>
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <div className="group rounded-3xl border border-[#3a3a3a] bg-[#1a1a1a]/90 px-6 py-5 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-orange-500/10" style={{ animationDelay: '0ms' }}>
          <i className="fa-solid fa-newspaper text-3xl text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-3xl font-bold text-orange-400">+50</p>
          <p className="text-neutral-500 text-sm mt-1">مقالة</p>
        </div>
        
        <div className="group rounded-3xl border border-[#3a3a3a] bg-[#1a1a1a]/90 px-6 py-5 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-orange-500/10" style={{ animationDelay: '100ms' }}>
          <i className="fa-solid fa-users text-3xl text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-3xl font-bold text-orange-400">+10ألف</p>
          <p className="text-neutral-500 text-sm mt-1">قارئ</p>
        </div>
        
        <div className="group rounded-3xl border border-[#3a3a3a] bg-[#1a1a1a]/90 px-6 py-5 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-orange-500/10" style={{ animationDelay: '200ms' }}>
          <i className="fa-solid fa-folder-open text-3xl text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-3xl font-bold text-orange-400">4</p>
          <p className="text-neutral-500 text-sm mt-1">تصنيفات</p>
        </div>
        
        <div className="group rounded-3xl border border-[#3a3a3a] bg-[#1a1a1a]/90 px-6 py-5 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-orange-500/10" style={{ animationDelay: '300ms' }}>
          <i className="fa-solid fa-pen-nib text-3xl text-orange-500 mb-3 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-3xl font-bold text-orange-400">6</p>
          <p className="text-neutral-500 text-sm mt-1">كاتب</p>
        </div>
      </div>
    </div>
  </div>
</section>
 
 <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="section-label text-orange-500 inline-flex items-center gap-2 px-5 py-1 rounded-full bg-transparent border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              مميز
            </span>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-white">مقالات مختارة</h2>
            <p className="section-subtitle text-neutral-400 my-5 text-xl md:text-2xl">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>
          <a className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5" href="/blog" data-discover="true">
            عرض الكل
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        
        <div className="space-y-8">
          {postsData.posts.slice(0,3).map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
           ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <span className="section-label text-orange-500 inline-flex items-center gap-2 px-5 py-1 rounded-full bg-transparent border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
        <span className="relative flex h-2 w-2 ml-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        التصنيفات
      </span>
      <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-white">استكشف حسب الموضوع</h2>
      <p className="section-subtitle max-w-lg mx-auto text-neutral-400 my-10 text-xl md:text-2xl">اعثر على محتوى مصمم حسب اهتماماتك</p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=إضاءة" data-discover="true" style={{ animationDelay: '0ms' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
            <i className="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">إضاءة</h3>
          <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">4 مقالة</p>
          <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </a>
      
      <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=بورتريه" data-discover="true" style={{ animationDelay: '100ms' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
            <i className="fa-solid fa-user text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">بورتريه</h3>
          <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">6 مقالة</p>
          <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </a>
      
      <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=مناظر طبيعية" data-discover="true" style={{ animationDelay: '200ms' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
            <i className="fa-solid fa-mountain-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">مناظر طبيعية</h3>
          <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">4 مقالة</p>
          <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </a>
      
      <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=تقنيات" data-discover="true" style={{ animationDelay: '300ms' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
            <i className="fa-solid fa-sliders text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">تقنيات</h3>
          <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">9 مقالة</p>
          <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </a>
      
      <a className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1" href="/blog?category=معدات" data-discover="true" style={{ animationDelay: '400ms' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
            <i className="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
          </div>
          <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">معدات</h3>
          <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">5 مقالة</p>
          <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">اشترك في <span className="gradient-text">نشرتنا الإخبارية</span></h2>
      <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
        <input placeholder="أدخل بريدك الإلكتروني" className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors" type="email" />
        <button type="submit" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300">اشترك الآن</button>
      </form>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2 space-x-reverse">
            <img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&amp;h=32&amp;fit=crop&amp;crop=face" />
            <img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&amp;h=32&amp;fit=crop&amp;crop=face" />
            <img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&amp;h=32&amp;fit=crop&amp;crop=face" />
          </div>
          <span>انضم لـ <span className="text-white font-medium">+10,000</span> مصور</span>
        </div>
        <span className="hidden sm:inline text-[#262626]">•</span>
        <span>بدون إزعاج</span>
        <span className="hidden sm:inline text-[#262626]">•</span>
        <span>إلغاء الاشتراك في أي وقت</span>
      </div>
    </div>
  </div>
</section>

   </main>
    
   </>
  )
}

