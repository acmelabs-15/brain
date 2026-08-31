"Feels slow after the last deploy" is a regression hypothesis, not a measurement yet — so I want to treat this as a diagnosis job first and an optimization job second. The trap here is jumping straight to plausible-sounding fixes (add caching, memoize the table, add an index) before we know whether the deploy actually caused it, and then "fixing" something that was already slow last month.

Here's how I'd run it:

**1. Pin down the observation.** Slow where, exactly — initial page load, a specific widget, an interaction after the page is up? And slow for everyone or just some accounts? "The dashboard" usually contains several very different performance stories, and each has a different suspect list.

**2. Confirm the deploy is actually the boundary.** Compare the same measurement before and after the deploy timestamp — p50 and p95, not averages, since a regression that only hits heavy accounts hides completely in the mean. If the numbers were already climbing before the deploy, this is drift and we're chasing the wrong change.

**3. Split frontend vs backend before touching code.** One load with the network panel and a performance trace answers this in minutes. If server response time is flat and the browser is busy, it's a rendering or bundle problem. If the browser is idle waiting on responses, it's the backend or the queries, and the frontend work would have been wasted.

**4. Bisect the deploy against that measurement.** Once we have a number that reproduces, the diff in that deploy is a finite list. Attribute the regression to a specific change rather than to a general theory about the code.

**5. Only then fix,** and re-measure the same number to prove the fix landed — plus leave the measurement in place so the next regression shows up as a graph rather than as a feeling.

Two things worth flagging now: if there's no before/after telemetry to compare against, step 2 becomes guesswork and the first real deliverable is instrumentation, not a fix. And "feels slow" sometimes turns out to be a p99 affecting a handful of large accounts while the median is unchanged — worth ruling in or out early, because it changes the whole shape of the fix.

Point me at the repo and the deploy (or the dashboard URL) and I'll start at step 3, since that's the cheapest step that eliminates half the search space.
