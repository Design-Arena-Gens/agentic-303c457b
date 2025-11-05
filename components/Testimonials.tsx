const testimonials = [
  {
    name: "Dr. Laila Chen",
    role: "Holistic Veterinarian",
    quote:
      "PetWorld STARTUP transforms scattered data into actionable guidance. The predictive care plans keep my clients ahead of health risks.",
    avatar: "LC"
  },
  {
    name: "Mario & Luna",
    role: "Adventure Cat Parents",
    quote:
      "We travel full-time in a van. PetWorld coordinates vaccines, nutrition, and location-based safety alerts—peace of mind wherever we roam.",
    avatar: "ML"
  },
  {
    name: "Avery Johnson",
    role: "Dog Rescue Founder",
    quote:
      "Foster volunteers adore the shared dashboards. Every pup gets consistent routines, and adoption transitions are seamless.",
    avatar: "AJ"
  }
];

export default function Testimonials() {
  return (
    <section className="section" id="stories">
      <div className="mx-auto max-w-3xl text-center">
        <span className="badge">Loved by pet experts</span>
        <h2 className="heading mt-10 text-4xl sm:text-5xl">
          Stories from the PetWorld pack.
        </h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="glass-card flex flex-col gap-6 p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-base font-semibold text-white">
              {testimonial.avatar}
            </div>
            <blockquote className="text-lg text-white/80">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="text-sm text-white/60">
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div>{testimonial.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
