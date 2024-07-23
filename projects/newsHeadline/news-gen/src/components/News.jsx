import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import '../App.css'
export class News extends Component {
    getData = [
        {
            "source": {
                "id": null,
                "name": "Autoblog"
            },
            "author": "Reuters",
            "title": "Trump hates electric cars, but he caused one to be made",
            "description": "Filed under:\n Electric,Sedan\n Continue reading Trump hates electric cars, but he caused one to be made\nTrump hates electric cars, but he caused one to be made originally appeared on Autoblog on Sat, 20 Jul 2024 12:00:00 EDT. Please see our terms for use of fe…",
            "url": "https://www.autoblog.com/2024/07/20/trump-hates-electric-cars-but-he-caused-one-to-be-made/",
            "urlToImage": "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1200x675/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/05/03151540/Xiaomi-SU71.jpg",
            "publishedAt": "2024-07-20T16:00:00Z",
            "content": "BEIJING  A decision by the Trump administration to sanction Chinas Xiaomi Corp in early 2021 was the catalyst for the companys decision to build its first electric car, CEO Lei Jun said on Friday.\r\nB… [+2698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Sophie Okolo, MPH, Contributor, \n Sophie Okolo, MPH, Contributor\n https://www.forbes.com/sites/sophieokolo/",
            "title": "3 Reasons Why You Can’t Sleep At Night",
            "description": "Discover why you can’t sleep at night. Learn how trauma, overwork, and poor environments affect your rest and find tips to improve your sleep and well-being.",
            "url": "https://www.forbes.com/sites/sophieokolo/2024/07/20/reasons-why-you-cant-sleep-at-night/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6699ec08b2c406e9f739ac3a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-07-20T16:00:00Z",
            "content": "Bonn, Germany - April 16: In this photo illustration a frustrated girl sits at her desk on April ... [+] 16, 2021 in Bonn, Germany. (Photo by Ute Grabowsky/Photothek via Getty Images)\r\nPhotothek via … [+4808 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Robb Report"
            },
            "author": "Viju Mathew",
            "title": "First Drive: The Lotus Emeya Targets Porsche, Mercedes, and Lucid With Its 905 HP Performance",
            "description": "What the all-electric Lotus Emeya lacks in cohesive styling is more than made up for in muscular athleticism.",
            "url": "http://robbreport.com/motors/cars/first-drive-all-electric-lotus-emeya-1235782218/",
            "urlToImage": "https://robbreport.com/wp-content/uploads/2024/07/opener-1-Lotus_Emeya_R_Dynamic_020724_05-1.jpg?w=681&h=383&crop=1",
            "publishedAt": "2024-07-20T16:00:00Z",
            "content": "The purists will protest, but the idea of a luxurious Lotus sedan is nothing new. Back in 1980, company founder Colin Chapman commissioned Paulo Martin—a former Pininfarina designer who penned the ca… [+6608 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": null,
            "title": "Alphabet earnings and 3 more things we're watching in the stock market next week",
            "description": "Alphabet headlines a group of Club holdings reporting earnings next week. Meanwhile, the Fed's favorite inflation gauge is the biggest economic release.",
            "url": "https://www.cnbc.com/2024/07/20/alphabet-earnings-and-3-more-things-were-watching-in-the-stock-market-next-week.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107145898-1667510273534-gettyimages-1393876536-0j7a4557_34171d4c-3964-4bfa-ac93-3394a0db95ff.jpeg?v=1721422411&w=1920&h=1080",
            "publishedAt": "2024-07-20T14:00:01Z",
            "content": "This week was all about rotation. Investors spent much of the week shifting funds around, locking in profits with winners mainly megacap tech stocks and taking positions in many overlooked areas of t… [+11369 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "James Bickerton",
            "title": "Mark Cuban Hits Back at Fox News Host: 'Tough Guy Lol'",
            "description": "Cuban clashed with Mark Levin as part of an ongoing debate about prominent business figures endorsing Donald Trump.",
            "url": "https://www.newsweek.com/mark-cuban-hits-back-fox-news-host-tough-guy-lol-1927966",
            "urlToImage": "https://d.newsweek.com/en/full/2433248/mark-cuban.jpg",
            "publishedAt": "2024-07-20T13:55:23Z",
            "content": "Business tycoon Mark Cuban has hit back at a Fox News host who branded him \"an overrated a******\" in an ongoing row over prominent business figures endorsing Republican presidential candidate Donald … [+3918 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Freerepublic.com"
            },
            "author": "MSN - Seeking Alpha",
            "title": "Elon Musk says CrowdStrike 'deleted from all our systems'",
            "description": "Tesla (NASDAQ:TSLA) and SpaceX CEO Elon Musk posted X earlier Friday that CrowdStrike (NASDAQ:CRWD) has been “deleted from all our systems, so no rollouts at all.” However, according to several sources cited by Business Insider, Tesla (TSLA) sent some of its …",
            "url": "https://freerepublic.com/focus/f-news/4252819/posts",
            "urlToImage": null,
            "publishedAt": "2024-07-20T13:41:55Z",
            "content": "Skip to comments.\r\nElon Musk says CrowdStrike 'deleted from all our systems'MSN - Seeking Alpha ^\r\n | July 20, 2024\r\n | Staff\r\nPosted on 07/20/2024 6:41:55 AM PDT by Navy Patriot\r\nTesla (NASDAQ:TSLA)… [+1925 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Dnyuz.com"
            },
            "author": "New York Times",
            "title": "Wall St's Masters of the Universe Are Masters of None in 2024 Race...",
            "description": "Wall St's Masters of the Universe Are Masters of None in 2024 Race...\r\n\n \n \n \n (First column, 10th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
            "url": "https://dnyuz.com/2024/07/20/wall-streets-masters-of-the-universe-are-masters-of-none-in-2024-race/",
            "urlToImage": "https://dnyuz.com/wp-content/uploads/2024/07/Wall-Streets-Masters-of-the-Universe-Are-Masters-of-None.jpg",
            "publishedAt": "2024-07-20T13:37:37Z",
            "content": "Its a bad time to be a finance billionaire. Well, in Washington, D.C., anyway.\r\nRepublicans on Wall Street, who had been largely coalescing around former President Donald J. Trumps efforts to return … [+6124 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Futurism"
            },
            "author": "Noor Al-Sibai",
            "title": "Woman Arrested for Smashing Windows of Cybertruck Ice Cream Truck",
            "description": "Cream Big Out in wild Ohio, a woman has been arrested for allegedly smashing the windows of a Cybertruck out of which someone ran an ice cream stand. As Dayton's WHIO local broadcaster reports, a 29-year-old Indiana woman was arrested earlier this week for cl…",
            "url": "https://futurism.com/the-byte/woman-smashes-cybertruck-ice-cream-truck",
            "urlToImage": "https://wordpress-assets.futurism.com/2024/07/woman-smashes-cybertruck-ice-cream-truck.jpg",
            "publishedAt": "2024-07-20T13:30:01Z",
            "content": "So much for shatterproof windows. \r\nCream Big\r\nOut in wild Ohio, a woman has been arrested for allegedly smashing the windows of a Cybertruck out of which someone ran an ice cream stand.\r\nAs Dayton's… [+1944 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jeran Wittenstein",
            "title": "Big Tech Stock Slump Amps Up Pressure to Deliver on Earnings",
            "description": "(Bloomberg) -- The stakes were already elevated for technology giants heading into this earnings season. They just got a lot higher after the worst week for ...",
            "url": "https://finance.yahoo.com/news/big-tech-stock-slump-amps-130003263.html",
            "urlToImage": "https://media.zenfs.com/en/bloomberg_markets_842/4c9a9201560194f9f763a9f37a32274a",
            "publishedAt": "2024-07-20T13:00:03Z",
            "content": "(Bloomberg) -- The stakes were already elevated for technology giants heading into this earnings season. They just got a lot higher after the worst week for the Nasdaq 100 Index in three months.\r\nMos… [+5008 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "cnbc.com",
            "title": "Why Tesla’s big bet on gigacasting has other EV makers reimagining their factories",
            "description": "Tesla has promoted its gigacasting manufacturing method as a path to cheaper, lighter EVs. Rivals such as Volvo are also investing, but it's not without risks.",
            "url": "https://biztoc.com/x/0912c5575029449c",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-07-20T12:17:27Z",
            "content": "Tesla has promoted its gigacasting manufacturing method as a path to cheaper, lighter EVs. Rivals such as Volvo are also investing, but it's not without risks.\r\nThis story appeared on cnbc.com, 2024-… [+5 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ben Werschkul",
            "title": "What Trump-Vance could mean for Wall Street",
            "description": "This week's GOP convention showcased the party's dueling signals about how a Trump-Vance ticket would treat Wall Street and the larger business world.",
            "url": "https://finance.yahoo.com/news/what-trump-vance-could-mean-for-wall-street-120004031.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/OVn52DYZUmbtfOu_hYrI_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-07/03410520-45d8-11ef-bfbb-2b1a581b40ba",
            "publishedAt": "2024-07-20T12:00:04Z",
            "content": "The signals from Donald Trump and his party at the GOP convention this week painted a mixed picture of what posture the former president would have toward Wall Street and the larger business world if… [+6555 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": null,
            "title": "Why Tesla’s big bet on gigacasting has other EV makers reimagining their factories",
            "description": "Tesla has promoted its gigacasting manufacturing method as a path to cheaper, lighter EVs. Rivals such as Volvo are also investing, but it's not without risks.",
            "url": "https://www.cnbc.com/2024/07/20/tesla-and-other-ev-makers-like-volvo-are-betting-big-on-gigacasting.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107408949-1714584297903-gettyimages-1235870525-20090101211014-99-591482.jpeg?v=1714584339&w=1920&h=1080",
            "publishedAt": "2024-07-20T12:00:01Z",
            "content": "In the race to make EVs cheaper and more profitable, companies are pulling just about every lever they can. But while improving battery technology often hogs the spotlight, automakers are investing h… [+3653 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Dr. Maximilian Holland",
            "title": "Ring Ring: Phonemaker Xiaomi’s Electric Sportscar Dials Up Speed At The Nürburgring!",
            "description": "Xiaomi, the world’s second largest smartphone maker, has recently launched its electric sportscar, the Xiaomi SU7 sedan. The company has just announced it will soon attempt a fast lap at the Nürburgring Nordschleife using a dedicated SU7 track-ready prototype…",
            "url": "https://cleantechnica.com/2024/07/20/ring-ring-phonemaker-xiaomis-electric-sportscar-dials-up-speed-at-the-nurburgring/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/07/Xiaomi-SU7-on-the-Ring-Trim.jpg",
            "publishedAt": "2024-07-20T11:50:39Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nXiaomi, the world’s second largest smartphone maker, recently launched its electric sportscar, the Xiaomi SU7… [+7659 chars]"
        },]
        static defaultProps = {
            category: "general"
        }
        static propTypes = {
            category: propTypes.string,
        }
    capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    constructor(props) {
        super(props);
        console.log("Hello ")
        this.state = {
            getData: this.getData,
            loading: false,
            page: 1,
            totalResults: 0,
            error: "",
        }
     {this.props.category == "general"? document.title = "NewsScenario - Get Daily News Everyday":document.title = `NewsScenario - ${this.capitalizeFirstLetter(this.props.category)}`;}
    }


    async componentDidMount() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=2024-07-20&to=2024-07-20&sortBy=popularity&apiKey=${this.props.apiKey}&pageSize=8&page=${this.state.page}`
        this.setState({loading: true})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60);
        this.setState({loading: false})

        // console.log(parsedData.totalResults);
        this.setState({ totalResults: Math.ceil(parsedData.totalResults / 8) })
        this.setState({ getData: parsedData.articles })
        this.props.setProgress(100);

    }

    handlePagePrevious = async () => {
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=2024-07-20&to=2024-07-20&sortBy=popularity&apiKey=${this.props.apiKey}&pageSize=8&page=${this.state.page - 1}`
        this.setState({loading: true})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60);
        this.setState({loading: false})
        console.log(parsedData);
        this.setState({ getData: parsedData.articles })
        console.log("Next")
        this.setState({ page: this.state.page - 1 })
        this.setState({ totalResults: this.state.totalResults + 1 })
        this.props.setProgress(100);

    }


    handlePageNext = async () => {
         this.props.setProgress(0);
        window.scroll(0,0)
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=2024-07-20&to=2024-07-20&sortBy=popularity&apiKey=${this.props.apiKey}&pageSize=8&page=${this.state.page + 1}`
        this.setState({loading: true})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60);
        this.setState({loading: false})
        console.log(parsedData);
        this.setState({ getData: parsedData.articles })
        console.log("Next")
        this.setState({ page: this.state.page + 1 })
        this.setState({ totalResults: this.state.totalResults - 1 })
        { parsedData.message ? this.setState({ error: parsedData.message }) : "" }
        this.props.setProgress(100);
    }


    render() {


        return (
            <>

                <h3 className='text-center mt-4 '> <a href="/" className='text-decoration-none text-white'>NewsScenario - {this.capitalizeFirstLetter(this.props.category)} World News  </a></h3>

                {this.state.loading&&<Spinner/>}

                <div className=" d-flex justify-content-center flex-wrap gap-5 container-fluid mt-5 mb-5 ">
                    {/* {console.log(this.parsedData.articles.url)} */}
                    {this.state.getData != null ? (!this.state.loading && this.state.getData.map((items) => {
                        // console.log(items)
                        return <div className="" key={items.url}>
                            < NewsItems title={`${(items.title).slice(0, 40)}..`} description={`${items.description == null ? "Well , there's no provided summary for this articles . Please Click on the Read More Button!" : (items.description).slice(0, 120)}...`} urlImage={items.urlToImage == null ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg" : items.urlToImage} urlRedirect={items.url} author={items.author != null ? `${(items.author).slice(0, 20)}` : "Anonymous"} />
                        </div>
                    })) :
                        <div className="container d-flex align-content-center justify-content-center">

                            <div className="container m-5 text-center bg-danger rounded-3 text-white w-75 ">
                                <p className='container p-4'>  {this.state.error}   </p>
                            </div>
                        </div>


                    }



                    <div className="container d-flex justify-content-between m-4 ">
                        <button type="button" disabled={this.state.page <= 1} class="btn btn-dark ms-5 ps-3" onClick={this.handlePagePrevious}> &larr; Prev</button>
                        <p id='totalRemain'>Total Articles Remaining: {this.state.totalResults}</p>
                        <button type="button" class="btn btn-dark ms-5 pe-3" onClick={this.handlePageNext} disabled={this.state.getData == null} > Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News
