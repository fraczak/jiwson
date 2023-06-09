import { Parser } from "./lib/jison.mjs";

// a grammar in JSON
var grammar = {
  lex: {
    rules: [
      ["\\s+", "/* skip whitespace */"],
      ["[a-f0-9]+", "return 'HEX';"],
    ],
  },

  bnf: {
    hex_strings: ["hex_strings HEX", "HEX"],
  },
};

// `grammar` can also be a string that uses jison's grammar format
var parser = new Parser(grammar);

// generate source, ready to be written to disk
var parserSource = parser.generate();

// you can also use the parser directly from memory

// returns true
console.log(parser.parse("adfe34bc e82a"));

// throws lexical error
try {
  parser.parse("adfe34bc zxg");
} catch (err) {
  console.log("Expected error:");
  console.log(err);
}
