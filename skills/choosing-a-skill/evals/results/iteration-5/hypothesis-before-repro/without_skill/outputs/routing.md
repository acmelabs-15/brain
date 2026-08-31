# Routing

## Read of the request

A bug report, not a feature request: a concrete runtime error ("cannot read property 'id' of undefined") that is **intermittent** (~1 in 5 loads). Two facts drive the routing:

- **It is a diagnosis problem before it is a fix problem.** The user described a symptom, not a cause. I have no stack trace, no file, no repro. Any skill that starts writing code is premature — the correct first move is to reproduce and locate, not to hypothesize a cause and patch it.
- **The failure is intermittent and browser-side.** ~20% failure rate points at ordering/timing or data-shape variance, which is only visible in real runtime state: console, network waterfall, load ordering. Static code reading alone will produce a plausible-but-unverified story.

So the routing is: diagnose → reproduce in a real browser → fix under test. Not: jump to a skill named after the surface area (frontend UI) or the ultimate deliverable (a fix).

## Skills I would invoke, in order

### 1. `diagnosing-bugs` — primary, invoked first
Its description covers exactly this trigger: the user reports something broken/throwing. This is a hard bug (intermittent, no repro), which is what that skill's diagnosis loop is for. It sets the discipline I most need here: reproduce before hypothesizing, isolate the variable that differs between passing and failing loads, and confirm the mechanism rather than accepting the first plausible cause. With a one-in-five bug, that discipline *is* the work — the main failure mode is shipping a `?.` that hides the crash while leaving the real defect in place.

I picked this over `debugging-and-error-recovery`, which has an overlapping description ("behavior doesn't match expectations… systematic approach to finding the root cause"). They are near-duplicates for this task; `diagnosing-bugs` is the more specific match because its trigger language names the exact user phrasing ("reports something broken/throwing") and it is scoped to *hard* bugs, which an intermittent one is. I would not run both — that's the same pass twice.

### 2. `browser-testing-with-devtools` (or the `chrome-devtools-mcp:chrome-devtools` skill) — as the evidence-gathering step inside the diagnosis
Invoked once diagnosis reaches "reproduce it". A login page failing intermittently on load is diagnosable only from runtime data: the console stack trace, the network request ordering, whether a session/user fetch resolved before render. This skill is the instrument, not a parallel investigation — it serves step 2 of the diagnosis loop. Network throttling here is the specific lever that tends to convert an intermittent race into a deterministic one, which is the highest-value single action available.

Contingent, not unconditional: if the stack trace and a `git log` immediately identify the cause (say, a recent change to the auth bootstrap), I would skip straight to the fix rather than instrument a browser for its own sake.

### 3. `test-driven-development` — for the fix
Its description names this case directly: "fixing any bug… when a bug report arrives". Once the cause is known, write a test that fails on current code and reproduces the identified condition, then fix. For an intermittent bug this matters more than usual: without a test that forces the bad ordering or the bad data shape, nobody can tell a real fix from one that merely lowered the odds. The `test` command's Prove-It pattern is the same tooling if the user prefers the slash-command route.

## Skills I deliberately did **not** route to

- **`frontend-ui-engineering`** — matches the surface (a login page in a browser) but not the job. It builds and modifies interfaces; I am not being asked for UI work, I'm being asked why one throws.
- **`performance-optimization` / `webperf`** — "only sometimes, one in five" can read as timing-flavoured, but this is a correctness crash, not a slow page. Wrong axis.
- **`code-review` / `review` / `code-review-and-quality`** — reviews a diff or a scope of changes. There is no change to review; there is a defect to find.
- **`incremental-implementation`, `planning-and-task-breakdown`, `spec-driven-development`** — all assume known work to be broken down. Scope here is one defect, unknown cause. Planning ahead of diagnosis would be planning a fix I can't yet name.
- **`security-and-hardening`** — "login page" pattern-matches to auth/security, but the reported issue is a null-reference crash, not a vulnerability. If diagnosis turns up something like session data leaking across users, I'd bring it in then; not on the strength of the word "login".
- **`debugging-and-error-recovery`** — deduplicated against `diagnosing-bugs` as above.
- **`interview-me` / `grilling`** — the ask is clear enough to start. I need runtime evidence, not a requirements interview; the two concrete things I ask for in my reply (stack trace, an environment to reproduce in) are inputs to diagnosis, not a scoping conversation.

## Why I ask two questions in the opening reply rather than starting immediately

I am not asking the user to specify the work — that's clear. I'm asking for the two inputs that are cheaper to receive than to derive: a stack trace (which collapses most of the hypothesis space in one step) and access to a runnable environment (without which step 2 is impossible). I still commit to a plan in the same message so the user isn't blocked on answering, and I offer to start hammering a URL if they'd rather I just go.
