$(".addtask").on("keyup",function(e){
    if(e.key == "Enter" && $(".addtask").val()!=""){
   var task=$("<div class='task'></div>").text($(".addtask").val());
   var del=$("<i class='fa fa-trash'></i>").click(function(){
       var p=$(this).parent();
       p.fadeTo("slow",0.2,function(){
           $(this).remove();
       });
   });
  
  
   var check=$("<i class='fa fa-check'></i>").click(function(){
       var p=$(this).parent();
       p.fadeTo("slow",0.2,function(){
           $(".comp").append(p);
        //    p.append(check);
           p.fadeIn("fast","swing");
       });
       $(this).remove();
   });
  
   task.append(del,check);
   $(".notcomp").append(task);
   $(".addtask").val("");

   
    }
});