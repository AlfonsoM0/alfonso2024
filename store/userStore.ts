import { AlfonsoBotResponse } from '@/types';
import { InputContent } from '@google/generative-ai';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UserState = {
  appIsEnglish: boolean;
  alfonsobotChat: InputContent[];
  userQuery: string;
  isBotLoading: boolean;
  isBotError: boolean;
  adminKey: string;
};

type Action = {
  changeLanguage: () => void;
  setAppIsEnglish: (appIsEnglish: boolean) => void;
  addChatResponse: (resposne: AlfonsoBotResponse) => void;
  clearChatResponses: () => void;
  setUserQuery: (userQuery: string) => void;
  setIsBotLoading: (isBotLoading: boolean) => void;
  setIsBotError: (isBotError: boolean) => void;
  setAdminKey: (adminKey: string) => void;
};

const useUserStore = create<UserState & Action>()(
  devtools(
    persist(
      (set, get) => ({
        // State
        appIsEnglish: true,
        alfonsobotChat: [],
        userQuery: '',
        isBotLoading: false,
        isBotError: false,
        adminKey: '',

        // Actions
        changeLanguage: () => set(() => ({ appIsEnglish: !get().appIsEnglish })),

        setAppIsEnglish: (appIsEnglish) => set({ appIsEnglish }),

        addChatResponse: (resposne) =>
          set(() => ({ alfonsobotChat: [...get().alfonsobotChat, resposne] })),

        clearChatResponses: () =>
          set(() => ({
            alfonsobotChat: [],
            userQuery: '',
            isBotLoading: false,
            isBotError: false,
          })),

        setUserQuery: (userQuery) => set({ userQuery }),

        setIsBotLoading: (isBotLoading) => set({ isBotLoading }),

        setIsBotError: (isBotError) => set({ isBotError }),

        setAdminKey: (adminKey) => set({ adminKey }),
      }),
      { name: 'userStore' }
    )
  )
);

export default useUserStore;
