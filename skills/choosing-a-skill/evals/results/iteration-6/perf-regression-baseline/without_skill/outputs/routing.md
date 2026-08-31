# Routing

## Read of the request

Two signals decide the routing, and they point in different directions:

- **"slow"** — reads like a performance topic, which pulls toward `performance-optimization` / `/webperf`.
- **"after the last deploy"** — this is the load-bearing half. It says *it used to be fast and now it isn't*. That's a **regression with a known suspect window**, not an app that needs tuning. The job is to find what changed, not to make things generally faster.

Routing on the noun ("performance") rather than the shape ("something that worked now doesn't") is the trap here. An optimization pass would happily find real inefficiencies that existed before the deploy and have nothing to do with the complaint — plausible work that doesn't fix the bug.

## Skills I would invoke, in order

**1. `diagnosing-bugs` — primary, invoked first.**
Its description explicitly covers "performance regressions" and reports of something being "slow", and it's a diagnosis loop: reproduce, narrow, form a hypothesis, prove it. That's exactly the shape of "was fine, deployed, now slow." The deploy boundary hands the loop a strong prior — the cause is very likely in that diff — so the loop starts with the delta and bisects toward the culprit. This is the skill that owns the whole investigation.

*(`debugging-and-error-recovery` covers similar ground for unexpected behavior generally; `diagnosing-bugs` is the closer match because it names performance regressions and is scoped as a diagnosis loop rather than error recovery.)*

**2. Measurement tooling, in service of step 1 — chosen once the symptom is pinned down.**
Not a parallel track; these get pulled in *inside* the diagnosis loop to produce the evidence it needs:
- `browser-testing-with-devtools` (or `chrome-devtools-mcp:chrome-devtools`, and `chrome-devtools-mcp:debug-optimize-lcp` if it's specifically slow initial paint) — if the symptom is client-side: a trace and network waterfall separate "waiting on the server" from "burning CPU in the browser" and produce real numbers instead of impressions.
- `performance-optimization` — **only** as a reference for reading the profile and for the fix once the cause is named. Notably its own description mentions suspected performance regressions, which makes it a genuine candidate; I still put it second, because it optimizes rather than localizes, and the localization is the actual open question.

**3. `test-driven-development` — at fix time, if the cause is code.**
Prove-It: a failing benchmark or timing assertion that captures the regression before the fix, so the fix is verified by a number moving rather than by it feeling better.

**4. `observability-and-instrumentation` — follow-up, optional.**
If the diagnosis is hampered by an absence of timing data across the deploy boundary — which is likely, since nobody noticed until it "felt" slow — the durable fix includes instrumenting the dashboard's key paths so the next regression is caught by a graph, not a hunch.

## Skills I would NOT invoke, and why

- **`/webperf` / `web-performance-auditor`** — a broad CWV audit of the current build. It would produce a list of true-but-unrelated findings (unoptimized images, bundle suggestions) with no way to tell which one appeared in the last deploy. Useful *after* the regression is found, or if it turns out there was no regression and the dashboard is just slow generally.
- **`/review` / `code-review`** — reviewing the deploy diff sounds apt, but code review looks for defects against standards, not for the one line that cost 400ms. The diff matters here as a *search space* for the diagnosis loop, not as something to be reviewed.
- **`code-simplification` / `/simplify`** — slow and complex are different problems.
- **`incremental-implementation`, `/plan`, `spec-driven-development`** — no implementation is warranted until there's a named cause.
- **`interview-me` / `grilling`** — the ask is underspecified ("dashboard", "slow"), but these are for eliciting intent behind a build request. One or two targeted questions inside the diagnosis loop covers it; a full interview would be overkill for a bug report.

## Note on this instance specifically

There's no repository and no running dashboard available, so I can't execute the loop — no repro, no diff, no profile. The response therefore describes the plan and states plainly that no cause has been identified, rather than naming a likely culprit. Guessing a cause here (a fat new dependency, a lost index, an N+1) would read as a finding when it's just a list of common causes, and that's exactly the failure mode the diagnosis-first routing is meant to avoid.
