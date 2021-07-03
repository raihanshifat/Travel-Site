import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/layout/Navbar'
import { Carousel } from 'react-bootstrap';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viators World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/travel.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </Head>

      <Navbar/>
      <Carousel>
  <Carousel.Item interval={5000}>
    <Image
      className="d-block w-100"
      src="/1.jpg"
      alt="First slide"
      layout="responsive"
      width={1600}
      height={600}
     
    />
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <Image
      className="d-block w-100"
      src="/2.jpg"
      alt="Second slide"
      layout="responsive"
      width={1600}
      height={600}
      
    />
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <Image
      className="d-block w-100"
      src="/6.jpg"
      alt="Third slide"
      layout="responsive"
      width={1600}
      height={600}
     
    />
  </Carousel.Item>
</Carousel>
      <main className={styles.main}>

      <div className ="row">
      <div className="col">
  <div className="card h-100">
    <Image src="/3.jpg" className="card-img-top" alt="..." layout="responsive"
      width={600}
      height={600}  />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </div>
  <div className="col">
  <div className="card h-100">
    <Image src="/4.jpg" className="card-img-top" alt="..."  layout="responsive"
      width={600}
      height={600} />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </div>
  <div className="col">
  <div className="card h-100">
    <Image src="/5.jpg" className="card-img-top" alt="..."  layout="responsive"
      width={600}
      height={600} />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </div>
</div>
    
      
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p style={{color:"#aaa"}}>

        
          Powered by FINIX Software Lab
          </p>
          {/* <span classNameName={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
