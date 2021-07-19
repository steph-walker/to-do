import React from "react";
import TodoItem from "./TodoItem";
import Contacts from "./Contacts";

function MainPage() {
  return (
    <main >
        <div className="to-do-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      </div>

      <div className="cats">
        <Contacts
          name="Mr. Whiskerson"
          imgUrl="http://placekitten.com/300/200"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />

        <Contacts
          name="Fluffykins" 
          imgUrl="http://placekitten.com/400/200"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />

        <Contacts
          name="Destroyer"
          imgUrl="http://placekitten.com/400/300"
          phone="(212) 555-3456"
          email="ofworlds@yahoo.com"
        />
        <Contacts
          name="Felix"
          imgUrl="http://placekitten.com/200/100"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
      </div>
    </main>
  );
}

export default MainPage;
