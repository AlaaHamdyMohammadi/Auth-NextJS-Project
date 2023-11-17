import { handleClientScriptLoad } from "next/script";

function helper(req, res){
    // 1- Must sure the request is patch to update password
    if(req.method !== 'PATCH'){
        return;
    }
    // 2- Check if user authenticated or not
}

export default handler;