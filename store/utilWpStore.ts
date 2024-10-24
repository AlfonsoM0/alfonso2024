import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UtilWpState = {
  phone_area1: string;
  phone_area2: string;
  phone_local: string;
  msg1: string;
  msg2: string;
  msg3: string;
};

type UtilWpAcctions = {
  setPArea1: (area1: string | undefined) => void;
  setPArea2: (area2: string | undefined) => void;
  setPLocal: (local: string | undefined) => void;
  setMsg1: (msg: string | undefined) => void;
  setMsg2: (msg: string | undefined) => void;
  setMsg3: (msg: string | undefined) => void;
};

const initialUtilWpStore: UtilWpState = {
  phone_area1: '',
  phone_area2: '',
  phone_local: '',
  msg1: '',
  msg2: '',
  msg3: '',
};

const useUtilWpStore = create<UtilWpState & UtilWpAcctions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialUtilWpStore,

        // Acctions
        setPArea1: (phone_area1) => set({ phone_area1: phone_area1 || '' }),

        setPArea2: (phone_area2) => set({ phone_area2: phone_area2 || '' }),

        setPLocal: (phone_local) => set({ phone_local: phone_local || '' }),

        setMsg1: (msg) => set({ msg1: msg || '' }),
        setMsg2: (msg) => set({ msg2: msg || '' }),
        setMsg3: (msg) => set({ msg3: msg || '' }),
      }),

      { name: 'util-wp-store' }
    )
  )
);

export default useUtilWpStore;
