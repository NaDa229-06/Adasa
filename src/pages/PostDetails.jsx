
import { useParams, Link } from 'react-router-dom'; 
import postsData from '../../posts.json';

 export default function PostDetails () {
  // استقبال الـ slug من الرابط 
  const { slug } = useParams();


  const post = postsData.posts.find((p) => p.slug === slug);


  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">المقال غير موجود</h2>
          <Link to="/blog" className="px-6 py-3 bg-orange-500 rounded-xl text-white font-semibold">
            العودة للمدونة
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-[#0a0a0a] min-h-screen text-right" dir="rtl">
      {/* قسم الهيدر والصورة البارزة */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover" 
          src={post.image} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent"></div>
        
        <div className="absolute top-8 right-8 left-8">
          <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
            <Link className="text-white/70 hover:text-white transition-colors" to="/">
              <i className="fa-solid fa-home"></i>
            </Link>
            <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>
            <Link className="text-white/70 hover:text-white transition-colors" to="/blog">المدونة</Link>
            <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>
            <span className="text-orange-400 font-medium truncate max-w-[200px]">{post.category}</span>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link 
                className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors" 
                to={`/blog?category=${post.category}`}
              >
                {post.category}
              </Link>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <i className="fa-regular fa-calendar"></i>{post.date}
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa-regular fa-clock"></i>{post.readTime}
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
              <img 
                alt={post.author.name} 
                className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50" 
                src={post.author.avatar} 
              />
              <div>
                <p className="font-bold text-white">{post.author.name}</p>
                <p className="text-sm text-white/60">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* محتوى المقال */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          
          <div className="order-2 lg:order-1">
            <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
              <p className="text-lg text-neutral-200 leading-relaxed italic">"{post.excerpt}"</p>
            </div>

            <div className="prose-custom text-neutral-300 leading-relaxed text-lg space-y-6" >
                <p>{ post.content }</p>
            </div>

            <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-tags text-orange-500"></i>
                </div>
                <h3 className="font-bold text-white">الوسوم</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags && post.tags.map((tag, index) => (
                  <span key={index} className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* معلومات الكاتب */}
            <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img 
                  alt={post.author.name} 
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20" 
                  src={post.author.avatar} 
                />
                <div className="text-center sm:text-right flex-1">
                  <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">كاتب المقال</span>
                  <h3 className="text-xl font-bold text-white mt-1">{post.author.name}</h3>
                  <p className="text-neutral-500 text-sm mb-3">{post.author.role}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </div>

          </div>

          {/* الشريط الجانبي (Sidebar) */}
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">
              
              {/* وقت القراءة وتاريخ النشر */}
              <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                    <i className="fa-regular fa-clock text-orange-500 text-xl mb-2"></i>
                    <p className="text-white font-bold text-sm">{post.readTime}</p>
                    <p className="text-neutral-500 text-xs">وقت القراءة</p>
                  </div>
                  <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                    <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2"></i>
                    <p className="text-white font-bold text-sm">{post.date}</p>
                    <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                  </div>
                </div>
              </div>

              {/* اشتراك */}
              <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                <div className="text-center">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-white mb-2">لا تفوّت جديدنا</h3>
                  <p className="text-neutral-400 text-sm mb-4">اشترك للحصول على أحدث المقالات</p>
                  <Link className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center" to="/blog">
                    تصفح المزيد
                  </Link>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </article>
  );
};

