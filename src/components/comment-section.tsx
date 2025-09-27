import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const comments = [
  {
    id: 1,
    author: 'Jane Smith',
    avatarId: 'avatar-2',
    time: '2 hours ago',
    text: 'This was a great explanation! Really cleared up my confusion about CSS Flexbox.',
  },
  {
    id: 2,
    author: 'Alex Doe',
    avatarId: 'avatar-1',
    time: '1 day ago',
    text: "Can someone explain the difference between `let`, `const`, and `var` in JavaScript again? I'm a bit lost.",
  },
];

export function CommentSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold font-headline">Discussion</h2>
      
      {/* Post a comment */}
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=5" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
        <div className="w-full space-y-2">
          <Textarea placeholder="Add a comment..." />
          <div className="flex justify-end">
            <Button>Post Comment</Button>
          </div>
        </div>
      </div>

      {/* Existing comments */}
      <div className="space-y-6">
        {comments.map((comment) => {
          const avatar = PlaceHolderImages.find((img) => img.id === comment.avatarId);
          return (
            <div key={comment.id} className="flex gap-4">
              <Avatar>
                {avatar && <AvatarImage src={avatar.imageUrl} alt={avatar.description} />}
                <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="w-full">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{comment.time}</span>
                </div>
                <p className="text-sm text-foreground">{comment.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
