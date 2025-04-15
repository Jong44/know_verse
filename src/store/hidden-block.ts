import { create } from "zustand";

interface HiddenBlock { 
    id: string;
    hidden: boolean;
}

interface ListHiddenBlock {
    hiddenBlocks: HiddenBlock[];
    updateItems: (id: string) => void;
}

const useHiddenBlock = create<ListHiddenBlock>((set) => ({
    hiddenBlocks: [],

    updateItems: (id: string) => set((state) => {
        const block = state.hiddenBlocks.find((block) => block.id === id);
        if (block) {
            block.hidden = !block.hidden;
        } else {
            state.hiddenBlocks.push({id, hidden: true});
        }
        return { hiddenBlocks: state.hiddenBlocks };
    })
}));

export default useHiddenBlock;