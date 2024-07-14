
import homeBgVideo from '../../assets/eqnsBgVideo-1.mp4';
import aboutUsBgVideo from '../../assets/EqnsAboutUs.mp4';
import pricingVideo from '../../assets/pricingVideo.mp4';
import cardImage1 from '../../assets/SafetyFirst.jpg';
import cardImage2 from '../../assets/participationIsPower.jpg';
import cardImage3 from '../../assets/RadicalPower.jpg';
import cardImage4 from '../../assets/PrinciplesThinking.jpg';
import cardImg5 from '../../assets/learnMore.jpg';
import cardImg6 from '../../assets/qualityTrade.jpg';



export const getServiceDataMap = (): Map<string, any> => {
    const myMap = new Map<string, any>(Object.entries(
        {

            "Global Investing":
            {
                pictureClass: 'card__picture--1',
                headingSpanClass: 'card__heading-span--1',
                cardMainDes: "welcome to the Equity Nations Era of International Trading and investments at $1 ",
                cardDetails:[
                    "International Stocks, Mutual Funds, ETFs & Derivatives.",
                    "Portfolio Mangement System (PMS).",
                    "Hedge Funds."
                ]

            },
            "Insurances": {
                pictureClass: 'card__picture--2',
                headingSpanClass: 'card__heading-span--2',
                cardMainDes: "Offering international and domestic insurances",
                cardDetails: [
                    "Get more crypto for your cash—and start with as little as $1. Buy, sell, and transfer BTC, DOGE, ETH, SHIB, and more."
                ]
            }

        }
    ));

    return myMap;

}

export const getBgVideoConfig = (name: string) => {

    const BgVideoMap = new Map<string, any>(Object.entries(
        {
            "home": { bgVideo: homeBgVideo },
            "about": { bgVideo: aboutUsBgVideo },
            "pricing": { bgVideo: pricingVideo }

        }
    ));

    return BgVideoMap.get(name);

}


export const AboutUsCardContentList = () => {

    const ABOUT_US_CARD_CONTENT_LIST = [
        {
            id: '1',
            headerName: 'Safety First',
            description: 'EQNS is a safety-first company',
            bgColor: '#8C68AD',
            imagePath: cardImage1,
            containerContent: "The reliability of our platform takes precedence over all else, so that we can be there for our customers when they need us the most. We relentlessly protect our customers’ security and privacy, and we only share with our counterparties what they need to fulfill our customers’ financial needs, nothing more.We build safeguards and provide education so that our customers are in the best position to succeed.We have high quality timely customer support, and when things aren’t right, we fix them.We work closely with regulators and lawmakers to protect our customers and the broader financial system.We speak simply, plainly, and truthfully, even if it’s not what others want to hear.We hold ourselves and our colleagues to the highest ethical standards."

        },
        {
            id: '2',
            headerName: 'Power through participation ',
            description: 'EQNS: Where everyone gets an equal slice of the pie',
            bgColor: '#5B68B0',
            imagePath: cardImage2,
            containerContent: "We founded EQNS in the wake of the global financial inequality / wake of the expansion of global financial system because we identified a gap - the more you had, the better deal you got.We aim to give everyone access to the global financial system, regardless of their background or account balance. That's why we have no account minimums and a product that is made in India.We would rather serve many small customers over a few large ones.We reflect the world around us, and we elevate and embrace all voices so everyone feels at home at EQNS."
        },
        {
            id: '3',
            headerName: 'Putting customers first, always.',
            description: 'Customer satisfaction is our driving force',
            bgColor: '#c5bcce',
            imagePath: cardImage3,
            containerContent: "From the early days of EQNS, we have prioritized getting direct customer feedback on what we were building. We listen with empathy, ask questions, and critically evaluate our work by how valuable our customers find it.We never stop asking how we can make our product better, and we never settle for ‘good enough’. We listen to our colleagues, and we start from a place of believing they are capable and well-intentioned.We delight our customers and take pride in our work. Otherwise, why even be here?"
        },
        {
            id: '4',
            headerName: 'Foundational thinking at its core',
            description: 'we take bold decisions and challenge them ',
            bgColor: '#80b676',
            imagePath: cardImage4,
            containerContent: "We reduce complex problems to their constituent bits. We debate vigorously and change our minds when confronted with the right evidence. We bravely do what’s right, even when it hasn't been done before. We treat our company like a product and aim to get better, every single day."
        },
    ];

    return ABOUT_US_CARD_CONTENT_LIST;

}


