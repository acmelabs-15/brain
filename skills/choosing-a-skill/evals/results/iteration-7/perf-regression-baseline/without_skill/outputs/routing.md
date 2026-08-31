# Routing

## Read of the request

Three signals in one sentence:

- **"slow"** — a performance symptom
- **"after the last deploy"** — a *regression*, with a suspected cause window
- **"tell me what you'd do"** — the user wants an approach, not an immediate silent code change

The regression framing is the load-bearing one. It converts this from an optimization request into a diagnosis request. That distinction drives the whole routing decision.

## Skills I would invoke, in order

### 1. `diagnosing-bugs` — primary, invoked first

Its description is an exact match: *"Diagnosis loop for hard bugs and performance regressions... Use when the user reports something broken/throwing/failing/slow."* It names both halves of this request — performance *and* regression — and the user literally said "slow."

Why this rather than jumping straight to a performance skill: a regression has a known-good prior state, which makes it a *differential* problem. The right question is "what changed between then and now," not "what is suboptimal about this code." A diagnosis loop is built around hypothesis → evidence → confirmation, which is what keeps me from shipping a plausible-sounding optimization that doesn't touch the actual cause. Performance skills are built around finding inefficiencies, and a codebase always has some — that's the trap here.

### 2. `browser-testing-with-devtools` (or the `chrome-devtools-mcp` skills) — conditional, during evidence-gathering

Invoked only once step 1 identifies the frontend as the likely locus, and only if a real instance is reachable. This is the cheapest way to split frontend from backend: if the network panel shows slow server responses, the entire frontend branch of the investigation is closed and no rendering analysis is needed. If a specific Core Web Vital is the complaint, `chrome-devtools-mcp:debug-optimize-lcp` is the narrower fit.

Notably this is where the "no repository, no running dashboard" constraint bites hardest in the real version of this task — it would be gated on the user giving me access.

### 3. `performance-optimization` — conditional, *after* the cause is confirmed, not before

Its description does list "when you suspect performance regressions," so it's a genuine candidate. But it covers a wide surface (frontend, backend, queries, databases) and is oriented toward *fixing*. Running it first inverts the correct order: it would survey for optimization opportunities across the stack before I know which layer is even involved, producing a broad list where I need one specific cause. I'd bring it in once diagnosis has narrowed to a layer, to inform the actual fix.

### 4. `observability-and-instrumentation` — optional follow-up

Its description covers *"production issues are reported but you can't tell what happened from the available data,"* which is precisely the situation if step 1 turns up no usable metrics. Worth raising with the user at the end regardless: a perf regression that reached users undetected means the deploy pipeline has no performance signal, and that's a distinct piece of work.

## Skills I would NOT invoke, and why

- **`webperf` / `web-performance-auditor`** — a broad audit persona. An audit answers "how fast is this?" A regression asks "why is this *worse*?" An audit would return findings, most of which predate the deploy and are therefore noise. Right tool, wrong question.
- **`debugging-and-error-recovery`** — overlaps `diagnosing-bugs`, but its description centers on failures, breaks, and errors. Nothing here is erroring; it's succeeding slowly. `diagnosing-bugs` explicitly names performance regressions, so it wins the collision.
- **`code-review` / `review`** — reviewing the release diff is a *step inside* diagnosis, targeted at performance-relevant changes only. Invoking a full multi-axis review would spend effort on correctness, security, and style findings that are irrelevant to why the dashboard is slow.
- **`code-simplification`** — complexity and slowness are different properties. Simplification explicitly preserves behavior, including the slow behavior.
- **`interview-me` / `grilling`** — the request is underspecified, but the fix is a couple of concrete questions asked inline, not a structured interview. An interview loop here is disproportionate to a "which panel is slow, and can I see the diff" gap.
- **`spec-driven-development` / `planning-and-task-breakdown`** — no new capability is being built. Premature.
- **`choosing-a-skill`** — this is a request to do the work, not a question about the tooling. Its own description excludes this case.

## Shape of the reply

The user asked what I'd *do*, so the opening reply is a plan, not an edit. I give the diagnostic sequence, name the specific regression shapes I'd look for in the deploy, and close by asking for the three things that would unblock actual investigation (which surface, which deploy, can I reach an instance) — while offering to just start from the release diff if they'd rather I ran with it. No fabricated findings: with no repository and no running dashboard, any specific cause I named would be invented.
