Electro Fiber Optic Corp - 1990

Electro Fiber Optic Corp was a mid-size company located near Boston Massachusetts in the late 1980s and early 1990s.   I came to know their sales manager through my connections at the Boston TI99 Users Group.  In my conversations with him, I came to learn that his company had received government contracts for a fairly unique fiber optic lighting solution for airports and toll roads.

One of their contracts was with runway lighting for Boston's Logan Airport, and another contract I became familiar with was the traffic control lighting for the Baltimore Harbor Tunnel.

In both instances, the signs were lighted with fiber optic bundles from a single small lightbox which could be remotely located from the sign, often for maintenance purposes.   Imagine, instead of shutting down lanes of traffic to allow a crew on a bucket truck to change lightbulbs or LED panels, you could have the bulbs serviced by a crew opening a cabinet set safely off the side of the roadway.

Electro Fiber Optics solution had a light box with two 50w halogen bulbs for each fiber bundle.  This allowed an automated fail-over from one bulb to the next when the first bulb burned out at the end of its lifecycle.  Their solution also allowed for message change over by using multiple light boxes to control multiple fiber bundles whose endpoints formed the appropriate messages when lit.

What I was requested to do was to implement a computer control system which could (1) manage message selection, with programmable times of day for each message, (2) remote dial-up to change the messages and check status, (3) automatically dial a control center for help when a bulb burned out, and (4) perform these functions across multiple light boxes.

I chose to implement the control system with a TMS9995 16-bit processor, a TMS9902 serial control chip, and a TMS 9901 i/o controller, along with a set of 100w solid state relays for control of each light box.

I wrote my own bootable operating system from scratch and burned it into the boot EPROM.  I added a command line interpreter to the bootable OS which used the RS232 serial port as its input and also for dial-out for bulb change requests.  I was able to detect bulb failures by a feedback circuit which could discriminate between (a) bulb off, (b) bulb on normally, and (c) bulb on but open circuit due to a failed filament.

This project was solo, and part time over the course of a couple of months.  I was also called on to show employees of Electro Fiber Optic how to configure, compile, burn EPROM so that they could independently add their own new customers.   I was also called into the field a couple of times to train the staff at the Baltimore Harbor Tunnel on the overall operation of the system and show their staff what to expect when they received a call-out from the controller when it reported burned out light bulbs.
==================================
TMS 9900
TMS 9901
TMS 9902
EPROM
Static RAM
RS232
embedded operating system
command line interpreter
automated error reporting
network operating system
