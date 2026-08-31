# Routing

## Signal read

The user's message is a bug report: something throws, intermittently, at a known
surface (the login page). The deliverable they want is a fix, but the binding
constraint is that nobody yet knows the cause — and the intermittency (roughly
1 in 5) is the load-bearing detail. It points at ordering/timing rather than a
deterministic logic error, which means a hypothesis-first fix has a high chance
of being wrong-but-plausible, and an unreliable repro means we'd never know.

So the routing decision is: **diagnose before implementing**, and **reproduce
before hypothesising**. Not the reverse.

## Skills, in order

1. **`diagnosing-bugs`** — primary, invoked first.
   Its description is the direct match: "Use when the user says 'diagnose'/'debug
   this', or reports something broken/throwing/failing/slow." The user reports
   something throwing. This is the diagnosis loop for a hard bug, and
   intermittency is exactly what makes it hard. It owns the whole front half of
   the job: establish a reliable reproduction, gather evidence, form and
   discriminate between hypotheses, land on a root cause. Everything else waits
   on its output.

   Chosen over `debugging-and-error-recovery`, which covers similar ground
   ("systematic approach to finding and fixing the root cause rather than
   guessing"). These overlap; `diagnosing-bugs` is the more specifically named
   match for a user-reported symptom and explicitly frames itself as a loop for
   *hard* bugs, which an intermittent race is. I'd run one, not both — running
   both would duplicate the same investigation and produce two competing
   narratives. If `diagnosing-bugs` turned out to be scoped to something
   narrower than I expect once loaded, `debugging-and-error-recovery` is the
   fallback.

2. **`browser-testing-with-devtools`** (or the `chrome-devtools-mcp:chrome-devtools`
   skill) — invoked *inside* step 1, as the instrument, not as a parallel track.
   The bug is in a page load in a browser. The evidence that discriminates
   between the candidate causes lives in runtime state: the sourcemapped stack
   trace, the console error, the network waterfall, the render order. That's
   precisely what this skill exists to get — "inspect the DOM, capture console
   errors, analyze network requests ... verify visual output with real runtime
   data." Reload-until-it-throws is how the repro gets built.

   This is subordinate to the diagnosis skill, not a peer: it supplies evidence,
   it doesn't decide what the bug is. Requires the chrome-devtools MCP server;
   if unavailable, the repro falls back to whatever harness the project has, and
   to an error-tracker trace if one exists.

3. **`test-driven-development`** — after root cause is established, before the fix.
   "Use when ... fixing any bug ... when a bug report arrives." For an
   intermittent failure this is not ceremony: a test that deterministically
   forces the failing ordering is the only way to distinguish "fixed" from "got
   lucky on the reload loop." Write it failing, fix, watch it pass. The
   companion `/test` command notes a Prove-It pattern for bugs, which is the
   same shape.

4. **`incremental-implementation`** — only if the root cause turns out to span
   more than one file (e.g. the fix requires changing how auth state is
   provisioned upstream as well as how the component reads it). If the fix is a
   single-file ordering correction, this is unnecessary overhead and I'd skip it.

5. **`code-review` / `review`** — conditional, at the end, only if the fix turns
   out to be non-trivial or touches auth-adjacent code. A one-line guard doesn't
   need a five-axis review. A change to session bootstrapping does.

## Explicitly not routed

- **`interview-me` / `ask-user-question` / `grilling`** — the task is well enough
  specified to start. The unknowns here (which object is undefined, why
  sometimes) are answerable by investigation, not by asking the user. Asking
  clarifying questions would be offloading work I can do myself. I mention two
  optional accelerants (an existing error-tracker trace, any correlation the
  user has noticed) in the reply, but I don't block on them.
- **`spec-driven-development` / `planning-and-task-breakdown` / `plan`** — this
  is a defect in existing behaviour, not new work needing requirements or a task
  breakdown.
- **`performance-optimization`** — "sometimes" is about correctness under a race,
  not about slowness. Nothing in the report says the page is slow. The timing
  angle is a cause of the crash, not a perf complaint.
- **`security-and-hardening`** — it's the login page, so this is worth a passing
  thought, but nothing in the report suggests an auth bypass or data exposure.
  I'd revisit only if diagnosis showed the undefined object is a session/token
  that's sometimes absent in a way that matters for access control.
- **`code-simplification` / `simplify`** — behaviour is wrong; simplifying wrong
  behaviour preserves it. Wrong phase.
- **`debugging-and-error-recovery`** — deliberately not run alongside
  `diagnosing-bugs`; see step 1.

## Why this order and not the obvious alternative

The tempting route is to jump straight to a fix: the symptom is a well-known
shape, `?.` on the property access makes the exception stop, done in a minute.
I'm rejecting that. Optional chaining on an undefined-during-race object
converts a visible crash into a silently broken render — the page proceeds
without user data, and the failure moves somewhere harder to see. The routing is
built so that the repro comes before the hypothesis and the hypothesis comes
before the edit, precisely because a 1-in-5 bug will happily appear fixed by a
change that did nothing.
