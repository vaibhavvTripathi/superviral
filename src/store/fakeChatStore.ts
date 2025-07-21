import {create} from 'zustand';

type Message = {
  text: string;
  alignment: 'left' | 'right';
};

type Template = 'ios' | 'whatsapp' | 'instagram';
type FakeChatAspectRatio = '9:16' | '1:1' | '16:9';

type FakeChatState = {
  name: string;
  template: Template;
  messages: Message[];
  selectedVideo: string | null;
  audioUrl: string | null;
  aspectRatio: FakeChatAspectRatio;
  setName: (name: string) => void;
  setTemplate: (template: Template) => void;
  setMessages: (messages: Message[]) => void;
  addMessage: (msg: Message) => void;
  updateMessage: (index: number, msg: Message) => void;
  deleteMessage: (index: number) => void;
  setSelectedVideo: (video: string) => void;
  setAudioUrl: (url: string) => void;
  setAspectRatio: (aspectRatio: FakeChatAspectRatio) => void;
  reset: () => void;
};

const initialMessages: Message[] = [
  { text: 'Hey, how are you?', alignment: 'left' },
  { text: "I’m good! How about you?", alignment: 'right' },
  { text: 'Doing great, thanks!', alignment: 'left' },
  { text: 'Want to catch up later?', alignment: 'right' },
  { text: 'Sure, what time?', alignment: 'left' },
  { text: 'Maybe around 6pm?', alignment: 'right' },
  { text: 'Sounds perfect!', alignment: 'left' },
  { text: 'Should I bring snacks?', alignment: 'right' },
  { text: 'Of course! Chips and soda?', alignment: 'left' },
  { text: 'You know me too well 😂', alignment: 'right' },
  { text: 'See you then!', alignment: 'left' },
  { text: 'See you!', alignment: 'right' },
  { text: 'Don’t forget the movie!', alignment: 'left' },
  { text: 'Already downloaded it!', alignment: 'right' },
];

export const useFakeChatStore = create<FakeChatState>((set) => ({
  name: 'Alex',
  template: 'ios',
  messages: initialMessages,
  selectedVideo: null,
  audioUrl: null,
  aspectRatio: '9:16',
  setName: (name: string) => set({ name }),
  setTemplate: (template: Template) => set({ template }),
  setMessages: (messages: Message[]) => set({ messages }),
  addMessage: (msg: Message) => set((state: FakeChatState) => ({ messages: [...state.messages, msg] })),
  updateMessage: (index: number, msg: Message) => set((state: FakeChatState) => ({
    messages: state.messages.map((m: Message, i: number) => (i === index ? msg : m)),
  })),
  deleteMessage: (index: number) => set((state: FakeChatState) => ({
    messages: state.messages.filter((_: Message, i: number) => i !== index),
  })),
  setSelectedVideo: (video: string) => set({ selectedVideo: video }),
  setAudioUrl: (url: string) => set({ audioUrl: url }),
  setAspectRatio: (aspectRatio: FakeChatAspectRatio) => set({ aspectRatio }),
  reset: () => set({
    name: 'Alex',
    template: 'ios',
    messages: initialMessages,
    selectedVideo: null,
    audioUrl: null,
    aspectRatio: '9:16',
  }),
})); 