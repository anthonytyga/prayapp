$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // Do something
    if(scroll>20)
    {
      //  alert(scroll);
        $(".navbar-default").addClass('navbar-fixed-top');
    }else
    {
        $(".navbar-default").removeClass('navbar-fixed-top');

    }
});


function syncin(us,ps,url,mer)
{

        $.ajax(
            {
                url:"syncin.php",
                data:{theemail:us,thepassword:ps,url:url,mer:mer},
                type:"POST",
                success:function(data,success)
                {

                    data = data.trim();
                    if( data==null || data=='') {
                    $('.error-box').html("<div class='alert alert-danger'>Invalid login details</div>");
                        alertme('Invalid login details','top','error');

                    }else
                    {
    document.location.href="index";

                    }

                },
                error:function()
                {
                    alert('Please check your Internet connection');
                }
            }
        )
    }


$('#submitjob').click(function()
{
    var title = $('#title').val();
    var usertype = $('#usertype').val();
    var userid = $('#uide').val();
    var content= $('#jobdesc').val();
    var apply_email= $('#jemail').val();
    var catid= $('#jobcat').val().trim();
    var keywords= $('#jobtags').val();
    var jobtype = $('#jobtype').val();
    var location= $('#location').val();
    var experience= $('#experience').val();
    var degree= $('#degree').val();
    var contperson= $('#contperson').val();
    var contphone= $('#contphone').val();
    var salary = parseInt($('#salary').val());
    var deadline= $('#deadline').val();

    if(title.trim()!="" && title.trim()!=null && userid.trim()!="" && usertype.trim()=="2"
        && jobtype.trim()!="" && experience.trim!=""
        && content.trim().length>10)  {
        jobpost(usertype, userid, title, content, catid, keywords,
            location, jobtype, apply_email,experience,degree,
            contperson,contphone,salary,deadline);
    }else
    {

        alertme("<br>Job post failed, please fill form adequately <br> make sure you fill input with * &nbsp;","top","error");
    }
});


$('#updatejob').click(function()
{
    var title = $('#title').val();
    var usertype = $('#usertype').val();
    var userid = $('#uide').val();
    var content= $('#jobdesc').val();
    var apply_email= $('#jemail').val();
    var catid= $('#jobcat').val().trim();
    var keywords= $('#jobtags').val();
    var jobtype = $('#jobtype').val();
    var location= $('#location').val();
    var experience= $('#experience').val();
    var degree= $('#degree').val();
    var contperson= $('#contperson').val();
    var contphone= $('#contphone').val();
    var salary = parseInt($('#salary').val());
    var deadline= $('#deadline').val();
    var jobid= $('#jobide').val();
    if(title.trim()!="" && title.trim()!=null && userid.trim()!="" && usertype.trim()=="2"
        && jobtype.trim()!="" && experience.trim!=""
        && content.trim().length>10) {
        updatepost(usertype, userid, title, content, catid, keywords,
            location, jobtype, apply_email,experience,degree,
            contperson,contphone,salary,deadline,jobid);

    }else
    {

        alertme("<br>Job post failed, please fill form adequately <br> &nbsp;","top","error");
    }
});

function jobpost(usertype,userid,title,content,
                 catid,keywords,location,jobtype,
                 apply_email,experience,
                 degree,contperson,contphone,salary,deadline)
{

    $.ajax({
        url:"putjob.php",
        data:{usertype:usertype,
            userid:userid,
            title:title,content:content,
            catid:catid,
            keywords:keywords,
            location:location,
            jobtype:jobtype,
            apply_email:apply_email,
            experience:experience,
            degree:degree,
        contperson:contperson,
        contphone:contphone,
        salary:salary,
        deadline:deadline,
        requirements:dat,
        responsibility:rast},
        type:"POST",
        success:function(data,success)
        {

            if(data.trim()=="success")
        {


            var typ = "success";
            var position = "top";
            var msg = "<br>Job post was successful <br>&nbsp; ";
alertme(msg,position,typ);
$('#submitjob').addClass('hidden');
        }else{

                var typ = "information";
                var position = "top";
                var msg = "<br>Please update your profile, <br>to activate posting of jobs. &nbsp; ";
                alertme(msg,position,typ);
            }

        },
        error:function()
        {
alertme("<br>Please check your internet connection<b>&nbsp;","top","error");
        }
    })
}



