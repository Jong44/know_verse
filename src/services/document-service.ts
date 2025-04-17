import { PartialBlock } from "@blocknote/core";

export const DocumentService = () => {
    const createDocument = async (data: DocType) => {
        console.log("Document created:", data);
        const randomIdPresentation = Math.floor(Math.random() * 1000);
        const randomIdFinished = Math.floor(Math.random() * 1000);
        const newData = {
            ...data,
            url_presentation: `${window.location.origin}/user/presentation/example-${randomIdPresentation}`,
            url_finished: `${window.location.origin}/user/finished/example-${randomIdFinished}`,
        }
        localStorage.setItem("document", JSON.stringify(newData));
    };

    const getDocument =  () => {
        const doc = localStorage.getItem("document");
        if (doc) {
            return JSON.parse(doc) as DocType;
        }
        return null;
    };

    const saveDetailDocument = async (data: any) => {
        console.log("Detail Document created:", data);
        localStorage.setItem("detailDocument", JSON.stringify(data));
    }

    const getDetailDocument = async () => {
        // Gets the previously stored editor contents.
      const storageString = localStorage.getItem("detailDocument");
      return storageString
        ? (JSON.parse(storageString) as PartialBlock[])
        : undefined;
    };


    
    return { createDocument, getDocument, saveDetailDocument, getDetailDocument };
}
