Cisco -- 2008
Consulting Principal Engineer

What happens when the board of directors of a large public company asks why your routers have not gotten
faster even when all of the new routers have multi-core CPU?

When the CTO provides the lame answer that the entire codebase of the router (named IOS) is 30 million lines
of monolithic "C" code which is "not designed to be thread safe", and the CTO needs a budget of tens of
millions dollars and several years to rewrite the code?

I was hired as a consultant by (one of) their VP of Engineering  to provide a proof of concept on how to port the 30 million lines of code from single threaded to preemptible multithread on multi-core processors.

My approach was to first implement fully preemptible and thread safe async message queues in memory.
After analyzing the architecture and call hierarchy of the entire system, I identified several logical components
which were functionally independent of each other with the exception of a handful of function calls.  I changed
each of those function calls into async LPC using the new safe async queues, adding a bit of overhead for
marshalling and unmarshalling of the messages, but allowing the logical components to run as separate threads.

In the first POC (week 1) those logical components were (1) inbound packets, (2) filtering and routing,
(3) outbound packets, and (4) system overhead such as heap management.

In the second POC (week 2) via iteration on the 4 new logical components, showed how to break those into
even smaller components (2 dozen or so) using the same strategy of replacing compiler/linker based function calls with async LPC.

Result -- the system was able to keep all cores and threads nearly saturated, allowing near-linear scaling
of router performance with respect to the number of cores and hyperthreads within the router.

========================================

CISCO IOS
8086
Intel Core2
Intel Pentium
