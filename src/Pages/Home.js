import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Cards from '../Components/Cards'
import '../CSS/Home.css';

export class Home extends Component {

    articles = [
        // {
        //     "source": {
        //         "id": "wired",
        //         "name": "Wired"
        //     },
        //     "author": "Gian M. Volpicelli",
        //     "title": "The Rise and Fall of a Bitcoin Mining Sensation",
        //     "description": "Compass Mining grew quickly during crypto’s halcyon days. Now, its customers and their thousands of mining machines are stuck.",
        //     "url": "https://www.wired.com/story/compass-mining-bitcoin-russia/",
        //     "urlToImage": "https://media.wired.com/photos/62e9c5e1d7368105da057de3/191:100/w_1280,c_limit/BitRiver-Mining-Center-Rise-And-Fall-Of-Bitcoin-Mining-Business-1184520941.jpg",
        //     "publishedAt": "2022-08-03T11:00:00Z",
        //     "content": "It was 8:45 in the morning of June 13 when Bill Stewart, the CEO of Maine-based bitcoin mining business Dynamics Mining, received a call from one of his employees. He's like, Every machine inside of … [+3472 chars]"
        // },

        // {
        //     "source": {
        //         "id": null,
        //         "name": "VentureBeat"
        //     },
        //     "author": "Dean Takahashi",
        //     "title": "Jules Miller: How 150 VCs created the VC3 DAO for decentralized investing",
        //     "description": "The VC3 DAO is an interesting move to get VCs to collaborate on decentralized investing and show support for the Web3 movement.",
        //     "url": "https://venturebeat.com/2022/08/01/jules-miller-how-150-vcs-created-the-vc3-dao-for-decentralized-investing/",
        //     "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/08/vc3-investors.jpg?w=1200&strip=all",
        //     "publishedAt": "2022-08-01T14:30:00Z",
        //     "content": "Venture capitalists often seek tech startups that promise disruption, but its not every day that you see VCs try to disrupt their own way of doing things.\r\nThats why the VC3 DAO is an interesting mov… [+1061 chars]"
        // },

        // {
        //     "source": {
        //         "id": null,
        //         "name": "Presse-citron"
        //     },
        //     "author": "Hadrien Augusto",
        //     "title": "Bitcoin : MicroStrategy change de stratégie",
        //     "description": "Michael Saylor, son célèbre CEO, laisse sa place pour se concentrer sur… l’investissement en bitcoins.",
        //     "url": "https://www.presse-citron.net/bitcoin-microstrategy-change-de-strategie/",
        //     "urlToImage": "https://www.presse-citron.net/app/uploads/2022/08/MicroStrategy-Bitcoin.jpg",
        //     "publishedAt": "2022-08-03T13:00:12Z",
        //     "content": "Lhiver des cryptomonnaies a fait plonger Bitcoin très bas, mais pas trop bas. Avec un support au-dessus des 20 000 dollars, la première cryptomonnaie a redonné confiance aux investisseurs. MicroStrat… [+2700 chars]"
        // },

        // {
        //     "source": {
        //         "id": null,
        //         "name": "VentureBeat"
        //     },
        //     "author": "Slava Gomzin",
        //     "title": "How crypto tokens became as unsafe as payment cards once used to be",
        //     "description": "Crypto tokens are as unsafe as payment cards. Crypto tech and the blockchain industry must catch up with standards and technologies.",
        //     "url": "https://venturebeat.com/2022/08/04/how-crypto-tokens-became-as-unsafe-as-payment-cards-once-used-to-be/",
        //     "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/03/GettyImages-1320502852.jpg?w=1200&strip=all",
        //     "publishedAt": "2022-08-04T20:07:00Z",
        //     "content": "Were you unable to attend Transform 2022? Check out all of the summit sessions in our on-demand library now! Watch here. \r\nLast month, hackers stole roughly $100 million in cryptocurrency from Harmon… [+3579 chars]"
        // },

        // {
        //     "source": {
        //         "id": null,
        //         "name": "Entrepreneur"
        //     },
        //     "author": "Kenny Au",
        //     "title": "Is it Profitable to Invest in Web3 Startups Right Now? That Depends on Whether Your Investment Meets These 5 Expert-Backed Requirements",
        //     "description": "The prerequisite for a profitable Web3 startup is not just a good business idea. Know what to look for and where to investigate for lucrative Web3 investment opportunities.",
        //     "url": "https://www.entrepreneur.com/article/431123",
        //     "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1659728270-GettyImages-1389049104.jpg",
        //     "publishedAt": "2022-08-08T12:00:00Z",
        //     "content": "As the markets face turbulence, investor perception over Web3 investments tends to be lukewarm, with most becoming skeptical about their ability to weather the crisis. In the case of Bitcoin, for exa… [+8195 chars]"
        // },

        // {
        //     "source": {
        //         "id": null,
        //         "name": "Calpaterson.com"
        //     },
        //     "author": "Cal Paterson",
        //     "title": "There aren't that many uses for blockchains",
        //     "description": "A criteria for judging when a blockchain is applicable",
        //     "url": "https://calpaterson.com/blockchain.html",
        //     "urlToImage": "https://calpaterson.com/images/photo/blocks.jpeg",
        //     "publishedAt": "2022-08-11T05:59:34Z",
        //     "content": "August 2022\r\nA criteria for judging when a\r\n blockchain is applicable\r\nA common saying among those who are into their crypto is that \"the real\r\n innovation isn't Bitcoin, but the Blockchain\". Blockch… [+11542 chars]"
        // }
    ]

    constructor() {
        super();
        console.log("I am Constructor")

        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }

    }


    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bdebb2811b9f4fc3b3df1735dc9f7cbd&page=1&pageSize=6";
        // let url = "";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }


    handleNextClick = async () => {
        console.log("Next")

        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bdebb2811b9f4fc3b3df1735dc9f7cbd&page=${this.state.page + 1}&pageSize=6`;
        // let url = "";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })

       
    }

    handlePreClick = async () => {
        console.log("Pre")

        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bdebb2811b9f4fc3b3df1735dc9f7cbd&page=${this.state.page - 1}&pageSize=6`;
        // let url = "";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
       
    }




    // static propTypes = {

    // }

    render() {
        return (
            <div>

                <div className="fullBody">

                    <div className="fcontainer row">
                        {this.state.articles.map((element) => {
                            return <div className="newItem col-md-4 col-sm-6  my-2" key={element.url}>

                                <Cards
                                    title={element.title}
                                    description={element.description}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        })}


                        <div className="container d-flex justify-content-between">

                            <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreClick} > &larr; Previous </button>
                            <h1>{this.state.page}</h1>
                            <button disabled={this.state.page >= 8} type='button' className='btn btn-dark' onClick={this.handleNextClick} > Next &rarr;</button>

                        </div>

                        {/* <div className="row1 my-3 ">

                            <div className="newItem col-md-4 col-sm-6  my-2">

                                <Cards
                                    title="sufian"
                                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta exercitationem alias culpa velit, rem voluptatibus! Hic neque eligendi quas architecto fugiat, magni deserunt, dolorum reiciendis, ad exercitationem et cumque doloremque."
                                    imgUrl="https://media.wired.com/photos/62e9c5e1d7368105da057de3/191:100/w_1280,c_limit/BitRiver-Mining-Center-Rise-And-Fall-Of-Bitcoin-Mining-Business-1184520941.jpg"
                                    newUrl="todo"
                                />
                            </div>



                        </div> */}



                    </div>

                </div>

            </div>
        )
    }
}

export default Home