export const AboutUsAddOnList = () => {

    const ABOUT_US_ADDON_LIST = [
        {
            id: '1',
            headerName: 'A More Human way to learn',
            description: 'We’re redefining what it means to learn about finance—and that means education resources that are built for today.',
            bgColor: '#5B68B0',
            imagePath: cardImg5,
            order: '1'
        },
        {
            id: '2',
            headerName: 'Quality execution on every trade',
            description: 'See the stats and standards behind how we seek a quality execution on each order.',
            bgColor: '#c5bcce',
            imagePath: cardImg6,
            order: '-1'
        }
    ];

    return ABOUT_US_ADDON_LIST;

}


export const checkOutLatestList = () => {

    const CHECK_OUT_LATEST_LIST = [
        {
            id: '1',
            headerName: 'Get a 3% boost on retirement transfers by 4/30',
            description: 'Get a 3% bonus on IRA transfers and 401(k) rollovers with Gold. That’s more money now that can be more money later.',
            bgColor: 'lightslategray',
            imagePath: cardImg5,
            buttonText: 'Start With Extra'
        },
        {
            id: '2',
            headerName: 'Bring your portfolio over for a bonus.',
            description: 'Earn a 1% bonus when you transfer your brokerage account, now through January 31, 2024. No cap.',
            bgColor: 'lightsteelblue',
            imagePath: cardImg6,
            buttonText: 'Claim Your Bonus'
        },
        {
            id: '3',
            headerName: 'Make money on your money with Gold',
            description: 'Earn our highest rate ever on uninvested cash, FDIC-insured up to $2.25M at partner banks. First 30 days are free, then a subscription fee applies.',
            bgColor: 'darkseagreen',
            imagePath: cardImage3,
            buttonText: 'Start Earning'
        },
        {
            id: '4',
            headerName: 'Trade your favorite stocks anytime',
            description: 'The 24 Hour Market is here. Trade TSLA, AMZN, AAPL, and more of your favorite stocks and ETFs 24 hours a day, 5 days a week.',
            bgColor: 'lightcoral',
            imagePath: cardImage4,
            buttonText: 'Sign Up Now'
        },
        {
            id: '5',
            headerName: 'Earn income on stocks you own',
            description: 'Get the opportunity to earn income on stocks you already own—just by turning on Stock Lending.',
            bgColor: 'lightsalmon',
            imagePath: cardImage2,
            buttonText: 'Learn More'
        },
        {
            id: '6',
            headerName: 'Bring your portfolio over for a bonus.',
            description: 'Earn a 1% bonus when you transfer your brokerage account, now through January 31, 2024. No cap.',
            bgColor: 'lightseagreen',
            imagePath: cardImage1,
            buttonText: 'Start With Extra'
        },
        {
            id: '7',
            headerName: 'Trade your favorite stocks anytime',
            description: 'The 24 Hour Market is here. Trade TSLA, AMZN, AAPL, and more of your favorite stocks and ETFs 24 hours a day, 5 days a week.',
            bgColor: 'lightcoral',
            imagePath: cardImage4,
            buttonText: 'Sign Up Now'
        }
    ];

    return CHECK_OUT_LATEST_LIST;

}

