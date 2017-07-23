# d3-heatmap-tutorial
Tutorial on how to create a heatmap using d3js

This gist contains the code to create a simple "heat map" with D3.js. In this case, the "heat map" is a graph showing activity distributed over the days of the week on one axis and the weeks of the year on the other.

This gist is meant to be used as part of a workshop where the code is uncommented as the workshop progresses.

It could also be used as a puzzle outside of a workshop: follow the clues to reconstruct the correct code and make it work!

In the end, the chart should look something like this:

![](https://gist.githubusercontent.com/jennyknuth/d0d636a3f646a60ba5a3/raw/4419a361cea1e3dfcb4035189be0080d1e6aad8d/%25CE%25A9heatMapExample.png)

##Setup

First, fork this gist to your own account by clicking the fork symbol in the upper right.

![](https://gist.githubusercontent.com/jennyknuth/d0d636a3f646a60ba5a3/raw/76fda73a542f1aa20a000029d762a80032700e9b/%25CE%25A9fork.png)

Then copy the clone URL to your clipboard.

![](https://gist.githubusercontent.com/jennyknuth/d0d636a3f646a60ba5a3/raw/76fda73a542f1aa20a000029d762a80032700e9b/%25CE%25A9clone.png)

In your terminal, type the
` git clone `
command then paste the url you just copied followed by the name of your new directory:

```
git clone <paste clone url here> <name of new directory here>
```
EXAMPLE:

```
git clone https://gist.github.com/d0d636a3f646a60ba5a3.git myD3HeatMapExample
```
Move (cd) into your new directory
```
cd myD3HeatMapExample
```
then open the `app.js`, `index.html`, and `style.css` files in your favorite text editor.

## How to open a D3 graphic in the browser

To open the D3 file in your browser, you'll need to run a simple server such as `http-server` or `python SimpleHTTPServer` from your new directory.

If you have Node installed try the following command:
```
http-server -c-1 -o
//run http-server with flags -c-1 (disable caching) and -o (automatically open)
```
In your browser, you should see a small purple grid square, the beginnings of your heat map. If that doesn't work, try this command:
```
python -m SimpleHTTPServer
```
and follow up in your browser by going to `http://localhost:8000/`.  

If neither of those server commands work, more specific intructions for installing a server can be found in the gist here:
[TK—link to how to install a simple http server]

## Then code along…
