const data = [
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Required",
        "Description": "Ensure ramps are provided at all entrances for wheelchair accessibility.",
        "ADA Reference": "ADA Standards §206.4",
        "WCAG Reference": "N/A",
        "Global Reference": "ISO 21542:2011 §7.1",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Required",
        "Description": "Elevators must be functional, accessible, and marked with Braille signage.",
        "ADA Reference": "ADA Standards §206.6",
        "WCAG Reference": "N/A",
        "Global Reference": "ISO 21542:2011 §9.2",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Required",
        "Description": "At least one accessible restroom per building/floor. Clearly marked with Braille signage.",
        "ADA Reference": "ADA Standards §213",
        "WCAG Reference": "N/A",
        "Global Reference": "ISO 21542:2011 §13",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Required",
        "Description": "Pathways must be clear of obstacles and wide enough for wheelchair access.",
        "ADA Reference": "ADA Standards §403",
        "WCAG Reference": "N/A",
        "Global Reference": "ISO 21542:2011 §7.2",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Required",
        "Description": "Ensure accessible seating areas with sightlines comparable to general seating.",
        "ADA Reference": "ADA Standards §221",
        "WCAG Reference": "N/A",
        "Global Reference": "ISO 21542:2011 §14.1",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Required",
        "Description": "Provide signage with Braille and raised characters for all rooms/areas.",
        "ADA Reference": "ADA Standards §703.3",
        "WCAG Reference": "N/A",
        "Global Reference": "ISO 21542:2011 §10",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Required",
        "Description": "Clearly mark accessible emergency exits and provide evacuation chairs.",
        "ADA Reference": "ADA Standards §207",
        "WCAG Reference": "N/A",
        "Global Reference": "ISO 21542:2011 §11",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Best Practice",
        "Description": "Provide accessible parking spaces near event entrances.",
        "ADA Reference": "ADA Standards §208",
        "WCAG Reference": "N/A",
        "Global Reference": "ISO 21542:2011 §8.1",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Best Practice",
        "Description": "Designate a service animal relief area near the event venue.",
        "ADA Reference": "ADA Standards §36.302",
        "WCAG Reference": "N/A",
        "Global Reference": "N/A",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Best Practice",
        "Description": "Provide a designated space for those with sensory sensitivities or needing a break from the event environment.",
        "ADA Reference": "N/A",
        "WCAG Reference": "N/A",
        "Global Reference": "N/A",
        "Why Not Required": "A quiet room is not explicitly mandated by laws that focus on removing physical access barriers. However, it's seen as crucial for providing a truly inclusive experience."
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Industry Leading",
        "Description": "Provide mobility assistance (wheelchairs, golf carts, etc.) for attendees.",
        "ADA Reference": "N/A",
        "WCAG Reference": "N/A",
        "Global Reference": "N/A",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Industry Leading",
        "Description": "Designate an accessibility concierge to assist attendees with needs.",
        "ADA Reference": "N/A",
        "WCAG Reference": "N/A",
        "Global Reference": "N/A",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Required",
        "Description": "Accessible routes, entrances, and facilities.",
        "ADA Reference": "ADA Title III - §36.304",
        "WCAG Reference": "N/A",
        "Global Reference": "ISO 21542:2011 §7",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Physical Accessibility",
        "Event Type": "In-Person",
        "Compliance Level": "Industry Leading",
        "Description": "Virtual/augmented reality previews of accessible routes.",
        "ADA Reference": "N/A",
        "WCAG Reference": "N/A",
        "Global Reference": "N/A",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Required",
        "Description": "Ensure event website/platform meets WCAG 2.1 AA standards.",
        "ADA Reference": "N/A",
        "WCAG Reference": "WCAG 2.1 AA",
        "Global Reference": "EN 301 549 v2.1.2",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Required",
        "Description": "Provide captions for pre-recorded and live video content.",
        "ADA Reference": "ADA Standards §36.303",
        "WCAG Reference": "WCAG 2.1 §1.2.2, §1.2.4",
        "Global Reference": "EN 301 549 v2.1.2 §7.1",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Required",
        "Description": "Ensure all online forms are accessible via keyboard navigation and screen readers.",
        "ADA Reference": "ADA Standards §36.302",
        "WCAG Reference": "WCAG 2.1 §1.3.1, §2.4.3, §3.3.2",
        "Global Reference": "EN 301 549 v2.1.2 §9.1",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Required",
        "Description": "Ensure compatibility with screen readers, magnifiers, and other assistive tech.",
        "ADA Reference": "ADA Standards §36.303",
        "WCAG Reference": "WCAG 2.1 §4.1.1, §4.1.2",
        "Global Reference": "EN 301 549 v2.1.2 §7.2",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Best Practice",
        "Description": "Ensure all interactive elements are keyboard-navigable.",
        "ADA Reference": "N/A",
        "WCAG Reference": "WCAG 2.1 §2.1.1",
        "Global Reference": "EN 301 549 v2.1.2 §9.1",
        "Why Not Required": "Laws often focus on accessibility in general, not specific technical implementations. WCAG provides actionable guidelines that may exceed current legal minimums."
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Best Practice",
        "Description": "Provide alt text for all images and multimedia elements.",
        "ADA Reference": "N/A",
        "WCAG Reference": "WCAG 2.1 §1.1.1",
        "Global Reference": "EN 301 549 v2.1.2 §9.2",
        "Why Not Required": "While the concept of equivalent alternatives is mandated, the specifics of alt text quality can be subjective and open to interpretation."
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Best Practice",
        "Description": "Ensure all PDF documents are accessible (tags, reading order, etc.).",
        "ADA Reference": "N/A",
        "WCAG Reference": "WCAG 2.1 §1.3.1",
        "Global Reference": "EN 301 549 v2.1.2 §10.1",
        "Why Not Required": "PDF accessibility is complex. Laws might outline the principle but lack detailed technical requirements found in resources like WCAG."
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Industry Leading",
        "Description": "Provide a video of the sign language interpreter for online events.",
        "ADA Reference": "N/A",
        "WCAG Reference": "WCAG 2.1 §1.2.5 (extension)",
        "Global Reference": "N/A",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Industry Leading",
        "Description": "Provide audio descriptions for multimedia content.",
        "ADA Reference": "N/A",
        "WCAG Reference": "WCAG 2.1 §1.2.5",
        "Global Reference": "EN 301 549 v2.1.2 §7.3",
        "Why Not Required": "N/A"
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Best Practice",
        "Description": "Websites and digital platforms need to be accessible.",
        "ADA Reference": "N/A",
        "WCAG Reference": "WCAG 2.1 AA",
        "Global Reference": "EN 301 549",
        "Why Not Required": "General anti-discrimination laws apply but may not have detailed web accessibility requirements. Evolving case law and standards like WCAG 2.1 AA provide much-needed clarity."
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Best Practice",
        "Description": "Screen reader-friendly, keyboard-navigable.",
        "ADA Reference": "N/A",
        "WCAG Reference": "WCAG 2.1 (throughout)",
        "Global Reference": "EN 301 549 v2.1.2 §9.1",
        "Why Not Required": "WCAG 2.1 AA goes beyond basic legal requirements to define detailed technical implementations for optimal screen reader compatibility."
    },
    {
        "Aspect": "Digital Accessibility",
        "Event Type": "Virtual",
        "Compliance Level": "Industry Leading",
        "Description": "Conduct regular accessibility audits.",
        "ADA Reference": "N/A",
        "WCAG Reference": "N/A",
        "Global Reference": "N/A",
        "Why Not Required": "While audits are highly recommended for proactive compliance, they might not be a specific legal requirement unless required by specific regulations or grants."
    }
];

// Function to filter data
function filterData(aspect, eventType, complianceLevel) {
    return data.filter(item => 
        (!aspect || item.Aspect === aspect) &&
        (!eventType || item['Event Type'] === eventType) &&
        (!complianceLevel || item['Compliance Level'] === complianceLevel)
    );
}

// Example usage
const filteredData = filterData('Physical Accessibility', 'In-Person', 'Required');
console.log(filteredData);
