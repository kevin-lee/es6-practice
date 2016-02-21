"use strict";

console.log(new Date());

var printTitle = title => console.log(`
${"=".repeat(title.length)}
${title}
${"-".repeat(title.length)}
`);

(function() {
  printTitle("var with Hoisting");

  var snack = '새우깡';

  function getFood(food) {

    if (food) {
      var snack = '양파링';
      return snack;
    }
    return snack;
  }

  console.log("getFood(false): ", getFood(false)); // undefined
  console.log(" getFood(true): ", getFood(true));  // 양파링

})();

(function() {
  printTitle("let without Hoisting using let");

  let snack = '새우깡';

  function getFood(food) {

    if (food) {
      let snack = '양파링';
      return snack;
    }
    return snack;
  }

  console.log("getFood(false): ", getFood(false)); // 새우깡
  console.log(" getFood(true): ", getFood(true));  // 양파링

})();

(function() {
  printTitle("var / let vs const")

  var a = 1;
  console.log(`var a = 1;`);
  console.log(`a: ${a}`);

  a = 10;
  console.log(`a = 10;`);
  console.log(`a: ${a}`);

  a = 100;
  console.log(`a = 100;`);
  console.log(`a: ${a}`);

  console.log("------------------------------");

  let b = 1;
  console.log("let b = 1;");
  console.log(`b: ${b}`);

  b = 10;
  console.log("b = 10;");
  console.log(`b: ${b}`);

  b = 100;
  console.log("b = 100;");
  console.log(`b: ${b}`);

  console.log("------------------------------");

  const c = 1;

  console.log(`const c = 1;`);
  console.log(`c: ${c}`);
  // c = 10;
  console.log("\n// TypeError: invalid assignment to const `c'");
  console.log(`c = 10;`);
})();


(function() {
  printTitle("Testing Block var vs let");
  console.log(`  {
    var insideBlockUsingVar = 10;
  }
  console.log("insideBlockUsingVar: ", insideBlockUsingVar);
`);

  // 실제 코드
  {
    var insideBlockUsingVar = 10;
  }
  console.log("insideBlockUsingVar:", insideBlockUsingVar);
})();

{
  console.log(`
  {
    let insideBlockUsingLet = 10;
    console.log("insideBlockUsingLet:", insideBlockUsingLet);
  }`);
  // 실제 코드
  {
    let insideBlockUsingLet = 10;
    console.log("insideBlockUsingLet:", insideBlockUsingLet);
  }

console.log(`
  // Error: ReferenceError: insideBlockUsingLet is not defined
  console.log("insideBlockUsingLet: ", insideBlockUsingLet);
`)
  // 실제 코드 uncomment 하면 해당 에러를 보실 수 있습니다. 
  // Error: ReferenceError: insideBlockUsingLet is not defined
  // console.log("insideBlockUsingLet: ", insideBlockUsingLet);
}

(function () {
  printTitle("ES5: [].map(function() {})");
  console.log(`  var mappedWithOldFunction = [1, 2, 3, 4, 5].map(function (elem) {
    return elem * 2;
  });
`);
  var mappedWithOldFunction = [1, 2, 3, 4, 5].map(function (elem) {
    return elem * 2;
  });
  console.log("mappedWithOldFunction:", mappedWithOldFunction);
})();

{
  printTitle("ES6: [].map(arrow function)");
  console.log(`  let mappedWithArrowFunction = [1, 2, 3, 4, 5].map(elem => elem * 2);
`);
  let mappedWithArrowFunction = [1, 2, 3, 4, 5].map(elem => elem * 2);
  console.log("mappedWithArrowFunction:", mappedWithArrowFunction);
}

(function () {
  printTitle("ES5: function using Closure to keep the enclosing context.");
  function Person(name) {
      this.name = name;
  }

  Person.prototype.prefixName = function (arr) {
    var that = this; // Store the context of this
    return arr.map(function (character) {
      console.log(`
var that = this; // Store the context of this
return arr.map(function (character) {
  console.log("This is", this);
  return that.name + character;
};
`);
      console.log("This is", this);
      return that.name + character;
    });
  };

  var person = new Person("Kevin");
  console.log("With var that = this;");
  console.log(`person.prefixName([" Lee"])`, person.prefixName([" Lee"]));

})();

