---
id: DEC-020
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-013#05 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-038, RES-040] # the RES files this decision rests on
decided: 2026-11-05 by Peter
---
# DEC-020: Status, then the prompt, then the router

Peter decided that brain uses a mod on Claude Code, and that a new session runs in this order. First the mod gets the status: what is active, what is not, and the dependencies. It reads the status, not the codebase. The status then sets the prompt: work that is ready or active appears as multiple-choice options, and with none those options are left out. With only one thing to work on, the prompt still appears and says so: continue with it, start something new, or a fill-in answer. The answer then goes to the router automatically. This changes the order in DEC-007, where `using-brain` evaluates first: with the prompt up first, the user still chooses. By RES-040 the fit is `$.ui.ask`, with the question text in the mod and `$.command.run` handing the answer to `using-brain`; its known cost is that text typed once the dialog is open is lost. The agent chose one detail that Peter may overrule: after Esc or a timeout the router still runs, with no answer, which worked in 6 of 6 runs. This rejects a first turn that loads the router before any prompt, and no mod.
