import React from "react";
import Barcode from "react-barcode";

const BarcodeGenerator = () => {
  const barcodeValue = "1 23456 78";
  return (
    <div className="barcode">
      <Barcode
        value={barcodeValue}
        width={1.5}
        height={100}
        displayValue={true}
        background="transparent"
        lineColor="white"
      />
    </div>
  );
};

export default BarcodeGenerator;
