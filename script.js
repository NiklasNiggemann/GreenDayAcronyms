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
        case "PWF":
            result.innerHTML = 'Playing With Fire';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=9pdj4iJD08s";
            break;
        case "AIIYL":
        case "AIYL":
            result.innerHTML = 'As If It\'s Your Last';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Amq-qlqbjYA";
            break;
        case "FY":
            result.innerHTML = 'Forever Young';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=qa51zme-oxs";
            break;
        case "SUL":
        case "SU":
            result.innerHTML = 'See U Later';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=fpimnj4SNjQ";
            break;
        case "D4":
        case "DDU":
            result.innerHTML = 'DDU-DU DDU-DU';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=IHNzOHi8sJs";
            break;
        case "KTL":
            result.innerHTML = 'Kill This Love';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=2S24-y0Ij3Y";
            break;
        case "DKWTD":
            result.innerHTML = 'Don\'t Know What To Do';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=bqzDuRz_P7g";
            break;
        case "KI":
            result.innerHTML = 'Kick It';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=fni82iMq5Fw";
            break;
        case "HN":
            result.innerHTML = 'Hope Not';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=l6zMnMMzsss";
            break;
        case "HYLT":
            result.innerHTML = 'How You Like That';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=ioNng23DkIM";
            break;
        case "IC":
            result.innerHTML = 'Ice Cream';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=vRXZj0DzXIA";
            break;
        case "PS":
            result.innerHTML = 'Pretty Savage';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=F8c8f2nK82w";
            break;
        case "BYW":
            result.innerHTML = 'Bet You Wanna';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=gXBdvSj9F2I";
            break;
        case "LG":
        case "LSG":
            result.innerHTML = 'Lovesick Girls';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=dyRsYk0LyA8";
            break;
        case "COY":
            result.innerHTML = 'Crazy Over You';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=Wu9EupoKUls";
            break;
        case "LTHM":
            result.innerHTML = 'Love To Hate Me';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=wlzGXcTzdzU";
            break;
        case "YNK":
            result.innerHTML = 'You Never Know';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=4Kk_iaaHd_Y";
            break;
        case "KAMU":
            result.innerHTML = 'Kiss And Make Up';
            link.innerHTML = 'Click Here To Listen!';
            link.href = "https://www.youtube.com/watch?v=AX3Bsiq-13k";
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