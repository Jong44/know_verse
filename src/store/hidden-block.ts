import { create } from 'zustand';

type BlockMeta = {
  status: 'visible' | 'hidden';
  detailId?: number;
};

type BlockMetaStore = {
  meta: Record<string, BlockMeta>; // blockId -> metadata
  setStatus: (blockId: string, status: 'visible' | 'hidden') => void;
  setDetailId: (blockId: string, detailId: number) => void;
  setBulk: (meta: Record<string, BlockMeta>) => void;
};

export const useBlockMetaStore = create<BlockMetaStore>((set) => ({
  meta: {},

  setStatus: (blockId, status) =>
    set((state) => ({
      meta: {
        ...state.meta,
        [blockId]: {
          ...state.meta[blockId],
          status,
        },
      },
    })),

  setDetailId: (blockId, detailId) =>
    set((state) => ({
      meta: {
        ...state.meta,
        [blockId]: {
          ...state.meta[blockId],
          detailId,
        },
      },
    })),

  setBulk: (bulkMeta) =>
    set(() => ({
      meta: bulkMeta,
    })),
}));
