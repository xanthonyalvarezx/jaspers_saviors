import styles from './main.module.css'
import Image from 'next/image';
import jasperb from './assets/jasper_blanket.jpg'

export default function Home() {
  return (
    <div >
      <section className='flex justify-center align-center p-5'>
        <div className="flex-column w-3/6  justify-center align-center">
          <div className='flex justify-center align-center'>
            <h2>Who are we</h2>
          </div>
          <p >Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus per libero placerat bibendum penatibus curabitur. Maximus lectus justo laoreet ut vitae justo porta condimentum. Et ullamcorper risus orci inceptos pharetra egestas. Suscipit sociosqu ullamcorper netus pretium accumsan vehicula aliquam. Ut eros lacinia elit phasellus vitae; arcu ridiculus. Ultricies ligula habitant finibus montes eleifend dapibus. Scelerisque ad ullamcorper turpis netus molestie porta.</p>
        </div>
        <div className="flex w-3/6 px-10 justify-center align-center">
          <Image
            src={jasperb}
            width={400}
            height={800}
            alt="Picture of the author"
          /></div>
      </section>
    </div>
  );
}
