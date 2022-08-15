//6강 명언

const quotes = [

    {
        quote : "위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다.",
        author: "워싱턴 어빙",
    },

    {
        quote : "오직 한 가지 성공이 있을 뿐이다. 바로 자기 자신만의 방식으로 삶을 살아갈 수 있느냐이다.",
        author : "크리스토퍼 몰리",     
    },

    {
        quote : "위대한 사람은 기회가 없다고 원망하지 않는다.",
        author : "랄프 왈도 에머슨",
    },

    {
        quote : "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
        author : "제임스 딘",

    },

    {
        quote : "사랑에는 늘 어느 정도 광기가 있다. 그러나 광기에도 늘 어느 정도 이성이 있다.",
        author : "프리드리히 니체"
    },
    
    {
        quote : "나는 내 머리를 최대한 활용할 뿐 아니라, 다른 사람의 머리도 최대한 많이 빌린다.",
        author :"우드로 윌슨",

    },

    {
        quote : "과거에서 교훈을 얻을 수는 있어도 과거 속에 살 수는 없다.",
        author : "린든 B. 존슨",

    },

    {
        quote : "자신이 될 수 있는 존재가 되길 희망하는 것이 삶의 목적이다.",
        author :"신시아 오자크",
    },

    {
        quote : "위대한 업적은 대개 커다란 위험을 감수한 결과이다.",
        author : "헤로도토스",

    },

    {
        quote : "도전을 받아들여라. 그러면 승리의 쾌감을 맛볼 지도 모른다.",
        author : "조지 S. 패튼",

    },

];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;