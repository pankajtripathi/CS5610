<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset='utf-8' />

<title>Demo Home Page</title>

<style type="text/css">
    ul.master_navigation
    {
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        list-style: none;
        margin: 0.5em 0;
        padding: 0;
    }

    ul.master_navigation li
    {
        display: inline-block;
        padding: 0 0.5%;
    }

    a
    {
        color: #08f;
        font-weight: bold;
        text-decoration: none;
    }

    a:visited
    {
        color: lightgreen;
    }

    a:hover
    {
        color: azure;
    }

    p
    {
        text-align: justify;
    }
   .my-image {
       height:250px;
       width:200px
    }
   .col-1{
            width: 20%;
            height: 20%;
            float: left;
            margin-right: 20px;
            min-width: 250px;

    }

</style>

<style type="text/css" media="screen">
    body {
        background-image:url("my-image/webdesign_1338484318_44.jpg");
        max-width: 100%;
        margin: 0;
        padding: 0;
        color:white
    }

    .pad {
        padding: 10px;
    }

    .social-img {
        height:45px;
        width:45px;
        filter: gray;
        filter: grayscale(1);
        -webkit-filter: grayscale(1)
    }
    .copyright {
       font-size:small;
    }
    .container {
      padding-left:15px;
      padding-right:15px;
      margin-right:auto;
      margin-left:auto;
    }
</style>

</head>

<body>
<div class="container">

<div class="pad">
<form id="form1" runat="server">
<div>

<ul class="master_navigation">
    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
    <li><a href="statistics/" target="_blank">Statistics</a></li>
    <li><a href="source/" target="_blank">Source</a></li>
    <li><a href="search/" target="_blank">Search</a></li>
    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
    <li><a href="textview/" target="_blank">TextView</a></li>
    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
    <li><a href="blog/" target="_blank">Blog</a></li>
    <li><a href="story/index.htm?../experiments/" target="_blank">Experiments</a></li>
    <li><a href="story/index.htm?../project/" target="_blank">Project</a></li>
</ul>

<hr />

<div>
    <div class="col-1">
       <img src="my-image/dp-fb.jpg" class="my-image" height="300" width="200" >
    </div>
    <div>
        <h3 style="text-align:left" >Hi, I am Pankaj Tripathi</h3>
        <p>
            I am enthusiastic about web application devlopment and web technologies.
            This website is my homepage developed as a part of Web Development Course (CS 5610) under the guidance of Prof. Jose Annunziato.
       </p>
    </div>
    <hr />
        <div>
        <h3 style="text-align:left" >About Me....</h3>
        <p>
            Currently a graduate student in Compuer Science at Northeastern University.
            I love listening heavy metal/hard rock music, watching football, watching movies and television series.
            I also love to read about various stuff on wikipedia. I like exploring different areas be it sports, politics, science, technology and many other areas....
       </p>
    </div>
    <hr />
    <div>
        <h3 style="text-align:left" >CS5610- Web Dev</h3>
        <p>
            For this course I perform five experiments a week related to various web technologies like HTML5, CSS, jQuery, Javascript, AngularJS, Node.JS and so on....
            I am interested in learning MEAN Stack and developing a project related to the same. I also add a blog entry each week with terse description of the experiments performed each week.
       </p>
    </div>
    <hr />
</div>

<br /><br />
<div class="socialIcons">
      <a href="mailto:tripathi.p@husky.neu.edu?Subject=MailfromCS5610Page" class="mail">
          <img  class="social-img" src="my-image/email-icon-iStock7510332-Small-300x298.jpg" />
      </a> 
      <a href="https://www.facebook.com/pankajtripathi.k" class="facebook">
           <img class="social-img" src="my-image/facebook-logo-small.jpg" />
      </a> 
      <a href="https://www.linkedin.com/pub/pankaj-tripathi/96/897/122/" class="linkedin">
          <img class="social-img" src="my-image/linkedin-small.png">
      </a>
          <a href="https://github.com/pankajtripathi/CS5610 " class="github">
          <img class="social-img" src="my-image/GitHub-Mark.png">
      </a>
</div>

</div>
</form>
</div>

<br /><br />
 <div class="footer">
            <div class="copyright">&copy; Pankaj Tripathi - Northeastern University - CS 5610 Spring 2015</div>
</div>

</div>
</body>
</html>