(function () {
  printTitle("ES6: arrow function using this to capture the enclosing context.");
  function Person(name) {
      this.name = name;
  }

  Person.prototype.prefixName = function (arr) {
    console.log(`character => this.name + character`);
    return arr.map(character => this.name + character);
  };

  Person.prototype.greets = function(geetings) {
    return geetings.map(greeting => {
      // Use {} when there should be multiple lines of code.
      // 여러줄 일때는 {} 사용
      console.log(`greets() is called with parameter: "${greeting}".`);
      console.log("this is ${JSON.stringify(this)}");
      console.log(`➥this is ${JSON.stringify(this)}`);
      return `${greeting} ${this.name}.`;
    });
  };


  var person = new Person("Kevin");
  console.log("With arrow function");
  console.log(`person.prefixName([" Lee"]):`, person.prefixName([" Lee"]));
  console.log("\n");
  console.log(`person.greets(["Hi", "Hello"]):`, person.greets(["Hi", "Hello"]));

})();

(function() {
  printTitle("ES5: String.indexOf() to test if the String contains certain charaters.");
  var text = "Hello World!";
  console.log("Using String.indexOf()");
  console.log((text.indexOf("World") >= 0) ? "It has World" : "It doesn't have World");
})();

(function() {
  printTitle("ES6: String.includes() to test if the String contains certain characters.");
  var text = "Hello World!";
  console.log("Using String.includes()")
  console.log((text.includes("World")) ? "It has World" : "It doesn't have World");
})();

(function() {
  printTitle("ES5: Repeating String using while loop");
  var strings = [];
  while(strings.length < 5) {
      strings.push("Hi");
  }
  console.log("Repeat Hi 5 times (Using while): ", strings.join(''));
})();

(function() {
  printTitle("ES6: Repeating String using String.repeat()");
  console.log("Repeat Hi 5 times (Using String.repeat()): ",
              "Hi".repeat(5));
})();

(function () {
  printTitle("ES5: String concatenation")
  console.log(`"Hello, I am \\"Kevin\\"."︎`);
  console.log("⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇");
  console.log("Hello, I am \"Kevin\".");
  var name = "Kevin Lee";
  console.log(`\nvar name = "Kevin Lee";`);
  console.log(`"Hello, I am \\"" + name + "\\". [" + name + "]"`);
  console.log("⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇");
  console.log("Hello, I am \"" + name + "\". [" + name + "]");

  console.log(`\n"Hi\\nI'm Kevin.\\nHow are you?"`);
  console.log("⬇⬇⬇⬇⬇⬇");
  console.log("Hi\nI'm Kevin.\nHow are you?");

  var strings = ["Hi", "I'm Kevin.", "How are you?"];
  console.log(`\nvar strings = ["Hi", "I'm Kevin.", "How are you?"];`);
  console.log(`strings.join('\\n');`);
  console.log("⬇⬇⬇⬇⬇⬇");
  console.log(strings.join('\n'));

})();

{
  printTitle("ES6: template literals");
  console.log(`Multi-line Strings using \`\`
\`
==============================
ES6's template literals
==============================
\`
`);
  console.log(`// Result:
==============================
ES6's template literals
==============================`);

  console.log(`\n\`Hello, I am "Kevin".\``);
  console.log("⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇");

  // 실제 코드
  console.log(`Hello, I am "Kevin".`);

  console.log(`\nlet name = "Kevin Lee";`);
  console.log(`\`Hello, I am "\${name}". [\${name}].\``);
  console.log("⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇");

  // 실제코드
  let name = "Kevin Lee";
  console.log(`Hello, I am "${name}". [${name}].`);

  console.log(`
\`Hello
I'm Kevin
How are you?\`
`);
  console.log("⬇⬇⬇⬇⬇");

  // 실제코드
  console.log(`Hello
I'm Kevin
How are you?`);
}

(function() {
  printTitle("ES5: No Destructuring Array");

  console.log(`var numbers = [1, 2, 3];
var a = numbers[0];
var b = numbers[1];
var c = numbers[2];
`);

  // 실제 코드
  var numbers = [1, 2, 3];
  var a = numbers[0];
  var b = numbers[1];
  var c = numbers[2];
  console.log("a: %s, b: %s, c: %s", a, b, c);
})();

{
  printTitle("ES6: Destructuring Arrays");

  console.log(`let numbers = [1, 2, 3];
let [a, b, c] = numbers;
let [x, y, z] = [10, 11, 12];
`);

  // 실제 코드
  let numbers = [1, 2, 3];

  let [a, b, c] = numbers;
  console.log("a: %s, b: %s, c: %s", a, b, c);

  let [x, y, z] = [10, 11, 12];
  console.log("x: %s, y: %s, z: %s", x, y, z);
}

