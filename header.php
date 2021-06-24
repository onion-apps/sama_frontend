<?php

define("BACKEND_URL", "http://samacustomer.herokuapp.com");

?>


<div class="sticky-top">
         <div class="header-topbar">
            <!-- top-bar -->
            <div class="container">
               <div class="row">
                  <div
                     class="col-xl-4 col-lg-5 col-md-4 col-sm-6 col-6 d-none d-xl-block d-lg-block"
                     >
                        <span class="top-text"><a href="mailto:info@samainvestment.co.ke"><i class="icon icon-compose"></i> info@samainvestment.co.ke</a></span>

                  </div>
                  <div
                     class="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12 text-right"
                     >
                     <div class="top-nav">
                       <!-- <span class="top-text"><a href="#!">GET STARTED TODAY</a> </span>-->
                        <span class="top-text"><a href="tel:254797837351"><i class="icon icon-phone-call"></i> 0797 837 351</a></span>
                          <span class="top-text"><a target="_blank" href="<?php echo BACKEND_URL ?>"><i class="icon icon-users"></i> LOGIN</a></span>

                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- /.top-bar -->
         <div class="bg-white">
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-lg-3 border-top border-bottom" >
               <div class="container">
                  <a class="navbar-brand" href="index.php" ><img src="images/logo.png" alt="Sama Investments"/>
                  </a>
                  <button
                     class="navbar-toggler collapsed"
                     type="button"
                     data-toggle="collapse"
                     data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                     >
                  <span class="icon-bar top-bar mt-0"></span>
                  <span class="icon-bar middle-bar"></span>
                  <span class="icon-bar bottom-bar"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ml-lg-auto">
                        <li class="nav-item dropdown">
                           <a class="nav-link " href="index.php">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                           <a class="nav-link " href="about.php">About</a>
                        </li>
                        <li class="nav-item ">
                           <a class="nav-link " href="service.php">Tiers</a>
                        </li>
                        <li class="nav-item dropdown">
                           <a
                              class="nav-link dropdown-toggle"
                              href="#!"
                              id="navbarFeatures"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              >
                           Tools
                           </a>
                           <ul class="dropdown-menu" aria-labelledby="navbarFeatures">
                              <li><a class="dropdown-item" href="loancalc.php">Loan Calculator</a></li>
                           
                           </ul>
                        </li>
                        <li class="nav-item dropdown">
                           <a
                              class="nav-link dropdown-toggle"
                              href="#!"
                              id="navbarFeatures"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              >
                           Projects
                           </a>
                           <ul class="dropdown-menu" aria-labelledby="navbarFeatures">
                              <li>
                                 <a class="dropdown-item" href="loanproject.php">Loaning project</a>
                              </li>
                              <li><a class="dropdown-item" href="tree-project.php">Tree Project</a></li>
                           </ul>
                        </li>
                       
                        <li>
                         <a class="nav-link " href="faq.php">FAQs</a>
                        </li>
                        <li class="nav-item dropdown">
                           <a class="nav-link " href="contactus.php">Contacts</a>
                        </li>
                       
                      
                     </ul>
               
                     <a target="_blank" href="<?php echo BACKEND_URL ?>/register" class="btn sama-cta-btn btn-sm ml-5">Start Borrowing</a>
   
                    
                  </div>
                 
                  </div>

                 
            </nav>

          
         </div>
         <!--<div class="sharethis-sticky-share-buttons"></div>-->
      </div>
