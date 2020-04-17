**WIP, not a working minimal reproduction yet**

This is an attempt at reproducing an issue where CSS Modules and global CSS load out of order.

It is similar to: [Inconsistent loading order of CSS Modules + global CSS #10148](https://github.com/zeit/next.js/issues/10148) and based on @nikkiselev's repro for the same, but it's for a different, production-speciific case where a navigation causes the stylesheets to end up out of order. 
