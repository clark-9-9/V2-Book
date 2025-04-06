"use client";
import { BooksType } from "@/app/types/app";
import GridBookContainer from "@/components/GridBookContainer";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const [books, setBooks] = useState<BooksType[]>([]);
    const params = useParams<{ info: string[] }>();
    const collection_name = params.info[0];
    const collection_id = params.info[1];

    return (
        <div className="home_page ml-[220px] flex flex-col justify-center gap-4 p-4">
            <h2 className="text-xl font-bold text-white">Random Collection</h2>

            <hr />

            <GridBookContainer books={books} setBooks={setBooks} />
        </div>
    );
}
