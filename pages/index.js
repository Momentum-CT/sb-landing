import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-black">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="flex flex-col p-4 sm:mx-auto sm:max-w-[720px] xl:max-w-[1920px] xl:p-0">
        <title>Verizon Super Bowl LVIII</title>
        <meta property="og:title" content="Verizon Super Bowl LVIII" key="title" />

        <div id="logo">
          <img className="w-[60%] xl:w-[25%] xl:pt-8 xl:pl-12" src="/img/VZ_SB_Logo.png" alt="Verizon Super Bowl 2024 Logo"/>
        </div>

        <div className="px-4 pt-12 pb-6 xl:hidden">
          <p className="text-4xl font-verizonBold leading-[2.2rem] max-w-[14ch] tracking-wide text-white xl:text-7xl xl:leading-[4.5rem]">Want tickets to Super Bowl LVIII and other events?</p>
        </div>

        <div className="hidden xl:absolute xl:inline xl:top-52 xl:px-12 xl:pb-0 3xl:top-[14rem] 4xl:top-[15rem] 5xl:top-[16rem]">
          <p className="text-7xl font-verizonBold leading-[4.5rem] max-w-[14ch] tracking-wide text-white">Want tickets to Super Bowl LVIII and other<br/>events?</p>
        </div>

        <div id="hero" className="xl:p-0">
          <img className="xl:hidden" src="/img/M_Hero.png" alt="Football" />
          <img className="hidden pt-20 xl:inline-block xl:w-screen" src="/img/D_Hero.png" alt="Football" />
        </div>

        <div className="px-4 py-6">
          <p className="text-[22px] tracking-wide font-verizonBold text-white sm:text-center sm:py-4 xl:py-6 xl:text-5xl">Here&#39;s how to get them</p>
        </div>

        <div className="hidden border border-[#4c4c4c] w-full xl:flex"/>

        <div className="xl:pt-24 xl:px-6 xl:flex xl:flex-row-reverse xl:items-center xl:justify-between">
          <div id="tickets" className="xl:flex xl:justify-center">
            <img className="xl:hidden" src="/img/M_Tickets.png" alt="Tickets" />
            <img className="hidden xl:inline xl:w-[85%]" src="/img/D_Tickets.png" alt="Tickets" />
          </div>

          <div className="px-4 py-6 space-y-6 sm:flex flex-col justify-start items-start sm:w-80 xl:w-[50%]">
            <div id="header2" className="">
              <p className="text-4xl font-verizonBold leading-9 max-w-[15ch] tracking-wide text-white xl:hidden">Win tickets to Super&nbsp;Bowl LVIII.</p>
              <p className="hidden text-7xl font-verizonBold leading-[4.5rem] tracking-wide text-white xl:inline">Win tickets<br/>to Super Bowl LVIII.</p>
            </div>

            <div className="">
              <h3 className="text-lg leading-6 font-verizonFont font-thin max-w-[26ch] text-white xl:text-2xl xl:leading-none  xl:max-w-[30ch]">Visit a participating Verizon retail location to enter to win 2 tickets to Super Bowl LVIII.</h3>
            </div>

            <div className="xl:pt-14">
              <button onClick={() => url("")} className="relative btn font-verizonBold">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="hidden border border-[#4c4c4c] w-full xl:flex"/>

        <div className="mt-4 xl:flex xl:flex-row-reverse xl:items-center xl:justify-between xl:pt-24 xl:p-6">
          <div id="sponsors" className="xl:flex xl:justify-center">
            <img className="xl:hidden" src="/img/M_Sponsors.png" alt="Sponsors" />
            <img className="hidden xl:inline xl:w-[80%]" src="/img/D_Sponsors.png" alt="Sponsors" />
          </div>

          <div className="px-4 py-6 space-y-6 sm:flex flex-col justify-start items-start sm:w-80 xl:w-[50%]">
            <div id="header2" className="">
              <p className="text-4xl font-verizonBold leading-9 max-w-[25ch] tracking-wide text-white xl:text-7xl xl:leading-[4.5rem] xl:max-w-[9ch]">Attend the biggest Super Bowl LVIII events.</p>
            </div>

            <div className="">
              <p className="text-lg leading-none font-verizonFont opacity-9 max-w-[26ch] text-white sm:text-md xl:text-2xl xl:leading-none xl:max-w-[35ch]">Fans and small business owners, visit a participating Verizon retail location and make a qualifying purchase to get tickets to NFL&nbsp;Opening Night&#44; Super Bowl Experience and&nbsp;the Verizon Lounge.</p>
            </div>

            <div className="xl:pt-14">
              <button onClick={() => url("")} className="relative btn font-verizonBold">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div id="terms" className="p-4 sm:px-10 xl:pt-12 xl:pb-16">
          <p className="text-[7px] leading-none text-accent1 font-verizonFont xl:hidden">
            <span className="text-accent2">No purchase necessary. Void outside of Nevada and where prohibited. </span>  
            Sweepstakes starts 1/22/2024 and ends 2/5/2024. Must be resident of NV&#44; 18 years or older to enter. To enter&#44; visit a participating Verizon retail store.  Limit ONE entry per person & per email address. Odds depend on # of eligible entries received. Approximate retail value of all prizes&#58; $10&#44;000. Click here for Official Rules and participating locations. Sponsor&#58; Verizon Services Corp.&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
            <br></br>
            <br></br>
            Gift with Purchase Offer valid only at participating locations. While supplies last. Void where prohibited. Open to U.S. residents 18+. Limit one offer per person or account. Scan QR code&#44; click here or see onsite representative for complete Terms & Conditions&#44; including participating locations and offer period. SPONSOR&#58; Verizon Wireless&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
            <br></br>
            <br></br>
            The NFL Entities shall have no liability or responsibility for any claim arising in connection with participation in this Sweepstakes or any prize awarded. The NFL Entities have not offered or sponsored this sweepstakes in any way. Sponsor&#58; Verizon Services Corp.&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
          </p>
          <p className="hidden text-[16px] leading-none text-accent1 font-verizonFont xl:inline">
            <span className="text-accent2">No purchase necessary. Void outside of Nevada and where prohibited. </span>  
            Sweepstakes starts 1/22/2024 and ends 2/5/2024. Must be resident of NV&#44; 18 years or older to enter. To enter&#44; visit a participating Verizon retail store.  Limit ONE entry per person & per email address. Odds depend on # of eligible entries received. Approximate retail value of all prizes&#58; $10&#44;000. Click here for Official Rules and participating locations. Sponsor&#58; Verizon Services Corp.&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
            <br></br>
            <br></br>
            Gift with Purchase Offer valid only at participating locations. While supplies last. Void where prohibited. Open to U.S. residents 18+. Limit one offer per person or account. Scan QR code&#44; click here or see onsite representative for complete Terms & Conditions&#44; including participating locations and offer period. SPONSOR&#58; Verizon Wireless&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920. The NFL Entities shall have no liability or responsibility for any claim arising in connection with participation in this Sweepstakes or any prize awarded. The NFL Entities have not offered or sponsored this sweepstakes in any way. Sponsor&#58; Verizon Services Corp.&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
          </p>
        </div>
      </div>
      </motion.div>
    </main>
  );
}
