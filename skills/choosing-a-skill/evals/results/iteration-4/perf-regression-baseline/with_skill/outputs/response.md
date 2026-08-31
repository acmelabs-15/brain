Before I say anything about what's slow, I should say what I haven't got: I have no measurement of the dashboard yet, so I don't know where the time is going. A performance regression is a diagnosis, not an optimisation — the honest first move is to build a signal that goes red on the actual slowness, not to hand you a list of things that are commonly slow.

So I'd run `diagnosing-bugs`, which covers performance regressions explicitly, and Phase 1 of it is the whole job right now: get a **tight loop** — one command I've actually run at least once, deterministic, fast enough to run repeatedly, that comes back red on "the dashboard feels slow". Concretely that means pinning down which interaction feels slow (initial load, a filter, a chart re-render?), then getting a repeatable timing on it — a scripted load with the timing captured, or a DevTools trace I can reproduce on demand. If I can't drive the environment to produce the slowness on command, I'll tell you that and stop there rather than switching to reading code and reasoning about what *ought* to be slow. That fallback is exactly the failure this phase exists to prevent.

Two things worth flagging up front:

**"Since the last deploy" is a boundary to bisect against, not a cause to assume.** Once the loop is red, the deploy is a lever — run the same loop against the previous build. If it's green there, the diff between them is a bounded search space. If it's red there too, the deploy is a coincidence and we've saved ourselves from chasing it.

**If the slowness is intermittent, the rate is the first thing to fix, not the mechanism.** If it only feels slow some of the time, a fix that looks right has good odds of appearing to work on the next load purely by chance. I'd drive the rate up — heavier data, throttled CPU or network, whatever reproduces it — until the loop is debuggable, rather than catching one slow load and reasoning from that single capture.

I'm deliberately not naming a likely culprit. I could give you a plausible ranked list — bundle growth, an N+1 on a widget query, a re-render loop — but that would make the loop a device for confirming a theory instead of finding one, and every later reading gets filtered through it. Candidate mechanisms are things the loop should force, not a likelihood ordering.

There's a real collision here worth naming: `performance-optimization` lists performance regressions as a trigger, so it's a genuine match on the words. But it's a checklist you consult once you know where the time goes, not a workflow you run at a symptom. I'll come back to it after the loop localises the problem — at that point its section on whatever layer we've landed in is worth reading.

What I'd want from you to start: which part of the dashboard feels slow, and roughly how slow — every load, or now and then? Next steps depend on what the loop shows.
