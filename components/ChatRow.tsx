import { Doc, Id } from '@/convex/_generated/dataModel';
import { useNavigation } from '@/lib/NavigationProvider';
import { useQuery } from 'convex/react';
// import { useRouter } from 'next/router';

export default function ChatRow({
  chat,
  onDelete,
}: {
  chat: Doc<'chats'>;
  onDelete: (id: Id<'chats'>) => void;
}) {
  //   const router = useRouter();
  const { closeMobileNav } = useNavigation();

  const handleClick = () => {
    router.push(`/dashboard/chat/${chat._id}`);
    closeMobileNav();
  };

  return (
    <div
      className='group rounded-xl border border-gray-200/30 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md'
      onClick={handleClick}
    >
      <div className='p-4'>
        <div className='flex justify-between items-start'>Chat</div>
        {/* {lastMessage && (
          <p className="text-xs text-gray-400 mt-1.5 font-medium">
            <TimeAgo date={lastMessage.createdAt} />
          </p>
        )} */}
      </div>
    </div>
  );
}
