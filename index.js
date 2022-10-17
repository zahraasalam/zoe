const p1=function(name,age){
    return new Promise((resolve,reject)=>{
     const p2 = Promise.all([45,30,45, Promise.resolve('older')]);
     const p3 = Promise.all([19,16, Promise.reject('youths')]);
        const p1=p2.filter(p2=>p2.age<45)

    })
    console.log(p1)
    console.log(p2)
    console.log(p3)
 } 
  