import React from "react";
import Joke from "./Joke";
import Datas from "./Datas";
import HousingData from "./components/HousingData";
import HousingStruct from "./components/HousingStruct";

function Main() {
  const jokesComp = Datas.map((Indjoke) => {
    return (
      <Joke
        key={Indjoke.id}
        question={Indjoke.question}
        answer={Indjoke.answer}
      />
    );
  });

  const product = HousingData.map((item) => {
    return <HousingStruct key={item.id} product={item} />;
  });

  return (
    <div>
      {jokesComp}
      {product}
    </div>
  );
}

export default Main;

//.map goes through every value in the array/input given and returns
//the specified format or command given
//map also returns a new array and that why we're saving it under const jokesComp

//Indjoke = individual joke
//key={Indjoke.id}  = passing in the data from Datas and saving it under key
//the id should always be unique
//question={Indjoke.question} = passing in the question from Datas and saving it under question
//this is the same for answer
