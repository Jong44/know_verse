import { create } from "zustand";


interface ProcedDocument {
    document: DocType;
    setDocument: (document: DocType) => void;
    resetDocument: () => void;
}

const useCreateDocument = create<ProcedDocument>((set) => ({
    document: {
        id: "",
        judul: "",
        kode_matkul: "",
        url_presentation: "",
        url_finished: "",
        detail_document: [],
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
    },
    setDocument: (document) => set({ document }),
    resetDocument: () => set({ document: {
        id: "",
        judul: "",
        kode_matkul: "",
        url_presentation: "",
        url_finished: "",
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
     }
    }),
}));

export default useCreateDocument;