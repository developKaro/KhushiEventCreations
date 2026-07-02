import { supabase } from "../config/supabaseClient";

export const VendorService = {
  async getAll() {
    return await supabase.from("vendors").select("*");
  },

  async create(vendor) {
    return await supabase.from("vendors").insert([
      {
        ...vendor,
        status: "active",
        rating: 0
      }
    ]);
  },

  async update(id, data) {
    return await supabase.from("vendors").update(data).eq("id", id);
  },

  async getById(id) {
    return await supabase.from("vendors").select("*").eq("id", id).single();
  }
};