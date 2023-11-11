import ResumeHeader from "components/svg/resume_header";
import PdfBttnImg from "components/svg/pdf_button_img";

export default function Resume() {
  return (
    <div className="container mx-auto p-6 overflow-auto mb-10 rounded-[10px] md:text-cream dark:text-cream dark:md:text-cream w-fit backdrop-blur-sm  p-6 rounded-[10px]
    bg-cream/10 dark:bg-cocoa-dark/50">
      <div className="grid place-content-center ">
        <ResumeHeader />
      </div>
      <div className="grid place-content-center mt-2 px-4">
        {/* Education */}
        <section className="space-y-4 mb-4">
            <h2 className="text-2xl text-cocoa-dark dark:text-cream font-bold font-rubik-MonoOne">
                Education
            </h2>
            <div className="border border-stone-600 p-4 rounded-[10px] bg-cocoa-dark/80">
                <div className="flex flex-row justify-between border-b-2 border-stone-600">
                <h3 className="text-xl text-cocoa-dark dark:text-cream font-bold">
                    University of California, Riverside
                </h3>
                <h3 className="text-xl text-cocoa-dark dark:text-cream font-bold">
                    Riverside, California
                </h3>
                </div>
                <div className="flex flex-row justify-between" >
                    <h4 className="italic text-l text-cocoa-dark dark:text-cream">BS in Computer Science</h4>
                    <h4 className="italic text-l text-cocoa-dark dark:text-cream">September 2021 - December 2023</h4>
                </div>
                <p>
                <b>Relevant Coursework:</b> Data Structures and Algorithms, Machine Learning & Data Mining, Web Development, <br />
                Data Analysis Methods, Intro to Artificial Intelligence, Database Management Systems
                </p>
            </div>
            <div className="border border-stone-600 p-4 rounded-[10px] bg-cocoa-dark/80">
                <div className="flex flex-row justify-between border-b-2 border-stone-600">
                <h3 className="text-xl text-cocoa-dark dark:text-cream font-bold">
                    De Anza College
                </h3>
                <h3 className="text-xl text-cocoa-dark dark:text-cream font-bold">
                    Cupertino, California
                </h3>
                </div>
                <div className="flex flex-row justify-between" >
                    <h4 className="italic text-l text-cocoa-dark dark:text-cream">Transfered to UCR</h4>
                    <h4 className="italic text-l text-cocoa-dark dark:text-cream">August 2018 - July 2021</h4>
                </div>
            </div>
        </section> 
        {/* Skills */}
                <section className="space-y-4 mb-4">
            <h2 className="text-2xl text-cocoa-dark dark:text-cream font-bold font-rubik-MonoOne">
            Technical Skills
            </h2>
            <div className="border border-stone-600 p-4 rounded-[10px] bg-cocoa-dark/80"><b>Languages:</b> JavaScript, TypeScript, React, Python, C++, HTML, CSS, SQL</div>
            <div className="border border-stone-600 p-4 rounded-[10px] bg-cocoa-dark/80"><b>Developer Tools:</b> Git, Github, GTest</div>
            <div className="border border-stone-600 p-4 rounded-[10px] bg-cocoa-dark/80"><b>Technologies:</b> Next.js, Node.js, Express.js, TailwindCSS, PostgreSQL, MongoDB, React Native, Electron.js, Pandas,
NumPy</div>
            <div className="border border-stone-600 p-4 rounded-[10px] bg-cocoa-dark/80"><b>Management:</b> Scrum</div>
        </section> 
        {/* Experience */}
        <section className="space-y-4 mb-4">
            <h2 className="text-2xl text-cocoa-dark dark:text-cream font-bold font-rubik-MonoOne">
                Experience
            </h2>
            <div className="border border-stone-600 p-4 rounded-[10px] bg-cocoa-dark/80">
                <div className="flex flex-row justify-between border-b-2 border-stone-600">
                <h3 className="text-xl text-cocoa-dark dark:text-cream font-bold">
                    Bourns College of Engineering
                </h3>
                <h3 className="text-xl text-cocoa-dark dark:text-cream font-bold">
                    Riverside, California
                </h3>
                </div>
                <div className="flex flex-row justify-between" >
                    <h4 className="italic text-l text-cocoa-dark dark:text-cream">Undergraduate Research Assistant  </h4>
                    <h4 className="italic text-l text-cocoa-dark dark:text-cream">June 2023 - September 2023</h4>
                </div>
                <p>
                • Build a test-bench using Numpy to experiment with ways to accelerate deep learning tasks<br/>
                • Experiments a novel method of matrix multiplication that would reduce computing steps by 33%<br/>
                • Showcase findings to a UCR Seminar with other professors present
                </p>
            </div>
        </section> 
        {/* Leadership */}
        <section className="space-y-4 mb-4">
            <h2 className="text-2xl text-cocoa-dark dark:text-cream font-bold font-rubik-MonoOne">
                Leadership
            </h2>
            <div className="border border-stone-600 p-4 rounded-[10px] bg-cocoa-dark/80">
                <div className="flex flex-row justify-between border-b-2 border-stone-600">
                <h3 className="text-xl text-cocoa-dark dark:text-cream font-bold">
                    Developers' Guild
                </h3>
                <h3 className="text-xl text-cocoa-dark dark:text-cream font-bold">
                    Cupertino, California
                </h3>
                </div>
                <div className="flex flex-row justify-between" >
                    <h4 className="italic text-l text-cocoa-dark dark:text-cream">Vice President</h4>
                    <h4 className="italic text-l text-cocoa-dark dark:text-cream">2019 - 2021</h4>
                </div>
                <p>
                • Lead a redesign of club assets to create a modern and professional image, leading to an increase of new student sign ups
by 88%.<br/>
• Organized and established rules for GitHub repositories for more impactful projects leading to a reduction of junk
repositories by 25%.<br/>
• Taught computer science subjects such as Python and Web Development to members.<br/>
• Coordinated the first school Hacktoberfest with several clubs
                </p>
            </div>
        </section> 
      </div>
              {/* PDF Version*/}
              <div className="flex justify-center flex-col">
              <div className="flex justify-center">
            <a title="View PDF Version" href="https://drive.google.com/file/d/1gfzf7-u5eto_qfB4uLd2PrYLyJuh5vWg/view?usp=sharing" target="blank">
                <PdfBttnImg/>
            </a>
        </div>
        </div>
    </div>
  );
}
