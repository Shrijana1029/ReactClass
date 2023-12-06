import React, { Component } from "react";
// import PropTypes from "prop  types";
import Newsitem from "./NewsItem";
import About from "./About";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "bbc news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Three Israelis killed by Palestinian gunmen at Jerusalem bus stop",
      description:
        "Two Palestinian gunmen from Hamas fired at people waiting on a highway in the city's west, police say.",
      url: "http://www.bbc.co.uk/news/world middle east 67575684",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/185B8/production/_131886799_ab7a932899ea77d2ee24925e40a0b5adaaee0d4d.jpg",
      publishedAt: "2023 11 30T15:22:21.819921Z",
      content:
        "Three Israelis were killed and 16 injured after two Palestinian gunmen opened fire at a crowded bus stop in West Jerusalem, Israeli police say.\r\nVideo showed the attackers getting out of a car on a h… [+4720 chars]",
    },

    {
      source: {
        id: "bbc news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Elon Musk says advertising boycott will kill X",
      description:
        "In a profanity laced outburst, the billionaire accuses firms of trying to blackmail him with ad dollars.",
      url: "http://www.bbc.co.uk/news/world us canada 67574396",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/12CF8/production/_131884077_musk.jpg",
      publishedAt: "2023 11 30T02:07:17.393781Z",
      content:
        "In a profanity laced outburst, Elon Musk has slammed advertisers that have left X, warning they will kill the social media platform.\r\nAt an event in New York, he accused companies that have joined an… [+2805 chars]",
    },
    {
      source: {
        id: "bbc news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Why is North Korea saying it's watching the White House?",
      description:
        "Long spied on by its more tech advanced enemies, Pyongyang says it can now do the same.",
      url: "http://www.bbc.co.uk/news/world asia 67563543",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/F914/production/_131846736_d837609edc521bb9d570dc9004731222a284602f.jpg",
      publishedAt: "2023 11 30T00:07:22.4260687Z",
      content:
        "North Korea has declared it's got the White House in its sights thanks to its new spy satellite   which the regime says is up and running, although the West has its doubts.\r\nStill, leader Kim Jong Un… [+5839 chars]",
    },
    {
      "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
      },
      "author": "wsj",
      "title": "He Plays NFL's Least Valued Position. He's Never Been More Valuable...",
      "description": "San Francisco 49ers running back Christian McCaffrey is defying modern thinking—and explains why his team is the favorite to win the Super Bowl.",
      "url": "https://www.wsj.com/sports/football/christian-mccaffrey-san-francisco-49ers-nfl-running-backs-45ac3696",
      "urlToImage": "https://images.wsj.net/im-895178/social",
      "publishedAt": "2023-12-04T22:00:05Z",
      "content": "He Plays the NFL’s Least Valued Position. He’s Never Been More Valuable. By Dec. 4, 2023 9:45 am ETBy every shred of modern football thinking, San Francisco 49ers running back Christian McCaffrey sho… [+918 chars]"
      },
      {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
        },
        "author": "Lane Florsheim",
        "title": "Taylor Swift Sells Out Stadiums, Movie Theaters—and Clothes",
        "description": "The musician’s star power has been a boon to fashion brands: ‘I woke up the next day and it was like, articles, followers, sales, sales, sales’",
        "url": "https://www.wsj.com/style/fashion/taylor-swift-sells-out-clothes-brands-2dfb3652",
        "urlToImage": "https://images.wsj.net/im-892957/social",
        "publishedAt": "2023-12-04T16:49:49Z",
        "content": "In August, Nell Diamond, who runs the fashion and lifestyle brand Hill House Home, was in Montana on bridesmaid duty, getting ready for her best friends wedding reception. Peeking at her phone betwee… [+552 chars]"
        },
        
        {
        "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
        },
        "author": "Alistair MacDonald",
        "title": "Ukrainian Sniper Breaks Cover to Claim World-Record Hit of More Than 2 Miles...",
        "description": "Ukrainian Sniper Breaks Cover to Claim World-Record Hit of More Than 2 Miles...\r\n\n \n \n \n (Second column, 12th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:As counteroffensive fizzles, Kyiv battles shift of world's attention...\r\nWhite House warns it is 'out of mo…",
        "url": "https://www.wsj.com/world/europe/ukrainian-sniper-breaks-cover-to-claim-world-record-hit-of-more-than-2-miles-2b1c820e",
        "urlToImage": "https://images.wsj.net/im-895225/social",
        "publishedAt": "2023-12-04T15:01:38Z",
        "content": "KYIVThe Ukrainian sniper had lain still for hours in near freezing temperatures when the command came to take the shot at a Russian soldier almost 2½ miles away. You can, his spotter said, and Vyache… [+422 chars]"
        },

        {
          "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
          },
          "author": "Alex Frangos",
          "title": "Hawaiian Airlines Stock Price Triples on Alaska Deal",
          "description": "Gold hovers near record-high levels",
          "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-12-04-2023",
          "urlToImage": "https://images.wsj.net/im-895242/social",
          "publishedAt": "2023-12-04T12:15:36Z",
          "content": "Talk about skyrocketing airline prices.\r\nAlaska Air agreed to pay roughly $1 billion for Hawaiian Airlines, quadruple the $250 million that the Honolulu-based carrier was worth on the stock market on… [+282 chars]"
          },
          
          {
          "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
          },
          "author": "David Sachs",
          "title": "Roche to Buy Carmot Therapeutics for Up to $3.1 Billion in Bet on Obesity Treatments Bet on Obesity Treatments Bet on Obesity Treatments Bet on Obesity Treatments",
          "description": "",
          "url": "https://www.wsj.com/tech/biotech/roche-strikes-deal-to-buy-drug-developer-carmot-therapeutics-for-2-7-bln-83ec683a",
          "urlToImage": "https://images.wsj.net/im-895199/social",
          "publishedAt": "2023-12-04T11:10:00Z",
          "content": "Roche Holding said it would buy California-based biotechnology company Carmot Therapeutics for up to $3.1 billion, tapping assets it says have the potential to treat obesity in patients with and with… [+320 chars]"
          },

          {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Jacky Wong",
            "title": "The Rise of Temu’s Chinese Parent Will Reshape E-Commerce",
            "description": "PDD, the owner of fast-growing Temu, is muscling into the U.S. in a way Alibaba never did",
            "url": "https://www.wsj.com/business/retail/the-rise-of-temus-chinese-parent-will-reshape-e-commerce-439c7c1b",
            "urlToImage": "https://images.wsj.net/im-895666/social",
            "publishedAt": "2023-12-05T05:06:00Z",
            "content": "Move over, Alibaba. Theres a new online-shopping champion in China: PDD, the company behind \r\ndiscount-retailing app Temu, is now the countrys most valuable e-commerce company.After a 78% rise this y… [+591 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Belle Lin",
            "title": "Meta and IBM Launch AI Alliance",
            "description": "One year after the debut of ChatGPT, companies including AMD and ServiceNow are teaming up with academia to promote ‘open’ alternatives to OpenAI",
            "url": "https://www.wsj.com/articles/meta-and-ibm-launch-ai-alliance-300c4862",
            "urlToImage": "https://images.wsj.net/im-895513/social",
            "publishedAt": "2023-12-05T05:01:00Z",
            "content": "Meta Platforms and International Business Machines\r\n launched a coalition of more than 50 artificial intelligence companies and research institutions that are pushing a so-called open model of AI, ho… [+547 chars]"
            },

            {
              "source": {
              "id": "the-wall-street-journal",
              "name": "The Wall Street Journal"
              },
              "author": "Anna Wilde Mathews",
              "title": "CVS Plans to Overhaul How Much Drugs Cost",
              "description": "The nation’s biggest drugstore chain to get paid based on the amount it pays for drugs, plus small markup and fee",
              "url": "https://www.wsj.com/health/healthcare/prescription-drug-costs-cvs-pharmacy-56acb623",
              "urlToImage": "https://images.wsj.net/im-895439/social",
              "publishedAt": "2023-12-05T05:01:00Z",
              "content": "CVS Health, the nations largest drugstore chain, will move away from the \r\ncomplex formulas used to set the prices of the prescription drugs it sells, shifting to a simpler model that could upend how… [+555 chars]"
              },
              {
              "source": {
              "id": "the-wall-street-journal",
              "name": "The Wall Street Journal"
              },
              "author": "James Mackintosh",
              "title": "Green Investors Were Crushed. Now It’s Time to Make Money.",
              "description": "The lessons have been hard, but should remind investors in the sector of some of the basic facts of investing",
              "url": "https://www.wsj.com/finance/investing/green-investors-were-crushed-now-its-time-to-make-money-0e0ba9c4",
              "urlToImage": "https://images.wsj.net/im-895432/social",
              "publishedAt": "2023-12-05T04:00:00Z",
              "content": "Invest according to your political views, and youre unlikely to make money. Companies that appeal to left-wingers or to right-wingers might be good or bad investments, but the fact of being, on curre… [+486 chars]"
              },
              {
                "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
                },
                "author": "wsj",
                "title": "Israel Engages Gaza in Some of Fiercest Fighting of War...",
                "description": "Israeli military strikes targets across enclave and expands ground attacks to the south",
                "url": "https://www.wsj.com/world/middle-east/israel-hamas-engage-in-some-of-fiercest-fighting-of-war-30edb859",
                "urlToImage": "https://images.wsj.net/im-895235/social",
                "publishedAt": "2023-12-04T23:00:03Z",
                "content": "Israel, Hamas Engage in Some of Fiercest Fighting of WarTEL AVIV—Israeli troops and Hamas fighters are locked in some of their fiercest fighting of the two-month-old war, including at close quarters,… [+908 chars]"
                },
                {
                "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
                },
                "author": "wsj",
                "title": "He Plays NFL's Least Valued Position. He's Never Been More Valuable...",
                "description": "San Francisco 49ers running back Christian McCaffrey is defying modern thinking—and explains why his team is the favorite to win the Super Bowl.",
                "url": "https://www.wsj.com/sports/football/christian-mccaffrey-san-francisco-49ers-nfl-running-backs-45ac3696",
                "urlToImage": "https://images.wsj.net/im-895178/social",
                "publishedAt": "2023-12-04T22:00:05Z",
                "content": "He Plays the NFL’s Least Valued Position. He’s Never Been More Valuable. By Dec. 4, 2023 9:45 am ETBy every shred of modern football thinking, San Francisco 49ers running back Christian McCaffrey sho… [+918 chars]"
                },
                {
                "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
                },
                "author": "Lane Florsheim",
                "title": "Taylor Swift Sells Out Stadiums, Movie Theaters—and Clothes",
                "description": "The musician’s star power has been a boon to fashion brands: ‘I woke up the next day and it was like, articles, followers, sales, sales, sales’",
                "url": "https://www.wsj.com/style/fashion/taylor-swift-sells-out-clothes-brands-2dfb3652",
                "urlToImage": "https://images.wsj.net/im-892957/social",
                "publishedAt": "2023-12-04T16:49:49Z",
                "content": "In August, Nell Diamond, who runs the fashion and lifestyle brand Hill House Home, was in Montana on bridesmaid duty, getting ready for her best friends wedding reception. Peeking at her phone betwee… [+552 chars]"
                },

                {
                  "source": {
                  "id": "the-wall-street-journal",
                  "name": "The Wall Street Journal"
                  },
                  "author": "Alistair MacDonald",
                  "title": "Ukrainian Sniper Breaks Cover to Claim World-Record Hit of More Than 2 Miles...",
                  "description": "Ukrainian Sniper Breaks Cover to Claim World-Record Hit of More Than 2 Miles...\r\n\n \n \n \n (Second column, 12th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:As counteroffensive fizzles, Kyiv battles shift of world's attention...\r\nWhite House warns it is 'out of mo…",
                  "url": "https://www.wsj.com/world/europe/ukrainian-sniper-breaks-cover-to-claim-world-record-hit-of-more-than-2-miles-2b1c820e",
                  "urlToImage": "https://images.wsj.net/im-895225/social",
                  "publishedAt": "2023-12-04T15:01:38Z",
                  "content": "KYIVThe Ukrainian sniper had lain still for hours in near freezing temperatures when the command came to take the shot at a Russian soldier almost 2½ miles away. You can, his spotter said, and Vyache… [+422 chars]"
                  },

  ];
  

  constructor() {
    super();
    console.log("I am constructor again");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  handlePreviousClick = () =>{
    console.log("pre")
  }
  handleNextClick = () =>{
    
  }
  render() {
    return (
      <>
        <div className="container my  3">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col  md  4" key={element.url}>
                  <Newsitem
                    title={element.title.slice(0,45)}
                    description={element.description.slice(0,90)}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                  <br />
                  
                </div>
              );
            })}
          </div>
          <div class="d-flex justify-content-between">
              
          <button type="button" disabled={this.state.page<=1} class="btn btn-success" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" class="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>


        </div>
        

      </>
    );
  }
}
