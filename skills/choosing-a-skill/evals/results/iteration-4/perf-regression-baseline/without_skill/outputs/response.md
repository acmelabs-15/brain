"Feels slow since the last deploy" is a regression report, and the useful move is to treat it as one: find what changed and prove which change causes the slowdown, rather than start optimizing plausible-looking code. Nothing I say below is measured yet — I haven't looked at the dashboard or the deploy.

Here's how I'd work it:

**1. Pin down the symptom before touching code.** Slow can mean several different things and they have disjoint causes: slow first paint on load, slow navigation between views, a spinner that sits there while data loads, or janky interaction once the page is up. I'd rather observe it than guess — I'll open the dashboard in the browser with DevTools, record a trace of the slow path, and look at where the time actually goes: network waterfall, main-thread work, and the specific request or render that dominates. If you can tell me which screen and which action feel slow, that narrows the trace a lot.

**2. Bisect against the deploy.** The strongest evidence available is that there's a before and an after. I'd diff the deploy — commits, dependency changes, config and feature-flag changes, infra changes — and compare the same trace against the previous build. A change that reproduces on the new build and not the old one is a cause; a suspicious-looking function that's the same in both is not.

**3. Only then decide what to fix.** The fix depends entirely on which layer the time is in — a payload that got bigger, a query that lost an index or went N+1, a bundle that grew because something got pulled into the main chunk, a render loop that lost its memoization, a cache or CDN header that changed. Each of those has a different fix and there's no point choosing one before the trace says which it is.

**4. Guard it.** Once we know the cause, I'd want a number attached to it — a measurement of the slow path before and after the fix — and ideally a budget or check so the same regression can't land silently again.

Two things that would speed this up: which part of the dashboard feels slow and what you're doing when it does, and whether I can run the app locally (or hit a staging URL) plus see the repo and the deploy diff. If there's any monitoring — server timings, RUM, error rates — the graphs around the deploy timestamp often identify the layer in one glance.

Want me to start with the browser trace, or with the deploy diff?
