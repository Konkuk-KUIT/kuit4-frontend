import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import Button from "../Button";
import styles from "./OrderBar.module.css";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  // const store = useCartStore((state) => state.store);

  const navigate = useNavigate();

  const handleOrder = (category) => {
    navigate("/cart");
  };

  // 제대로 들어갔나 확인
  // console.log(store);
  // menus.map((menu) => {
  //   console.log(menu.name);
  // });

  return (
    <div className={styles.orderBarContainer}>
      <div className={styles.orderBarText}>
        <div className={styles.orderTotalPriceText}>총 주문금액</div>
        <div className={styles.orderTotalPrice}>
          {/* toLocalString으로 사용하여 1000단위 쉼표 넣기 */}
          {menus
            .reduce((acc, currentMenu) => acc + currentMenu.price, 0)
            .toLocaleString()}
          원
        </div>
      </div>
      <div className={styles.orderBarButton}>
        <Button onClick={handleOrder} type="button" size="lg">
          {/* optional chaning : ?를 붙여줘서 prop가 존재하지 않을 때는 undefined로 비워둠 */}
          {/* {store?.name && `${store.name}에서 `} */}
          주문하기
        </Button>
      </div>
    </div>
  );
};

export default OrderBar;
