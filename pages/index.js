export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-black">
      <div className="flex flex-col p-4 sm:mx-auto sm:max-w-[720px] md:max-w-[1920px] md:p-0">
        <title>Verizon Super Bowl LVIII</title>
        <meta property="og:title" content="Verizon Super Bowl LVIII" key="title" />

        <div id="logo">
          <img className="w-[60%] md:w-[40%] md:p-4" src="/img/VZ_SB_Logo.png" alt="Verizon Super Bowl 2024 Logo"/>
        </div>

        <div className="px-4 pt-8 pb-6 md:px-8 md:pb-0">
          <p className="text-4xl font-verizonBold leading-[2.2rem] max-w-[14ch] tracking-wide text-white md:text-7xl md:leading-[4.5rem]">Want tickets to Super Bowl LVIII and other events?</p>
        </div>

        <div id="hero" className="md:p-0">
          <img className="md:hidden" src="/img/M_Hero.png" alt="Football" />
          <img className="hidden md:inline-block md:w-screen" src="/img/D_Hero.png" alt="Football" />
        </div>

        <div className="px-4 py-6">
          <p className="text-2xl tracking-wide font-verizonBold text-white sm:text-center sm:py-4 md:text-5xl">Here&#39;s how to get them</p>
        </div>

        <div className="hidden border border-[#4c4c4c] w-screen md:flex"/>

        <div className="md:pt-10 md:px-6 md:flex md:flex-row-reverse md:items-center md:justify-between">
          <div id="tickets" className="">
            <img className="md:hidden" src="/img/M_Tickets.png" alt="Tickets" />
            <img className="hidden md:flex md:flex-col-2" src="/img/D_Tickets.png" alt="Tickets" />
          </div>

          <div className="px-4 py-6 space-y-6 sm:flex flex-col justify-start items-start sm:w-80 md:w-[50%]">
            <div id="header2" className="">
              <p className="text-4xl font-verizonBold leading-9 max-w-[15ch] tracking-wide text-white md:text-7xl md:leading-[4.5rem]">Win tickets to Super Bowl LVIII.</p>
            </div>

            <div className="">
              <h3 className="text-xl leading-6 font-verizonFont opacity-9 max-w-[26ch] text-white md:text-2xl md:leading-tight">Visit a participating Verizon retail location to enter to win 2 tickets to Super Bowl LVIII.</h3>
            </div>

            <div>
              <button onClick={() => url("")} className="relative btn font-verizonBold">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="hidden border border-[#4c4c4c] w-screen md:flex"/>

        <div className="mt-4 md:flex md:flex-row-reverse md:items-center md:justify-between md:p-6">
          <div id="sponsors" className="">
            <img className="md:hidden" src="/img/M_Sponsors.png" alt="Sponsors" />
            <img className="hidden md:inline-block md:pr-16" src="/img/D_Sponsors.png" alt="Sponsors" />
          </div>

          <div className="px-4 py-6 space-y-6 sm:flex flex-col justify-start items-start sm:w-80 md:w-[50%]">
            <div id="header2" className="">
              <p className="text-4xl font-verizonBold leading-9 max-w-[25ch] tracking-wide text-white md:text-7xl md:leading-[4.5rem]">Attend the biggest Super Bowl LVIII events.</p>
            </div>

            <div className="">
              <p className="text-xl leading-6 font-verizonFont opacity-9 max-w-[26ch] text-white sm:text-md md:text-2xl md:leading-tight">Visit a participating Verizon retail location and make a qualifying purchase to get tickets to NFL Opening Night&#44; Super Bowl Experience and the Verizon Lounge.</p>
            </div>

            <div classNameName="">
              <button onClick={() => url("")} className="relative btn font-verizonBold">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div id="terms" className="p-4 sm:px-10 md:pt-20">
          <p className="text-[7px] text-accent1 font-verizonFont md:text-lg">
            <span className="text-accent2">No purchase necessary. Void outside of Nevada and where prohibited. </span>  
            Sweepstakes starts 1/22/2024 and ends 2/5/2024. Must be resident of NV&#44; 18 years or older to enter. To enter&#44; visit a participating Verizon retail store.  Limit ONE entry per person & per email address. Odds depend on # of eligible entries received. Approximate retail value of all prizes&#58; $10&#44;000. Click here for Official Rules and participating locations. Sponsor&#58; Verizon Services Corp.&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
            <br></br>
            <br></br>
            Gift with Purchase Offer valid only at participating locations. While supplies last. Void where prohibited. Open to U.S. residents 18+. Limit one offer per person or account. Scan QR code&#44; click here or see onsite representative for complete Terms & Conditions&#44; including participating locations and offer period. SPONSOR&#58; Verizon Wireless&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
            <br></br>
            <br></br>
            The NFL Entities shall have no liability or responsibility for any claim arising in connection with participation in this Sweepstakes or any prize awarded. The NFL Entities have not offered or sponsored this sweepstakes in any way. Sponsor&#58; Verizon Services Corp.&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
          </p>
        </div>
      </div>
    </main>
  );
}
