"use client";
import { text, texts } from "@/app/(main)/_components/_const/routes";

import { Card } from "@/components/card";

import { Footer } from "@/app/(main)/_components/footer";
import LandingPage from "@/app/(main)/(routes)/(home)/_landing/landing";
import CardTwo from "@/components/card-two";
import { ConverterBtn } from "../../_components/converter-btn";
import {Carousel} from "./carousel";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <LandingPage />

      <section className="flex flex-col items-center justify-center py-10 bg-[#040E1A] text-white">
        <h1 className="p-2 text-center text-5xl font-bold md:px-60 md:text-7xl">
          UNLOCKING THE POWER OF DIGITAL PAYMENTS
        </h1>
        <p className="p-2 text-center md:px-80">
          Pi Network stands at the forefront of accessibility and convenience.
          Through our innovative technology, you can effortlessly mine Pi on
          your mobile device without excessive energy consumption, making it
          sustainable and user-friendly.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {text.map((route) => (
            <Card
              key={route.title}
              icon={route.icon}
              title={route.title}
              paragraph={route.paragraph}
            />
          ))}
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:justify-items-center items-center justify-center">
          <img
            src="./pi-phone.png"
            alt="pi"
            className="p-8 md:ml-32 justify-items-end"
          />
          <div className=" self-start justify-items-start">
            <h1 className="p-2 text-center text-5xl md:text-left md:mt-8 font-bold  md:text-7xl">
              SIMPLIFY YOUR
            </h1>
            <h1 className="p-2 text-center text-5xl md:text-left font-bold  md:text-7xl">
              PAYMENT
            </h1>
            <h1 className="p-2 text-center text-5xl md:text-left font-bold  md:text-7xl">
              PROCESSES
            </h1>
            <p className="p-2 text-center md:text-left md:w-2/3">
              Pi Network prides itself on accessibility and user-friendliness.
              With our intuitive technology, you can effortlessly send and
              receive payments using Pi on your mobile device, making financial
              transactions a breeze.
            </p>
            <div className="px-2 md:p-0">
              {texts.map((text) => (
                <CardTwo
                  key={text.title}
                  icon={text.icon}
                  title={text.title}
                  paragraph={text.paragraph}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row min-h-screen items-center md:justify-center md:px-8 bg-gradient-to-r from-[#0F575A] to-[#17022C] p-2">
        <div className="flex flex-col md:w-1/2 text-white m-4">
          <h1 className=" text-center text-5xl md:text-left md:text-7xl font-bold bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text relative z-10 animate-fade-up ">
            EXCEPTIONAL REWARD
          </h1>
          <h1 className=" text-center text-5xl md:text-left md:text-7xl font-bold bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text relative z-10 animate-fade-up ">
            FOR OLD USERS
          </h1>

          <p className="text-center md:text-left md:w-2/3">
            At Pi Network, we deeply appreciate the unwavering support and
            dedication of our long-standing community members. As a token of our
            gratitude, we are thrilled to announce the launch of our exceptional
            Pi Coin rewards program, exclusively tailored for our cherished old
            users like you!
          </p>
          <div className=" md:mr-auto">
            <ConverterBtn />
          </div>
        </div>
        <div className="relative my-28">
          <img src="bg.png" alt="Base Image" className="w-full h-auto" />
          <img
            src="lady.png"
            alt="Overlay Image"
            className="absolute -top-20  left-0 z-10 "
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-screen bg-[#040E1A]">
        <div className="mt-20 mx-4">
          <img src="./person.jpg" alt="" className="rounded-xl" />
        </div>

        <div className="flex mb-8 flex-col p-2 mx-4 md:p-10 md:gap-16 md:w-2/3 md:flex-row items-start justify-center text-white mt-8 md:-mt-20 bg-blur-xl bg-gradient-to-bl from-[#0C2938]/80 to-[#0C051D] rounded-2xl">
          <div className="md:w-2/3">
            <h1 className="p-2 text-center text-2xl md:text-left font-bold md:text-4xl">
              Built for Everyone,
            </h1>
            <h1 className="p-2 pt-0 mb-2 text-center text-2xl md:text-left font-bold md:text-4xl">
              By Everyone
            </h1>
            <p className="p-2 text-center md:text-left ">
              Pi Network is not just another cryptocurrency project; it is a
              movement driven by a diverse and passionate global community. We
              recognize that the best ideas and solutions come from the
              collective intelligence of individuals worldwide. Thats why we
              have built Pi Network to be inclusive, transparent, and open to
              all.
            </p>
            <p className="p-2 text-center md:text-left ">
              Join Pi Network today and become an active participant in the
              creation of a groundbreaking ecosystem. Whether youre a developer,
              entrepreneur, or simply someone passionate about driving change,
              Pi Network offers a platform for you to make a tangible impact.
            </p>
          </div>

          <div className="flex flex-col gap-6 justify-start md:w-2/3 mt-6">
            <div className="flex flex-row gap-4 justify-center md:justify-around ">
              <img src="./g1.png" alt="" className="w-12 h-12" />
              <img src="./g2.png" alt="" className="w-12 h-12" />
              <img src="./g3.png" alt="" className="w-12 h-12" />
              <img src="./g4.png" alt="" className="w-12 h-12" />
            </div>
            <div className="">
              <h1 className="p-2 pt-0  text-center text-4xl md:text-left font-bold md:text-7xl">
                280+
              </h1>
              <h1 className="p-2 pt-0 mb-2 text-center text-2xl md:text-left font-bold md:text-5xl">
                Integrations
              </h1>
              <p className="p-2 text-center md:text-left ">
                Pi Network represents a collective vision of a fairer, more
                inclusive future. By coming together, we can revolutionize the
                way we transact, interact, and empower one another. Join Pi
                Network and be part of a movement that is changing the world,
                one transaction at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
                
      <Carousel />

      <Footer />
    </main>
  );
}