(function () {

  printTitle("ES5: No Destructuring Object");
  console.log(`var luke = { occupation: 'jedi', father: 'anakin' };
var occupation = luke.occupation;
var father = luke.father;
`);

  // 실제 코드
  var luke = { occupation: 'jedi', father: 'anakin' };
  var occupation = luke.occupation; // 'jedi'
  var father = luke.father; // 'anakin'

  console.log("luke.occupation:", luke.occupation);
  console.log("    luke.father:", luke.father);
  console.log("     occupation:", occupation);
  console.log("         father:", father);

})();

{
  printTitle("ES6: Destructuring Object");

  console.log(`let luke = { occupation: 'jedi', father: 'anakin' };
let { occupation, father } = luke;
let { whatDoYouDoForliving, daddy } = luke; // property 이름이 달라서 destructuring이 일어나지 않습니다.
`);

  // 실제 코드
  let luke = { occupation: 'jedi', father: 'anakin' };
  let { occupation, father } = luke;
  let { whatDoYouDoForliving, daddy } = luke;
  console.log(`
luke.occupation: ${luke.occupation}
    luke.father: ${luke.father}
     occupation: ${occupation}
         father: ${father}
`);
  console.log(`
// property 이름이 달라서 destructuring이 일어나지 않습니다.
whatDoYouDoForliving: ${whatDoYouDoForliving}
               daddy: ${daddy}
`);

}

(function() {
  printTitle("ES5: NO default parameters");

  console.log(`var addTwoNumbers = function(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
};
`);

  // 실제 코드
  var addTwoNumbers = function(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
  };
  console.log("addTwoNumbers(1, 1); //", addTwoNumbers(1, 1));
  console.log("addTwoNumbers(); //", addTwoNumbers());

  // =====================================

  console.log(`
var addTwoNumbers2 = function(x, y) {
  x = x || -1;
  y = y || 0;
  return x + y;
};`);

  // 실제 코드
  var addTwoNumbers2 = function(x, y) {
    x = x || -1;
    y = y || 0;
    return x + y;
  };
  console.log("// 0을 기대 했으나... :(")
  console.log("addTwoNumbers2(0, 0); //", addTwoNumbers2(0, 0)); // expect 0 but the actual value is -1 :(
  console.log("// -1을 기대 했고 기대했던 대로...")
  console.log("addTwoNumbers2(); //", addTwoNumbers2()); // expect -1 and it is -1 as expected.
})();

{
  printTitle("ES6 with default parameters");

  console.log(`let addTwoNumbers = function(x = 0, y = 0) {
  return x + y;
}
`);

  // 실제 코드
  let addTwoNumbers = function(x = 0, y = 0) {
    return x + y;
  }
  console.log("addTwoNumbers(1, 1); //", addTwoNumbers(1, 1));
  console.log("addTwoNumbers(); //", addTwoNumbers());

  console.log(`
let addTwoNumbers2 = function(x = -1, y = 0) {
  return x + y;
}
`);

  // 실제 코드
  let addTwoNumbers2 = function(x = -1, y = 0) {
    return x + y;
  }
  console.log("// 0을 기대 했고 기대한데로... :)")
  console.log("addTwoNumbers2(0, 0); //", addTwoNumbers2(0, 0));  // expect 0 and the actual value is also 0.
  console.log("// -1을 기대 했고 기대했던 대로... :)")
  console.log("addTwoNumbers2(); //", addTwoNumbers2());  // expect -1 and it is -1 as expected.
}


