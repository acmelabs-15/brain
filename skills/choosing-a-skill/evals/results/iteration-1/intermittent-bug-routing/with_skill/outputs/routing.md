# Routing decision

## Skill to invoke

**`diagnosing-bugs`** — and nothing else, at least until it has run.

## Why

The routing table in `choosing-a-skill` maps this directly:

| The job | Route |
| --- | --- |
| Something is broken and you don't know why | `diagnosing-bugs` |

The user's request is that row almost verbatim: something throws, they don't know why, and the "one in five" detail is the explicit statement that the cause is unknown. If they had known the cause it would have been a one-line fix and the route would have been "Nothing. Just do it."

`diagnosing-bugs` is Lineage B (Matt Pocock family) — a **workflow to execute step by step**, not a reference to consult. It is also one of the eight Lineage B skills without `disable-model-invocation`, so invoking it here is well within its intended use.

The load-bearing part is Phase 1: build a **tight loop** that goes **red** on this specific bug — one command, already run at least once, deterministic, fast, agent-runnable. The skill is explicit that reading code to build a theory before that command exists is the exact failure it prevents, and that there is no Phase 2 without a red-capable command.

That discipline matters far more than usual here. A 1-in-5 intermittent bug is the pathological case for fix-and-eyeball verification: any change at all has an 80% chance of looking successful on the next load. Without a loop that forces the failure on demand, neither I nor the user can tell a fix from a coincidence. So the intermittency is not a complication to work around — it is the reason this skill is the right route and the reason Phase 1 gets the effort.

## Order

1. `diagnosing-bugs` — full six phases, Phase 1 (tight loop) gated before any theorising.
2. **Then, only after the loop is red and the root cause is named:** `test-driven-development`, to land the fix. The routing table's "a contained change you already understand" row applies at that point and not before — the diagnosis is what converts this into a change I understand. In practice the red loop from Phase 1 often *is* the failing test, so this is a continuation rather than a fresh start.

## Skills deliberately NOT invoked

- **`debugging-and-error-recovery`** (Lineage A) — a name-level match, but it is a 180–500 line encyclopedic checklist. Lineage A is reference you consult for a section, not a workflow you run. `diagnosing-bugs` is the Lineage B workflow that actually drives a loop, and it is the one the routing table names.
- **`browser-testing-with-devtools` / `chrome-devtools-mcp:chrome-devtools`** — plausible instruments for capturing the console trace and throttling the racing request, and I may reach for DevTools *inside* Phase 1. But they are tools in service of the loop, not the route. Leading with them would mean poking at the browser before deciding what red looks like.
- **`spec-driven-development`, `grilling`, `planning-and-task-breakdown`, `/ship`, five-axis review** — pure ceremony for a bug fix. The skill file names this as the collection's dominant failure mode: an interview, a spec, a ticket breakdown and a five-axis review on a change that needed twenty minutes. Skipping them is a normal decision.
- **`security-and-hardening`** — the words "login page" pull toward it, but the reported defect is a null-dereference render race, not an auth vulnerability. Worth a section-level consult only if diagnosis turns up something that actually touches session handling.
- **`interview-me` / clarifying questions** — the request is specific enough to start. I ask for the stack trace as an accelerator inside the diagnosis, not as a gate on beginning.
