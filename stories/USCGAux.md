US Coast Guard Auxiliary - 2010 to present
* Director of Computer Software and Systems (O6 equivalent) - 2012 to 2014



### Overview 
The United States Coast Guard Auxiliary is a branch of the Coast Guard authorized by Congress as an all-volunteer non-military force to patrol waterways within the United States.  Just like the active duty and reserve Coast Guard branches, it reports to the Commandant of the Coast Guard.  In many ways it is similar to the Civil Air Patrol which reports to the Air Force.  The CGAUX, at roughly 30,000 members, is somewhat smaller than the active duty and three times larger than reserve forces, coming in at over one-third of the Coast Guard's available human assets.

### Inception
I initially joined the first week of 2010 at the urging of one of my boating friends.   At the time, I owned a small (24 ft) former military RIB which I frequently used on the San Francisco bay along the waterfronts of San Francisco, Sausalito, Tiburon, Richmond, and Oakland.

My initial goal as a member of the CGAUX was to contribute, as a first responder, to search and rescue (SAR) missions in that general geographic area. I took many training courses to become a qualified boat crew member, and eventually coxswain (small boat captain).  Radio communication, navigation, teamwork, chain of leadership, damage control, life-saving, weather, and many others.  I outfitted my RIB in order to qualify it as a Coast Guard "facility" and started performing regular patrol missions with a small crew of between 3 and 8 people.

As a team lead for boat patrols, I also coordinated patrol orders with the local Coast Guard liaison and took every single available FEMA course on the Coast Guard list, including those on incident leadership.   As a first-responder and first-on-scene, the boat patrol leader became the first "on scene coordinator" until a formal handoff to local law enforcement or other agency.

Over the first year, I participated in dozens of patrols, sometimes 2-3 per week, many on my boat, and many on the boats of other CGAUX members.   Among the patrols we performed, some of them were "event management" for fireworks, airshows, and major boating events.   We also assisted the active-duty Coast Guard in many of their training exercises, including air drops of aid from C130 transport planes, and training with helicopters as on-the-water assets during their rescue swimmer training missions.  We also obtained official orders to participate in regional OPTREX (operational training exercises) with federal, state, and local law enforcement from many agencies.

### Measurements Directorate - 2010 to 2012

During the course of my SAR patrols I became friends with one of the officers who was also a member of the National Staff for the CGAUX.  He was the team lead for the Measurements Directorate which was responsible for all technology supporting business intelligence and operational metrics of the >30,000+ person organization.  This included requirements for deployment of data warehousing and data analytics linked to legacy systems and application of quantitative analytics. For all of the operations of CGAUX.  His position was Division Chief for Measurements (O5 equivalent - like, "LT CDR"), and once he learned of my background and skills he invited me to the position under him of "Branch Chief, Measurements" -- this position required an appointment by the National Commodore of the CGAUX, which after I obtained after an interview process with several heads of departments on the National Staff -- it was a commission, and an honor, to work with the National Staff.

In this new role, which I stayed in for about one year, I was responsible for instrumenting and gathering nationwide operational data from as many different types of missions as possible.  The role also analyzed data regarding volunteer impact on the overall Coast Guard mission, measured in dollars and volunteer hours.  At the time, the CGAUX was donating over one million hours per year to the overall Coast Guard mission, and we estimated the impact at over \$200 million per year in contribution to the CG Mission.   The role required numerous written reports summarizing data for each of the operational missions of CGAUX to be delivered to the various department heads on the National Staff.  Through this process I was able to meet many of the heads of other departments.

At the end of the first year, I was honored and "promoted" to serve as DVC ("Division Chief", O5 equivalent, like "Commander") in charge of all Measurements, Metrics, and Data Analysis for the CGAUX.  This expanded my sphere of connections to the more senior National Staff, such as the Deputy NACOs and ANACOs (roles which are equivalent to O7 and O8, like Lower Rear Admiral and Upper Rear Admiral).  During this year, I also instrumented and collected data from our IT infrastructure, including metrics related to cybersecurity.

### Computer Software and Systems - Department Director - 2012 to 2014

I accepted a promotion to the position of "Director" for the Computer Software and Systems Department (DIR-C) in January 2012.  At that time, the overall department had over four-dozen volunteers on staff, as my former division, the Measurements division, was elevated and moved into its own Department.  The former DIR-C was promoted to ANACO over both the Computer and the Measurements departments.

One of my first tasks was migrating all of the online classes from a legacy system to a more efficient cloud hosted solution.  I always care deeply for all of the stakeholders of a project, and here is the feedback I received when the project was completed.  The 80-day deadline came from the avoidance of a looming multiyear contract renewal.

> "Paul provided excellent support to the Training Directorate during the period from February 2012 to May 2012 as he played a critical role in the successful migration and upgrade to our Learning Management System of environment within a very tight 80-day time frame. His project management leadership and technical web and database developer skills ensured that over 30 legacy courses and 4,000 users were able to be migrated with minimal downtime. In addition he was able to significantly improve the overall user experience by employing web services to allow users to log in via their current credentials instead of requiring an (sic) additional credentials as had been required in the previous system. His efforts were the basis for a robust, stable, and critical training platform that was a key resource for the organization."
-- Dale Fajado, Director, Training Directorate

