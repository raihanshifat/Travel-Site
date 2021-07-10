import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import { useState } from 'react';



export default function Home() {
  const [isOpen, setisOpen] = useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="description" content=""/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>JustForBooking</title>
        <link rel="icon" href="/travel.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="A.style.css.pagespeed.cf.8w4AOtjmmO.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </Head>
<nav className="sticky-top navbar navbar-expand-lg navbar-light">
    <input type="checkbox" id="check" />
    <label for="check" className="checkbtn">
        <i className="fas fa-bars fa-pull-right fa-3x"></i>
    </label>
    <label className="logo">JUSTFORBOOKING</label>
    <ul className="navbar-nav ml-auto">
        <li><a className="active" href="/">HOME</a></li>
        <li><a  href="/">ABOUT</a></li>
        <li><a  href="/">VOUCHER</a></li>
        <li><a  href="/">CONTACT</a></li>
    </ul>
</nav>
      

    
      <body>
  
    <div class="tm-section tm-bg-img" id="tm-section-1">
                <div class="tm-bg-white ie-container-width-fix-2">
                    <div class="container ie-h-align-center-fix">
                        <div class="row">
                            <div class="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                             
                            <script charset="utf-8" src="//www.travelpayouts.com/widgets/d7b6e384355ebca105319888bd8e91d9.js?v=2192" async></script>  
                                               
                                                
                                 
                            </div>                        
                        </div>      
                    </div>
               
                </div>                  
            </div>
      <div class="tm-section-2">
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <h2 class="tm-section-title" style={{color:"gold"}}>Featured Flights And Hotels</h2>
                            {/* <p class="tm-color-white tm-section-subtitle" style={{Color:"gold"}}>Subscribe to get our newsletters</p>
                            <a href="#" class="tm-color-white tm-btn-white-bordered">Subscribe Newletters</a> */}
                        </div>                
                    </div>
                </div>        
            </div>
            <div class="tm-section tm-position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" class="tm-section-down-arrow">
                    <polygon fill="#325D6A" points="0,0  100,0  50,60"></polygon>                   
                </svg> 
                </div>
<div className="widget-section">
<div class="tm-container-outer" id="tm-section-2">

                <section class="tm-slideshow-section">
                    <div class="tm-slideshow">
                        <img src="img/tm-img-01.jpg" alt="Image"/>   
                    </div>
                    <div class="tm-slideshow-description tm-bg-primary">
                        <h2 class="" style={{color:"gold"}}>Europe's most visited places</h2>
                        <p>Aenean in lacus nec dolor fermentum congue. Maecenas ut velit pharetra, pharetra tortor sit amet, vulputate sem. Vestibulum mi nibh, faucibus ac eros id, sagittis tincidunt velit. Proin interdum ullamcorper faucibus. Ut mi nunc, sollicitudin non pulvinar id, sagittis eget diam.</p>
                        <a href="#" class="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</a>
                    </div>
                </section>
                <section class="clearfix tm-slideshow-section tm-slideshow-section-reverse">

                    <div class="tm-right tm-slideshow tm-slideshow-highlight">
                        <img src="img/tm-img-03.jpg" alt="Image"/>
                    </div> 

                    <div class="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
                        <h2 class="" style={{color:"gold"}}>Asia's most popular places</h2>
                        <p>Vivamus in massa ullamcorper nunc auctor accumsan ac at arcu. Donec sagittis mattis pharetra. Proin commodo, ante et volutpat pulvinar, arcu arcu ullamcorper diam, id maximus sem tellus id sem. Suspendisse eget rhoncus diam. Fusce urna elit, porta nec ullamcorper id.</p>
                        <a href="#" class="text-uppercase tm-btn tm-btn-white tm-btn-white-highlight">Continue Reading</a>
                    </div>                        

                </section>
                <section class="tm-slideshow-section">
                    <div class="tm-slideshow">
                        <img src="img/tm-img-02.jpg" alt="Image" /> 
                    </div>
                    <div class="tm-slideshow-description tm-bg-primary">
                        <h2 class="" style={{color:"gold"}}>America's most famous places</h2>
                        <p>Donec nec laoreet diam, at vehicula ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse nec dapibus nunc, quis viverra metus. Morbi eget diam gravida, euismod magna vel, tempor urna.</p>
                        <a href="#" class="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</a>
                    </div>
                </section>
                </div>         
                </div>
   



    <footer>
        <div class="container">
            <div class="">
                <div class="col-md-5">
                </div>
                <p>
                  Powered By
                </p>
                <h4>
                  FINIX Software Lab
                </h4>
                
                
  
            </div>
        </div>
    </footer>
        


</body>
      </>
  )
}
     
