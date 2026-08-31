"Slow since the last deploy" is a diagnosis, not an optimisation — so before I touch anything I want a **tight loop**: one command I can run repeatedly that goes **red** on this specific slowness, deterministic enough that a change flips it. That's `diagnosing-bugs` Phase 1, and it's the whole first step; nothing after it is worth doing until it exists.

Concretely, what I'd do first:

1. Pin down what "slow" means as a number and where it's measured — first paint, a particular view, an interaction, a request that returns. One reproducible measurement on the deployed version, run more than once so I know the spread.
2. Make it a command. Something like a scripted load of the specific dashboard view that prints the timing and fails above a threshold, runnable by me without a human watching.
3. Then use the deploy boundary as the thing I **bisect against**, not as the cause I assume. Same loop against the previous release; if the gap reproduces, walk the commits in between until the number moves.

Two things I'm deliberately not doing yet. I'm not naming a likely culprit — an N+1 that crept in, a bundle that grew, a missing index — because a ranked list of suspects turns the loop into something that confirms a theory instead of finding one, and I'd read every later measurement through it. And if the slowness is intermittent rather than consistent, that intermittency is a **rate to drive up to certainty**, not evidence about mechanism: a one-in-five slow load means a fix that looks right has a good chance of just looking right. I'd push the rate toward reliable-red before drawing conclusions.

There is a `performance-optimization` skill that lists regressions as a trigger, and I looked at it — it's a checklist of things that are commonly slow, useful once I know *where* the time goes. I'll consult it after the loop localises the problem, not before.

What I need from you to build the loop: how you're seeing the slowness (a page, a specific interaction, a report someone filed), whether it's every load or some, and whether I can hit the deployed environment and the previous release myself. If I can't drive the environment, I'll say so and stop there rather than fall back on reading the diff and reasoning about what looks expensive — that guessing is exactly what this phase exists to prevent.