var dat = [];
function addreg(t)
{ var t  = t;
    if(t.trim()!="") {
var cd = dat.length;
      var  da = '<li id="reqq-'+cd+'">'+t+'</li>';
      var  da2 = '<li  id="reqq-'+cd+'">'+t+' <button data-rs="reqq-'+cd+'" onclick="removrq(\'#reqq-'+cd+'\')"  class="btn btn-xs delrequ pull-right  btn-danger">' +
          '<i class="fa  fa-close"></i></button></li>';
     $('#reggg').append(da2);
$('#requir').val('');
        dat.push(da);
      // alert(dat);
    }

}


 function removrq(d)
 {
console.log(dat);
    var kk = d.split('-');
   console.log(kk);
    delete  dat[kk['1']];
     var r = '#reqq-'+kk['1'];
     $(r).remove();
}


var rast = [];
function addresp(t)
{var t  = t;
    if(t.trim()!="") {
        var cd = rast.length;
        var  da = '<li id="respt-'+cd+'">'+t+'</li>';
        var  da2 = '<li  id="respt-'+cd+'">'+t+' <button data-rs="respt-'+cd+'" onclick="removresp(\'#respt-'+cd+'\')"  class="btn btn-xs delrequ pull-right  btn-danger">' +
            '<i class="fa  fa-close"></i></button></li>';
        $('#respd').val('');
        $('#respt').append(da2);

        rast.push(da);
        // alert(dat);
    }

}

function removresp(d)
{
    var kk = d.split('-');
    console.log(kk);
    delete  rast[kk['1']];
    var r = '#respt-'+kk['1'];
    $(r).remove();
}


function updatepost(usertype, userid, title, content, catid, keywords,
                    location, jobtype, apply_email,experience,degree,
                    contperson,contphone,salary,deadline,jobid)
{


    $.ajax({
        url:"updatejob.php",
        data:{
            usertype:usertype,
            userid:userid,
            title:title,content:content,
            catid:catid,
            keywords:keywords,
            location:location,
            jobtype:jobtype,
            apply_email:apply_email,
            experience:experience,
            degree:degree,
            contperson:contperson,
            contphone:contphone,
            salary:salary,
            deadline:deadline,
            requirements:dat,
            responsibility:rast,
            jobid:jobid},
        type:"POST",
        success:function(data,success)
        {
            if(data.trim()=="success")
            {


                var typ = "success";
                var position = "top";
                var msg = "<br>Job post was successful <br>&nbsp; ";
                alertme(msg,position,typ);

            }

        },
        error:function()
        {
            alertme("<br>Please check your internet connection<b>&nbsp;","top","error");
        }
    })
}


function alertme(msg,position,typ)
{
 $.ajax({
        url:"notification.php",
        data:{typ:typ,position:position,msg:msg},
        success:function(data,success)
        {
            $("#noty_top_layout_container").html("");
            $(document).prepend(data);
        }
    });
}


$('.aqpplybtns').click(function()
{

    var apid = $(this).attr('data-apply-ref');
    var cll = '.applied'+apid;

    $.ajax({
        url: "appliedforjobsajax.php",
        data: {jobid:apid},
        type: "POST",
        success: function (data, success) {

            if (data == "success") {
                alertme('your CV as been sent to the Employer', 'top', 'success');
            }
            else if(data == "applied")
            {
                alertme("You have already applied for this job",'top','information');
            }
            else if(data=="no-requirement")
            {
                alertme("You do not meet job requirement ,<br> go to profile to update important inform. ",'top','information');

            }

            else
            {

               alertme("<br> <i class='fa fa-lock'></i> Please log in as an employee to apply<br>",'center','warning');
            }
        },
        error:function()
        {
            alert('internet error');
        }
    });


});
function loadjobs(jobtype,cat,keywords,location,limit,featured)
{  $('#ajaxjobs').html(" <p class='text-center'><br> <i class='fa fa-3x fa-connectdevelop" +
    " fa-spin" +
    " text-light-blue'></i><br> Loading </p>");
    $.ajax({
        url:"forjobs.php",
        data:{jobtype:jobtype,cat:cat,keywords:keywords,location:location,limit:limit,featured:featured},
        type:"POST",
        success:function(data,success)
        {


              setTimeout(function () {
                  $("#ajaxjobs").html(data);
              }, 1000);


        }
    });
}
function ajaxUpdate(id,table,cols,vals,ons)
{

    $.ajax(
        {
            url:"admin/updatePage.php",
            data:{id:id,table:table,cols:cols,vals:vals,onsuccess:ons},
            success:function(data,success)
            {

                alertme('post was deleted','top','success');

            },
            error:function()
            {

                $('#main-cont').html("<h3 class='text-center'>Internet Connection Error! Pls Check your internet connection and retry.</h3>")
            }

        }

    )
}



$('.loadapp').click(function()
{
    jid = $(this).attr('data-ref-job');

    $.ajax({
        url:'putapplications.php',
        type:'POST',
        data:{job:jid},
        success:function(data)
        {
$('#viewappl .modal-body').html(data);
        },
        error:function()
        {
            alert('Internet connection error');
        }

    })
})