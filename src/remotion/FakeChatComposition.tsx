import { Sequence, Audio, Video, AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import React from 'react';

export type Message = {
  text: string;
  alignment: 'left' | 'right';
};

export type Template = 'ios' | 'whatsapp' | 'instagram';

export type Props = {
  messages: Message[];
  video: string;
  audio?: string;
  template: Template;
  contactName?: string;
  aspectRatio?: '9:16' | '1:1' | '16:9';
};

const DURATION_PER_MESSAGE = 40; // ~1.3s at 30fps

const getBg = (template: Template) => {
  if (template === 'whatsapp') return '#e5ddd5';
  if (template === 'instagram') return 'linear-gradient(to bottom, #fff, #f8f9fa)';
  return '#f1f0f5'; // ios
};

const getHeaderStyle = (template: Template) => {
  const baseStyle = {
    padding: '16px 20px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  if (template === 'ios') {
    return {
      ...baseStyle,
      backgroundColor: '#f8f9fa',
      color: '#000000',
    };
  }
  if (template === 'whatsapp') {
    return {
      ...baseStyle,
      backgroundColor: '#075e54',
      color: '#ffffff',
    };
  }
  if (template === 'instagram') {
    return {
      ...baseStyle,
      background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcaf45 100%)',
      color: '#ffffff',
    };
  }
  return baseStyle;
};

const getBubbleStyle = (template: Template, alignment: 'left' | 'right') => {
  const baseStyle = {
    maxWidth: '70%',
    padding: '16px 20px',
    fontSize: '28px',
    lineHeight: '1.3',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    marginLeft: alignment === 'right' ? 'auto' : '8px',
    marginRight: alignment === 'right' ? '8px' : 'auto',
  };

  if (template === 'ios') {
    return {
      ...baseStyle,
      backgroundColor: alignment === 'right' ? '#3b82f6' : '#e5e7eb',
      color: alignment === 'right' ? '#ffffff' : '#000000',
      borderRadius: alignment === 'right' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
    };
  }
  if (template === 'whatsapp') {
    return {
      ...baseStyle,
      backgroundColor: alignment === 'right' ? '#dcf8c6' : '#ffffff',
      color: '#000000',
      borderRadius: alignment === 'right' ? '8px 8px 0px 8px' : '8px 8px 8px 0px',
      border: alignment === 'right' ? 'none' : '1px solid #e5e7eb',
    };
  }
  if (template === 'instagram') {
    return {
      ...baseStyle,
      background: alignment === 'right' 
        ? 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcaf45 100%)'
        : '#f3f4f6',
      color: alignment === 'right' ? '#ffffff' : '#000000',
      borderRadius: '22px',
      border: alignment === 'right' ? 'none' : '1px solid #e5e7eb',
    };
  }
  return baseStyle;
};

const FadeInBubble: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  return <div style={{ opacity }}>{children}</div>;
};

const FakeChatComposition: React.FC<Props> = ({ messages, video, audio, template, contactName = "Contact", aspectRatio = "9:16" }) => {
  const numSequences = Math.max(1, messages.length - 1);
  const isPortrait = aspectRatio === "9:16";
  
  return (
    <AbsoluteFill>
      {video && <Video src={video} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      {audio && <Audio src={audio} />}
      {[...Array(numSequences)].map((_, i) => (
        <Sequence key={i} from={i * DURATION_PER_MESSAGE} durationInFrames={DURATION_PER_MESSAGE}>
          <AbsoluteFill className="flex items-center justify-center">
            <div
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-xl overflow-hidden"
              style={{ 
                background: getBg(template), 
                height: isPortrait ? 600 : 400,
                maxWidth: isPortrait ? '400px' : '600px'
              }}
            >
              {/* Chat Header */}
              <div style={getHeaderStyle(template)}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: template === 'whatsapp' ? '#128c7e' : template === 'instagram' ? '#ffffff' : '#007aff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: template === 'instagram' ? '#833ab4' : '#ffffff',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}>
                  {contactName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '2px',
                  }}>
                    {contactName}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    opacity: 0.8,
                  }}>
                    {template === 'whatsapp' ? 'online' : template === 'instagram' ? 'active now' : 'Active now'}
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div style={{ 
                padding: '20px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px',
                flex: 1,
                overflow: 'hidden'
              }}>
                {[messages[i], messages[i + 1]].map(
                  (msg, idx) =>
                    msg && (
                      <div
                        key={idx}
                        style={{ display: 'flex', justifyContent: msg.alignment === 'right' ? 'flex-end' : 'flex-start' }}
                      >
                        <FadeInBubble>
                          <div style={getBubbleStyle(template, msg.alignment)}>
                            {msg.text}
                          </div>
                        </FadeInBubble>
                      </div>
                    )
                )}
              </div>
            </div>
          </AbsoluteFill>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default FakeChatComposition; 