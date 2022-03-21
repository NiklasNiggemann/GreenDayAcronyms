const result = document.getElementById('result');
const link = document.getElementById('youtube');
const error = document.getElementById('error');
const addAbb = document.getElementById('addAbbreviation');

const userAbb = document.getElementById('Abb');

var preRun;
var input;

function getInput() {

    addAbb.style.opacity = 0;
    link.style.opacity = 100;

    preRun = document.getElementById('input').value;

    input = preRun.toUpperCase();

    switch (input) {
        case "ATL":
            result.innerHTML = 'At The Library';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=eOw-x79wKbo";
            break;
        case "DLM":
            result.innerHTML = 'Don\'t Leave Me';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=iEzzlyRt434";
            break;
        case "IWT":
            result.innerHTML = 'I Was There';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=TzsSq9IDIU8";
            break;
        case "DB":
            result.innerHTML = 'Disappearing Boy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=qkqsL9K8N-c";
            break;
        case "GTP":
            result.innerHTML = 'Going To Pasalacqua';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=wavz5YCDGl4";
            break;
        case "RTA":
            result.innerHTML = 'Road To Acceptance';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=lFwT91brh2I";
            break;
        case "TJD":
            result.innerHTML = 'The Judge\'s Daughter';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=mraRoDbikYU";
            break;
        case "2000":
        case "LYA":
            result.innerHTML = '2,000 Light Years Away';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=0KlnDwNqIp8";
            break;
        case "NGFL":
            result.innerHTML = 'Nice Guys Finish Last';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=vouf6QP2tzU";
            break;
        case "OFTR":
            result.innerHTML = 'One For The Razorbacks';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=pXGcb_HrEPQ";
            break;
        case "WTP":
            result.innerHTML = 'Welcome To Paradise';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=OR7R9Kuw2fY";
            break;
        case "CR":
            result.innerHTML = 'Christie Road';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=kJGIukbKhek";
            break;
        case "PA":
            result.innerHTML = 'Private Ale';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=hD7tmOncgsE";
            break;
        case "DLS":
            result.innerHTML = 'Dominated Love Slave';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=3uPhR8zCnjU";
            break;
        case "OOML":
        case "OML":
            result.innerHTML = 'One Of My Lies';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=b_Ff4fYcaew";
            break;
        case "NOK":
            result.innerHTML = 'No One Knows';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=7XYU7uoN_tI";
            break;
        case "WWHC":
            result.innerHTML = 'Who Wrote Holden Caulfield?';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=J7YigDl2i4E";
            break;
        case "WIMHA":
            result.innerHTML = 'Words I Might Have Ate';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=gjYEN-l4s1I";
            break;
        case "SC":
            result.innerHTML = 'Sweet Children';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=O7LWnl40-gc";
            break;
        case "BTIT":
            result.innerHTML = 'Best Thing In Town';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=vB-5OMVq-Ww";
            break;
        case "MG":
            result.innerHTML = 'My Generation';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=zIOVB7IW8tk";
            break;
        case "HAB":
            result.innerHTML = 'Having A Blast';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=XQLhHbjFd5M";
            break;
        case "PT":
            result.innerHTML = 'Pulling Teeth';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=2P49LZ4FBTU";
            break;
        case "BC":
            result.innerHTML = 'Basket Case';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=NUTGr5t3MoY";
            break;
        case "SR":
            result.innerHTML = 'Sassafras Roots';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=pcs9vJn0-UI";
            break;
        case "WICA":
            result.innerHTML = 'When I Come Around';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=i8dh9gDzmz8";
            break;
        case "CC":
            result.innerHTML = 'Coming Clean';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=riJgNBglEb4";
            break;
        case "ES":
            result.innerHTML = 'Emenius Sleepus';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=BWq5TbRa7Ro";
            break;
        case "ITE":
            result.innerHTML = 'In The End';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=BoaY1SFB69c";
            break;
        case "ABM":
            result.innerHTML = 'All By Myself';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=KW72ncGrDpQ";
            break;
        case "AS":
            result.innerHTML = 'Armatage Shanks';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=7KJtag6ecYI";
            break;
        case "SWM":
            result.innerHTML = 'Stuck With Me';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=fevGo3H5840";
            break;
        case "GSB":
            result.innerHTML = 'Geek Strink Breath';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=fr2T-Rcgq1c";
            break;
        case "NP":
            result.innerHTML = 'No Pride';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=BiEnyqHLrWk";
            break;
        case "BUW":
            result.innerHTML = 'Bab\'s Uvula Who?';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=XfaEa9WLHOc";
            break;
        case "PS":
            result.innerHTML = 'Panic Song';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=ojZmvo30mCM";
            break;
        case "SATA":
            result.innerHTML = 'Stuart And The Ave.';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=LxmAGklaKMk";
            break;
        case "BS":
            result.innerHTML = 'Brain Stew';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=lfppdaW24YQ";
            break;
        case "WS":
            result.innerHTML = 'Westbound Sign';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=f8YYBtLSLM0";
            break;
        case "TWH":
            result.innerHTML = 'Tight Wad Hill';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=fYEL2D3tg0U";
            break;
        case "WC":
            result.innerHTML = 'Walking Contradiction';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=UymN5scMpZM";
            break;
        case "HAR":
        case "HR":
            result.innerHTML = 'Hitchin\' A Ride';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=4Sc81yxo600";
            break;
        case "TG":
            result.innerHTML = 'The Grouch';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=WUCnPjv_hRM";
            break;
        case "ATT":
            result.innerHTML = 'All The Time';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Wbltwlkk_-4";
            break;
        case "WR":
            result.innerHTML = 'Worry Rock';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=qqVoEskb4LY";
            break;
        case "LRI":
            result.innerHTML = 'Last Ride In';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=DhfhAmOIm78";
            break;
        case "WA":
            result.innerHTML = 'Walking Alone';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=rMjC3iaF8Kk";
            break;
        case "TB":
            result.innerHTML = 'Take Back';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=AUYNJwMSZcA";
            break;
        case "KFAD":
            result.innerHTML = 'King For A Day';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=u9KJ-oJ_gU0";
            break;
        case "GR":
        case "TOYL":
            result.innerHTML = 'Good Riddance (Time Of Your Life)';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=CnQ8N1KacJc";
            break;
        case "PH":
            result.innerHTML = 'Prosthetic Head';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=wnfuZq-7-lI";
            break;
        case "BSAB":
        case "BSB":
            result.innerHTML = 'Blood, Sex and Booze';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=TzZAYnoMLUI";
            break;
        case "COS":
            result.innerHTML = 'Church On Sunday';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=VFP5oalZn4s";
            break;
        case "FV":
            result.innerHTML = 'Fashion Victim';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=PcFU1YppfV0";
            break;
        case "DH":
            result.innerHTML = 'Deadbeat Holiday';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=nFR3eXSuGBk";
            break;
        case "HO":
            result.innerHTML = 'Hold On';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=8y4LvZDAFSM";
            break;
        case "MDP":
            result.innerHTML = 'Macy\'s Day Parade';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=4EL4njT8g98";
            break;
        case "AI":
            result.innerHTML = 'American Idiot';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Ee_uujKuJMI";
            break;
        case "JOS":
            result.innerHTML = 'Jesus Of Suburbia';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=FNKPYhXmzoE";
            break;
        case "BOBD":
            result.innerHTML = 'Boulevard Of Broken Dreams';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Soa3gO7tL-c";
            break;
        case "AWTW":
            result.innerHTML = 'Are We The Waiting';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=6HXa2gVj4mg";
            break;
        case "SJ":
            result.innerHTML = 'St. Jimmy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=jRu0O1J3Y4s";
            break;
        case "GMN":
            result.innerHTML = 'Give Me Novacaine';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=ZKAwIwjHwZI";
            break;
        case "SAR":
            result.innerHTML = 'She\'s A Rebel';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=eOv5fF7maFY";
            break;
        case "EG":
            result.innerHTML = 'Extraordinary Girl';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=hctq2W1z7Kc";
            break;
        case "WMUWSE":
            result.innerHTML = 'Wake Me Up When September Ends';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=NU9JoFKlaZ0";
            break;
        case "SOTC":
            result.innerHTML = 'Song Of The Century';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=XTWUD4mi_GE";
            break;
        case "21st":
        case "21":
        case "CB":
            result.innerHTML = '21st Century Breakdown';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=D4ZKlT1EvCA";
            break;
        case "KYE":
            result.innerHTML = 'Know Your Enemy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=9IclmVdWNbI";
            break;
        case "VLG":
            result.innerHTML = 'Viva La Gloria';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=0OjISWlmM9k";
            break;
        case "BTL":
            result.innerHTML = 'Before The Lobotomy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=wzJf2PPbJeQ";
            break;
        case "CI":
            result.innerHTML = 'Christian\'s Inferno';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=-ddCn6r6AW4";
            break;
        case "LNOE":
            result.innerHTML = 'Last Night On Earth';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=xg_Y7Or_hWM";
            break;
        case "EJN":
            result.innerHTML = 'East Jesus Nowhere';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=ruG01BF7EjY";
            break;
        case "LOTAG":
            result.innerHTML = 'Last Of The American Girls';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=HR8Ia6vyV5Q";
            break;
        case "MC":
            result.innerHTML = 'Murder City';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=O3B8k8wzwZ8";
            break;
        case "LG":
        case "VLGLG":
            result.innerHTML = 'Viva La Gloria (Little Girl)';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=gkKL3goX0WY";
            break;
        case "RHS":
            result.innerHTML = 'Restless Heart Syndrome';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=3Q4OtBeS1S0";
            break;
        case "HAS":
        case "HH":
            result.innerHTML = 'Horseshoes And Handgrenades';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=zjbJFug7lvk";
            break;
        case "TSA":
        case "SA":
            result.innerHTML = 'The Static Age';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=9zdc3W7Bc1E";
            break;
        case "AE":
            result.innerHTML = 'American Eulogy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=K7dYYYVOoxU";
            break;
        case "STL":
            result.innerHTML = 'See The Light';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=9qhXs0pkmEw";
            break;
        case "NF":
            result.innerHTML = 'Nuclear Family';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=jHmSyGjf6BA";
            break;
        case "STN":
            result.innerHTML = 'Stay The Night';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=DjQoWfstQUU";
            break;
        case "CD":
            result.innerHTML = 'Carpe Diem';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=KJ3O8pNhIQA";
            break;
        case "LYG":
            result.innerHTML = 'Let Yourself Go';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=N_8C3Z1W_HI";
            break;
        case "KTD":
            result.innerHTML = 'Kill The DJ';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=jW7VhkNqjnc";
            break;
        case "FFY":
            result.innerHTML = 'Fell For You';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=1qNVMpW91pU";
            break;
        case "LOC":
            result.innerHTML = 'Loss Of Control';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=tyoUOBJGFNE";
            break;
        case "AB":
            result.innerHTML = 'Angel Blue';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=eb1OdIVLvkQ";
            break;
        case "RJ":
            result.innerHTML = 'Rusty James';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=sCH35y79B-4";
            break;
        case "OL":
            result.innerHTML = 'Oh Love';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=IWwMqa-_210";
            break;
        case "SYT":
            result.innerHTML = 'See You Tonight';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=HzPWBl0BUMw";
            break;
        case "FT":
            result.innerHTML = 'Fuck Time';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=UWT6PmjcbOs";
            break;
        case "SWTRLF":
            result.innerHTML = 'Stop When The Red Lights Flash';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=sVhi8Qzy9as";
            break;
        case "LB":
            result.innerHTML = 'Lazy Bones';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=EkdArWpATNw";
            break;
        case "WO":
            result.innerHTML = 'Wild One';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=3YACUOGSiHg";
            break;
        case "MP":
            result.innerHTML = 'Makeout Party';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=hsHrfNzal0U";
            break;
        case "SH":
            result.innerHTML = 'Stray Heart';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=sN0b-adUt9I";
            break;
        case "BE":
            result.innerHTML = 'Baby Eyes';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=tELlDDhq0PM";
            break;
        case "LC":
            result.innerHTML = 'Lady Cobra';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=V_AZP2Vr4y0";
            break;
        case "WTL":
            result.innerHTML = 'Wow! That\'s Loud';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=JnSSdU_ABLA";
            break;
        case "BL":
            result.innerHTML = 'Brutal Love';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=84VP50arSL8";
            break;
        case "MY":
            result.innerHTML = 'Missing You';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=KhI6pfwjQbA";
            break;
        case "AS":
            result.innerHTML = '8th Avenue Serenade';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=7uHh6i2atow";
            break;
        case "DQ":
            result.innerHTML = 'Drama Queen';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=ODn2zRQ1ges";
            break;
        case "SDV":
            result.innerHTML = 'Sex, Drugs & Violence';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=y9b5swurs68";
            break;
        case "LBNT":
            result.innerHTML = 'Little Boy Named Train';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Bp0qvRid3r0";
            break;
        case "WA":
            result.innerHTML = 'Walk Away';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=ENYbgth44J8";
            break;
        case "DRB":
            result.innerHTML = 'Dirty Rotten Bastards';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Tsn7pW8TcI4";
            break;
        case "TF":
            result.innerHTML = 'The Forgotten';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=5Rs2m3lhg-k";
            break;
        case "SN":
            result.innerHTML = 'Somewhere Now';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=jLsiGZ5uKoQ";
            break;
        case "BB":
            result.innerHTML = 'Bang Bang';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=mg5Bp_Gzs0s";
            break;
        case "RR":
            result.innerHTML = 'Revolution Radio';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=B4zc-f0TIZ4";
            break;
        case "SG":
            result.innerHTML = 'Say Goodbye';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=l9stigDCiLg";
            break;
        case "BOTW":
            result.innerHTML = 'Bouncing Off The Wall';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=QZ9cwui9tHA";
            break;
        case "SB":
            result.innerHTML = 'Still Breathing';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=SUzsih7QJSY";
            break;
        case "TDTD":
            result.innerHTML = 'Too Dumb To Die';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=qh7QJ_jLam0";
            break;
        case "TT":
            result.innerHTML = 'Troubled Times';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=9cVJr3eQfXc";
            break;
        case "FN":
            result.innerHTML = 'Forever Now';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=nPBzqi3_NNs";
            break;
        case "OW":
            result.innerHTML = 'Ordinary World';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=X1Tj6HZAXH4";
            break;
        case "FOAMF":
        case "FOA":
            result.innerHTML = 'Father Of All...';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=eXv00PJ9IQM";
            break;
        case "FRA":
            result.innerHTML = 'Fire, Ready, Aim';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=qaKMuFWMkRs";
            break;
        case "OY":
            result.innerHTML = 'Oh Yeah!';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=U3cpdkhtGx0";
            break;
        case "MMOTR":
            result.innerHTML = 'Meet Me On The Roof';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=18EmOXEsmlw";
            break;
        case "IWATT":
            result.innerHTML = 'I Was A Teenage Teenager';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=k-EETaBGHYE";
            break;
        case "SYITH":
            result.innerHTML = 'Stab You In The Heart';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=9_thTiqRI0U";
            break;
        case "SY":
            result.innerHTML = 'Sugar Youth';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Urtys41D0RI";
            break;
        case "JOAH":
            result.innerHTML = 'Junkies On A High';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=W3oe144JTys";
            break;
        case "TTMAC":
            result.innerHTML = 'Take The Money And Crawl';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=ydIcpHGTO38";
            break;
        case "YL":
            result.innerHTML = 'You Lied';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=m7XuavHuYWM";
            break;
        case "CAV":
        case "CV":
            result.innerHTML = 'Cigarettes And Valentines';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Ql6sroLj9v0";
            break;
        case "DWFIL":
            result.innerHTML = 'Don\'t Wanna Fall In Love';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=83SvMUbR8x4";
            break;
        case "IWTBOT":
            result.innerHTML = 'I Want To Be On TV';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=VxGYgJNNUmk";
            break;
        case "TOWFY":
            result.innerHTML = 'Tired Of Waiting For You';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=CPQowykzR84";
            break;
        case "SOM":
            result.innerHTML = 'Sick Of Me';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=hAsb2B4AST8";
            break;
        case "DDD":
            result.innerHTML = 'Do Da Da';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=fOt0woCdi3o";
            break;
        case "OTW":
            result.innerHTML = 'On The Wagon';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=IBi2OA8S2g8";
            break;
        case "HAHA":
        case "HA HA":
        case "YD":
        case "HHYD":
            result.innerHTML = 'Ha Ha You\'re Dead';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=55btGpGsuDo";
            break;
        case "PAC":
        case "PC":
            result.innerHTML = 'Poprocks And Coke';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Zxw2Iwu__IY";
            break;
        case "BITUSA":
        case "BITU":
            result.innerHTML = 'Back In The USA';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=i9GSF3ROa58";
            break;
        case "HCTS":
            result.innerHTML = 'Here Comes The Shock';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=xVfSN1wjDmE";
            break;
        case "JAR":
            result.innerHTML = 'J.A.R. (Jason Andrew Relva)';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Z2JoODgOR5Q";
            break;
        default:
            result.innerHTML = 'Unknown Song!';
            if (result.innerHTML = 'Unknown Song!') {
                addAbb.style.opacity = 100;
                link.style.opacity = 0;
                userAbb.value = input;
            }

    }



}