import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import postsData from '../../posts.json';
import FilterBar from '../components/FilterBar';
import PostCard from '../components/PostCard';


export default function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();
    // Single source of truth: URL. No extra state -> no sync effect needed.
    const activeCategory = searchParams.get('category') || 'جميع المقالات';

    const [searchQuery, setSearchQuery] = useState(''); 
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;

    const handleCategoryChange = (category) => {
    setCurrentPage(1);
    const next = new URLSearchParams(searchParams);
    if (category === 'جميع المقالات') {
      next.delete('category');
    } else {
      next.set('category', category);
    }
    setSearchParams(next);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 const filteredPosts = postsData.posts.filter((post) => {
    const matchesCategory = activeCategory === 'جميع المقالات' || post.category === activeCategory;
    const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <main className='flex-grow pt-20'>
        <div className="relative py-20 overflow-hidden">
  <div className="absolute inset-0 bg-[#0a0a0a]"></div>
  <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
  </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span className="section-label text-white inline-flex items-center gap-2 px-5 py-2 rounded-full bg-transparent border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
      <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
      </svg>
      مدونتنا
    </span>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
      استكشف <span className="text-orange-400">مقالاتنا</span>
    </h1>
    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
      اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
    </p>
  </div>
</div>


  <div className="min-h-screen bg-[#0a0a0a]">
  
      <FilterBar 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div className='max-w-7xl mx-auto my-8 flex items-center justify-between'>
        <div className="px-4 py-4 text-left text-neutral-400">
        عرض {filteredPosts.length} مقالات في {activeCategory}
      </div>
      <div className="flex items-center gap-2">
  <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
    <button
    onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'grid' 
                ? 'bg-orange-500 text-white shadow-md' 
                : 'text-neutral-400 hover:text-white'
            }`}
            aria-label="Grid View"
            title="عرض شبكي">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
      </svg>
    </button>
    <button 
    onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'list' 
                ? 'bg-orange-500 text-white shadow-md' 
                : 'text-neutral-400 hover:text-white'
            }`}
            aria-label="List View"
             title="عرض قائمة">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
</div>
      </div>
      

    <div className="max-w-7xl mx-auto px-4 pb-20">

        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <PostCard key={post.id} post={post} viewMode={viewMode} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-neutral-400">
              لا توجد مقالات مطابقة.
            </div>
          )}
        </div>

        {/*PAGINATION BUTTONS */}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">

    
            <button 
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === 1 
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" 
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
       
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNum = index + 1;
                const isActive = pageNum === currentPage;

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>


            <button 
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === totalPages 
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" 
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>

          </div>
        )}

      </div>
     
  </div>
   

 </main>
    
  )
}