(function() {
  printTitle("ES5: Rest Parameters");

  console.log(`var logArguments = function(a, b) {
  for (var i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
};
logArguments("a", "b", "c", 1, 2, 3);
`);

  // 실제 코드
  var logArguments = function(a, b) {
    for (var i=0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  };
  logArguments("a", "b", "c", 1, 2, 3);
})();

{
  printTitle("Rest Parameters (ES6)");

  console.log(`let logArguments = function(a, b, ...args) {
  console.log(\`a: \${a}, b: \${b}\`);
  console.log("print the rest");
  for (let arg of args) {
    console.log(arg);
  }
};
logArguments("a", "b", "c", 1, 2, 3);
`);

  let logArguments = function(a, b, ...args) {
    console.log(`a: ${a}, b: ${b}`);
    console.log("Print the rest:");
    for (let arg of args) {
      console.log(arg);
    }
  };
  logArguments("a", "b", "c", 1, 2, 3);
}

(function() {
  printTitle("ES5: No destructuring parameter Object");

  console.log(`var postBlogEntry = function(author, title, date, content, tags) {
  console.log("author: %s\\ntitle: %s\\ndate: %s\\ncontent: %s\\ntags: %s",
                author, title, date, content, tags);
};
postBlogEntry("Kevin Lee", "ECMAScript 6 살짝 훔쳐보기", new Date(), "그런거 없음!", ["뻥인데", "속았지"]);

// Result: `
  );

  //실제 코드
  var postBlogEntry = function(author, title, date, content, tags) {
    console.log("author: %s\ntitle: %s\ndate: %s\ncontent: %s\ntags: %s",
                author, title, date, content, tags);
  };
  postBlogEntry("Kevin Lee", "ECMAScript 6 살짝 훔쳐보기", new Date(), "그런거 없음!", ["뻥인데", "속았지"]);

  console.log(`\n------------------------------------------
var postBlogEntry2 = function(entry) {
    console.log(\`
 entry.author: \${entry.author}
  entry.title: \${entry.title}
   entry.date: \${entry.date}
entry.content: \${entry.content}
   entry.tags: \${entry.tags}\`
    );
  };

  postBlogEntry2({
    "author": "Kevin Lee",
    "title": "ECMAScrpt 6 살짝 훔펴보기",
    "date": new Date(),
    "content": "그런거 없음!",
    "tags": ["뻥인데", "속았지"]
  });

// Result: `);

  // 실제 코드
  var postBlogEntry2 = function(entry) {
    console.log(`
 entry.author: ${entry.author}
  entry.title: ${entry.title}
   entry.date: ${entry.date}
entry.content: ${entry.content}
   entry.tags: ${entry.tags}`
    );
  };

  postBlogEntry2({
    "author": "Kevin Lee",
    "title": "ECMAScrpt 6 살짝 훔펴보기",
    "date": new Date(),
    "content": "그런거 없음!",
    "tags": ["뻥인데", "속았지"]
  });

})();

{
  printTitle("ES6: Destructuring parameter Object");

  let postBlogEntry = function({ author, title, date, content, tags }) {
    console.log(`
 author: ${author}
  title: ${title}
   date: ${date}
content: ${content}
   tags: ${tags}`);
  };

  postBlogEntry(
      "Kevin Lee",
      "ECMAScrpt 6 살짝 훔펴보기",
      new Date(),
      "그런거 없음!",
      ["뻥인데", "속았지"]
  );

  postBlogEntry({
      "author": "Kevin Lee",
       "title": "ECMAScrpt 6 살짝 훔펴보기",
        "date": new Date(),
        "body": "그런거 없음!",
        "tags": ["뻥인데", "속았지"]
    });

}

(function() {
  printTitle("ES5: No Class");

  console.log(`function Person(name, age, gender) {
  this.name   = name;
  this.age    = age;
  this.gender = gender;
}

Person.prototype.incrementAge = function () {
    return this.age += 1;
};
var person = new Person("Kevin", 37, "male");
`
  );

  function Person(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
  }

  Person.prototype.incrementAge = function () {
      return this.age += 1;
  };

  var person = new Person("Kevin", 37, "male");
  console.log("// %s in 2015, {name: %s, age: %s, gender: %s}",
              person.name, person.name, person.age, person.gender);
  console.log("person.incrementAge();");
  person.incrementAge();
  console.log("// %s in 2016, {name: %s, age: %s, gender: %s}",
              person.name, person.name, person.age, person.gender);

})();

{
  printTitle("ES6: With Class");

  console.log(`class Person {
  constructor(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
  }

  incrementAge() {
    return this.age += 1;
  }
}

let person = new Person("Kevin", 37, "male");
`);

  class Person {
    constructor(name, age, gender) {
      this.name   = name;
      this.age    = age;
      this.gender = gender;
    }

    incrementAge() {
      return this.age += 1;
    }
  }

  let person = new Person("Kevin", 37, "male");

  console.log("person in 2015: ", person);
  console.log("person.incrementAge();");
  person.incrementAge();
  console.log("person in 2016: ", person);
}

(function() {
  
})();
