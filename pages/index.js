

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-black">
        <title>Verizon Super Bowl LVIII</title>
        <meta property="og:title" content="Verizon Super Bowl LVIII" key="title" />

        <div id="logo" class="absolute left-4 top-3 w-1/2">
          <img src="/img/VZ_SB_Logo.png" />
        </div>

        <div id="header" class="left-6 w-full pl-4 pt-20">
          <h1 class="font-verizonBold">Want tickets to<br/>Super Bowl LVIII<br/>and other events?</h1>
        </div>

        <div id="hero">
          <img class="w-full pt-4" src="/img/M_hero.png" />
        </div>

        <div class="left-6 w-full pl-4 pt-6">
          <h2 class="font-verizonBold">Here&#39;s how to get them</h2>
        </div>

        <div id="tickets">
          <img class=" w-80 pt-6" src="/img/M_tickets.png" />
        </div>

        <div id="header2" class="left-6 w-full pl-4 pt-6">
          <h1 class="font-verizonBold">Win tickets to<br/>Super Bowl LVIII.</h1>
        </div>

        <div class="left-6 w-full pl-4 pt-6">
          <p class="font-verizonFont">Visit a participating Verizon retail<br/>location to enter to win 2 tickets<br/>to Super Bowl LVIII.</p>
        </div>

        <div className="items-start pt-6 left-0">
          <button
            onClick={() => url("")}
            className="relative btn"
          >
            Learn more
          </button>
        </div>

        <div id="sponsors" className="flex flex-wrap justify-center items-center w-full gap-x-10 gap-y-6 pt-16">
          <img class="w-40 left-0" src="/img/M_VZ_Live.png" />
          <img class="w-40 right-0" src="/img/M_Toyota.png" />
          <img class="w-28" src="/img/M_OpNight.png" />
        </div>

        <div id="header3" class="left-6 w-full pl-4 pt-6">
          <h1 class="font-verizonBold">Attend the biggest<br/>Super Bowl LVIII events. </h1>
        </div>

        <div class="left-6 w-full pl-4 pt-6">
          <p class="font-verizonFont">Visit a participating Verizon retail<br/>location and make a qualifying<br/>purchase to get tickets to NFL<br/>Opening Night, Super Bowl<br/>Experience and the Verizon Lounge.</p>
        </div>

        <div className="items-start pt-6 left-0">
          <button
            onClick={() => url("")}
            className="relative btn"
          >
            Learn more
          </button>
        </div>

        <div id="terms" class="left-6 w-full pl-4 pt-6">
          <span class="font-verizonFont leading-none">No purchase necessary. Void outside of Nevada and where prohibited. Sweepstakes starts 1/22/2024 and ends 2/5/2024. Must be resident of NV, 18 years or older to enter. To enter, visit a participating Verizon retail store.  Limit ONE entry per person & per email address. Odds depend on # of eligible entries received. Approximate retail value of all prizes: $10,000. Click here for Official Rules and participating locations. Sponsor: Verizon Services Corp., One Verizon Way, Basking Ridge, NJ 07920.
          <br></br>
          <br></br>
          Gift with Purchase Offer valid only at participating locations. While supplies last. Void where prohibited. Open to U.S. residents 18+. Limit one offer per person or account. Scan QR code, click here or see onsite representative for complete Terms & Conditions, including participating locations and offer period. SPONSOR: Verizon Wireless, One Verizon Way, Basking Ridge, NJ 07920.
          <br></br>
          <br></br>
          The NFL Entities shall have no liability or responsibility for any claim arising in connection with participation in this Sweepstakes or any prize awarded. The NFL Entities have not offered or sponsored this sweepstakes in any way. Sponsor: Verizon Services Corp., One Verizon Way, Basking Ridge, NJ 07920.</span>
        </div>

    </main>
  );
}
