import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    BookMarked,
    Calendar,
    Clock,
    Filter,
    MapPin,
    MessageSquare,
    Search,
    Star,
} from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    )
}

function FacebookIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}

export default function TheApp() {
    return (
        <main className="w-full">

            {/* Page Hero */}
            <section className="w-full py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight mb-4">
                        Everything you need for a great night out
                    </h1>
                    <p className="max-w-[680px] mx-auto text-muted-foreground md:text-xl/relaxed">
                        To The Pub is built for people who want to spend less time searching and more time out. Here&rsquo;s a closer look at what the app can do.
                    </p>
                </div>
            </section>

            {/* For Users */}
            <section id="for-users" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Discover Events That Match Your Vibe
                                </h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Whether you&rsquo;re a Social Experience Seeker or an Event-Driven Socializer, To The Pub helps you find
                                    exactly what you&rsquo;re looking for.
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2">
                                    <MapPin className="h-5 w-5 text-[var(--vibrant-teal)]" />
                                </div>
                                 <div>
                                     <h3 className="font-bold">Location-Based Discovery</h3>
                                     <p className="text-muted-foreground">Find venues and events near you, wherever you are</p>
                                </div>
                             </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2">
                                        <Search className="h-5 w-5 text-[var(--vibrant-teal)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Event-Centric Search</h3>
                                        <p className="text-muted-foreground">
                                            Find specific events like live jazz, trivia nights, or happy hours
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2">
                                        <Calendar className="h-5 w-5 text-[var(--vibrant-teal)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Real-Time Updates</h3>
                                        <p className="text-muted-foreground">See what&rsquo;s happening tonight or plan for the weekend</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href="https://apps.apple.com/us/app/to-the-pub/id6763960326" target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-[var(--vibrant-teal)] hover:bg-[var(--vibrant-teal)]/90 text-white">Download App</Button>
                                </a>
                            </div>
                        </div>
                        <div className="mx-auto flex items-center justify-center">
                            <div className="rounded-xl border border-[var(--light-gray)]/30 p-4 w-full max-w-[400px]">
                            <Tabs defaultValue="venues" className="w-full max-w-[400px]">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="venues">Open Bars</TabsTrigger>
                                    <TabsTrigger value="events">Events</TabsTrigger>
                                </TabsList>
                                <div className="grid mt-4">
                                <TabsContent forceMount value="events" className="row-start-1 col-start-1 mt-0 space-y-4 data-[state=inactive]:invisible data-[state=inactive]:pointer-events-none">
                                    <div className="rounded-lg border p-4 space-y-2 min-h-[170px]">
                                        <Badge className="bg-[var(--vibrant-teal)] hover:bg-[var(--vibrant-teal)]/90 text-xs uppercase tracking-wide">Live Music</Badge>
                                        <h4 className="font-bold">Live Jazz Night</h4>
                                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 text-[var(--vibrant-teal)]" />
                                            <span>The Blue Note</span>
                                        </div>
                                        <span className="inline-block text-xs font-medium bg-[var(--light-gray)] text-[var(--vibrant-teal)] rounded-full px-2.5 py-0.5">0.3 miles away</span>
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-4 w-4 text-[var(--vibrant-teal)] shrink-0" />
                                            <div>
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Start</p>
                                                <p className="text-sm font-bold">8:00 PM</p>
                                            </div>
                                            <span className="text-muted-foreground">→</span>
                                            <div>
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">End</p>
                                                <p className="text-sm font-bold">11:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg border p-4 space-y-2 min-h-[170px]">
                                        <Badge className="bg-[var(--vibrant-teal)] hover:bg-[var(--vibrant-teal)]/90 text-white text-xs uppercase tracking-wide">Trivia</Badge>
                                        <h4 className="font-bold">Trivia Night</h4>
                                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 text-[var(--vibrant-teal)]" />
                                            <span>The Local Tavern</span>
                                        </div>
                                        <span className="inline-block text-xs font-medium bg-[var(--light-gray)] text-[var(--vibrant-teal)] rounded-full px-2.5 py-0.5">0.8 miles away</span>
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-4 w-4 text-[var(--vibrant-teal)] shrink-0" />
                                            <div>
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Start</p>
                                                <p className="text-sm font-bold">7:00 PM</p>
                                            </div>
                                            <span className="text-muted-foreground">→</span>
                                            <div>
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">End</p>
                                                <p className="text-sm font-bold">9:15 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent forceMount value="venues" className="row-start-1 col-start-1 mt-0 space-y-4 data-[state=inactive]:invisible data-[state=inactive]:pointer-events-none">
                                    <div className="rounded-lg border p-4 space-y-2 min-h-[170px]">
                                        <div>
                                            <h4 className="font-bold">The Speakeasy</h4>
                                            <p className="text-sm text-muted-foreground">Boston, MA</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 text-[var(--vibrant-teal)]" />
                                            <span>0.5 mi away &middot; Closes 2:00 AM</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Craft Cocktails</Badge>
                                            <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Live Piano</Badge>
                                            <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Outdoor Seating</Badge>
                                        </div>
                                        <div className="flex gap-2 pt-1">
                                            <div className="rounded-md border border-[var(--light-gray)]/30 p-1.5">
                                                <InstagramIcon className="h-4 w-4 text-[var(--vibrant-teal)]" />
                                            </div>
                                            <div className="rounded-md border border-[var(--light-gray)]/30 p-1.5">
                                                <FacebookIcon className="h-4 w-4 text-[var(--vibrant-teal)]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg border p-4 space-y-2 min-h-[170px]">
                                        <div>
                                            <h4 className="font-bold">Hopworks Brewery</h4>
                                            <p className="text-sm text-muted-foreground">Portland, OR</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 text-[var(--vibrant-teal)]" />
                                            <span>1.2 mi away &middot; Closes 11:00 PM</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Craft Beer</Badge>
                                            <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Food Menu</Badge>
                                            <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Family Friendly</Badge>
                                        </div>
                                        <div className="flex gap-2 pt-1">
                                            <div className="rounded-md border border-[var(--light-gray)]/30 p-1.5">
                                                <InstagramIcon className="h-4 w-4 text-[var(--vibrant-teal)]" />
                                            </div>
                                            <div className="rounded-md border border-[var(--light-gray)]/30 p-1.5">
                                                <FacebookIcon className="h-4 w-4 text-[var(--vibrant-teal)]" />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                </div>
                            </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep-Dive */}
            <section className="w-full py-12 md:py-24 bg-[var(--charcoal-gray)]/20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Built for every kind of night out</h2>
                        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
                            Whether you know exactly what you want or you&rsquo;re open to anything, To The Pub has the tools to help you find it.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                         <div className="rounded-lg p-6 space-y-3 bg-white">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <Clock className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Open Right Now</h3>
                            <p className="text-muted-foreground">
                                See what&rsquo;s open near you in real time. Venues keep their hours up-to-date through our business dashboard, so you always know before you go.
                            </p>
                        </div>
                        <div className="rounded-lg p-6 space-y-3 bg-white">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <Filter className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Smart Filters</h3>
                            <p className="text-muted-foreground">
                                Narrow your search by what matters to you. Filter by available activities like darts, pool, or karaoke, whether a venue has food service, outdoor seating, and more.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1">
                                <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Darts</Badge>
                                <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Pool</Badge>
                                <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Outdoor Seating</Badge>
                                <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Food Service</Badge>
                            </div>
                        </div>
                        <div className="rounded-lg p-6 space-y-3 bg-white">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <Calendar className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Browse by Event Type</h3>
                            <p className="text-muted-foreground">
                                From live music and DJ nights to sports screenings, trivia, and drink specials — filter for the exact type of event you&rsquo;re in the mood for.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1">
                                <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Live Music</Badge>
                                <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Trivia</Badge>
                                <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">Happy Hour</Badge>
                                <Badge variant="outline" className="border-[var(--vibrant-teal)] text-[var(--vibrant-teal)]">DJ Night</Badge>
                            </div>
                        </div>
                        <div className="rounded-lg p-6 space-y-3 bg-white">
                            <div className="rounded-full bg-[var(--vibrant-teal)]/10 p-2 w-fit">
                                <MapPin className="h-6 w-6 text-[var(--vibrant-teal)]" />
                            </div>
                            <h3 className="text-xl font-bold">Venue Profiles</h3>
                            <p className="text-muted-foreground">
                                Every venue has a dedicated page with opening hours, venue tags, social media links, and all upcoming events — everything you need before you head out the door.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <Badge className="inline-flex border border-[var(--vibrant-teal)] text-[var(--vibrant-teal)] bg-transparent hover:bg-transparent">Coming Soon</Badge>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">We&rsquo;re just getting started</h2>
                        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
                            There&rsquo;s a lot more on the roadmap. Here&rsquo;s what&rsquo;s coming next.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-lg border border-dashed p-6 space-y-3">
                            <div className="rounded-full bg-[var(--goldenrod)]/10 p-2 w-fit">
                                <BookMarked className="h-6 w-6 text-[var(--goldenrod)]" />
                            </div>
                            <h3 className="text-xl font-bold">Log Your Rounds</h3>
                            <p className="text-muted-foreground">
                                Track every bar and pub you&rsquo;ve visited. Build your personal history and see how many spots you&rsquo;ve checked out over time.
                            </p>
                        </div>
                        <div className="rounded-lg border border-dashed p-6 space-y-3">
                            <div className="rounded-full bg-[var(--goldenrod)]/10 p-2 w-fit">
                                <MessageSquare className="h-6 w-6 text-[var(--goldenrod)]" />
                            </div>
                            <h3 className="text-xl font-bold">Community Tips</h3>
                            <p className="text-muted-foreground">
                                Leave insider tips for other users — the best seat in the house, the drink to order, or when to arrive to beat the crowd.
                            </p>
                        </div>
                        <div className="rounded-lg border border-dashed p-6 space-y-3">
                            <div className="rounded-full bg-[var(--goldenrod)]/10 p-2 w-fit">
                                <Star className="h-6 w-6 text-[var(--goldenrod)]" />
                            </div>
                            <h3 className="text-xl font-bold">Saved Favourites</h3>
                            <p className="text-muted-foreground">
                                Save your go-to venues and get notified when they post new events or specials — so you never miss out on your favourite spots.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download CTA */}
            <section className="w-full py-16 md:py-24 bg-[var(--vibrant-teal)]/10">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to find your next night out?</h2>
                    <p className="max-w-[500px] mx-auto text-muted-foreground md:text-xl/relaxed">
                        Download To The Pub for free and start discovering what&rsquo;s on near you tonight.
                    </p>
                    <a href="https://apps.apple.com/us/app/to-the-pub/id6763960326" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[var(--vibrant-teal)] hover:bg-[var(--vibrant-teal)]/90 text-white px-8">
                            Download on the App Store
                        </Button>
                    </a>
                </div>
            </section>

        </main>
    )
}
