"Slow since the last deploy" is a diagnosis, not an optimisation — so I'd run `diagnosing-bugs`, which covers performance regressions explicitly, rather than `performance-optimization`.

That's a real collision worth naming: `performance-optimization` lists performance regressions in its own description, so it genuinely matches your words. But it's a reference checklist — the thing you consult once you know where the time goes. Reaching for it now would get you a list of things that are commonly slow (bundle size, N+1 queries, waterfall requests), which is me guessing at a cause and dressing it up as a checklist. I'd rather find the cause than rank my hunches.

So the first move is Phase 1 of `diagnosing-bugs`, and Phase 1 *is* the skill: build a tight loop that goes red on this specific slowness before naming any mechanism. Concretely, that means getting to one command I can run repeatedly that produces a number — a scripted load of the dashboard with the timing captured, or a request-level timing against the same endpoint — and confirming it actually separates "after the deploy" from "before". Deterministic, fast, and something I can run myself. No red-capable command, no Phase 2.

Two things I want to pin down while building it, because "feels slow" can mean several different measurements:

- **Where the time goes** — page load versus interaction versus a single slow request. These have disjoint causes and I don't want to assume.
- **How reliable it is** — if it's slow every time, the loop is easy. If it's slow one load in five, that rate is something to drive up until it's debuggable, not evidence about the mechanism. A fix would have an 80% chance of looking like it worked on the next load.

The deploy boundary is the useful lever here, and I'd use it as the thing to bisect against rather than as the cause I assume. Once the loop is red on one side and green on the other, the diff between those two points does most of the work.

I haven't looked at anything yet, so I have no candidate cause and I'm not going to offer one — a ranked list at this stage would turn the loop into something that confirms a theory instead of finding one.

Next steps depend on what the loop shows. Once it localises the problem, `performance-optimization`'s checklist becomes genuinely useful for the fix, and I'd pull the relevant section then.
