interface DocType {
    id: number;
    judul: string;
    kode_matakuliah?: string;
    url_presentation?: string;
    url_finished?: string;
    detail_document?: DetailDocType[];
    updated_at: Date;
    created_at: Date;
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