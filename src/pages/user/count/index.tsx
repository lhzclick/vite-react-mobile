import { Button, Space } from "antd-mobile";
import {
  decrement,
  increment,
  incrementDelay,
} from "@/store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

function count() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const btnClick = (type: String): void => {
    switch (type) {
      case "add":
        dispatch(increment());
        break;
      case "reduce":
        dispatch(decrement());
        break;
      case "delayed":
        dispatch(incrementDelay(2));
        break;
      default:
        dispatch(increment());
        break;
    }
  };

  return (
    <div>
      <div>{count}</div>
      <Space>
        <Button
          onClick={() => {
            btnClick("add");
          }}
          block
          color="primary"
        >
          ADD
        </Button>
        <Button
          onClick={() => {
            btnClick("reduce");
          }}
          block
          color="primary"
        >
          REDUCE
        </Button>
        <Button
          onClick={() => {
            btnClick("delayed");
          }}
          block
          color="primary"
        >
          DELAYED
        </Button>
      </Space>
    </div>
  );
}
export default count;
