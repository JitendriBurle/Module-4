import { supabase } from '../config/supabase.js';

export const findUserByEmail = async (email) => {
  return await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();
};

export const createUser = async (data) => {
  return await supabase.from('users').insert([data]).select();
};

export const getAllUsers = async () => {
  return await supabase.from('users').select('*');
};

export const getUserById = async (id) => {
  return await supabase.from('users').select('*').eq('id', id).single();
};

export const updateUser = async (id, data) => {
  return await supabase
    .from('users')
    .update(data)
    .eq('id', id)
    .select();
};

export const deleteUser = async (id) => {
  return await supabase.from('users').delete().eq('id', id);
};
