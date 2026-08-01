import { supabase } from "../services/supabase.js";

export async function getBooks(req, res) {

    const { data, error } = await supabase
        .from("books")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {

        return res.status(500).json({
            success: false,
            error: error.message
        });

    }

    res.json({
        success: true,
        books: data
    });

}

export async function getBook(req, res) {

    const { id } = req.params;

    const { data, error } = await supabase
        .from("books")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {

        return res.status(404).json({
            success: false,
            error: error.message
        });

    }

    res.json({
        success: true,
        book: data
    });

}
