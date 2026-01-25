const supabase = require('../config/supabase');

exports.registerCustomer = async (req, res) => {
    const { full_name, email, phone } = req.body;

    if(!full_name || !email || !phone){
        return res.status(400).json({ message: "All fields are required" });
    }

    const { data: existing } = await supabase
    .form('customers')
    .select('id')
    .eq('email', email)
    .single();

    if(existing){
        return res.status(409).json({ message: "Email already exists" });
    }

    const { error } = await supabase
    .from('customers')
    .insert([{ full_name, email, phone }]);

    if(error){
        return res.status(500).json({ message: error.message });
    }

    res.status(201).json({ message: "Customer registered successfully" });
};