import { supabase } from "../services/supabase.js";

export async function adminAuth(req, res, next) {

    try {

        const token = req.headers.authorization;

        if (!token) {

            return res.status(401).json({
                success: false,
                message: "Token tidak ditemukan"
            });

        }

        const jwt = token.replace("Bearer ", "");

        const { data, error } = await supabase.auth.getUser(jwt);

        if (error) {

            return res.status(401).json({
                success: false,
                message: "Token tidak valid"
            });

        }

        const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", data.user.id)
            .single();

        if (!profile || profile.role !== "admin") {

            return res.status(403).json({
                success: false,
                message: "Akses hanya untuk admin"
            });

        }

        req.user = data.user;

        next();

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

}
