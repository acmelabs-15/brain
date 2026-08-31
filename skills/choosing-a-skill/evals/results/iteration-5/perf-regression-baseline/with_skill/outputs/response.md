Before I say anything about what's slow, I want to be honest that I can't tell you yet — and I'd rather not guess. "Slow since the last deploy" is a diagnosis job, not an optimisation job. If I open with a list of the usual suspects (bundle got bigger, an N+1 crept in, a chatty endpoint), I've picked a cause before measuring, and everything I look at afterwards gets read through that theory.

So the first and only thing I'd commit to now is `diagnosing-bugs` — it covers performance regressions explicitly, and its Phase 1 is the whole point: build a **tight loop** that goes **red** on this specific slowness before naming a mechanism.

**What that looks like concretely:**

1. **Pin down "feels slow."** Which view, which interaction, and slow in what sense — first paint, time to interactive, a specific action that now hangs? "The dashboard" is several different problems.
2. **Get a red-capable command.** One thing I can run repeatedly that comes back pass/fail on a threshold — a scripted load of that view with a timing assertion, a traced request against the slow endpoint, a Lighthouse or DevTools trace run headless. It has to be deterministic, fast, and runnable by me without you driving it. If I can't get one, no Phase 2 — I'd tell you that rather than fall back on reading the diff and reasoning about what looks expensive, which is exactly the failure this phase exists to prevent.
3. **Drive the rate to certainty if it's intermittent.** If it's slow one load in five, that's a rate to push up until the loop is reliably debuggable, not evidence about a cause. A "fix" against a one-in-five symptom has an 80% chance of looking like it worked.
4. **Bisect against the deploy boundary.** The deploy is the best thing you've given me — but as the interval to bisect, not the culprit to assume. With a red loop I can run it against the previous release and walk it forward to the change that flips it. If the loop is red before the deploy too, the deploy is a red herring and we've learned something cheap.

Only once the loop localises where the time actually goes would I reach for `performance-optimization` — and there it's a checklist I consult about the specific bottleneck we found, not a workflow I run at a symptom.

**What I need from you to start:** which page or interaction, roughly when it started relative to the deploy, and whether I can run against a real environment (staging, prod-with-traffic, local with representative data). The next steps depend entirely on what the loop shows.
