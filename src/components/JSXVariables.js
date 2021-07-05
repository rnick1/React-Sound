import React from "react";

const name = "Nick";
const reactThoughts = "is the best!";
const vowels = ["a", "e", "i", "o", "u", "y"];

function withoutVowels (str) {
 for (var vowel of vowels
}

// Better to use regex
function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {reactThoughts}</h2>
          <h2>My name without vowels looks like this: {withoutVowels(name)}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
