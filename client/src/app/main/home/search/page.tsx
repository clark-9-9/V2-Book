"use client";

import { BooksType } from "@/app/types/app";
import GridBookContainer from "@/components/GridBookContainer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import amazon_books from "@/data/amazon-books.json";

export default function Search() {
    const [books, setBooks] = useState<BooksType[]>([]);
    const [notFound, setNotFound] = useState(false);

    const searchParams = useSearchParams();
    const searched = searchParams.get("searched");
    const limit = searchParams.get("limit") || "50000";

    useEffect(() => {
        const fetchSearchedBooks = async () => {
            const res = amazon_books.filter((book) => {
                return book.title
                    .toLowerCase()
                    .includes(searched!.toLowerCase());
            });
            setBooks(res);
            if (res.length === 0) setNotFound(true);
        };
        fetchSearchedBooks();
    }, []);
    return (
        <div className="home_page ml-[220px] flex flex-col justify-center gap-4 p-4">
            <h2 className="text-xl font-bold text-white">
                Searched Results for: {searched}
                <p>{notFound && " No books found"}</p>
            </h2>
            <hr className="border-white border-opacity-20" />
            <GridBookContainer books={books} setBooks={setBooks} />
        </div>
    );
}
