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
            link.href = "#";
            break;
        case "DLM":
            result.innerHTML = 'Don\'t Leave Me';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "IWT":
            result.innerHTML = 'I Was There';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "DB":
            result.innerHTML = 'Disappearing Boy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "GTP":
            result.innerHTML = 'Going To Pasalacqua';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "RTA":
            result.innerHTML = 'Road To Acceptance';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TJD":
            result.innerHTML = 'The Judge\'s Daughter';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "2000":
        case "LYA":
            result.innerHTML = '2,000 Light Years Away';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "NGFL":
            result.innerHTML = 'Nice Guys Finish Last';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "OFTR":
            result.innerHTML = 'One For The Razorbacks';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WTP":
            result.innerHTML = 'Welcome To Paradise';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "CR":
            result.innerHTML = 'Christie Road';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "PA":
            result.innerHTML = 'Private Ale';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "DLS":
            result.innerHTML = 'Dominated Love Slave';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "OOML":
        case "OML":
            result.innerHTML = 'One Of My Lies';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "NOK":
            result.innerHTML = 'No One Knows';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WWHC":
            result.innerHTML = 'Who Wrote Holden Caulfield?';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WIMHA":
            result.innerHTML = 'Words I Might Have Ate';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SC":
            result.innerHTML = 'Sweet Children';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BTIT":
            result.innerHTML = 'Best Thing In Town';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "MG":
            result.innerHTML = 'My Generation';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "HAB":
            result.innerHTML = 'Having A Blast';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "PT":
            result.innerHTML = 'Pulling Teeth';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BC":
            result.innerHTML = 'Basket Case';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SR":
            result.innerHTML = 'Sassafras Roots';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WICA":
            result.innerHTML = 'When I Come Around';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "CC":
            result.innerHTML = 'Coming Clean';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "ES":
            result.innerHTML = 'Emenius Sleepus';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "ITE":
            result.innerHTML = 'In The End';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "ABM":
            result.innerHTML = 'All By Myself';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "AS":
            result.innerHTML = 'Armatage Shanks';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SWM":
            result.innerHTML = 'Stuck With Me';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "GSB":
            result.innerHTML = 'Geek Strink Breath';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "NP":
            result.innerHTML = 'No Pride';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BUW":
            result.innerHTML = 'Bab\'s Uvula Who?';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "PS":
            result.innerHTML = 'Panic Song';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SATA":
            result.innerHTML = 'Stuart And The Ave.';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BS":
            result.innerHTML = 'Brain Stew';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WS":
            result.innerHTML = 'Westbound Sign';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TWH":
            result.innerHTML = 'Tight Wad Hill';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WC":
            result.innerHTML = 'Walking Contradiction';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "HAR":
        case "HR":
            result.innerHTML = 'Hitchin\' A Ride';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TG":
            result.innerHTML = 'The Grouch';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "ATT":
            result.innerHTML = 'All The Time';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WR":
            result.innerHTML = 'Worry Rock';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "LRI":
            result.innerHTML = 'Last Ride In';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WA":
            result.innerHTML = 'Walking Alone';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TB":
            result.innerHTML = 'Take Back';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "KFAD":
            result.innerHTML = 'King For A Day';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "GR":
        case "TOYL":
            result.innerHTML = 'Good Riddance (Time Of Your Life)';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "PH":
            result.innerHTML = 'Prosthetic Head';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BSAB":
        case "BSB":
            result.innerHTML = 'Blood, Sex and Booze';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "COS":
            result.innerHTML = 'Church On Sunday';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "FV":
            result.innerHTML = 'Fashion Victim';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "DH":
            result.innerHTML = 'Deadbeat Holiday';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "HO":
            result.innerHTML = 'Hold On';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "MDP":
            result.innerHTML = 'Macy\'s Day Parade';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "AI":
            result.innerHTML = 'American Idiot';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "JOS":
            result.innerHTML = 'Jesus Of Suburbia';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BOBD":
            result.innerHTML = 'Boulevard Of Broken Dreams';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "AWTW":
            result.innerHTML = 'Are We The Waiting';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SJ":
            result.innerHTML = 'St. Jimmy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "GMN":
            result.innerHTML = 'Give Me Novacaine';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SAR":
            result.innerHTML = 'She\'s A Rebel';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "EG":
            result.innerHTML = 'Extraordinary Girl';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WMUWSE":
            result.innerHTML = 'Wake Me Up When September Ends';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SOTC":
            result.innerHTML = 'Song Of The Century';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "21st":
        case "21":
            result.innerHTML = '21st Century Breakdown';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "KYE":
            result.innerHTML = 'Know Your Enemy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "VLG":
            result.innerHTML = 'Viva La Gloria';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BTL":
            result.innerHTML = 'Before The Lobotomy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "CI":
            result.innerHTML = 'Christian\'s Inferno';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "LNOE":
            result.innerHTML = 'Last Night On Earth';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "EJN":
            result.innerHTML = 'East Jesus Nowhere';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "LOTAG":
            result.innerHTML = 'Last Of The American Girls';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "MC":
            result.innerHTML = 'Murder City';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "LG":
            result.innerHTML = 'Viva La Gloria (Little Girl)';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "RHS":
            result.innerHTML = 'Restless Heart Syndrome';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "HAS":
        case "HH":
            result.innerHTML = 'Horseshoes And Handgrenades';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TSA":
        case "SA":
            result.innerHTML = 'The Static Age';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "AE":
            result.innerHTML = 'American Eulogy';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "STL":
            result.innerHTML = 'See The Light';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "NF":
            result.innerHTML = 'Nuclear Family';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "STN":
            result.innerHTML = 'Stay The Night';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "CD":
            result.innerHTML = 'Carpe Diem';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "LYG":
            result.innerHTML = 'Let Yourself Go';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "KTD":
            result.innerHTML = 'Kill The DJ';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "FFY":
            result.innerHTML = 'Fell For You';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "LOC":
            result.innerHTML = 'Loss Of Control';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "AB":
            result.innerHTML = 'Angel Blue';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "RJ":
            result.innerHTML = 'Rusty James';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "OL":
            result.innerHTML = 'Oh Love';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SYT":
            result.innerHTML = 'See You Tonight';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "FT":
            result.innerHTML = 'Fuck Time';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SWTRLF":
            result.innerHTML = 'Stop When The Red Lights Flash';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "LB":
            result.innerHTML = 'Lazy Bones';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WO":
            result.innerHTML = 'Wild One';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "MP":
            result.innerHTML = 'Makeout Party';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SH":
            result.innerHTML = 'Stray Heart';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BE":
            result.innerHTML = 'Baby Eyes';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "LC":
            result.innerHTML = 'Lady Cobra';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WTL":
            result.innerHTML = 'Wow! That\'s Loud';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BL":
            result.innerHTML = 'Brutal Love';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "MY":
            result.innerHTML = 'Missing You';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "AS":
            result.innerHTML = '8th Avenue Serenade';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "DQ":
            result.innerHTML = 'Drama Queen';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SDV":
            result.innerHTML = 'Sex, Drugs & Violence';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "LBNT":
            result.innerHTML = 'Little Boy Named Train';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "WA":
            result.innerHTML = 'Walk Away';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "DRB":
            result.innerHTML = 'Dirty Rotten Bastards';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TF":
            result.innerHTML = 'The Forgotten';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SN":
            result.innerHTML = 'Somewhere Now';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BB":
            result.innerHTML = 'Bang Bang';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "RR":
            result.innerHTML = 'Revolution Radio';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SG":
            result.innerHTML = 'Say Goodbye';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "BOTW":
            result.innerHTML = 'Bouncing Off The Wall';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SB":
            result.innerHTML = 'Still Breathing';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TDTD":
            result.innerHTML = 'Too Dumb To Die';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TT":
            result.innerHTML = 'Troubled Times';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "FN":
            result.innerHTML = 'Forever Now';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "OW":
            result.innerHTML = 'Ordinary World';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "FOAMF":
        case "FOA":
            result.innerHTML = 'Father Of All Motherfuckers';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "FRA":
            result.innerHTML = 'Fire, Ready, Aim';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "OY":
            result.innerHTML = 'Oh Yeah!';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "MMOTR":
            result.innerHTML = 'Meet Me On The Roof';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "IWATT":
            result.innerHTML = 'I Was A Teenage Teenager';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SYITH":
            result.innerHTML = 'Stab You In The Heart';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SY":
            result.innerHTML = 'Sugar Youth';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "JOAH":
            result.innerHTML = 'Junkies On A High';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TTMAC":
            result.innerHTML = 'Take The Money And Crawl';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "YL":
            result.innerHTML = 'You Lied';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "CAV":
        case "CV":
            result.innerHTML = 'Cigarettes And Valentines';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "DWFIL":
            result.innerHTML = 'Don\'t Wanna Fall In Love';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "IWTBOT":
            result.innerHTML = 'I Want To Be On TV';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "TOWFY":
            result.innerHTML = 'Tired Of Waiting For You';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "SOM":
            result.innerHTML = 'Sick Of Me';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "DDD":
            result.innerHTML = 'Do Da Da';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "OTW":
            result.innerHTML = 'On The Wagon';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "HAHA":
        case "HA HA":
        case "YD":
        case "HHYD":
            result.innerHTML = 'Ha Ha You\'re Dead';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
            break;
        case "PAC":
        case "PC":
            result.innerHTML = 'Poprocks And Coke';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "#";
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