const SomeChild = (props: { showCount: () => void }) => {
  return (
    <div>
      <button onClick={props.showCount}>表示</button>
    </div>
  );
};

export default SomeChild;
