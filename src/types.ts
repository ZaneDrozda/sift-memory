export interface Memory {
  id: string;
  content: string;
  summary: string | null;
  tags: string[];
  source: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface StoreMemoryInput {
  content: string;
  summary?: string;
  tags?: string[];
  source?: string;
}

export interface SearchMemoryInput {
  query: string;
  tags?: string[];
  limit?: number;
  since?: string;
  until?: string;
}

export interface ListMemoriesInput {
  tags?: string[];
  limit?: number;
  offset?: number;
  since?: string;
  until?: string;
}

export interface DeleteMemoryInput {
  id: string;
}

export interface ImportConversationsInput {
  conversations: ClaudeConversation[];
}

export interface ClaudeConversation {
  uuid: string;
  name: string;
  created_at: string;
  updated_at: string;
  chat_messages: ClaudeChatMessage[];
}

export interface ClaudeChatMessage {
  uuid: string;
  text: string;
  sender: "human" | "assistant";
  created_at: string;
}
