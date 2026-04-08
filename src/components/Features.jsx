import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Features() {
  const features = [
    {
      title: "AI Code Completion",
      description:
        "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
      codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
      imagePosition: "left",
    },
    {
      title: "Automated Testing",
      description:
        "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
      codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
      imagePosition: "right",
    },
    {
      title: "Smart Debugging",
      description:
        "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
      codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
      imagePosition: "left",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent ">
              Your Complete Development
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-100 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((features, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${features.imagePosition === "right" ? "lg:flex-row-reverse" : ""} `}
            >
              {/* code section */}
              <div className="flex-1 w-full">
                <div className=" relative group ">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500"></div>
                  <div className="relative bg-gray-900/50 bacdrop-blur-sm border  border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border group-hover:border-blue-600/50 transition-all duration-300">
                    {/* ide interface */}
                    <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm ">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4 ">
                        <div className="flex items-center space-x-1 sm:space-x-2 ">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 cursor-pointer"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-300 cursor-pointer"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h -3 rounded-full bg-emerald-500 cursor-pointer"></div>
                        </div>
                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm ">
                          {features.title}
                        </span>
                      </div>
                      <div className="">
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            background:'transparent',
                            borderRadius: "10px",
                            fontSize: "0.75rem  ",
                            lineHeight: "1.4",
                            height: "100%",
                          }}
                          wrapLines={true}
                        >
                          {features.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* text section */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb">
                    {features.title}
                  </h3>
                  <p className="text-gray-300  text-xl sm:text-lg leading-relaxed">{features.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
