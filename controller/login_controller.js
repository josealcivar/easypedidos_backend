const loginUsers = (db, userName) => {
    return new Promise((resolve, reject) =>
       db.collection('user')
         .find({ 'username': userName })
         .toArray((err, docs) => {
            if(docs && docs.length>0){
               resolve(docs[0]);
            }else{
               reject();
            }
       })
    )
  }
 
 const updateUserPassword = (db, userName,pwd) => {
   return db.collection('user').updateOne({'username': userName }, {
     $set: {password:pwd} 
   })
   .then((r) => {
     return Promise.resolve(r.matchedCount);
   })
   .catch((err) => {
     return Promise.reject(err);
   })
 }

 // retorno de todas las funciones
return module.exports={
  loginUsers,
  updateUserPassword
};