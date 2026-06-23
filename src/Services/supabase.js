import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jjctwqyscmkbmrzdgkug.supabase.co";
const supabaseKey = "sb_publishable_xqmrB4z9sM9rBIMzINpmkg_VAnUFS_K";

export const supabase = createClient(supabaseUrl, supabaseKey);