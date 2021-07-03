import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';


export default function Navbar() {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </Head>

    

      {/* <nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="main_nav">

 <ul class="navbar-nav">
	<li class="nav-item active"> <a class="nav-link" href="#">Home </a> </li>
	<li class="nav-item"><a class="nav-link" href="#"> About </a></li>
	<li class="nav-item"><a class="nav-link" href="#">  Hotel Voucher (Demo) </a></li>
  <li class="nav-item"><a class="nav-link" href="#">   Contact Us </a></li>
</ul>
	  
  </div>

</nav> */}
<nav className="navbar navbar-expand-lg navbar-red navbar-dark sticky-top" style={{height:"80px"}}>
    <div className="wrapper"> </div>
    
    
    <div className="container-fluid  all-show"> 
    <div className="navbar-header" >
      <Link className="navbar-brand" href="#">Viators World</Link>
    </div>
    <div className="container">  
            <ul className="navbar-nav justify-content-center">
                <li className="nav-item active"> <a className="nav-link active" aria-current="page" href="#">Home</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">About Us</a> </li>

                <li className="nav-item"> <a className="nav-link" href="#">Hotel Voucher (Demo)</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">contact</a> </li>
            </ul>
        
    </div>
    </div>
</nav>
   </>
  );
};