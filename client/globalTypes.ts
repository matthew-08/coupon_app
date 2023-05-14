import { FalseLiteral } from 'typescript'

type FALibraries = 'fa-brands' | 'fa'

interface CouponInfo {
    deal: string
    id: number
    company: string
    validThroughStart: string
    validThroughEnd: string
    icon: [FALibraries, string]
}

export { CouponInfo }
