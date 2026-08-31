# Routing

## Skills I would invoke, in order

**1. `observability-and-instrumentation` — invoke immediately, before touching any code.**

This is a direct description match: "Use when adding logging, metrics, tracing, or alerting. Use when production issues are reported but you can't tell what happened from the available data." Both halves of the user's message land on it — they're adding logging, and they're doing it because production issues are opaque. There is no closer skill in the installed set.

Critically, this is a *build* request, not an *advise* request. The user said "can you add proper logging" — they want instrumented code in their repo, not an essay about observability principles. So the skill is loaded to shape *how* I instrument (event taxonomy, correlation IDs, structured fields, cardinality discipline, what not to log), and then I actually write the code. The failure mode to avoid here is loading an observability skill and producing a strategy document instead of a diff.

**2. `incremental-implementation` — invoke once I'm writing the changes.**

"Use when implementing any feature or change that touches more than one file." Checkout instrumentation is inherently multi-file: the flow itself, the payment-provider boundary, a logger/context module for the correlation ID, probably middleware where the ID is minted. This keeps it landing as reviewable steps — one path instrumented and shown as a diff, pattern confirmed, then applied across the rest — rather than one enormous change that's hard to review and hard to back out.

**3. `security-and-hardening` — consulted, narrowly, for the redaction rules.**

Checkout means payment instruments and personal data. "Use when personal data or privacy compliance (GDPR, CCPA) is involved" applies squarely. I don't need the full hardening pass, but I want its guidance on what must never reach a log sink, because logging a PAN or CVV is a compliance incident that's expensive to unwind once shipped and archived. This is a targeted consult, not a full-scope invocation, and it should not expand into a general security review of checkout unless the user asks.

## Skills I would NOT invoke, and why

- **`diagnosing-bugs` / `debugging-and-error-recovery`** — tempting, because the surface phrasing is "checkout keeps failing" and these skills key on "reports something broken/failing." But the user has explicitly told me the diagnosis is currently *impossible*: there's no data to reason from. A diagnosis loop with no evidence produces speculation, which is exactly the trap here. Instrumentation is the prerequisite. These skills become correct on the *next* request, once logs exist and there's something to reason about — and I'd say so then.
- **`spec-driven-development` / `planning-and-task-breakdown`** — disproportionate. This is a well-understood, bounded instrumentation change, not an ambiguous new capability needing a spec. Routing here would convert a concrete ask into ceremony.
- **`interview-me` / `grilling`** — not warranted. The ask is clear in intent. I have two genuine unknowns (logging stack, existing failure signal), and those belong in the opening reply as questions I'll proceed without if needed — not as a structured interview that stalls a straightforward job.
- **`test-driven-development`** — not the driver for instrumentation. Log statements aren't behaviour to drive out with tests. It would become relevant if the work grows a real unit worth testing, such as a redaction helper — which is genuinely test-worthy, since a redaction bug is silent and consequential.
- **`observability` → `shipping-and-launch`** — the monitoring/alerting checklist is a plausible follow-on once the events exist and someone wants alerts on them, but it's out of scope for the opening move.

## Why the reply is shaped the way it is

I answer with a concrete plan and start of work rather than a wall of questions, because the request is unambiguous in what it wants. But I lead with the two design decisions that are expensive to reverse — correlation IDs and structured fields versus prose — because getting those wrong means re-instrumenting later, and I flag the redaction constraint before writing code rather than after. The two questions I do ask (logging stack, any existing failure signal) genuinely change the output; I offer to proceed without answers so the user isn't blocked on replying.
