import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">


            {/* hero */}
            <Wrapper>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                Introducing Astra AI
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>

                        <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
                            <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                                Build your next idea and ship your dream site
                            </h1>
                            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                                Zero code, maximum speed. Make professional sites easy, fast and fun while delivering best-in-class SEO, performance.
                            </p>
                            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                                <Link href="#" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                                        ✨ {"  "} Start building your dream website now!
                                    </p>
                                    <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                                        Get Started
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative flex items-center py-10 md:py-20 w-full">
                            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                                <Image
                                    src="/assets/dashboard.svg"
                                    alt="banner image"
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                    className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                                />

                                <BorderBeam size={250} duration={12} delay={9} />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* how it works */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="The Process" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Three steps to build your dream website
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Turn your vision into reality in just 3 simple steps
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                            {perks.map((perk) => (
                                <div key={perk.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                    <div className="flex items-center justify-center">
                                        <perk.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {perk.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {perk.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* features */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
                <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Features" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Discover our powerful features
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Astra offers a range of features to help you build a stunning website in no time
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-8">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start lg:items-start px-0 md:px-0">
                                    <div className="flex items-center justify-center">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {feature.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* pricing */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Pricing" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Unlock the right plan for your business
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Choose the best plan for your business and start building your dream website today
                        </p>
                    </div>
                </Container>
                <Container className="flex items-center justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
                        {pricingCards.map((card) => (
                            <Card
                                key={card.title}
                                className={cn("flex flex-col w-full border-neutral-700",
                                    card.title === "Unlimited Saas" && "border-2 border-primary"
                                )}
                            >
                                <CardHeader className="border-b border-border">
                                    <span>
                                        {card.title}
                                    </span>
                                    <CardTitle className={cn(card.title !== "Unlimited Saas" && "text-muted-foreground")}>
                                        {card.price}
                                    </CardTitle>
                                    <CardDescription>
                                        {card.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-3">
                                    {card.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 fill-primary text-primary" />
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <Link
                                        href="#"
                                        className={cn(
                                            "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
                                            card.title !== "Unlimited Saas" && "!bg-foreground !text-background"
                                        )}
                                    >
                                        {card.buttonText}
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* testimonials */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Our Customers" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            What people are saying
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            See how Astra empowers businesses of all sizes. Here&apos;s what real people are saying on Twitter
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="py-10 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {firstRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {secondRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* newsletter */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                From Idea to Launch <br /> Faster Than Ever
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Build stunning websites with Astra&apos;s intuitive drag-and-drop builder and powerful AI assistant
                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="/sign-in">
                                    Get started for free
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                </Container>
                <Container className="relative z-[999999]">
                    <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                    Join our newsletter
                                </h4>
                                <p className="text-base text-muted-foreground">
                                    Be up to date with everything about AI builder
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                    <Input
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                                    />
                                    <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    By subscribing you agree with our{" "}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

        </section>
    )
};

export default HomePage