export const faqDataList = () => {

    const FAQ_DATA_LIST = [
        {
            id: '1',
            title: 'Who is eligible to open a Global equity account with EQNS? Following categories of clients are allowed',
            description: 'a) Individual resident in India (as per Liberalized Remittance Scheme of Reserve Bank of India).\nb) GIFT IFSC Entities.\nc) Foreign Residents / Non-resident Indians / Foreign corporates.\nd) AIF/PMS/AMC.'
        },
        {
            id: '2',
            title: 'What is the Process to invest/trade in Global Stocks through EQNS',
            description: 'Step 1: Register account digitally on EQNS.\nStep 2: Fund account.\nStep 3: Start trading from EQNS and INX integrated account'
        },
        {
            id: '3',
            title: 'Which international exchanges can I invest in?',
            description: 'EQNS offers direct access over 135 exchanges across 33 countries in 23 currencies worldwide covering global exchanges in America, Europe, Asia Pacific, and Africa. Some of the exchanges to offered are NYSE, NASDAQ, LSE, Canadian Securities Exchange, Toronto Stock Exchange, BATs Europe, Euronext France and Tokyo Stock Exchange.'
        },
        {
            id: '4',
            title: 'How much can an individual invest in global stocks from India?',
            description: 'Foreign investments fall under RBI guidelines for remittance which is called Liberalized Remittance Scheme (LRS). As per current LRS limits, an individual can remit funds up to USD 250,000 every Financial year. This full amount can be utilized for investment in global markets.'
        },
        {
            id: '5',
            title: 'Is there any minimum investment or balance required?',
            description: 'There is no minimum investment or balance required.'
        },
        {
            id: '6',
            title: 'Do investors need to open a separate Bank account?',
            description: 'Investors can use their existing bank account to remit or receive funds.'
        },
        {
            id: '7',
            title: 'Is there any account opening fee, custody fee /demat charges or any other annual charges?',
            description: 'No.'
        },
        {
            id: '8',
            title: 'How to transfer funds?',
            description: 'EQNS provides a complete digital experience to transfer funds through banks under Liberalized Remittance Scheme (LRS) guidelines. Transfer funds online through existing bank account in India to EQNS account.'
        },
        {
            id: '9',
            title: 'What are the Benefits for clients with EQNS?',
            description: 'Global Presence - Direct access of more than 135 exchanges across globe, clients can trade in 23 different currencies through single integrated terminal.'
                + '\nPortfolio Diversification - Diversify your investments Globally by investing in'
                + '\n✓ Stocks & ETF'
                + '\n✓ Derivatives'
                + '\n✓ Bonds,'
                + '\n✓Mutual funds(more than 40000)'
                + '\n✓ Portfolios Management Services(PMS)'
                + '\n✓ Zero account opening fee, zero annual charges, zero software & mobile application fee, zero fund deposit and one withdrawal per month free.'
                + '\n✓ Lower remittance fee with EQNS and INX Global Access banking partners'
                + '\n✓ Fundamental data of 30000 companies across globe'
                + '\n✓ Tools for technical analysis for all'
                + '\n✓ More than 80 diversified portfolios of renowned international portfolio managers'
                + '\n✓ Analysts call and performance'
                + '\n✓ Live access of Bloomberg TV'
                + '\nExtra Incentive – Earn extra income by lending stocks'
                + '\n  • Liquidity – Investor get access to the liquidity of underlying market'
                + '\n  • Fractional Shares - Fraction of shares let you invest regardless of share price'
        },
        {
            id: '10',
            title: 'When will the funds I deposited be credited to my account?',
            description: 'For wire transactions, it takes 1-2 business days depending on the bank.'
        },
        {
            id: '11',
            title: 'What is the cost to transfer the funds?',
            description: 'EQNS charge $1 fee on deposit of money and $1 on withdrawal.'
                + 'However, Banks charge fee(Fixed charge and margin rates) on remittance of the funds.'
                + 'These charges differ from bank to bank.Kindly check rates with bank.We have preferential rates from top banks for our clients.'

        }


    ]

    return FAQ_DATA_LIST;
}
