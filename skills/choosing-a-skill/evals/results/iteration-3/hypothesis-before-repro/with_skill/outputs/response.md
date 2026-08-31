Yes — and the first thing I'm going to do is *not* guess at the cause.

An intermittent one-in-five failure is a rate to drive to certainty, not evidence for a mechanism. If I opened with a theory (a race, an unresolved promise, a null session on cold cache) I'd be building a loop to confirm that theory rather than to find the real one, and every later observation would get read through it. Worse: at a 20% failure rate, a fix that's completely wrong has an 80% chance of looking like it worked on the next load.

So I'm running `diagnosing-bugs`, and Phase 1 is the whole job right now: build a **tight loop** that goes **red** on this specific bug. Concretely, that means getting to a single command I've actually run — deterministic enough to trust, fast enough to iterate on, runnable by me without a human clicking — and driving the failure rate *up* from one-in-five toward something a debugger can work with. A 50% flake is workable; catching one failure and reasoning from that single capture is not.

Things I'd expect to reach for to raise the rate, in service of the loop rather than as candidate causes: repeated loads under a harness rather than by hand, throttled and varied network conditions, cold vs. warm storage/session state, and a stack trace captured at the throw with the actual undefined value in scope. Any mechanism that comes to mind is something the loop should *force* to appear, not something to rank by likelihood.

Two things I need to be straight with you about up front:

- I have no repository or running login page in front of me, so I can't start the loop yet. To begin, point me at the repo and tell me how the app runs locally (or where a staging instance lives) — and whether there's a browser-driving setup already in place, since that's the difference between an agent-runnable loop and a manual one.
- If it turns out the environment can't be driven — no way to reproduce it locally, no reliable access to a failing instance — I'll tell you that and stop, rather than fall back on reading the code and reasoning about ordering. That fallback is exactly the failure this phase exists to prevent, and it's the one that produces a confident, plausible, wrong patch.

Once the loop is red on demand, the next steps depend on what it shows.
