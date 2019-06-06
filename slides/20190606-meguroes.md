# ArrayBufferとBinary

<br>

sasurau4

Meguro.es #21 2019/06/06

--- 

## Introduce myself

<br/>

```json
{
  "id": "sasurau4",
  "name": "Daiki Ihara",
  "description": "Front-end engineer at CureApp, Inc.",
  "techs": {
    "work": [
      "React Native", 
      "TypeScript", 
      "JavaScript", 
      "MongoDB"
    ],
    "hobby": ["React", "TypeScript", "JavaScript" ,"deno"],
  },
  "homepage": "https://sasurau4.github.io/profile/"
}
```

---

## Today's contents

<div>
<!-- contents -->
</div>

---

<!-- sectionTitle: はじめに -->
## なぜArrayBuffer

- 仕事でBluetoothでとある機器をつなぐ必要があった
- その機器がこんな値を返してくる
  - [48, 49, 48, 46, 48]
  - [48, 48, 49, 46, 50]
  - [48, 48, 48, 46, 56]
- どうもBinaryらしい
- Binaryを扱う？どうするんだ？

--- 

## ArrayBuffer

<a href="https://gyazo.com/e6c6011cbd91045111a4d27a8a77f17a"><img src="https://i.gyazo.com/e6c6011cbd91045111a4d27a8a77f17a.png" alt="Image from Gyazo" width="1200"/></a>

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

--- 

<span class="emoji">
🤔
</span>

---

<!-- sectionTitle: バイナリとは -->
## binary

- binary: 2の, 2進法の, 2成分の
- bi-: 2つの
- bicycle: 2つの輪 -> 自転車
- bilingual: 2つの言葉 -> 2カ国語を喋れる人
- git bisect: 2分探索してくれるやつ

---

## binary

バイナリ (binary) とは二進法のことであるが、コンピュータが処理・記憶するために2進化されたファイルまたはその内部表現の形式（バイナリデータ）のことを指して用いることが多い。

> https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%8A%E3%83%AA

---

<p class="big">10</p>

---

## 2進数

0と1だけで表現された数値

---

### 1桁のとき

- 0
- 1

---
### 2桁のとき

- 00
- 01
- 10
- 11

--- 
### 3桁のとき

- 000
- 001
- 010
- 011
- 100
- 101
- 110
- 111

---
### 例1

- 10進数: 255
- 2進数: 11111111

<br>

### 例2
- 10進数: 10000
- 2進数: 10011100010000

---

## 16進数

<br>

0-9とA-Fの16文字を使って表現された数値

<br>

JavaScriptでは、`0x00`など`0x`を先頭につけて表す

<br>

- 10進数: 255
- 2進数: 11111111
- 16進数: FF

---

## bitとbyte

- bit
  - 情報量の単位
  - binary digitの略
  - 1bitで2進数の1桁で表せる情報量、つまり2つの状態を表せる
- byte
  - 情報量の単位
  - 1byte = 8bit = 256通りの値を示せる
  - 16進数で表すのにちょうどよい

---

<!-- sectionTitle: バイナリーで遊ぶ -->
## ArrayBufferとTypedArrayとDataView

<div class="grid">
  <div class="column">
    <h3>バッファ</h3>
    <h4>ArrayBuffer</h4>
    <ul>
      <li>
      固定長のバイナリデータを示すために使われる
      </li>
      <li>
      直接操作ができない
      </li>
    </ul>
  </div>
  <div class="column">
    <h3>ビュー</h3>
    <h4>TypedArray</h4>
    <ul>
      <li>
      ArrayBufferの配列状のビューを提供する
      </li>
      <li>
      Uint8Arrayなど
      </li>
    </ul>
    <h4>DataView</h4>
    <ul>
      <li>
      任意のデータをバッファに読み書きする
      </li>
      <li>
      TypedArrayと違い、バイトオーダーを制御できる
      </li>
    </ul>
  </div>
  </div>
</div>

---

## 実践

```js
const buf = new ArrayBuffer(1)
let u8 = new Uint8Array(buf)

u8[0] = 65

String.fromCharCode.apply(0, u8)
// -> "A"
```

```js
const buf = new ArrayBuffer(2)
let u8 = new Uint8Array(buf)
let u16 = new Uint16Array(buf)

u16[0] = 12354
// u8 -> Uint8Array[66, 48]
// u16 -> Uint16Array[12354]

String.fromCharCode.apply(0, u8)
// -> "B0"
String.fromCharCode.apply(0, u16)
// -> "あ"
```

---

<img src="https://mdn.mozillademos.org/files/8629/typed_arrays.png" width="1200">

https://developer.mozilla.org/ja/docs/Web/JavaScript/Typed_arrays

---

## 最初の疑問の答え

```js
const value =  [48, 49, 48, 46, 48]
value.map(v => String.fromCharCode(v)).join("")
// -> "010.0"
```

---

## まとめ

- バイナリの世界は奥が深い
- コンピューターの気持ちになれる
