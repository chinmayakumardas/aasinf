// 'use client'
// import { useRouter } from 'next/navigation';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { posts } from '@/lib/posts';  // Import static posts

// const PostPage = () => {
//   const router = useRouter();
//   const { slug } = router.query;  // Get slug from URL
//  // Check if slug is undefined or if we're still waiting for the slug to load
//  if (!slug) {
//   return <p>Loading...</p>;  // You can return a loading state while slug is not available
// }
//   const post = posts.find((p) => p.slug === slug);  // Find the post based on slug

//   if (!post) {
//     return <p>Post not found</p>;
//   }

//   return (
//     <div className="post-detail">
//       <Card shadow="lg" className="post-card-detail">
//         <p fontSize="2xl" fontWeight="bold">{post.title}</p>
//         <p fontSize="sm" color="gray">{new Date(post.publishedAt).toLocaleDateString()}</p>
//         <p>{post.content}</p>
//         <Button onClick={() => alert('Liked!')} variant="outline">Like</Button>
//         <p>Likes: {post.likes}</p>
//       </Card>
//     </div>
//   );
// };

// export default PostPage;
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Share2, ArrowLeft } from 'lucide-react';
import { posts } from '@/lib/posts';
 
const PostPage = () => {
  const params = useParams();
  const [liked, setLiked] = useState(false);
 
  const post = posts.find((p) => p.slug === params.slug);
 
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }
 
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <Badge variant="secondary" className="mb-4 text-sm capitalize w-fit">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/90">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
 
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <Card className="p-8 shadow-xl">
          <CardContent className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
          <CardFooter className="flex items-center justify-between mt-8 pt-8 border-t">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className={`gap-2 ${liked ? 'text-red-500' : ''}`}
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                {post.likes + (liked ? 1 : 0)} likes
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
            <Link href="/blog">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
 
export default PostPage;