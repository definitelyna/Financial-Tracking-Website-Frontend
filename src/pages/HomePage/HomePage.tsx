import { FC } from "react";
import style from "./HomePage.module.css";
import StarBackground from "./components/Background";
import { useState, useEffect } from "react";

interface InputProp {
  categories: string[];
}

const Input: FC<InputProp> = ({ categories }) => {
  const financeQuotes = [
    "- Money is a terrible master but an excellent servant -",
    "- Making money is art and working is art and good business is the best art. -",
    "- A wise person should have money in their head, but not in their heart. -",
    "- F it we ball -"
  ]
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ((prevCount < financeQuotes.length - 1) ? prevCount + 1 : prevCount = 0));
    }, 5000); // 1 second interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  return (
    <div className={style.inputContainer}>
      <form action="">
        <div className={style.inputTitle}>
          <h1>{financeQuotes[count]}</h1>
        </div>

        <div className={style.inputInputArea}>
          <div className={style.inputInputContainer}>
            <label htmlFor="amount">Amount</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <span style={{ position: "absolute", marginRight: "10px" }}>
                VND
              </span>
              <input type="text" name="amount" />
            </div>
          </div>

          <div className={style.inputInputContainer}>
            <label htmlFor="categories">Category</label>
            <select name="categories" id="">
              {categories.map((category) => (
                <option value={category.toLowerCase()}>{category}</option>
              ))}
            </select>
          </div>
          <button type="submit">Log</button>
        </div>
      </form>
    </div>
  );
};

const HomePage = () => {
  const categories: string[] = [
    "Meal",
    "Transportation",
    "Drinks",
    "Hangouts",
    "Dates",
    "Subscription",
    "Cosmetic",
  ];

  return (
    <main>
      <StarBackground />
      <Input categories={categories} />
    </main>
  );
};

export default HomePage;
