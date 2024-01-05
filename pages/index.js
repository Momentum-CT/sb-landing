

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

        <div className="justify-start pt-6 pl-0">
          <button
            onClick={() => url("")}
            className="relative btn"
          >
            Learn more
          </button>
        </div>



      
    </main>
  );
}
