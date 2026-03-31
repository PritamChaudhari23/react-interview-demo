import { useMemo } from "react";
const UseMemoExample = ({ a, b }) => {
  const result = useMemo(() => {
    console.log('Calculating...');
    return a * b;
  }, [a, b]);
  
  return <div>Result: {result}</div>;
}


export default UseMemoExample;