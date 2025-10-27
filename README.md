🔐 Delta Encryption & Decryption

This project implements a custom encryption and decryption algorithm based on a mathematical function called Delta Encoding.

📜 Overview

The idea is simple but creative:
Each group of three characters (A, B, C) in the message is transformed into a number using the Delta formula:

Δ=(B2)+4×(A×C)

Then all these delta values are concatenated to form one large encrypted number.
The decryption script reverses this logic — it tries to find which (A, B, C) triplets generated the original number.


🧩 Files Description
1️⃣ irr (1).js

→ The Encryption Script (JavaScript)

This file converts any string into a long encrypted number.

Main functions:

stringToNumberArray(str)
Converts each character to its ASCII code or numeric value.

applyDelta(str)
Applies the Delta formula for every group of 3 characters (a, b, c).

Example Usage:

console.log(applyDelta('Halim paradox 234!'));


Output Example:

40513524045811311881488321254460481506325500953068603211440096044116


That long number is your encrypted message.
