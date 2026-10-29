---
type: regex
target: last_message
pattern: '\bnull\b'
arm: both
---

The reply answers from the code: `cartTotal` returns `null` for an empty cart. Only a read of the function body tells that, and any session should answer it, with brain or without.
