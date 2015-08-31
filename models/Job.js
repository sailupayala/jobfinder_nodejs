var mongoose=require("mongoose");
var jobSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String}
});
 var Job=mongoose.model('Job',jobSchema);
 exports.seedJobs=function(){
     Job.find({}).exec(function(error,collection){
         if(collection.length===0){
            Job.create({title:'Cook',description:'ull making bagel'}); 
            Job.create({title:'Waiter',description:'You will putting food'});
            Job.create({title:'Programmer',description:'writing programs'});
            Job.create({title:'Axe maker',description:'we need axes'});
         }
         
     })
 }