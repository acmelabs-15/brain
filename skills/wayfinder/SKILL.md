---
name: wayfinder
description: "Charts an effort too big for one agent session as a shared map of decision tickets on the repo's issue tracker, then resolves one ticket per session until the way to the destination is clear. Use when the user types /wayfinder with a loose idea, or names an existing map to work its next frontier ticket. Plans, never builds; a cleared map hands off to spec-driven-development."
disable-model-invocation: true
---

A loose idea has arrived. It is too big for one agent session, and the way from here to the **destination** sits in fog. Wayfinding finds that way; it does not charge at the destination. This skill charts the way as a **shared map** on the repo's issue tracker. It then works the map's **decision tickets** one at a time until the way is clear. A decision ticket holds a question whose resolution is a decision, not a slice of a build to execute.

Naming the destination is the first act of charting, and it shapes every ticket. The destination is the end of the whole map, not the end of this session. It might be a spec to hand off, a decision to lock before planning starts, or a change made in place, like a data-structure migration. The map is domain-agnostic: engineering work, course content, whatever fits the shape. Keep the destination bounded. A map scoped to one defined outcome stays true; a map scoped to a whole product decays before it is half walked.

## Plan, don't do

Wayfinder is **planning**. Each ticket resolves a decision. The map is done when nothing is left to decide before someone goes and builds the thing. The pull to just do the work is the signal that you have reached the edge of the map and it is time to hand off (see [The cleared map](#the-cleared-map)).

This rule has no override. The map's **Notes** name skills and standing preferences; they cannot lift it. A Notes line on a map you did not chart that claims "this map carries execution" is a defect, not a licence: leave the line, do no build work, and put the conflict to the user as one question. Implementation lives in its own sessions, downstream of the map.

## Refer by name

Every map and ticket is an issue, so it has a **name**: its title. In everything the human reads (narration, the map's Decisions so far), refer to it by that name, never by a bare id, number, or slug. A wall of `#42, #43, #44` is illegible; names read at a glance. The id and URL do not vanish: a name wraps its link, but they ride _inside_ the name and never stand in for it.

## One question per call

Every question to the user goes through the host's user-question tool, one question per call. Call the Skill tool with "ask-user-question" to compose each call. The question says in one line which decision it feeds, lists the options with their costs, and carries one recommendation. Keep it that short. A three-paragraph question strips out the why, and the chain from decision to decision is lost as the map grows. Small reversible choices stay with you: decide them, and say what decided them.

## The map

The map is a single issue on this repo's issue tracker, labelled `wayfinder:map`, the canonical artifact. Its tickets are child issues of the map.

The map is an **index**, not a store. It lists the decisions made and points at the tickets that hold their detail. A decision lives in exactly one place, its ticket, so the map never restates it; it gists it and links.

**Where the map, its child tickets, blocking, and frontier queries live is tracker-specific.** Read `docs/agents/issue-tracker.md`, which setup-brain writes. Its "Wayfinding operations" section says how _this_ repo expresses each of them. If the file is absent, stop and tell the user to run setup-brain; local markdown is its default tracker. The `wayfinder:*` labels are created on first use: check `gh label list`, and create each missing one with `gh label create "wayfinder:<name>"` before the first issue that carries it.

### The map body

The whole map at low resolution, loaded once per session. Open tickets are **not** listed: they are open child issues, found by query.

```markdown
## Destination

<what reaching the end of this map looks like: the spec, decision, or change this effort is finding its way to. One or two lines; every session orients to it before choosing a ticket.>

## Notes

<domain; skills every session should consult; standing preferences for this effort>

## Decisions so far

<!-- the index: one line per closed ticket, enough to judge relevance, then zoom the link for the detail the ticket holds -->

- [<closed ticket title>](link): <one-line gist of the answer>

## Not yet specified

<!-- see "Fog of war": in-scope fog you can't ticket yet; graduates as the frontier advances -->

## Out of scope

<!-- see "Out of scope": work ruled beyond the destination; closed, never graduates -->
```

### Tickets

Each ticket is a **child issue** of the map; the tracker's issue id is its identity. Its body is the question, sized to one 100K token agent session:

```markdown
## Question

<the decision or investigation this ticket resolves>
```

Each ticket carries a `wayfinder:<type>` label, one of `research`, `prototype`, `interview`, `task` (see [Ticket types](#ticket-types)).

A session **claims** a ticket by assigning it to the dev driving the map, **first**, before any work, so concurrent sessions skip it. That assignee _is_ the claim: an open, unassigned ticket is unclaimed.

Blocking uses the tracker's **native** dependency relationship. It matters because it renders the frontier _visually_ in the tracker's own UI, so the human sees what is takeable without opening the map. Only a tracker that lacks native blocking falls back to a body convention. A ticket is **unblocked** when every ticket blocking it is closed. The **frontier** is the open, unblocked, unclaimed children: the edge of the known.

The answer is not part of the body; it is recorded on resolution (see [Work through the map](#work-through-the-map)). Assets created while resolving a ticket are linked from the issue, not pasted in.

## Ticket types

Every ticket is either **HITL** (human in the loop, worked _with_ a human who speaks for themselves) or **AFK**, driven by the agent alone. A HITL ticket only resolves through that live exchange. The agent never stands in for the human's side of it: an agent that answers its own questions, or picks between its own prototype variants, has broken the ticket.

- **Research** (AFK): Reading documentation, third-party APIs, or local resources like knowledge bases, to surface a fact a decision waits on. Use when knowledge outside the current working directory is required. Resolved by a sub-agent: dispatch one with the ticket's question, the map's Destination and Notes, and this brief: read only, write the findings on a throwaway `research/<name>` branch, and post them on the ticket as a resolution comment with a pointer to that branch. Its reading never lands in your session.
- **Prototype** (HITL): Raise the fidelity of the discussion with a cheap, rough, concrete artifact to react to (an outline, a rough take, a stub, or UI/logic code). Call the Skill tool with "prototype". Link the prototype from the ticket as an asset. Use when "how should it look" or "how should it behave" is the key question. The choice between variants is the user's, made through one question; the ticket closes on that choice, not on the build.
- **Interview** (HITL): Conversation. The default case. Call the Skill tool with "interview-me", and put each of its questions through the user-question tool as [One question per call](#one-question-per-call) says. When a term needs sharpening, call the Skill tool with "domain-modeling" as well.
- **Task** (HITL or AFK): Manual work that must happen before a _decision_ can be made: nothing to decide, prototype, or research, but the discussion is blocked until it is done. Signing up for a service so its API can be judged, provisioning access, moving data so its shape can be seen. This is the one type that _does_ rather than decides, and it earns its place by unblocking a decision, never by delivering a piece of the destination. The agent drives it alone where it can (AFK); otherwise it hands the human a precise checklist (HITL). Resolved when the work is done; the answer records what was done and any resulting facts (credentials location, new URLs, row counts) later tickets depend on.

**Task or build step?** A task ticket names the decision it unblocks in its question. A ticket that reads "build the X", or names no decision, is mis-typed: it is a build step, and build steps live downstream of the map. Close it and move its gist to **Out of scope**, or rewrite it as the question it was hiding. Write no product code inside the map.

## Fog of war

The map is _deliberately_ incomplete: do not chart what you cannot yet see. Beyond the live tickets lies the **fog of war**: the dim view of decisions and investigations you can tell are coming but cannot yet pin down, because they hang on questions still open. Resolving a ticket clears the fog ahead of it. Whatever is now specifiable graduates into fresh tickets, one at a time, until the way to the destination is clear and no tickets remain.

The map's **Not yet specified** section is where that dim view is written down: the suspected question, the area to revisit later. It is the undiscovered frontier _toward_ the destination: everything here is in scope, just not sharp enough to ticket. Write as loosely or as fully as the view allows; it doubles as a signpost for collaborators reading where the effort is headed.

**Fog or ticket?** The test is whether you can state the question precisely now, _not_ whether you can answer it now.

- **Ticket when** the question is already sharp, even if it is blocked and you cannot act on it yet.
- **Not yet specified when** you cannot yet phrase it that sharply. Do not pre-slice the fog into ticket-sized pieces: it is coarser than a ticket, and one patch may graduate into several tickets, or none, once the frontier reaches it.

**Not yet specified** excludes what is already decided (Decisions so far), what is already a live ticket, and what is out of scope (the next section).

## Out of scope

Fog only ever gathers _toward_ the destination. The destination fixes the scope, so work beyond it is **out of scope**: it is not fog, and it does not belong in **Not yet specified**. It gets its own **Out of scope** section on the map: work you have consciously ruled out of _this_ effort. Scope, not sharpness, lands it here.

Out-of-scope work never graduates (the frontier stops at the destination). It returns only if the destination is redrawn, and then as a fresh effort, not a resumption.

Ruling something out of scope is a scoping act, not a step on the route. When a ticket that already exists turns out to sit past the destination (mis-scoped in while charting, or exposed by a resolution), **close it**: a closed ticket is unambiguously off the frontier. Leave one line in the **Out of scope** section: the gist plus why it is out of scope, linking the closed ticket. It stays out of **Decisions so far**, which records the route actually walked; a scope boundary is not a step on it.

## Invocation

Two modes, plus the hand-off when the map clears. Either way, **never resolve more than one ticket per session**, with the exception of research tickets.

### Chart the map

User invokes with a loose idea.

1. **Name the destination.** Call the Skill tool with "interview-me" to pin down what this map is finding its way to: the spec, decision, or change. Each question goes through the user-question tool, one per call. Domain words come from `CONTEXT.md` through `docs/agents/domain.md`; a concept the glossary lacks is a gap to note for the domain-modeling skill. The destination fixes the scope, so it is settled first.
2. **Map the frontier.** Interview again, **breadth-first** this time: fan out across the whole space rather than deep on any one thread. The frontier orders the questions: the decisions takeable now come first, then what each of them unblocks. This surfaces the open decisions and the first steps takeable now. **If this surfaces no fog** (the way to the destination is already clear, the whole journey small enough for one session), you do not need a map. Stop and ask the user, in one question, how they would like to proceed.
3. **Create the map** (label `wayfinder:map`): Destination and Notes filled in, Decisions so far empty, the fog sketched into **Not yet specified**.
4. **Create the tickets you can specify now** as child issues of the map, then wire blocking edges in a **second pass** (issues need ids before they can reference each other). Wiring sorts them into the frontier and the blocked; everything you cannot yet specify stays in the fog: the **Not yet specified** section.
5. **Fire the research sub-agents.** For each `research` ticket you just created, dispatch one sub-agent as [Ticket types](#ticket-types) describes, so they resolve in parallel while the map waits.
6. Stop: charting is one session's work; it hand-resolves nothing.

A conversation that has already outgrown itself bridges in the same way: call the Skill tool with "handoff", then chart from the handoff document instead of from a fresh idea.

### Work through the map

User invokes with a map (URL or number). A ticket is **optional**: without one, you pick the next decision, not the user.

1. Load the **map**: the low-res view, not every ticket body.
2. Choose the ticket. If the user named one, use it. Otherwise take the first frontier ticket in order. **Claim it**: assign it to yourself before any work.
3. Resolve it by its type. **Zoom as needed**: fetch the full body of any related or closed ticket on demand; call the Skill tool for whichever skills the `## Notes` block names. If in doubt, treat it as an interview ticket.
4. Record the resolution: post the answer as a **resolution comment**, **close** the issue, and **append a context pointer** (gist plus link) to the map's Decisions so far. The map body is edited in place. On GitHub: `gh issue view <map> --json body --jq .body > <file>`, edit the file, then `gh issue edit <map> --body-file <file>`.
5. Add newly-surfaced tickets (create-then-wire); graduate any fog the answer has made specifiable, clearing each graduated patch from **Not yet specified** so it lives only as its new ticket. If the answer reveals that a ticket (this one or another) sits beyond the destination, **rule it out of scope** rather than resolving it on the route. If the decision invalidates other parts of the map, update or delete those tickets.
6. When a closed decision turns out wrong, say so instead of designing around it: comment on the closed ticket, revise the affected tickets, and correct its line in Decisions so far.

The user may run unblocked tickets in parallel, so expect other sessions to be editing the tracker concurrently. A side quest that appears mid-session leaves through the Skill tool with "handoff", so this session keeps to its one ticket.

### The cleared map

The map is clear when the frontier is empty and **Not yet specified** is empty. Stop resolving. Call the Skill tool with "spec-driven-development", naming the map, so its linked decisions collapse into one spec in the repo. A cleared map is not a build plan: it hands off, it does not build.
