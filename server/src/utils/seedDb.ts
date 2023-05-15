import pgClient from '../appConfig/dbConnect'
import { genDateRange } from './dateRange'

const couponData = [
    {
        deal: '15% Cashback',
        company: 'Playstation',
        icon: 'playstation',
    },
    {
        deal: '5% Off',
        company: 'Dropbox',
        icon: 'dropbox',
    },
    {
        deal: '15% Off',
        company: 'Steam',
        icon: 'steam',
    },
    {
        deal: '4% Off',
        company: 'Google',
        icon: 'google-wallet',
    },
    {
        deal: '30% Cashback',
        company: 'Apple Wallet',
        icon: 'apple-pay',
    },
    {
        deal: '10% Off',
        company: 'Battle.net',
        icon: 'battle-net',
    },
    {
        deal: '5% Cashback',
        company: 'Itunes',
        icon: 'itunes',
    },
    {
        deal: '15% Off',
        company: 'Ebay  ',
        icon: 'ebay',
    },
    {
        deal: '25% Off',
        company: 'Amazon Pay',
        icon: 'amazon-pay',
    },
    {
        deal: '45% Off',
        company: 'Audible',
        icon: 'audible',
    },
]

const seedCoupons = async () => {
    couponData.forEach(async ({ company, deal, icon }) => {
        const {
            unixRandomStart: validThroughStart,
            unixRandomEnd: validThroughEnd,
        } = genDateRange('2023.05.01', '2023.07.31')
        console.log(`inserting coupon "Company: ${company}, Deal: ${deal}"`)
        await pgClient.query(
            `INSERT INTO coupon
            (deal, company, validthroughstart, validthroughend, icon)
            values($1, $2, $3, $4, $5)
                `,
            [deal, company, validThroughStart, validThroughEnd, icon]
        )
    })
}

seedCoupons().then((res) => {
    console.log(`Inserted ${couponData.length} tables.`)
})
