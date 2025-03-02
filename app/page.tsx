// import styles from './main.module.css'
import Image from 'next/image';
import jasperb from './assets/jasper_blanket.jpg'


export default async function Home() {
  return (
    <div >
      <section className='flex justify-evenly w-auto  p-5'>
        <div className=" w-3/6 bg-white  rounded-lg shadow-lg ">
          <div className='flex justify-center items-center'>
            <h2>Who are we</h2>
          </div>
          <p className='px-10 '>

            <b>Jasper&#39;s Saviors</b> is a Fund for Cats in Need

            Jasper&#39;s; Saviors is a heartfelt charity created to support cat owners who are struggling with the financial costs of necessary medical procedures for their beloved feline friends. The fund is named after our own precious cat, Jasper, who inspired us to help others facing similar challenges.

            Jasper&#39;s Saviors provides financial assistance to pet owners whose cats need surgeries, treatments, or emergency care that they might otherwise be unable to afford. We understand the deep connection between cats and their families, and our mission is to ensure that no cat has to suffer due to financial limitations.

            Through the generous support of donors, Jasper&#39;s Saviors is able to offer a lifeline to those who want to give their cats the medical care they deserve. Every donation helps us continue to provide vital assistance, offering peace of mind to pet owners during times of crisis.

            By supporting Jasper&#39;s Saviors, you&#39;re not just helping one cat—you&#39;re helping to save lives and create stronger bonds between cats and their families everywhere.

            Together, we can be the saving grace for cats in need.</p>
        </div>
        <div className="flex  justify-center items-center">
          <Image className='rounded-lg shadow-lg'
            src={jasperb}
            width={400}
            height={800}
            alt="Picture of jasper the tuxedo cat"
          /></div>
      </section>
    </div>
  );
}
