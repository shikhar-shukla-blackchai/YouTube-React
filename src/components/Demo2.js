import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);

  const ref = useRef(0);

  let x = 0;

  console.log("Rendering...");

  const i = useRef(null);

  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Namasta react", Math.random());
    }, 200);

    return () => {
      return clearInterval(i.current);
    };
  }, []);

  return (
    <div className="border border-black w-96 h-62 ml-20 mt-44 m-4 p-4 font-bold text-xl">
      <div>
        <button
          className="bg-green-100 text-green-500 p-2 mx-4"
          onClick={() => {
            x = ++x;
            console.log("let-x = ", x);
          }}
        >
          increase x
        </button>
        <span className="ml-16 ">x= {x}</span>
      </div>
      <div className="mt-4">
        <button
          className="bg-green-100 text-green-500 p-2 mx-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          increase y
        </button>
        <span className="ml-16 ">y= {y}</span>
        <div className="mt-4">
          <button
            className="bg-green-100 text-green-500 p-2 mx-4"
            onClick={() => {
              ref.current = ref.current + 1;
              console.log("ref = ", ref.current);
            }}
          >
            increase Ref
          </button>
          <span className="ml-10">Ref ={ref.current}</span>
        </div>
        <button
          className=" text-red-500 rounded-full bg-black p-2 mx-4 mt-3"
          onClick={() => {
            i.current = clearInterval(i.current);
          }}
        >
          Stop Printing spa
        </button>
      </div>
    </div>
  );
};

export default Demo2;
