var fs=require('fs');
function WriteFile(FileName,Content){

  fs.writeFile(FileName,Content,function(err){
  if(err){

    console.log("Dosya Yazarken Hata Oluştu");

  }
  else{
    console.log("Dosya Başarılı Oluştu");
  }

  })
}


function ReadFile(FileName){

 fs.readFile(FileName,"utf-8",function(err,data){
if(err){

  console.log("Hata Oluştu");
}
else{
    console.log("Başarılı");
    console.log(data);
}
 })
 }
module.exports={
  WriteFile,
  ReadFile
}
