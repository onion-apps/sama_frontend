<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sama Investment - Elavating Potentials</title>
    <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/navbar.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link href="css/fontello.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700%7CMerriweather:300,300i,400,400i,700,700i" rel="stylesheet">

</head>

<body>
    <?php include 'header.php' ?>
    <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li class="active">Loan calculator</li>
                        </ol>
                    </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="bg-white pinside30">
                        <div class="row align-items-center">
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                                <h1 class="page-title">Loan-calculator</h1>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="btn-action"> <a href="#!" class="btn btn-secondary">Apply</a> </div>
                            </div>
                        </div>
                    </div>
                    <div class="sub-nav" id="sub-nav">
                        <ul class="nav nav-justified">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Loan-calculator</a>
                            </li>
                            <li class="nav-item">
                                <a href="https://samagrowthinvest.wixsite.com/minside" class="nav-link">Know More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="container">
        <div class="card text-black bg-light mb-9" style="max-width: 200rem;">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 id="title">Calculate your loan payments</h1>
                    </div>
                </div>
                <br>

                <div class="row">
                    <div class="col-md-12">
                        <form>
                            <div class="form-group">
                                <label class="form-group">Amount to borrow</label>
                                <input class="form-control" type="text" id="principal" placeholder="Amount" required>
                                <button class="btn btn-block btn-info" type="button" onclick="calculate()">Calculate</button>

                            </div>
                            <!--
              <div class="form-group">
                  <label class="form-group">Interest rate</label>
                  <input class="form-control" type="text" id="annual-interest-rate"
                  placeholder="Rate in %">
              </div>
                            <div class="form-group">
                                <label class="form-group">Repayment Period</label>
                                <input class="form-control" type="text" id="number-of-period" placeholder="months" required>
                            </div>
                            <button class="btn btn-block btn-info" type="button" onclick="calculate()">Calculate</button>
                        </form>
                    </div>-->
                </div>
                <br>
                <h5 class="total">Total to Paid</h5>

                <div class="row">
                    <div class="col-md-12">
                        <h1 id="res">0</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include 'footer.php' ?>

    <script src="js/calculator.js"></script>
    <script src="js/jquery.min.js "></script>
    <script src="js/bootstrap/js/bootstrap.bundle.min.js "></script>
    <script src="js/owl.carousel.min.js "></script>
    <script src="js/main.js "></script>
    <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=603d130c51f70600114ff150&product=sticky-share-buttons" async="async"></script>

    <script src="js/back-to-top.js "></script>
</body>

</html>