<html lang="en"><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title> </title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome.css" rel="stylesheet">
<style>
    @media screen  and (max-width: 700px){
     body
     {
         display: none;

     }

    }
    body{
        margin-top: 70px;
        font-weight:300;
    }
    #navbar ul li a{
        color: #fff;
    }
    #navbar ul li a span
    {
        color:#E5E801;
    }

    .yellow
    {
        color:#E5E801;
    }
    #body
    {
        background-image: url("assets%20for%20praymobi/bg-desktop.png");
        background-repeat: no-repeat;

        background-size:1500px 700px;
        width: 100%;
      padding-top: 100px;
        //padding-bottom: 100px;
    }

    .container-fluid {
        padding-right:55px;
        padding-left: 55px;
        margin-right: auto;
        margin-left: auto;
    }

    #auth
    {
     background-color: #EFEFEF;
        min-height: 400px;
        padding: 15px;
        border-radius:6px ;
        margin-bottom: 76px;
    }
    .top-icon
    {
        width: 60px;
        padding: 15px;
        border-radius: 50%;
        background-color: #eee;
        margin-top: -45px;

    }
    .social-login .f
    {
background-color: #3F5B98;
    }
    .social-login .a
    {
        background-color: #4B2A7B;
    }
    .purple
    {
        background-color: #4B2A7B;
    }
    .social-login .c
    {
        background-color: #E5E801;
    }
    .social-login .btn{
        border-radius: 9px;
    }
    .login-form
    {
        border-radius: 6px;
        overflow: hidden;
        border:solid 2px #ccc;
    }
    .login-form .input-group,.login-form .input-group-addon,.login-form .form-control
    {
        border-radius: 0px;
        border-bottom: none;
        border-left: none;
        border-right: none;
outline: none;
        box-shadow: none;
        border-color: #ccc;
    }
    .login-form input
    {
        height: 40px;
        background-color: #eee;
        border-left: solid 1px #ccc!important;
    }

.firstwelcome
{
    font-size: 6em;
    color: #fff;
    margin-top: -20px;
    font-weight: 300;
}
    .firstwelcome span
    {
        color:  #E5E801;
    }
    .nextwelcome
    {
        font-weight: 100;
        line-height: 1.5;
    }

    .foot .navbar-nav
    {
        background-color:  #4B2A7B;

       // padding: 25px;
    }
    .foot a{
        color: #ccc;
        border-left: outset 1px rgba(0,0,0,0.2);
        background-color: transparent!important;

    }
.foot a:hover
{
    color: #fff;
}

    .foot
    {
        background-color:  #4B2A7B;

    }
    .foot .navbar
    {
        float: none;
    }

    .foot .navbar-nav
    {
        margin-left: 37%;
    }
</style>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
<!-- Fixed navbar -->
<nav class="navbar navbar-inverse navbar-fixed-top" style="background-color:#4B2A7B ">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><img src="assets%20for%20praymobi/main-logo.png" height="50px"/> </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse"><br>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="../navbar/">Already a member ? <span > &nbsp; &nbsp; Sign In </span></a></li>

             </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>
<section id="body">

    <section class="container-fluid">
        <div class="col-md-9 text-center">
            <h1 class="firstwelcome">Pray <span>.</span> Share <span>.</span> Receive <span>.</span></h1>
            <h2 class="nextwelcome yellow">
                Praymobi harnesses the redeeming power of Jesus.<br>
                Post your prayer requests, join others in prayer,<br>
                and share testimonies.
            </h2>
        </div>
<div class="col-md-3  table-bordered" id="auth">
    <div class="top-icon center-block">
    <img src="assets%20for%20praymobi/pen-icon.png"  class="img-responsive " />
        </div>
     <hr style="border-top: 1px solid #000">
    <div class="text-center" style="margin-top: -43px">
    <span class="" style="font-size:30px;background-color:#eee;padding:6px;">Sign in </span>
    </div>
    <div class="social-login row text-center clearfix"><br>
       <div class="col-md-6"><button class="btn btn-primary f">
               <img src="assets%20for%20praymobi/fb-icon.png" height="25px"/>
               <span class="">via facebook</span>
           </button>
       </div>
        <div class="col-md-6">
            <button class="btn btn-primary a">
                <img src="assets%20for%20praymobi/anonymous-icon.png" height="25px"/>
                <span class="">via facebook</span>
            </button>
   </div>
        <br>
        <br>
        <br>
        <button class="btn  c">
            <img src="assets%20for%20praymobi/email-icon.png" height="25px"/>
            <span class="">via facebook</span>
        </button>
    </div>
    <br>
    <hr style="border-top: 1px solid #000">
    <div class="text-center" style="margin-top: -43px">
        <span class="" style="font-size:30px;background-color:#eee;padding:6px;">Register</span>
    </div>
    <br>
    <div class="login-form table-bordered form-group-lgf">
    <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">
            <img src="assets%20for%20praymobi/name-icon.png" height="20px">
        </span>
        <input type="text" class="form-control" placeholder="Name" aria-describedby="basic-addon1">
    </div>

    <div class="input-group">
        <span class="input-group-addon" id="basic-addon">
            <img src="assets%20for%20praymobi/username-icon.png" height="20px">
        </span>
        <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <span class="input-group-addon" id="basic-addon">
            <img src="assets%20for%20praymobi/email-icon.png" height="20px">
        </span>
        <input type="text" class="form-control" placeholder="Email" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <span class="input-group-addon" id="basic-addon">
            <img src="assets%20for%20praymobi/password.png" height="20px">
        </span>
        <input type="text" class="form-control" placeholder="Password" aria-describedby="basic-addon1">
    </div>
    </div>
    <br>

    <div class="social-login text-center ">
        <button class="btn  c" style="min-height:39px;padding-left: 40px;padding-right: 40px">
            <span class="">Register</span>
        </button>
    </div>

</div>
</section>
</section>

<footer class="purple foot">
    <div class="container-fluid">
<ul class=" navbar-nav nav"><li><a href="">Terms of use </a></li><li><a href="">Privacy Policy</a> </li><li><a href="">FAQs</a> </li><li><a href="">Legal</a> </li></ul>

</div>
</footer>
<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="js/jquery-1.8.2.min.js"></script>
<script src="js/bootstrap.min.js"></script>


</body></html>