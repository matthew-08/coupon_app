import { CouponInfo } from '~/globalTypes';
import { convertDate } from './convertDate';

const formatCoupons = (coupons: CouponInfo[]) => {
  return coupons.map((coupons) => {
    coupons.validThroughStart = '5/01';
    coupons.validThroughEnd = convertDate(coupons.validThroughEnd);
    return coupons;
  });
};

export { formatCoupons };
