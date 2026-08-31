# Routing

## Order of invocation

1. **`diagnosing-bugs`** — primary, invoked first and immediately.
2. **`browser-testing-with-devtools`** — invoked from within the diagnosis, as the instrument for reproducing and capturing evidence.
3. **`test-driven-development`** — invoked only once the root cause is confirmed, to write the failing regression test before the fix.
4. **`code-review`** / `security-and-hardening` — conditional, only if the root cause turns out to sit in the auth/session path.

## Why

### 1. `diagnosing-bugs` (primary)

The request is "something is broken, sort it out" — a reported failure with an error string and a frequency, and no known cause. That is a diagnosis job, not an implementation job. Its description explicitly covers "the user reports something broken/throwing/failing", which is exactly the shape of this message.

The decisive reason to route here rather than to start editing code is the **intermittency**. One-in-five is the signature of a race, and a race is the bug class where guessing is most expensive: the obvious "fix" (optional chaining, a null guard at the crash site) makes the error message disappear without fixing the ordering, so the page renders in a half-initialised state and the bug reappears later wearing different clothes. The intermittency also destroys naive verification — a fix "confirmed" by loading the page a few times is indistinguishable from luck at p=0.8 per load. A structured diagnosis loop is what forces reproduction-before-hypothesis and evidence-before-fix.

`debugging-and-error-recovery` covers similar ground, but `diagnosing-bugs` is the tighter match: it names the diagnosis loop for hard bugs and triggers directly on "reports something broken/throwing", whereas the other is framed around tests failing and builds breaking. I would not run both — overlapping process skills on one bug produce two competing procedures, not better diagnosis.

### 2. `browser-testing-with-devtools` (instrument, inside the diagnosis)

The failure is a client-side runtime error on a page load, so the evidence lives in a real browser: the console stack trace, the network waterfall showing what resolved when, and the ability to throttle the connection to widen the race window and turn one-in-five into reliably reproducible. This is a *tool* the diagnosis uses, not a competing route — the diagnosis decides what evidence is needed, this skill obtains it. (If the chrome-devtools MCP server were unavailable, the `chrome-devtools-mcp:chrome-devtools` skill or the `claude-in-chrome` path serves the same purpose.)

### 3. `test-driven-development` (after root cause, before fix)

Only invoked once the mechanism is confirmed — the Prove-It pattern: a test that reliably fails on the current code and passes after the fix. For an intermittent bug this is not ceremony, it is the *only* way to demonstrate the fix worked, because absence of the symptom during manual checking is not evidence. Invoking this earlier would be wrong: writing a test before knowing the cause means testing a guess.

### 4. Conditional follow-ups

If the root cause lands in the session/token/auth path — a plausible location, given it is the login page and the undefined thing has an `id` — then `security-and-hardening` and a review pass become relevant, because a race in auth state is a different severity from a race in a display component. Not routed up front; contingent on what the diagnosis finds.

## Deliberately not routed

- **`frontend-ui-engineering`** — this is not UI construction work. Reaching for it would frame a race condition as a rendering problem.
- **`performance-optimization`** — timing is involved, but nothing here is slow; it is incorrect ordering, not a bottleneck.
- **`spec-driven-development` / `planning-and-task-breakdown`** — no new capability is being specified. A known-symptom bug does not need a spec, and routing here would add ceremony ahead of a diagnosis that may take one stack trace.
- **`interview-me` / `grilling`** — the report is underspecified, but not in a way clarifying questions fix better than a stack trace does. The missing information is technical evidence I can obtain myself, not user intent. Interrogating the user about a bug they have already described adequately trades their time for mine.
- **`incremental-implementation`** — presumes a known change to land. Premature.

## The routing mistake this avoids

The tempting shortcut is to skip straight to a fix: the error message plus "sometimes" is enough to guess "unhandled async, add a guard", and that guess is even probably right about the *category*. But it names no line, no object, and no ordering — so the patch would be applied to a location chosen by intuition rather than evidence, and its success measured against a failure that only shows up one load in five. Reproduction first is what makes both the fix and the verification real.
