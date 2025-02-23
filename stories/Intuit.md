Intuit Inc. - 2005-2007

### Inception
I had been a loyal user of Intuit's QuickBooks for nearly a decade, starting with my founding of Charlton Innovations, Inc. in 1996.  I updated every year to the latest official release, paying a new license fee each year for that privilege.   In the year 2000, the reliable market leading accounting software turned into an unstable pile of shit from my perspective.  I kept using Quickbooks 1999 until 2002 when the product had partially recovered from its earlier decline.  I always wondered what had happened at Intuit, and its software development practices that they took such a big nose-dive in such a short period of time.

I started to get answers in spring of 2005 when I met one of Intuit's software development managers at a social event unrelated to the company.  I shared with him part of my background and history of disrupting software organizations and products for the better, and my bad experience with the Quickbooks 2000 edition.  He had lived through the internal experience and shared that for the year 2000 product, Intuit had hired literally dozens of new product managers, each of whom wanted to add features to QuickBooks and make a name for themselves.   Those new product managers were supported at the Board of Directors level of the company, and they received funding to grow the engineering team from the 40 who had developed QuickBooks up to the 1999 release, to over 250 total engineers on staff, not counting external consultants, for the QuickBooks 2000 release.  All-in-all, I got the understanding that the extended QuickBooks development team had grown by a factor of 10 in less than one year.

We formed a friendship and continued our discussions for the next few months via semi-weekly breakfast meetings at Buck's, a popular restaurant in Woodside California.  During those discussions he shared that during the rapid scaling, nobody had an overarching architectural view, and that many of the 40 original developers had left the company in disgust, leaving very few who had intimate knowledge of the legacy product.  I also learned that each new product manager was empowered to act with a lot of latitude, basically as a GM with P&L responsibility for their feature set and market segment.  This meant that those product managers hired their own engineering teams and generally "bolted on" their new features to the core product via newly forged APIs that attempted to map the data models of the core product to the data model of the new feature.  I understood that in one year, the product size tripled from 3 million lines of code to 10 million lines of code.

He also shared that the company was building a new team, overseen by the CTO, to replace all of the company's technologies and product implementations with a new SOA (service oriented architecture) and a software portfolio architectural governance structure that allowed sharing of business logic across different products such as Quicken, QuickBooks, and others.  I was sceptical -- in my career, even to this date, I have never seen a large scale 100% rewrite work unless it had a gradual migration strategy at a feature level.

I shared that what I thought was needed was fundamental technology culture change, not rapid tech stack change.  Training everyone to be better at their jobs, starting with a much deeper understanding of the requirements and the end-user domain.   He shared that most of those 250 engineers did not even understand basic accounting, GAAP, FASB, payroll, taxes, asset or inventory management.

### Stealth Mission
We came up with a plan he thought he could sell to his management chain of leadership.  He developed support for the plan internally, and finally came back to me, saying the plan was approved, but that since the plan involved a 2-3 year culture change of the entire engineering organization, that the sponsoring executive had two requirements in addition to our plan: (1) that I onboard as a W2 employee rather than as a B2B consultant, and (2) that I work to apply culture change entirely through earned influence rather than management mandate.

The three year arc we anticipated included targets for agile, lean, TDD (test driven development), MDD (model driven development), peer review at all stages, and creating metrics via observability and core processes to manage both process and code metrics.

### Onboarding

I did not parachute in. It was well known in the company that a hiring moratorium was in place for the entire QuickBooks software team that year. However, Intuit’s leadership was gambling heavily on Merlin, the ambitious SOA rewrite, and concerns were growing internally about the risks of failure—loss of institutional knowledge, fractured engineering teams, and an unproven architectural vision. My presence was Plan B, a hedge against the possibility that Merlin would stall or collapse under its own weight. My friend navigated these concerns at the executive level and secured a “critical replacement requisition” for his team, creating a rare exception to the hiring freeze. I was brought in for a formal interview process the last week of June 2005, meeting with several team members and the architect leading Merlin. By the end of the day, with his team’s debrief behind him, my friend extended a job offer on the spot—an unspoken acknowledgment that my role had already been decided. I officially joined Intuit the Monday after the July 4th holiday, stepping into a company at a crossroads between its legacy foundation and an uncertain future.

My initial title was "staff engineer" -- a role that set an expectation of competence, but not so high a title as to generate envy or jealousy from entrenched engineers.

