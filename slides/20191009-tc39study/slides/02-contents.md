## What is temporal?

Provides standard objects and functions for working with dates and times.
This proposal is currently stage 2.

---

### Motivation

- [Fixing JavaScript Date](https://maggiepint.com/2017/04/09/fixing-javascript-date-getting-started/)
- [java.util.Date―その悲劇と歴史](https://www.coppermine.jp/note/2019/01/java-util-date/)

---

## Principles

- All temporal APIs are non-mutating. All temporal objects are effectively immutable.
- All date values are based on the Proleptic Gregorian Calendar.
- All time-of-day values are based on a standard 24-hour clock.
- Leap seconds are not represented.

---

## Specification

The documentation is out of date. 😇

---

## Try it with polyfill

`node --experimental-modules --no-warnings --icu-data-dir ./node_modules/full-icu/ -r ./lib/initialise.js`

For more details, https://github.com/tc39/proposal-temporal/tree/main/docs

---

## Results

```javascript
> const day = Temporal.Date(2019, 1, 1)
undefined

> day.day
1

> day.toString()
'2019-01-01'

> let d1 = Temporal.DateTime(2019, 2, 1)
undefined

> d1.toLocaleString()
'2019/2/1 0:00:00'

> d1.daysInMonth
28

> let onem = Temporal.Duration(0, 1)
undefined

> onem.toString()
'P1M'

> d1.plus(onem).toString()
'2019-03-01T00:00'
```

---

## What is binaryAST?

> Startup performance degrades with larger JS payloads, even if only a fraction of the code is actually executed. Parsing time is a significant component, taking more CPU time than bytecode / initial JIT code generation. For example, on a powerful laptop, Chrome spends 10% to 15% of CPU time parsing JS while loading facebook.com.

> We propose a new over-the-wire format for JS that is a binary encoding of an AST. We believe this new format would allow for drastically faster parsing. Moreover, web developers are well positioned to adopt a new format as they have embraced build tooling.

---

## Motivation

![](https://blog.cloudflare.com/content/images/2019/05/LowEnd-device-without-BinJS.png)

from https://blog.cloudflare.com/binary-ast/

---

## prototype of binAST

> As websites become more sophisticated, the amount of JavaScript source code keeps increasing. While depending upon a large JavaScript codebase won't prevent a website from working, it will cause websites to start slowly – often unacceptably slow. This is due to two bottlenecks: parsing and bytecode compiling JavaScript. Unfortunately, browsers have pretty much reached efficiency peak for both operations.

> **_We (Mozilla, Bloomberg, Facebook, CloudFlare) are currently working on a domain-specific encoding for JavaScript, called "BinAST" (short for "JavaScript Binary AST"). The JavaScript Binary AST is designed to break the bottleneck._**

from https://github.com/binast/binjs-ref

---

## Result

![](https://blog.cloudflare.com/content/images/2019/05/binast.gif)

---

## Details

https://blog.cloudflare.com/binary-ast/

---

## Demo

Try it with Firefox nightly! ![](http://www.rw-designer.com/icon-image/15852-48x48x32.png)

https://serve-binjs.that-test.site
