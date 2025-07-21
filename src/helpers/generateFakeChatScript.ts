export default function generateFakeChatScript(
  messages: { text: string }[],
): string {
  return messages.map((msg) => `${msg.text}`).join(". ");
}
