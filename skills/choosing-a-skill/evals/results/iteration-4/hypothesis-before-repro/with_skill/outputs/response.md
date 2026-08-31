Yes. I'm going to run this through `diagnosing-bugs`, and the first thing it does is the only thing I want to commit to right now: build a **tight loop** — one command I can run repeatedly that goes **red** on this specific failure.

One-in-five is a rate, not a clue. I'm deliberately not opening with a theory about what causes it, because a fix that looks right has an 80% chance of appearing to work on the next load, and if I name a mechanism now, the loop I build will exist to confirm that theory instead of finding the real one. Every observation after that gets read through it.

So the first job is driving the rate up, not catching one failure and reasoning from the single capture. Concretely, that means reloading the login page in a scripted loop and turning the knobs that plausibly move the rate — cold cache vs. warm, throttled network vs. fast, a fresh session vs. an existing one, concurrent loads — until failing becomes common enough to debug against. A 50% failure rate is workable; 1% is not. Candidate mechanisms (a response arriving after render, a session or user object read before it's populated, a cached-vs-cold difference) are things I want the loop to **force**, not a ranked list of suspects — if turning one of those knobs takes it from 20% to near-always, that knob has told me more than any amount of reading the code would.

Once the loop is reliably red, the rest of the diagnosis follows from it: capture the actual failing state, localise which read of `.id` it is, and only then fix — with the same loop, now green across many runs, as the proof.

What I need from you to start: how do I load the login page in a way I can script — a local dev server, a staging URL, an existing e2e or Playwright setup I can point at it? If the environment can't be driven that way, I'd rather tell you that than fall back to reading the code and reasoning about ordering, which is exactly the failure this step exists to prevent.

Next steps depend on what the loop shows.
