import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    ArrowRight,
    BarChart2,
    Bell,
    Bot,
    Calendar,
    Clock,
    Globe,
    LayoutDashboard,
    MapPin,
    Sparkles,
    Tag,
    Users,
} from "lucide-react"

export default function TheBusiness() {
    return (
        <main className="w-full">

            {/* Hero */}
            <section className="w-full py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-6">
                    <Badge className="inline-flex bg-[var(--goldenrod)] text-[var(--dark-sapphire)] hover:bg-[var(--goldenrod)]/90">
                        For Businesses
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
                        Your venue. Your rules.
                    </h1>
                    <p className="max-w-[640px] mx-auto text-muted-foreground md:text-xl/relaxed">
                        To The Pub puts you in control. List your bar or pub, manage your events, and reach customers
                        who are actively searching for venues just like yours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/login">
                            <Button
                                size="lg"
                                className="bg-[var(--vibrant-teal)] hover:bg-[var(--vibrant-teal)]/90 text-white px-8"
                            >
                                Get Started
                            </Button>
                        </Link>
                        <Link href="/the-app">
                            <Button size="lg" variant="outline" className="px-8">
                                See How the App Works
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* What You Control */}
            <section className="w-full py-12 md:py-24 bg-[var(--charcoal-gray)]/10">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Everything on your listing — in your hands
                        </h2>
                        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
                            From opening hours to event schedules, you decide what customers see when they find your venue.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg p-6 space-y-3 bg-white border">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <LayoutDashboard className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Venue Profile</h3>
                            <p className="text-muted-foreground">
                                Control your venue name, description, location, and social media links. Your profile is the first thing customers see.
                            </p>
                        </div>
                        <div className="rounded-lg p-6 space-y-3 bg-white border">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <Clock className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Opening Hours</h3>
                            <p className="text-muted-foreground">
                                Set your weekly hours and keep them accurate. Users rely on this to know when you&rsquo;re open before they head out.
                            </p>
                        </div>
                        <div className="rounded-lg p-6 space-y-3 bg-white border">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <Calendar className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Events</h3>
                            <p className="text-muted-foreground">
                                Post one-off or recurring events — DJ nights, quiz nights, happy hours, sports screenings, and more — directly from your dashboard.
                            </p>
                        </div>
                        <div className="rounded-lg p-6 space-y-3 bg-white border">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <Tag className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Venue Tags</h3>
                            <p className="text-muted-foreground">
                                Tag your venue with attributes like Craft Beer, Outdoor Seating, Pool, or Darts so the right crowd can filter and find you.
                            </p>
                        </div>
                        <div className="rounded-lg p-6 space-y-3 bg-white border">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <Bell className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Real-Time Updates</h3>
                            <p className="text-muted-foreground">
                                Need to post a last-minute event or change tonight&rsquo;s hours? Updates go live instantly — no waiting, no delays.
                            </p>
                        </div>
                        <div className="rounded-lg p-6 space-y-3 bg-white border">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <Users className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Wider Reach</h3>
                            <p className="text-muted-foreground">
                                Appear in discovery searches from users actively looking for what you offer — more visibility, at no cost.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Up and running in minutes
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed">
                                    Getting your venue on To The Pub is straightforward. Here&rsquo;s how it works.
                                </p>
                            </div>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="rounded-full bg-[var(--vibrant-teal)] text-white font-bold text-sm h-8 w-8 flex items-center justify-center shrink-0 mt-0.5">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Create an account</h3>
                                        <p className="text-muted-foreground">
                                            Sign up and get access to the business dashboard. No app store required — it all runs in your browser.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="rounded-full bg-[var(--vibrant-teal)] text-white font-bold text-sm h-8 w-8 flex items-center justify-center shrink-0 mt-0.5">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Set up your venue</h3>
                                        <p className="text-muted-foreground">
                                            Add your details — location, hours, atmosphere tags, and social links. Everything customers need to find and choose you.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="rounded-full bg-[var(--vibrant-teal)] text-white font-bold text-sm h-8 w-8 flex items-center justify-center shrink-0 mt-0.5">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Post your events</h3>
                                        <p className="text-muted-foreground">
                                            Add upcoming events with tags, times, and descriptions. Recurring events (like weekly trivia) can be set up once and repeat automatically.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="rounded-full bg-[var(--vibrant-teal)] text-white font-bold text-sm h-8 w-8 flex items-center justify-center shrink-0 mt-0.5">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Get found</h3>
                                        <p className="text-muted-foreground">
                                            Your listing goes live on the app immediately. Users searching in your area will start seeing your venue in results.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <Link href="/login">
                                <Button className="bg-[var(--vibrant-teal)] hover:bg-[var(--vibrant-teal)]/90 text-white">
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* Dashboard preview */}
                        <div className="rounded-xl border bg-white p-6 space-y-4 shadow-sm">
                            <div className="flex items-center justify-between pb-2 border-b">
                                <div className="flex items-center gap-2">
                                    <BarChart2 className="h-5 w-5 text-[var(--vibrant-teal)]" />
                                    <span className="font-bold">Venue Dashboard</span>
                                </div>
                                <Badge className="bg-[var(--vibrant-teal)]/10 text-[var(--vibrant-teal)] hover:bg-[var(--vibrant-teal)]/10">Live</Badge>
                            </div>
                            <div className="space-y-3">
                                <div className="rounded-lg border p-4 space-y-1">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Venue</p>
                                    <p className="font-bold">The Crown &amp; Harp</p>
                                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                        <MapPin className="h-3.5 w-3.5 text-[var(--vibrant-teal)]" />
                                        <span>Boston, MA &middot; Closes 2:00 AM</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        <Badge variant="outline" className="text-xs border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Pub</Badge>
                                        <Badge variant="outline" className="text-xs border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Darts</Badge>
                                        <Badge variant="outline" className="text-xs border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Live Music</Badge>
                                    </div>
                                </div>
                                <div className="rounded-lg border p-4 space-y-2">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Upcoming Events</p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium">Open Mic Night</span>
                                        <span className="text-muted-foreground">Fri 8:00 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium">Trivia Night</span>
                                        <span className="text-muted-foreground">Wed 7:00 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium">Happy Hour</span>
                                        <span className="text-muted-foreground">Daily 4–6 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon — Subscription + AI */}
            <section className="w-full py-12 md:py-24 bg-[var(--light-gray)]">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <Badge className="inline-flex bg-[var(--goldenrod)] text-[var(--dark-sapphire)] hover:bg-[var(--goldenrod)]/90">
                            Coming Soon
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            We&rsquo;re making it even easier
                        </h2>
                        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
                            We&rsquo;re building new tools to make managing your listing faster and smarter.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                        <div className="rounded-lg border bg-white p-6 space-y-4">
                            <div className="rounded-full bg-[var(--goldenrod)]/10 p-2 w-fit">
                                <Sparkles className="h-6 w-6 text-[var(--goldenrod)]" />
                            </div>
                            <h3 className="text-xl font-bold">Promote Your Business</h3>
                            <p className="text-muted-foreground">
                                Want more eyes on your venue? We&rsquo;re introducing paid promotion tools so you can boost your listing and events directly in the app — putting your bar in front of more people, exactly when they&rsquo;re deciding where to go.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-[var(--goldenrod)] shrink-0" />
                                    <span>Boost your venue to the top of local searches</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-[var(--goldenrod)] shrink-0" />
                                    <span>Promote individual events for greater reach</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-[var(--goldenrod)] shrink-0" />
                                    <span>Stand out when customers are choosing where to go</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg border bg-white p-6 space-y-4">
                            <div className="rounded-full bg-[var(--goldenrod)]/10 p-2 w-fit">
                                <Bot className="h-6 w-6 text-[var(--goldenrod)]" />
                            </div>
                            <h3 className="text-xl font-bold">AI-Powered Setup</h3>
                            <p className="text-muted-foreground">
                                Point us at your website and let our AI do the work. We&rsquo;re building a tool that automatically scans your site to pull in your venue details, hours, upcoming events, and more — so you spend less time on data entry.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-[var(--goldenrod)] shrink-0" />
                                    <span>Scan your existing website</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-[var(--goldenrod)] shrink-0" />
                                    <span>Auto-populate your venue profile</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-[var(--goldenrod)] shrink-0" />
                                    <span>Keep listings in sync automatically</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full py-16 md:py-24 bg-[var(--vibrant-teal)]/10">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Ready to list your venue?
                    </h2>
                    <p className="max-w-[500px] mx-auto text-muted-foreground md:text-xl/relaxed">
                        Getting on To The Pub is free. Set up your listing and start reaching new customers today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/login">
                            <Button
                                size="lg"
                                className="bg-[var(--vibrant-teal)] hover:bg-[var(--vibrant-teal)]/90 text-white px-8"
                            >
                                Get Started Free
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    )
}
