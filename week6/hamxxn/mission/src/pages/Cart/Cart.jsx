import { useNavigate, useSearchParams } from "react-router-dom";
import StatusBar from "../../components/StatusBar/StatusBar";
import OrderBar from "../../components/OrderBarColumn/OrderBar";
import {
  OrderPayWrapper,
  OrderItemWrapper,
  OrderStore,
  MoreOrderBtn,
} from "./Cart.styles";
import Warning from "../../assets/warning.svg";
import OrderMenuItem from "../../components/OrderMenuItem/OrderMenuItem";
import Plus from "../../assets/plus.svg";
import useCartStore from "../Store/cartStore";

const OrderDiv = () => {
  const menus = useCartStore((state) => state.menus);
  const price = menus.reduce((total, menu) => total + Number(menu.price), 0);
  const store = useCartStore((state) => state.store);

  const navigate = useNavigate();
  const handleMoreBtn = () => {
    navigate("/store/" + store.id);
  };
  return (
    <>
      <OrderItemWrapper>
        <OrderStore>
          <div className="store-name">샐러리 한남점</div>
          {price < store.minDeliveryPrice ? (
            <div className="price-warning">
              <p>최소금액 미달 </p>
              <img src={Warning} alt="warning icon" />
            </div>
          ) : null}
        </OrderStore>

        {menus.map((menu, idx) => (
          <OrderMenuItem key={idx} menu={menu} />
        ))}

        <MoreOrderBtn>
          <p onClick={handleMoreBtn}>더 담기</p>
          <img src={Plus} alt="plus icon" />
        </MoreOrderBtn>
      </OrderItemWrapper>
      <OrderPayWrapper>
        <div className="price">
          <p>주문 금액</p>
          <p>{price}원</p>
        </div>
        <div className="price">
          <p>배달요금</p>
          <p>{store.deliveryFee}원</p>
        </div>
        <div className="price total-price">
          <p>총 결제금액</p>
          <p>{price + store.deliveryFee}원</p>
        </div>
      </OrderPayWrapper>
    </>
  );
};
const Cart = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const isBest = searchParams.get("isBest") === "true";
  const ingredients = searchParams.get("ingredients")?.split(",");
  const menu = {
    name,
    price,
    isBest,
    ingredients,
  };

  return (
    <>
      <StatusBar back={true} cancel={true} />
      <OrderDiv menu={menu} />
      <OrderBar />
    </>
  );
};

export default Cart;
