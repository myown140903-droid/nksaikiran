const About = () => {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-card py-12 lg:py-16">
        <div className="container max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            About This Project
          </h1>
          <p className="mt-2 text-muted-foreground">
            A biodiversity monitoring initiative for Scottish mammals.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The Scottish Mammal Observations project aims to document and track mammal populations across Scotland. By collecting and sharing observation data, we contribute to conservation efforts and help protect Scotland's unique wildlife heritage.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Why It Matters</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Scotland is home to some of the UK's most iconic and endangered mammals. From the Scottish wildcat — Britain's rarest mammal — to recovering populations of pine martens and otters, monitoring these species is crucial for understanding population trends and habitat needs.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">How to Contribute</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Wildlife enthusiasts, researchers, and members of the public can contribute observations. Each sighting record includes the species, location, date, number of individuals, and any relevant notes about behaviour or habitat conditions.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-lg font-semibold text-foreground">Academic Context</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              This website was developed as part of the SET11112 Web Technologies module at Edinburgh Napier University. It demonstrates the use of HTML5, CSS3, and modern web development practices for building data-driven, responsive web applications focused on biodiversity data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
