/* eslint-disable @typescript-eslint/no-unused-vars */

interface SharedProduct {
  ItemCode: string;
  ItemType: string;
  ItemName: string;
  ManufacturerName: string;
  ManufactureCountry: string;
  ManufacturerItemDescription: string;
  UnitQty: string;
  Quantity: string;
  UnitOfMeasure: string;
  BIsWeighted: string;
  QtyInPackage: string;
  ImageAvailable: boolean;
}

interface StoreProduct {
  ItemCode: string;
  ChainId: string;
  BranchId: string;
  ItemPrice: string;
  UnitOfMeasurePrice: string;
  AllowDiscount: string;
  ItemStatus: string;
  PromoData: Promo;
}

interface Promo {
  ItemCode: string;
  PromotionId: string;
  PromotionDescription: string;
  PromotionStartDate: string;
  PromotionStartHour: string;
  PromotionEndDate: string;
  PromotionEndHour: string;
  AllowMultipleDiscounts: string;
  MinQty: string;
  MaxQty: string;
  DiscountRate: string;
  DiscountedPrice: string;
  DiscountedPricePerMida: string;
  MinNoOfItemOfered: string;
  MinPurchaseAmount: string;
}

interface Store {
  BranchId: string;
  ChainId: string;
  ChainName: string;
  BranchName: string;
  City: string;
  ZipCode: string;
  Address: string;
  Location: {
    type: {
      type: string;
      enum: ["Point"];
      required: true;
    };
    coordinates: {
      type: [number, number]; //[lng, lat];
      required: true;
    };
  };
}