I also created a new set of systems for hosting all of the other CGAUX cyber infrastructure. By selecting more efficient, less wasteful hardware systems, hosting options, and adapting our legacy software to the new environment (or replacing and rewriting legacy software where necessary), I reduced annual OPEX for hardware by 90%. This cost reduction enabled a departmental headcount reduction of nearly 90%, eliminating redundant roles and shifting resources away from outdated skill sets toward modern system management.

With my new architecture and policies, the upgraded infrastructure incorporated modern digital identity management (AuthN), zero-trust security principles, granular security grants (AuthZ), honeypots, and a web application firewall (WAF) with OWASP filtering. The system also featured SSL termination, load balancing, intrusion prevention (IPS), intrusion detection (IDS), and robust logging and operational metrics—ensuring high security, resilience, and scalability.

All CGAUX internal software systems supporting 30,000 volunteers, along with all public-facing CGAUX websites, were successfully migrated to this new infrastructure with minimal downtime. The result was a fully modernized, secure, and cost-efficient platform that dramatically improved both operational effectiveness and cybersecurity posture.

#### MEMBER DATA SYNCHRONIZATION
As part of my broader infrastructure modernization efforts, I fully automated a two-way synchronization of CGAUX member data between my new systems and the legacy Active Duty Coast Guard system housed in their Kentucky data center.

Prior to this initiative, the pre-2012 system was entirely manual, requiring at least one dedicated IT staff officer (FSO-IT) per flotilla—with over 1,000 flotillas nationwide—to perform tedious, error-prone data synchronization. The process involved:
* Opening the legacy Coast Guard application in one browser window.
* Opening the CGAUX member management system in another.
* Manually copying and pasting updates between the two.
* Making discretionary decisions when data conflicts arose.

Due to technical constraints and security policies, direct API integration with the Coast Guard’s legacy system was not an option, with the only gateway on the active duty side being email. I designed a secure encrypted data exchange over email using PGP key pairs:
* The Lieutenant overseeing the Coast Guard data center and I generated public-private key pairs.
* We exchanged public keys and retained our private keys within our respective data centers to ensure data security.
* Encrypted update files were transmitted via secure email, allowing for automated decryption and processing on my end.
* Key rotation and replacement were still a manual process.

This automation eliminated thousands of hours of manual work per month, enabling daily synchronization—a massive improvement over the previous month-long or worse delays due to inconsistent flotilla-level commitment.

With zero additional personnel, this system was fully operational within a week, vastly improving data accuracy, efficiency, and operational readiness across the CGAUX.

#### ORGANIZATIONAL DESIGN
After downsizing my department to just 5 people, I initiated and delegated the search for new candidates with modern technical skill-sets in the area of mobile devices, social media and global scaling, in addition to the back-end data center skills to revive the department and expand our mission to better serve the boating public and all of our volunteers.

One of the unintended consequences of the downsizing meant that the remaining staff, including myself, had to commit to a rigorous on-call schedule to provide redundant 24/7 coverage for all of our systems.  I commited to two weeks per month of on-call duty for the two years I led the department.  The other remaining staff dedicated at least 1 week a month each, to create a redundant pool where we collectively donated 8 weeks per month in order to have a redundant (2-deep) on-call coverage.

In this context, with a 10-minute SLA, on-call meant keeping the phone and pager on at night, and one could not even attend a movie or be too far from home during on-call hours.  The national policies at the time allowed the Computer department on-call staff, and the nationwide cadre of volunteers standing on radio watch to record 24-hours per day, 168-hours per week of volunteer time accrued.   This policy was agreed with the Active Duty Coast Guard for the computation of nationwide volunteer hours and savings the CGAUX was contributing to their missions,

#### Automation for Time Tracking
During this time, as part of our digital transformation initiatives, my directorate also created a new system for the semi-automated tracking of time for all of our 30,000 volunteers.

Prior to the new system, each active volunteer would create a monthly activity report by filling out a "mission report" log manually, and physically delivering to the FSO-IT staff officer.  Some of the staff officers had adopted their own informal policy of allowing their flotilla members to send them a mission summary via email instead of using the full form.

The new system provided each member with an online portal which allowed them to fill in the form and also assign the correct mission codes for each separate activity.  Our new automated system would then send the online data to the FSO-IT for review and approval instead of heads-down data entry.

This automation eliminated on the order of 50,000-hours of toil per month nationwide by moving the data entry to each member online, off of paper, and allowed the FSO-IT to focus on compliance review instead of error-prone data entry.  After review, the data was aggregated on our systems, and submitted automatically to the Active Duty data center time tracking system.

Over the course of the two years I led the department, we observed improved engagement nationally as we started receiving many mission reports from people who had previously avoided them because of the manual toil.

This initiative was a clear example of our department’s collective effort to modernize operations and enhance both volunteer participation and data accuracy, ensuring that CGAUX’s contributions were fully recognized and efficiently tracked.
