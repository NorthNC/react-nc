"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/components/hooks/useTranslation";

const newsItems = [
  { key: "Belgium", image: "/members/belgium-flag.jpg", detailLink: "./belgium" },
  { key: "Croatia", image: "/members/croatia-flag.jpg", detailLink: "./croatia" },
  { key: "Czech Republic", image: "/members/czech-republic-flag.jpg", detailLink: "./czech" },
  { key: "Denmark", image: "/members/danish-flag.jpg", detailLink: "./denmark" },
  { key: "Estonia", image: "/members/estonia-flag.jpg", detailLink: "./estonia" },
  { key: "Finland", image: "/members/finland-flag.jpg", detailLink: "./finland" },
  { key: "Greenland", image: "/members/greenland-flag.png", detailLink: "./greenland" },
  { key: "Hungary", image: "/members/hungarian-flag.jpg", detailLink: "./hungary" },
  { key: "Iceland", image: "/members/iceland-flag.jpg", detailLink: "./iceland" },
  { key: "Ireland", image: "/members/ireland-flag.jpg", detailLink: "./ireland" },
  { key: "Latvia", image: "/members/latvia-flag.jpg", detailLink: "./latvia" },
  { key: "Lithuania", image: "/members/lithuanian-flag.jpg", detailLink: "./lithuania" },
  { key: "Malta", image: "/members/malta-flag.png", detailLink: "./malta" },
  { key: "Netherlands", image: "/members/holland-flag.jpg", detailLink: "./netherlands" },
  { key: "Norway", image: "/members/norway-flag.jpg", detailLink: "./norway" },
  { key: "Portugal", image: "/members/portugal-flag.jpg", detailLink: "./portugal" },
  { key: "Spain", image: "/members/spanish-flag.jpeg", detailLink: "./spain" },
  { key: "Sweden", image: "/members/swedish-flag.jpg", detailLink: "./sweden" },
  { key: "United Kingdom", image: "/members/united-kingdom-flag.jpg", detailLink: "./uk" }
];

export default function NewsGrid() {
  const { t } = useTranslation("NewsGrid"); // Use the NewsGrid translations

  return (
    <section className="news">
      <h1 className="header-news">{t("header", "Our Member Countries")}</h1>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <Image src={item.image} alt={t(`countries.${item.key}.name`)} width={300} height={300} />
            <h3>{t(`countries.${item.key}.name`)}</h3>
            <p>{t(`countries.${item.key}.summary`, "Available!")}</p>
            <Link href={item.detailLink}>
              <button>{t("button", "Download Documents")}</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
