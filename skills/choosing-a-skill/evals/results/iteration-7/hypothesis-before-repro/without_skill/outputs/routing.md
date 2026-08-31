# Routing

## What kind of request this is

A bug report, not a feature request. Specifically: an intermittent runtime error
(`cannot read property 'id' of undefined`) with a stated failure rate (~1 in 5 loads),
no stack trace, no reproduction, and no code in front of me.

The critical routing fact is the **intermittency**. A deterministic error would let me
read the code and find it. A ~20% failure rate means the cause varies between loads —
a race, an ordering dependency, or leftover state — and reading source alone will produce
a plausible-sounding hypothesis that I cannot confirm. The trap here is jumping to
"it's probably a race between the auth check and the render" and editing code on that
basis. That is hypothesis-before-reproduction, and with an intermittent bug it is
actively dangerous: after a speculative fix, five clean loads prove nothing, so I'd have
no way to tell a real fix from a coincidence.

So the routing must put **reproduction before hypothesis**.

## Skills, in order

### 1. `diagnosing-bugs` — primary, invoke first
Directly on-trigger: the user reports something broken/throwing. This is the diagnosis
loop for exactly this shape of problem — hard, intermittent, cause unknown. It owns the
discipline that matters here: reproduce first, localise from real evidence (the stack
trace), then confirm the mechanism by making the bug appear and disappear on command
before touching a fix. This is the skill that stops me guessing.

Chose this over `debugging-and-error-recovery`, which is the more general
"something unexpected happened" skill. Both are in range; `diagnosing-bugs` is the
sharper match because its stated triggers are "diagnose"/"debug this"/"something is
throwing" and it is built as a loop for *hard* bugs, which an intermittent one is by
definition. I'd fall back to `debugging-and-error-recovery` only if this turned out to
be a straightforward deterministic failure once I had the trace.

### 2. `browser-testing-with-devtools` (or `chrome-devtools-mcp:chrome-devtools`) — in service of step 1
This is a browser-side runtime error on a login page. The evidence I need — stack trace,
console output, network waterfall for the *failing* load, storage state — only exists at
runtime in a real browser. This is the instrument for the reproduction step, not a
separate line of work. Invoked from inside the diagnosis loop, not before it.

Prefer `browser-testing-with-devtools` as the framing skill; the
`chrome-devtools-mcp:*` skills are the lower-level tool wrappers it would lean on.
If the repo turns out to have its own way to run the app, `run` would cover launching it.

### 3. `test-driven-development` — only after the cause is confirmed
Once I know the mechanism, the fix gets a regression test that fails against current code
and passes after — the Prove-It pattern. This matters more than usual here: with a 20%
failure rate, manual verification is nearly worthless. A test that deterministically
reproduces the condition is the only honest proof the fix worked.

## Skills I deliberately did not route to

- **`test-driven-development` first.** Tempting ("write a failing test for the bug"),
  but I cannot write a test for a failure mode I have not yet identified. TDD comes
  after localisation, not instead of it.
- **`security-and-hardening`.** It's a login page, so auth is involved — but nothing in
  the report suggests a vulnerability rather than a null-safety/ordering bug. Routing
  here would be pattern-matching on the word "login". Worth a second look only if the
  cause turns out to be session or token handling.
- **`performance-optimization`.** A race that depends on load timing can smell like a
  perf issue. It isn't one; timing is the *trigger*, not the defect.
- **`frontend-ui-engineering`.** This is a defect in existing UI, not new UI work.
- **`spec-driven-development` / `plan` / `planning-and-task-breakdown`.** No spec or
  task breakdown is warranted for a single bug of unknown cause. Planning before
  diagnosis would just be a structured version of guessing.
- **`interview-me` / clarifying questions.** I asked for a stack trace and correlation
  data in the reply, but framed as "this would speed things up" rather than blocking on
  it. I can start reproducing without an answer, and a bug report is not an
  underspecified feature request.
- **`code-review` / `code-simplification`.** No diff to review; not a cleanliness problem.

## One-line summary

`diagnosing-bugs` (primary) → `browser-testing-with-devtools` as its instrument for
reproduction and evidence capture → `test-driven-development` for the regression test
once the mechanism is confirmed. Reproduction strictly before hypothesis, because at
1-in-5 a speculative fix cannot be distinguished from luck.
