import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UserState = {
  appIsEnglish: boolean;
};

type Action = {
  changeLanguage: () => void;
};

const useUserStore = create<UserState & Action>()(
  devtools(
    persist(
      (set, get) => ({
        // State
        appIsEnglish: true,

        // Actions
        changeLanguage: () => set(() => ({ appIsEnglish: !get().appIsEnglish })),
      }),
      { name: 'userStore' }
    )
  )
);

export default useUserStore;
