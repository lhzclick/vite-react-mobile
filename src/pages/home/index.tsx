import styles from "./index.module.scss";
import { Button } from "antd-mobile";
import {
  changeUserInfo,
  changeUserInfoDelay
} from "@/store/slices/userInfoSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

function home() {
  const userInfo = useAppSelector((state) => state.userInfo);
  const { info } = userInfo
  const dispatch = useAppDispatch();
  
  return (
    <div className={styles.home}>
      <div>userName:{info.userName}</div>
      <div>tel:{info.tel}</div>
      <div>{`tel:${info.idNo}`}</div>
      <Button onClick={()=>{dispatch(changeUserInfo({
        info:{
          userName:'Tony',
          tel:'131****0917',
          idNo:61221211299216,
        },
        error:'aaaaa'
      }))}}>CHANGE</Button>  
      <Button onClick={()=>{dispatch(changeUserInfoDelay())}}>CHANGE DELAY</Button>  
    </div>
  );
}


export default home; 
