import Airtable from "airtable";
import { NewsItem, Shardian, CommunityStat } from "../types";

const configureAirtable = () => {
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  });
};

export const fetchNewList = () =>
  fetch("/api/news")
    .then((res) => res.json())
    .then(({ data }) =>
      data.map((item: any) => ({
        title: item.title,
        imageURL: item.image?.[0].thumbnails?.large.url,
        siteName: item.siteName,
        newsURL: item.newsURL,
      }))
    );

export const getSHMNewsArticles = (): Promise<NewsItem[]> => {
  configureAirtable();
  const data: any[] = [];
  const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string);
  return new Promise((resolve, reject) => {
    base(process.env.NEXT_PUBLIC_AIRTABLE_NEWS_BASE_NAME as string)
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            const title = record.get("Title");
            const SiteName = record.get("Site Name & Date");
            const image: any = record.get("Image");
            const isPosted: any = record.get("isPosted");
            const newsURL = record.get("News URL");
            if (isPosted) {
              data.push({
                title,
                siteName: SiteName,
                imageURL: image?.[0]?.thumbnails?.large?.url,
                newsURL,
              });
            }
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }
          resolve(data);
        }
      );
  });
};

export const getSuperShardians = (): Promise<Shardian[]> => {
  configureAirtable();
  const data: Shardian[] = [];
  const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string);
  return new Promise((resolve, reject) => {
    base(process.env.NEXT_PUBLIC_AIRTABLE_SUPERSHARDEUM as string)
      ?.select({
        view: "Grid view",
      })
      ?.firstPage()
      .then((records) => {
        records.forEach(function (record) {
          const name = record.get("Name")!.toString();
          const description = record.get("Description")!.toString();
          const category = record.get("Category")!.toString();
          const image = record.get("Image");
          data.push({ name, description, category, image });
        });
        resolve(data);
      });
  });
};

export const getCommunityStats = (): Promise<CommunityStat[]> => {
  configureAirtable();
  const data: CommunityStat[] = [];
  const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string);
  return new Promise((resolve, reject) => {
    base(process.env.NEXT_PUBLIC_AIRTABLE_COMMUNITYSTATS as string)
      ?.select({
        view: "Grid view",
      })
      ?.firstPage()
      .then((records) => {
        records.forEach(function (record) {
          const key = (record.get("key") || "").toString();
          const followerCount = (record.get("followerCount") || "").toString();
          data.push({ key, followerCount });
        });
        resolve(data);
      });
  });
};
