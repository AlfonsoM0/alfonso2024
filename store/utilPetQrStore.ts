import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UtilPetQrState = {
  n: string;
  a1: string;
  a2: string;
  p1: string;
  p2: string;
  i: string;
  e: string;

  QrColor: string;
  QrColorBg: string;
};

type UtilPetQrAcctions = {
  setName: (n: string) => void;
  setAddress1: (a1: string) => void;
  setAddress2: (a2: string) => void;
  setPhone1: (p1: string) => void;
  setPhone2: (p2: string) => void;
  setInfo: (i: string) => void;
  setEmail: (e: string) => void;

  setQrColor: (color: string) => void;
  setQrColorBg: (color: string) => void;
};

const initialUtilPetQrStore: UtilPetQrState = {
  n: '',
  a1: '',
  a2: '',
  p1: '',
  p2: '',
  i: '',
  e: '',

  QrColor: '#000000',
  QrColorBg: '#ffffff',
};

const useUtilPetQrStore = create<UtilPetQrState & UtilPetQrAcctions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialUtilPetQrStore,

        // Acctions
        setName: (n: string) => set({ n }),

        setAddress1: (a1: string) => set({ a1 }),

        setAddress2: (a2: string) => set({ a2 }),

        setPhone1: (p1: string) => set({ p1 }),

        setPhone2: (p2: string) => set({ p2 }),

        setInfo: (i: string) => set({ i }),

        setEmail: (e: string) => set({ e }),

        setQrColor: (color: string) => set({ QrColor: color }),

        setQrColorBg: (color: string) => set({ QrColorBg: color }),
      }),

      { name: 'util-pet-qr-store' }
    )
  )
);

export default useUtilPetQrStore;
