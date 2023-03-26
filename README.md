A version of Jison with support for ES6 modules
=====

Full cli option list:

    Usage: jiwson [file] [lexfile] [options]

    file        file containing a grammar
    lexfile     file containing a lexical grammar

    Options:
       -j, --json                    force jison to expect a grammar in JSON format
       -o FILE, --outfile FILE       Filename and base module name of the generated parser
       -t, --debug                   Debug mode
       -m TYPE, --module-type TYPE   The type of module to generate (commonjs, amd, js, es6)
       -p TYPE, --parser-type TYPE   The type of algorithm to use for the parser (lr0, slr, lalr, lr)
       -V, --version                 print version and exit

E.g.:

    jiwson ./path/to/grammar.bnf -m es6 -o my-parser.mjs


Usage from a CommonJS module
--------------------------

You can generate parsers programatically from JavaScript as
well. Assuming Jison is in your commonjs environment's load path:

```javascript
// mygenerator.js
var Parser = require("jison").Parser;

// a grammar in JSON
var grammar = {
    "lex": {
        "rules": [
           ["\\s+", "/* skip whitespace */"],
           ["[a-f0-9]+", "return 'HEX';"]
        ]
    },

    "bnf": {
        "hex_strings" :[ "hex_strings HEX",
                         "HEX" ]
    }
};

// `grammar` can also be a string that uses jison's grammar format
var parser = new Parser(grammar);

// generate source, ready to be written to disk
var parserSource = parser.generate();

// you can also use the parser directly from memory

// returns true
parser.parse("adfe34bc e82a");

// throws lexical error
parser.parse("adfe34bc zxg");
```

Usage within ES6
----------------

```js
import { Parser } from "./lib/jison.mjs";

// ... the rest is as above
```

Original License
-------

> Copyright (c) 2009-2014 Zachary Carter
> 
>  Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
>  The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
>  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.


  [1]: http://dinosaur.compilertools.net/bison/bison_4.html

