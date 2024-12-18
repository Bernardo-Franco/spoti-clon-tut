import { Song } from '@/types';
import FeaturedGridSkeleton from './skeletons/FeaturedGridSkeleton';
import { Button } from './ui/button';
import PlayButton from './PlayButton';

type sectionProps = {
  songs: Song[];
  isLoading: boolean;
};
const MadeForYouSongsSection = ({ songs, isLoading }: sectionProps) => {
  if (isLoading) return <FeaturedGridSkeleton />;
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4 ">
        <h2 className="text-xl sm:text-2xl font-bold">Songs made for you</h2>
        <Button
          variant="link"
          className="text-sm text-zinc-400 hover:text-white"
        >
          Show all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {songs.map((song) => (
          <div
            key={song._id}
            className="bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 transition-all group cursor-pointer"
          >
            <div className="relative mb-4">
              <div className="aspect-square rounded-md shadow-lg overflow-hidden">
                <img
                  src={song.imageUrl}
                  alt={song.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <PlayButton song={song} />
              </div>
            </div>
            <h3 className="font-medium mb-2 truncate">{song.title}</h3>
            <p className="text-sm text-zinc-400 truncate">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MadeForYouSongsSection;