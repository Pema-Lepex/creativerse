"use Client";

import { RenderFormattedText } from "@/utils/helpers/RenderText";
import { OurStoryContent } from "@/assets/content/home/HomeContent";
import { CommonParagraph4, Heading4 } from "@/components";

const OurStorySection: React.FC = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center py-2">
        <Heading4 className="text-primary-600">{OurStoryContent.title}</Heading4>
        <CommonParagraph4 className="mt-4 leading-relaxed whitespace-pre-line text-center">{RenderFormattedText(OurStoryContent.content)}</CommonParagraph4>
      </div>
    </section>
  );
};
export default OurStorySection;
