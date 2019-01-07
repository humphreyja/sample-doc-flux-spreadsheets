# Sample DocFlux Application for generating Spreadsheets and PDFs using the same react syntax components!.

This uses the [DocFlux](https://github.com/HarvestProfit/DocFlux) framework for generating documents.  It has 2 examples.  First is spreadsheet creating which uses [xlsx](https://github.com/SheetJS/js-xlsx).  In this example I show how to define your own custom document generator (so if you wanted to generate a word doc or something you can follow a similar method as shown here. Also, this is just a copy of the actual [DocFlux-Spreadsheets](https://github.com/HarvestProfit/DocFlux-Spreadsheets) npm package, so use that instead of redefining your own.
Second, I show how you can create and style a pdf using the [DocFlux-PDFs](https://github.com/HarvestProfit/DocFlux-PDFs) npm package which uses pdfmake.  

Why would you want to use this? Because React is awesome.  By defining your code in components, it allows for code reusing and promotes clean code.  Also, you can test it, so that's why.  If you're app is already built with React, then this is a breath of fresh air for crating documents.

Try it out [here](https://humphreyja.github.io/sample-doc-flux-spreadsheets/).