In my first week, I made a point of walking the three floors of engineering cubicles, introducing myself to as many people as I could find, and asking what they were working on.  I also initiated conversations, many over the water-cooler as it were, with product and engineering management leaders, asking what was keeping them up at night with respect to the upcoming launch of QuickBooks 2006 scheduled for early September 2005, less than 8 weeks in the future.

Nobody, and I mean NOBODY, had the expectation that I would be able to make any contribution to the upcoming release.  The engineering folklore was that it was ok to take a year just learning the codebase and environment before submitting your first commit to version control.  Literally the words from their mouths.   The other expectation I learned on my first two days is that it would take 4-6 weeks to requisition my workstation, and that I should just take it easy in the meantime and read hard-copy manuals and employee handbooks.

I asked my manager what my personal signature authority was for purchases and requisitions, and he stated that as a staff engineer, or a manager at his level, we could authorize up to $15,000 per month, and that was managed via the issuance of a corporate credit card (it was intended to cover travel related expenses, not capital equipment).  He also shared that the corporate card would take weeks to get issued.  On the second day after I arrived at Intuit, having survived the all-day Orientation from HR on Monday, on Wednesday afternoon I went to my favorite computer shop and had them build me a custom workstation that I paid for on my own credit card and took to the office later that evening.  It was a multi-core beast, with lots of memory and a 4 drive raid array, and I added two Dell 32" monitors (I always used one rotated 90 degress to have a 100+ line code editor.) The entire setup was a bit over \$10,000.

Thursday, the next day, quite a few people stopped at my cubicle to admire my rig, which I explained was my personal property at the time (at least it was until I got reimbursed by Intuit.)  My manager was actually concerned about reimbursement, to which my reply was that I could simply quit if anyone denied the reimbursement.  I turned my "manager" into a facilitator, where I made his primary job clearing corporate red tape and getting me invited to strategic meetings held by other teams.

I also made a habit of dropping into conference room meetings just as everyone was arriving (even if I had not been invited), and if anyone asked why I was there, I just said I was a new hire, there to learn what was going on so that I could start contributing.

Anyhow, that Thursday when I had my new workstation, I spent a couple of hours installing of the tooling recommended for QuickBooks engineers, and also my favorite development tools.   I tracked down one of the senior engineers on the SCM build team and had him onboard me to source control (PerForce) and walk me through my first independent build on my own machine.   That first build took over 6 hours - on my monster machine.  I learned that most engineers worked all day, without a build, then kicked off their private build before they went home at night.  I also learned from the SCM engineer that even the official production builds, which they were building with new tooling of Electric Cloud, was taking over one hour on a 20 server cluster.

Later that week, I sat down with one of the "architects" on the Merlin team who had been with the QuickBooks team for over a decade.  He gave me a lecture on feature governance and boundaries in the source code, relating that each large chunk of code (from 100,000 lines to 500,000 lines of code) was "owned" by a single staff engineer who had to approve all commits in "their domain".  Hmmm ... my thought was 20-30 staff engineers, each as a domain expert?  However, I was most interested in identifying the "hardest open bugs" that could drive big impact.  He identified a few, mostly performance related, and another one which he called "the ghosting bug", wherein after QuickBooks had been used on a desktop computer, then closed, that it would often not reopen, or sometimes would open multiple instances in separate windows, and the issue could not be fixed without rebooting the computer.  He stated that the ghosting bug had been present for at least a decade, but everyone downgraded it because of the reboot work-around.  This was a high visibility customer facing bug, and nobody really cared.  I set my sights on fixing this bug for the upcoming 2006 release.

### "Ghosting"

On Monday July 18th I started working on reproducing the ghosting bug inside of a vmware workstation instance.  I later learned that nobody else was using virtual machines for their own private testing -- and the engineering management had deemed such tools an unnecessary licensing expense.  I was finally able to reproduce the bug after reviewing dozens of bug reports and screen shots in the issue tracker.  It was easiest to reproduce on a computer which had multiple versions of QuickBooks installed.

For the target audience of accountants, as opposed to small business owners, QuickBooks had added the ability to install multiple flavors and multiple versions, year over year, in a side-by-side configuration, but intended for only one to run at a time.   This feature allowed accountants to run the same version as each of their clients, without forcing their clients to upgrade to the version used by the accountant.  It also allowed multiple flavors of the same version year to run from the side-by-side installation -- QuickBooks had half a dozen flavors, with disparate feature sets, targeting different vertical markets, from main street to enterprise.

