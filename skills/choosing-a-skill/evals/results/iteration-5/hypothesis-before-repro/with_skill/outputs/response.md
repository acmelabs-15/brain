Yes — I'll run this through `diagnosing-bugs`, and the first thing I'm doing is *not* naming a cause.

One-in-five is a rate, not a clue. It's tempting to read "sometimes undefined" and start listing the usual suspects, but a mechanism guessed before the evidence exists poisons everything after it: the loop stops being a way to find the cause and becomes a way to confirm the one I already said out loud. It's also a trap for the fix — if I patch something plausible, there's an 80% chance the next load looks fine whether or not I actually fixed anything.

So Phase 1 is a **tight loop**: one command I can run repeatedly that goes **red** on this specific error. For a one-in-five intermittent, that means driving the rate *up* before doing anything else — loading the page in a loop, throttling the network, varying the timing/ordering of whatever the page does on load, clearing session state between runs — until failure is frequent enough to be debuggable. `diagnosing-bugs` treats something like a 50% flake as workable and 1% as not; I want to land nearer the former. Catching one failure and reasoning from that single capture is what I'm specifically trying to avoid.

Once the loop is red and repeatable, I can bisect against it — turning things off, changing one variable at a time — and let it tell me which `.id` read is running against an undefined value and why that value is sometimes absent. Candidate mechanisms are things the loop should *force*, not a ranking to work down.

Two honest caveats:

- If I can't drive the rate up — if the environment won't let me reproduce it on demand — I'll tell you that and stop, rather than fall back on reading the code and reasoning about ordering. That fallback is exactly the failure this phase exists to prevent, and it's very good at looking like progress.
- If you already have anything from a real failure — a stack trace, the console error with a frame, a browser/session pattern in who hits it, whether it correlates with a cold load or a logged-out state — that shortens Phase 1 a lot. Not a blocker; I'll start driving the rate either way.

What happens after that depends entirely on what the loop shows.
