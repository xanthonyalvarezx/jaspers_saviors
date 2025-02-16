import styles from './main.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <div >
      <section className="flex">
        <div className="w-3/6 px-10 ">
          <h3>Who are we</h3>
          <p className='break-normal'>Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus per libero placerat bibendum penatibus curabitur. Maximus lectus justo laoreet ut vitae justo porta condimentum. Et ullamcorper risus orci inceptos pharetra egestas. Suscipit sociosqu ullamcorper netus pretium accumsan vehicula aliquam. Ut eros lacinia elit phasellus vitae; arcu ridiculus. Ultricies ligula habitant finibus montes eleifend dapibus. Scelerisque ad ullamcorper turpis netus molestie porta.</p>
        </div>
        <div> <Image
          src="/profile.png"
          width={200}
          height={200}
          alt="Picture of the author"
        /></div>
      </section>



    </div>
  );
}
