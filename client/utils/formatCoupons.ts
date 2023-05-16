import { CouponInfo, RedemptionInfo } from '~/globalTypes';
import { convertDate } from './convertDate';
function formatCoupons(
  coupon: CouponInfo,
  redemptionInfo: RedemptionInfo
): CouponInfo;
function formatCoupons(coupons: CouponInfo[]): CouponInfo[];
function formatCoupons(
  coupons: CouponInfo[] | CouponInfo,
  redemptionInfo?: RedemptionInfo
): CouponInfo[] | CouponInfo {
  if (!Array.isArray(coupons)) {
    return {
      ...coupons,
      redeemed: true,
      redeemedAt: redemptionInfo?.redeemedAt,
      code: redemptionInfo?.code,
    };
  }
  return coupons.map((coupons) => {
    coupons.validThroughStart = '5/01';
    coupons.validThroughEnd = convertDate(coupons.validThroughEnd);
    coupons.redeemedAt = coupons.redeemedAt
      ? convertDate(coupons.redeemedAt)
      : null;
    return coupons;
  });
}

export { formatCoupons };
