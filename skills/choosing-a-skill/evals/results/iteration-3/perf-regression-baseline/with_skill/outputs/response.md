"Slow since the last deploy" is a diagnosis, not an optimisation — so I'm not going to open with a list of things that are commonly slow. That would be hypothesis-first reasoning wearing a checklist for cover, and it's how you end up "fixing" something that was never the cause.

I'm going to run `diagnosing-bugs`, which covers performance regressions explicitly. Phase 1 is the whole job right now: build a **tight loop** — one command I've already run at least once that goes **red** on this specific slowness. Concretely that means a repeatable measurement of the slow interaction (a scripted load of the dashboard route with a timing assertion, or a trace capture I can diff), deterministic enough that a pass/fail is meaningful and fast enough to run dozens of times. No red-capable command, no Phase 2 — I won't move on to causes until that exists.

Two things I'm deliberately not doing yet:

- **Not naming a culprit.** N+1 queries, a fat bundle, a new blocking request, a cache that stopped hitting — these are all things the loop should be able to force, not a likelihood ordering. Once I rank them, every later observation gets read through that ranking.
- **Not treating the deploy as the answer.** The deploy boundary is the thing I bisect *against*, not the cause I assume. If the loop goes red on the new build and green on the previous one, that's a real signal and it hands me a bounded diff to work through. If it goes red on both, the deploy was a coincidence and I've saved us a wasted day.

One caveat worth flagging up front: "feels slow" is a rate, not a fact. If the slowness is intermittent, I'll drive the rate up until the loop is debuggable rather than catching one slow load and reasoning from that single capture — a fix that looks right has good odds of appearing to work on the next load by chance. And if the environment can't be driven that way — no staging with the old build, no way to reproduce outside production — I'll say so and stop rather than fall back on reading the diff and reasoning about what *looks* expensive. That fallback is exactly the failure this phase exists to prevent.

There's also a real collision here I'd rather name than quietly resolve: `performance-optimization` genuinely lists performance regressions as a trigger, so it's a fair candidate. I'm skipping it *for now* because it's a checklist to consult once you know where the time goes, not a workflow to run at a symptom. I'll come back to it after the loop localises the problem — that's when its sections start earning their keep.

What I need from you to start: how you reproduce the slowness (which view, which interaction, logged in as what), and whether I can run the previous build somewhere. The next steps depend on what the loop shows.
