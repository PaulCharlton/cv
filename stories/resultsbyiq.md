SGI/Cray Division - 2014
(acquired by HPE)
* Consulting Principal Engineer -

* Rewrite Clustered-XFS filesystem for Mac and WindowsNT clients to overcome 10 years of deferred maintenance.
* Added functionality to support 64-bit build and runtimes.
* Added automated tests and verified removal of over 90% of reported bugs. Solved long-term existing cluster-scope race condition.
* Asked to become paid maintainer Clustered-XFS for Mac and Windows Clients.

#### Scope:
200,000 lines of new code -- common code base for 32/64 bit and common code with NT/Mac version (except for platform specific behaviors, such as support for: Finder or Explorer, and endian converter

#### Challenges:
Most people might think that the hardest challenges for a Mac or Windows client of a Clustered XFS was something like performance, or latency, or memory, or 32 vs 64 bit, or ISA endian.

They would be wrong.  The most complex technical issue by far was normalization and canonicalization of file names.  Issues such as:
* Case sensitivity,
* path parts, 
* maximum length of path parts,
* total length of all path parts,
* characters which were illegal on some file systems,
* directory separators legal on one platform's file system representing something entirely different on a different platform,
* 8 bit vs 16 bit name storage,
* endian of name storage,
* Unicode glyphs -- and their aliases,
* Unicode 8/16/32 encodings,
* Unicode endian,
* locale,
* conversion from code pages such as EBCDIC on Windows,
* collation (sort order) of the same names, glyphs, encodings - but in different human languages,
* ironclad guarantee that the name put into XFS on a given platform would be character-for-character identical on that same platform when enumerated from a directory listing.

Those issues had not been resolved before I started rearchitecting the Cluster-XFS client codebases.  Simple tests such as checking out from a git repo on a Mac, then using the shared files to build on a PC, or on Linux -- UX unsolved prior to my contributions.

### Tech Stack:
```
MacOS block device driver framework
Windows NT block device driver
MacOS Kernel, XNU internals and device drivers for both storage and networking
Windows NT Kernel Internals and device drivers for both storage and networking
added multicore and converted from long-locks to nested fine grained locks
```
 
Vinfolio.com - 2017

* Convert Java/MSSQL application deployment to infrastructure as configuration in the cloud (AWS) write complete CI/CD system which automated vetting and delivery of new code to production in minutes instead of days
* refactor database keys, indices, joins and aggregation for 100x performance improvement on complex queries
* reduce web-facing P99 from 3 seconds to 100 milliseconds

 
Unnamed: High-Mix, Low-Volume (HMLV) Manufacturer (Thailand)

Engaged by CEO to find opportunities to improve efficiency of manufacturing lines, to increase capacity, by finding key bottlenecks and making recommendations on how to remove them.  CEO was looking for 2-3% capacity increase.

After spending a week on the factory floor and interviewing team members from the floor and from parts inventory control, I came to the realization that for each of my dozens of visits at all hours of the day, that half of the assembly lines had "red (stopped)" light visible on average.  After dozens of visits, it was a statistically valid sample.  I brought that finding to the CEO, showing how he could literally double his capacity (100% improvement) by keeping all of the assembly lines moving.  His reaction was completely unexpected to me as a westerner -- he felt embarrassed and told me he could not take my finding to his staff because they had just completed an efficiency audit several months before I arrived, and the results I found would cast shame on all of his direct reports. [sigh, really?]

He implored me (and paid me) to keep looking for other efficiency bottlenecks.  I spent the next week collecting API and interface documentation for all of the automated machines on the floor -- none of which were networked with each other at the time -- and manually harvested all of the machine logs into a database I built from scratch.  Ignoring the fact that half of the assembly lines were not running at any given moment, I analyzed the log data with various frequency domain analysis and noted that 3 times a day, there was a decrease in activity for about an hour each time.  3 hours out of 24 being somewhere around a 15% improvement if addressed, I took this new finding to the CEO, with the receipts to back it up.  He immediately identified the lull in productivity as the "shift changes" in the factory staff, and is reaction was nearly the same as before -- he could not take the finding to his immediate staff because they would feel ashamed because they had already identified shift change as a productivity issue, and claimed to have fixed it, in contradiction to my data from the machines on the floor. [sigh again]

He implored me (and paid me) to keep looking for other efficiency bottlenecks. I spent a day reanalyzing the data I had already collected, and found some bottlenecks where different assembly lines were competing for the same components from inventory.  In each instance, those components were ultra-high value (CPU, RAM) and inventory typically only had one reel of each component, leading to conflicts when more than one assembly line needed the same reel.

I proposed that during setup of a product batch, that the "one reel" from inventory be split onto another reel, with just enough components for that batch, and the next product batch would be able to do its own split from the original reel.  According to the data I had collected, this would be a 3-5% reduction in downtime on competing assembly lines.

I took this result to the CEO and he was happy, and we presented to his staff later that day.
