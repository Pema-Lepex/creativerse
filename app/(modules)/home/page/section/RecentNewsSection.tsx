import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components";
import { RecentBlog } from "@/assets/content/home/HomeSections";

const RecentNewsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={RecentBlog.eyebrow}
          title="Our Recent News &"
          highlight="Blog"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {RecentBlog.posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col border-[12px] border-white bg-white shadow-[0_0_20px_rgba(0,0,0,0.09)] transition-all duration-500"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Amber date badge (top-right), flips on hover */}
                <span className="absolute right-0 top-0 flex h-16 w-16 flex-col items-center justify-center bg-accent-500 text-center font-bold text-primary-500 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                  <span className="text-lg leading-none">
                    {post.date.split(" ")[0]}
                  </span>
                  <span className="text-xs uppercase">
                    {post.date.split(" ")[1]}
                  </span>
                </span>
              </div>

              <div className="flex flex-1 flex-col px-2 pb-3 pt-5">
                <h3 className="text-lg font-bold capitalize leading-snug text-primary-500 md:text-xl">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body-text">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 transition-colors hover:text-accent-500"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 text-accent-500 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentNewsSection;