After observing the bug, in situ, I quickly realized that it was triggered by a race condition between processes, and I learned a bit more about the QuickBooks architecture after I inspected file and memory behaviors with the SysInternals toolkit (another set of Windows developer tools that nobody at Intuit was using.)  What I learned about QuickBooks architecture that day was that the desktop icons, for all QuickBooks flavors and versions, launched a shared application (not a DLL library) that was supposed to open the target QBW file, determine its version, then launch the appropriate flavor and version for the specific QBW file.  When it launched the secondary process, instead of passing all of the necessary state as part of the command line, it had a "clever" mechanism of sending a windows message to the new process, using the windows message queues, and waiting for a response to that message.

I had just scratched the surface -- I was observing system level behaviors, but had not yet inspected any code.  The next thing I observed was that the "ghost" or orphan windows were persistent, and one could move the window frame and resize the window, but that nothing else was rendering, implying that none of the child windows had been created or rendered.  I started searching for the program entry point, or "main" in the source code, and two hours later was still unsuccessful at finding the entry point(s) hiding inside of the 10 million lines of code.  I broke for lunch, came back, and changed the linker command line to output all of the module symbol tables for both the launcher and the main quickbooks processes.  From that I learned that the entry point was actually the initializer for MFC (Microsoft Foundations Classes) written in C++.  I had not yet done a debug build with full symbol table support, something that would allow me to single-step through the code and see where the behavior deviated from expectation.

Once I knew I was working with MFC, and an application that was likely a sub-class of CApplication, I went back to SysInternals and started studying the windows message queues to/from those respective processes and recorded the observation that if you named subsequent instances of the launcher L!, L2, L3 ..., and subsequent instances of the application A1, A2, A3 ..., if A1 failed to launch and became a ghost, all subsequent Ax would also be ghosts.  Also, all subsequent Ly were also ghost processes.  That narrowed it down a bit.  Once I made that observation, it was pretty easy to conclude that something, for some reason, was jamming the windows message pump.

With SysInternals, I also observed the "custom message" being sent from the launcher to the application.  I attempted to find that message number in the source code, and failed my searches again (I found it later, wherein the message number I was searching for was not in the source code, but synthesized at compile time by a macro.)

It was also obvious from looking at the SysInternals message logs that the launcher was a headless, windowless, application, and that the QuickBooks application had at least a "main window".  Excited, and not yet ready to go home or kick off a multi-hour debug build from scratch, I continued using the tools I had, such as SysInternals, to observe file system behavior, and after filtering out all of the DLL and application code, I noticed that sometimes, the application process would fail to open the QBW file -- this was the breakthrough moment, and I had not even located the source code yet.

Setting the file monitor filters to only show QBW file access, I learned that the ghosting occurred in a scenario where the launcher opened the QBW file exclusively, the custom message was sent, and the application attempted to open the QBW file exclusively, and failed with a filed locked error.  In the non-ghosting scenario, the launcher opened the QBW file exclusively, the custom message was sent, the launcher closed the QBW file, and the application attempted to open the QBW file exclusively, with success, at which point another message was sent from the application to the launcher, and the launcher would exit.  Finally, clues.

Other than the obvious fact that there was a race condition between processes, I realized that I would not get any farther with external observations, it was time to go home for the night and kickoff the debug build before I left.




I shipped the cure to "ghosting" on the gold master of QuickBooks 2006, defying all expectation, and had begun a new chapter for Intuit.

### Organization

### Code schizo

### Database and Schema

### Agile, TDD, Design review, code review

### Data Structure mess

### New Team initiative

### Measurable Accomplishments

### Aftermath

=========================
```
B-trieve
C
C++
C++ Template Metaprogramming
C#
Visual Basic
VB.NET
.NET
Lua
Java
JavaScript
Embedded Database
SQL
DDL
IDL
code generation
UML
Model Driven Development
Metrics Driven Development
CodeReports
code metrics
Agile
TDD
Peer Design Review
Peer Code Review
Sparx
Enterprise Architect
Automated Schema Validation
MVC
PHP
HTML
Ruby
Google Desktop Search integration
```
