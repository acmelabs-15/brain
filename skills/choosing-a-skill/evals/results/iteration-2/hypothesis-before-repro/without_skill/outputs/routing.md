# Routing decision

## Skills invoked, in order

1. **`diagnosing-bugs`** — primary, invoked first.
2. **`browser-testing-with-devtools`** (or the `chrome-devtools-mcp:chrome-devtools` skill, whichever is wired up) — invoked from inside the diagnosis loop, as the evidence-gathering instrument.
3. **`test-driven-development`** (`/test`, Prove-It pattern) — invoked once the root cause is identified, before the fix lands.

## Why

### Why `diagnosing-bugs` is the entry point
The request is a bug report: something throws, intermittently, and the user wants it sorted out. That is the literal trigger for `diagnosing-bugs` ("the user says 'diagnose'/'debug this', or reports something broken/throwing/failing"). Crucially, the *intermittency* is what makes a structured diagnosis loop worth the overhead rather than a straight read-and-patch. A one-in-five failure rate is the classic shape of a race condition, and races are exactly the bug class where jumping to a plausible-sounding hypothesis is most dangerous: any hypothesis will appear confirmed four loads out of five whether or not it's correct. The discipline the skill enforces — reproduce and capture evidence *before* forming a hypothesis, then prove the hypothesis by making the failure deterministic — is the specific protection this bug needs.

`debugging-and-error-recovery` covers similar ground. I picked `diagnosing-bugs` because its description names the reported-symptom trigger directly and it is framed as a loop for *hard* bugs, which an intermittent one is. If both are effectively the same lineage, running one is sufficient; running both would duplicate the same loop.

### Why devtools comes second, not first
The evidence I need — the stack frame from a failing load, and the network waterfall for that same load — only exists at runtime in a browser. No amount of source reading produces it, and source reading is precisely the path that tempts you into a hypothesis before you have facts. So devtools is the instrument, subordinate to the diagnosis loop, not a parallel track. It's second rather than first because the diagnosis skill decides *what* evidence to capture; devtools is how it gets captured.

### Why TDD comes last, and why it's not optional
An intermittent bug has no reliable "did that fix it?" signal — reloading five times and seeing no error proves nothing at a 20% failure rate. The Prove-It pattern (a test that fails on the current code, forcing the bad ordering deterministically, then passes after the fix) is the only way to convert "seems better" into "demonstrably fixed". This also guards against regression, since a race that reappears under different load conditions is otherwise invisible.

## Skills deliberately not invoked

- **`interview-me` / `grilling` / `ask-user-question`** — the request is not underspecified in a way that blocks work. I know what throws, where, and roughly how often. Extra context (a stack trace, whether it's prod-only) would help, but I can obtain it myself by reproducing. Stopping to interrogate the user here would be stalling.
- **`spec-driven-development`, `planning-and-task-breakdown`, `incremental-implementation`** — these are for building new work. This is a defect with an unknown cause; there is nothing to plan until the cause is known, and the fix is likely small.
- **`frontend-ui-engineering`** — the login page being frontend is incidental. Nothing about the UI's design, accessibility, or structure is in question; a value is undefined at read time.
- **`performance-optimization` / `webperf`** — timing is implicated, but the symptom is a crash, not slowness. Loading a performance audit would chase the wrong deliverable.
- **`code-review*`, `security-and-hardening`, `code-simplification`** — no diff exists yet, and the report isn't about auth correctness or vulnerability, just an undefined read. Security review would be worth revisiting *after* the cause is known, if the root cause turns out to touch session or token handling.
- **`observability-and-instrumentation`** — a plausible follow-up if the bug proves unreproducible locally and we need production telemetry to catch it. Held in reserve; not needed unless local reproduction fails.

## The judgement call this case turns on

The tempting shortcut is to answer immediately with the most likely cause — "you're rendering before the user/session promise resolves, add a null guard." That answer is probably even directionally right. I'm not leading with it, for two reasons. First, a null guard on the *symptom* line suppresses the crash without fixing the race, so the page silently renders in a wrong state one load in five instead of erroring — strictly worse, because the failure stops being visible. Second, "probably right" is untestable at a 20% failure rate; whatever I guess will look confirmed most of the time. So the routing puts evidence capture ahead of hypothesis, and a deterministic failing test ahead of the fix.
