import { CREATE_POST } from "../redux/types"

export function createPost(post){
    console.log(post);
    return{
    type:CREATE_POST,
    payload:post
    }

}