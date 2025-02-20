home brew laser printer - 1982

In my tenure at UVA School of Medicine, I became aware of a vendor who was popular with
the professors and graduate students -- the vendor was a photographer who also owned
and operated a graphics arts shop that they used to make their papers visually interesting.
In my discussions with the the vendor about each other's work, I came
to learn that he had a Apple III and a floor standing Xerox 5700 "digital" copying
machine capable of copying on 11x17 size paper.

He asked if I could turn the Xerox machine into a laser printer controlled by the Apple III.

At the time, I was unfamiliar with the Apple computer, and the Xerox machine.  After one visit
to his office where I inspected the "guts" of both the Apple III and the Xerox, I agreed to do
the project.

What I observed in that visit is that the digital copier had a laser drum driven by a digitally
controlled stepper motor, and that the laser element was separated from the digital
motherboard by another circuit board that appeared to only have a simple memory buffer holding
one line of rasterized image data.   I created a new interface to the line buffer allowing
me to read and write its contents, and another new interface to control the drum's stepper
motor.   The initial interface boards and drivers for the Xerox I wrote on a Commodore PET using GPIB
and breadboards over a couple of weekends.  Once I had worked out the kinks, and showed the ability
to print my own digital images, I converted the breadboard circuits to a wire wrapped circuit board which
I assembled myself.

Integration with the Apple III was more difficult ... Apple at the time did not want to release (to me)
the specification on how to integrate an add-on circuit board to their mainboard, and did not want to
release the specification on how to write a custom device driver for their operating system.

Anyhow, I reversed engineered (disassembled into source code) their PRN driver and modified it to control
the GPIB into my custom circuit on the Xerox.   Printing customized raster graphics was the first task,
and I wrote translators for the various image formats used by the graphics shop to convert them to B&W raster.

That first "laser printer" took several weekends in total.   As the next step, I had realized that the XEROX
hardware could be used for color scanning.  I proved the point by adding "read memory" functionality to the
line buffer in the XEROX and let the XEROX do the scanning of a page and allowing it to fill the line
buffer and "step" the drum ... for each line from the XEROX, I read it across the GPIB into the Apple III,
forming a raster of the current color.   I placed different color filters (available for darkroom color separation)
on a single page, and did a full raster scan for each color filter with the original image.

As an end result, I was able to translate several rasters (each from a different filter on the original image),
and combine them into a single image usable by the graphic design software on the Apple III.
The process became trickier at higher resolutions because the original design did not have registration alignment
marks on either the filters or the original images.  I added a requirement for a one inch white margin
around the original image, and a cross-hair registration mark near each corner of the white area.
I used the registration marks (detected by the edge detection algorithm I had previously written for the cursive glyph
scanning system) to compute a trapezoidal coordinate transformation on the image pixels and corrected to
a rectangular set of pixels prior to combining the various color layers.

The graphics shop owner had purchased special displays and hardware for the Apple III that allowed him to edit and
manipulate images up to 4k x 4k and print them directly to 35mm film through another specialized display attachment.
I do not recall the specific vendor for that equipment, but the owner was able to import my color-separated rasters,
manipulate them, and print to 35mm film.   overall I spent maybe a dozen weekends over the summer months
creating the requirements and the designing and implementing the overall solution.

In today's context, I can not get too excited about the tech other than it was generally a decade ahead of its time.
The images produced from scanning were only good for a 9 bit color gamut when downsampled to a 512x512 overall
resolution with a original scanned pixel density of about 300dpi.  I left it to the graphics design shop to choose
the color filters that combined into the image they needed for their 35mm film printer.

Xerox 5700
68000
6502
GPIB
Z80
TMS9900
Apple III
Pascal


