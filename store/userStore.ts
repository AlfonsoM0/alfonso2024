import { AlfonsoBotResponse } from '@/types';
import { InputContent } from '@google/generative-ai';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UserState = {
  appIsEnglish: boolean;
  alfonsobotChat: InputContent[];
};

type Action = {
  changeLanguage: () => void;
  addChatResponse: (resposne: AlfonsoBotResponse) => void;
  clearChatResponses: () => void;
};

const useUserStore = create<UserState & Action>()(
  devtools(
    persist(
      (set, get) => ({
        // State
        appIsEnglish: true,
        alfonsobotChat: [],

        // Actions
        changeLanguage: () => set(() => ({ appIsEnglish: !get().appIsEnglish })),

        addChatResponse: (resposne) =>
          set(() => ({ alfonsobotChat: [...get().alfonsobotChat, resposne] })),
        clearChatResponses: () =>
          set(() => ({
            alfonsobotChat: [],
          })),
      }),
      { name: 'userStore' }
    )
  )
);

export default useUserStore;
