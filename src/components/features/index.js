import React from "react"
import talk from "../../img/icon-chat.png"
import money from "../../img/icon-money.png"
import security from "../../img/icon-security.png"
import FeatItem from "./featItem"

const features = [
  {
    title: "You are our #1 priority",
    icon: talk,
    iconAlt: "Chat Icon",
    description:
      " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    title: "More savings means higher rates",
    icon: money,
    iconAlt: "Money Icon",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    title: "Security you can trust",
    icon: security,
    iconAlt: "Security Icon",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];
export default function Features() {
  return (
    <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature, index) => {
        return (
          <FeatItem
            icon={feature.icon}
            iconAlt={feature.iconAlt}
            title={feature.title}
            description={feature.description}
            key={index}
          />
        );
      })}
    </section>
  )
}