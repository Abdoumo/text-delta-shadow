🔐 Delta Encryption & Decryption

This project implements a custom encryption and decryption algorithm based on a mathematical function called Delta Encoding.

📜 Overview

The idea is simple but creative:
Each group of three characters (A, B, C) in the message is transformed into a number using the Delta formula:

Δ=(B2)+4×(A×C)

Then all these delta values are concatenated to form one large encrypted number.
The decryption script reverses this logic — it tries to find which (A, B, C) triplets generated the original number.
