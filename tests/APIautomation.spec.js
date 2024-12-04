import { test, expect } from '@playwright/test';
var userid;
test("getrequest", async ({ request }) => {
   const response= await request.get('https://reqres.in/api/users?page=2')
   console.log(await response.json());
   expect(await response.status()).toBe(200)
})

test("createuser", async ({ request }) => {
   const response=await request.post('https://reqres.in/api/users',
    { 
    data:{
        "name": "morpheus",
        "job": "leader"
    },
    headers:{
"accept":"application/json"
    }
    });
    
    console.log(await response.json());
    expect(await response.status()).toBe(201)
  var res=await response.json();
  userid=res.id
 
 })


 test("updateuser", async ({ request }) => {
    const response=await request.put('https://reqres.in/api/users/'+userid,
     { 
     data:{
         "name": "morpheus_updated",
         "job": "leader_new"
     },
     headers:{
 "accept":"application/json"
     }
     });
     
     console.log(await response.json());
     expect(await response.status()).toBe(200)
  
  })
  test("deleteuser", async ({ request }) => {
    const response=await request.delete('https://reqres.in/api/users/'+userid)
         
        expect(await response.status()).toBe(204)
  
  })