import { useEffect, useState, useContext } from "react";
import { CartContent } from "../Context";
import SingleProduct from "./SingleProduct";

import GooglePayButton from "@google-pay/button-react";


const Cart = () => {
  // const { cart } = CartState();
  const [total, setTotal] = useState();

  const {cart} = useContext(CartContent);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total:₹ {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
          />
        ))}
      </div>
      <GooglePayButton 
      
      environment="TEST"
      paymentRequest={{
        apiVersion:2,
        apiVersionMinor:0,
        allowedPaymentMethods:[
          {
            type:'CARD',
            parameters:{
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          }
        ],
        merchantInfo: {
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '100.00',
          currencyCode: 'INR',
          countryCode: 'IN',
        },
      }}
      onLoadPaymentData={paymentRequest => {
        console.log('load payment data', paymentRequest);
      }}
      />
    </div>
  );
};

export default Cart;
