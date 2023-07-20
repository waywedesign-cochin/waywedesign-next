import {request, gql} from 'graphql-request'
import * as gqlQuery from './gql'

export const post = async ()=>{
    const url= "https://api-ap-south-1.hygraph.com/v2/clf3we3t74e4r01ugdh21hjyi/master";
    
  const res = await request(url,gqlQuery.postsQuery())
  return res
}
// export const getAllPost = async (id)=>{
//   const idObject={
//     slug:id
//   }
//     const url= "https://api-ap-south-1.hygraph.com/v2/clf3we3t74e4r01ugdh21hjyi/master";
    
//   const res = await request(url,gqlQuery.getAllPostQuery(),idObject)
//   return res
// }


export const getAlljobs = async()=>{
  const url = "https://api-ap-south-1.hygraph.com/v2/clhhc2dwb0yb901t98vga8v5n/master"

  const res = await request(url,gqlQuery.getAllJobsQuery())
  return res
}