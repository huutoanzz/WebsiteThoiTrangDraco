import React, { memo, useMemo } from "react";
import { getImageByCloudinary } from "../../helpers/getImageByCloudinary";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";

const ProductFlashSaleCard = (props) => {
  const { product, status, key } = props;
  const salePrice =
    product?.registerFlashSaleProduct !== null
      ? product?.registerFlashSaleProduct?.flashSalePrice
      : product.salePrice !== null
      ? product.salePrice
      : 0;
  const isStock = product?.quantity - product?.sold > 0;
  const salePercent = useMemo(() => {
    if (salePrice === 0) return 0;
    return Math.round(
      ((product.productPrice - salePrice) / product.productPrice) * 100
    );
  }, [salePrice, product.productPrice]);
  const navigate = useNavigate();
  return (
    <div
      className="w-[340px] flex flex-col gap-2 rounded-md hover:shadow-lg cursor-pointer"
      onClick={() => navigate(`/detail-product/${product.productParentId}`)}
      key={key}
    >
      <div className="relative">
        <Image
          src={getImageByCloudinary(product.thumbnail, 350, 350)}
          className=""
        />
        {salePercent !== 0 && status === "active" && (
          <div className="absolute top-0 left-0 flex gap-2">
            {salePercent !== 0 && (
              <span className="rounded bg-green-400 text-white px-2 py-1 text-xs font-nikeBody">
                -{salePercent}%
              </span>
            )}
          </div>
        )}

        {/* {newRelease && (
          <span className="rounded absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 text-xs font-nikeBody">
            New
          </span>
        )}
        {salePercent !== 0 && (
          <span className="rounded absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 text-xs font-nikeBody">
            -{salePercent}%
          </span>
        )} */}
      </div>
      <div className="flex flex-col px-4 py-2 gap-1">
        <span className="font-nikeBody text-lg font-semibold text-neutral-700 line-clamp-1 text-ellipsis">
          {product.productParentName}
        </span>
        <span className="font-nikeBody text-sm text-neutral-500">
          {product.categoryWithObjectName}
        </span>
        {status === "active" && isStock && (
          <div className={`flex gap-2 items-center `}>
            {salePrice === 0 && (
              <span className="font-nikeBody text-body1 font-semibold text-base text-neutral-700">
                {product.productPrice.toLocaleString("vi-VN") + " VNĐ"}
              </span>
            )}

            {salePrice !== 0 && (
              <>
                <span className="font-nikeBody text-body1 font-semibold text-base text-neutral-700">
                  {salePrice.toLocaleString("vi-VN") + " VNĐ"}
                </span>
                <span className="font-nikeBody text-sm text-body1 font-semibold text-neutral-500 line-through">
                  {product.productPrice.toLocaleString("vi-VN") + " VNĐ"}
                </span>
              </>
            )}
          </div>
        )}
        {status === "active" && !isStock && (
          <div className="text-red-500 font-semibold">Out Of Stock</div>
        )}
        {status === "ended" && (
          <div className="text-red-500 font-semibold">Ended</div>
        )}
        {status === "waiting" && (
          <div className="text-green-500 font-semibold">Coming soon</div>
        )}
      </div>
    </div>
  );
};

export default memo(ProductFlashSaleCard);
