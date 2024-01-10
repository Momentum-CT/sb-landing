

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 sm:px-0 bg-black">
        <title>Verizon Super Bowl LVIII</title>
        <meta property="og:title" content="Verizon Super Bowl LVIII" key="title" />

        <div id="logo" class="absolute left-4 top-3 w-1/2 sm:left-8 sm:w-1/4">
          <img src="/img/VZ_SB_Logo.png" />
        </div>

        <div class="pt-10">
          <div id="header" class="w-full tracking-tight pl-2 pt-12 sm:w-1/2 sm:pl-8 sm:pt-20 lg:pt-32">
            <h1 class="font-verizonBold ">Want tickets to Super Bowl LVIII and other events?</h1>
          </div>

          <div id="hero" class="w-full">
            <img class="pt-4 sm:hidden" src="/img/M_Hero.png" />
            <img class="hidden sm:flex flex-col flex w-screen" src="/img/D_Hero.png" />
          </div>
        </div>

        <div class="w-full px-2 pt-4">
          <h2 class="font-verizonBold sm:text-center sm:py-4">Here&#39;s how to get them</h2>
        </div>

        <div class="w-full justify-around px-2 sm:flex flex-row justify-center items-center sm:pt-2 md:pt-6 lg:pt-12">
          <div id="tickets" class="flex flex-row justify-center items-center pt-8 sm:justify-end items-end order-last">
            <img class="w-80 sm:hidden" src="/img/M_Tickets.png" />\
            <img class="hidden sm:flex sm:w-96" src="/img/D_Tickets.png" />
          </div>

          <div class="sm:flex flex-col justify-start items-start sm:w-80">
            <div id="header2" class="pt-6">
              <h1 class="font-verizonBold">Win tickets to Super Bowl LVIII.</h1>
            </div>

            <div class="pt-4">
              <h3 class="font-verizonFont sm:text-md">Visit a participating Verizon retail location to enter to win 2 tickets to Super Bowl LVIII.</h3>
            </div>

            <div className="pt-6">
              <button
                onClick={() => url("")}
                className="relative btn"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div class="w-full justify-around px-2 sm:flex flex-row justify-center items-center pt-12 lg:pt-20">
          <div id="tickets" class="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:order-last sm:w-96">
            <img class="w-28 sm:w-42 lg:w-44" src="/img/M_VZ_Live.png" />
            <img class="w-28 sm:w-42 lg:w-44" src="/img/M_Toyota.png" />
            <img class="w-24 sm:w-28 lg:w-40" src="/img/M_OpNight.png" />
          </div>

          <div class="sm:flex flex-col justify-start items-start sm:w-80">
            <div id="header2" class="pt-6">
              <h1 class="font-verizonBold">Attend the biggest Super Bowl LVIII events.</h1>
            </div>

            <div class="pt-4">
              <h3 class="font-verizonFont sm:text-md">Visit a participating Verizon retail location and make a qualifying purchase to get tickets to NFL Opening Night&#44; Super Bowl Experience and the Verizon Lounge.</h3>
            </div>

            <div className="pt-6">
              <button
                onClick={() => url("")}
                className="relative btn"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* <div class="w-full flex flex-col w-full justify-around sm:flex-row justify-center items-center sm:pt-12"> */}
        {/* <div class="w-full justify-around flex flex-col px-2 pt-12 sm:flex-row items-center sm:pt-2">
          <div id="sponsors" className="flex flex-wrap justify-center items-center w-full gap-x-8 gap-y-6 sm:order-last">
            <img class="w-28 sm:w-42 lg:w-48" src="/img/M_VZ_Live.png" />
            <img class="w-28 sm:w-42 lg:w-48" src="/img/M_Toyota.png" />
            <img class="w-24 sm:w-28 lg:w-44" src="/img/M_OpNight.png" />
          </div>

          {/* <div class="tracking-tight sm:flex flex-col justify-start items-start"> */}
          {/* <div class="flex flex-col justify-start items-start sm:w-80">
            <div id="header3" class="pt-6">
              <h1 class="font-verizonBold">Attend the biggest Super Bowl LVIII events. </h1>
            </div>

            <div class="pt-4">
              <h3 class="font-verizonFont">Visit a participating Verizon retail location and make a qualifying purchase to get tickets to NFL Opening Night&#44; Super Bowl Experience and the Verizon Lounge.</h3>
            </div>

            <div className="pt-6">
              <button
                onClick={() => url("")}
                className="relative btn"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>  */}

        <div id="terms" class="px-2 pt-16 bottom-2 sm:px-10">
          <p class="font-verizonFont"><b>No purchase necessary. Void outside of Nevada and where prohibited.</b> Sweepstakes starts 1/22/2024 and ends 2/5/2024. Must be resident of NV&#44; 18 years or older to enter. To enter&#44; visit a participating Verizon retail store.  Limit ONE entry per person & per email address. Odds depend on # of eligible entries received. Approximate retail value of all prizes&#58; $10&#44;000. Click here for Official Rules and participating locations. Sponsor&#58; Verizon Services Corp.&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
          <br></br>
          <br></br>
          Gift with Purchase Offer valid only at participating locations. While supplies last. Void where prohibited. Open to U.S. residents 18+. Limit one offer per person or account. Scan QR code&#44; click here or see onsite representative for complete Terms & Conditions&#44; including participating locations and offer period. SPONSOR&#58; Verizon Wireless&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.
          <br></br>
          <br></br>
          The NFL Entities shall have no liability or responsibility for any claim arising in connection with participation in this Sweepstakes or any prize awarded. The NFL Entities have not offered or sponsored this sweepstakes in any way. Sponsor&#58; Verizon Services Corp.&#44; One Verizon Way&#44; Basking Ridge&#44; NJ 07920.</p>
        </div>

    </main>
  );
}
