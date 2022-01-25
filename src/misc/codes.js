const stateCode = `function Example() {
    const [count, setCount] = useState(0);
    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </>
    );
}`;
const effectCode = `function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
          setCount((prev) => prev + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count]);
    
    return (
      <>
        <p>{count}</p>
      </>
    );
}`;

export { effectCode, stateCode };
