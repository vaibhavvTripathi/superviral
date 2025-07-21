
# Remotion Video Assignment


## 🎥 Demo

- [Google Drive (Sample Renders, Assets, etc.)](https://drive.google.com/drive/folders/1_KRsAhoG71xk6MCAbIT9Io8hUTl6Pa_j?usp=sharing)

This project is a Next.js + Remotion app for generating programmatic videos, including:
- **Reddit Story Generator (available at /reddit-story)**: Turn Reddit stories into narrated videos with subtitles and dynamic backgrounds.
- **FakeChat Videos (available at /fakechat)**: Create viral fake chat conversations as engaging videos.
- **Split Screen Videos (available at /splitscreen)**: Effortlessly generate split-screen videos for comparisons and reactions.

Built with Remotion, Next.js App Router, TailwindCSS, Zustand, Google TTS and TanstackQuery.

---

## 🚀 Features
- **Reddit Story to Video**: Paste a Reddit story, customize voice, background, and subtitle style, and generate a video.
- **FakeChat Video**: Compose chat messages, pick a template (iOS, WhatsApp, Instagram), and render a chat animation.
- **Split Screen Video**: Upload two videos, add a caption, and create a split-screen comparison with animated subtitles.
- **Text-to-Speech (TTS)**: Uses Google Cloud TTS for AI narration.
- **Customizable Subtitles**: Choose font, color, outline, and more.
- **Animated Subtitles**: All subtitles/messages fade in smoothly.

---

## 🛠️ Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the Next.js dev server:**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000)


3. **Open Remotion Studio:**
   ```sh
   npm run remotion
   ```
   This opens the Remotion editor for live preview and editing.

4. **Render a video locally:**
   ```sh
   npm run render
   ```
   This renders all main compositions (FakeChat, RedditStory, SplitScreen) to "/out" folder in root directory.

---

## 🧩 Usage

### Reddit Story Generator
- Go to `/reddit-story`
- Enter Reddit username, post title, and story script
- Customize subtitle style, background, and voice
- Preview and download the generated video

### FakeChat Video
- Go to `/fakechat`
- Compose chat messages, pick a template (iOS, WhatsApp, Instagram)
- Preview and download the chat video

### Split Screen Video
- Go to `/splitscreen`
- Upload/select two videos, add a caption
- Customize subtitle style and voice
- Preview and download the split-screen video

---

## 🖌️ Customization
- **Subtitle Style**: Choose font, color, outline, and more for subtitles in all video types
- **Voice**: Select AI voice for narration (Google Cloud TTS)
- **Background**: Set custom video/image backgrounds
- **Templates**: Choose chat/video templates for different looks

---

## 🏗️ Project Structure

- `src/app/` - Next.js app routes and pages
- `src/components/` - UI components and stepper forms
- `src/remotion/` - Remotion compositions and video logic
- `src/store/` - Zustand stores for form state
- `src/apicalls/` - API integrations (TTS, etc.)
- `public/` - Static assets (videos, audios, thumbnails)
- `types/` - TypeScript types and schemas

---


## 🤝 Contributing & Help
- For issues, use the GitHub Issues page
- For Remotion help, join the [Remotion Discord](https://remotion.dev/discord)
- For feature requests or bugs, open an issue or PR

---

## 📄 License
This project uses Remotion, which may require a company license for some use cases. See [Remotion License](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md) for details.
