import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const cities = [
    { name: "Boston", state: "MA" },
    { name: "Philadelphia", state: "PA" },
    { name: "Delaware Beaches", state: "DE" },
    { name: "Maryland Beaches", state: "MD" },
]

export default function About() {
    return (
        <main className="w-full">

            {/* Hero */}
            <section className="w-full py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-6 max-w-[780px]">
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
                        Built for people tired of going to the same places
                    </h1>
                    <p className="text-muted-foreground md:text-xl/relaxed">
                        To The Pub started with a simple frustration, too much scrolling, not enough doing.
                    </p>
                </div>
            </section>

            {/* Origin Story */}
            <section className="w-full py-12 md:py-20 bg-[var(--charcoal-gray)]/20">
                <div className="container px-4 md:px-6 mx-auto max-w-[720px] space-y-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Where it started</h2>
                    <p className="text-muted-foreground md:text-xl/relaxed">
                        Every time my friends and I wanted to try somewhere new, 
                        we&rsquo;d end up jumping between Google Maps, bar websites, and Instagram —
                        spending more time searching than actually going out.
                        Great spots were out there; finding them just shouldn&rsquo;t be this hard.
                    </p>
                    <p className="text-muted-foreground md:text-xl/relaxed">
                        I looked for an app that could pull it all together — open bars, upcoming events, what&rsquo;s
                        happening tonight — and couldn&rsquo;t find one that did it well. So I built it.
                    </p>
                </div>
            </section>

            {/* Where We Are */}
            <section className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Starting close to home</h2>
                        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
                            We&rsquo;re growing city by city, starting with the areas we know best.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 max-w-[800px] mx-auto">
                        {cities.map((city) => (
                            <div
                                key={city.name}
                                className="rounded-lg border border-[var(--light-gray)]/30 p-5 text-center space-y-2"
                            >
                                <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit mx-auto">
                                    <MapPin className="h-5 w-5 text-[var(--vibrant-teal)]" />
                                </div>
                                <p className="font-bold">{city.name}</p>
                                <p className="text-sm text-muted-foreground">{city.state}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="w-full py-12 md:py-20 bg-[var(--charcoal-gray)]/20">
                <div className="container px-4 md:px-6 mx-auto max-w-[720px] space-y-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What we&rsquo;re building</h2>
                    <p className="text-muted-foreground md:text-xl/relaxed">
                        To The Pub is a nightlife discovery platform for both sides of the bar. For people going out,
                        it means spending less time searching and more time having a good one. For venues, it means
                        reaching customers who are actively looking for exactly what you offer.
                    </p>
                    <p className="text-muted-foreground md:text-xl/relaxed">
                        We&rsquo;re starting small and growing deliberately — building something genuinely useful for
                        local communities before expanding further.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full py-16 md:py-24 bg-[var(--vibrant-teal)]/10">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Ready to find somewhere new?
                    </h2>
                    <p className="max-w-[500px] mx-auto text-muted-foreground md:text-xl/relaxed">
                        Download To The Pub for free and discover what&rsquo;s on near you tonight.
                    </p>
                    <a
                        href="https://apps.apple.com/us/app/to-the-pub/id6763960326"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" className="bg-[var(--vibrant-teal)] hover:bg-[var(--vibrant-teal)]/90 text-white px-8">
                            Download on the App Store
                        </Button>
                    </a>
                </div>
            </section>

        </main>
    )
}
