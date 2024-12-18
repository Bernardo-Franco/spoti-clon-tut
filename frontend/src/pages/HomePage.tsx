import FeaturedSongsSection from '@/components/FeaturedSongsSection';
import MadeForYouSongsSection from '@/components/MadeForYouSongsSection';
import Topbar from '@/components/Topbar';
import TrendingSongsSection from '@/components/TrendingSongsSection';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMusicStore } from '@/stores/useMusicStore';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { useEffect } from 'react';

const HomePage = () => {
  const {
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    isLoading,
    madeForYouSongs,
    trendingSongs,
    featuredSongs,
  } = useMusicStore();

  const { initializeQueue } = usePlayerStore();

  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

  useEffect(() => {
    if (
      featuredSongs.length > 0 &&
      madeForYouSongs.length > 0 &&
      trendingSongs.length > 0
    ) {
      const allSongs = [...featuredSongs, ...trendingSongs, ...madeForYouSongs];
      initializeQueue(allSongs);
    }
  }, [initializeQueue, madeForYouSongs, trendingSongs, featuredSongs]);

  return (
    <main className="rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900">
      <Topbar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Good DAY</h1>
          <FeaturedSongsSection />

          <div className="space-y-8">
            <MadeForYouSongsSection
              songs={madeForYouSongs}
              isLoading={isLoading}
            />
            <TrendingSongsSection songs={trendingSongs} isLoading={isLoading} />
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};
export default HomePage;
