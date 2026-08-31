# Routing

## Verdict

**Primary: `diagnosing-bugs` — invoke first, before any code change.**

The user reported something broken and throwing, with no root cause established. That is
squarely this skill's trigger ("reports something broken/throwing/failing"). The decisive
factor is not the error type but the *intermittency*: 1-in-5 means I cannot yet name the
failing frame, and I cannot verify any fix by observation alone. The work in front of me is
diagnosis, not repair.

## Order

1. **`diagnosing-bugs`** — the whole opening move.
   Get the real stack trace, identify which `.id` on which undefined object, then find the
   knob (network throttle, delayed request, forced pre-resolution state) that converts
   1-in-5 into always-fails. Deterministic repro is the exit condition for this stage.

2. **`browser-testing-with-devtools`** *(conditional, in service of step 1)* — only if this
   is a real browser app I can drive and the chrome-devtools MCP server is configured.
   It is the instrument for step 1, not a separate stage: console errors with stack traces,
   network request timing, and throttling to widen the race window. If there's no driveable
   app, step 1 proceeds from the user's trace and code reading instead.

3. **`test-driven-development`** — after the cause is known, before the fix.
   Specifically the Prove-It pattern: write a test that pins the pre-resolution state and
   fails for the identified reason. On a probabilistic bug this is what carries the
   verification burden, since "I reloaded and it didn't throw" is close to worthless.

4. **`debugging-and-error-recovery`** *(optional)* — if step 1 stalls and I need a more
   formal root-cause procedure to break out of guess-and-check.

## Why not the alternatives

- **Jumping straight to a fix (no skill).** The obvious move is to add `?.` or a guard at a
  plausible spot — auth state, session fetch, provider mount. The failure rate is exactly
  what makes this dangerous: with a 20% reproduction rate, a handful of clean reloads after
  a wrong fix is roughly a two-in-three false pass. It ships an unverified change and
  discards the one piece of evidence (the trace) that would have identified the real site.
  A null-guard also frequently converts a crash into a silent wrong state — a login page
  that renders logged-out instead of erroring is arguably a worse bug.
- **`frontend-ui-engineering`** — this is a login page, but the deliverable is a fixed
  defect, not built or restyled UI.
- **`security-and-hardening`** — auth code is in scope, and a session race can have security
  consequences, but that is downstream of knowing the cause. Premature here.
- **`performance-optimization`** — timing is involved, but nothing is reported as slow. The
  race is a correctness bug that timing exposes.
- **`code-review-and-quality` / `code-simplification`** — no change exists to review, and
  simplification preserves whatever wrong behaviour is present.
- **`incremental-implementation` / `planning-and-task-breakdown`** — this is one defect, not
  a multi-file feature needing decomposition.
- **`interview-me` / `grilling`** — the request is clear enough to act on. The missing
  information (stack trace, correlating conditions) is better obtained by reproducing than
  by interrogating the user, so I ask for it as an accelerator while offering to get it
  myself.

## Note on what I did not assume

I did not commit to a cause. Async session fetch, auth-state subscription emitting
`undefined` first, provider ordering, and a sometimes-present redirect/token param are all
live candidates with different fixes. Naming one before seeing the trace would be a
hypothesis dressed as a diagnosis, and the low reproduction rate would make it hard to
disconfirm.
