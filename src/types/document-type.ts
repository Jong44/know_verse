interface DocType {
    id: string;
    judul: string;
    kode_matkul: string;
    url_presentation?: string;
    url_finished?: string;
    detail_document?: DetailDocType[];
    updated_at: string;
    created_at: string;
}

interface DetailDocType {
    id: string;
    type: string;
    content: string;
    order: number;
    status: string;
    created_at: string;
    updated_at: string;
}