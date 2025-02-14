import { useContext } from "react";
import { NaobeContext } from "../main";

const UseContext = () => {
  const naobeInfo = useContext(NaobeContext);

  return (
    <div className="mt-50">
      <h1>useContext</h1>
      <small>
        <ul>
          <li>{naobeInfo.name}</li>
          <li>プロパティのバケツリレーを回避</li>
          <li>コンポーネントツリー全体にデータを渡すための仕組み</li>
          <li>
            アプリケーション全体で共有するデータ（ユーザー情報、テーマ設定など）を管理
          </li>
        </ul>
      </small>
      <hr />
    </div>
  );
};

export default UseContext;
